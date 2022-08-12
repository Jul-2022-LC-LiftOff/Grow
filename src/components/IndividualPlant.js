import React from "react";
import plantOne from "../assets/plantOne.jpg";
import plantThree from "../assets/plantThree.jpg";
import plantFour from "../assets/plantFour.jpg";

import ".//individual-style.css";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';

const IndividualPlant = ({plantData})=>{
// const IndividualPlant = (props)=> {
//     const cardInfo =[
//         {id:0,image:"", title:"Sally", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
//         {id:1,image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
//         {id:2,image:"../assets/plantOne.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
//         {id:3,image:"../assets/plantOne.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
//         {id:4,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
//         {id:5,image:"../assets/plantThree.jpg", title:"Sally", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
//         {id:6,image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
//         {id:7,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
//         {id:8,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
//         {id:9,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"}

//     ];
   
        return(
            
            //  <div className="IndividualPlant container-fluid d-flex justify-content-center ">
            //         <div className="row">
                    // {cardInfo.map((index)=>
                    //going to need to make this its own component so that when I call this into the modal it doesn't contain the map
                    <div className="col-md-4">
                        <section>
                    <div className="IndividualPlant text-left col-sm">
                        <Card className="IndividualPlant" key={plantData.id} >
                         
                            <Card.Img variant="top"  src={plantData.image} ></Card.Img>
                             <Card.Body >
                            <Card.Title  className="fw-bolder text-center" >
                             {plantData.title}
                            </Card.Title>
                            <ListGroup variant="flush" >
                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span> {plantData.name}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> {plantData.family}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> {plantData.size}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> {plantData.soil}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> {plantData.sun}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> {plantData.hardiness}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> {plantData.water}</ListGroupItem>
 
 
                            </ListGroup>
                            <div className="text-end">
                            <button type="button" class="btn btn-secondary btn-sm">Edit Plant</button>
                            </div>
                            </Card.Body>
                        </Card>
                     </div>
                     </section>
                    </div>
                //     )}
                //     </div>
                // </div>
                
                
              
        );
      
}
export default IndividualPlant;