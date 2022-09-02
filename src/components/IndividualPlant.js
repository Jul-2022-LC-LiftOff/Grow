import React from "react";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import UploadImage from "./UploadImage";
import Button from 'react-bootstrap/Button';
import ".//individual-style.css";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
import {BsFillImageFill} from "react-icons/bs";
import ImageUnavailable from "../assets/ImageUnavailable.png";

export const IndividualPlant = ({plantData, openImageModal})=>{

    
    return(
  
                    <div className="IndividualPlant text-left col-sm">
                        <Card className="IndividualPlant" key={plantData.id} >
                            <div className="plantImageContainer">
                            <Card.Img variant="top" className="plantImage" src= {plantData.image !== "" || plantData.image !== null ? plantData.image : ImageUnavailable}></Card.Img>
                            </div>
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
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Watering Time:</span> {plantData.waterTime}</ListGroupItem>

                                <ListGroupItem><span style={{fontWeight:'bold'}}>Watering Days:</span> {plantData.waterDay}</ListGroupItem>

 
 
                            </ListGroup>
                        
                            </Card.Body>
                        </Card>
                    </div>
                    );
};


