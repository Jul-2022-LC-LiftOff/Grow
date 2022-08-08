import React from "react";
import plantOne from "../assets/plantOne.jpg"
import plantThree from "../assets/plantThree.jpg";
import plantFour from "../assets/plantFour.jpg";

import ".//individual-style.css";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
const IndividualPlant = (props)=> {
    const cardInfo =[
        {image:{plantThree}, title:"Sally", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
        {image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
        {image:{plantFour}, title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"}
    ];
    const renderCard=(card,index) => {
        return(
        <section>
            <div className="container-fluid d-flex justify-content-center ">
               <div className="row">
                   <div className="col-md-4">
                   <div className="IndividualPlant text-left col-sm">
                       <Card className="IndividualPlant" key={index}>
                           <Card.Img variant="top" src={card.image}></Card.Img>
                            <Card.Body >
                           <Card.Title  className="fw-bolder text-center" >
                            {card.title}
                           </Card.Title>
                           <ListGroup variant="flush " >
                               <ListGroupItem>{card.name}</ListGroupItem>
                               <ListGroupItem>{card.family}</ListGroupItem>

                               <ListGroupItem>{card.size}</ListGroupItem>

                               <ListGroupItem>{card.soil}</ListGroupItem>

                               <ListGroupItem>{card.sun}</ListGroupItem>

                               <ListGroupItem>{card.hardiness}</ListGroupItem>
                               <ListGroupItem>{card.water}</ListGroupItem>


                           </ListGroup>
                           </Card.Body>
                       </Card>
           
                   </div>
                   </div>
                   
               </div>
           </div>
       
       </section>
        );
    };

    return<div className="App">{cardInfo.map(renderCard)}</div>
};
export default IndividualPlant;