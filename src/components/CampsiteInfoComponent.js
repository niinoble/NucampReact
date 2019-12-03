import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import { CAMPSITES } from '../shared/campsites';
import Directory from './DirectoryComponent'

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsite: CAMPSITES
        };

    }
   

    renderCampsite(campsite) {
        
        return (
            <div className="col-md-5 m-1">
                
                <Card>
                    <CardImg src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );


    }
    /*renderComments(comments){
        if ()
    }
*/

    render() {


        if (this.props.campsite) {

            return (
                <div className="row">
                    {this.renderCampsite(this.state.campsite)}
                </div>
            )
        }
        return <div></div>



    }

}

export default CampsiteInfo;