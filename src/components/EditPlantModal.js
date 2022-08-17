import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from "react-bootstrap";
import { useEffect } from "react";
//Will need to grab the id of the specific plant that we want to edit and bring in
export const EditPlantModal = React.forwardRef(({ plants }, ref) => {
    
    return(
        <h1>Test 1, 2, 3</h1>
        // <div className="IndividualPlant container-fluid d-flex justify-content-center " ref={ref}>
        //             <div className="row">
        //             <div className="col-md-4">
        //                 <section>
        //             <div className="IndividualPlant text-left col-sm">
        //                 <Card className="IndividualPlant" key={plants.id} >
                         
        //                     <Card.Img variant="top"  src={plants.image} ></Card.Img>
        //                      <Card.Body >
        //                     <Card.Title  className="fw-bolder text-center" >
        //                      {plants.title}
        //                     </Card.Title>
        //                     <ListGroup variant="flush" >
        //                         <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span> {plants.name}</ListGroupItem>
        //                         <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> {plants.family}</ListGroupItem>
 
        //                         <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> {plants.size}</ListGroupItem>
 
        //                         <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> {plants.soil}</ListGroupItem>
 
        //                         <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> {plants.sun}</ListGroupItem>
 
        //                         <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> {plants.hardiness}</ListGroupItem>
        //                         <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> {plants.water}</ListGroupItem>
 
 
        //                     </ListGroup>
                            
        //                     </Card.Body>
        //                 </Card>
        //              </div>
        //              </section>
        //             </div>
        //             </div>
        //         </div>
    );
});
//export default EditPlantModal;