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
        {id:0,image:"", title:"Sally", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
        {id:1,image:'../assets/plantOne.jpg', title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
        {id:2,image:{plantFour}, title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
        {id:3,image:{plantFour}, title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
        {id:4,image:{plantFour}, title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
        {id:5,image:{plantThree}, title:"Sally", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
        {id:6,image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
        {id:7,image:{plantFour}, title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
        {id:8,image:{plantFour}, title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
        {id:9,image:{plantFour}, title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"}

    ];
    // const renderCard=(card,id) => {
        return(
            
             <div className="IndividualPlant container-fluid d-flex justify-content-center ">
                    <div className="row">
                    {cardInfo.map((index)=>
                    <div className="col-md-4">
                        <section>
                    <div className="IndividualPlant text-left col-sm">
                        <Card className="IndividualPlant" key={index.id} >
                         
                            <Card.Img variant="top" src={require({index.image})}></Card.Img>
                             <Card.Body >
                            <Card.Title  className="fw-bolder text-center" >
                             {index.title}
                            </Card.Title>
                            <ListGroup variant="flush" >
                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span> {index.name}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> {index.family}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> {index.size}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> {index.soil}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> {index.sun}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> {index.hardiness}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> {index.water}</ListGroupItem>
 
 
                            </ListGroup>
                            </Card.Body>
                        </Card>
                     </div>
                     </section>
                    </div>
                    )}
                    </div>
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