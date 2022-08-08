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
            <Card >
                <Card.Img variant="top" src={plantOne}></Card.Img>
                <Card.Body >
                    <Card.Title class="text-center" className="fw-bolder text-center" >
                        Jimmy the Plant
                    </Card.Title>
                    <ListGroup variant="flush" >
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
             {/* <div  >
                <img src={plantOne} alt="Plant is still growing!" class="rounded" col-sm className="img-fluid IndividualPlant"></img>
             </div>
             <div className="IndividualPlant-body text-dark">
                <h4 className="IndividualPlant-title text-left">James</h4>
                <div className="IndividualPlant-text text-secondary justify-content-left">
                    <p style="display:inline">Name: </p><p>James The Plant</p>
                    <p>Familky: <p>Plantius Leafius</p></p>
                    <p>Mature Size: <p>Pretty big</p></p>
                    <p>Soil type: <p>The brown kind</p></p>
                    <p>Sun Exposure: <p>Would be nice</p></p>
                    <p>Hardiness: <p>Kinda wimpy</p></p>
                    <p>Water: <p>His favorite beverage</p></p>
                </div>
             </div> */}
        </div>
        </section>
           
    );
};
export default IndividualPlant;