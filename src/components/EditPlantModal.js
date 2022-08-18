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
        <>
        <Modal show={showAddModal} onHide={handleAddClose} class="modal">
        <Modal.Header closeButton>
            <Modal.Title>Add Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section>
    <div >
        <Card className="IndividualPlantModal" id="addModal"  >
            <div>
            <Card.Img variant="top" >
            
            </Card.Img>
            </div>
             <Button className="position-absolute top-0 end-0" onClick = {() => { handleImageShow(); handleAddClose();}} ><span>Upload Image   </span><BsImage></BsImage></Button> 
             
             <Card.Body >
            
            <ListGroup variant="flush" >
            <ListGroupItem><span style={{fontWeight:'bold'}}> Title:</span>
                <div>
                <input class="editAdd" type="text" onChange={(event)=> setPlantTitle(event.target.value)}></input>
                </div>
                 </ListGroupItem>
                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span>
                <div>
                <input class="editAdd" type="text" onChange={(event)=> setPlantName(event.target.value)}></input>
                </div>
                 </ListGroupItem>
                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                <div>
                <input class="editAdd" type="text" onChange={(event)=> setPlantFamily(event.target.value)}></input>
                </div>
                </ListGroupItem>

                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                <div>
                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSize(event.target.value)}>
                    <option value="1-3 inches">1-5 inches</option>
                    <option value="4-7 inches">4-7 inches</option>
                    <option value="8-12 inches">8-11 inches</option>
                    <option value="1-1.5 feet">1-1.5 feet</option>
                    <option value="1.5-2 feet">1.5-2 feet</option>
                    <option value="2-2.5 feet">2-2.5 feet</option>
                    <option value="2.5-3 feet">2.5-3 feet</option>
                    <option value="3+ feet">3+ feet</option>
                </select>
                </div>
                </ListGroupItem>

                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> 
                <div>
                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSoil(event.target.value)}>
                    <option value="Clay">Clay</option>
                    <option value="Sandy">Sandy</option>
                    <option value="Silty">Silty</option>
                    <option value="Peaty">Peaty</option>
                    <option value="Chalky">Chalky</option>
                    <option value="Loamy">Loamy</option>
                </select>
                </div>
                </ListGroupItem>
                
                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> 
                <div >
                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSun(event.target.value)}>
                    <option value="Direct light">Direct light</option>
                    <option value="Bright indirect light">Bright indirect light</option>
                    <option value="Medium indirect light">Medium indirect light</option>
                    <option value="Low light">Low light</option>
                </select>
                </div>
                </ListGroupItem>
              
                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                <div>
                <select id="hardiness" class="form-select" aria-label="Default select example"  onSelect={(event)=> setPlantHardiness(event.target.value)}>

                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
                </div>
                </ListGroupItem>
                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> 
                <div>

                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantWater(event.target.value)}>
                    <option value="Daily">Daily</option>
                    <option value="3-5 times per week">3-5 times per week</option>
                    <option value="1-2 times per week">1-2 times per week</option>
                    <option value="2 times per month">2 times per month</option>
                    <option value="1 time per month">1 time per month</option>
                    <option value="Never">Never</option>
                </select>
                </div>
                </ListGroupItem>


            </ListGroup>
           
            </Card.Body>
        </Card>
        
     </div>
     </section>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={()=>{handleAddClose(); createPlant();}}>
        Save Plant
        </Button>
        </Modal.Footer>
    </Modal>
    <Modal show={showImageModal} onHide = {handleImageClose} class="modal">
        <Modal.Header closeButton>
            <Modal.Title>Upload Plant Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <UploadImage onChange={(event)=> {setPlantImage(event.target.value)}}/> 
            <Button onClick={() => { handleImageClose(); handleAddShow();}}>Save Image</Button>
        </Modal.Body>
    </Modal>
    </>
    );
});
//export default EditPlantModal;