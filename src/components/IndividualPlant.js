import React from "react";
import plantOne from "../assets/plantOne.jpg";
import plantThree from "../assets/plantThree.jpg";
import plantFour from "../assets/plantFour.jpg";

import ".//individual-style.css";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
const IndividualPlant = (props)=> {
    
    // const renderCard=(card,id) => {
        return(//going to need to make this its own component so that when I call this into the modal it doesn't contain the map
                    <div className="col-md-4">
                        <section>
                    <div className="IndividualPlant text-left col-sm">
                        <Card className="IndividualPlant" key={props.id} >
                         
                            <Card.Img variant="top"  src={plantOne} ></Card.Img>
                             <Card.Body >
                            <Card.Title  className="fw-bolder text-center" >
                             {props.title}
                            </Card.Title>
                            <ListGroup variant="flush" >
                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span> {props.name}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> {props.family}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> {props.size}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> {props.soil}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> {props.sun}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> {props.hardiness}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> {props.water}</ListGroupItem>
                            </ListGroup>
                            <div className="text-end">
                            <button type="button" class="btn btn-secondary btn-sm">Edit Plant</button>
                            </div>
                            </Card.Body>
                        </Card>
                     </div>
                     </section>
                    </div>
                    
                   
                
                
              
        );
        
    

    {/* return<div className="grid">{cardInfo.map(renderCard)}</div>
    // const renderCard=(card,id) => { */}
    {/* //     return(
           
    //                <div className="col-md-4">
    //                <div className="IndividualPlant text-left col-sm">
    //                    <Card className="box" key={card.id} >
                        
    //                        <Card.Img variant="top" src={card.image}></Card.Img>
    //                         <Card.Body >
    //                        <Card.Title  className="fw-bolder text-center" >
    //                         {card.title}
    //                        </Card.Title>
    //                        <ListGroup variant="flush" >
    //                            <ListGroupItem>{card.name}</ListGroupItem>
    //                            <ListGroupItem>{card.family}</ListGroupItem>

    //                            <ListGroupItem>{card.size}</ListGroupItem>

    //                            <ListGroupItem>{card.soil}</ListGroupItem>

    //                            <ListGroupItem>{card.sun}</ListGroupItem>

    //                            <ListGroupItem>{card.hardiness}</ListGroupItem>
    //                            <ListGroupItem>{card.water}</ListGroupItem>


    //                        </ListGroup>
    //                        </Card.Body>
    //                    </Card>
    //                 </div>
    //                </div>
                
               
    //     );
        
    // };

    // return<div className="grid">{cardInfo.map(renderCard)}</div>
// }; */}
}
export default IndividualPlant;