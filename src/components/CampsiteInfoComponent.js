import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Input, Label, Row, Col
} from 'reactstrap'

import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';



const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);

    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));


    }
    render() {
        return (
            <div>

                <Button outline type="submit" outline onClick={this.toggleModal}>
                    <i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>

                        <LocalForm onSubmit={values => this.handleSubmit(values)}>

                            <Row className="group">
                                <Label htmlFor="rating" md={12}>rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="group">
                                <Label htmlFor="yourName" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}

                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="group">
                                <Label htmlFor="text" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".text" id="text" name="text"
                                        rows="8"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="group">
                                <Col md={{ size: 6 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>


                        </LocalForm>

                    </ModalBody>
                </Modal>




            </div>
        )
    }
}




function RenderCampsite({ campsite }) {

    return (
        <div className="col-md-5 m-1">

            <Card>
                <CardImg src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );


}

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => <div key={comments.id}>
                    {comment.text}<br />
                    {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                </div>)}
                <CommentForm />
            </div>
        )
    }
    return <div />;
}

function CampsiteInfo(props) {


    if (props.campsite) {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>

            </div>
        );
    }
    return <div />



}



export default CampsiteInfo;