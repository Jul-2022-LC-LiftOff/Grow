import React from "react";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import plantThree from "../assets/plantThree.jpg";
import UploadImage from "./UploadImage";
import Button from 'react-bootstrap/Button';
import { BsFillPencilFill } from "react-icons/bs";
import {BsImage } from "react-icons/bs"
import ".//individual-style.css";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
export const IndividualPlant = ({plantData})=>{
const [showEditModal, setShowEditModal] = useState(false);
const handleEditClose = () => setShowEditModal(false);
const handleEditShow = () => setShowEditModal(true);
const [showImageModal, setShowImageModal] = useState(false);
const handleImageClose = () => setShowImageModal(false);
const handleImageShow = () => setShowImageModal(true);
        return(
                    <div className="col-md-4">
                        <section>
                    <div className="IndividualPlant text-left col-sm">
                        <Card className="IndividualPlant" key={plantData.id} >
                         
                            <Card.Img variant="top"  src= {plantThree}></Card.Img>
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
                            {/* <Button type="button" className="btn btn-secondary btn-sm" onClick = {handleShow}>Edit Plant</Button> */}
                            <Button onClick = {handleEditShow}><BsFillPencilFill></BsFillPencilFill></Button>
                            </div>
                            </Card.Body>
                        </Card>
                        
                     </div>
                     </section>
                     <div class="modalBackground">
                     <Modal show={showEditModal} onHide={handleEditClose} class="modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Edit {plantData.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <section>
                    <div className="IndividualPlantModal text-left col-sm">
                        <Card className="IndividualPlantModal" key={plantData.id} >
                         
                            <Card.Img variant="top"  src= {plantThree}>
                            
                            </Card.Img>
                             <Button className="position-absolute top-0 end-0" onClick = {() => { handleImageShow(); handleEditClose();}} ><BsImage></BsImage></Button> 
                             
                             <Card.Body >
                            
                            <ListGroup variant="flush" >
                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span>
                                <input type="text" placeholder={plantData.name}></input>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                                <input type="text" placeholder={plantData.family}></input>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                                <input type="text" placeholder={plantData.size}></input>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> 
                                <input type="text" placeholder={plantData.soil}></input>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> 
                                <input type="text" placeholder={plantData.sun}></input>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                                <input type="text" placeholder={plantData.hardiness}></input>
                                </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> 
                                <input type="text" placeholder={plantData.water}></input>
                                </ListGroupItem>
 
 
                            </ListGroup>
                            <div className="text-end">
                            </div>
                            </Card.Body>
                        </Card>
                        
                     </div>
                     </section>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={handleEditClose}>
                        Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </div>
                    <Modal show={showImageModal} onHide = {handleImageClose} class="modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Upload Plant Image</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UploadImage/> 
                            <Button onClick={() => { handleImageClose(); handleEditShow();}}>Save Image</Button>
                        </Modal.Body>
                    </Modal>
                    </div>
                    );
      
};
