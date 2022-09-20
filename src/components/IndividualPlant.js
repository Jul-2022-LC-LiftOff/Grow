import React from "react";
import { Card } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import classes from ".//IndividualPlantStyle.module.css";
import ImageUnavailable from "../assets/ImageUnavailable.png";

export const IndividualPlant = ({plantData, getIdAndEdit, deleteThePlant})=>{
    
    const displayWaterDays = ()=>{
        var string = "";
        for(let i=0; i<plantData.waterDay.length;i++){
            if(plantData.waterDay.length === 1){
                string += plantData.waterDay[i];
            }
            else if(plantData.waterDay.length !== (i+1)){
            string += (plantData.waterDay[i] + ", ");
            }else{
                string += ("and " + plantData.waterDay[i]);
            }
        }
        return string;
    }
    const imageHandler = ()=>{
        if(plantData.image === "" || plantData.image === undefined){
                return ImageUnavailable;
            }else{
            return plantData.image;
        }
    }
    
    return(
  
                    <div className={classes.IndividualPlantDiv}>
                        <Card className={classes.IndividualPlantCard} key={plantData.id} >
                            <div className={classes.plantImageContainer}>
                            <Card.Img variant="top" className={classes.plantImage} src= {imageHandler()}></Card.Img>
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

                                <ListGroupItem className={classes.bottomOfCard}><span style={{fontWeight:'bold'}}>Watering Days:</span> {displayWaterDays()}</ListGroupItem>
    
 
                            </ListGroup>
                        
                            </Card.Body>
                            <div class={classes.buttons}>
                        <div class={classes.buttonTrash}>
                        <button className="btn btn-light" onClick = {deleteThePlant}><BsFillTrashFill></BsFillTrashFill></button>
                        </div>
                        <div class={classes.buttonEdit}>
                       <button className="btn btn-light" onClick ={getIdAndEdit}><BsFillPencilFill></BsFillPencilFill></button>
                       
                        </div>
                        </div>
                        </Card>
                    </div>
                    );
};


