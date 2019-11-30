import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'


class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
   



    render() {
        /**

You can now delete the rest of the renderSelectedCampsite method from the Directory component. 
Inside the CampsiteInfo component's render() method, inside the empty <div> 
with the row class you set up earlier, call the renderCampsite method (remember to use this)
 and pass the campsite to it.
Check your app in your browser. Make sure that when you click a campsite from the Directory, 
you see a Card appear at the bottom with the campsite information. */
        return(
            <div className ="col-md-5 m-1">
                if () {
            return (
                <Card>
                    <CardImg src = {campsite.image} alt ={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
               
            );
        }
        return <div />
            
            </div>
        )
    }

}

export default CampsiteInfo;