import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IndividualPlant from './individualPlant';

//Will need to grab the id of the specific plant that we want to edit and bring in
function individualPlantModal(){
    return(
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Specific Plant Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
        </Modal.Dialog>
    )
}