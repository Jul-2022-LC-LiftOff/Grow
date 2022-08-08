import React from "react";
import plantOne from "../assets/plantOne.jpg"
import ".//individual-style.css";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
const IndividualPlant = (props)=> {
    return(
        <section>
        <div className="IndividualPlant text-left col-sm">
            <Card className="IndividualPlant">
                <Card.Img variant="top" src={plantOne}></Card.Img>
                <Card.Body >
                    <Card.Title  className="fw-bolder text-center" >
                        Jimmy the Plant
                    </Card.Title>
                    <ListGroup variant="flush " >
                        <ListGroupItem>Name: Monstera Deliciosa</ListGroupItem>
                        <ListGroupItem>Family: Araceae</ListGroupItem>

                        <ListGroupItem>Mature Size: 10'-15'</ListGroupItem>

                        <ListGroupItem>Soil Type: Potting soil with great drainage</ListGroupItem>

                        <ListGroupItem>Sun Exposure: 5-8 hours per day of direct sunlight</ListGroupItem>

                        <ListGroupItem>Hardiness: Zones 10-12</ListGroupItem>
                        <ListGroupItem>Water: Water once every 1-2 weeks</ListGroupItem>


                    </ListGroup>
                </Card.Body>
            </Card>
            
        </div>
        </section>
           
    );
};
export default IndividualPlant;