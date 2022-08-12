import React from "react";
import plantOne from "../assets/plantOne.jpg";
import plantThree from "../assets/plantThree.jpg";
import plantFour from "../assets/plantFour.jpg";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import MyGarden from "../pages/MyGarden";
import ".//individual-style.css";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
import EditPlantModal from "./EditPlantModal";
export const IndividualPlant = ({plantData})=>{
const [showEditModal, setShowEditModal] = useState(false);
const handleClose = () => setShowEditModal(false);
const handleShow = () => setShowEditModal(true);
   
        return(
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
                            <Button type="button" className="btn btn-secondary btn-sm" onClick = {handleShow}>Edit Plant</Button>
                            </div>
                            </Card.Body>
                        </Card>
                        
                     </div>
                     </section>
                     <Modal show={showEditModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                         Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </div>
                //     )}
                //     </div>
                // </div>
                
                
              
        );
      
}
//export default IndividualPlant;