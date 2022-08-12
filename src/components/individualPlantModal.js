import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
//Will need to grab the id of the specific plant that we want to edit and bring in
function IndividualPlantModal(){
    //do not pass in props, just directly pass in the object that we chose 
    const[showModal, setShowModal] = useState(false);
    const openModal = () =>{
        setShowModal(prev=>!prev)
    }
    
    return(
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Form>
                        <Form.Group controlId={props.id}>
                            <Form.Control 
                            as="textarea"
                            multiple
                            value={props.title}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    Specific Plant Name
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="IndividualPlant container-fluid d-flex justify-content-center ">
                    <div className="row">
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
                            
                            </Card.Body>
                        </Card>
                     </div>
                     </section>
                    </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal.Dialog>
    )
}
export default IndividualPlantModal;