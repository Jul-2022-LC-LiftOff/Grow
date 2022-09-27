import React, { useEffect, useState } from "react";
import PlantDataService from "../services/PlantDataService";
import { Button } from "react-bootstrap";
import {IndividualPlant} from "../components/IndividualPlant";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { storage } from "../firebase-config";
import { ref, deleteObject, getMetadata } from "firebase/storage";
import plantsUnavailable from "../assets/plantsUnavailable.png";
import plantNotFound from "../assets/plantNotFound.png";
import classes from ".//PlantListStyle.module.css";
import {doc, getDoc, setDoc} from "firebase/firestore";


const PlantList = ({getPlantId, showEdit, filteredGarden, userId, updateTrigger, updateVal,deleteAlert }) => {
    const [plants, setPlants] = useState([]);
    const [plantImage, setPlantImage] = useState("");

    useEffect(()=>{

        // console.log(userId);
        // console.log(filteredGarden);

    },[userId, filteredGarden]);



    // this is for decreasing plantCount
    const decreasCount = async (userId) => {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap) {

            let plantNum = userSnap.data().plantCount;       
            setDoc(userRef, {plantCount: plantNum - 1}, {merge: true});

        }
        
    }

    const deleteHandler = async (id) =>{
        console.log(userId);
        await PlantDataService.deletePlant(id, userId);

        decreasCount(userId);
        updateTrigger(updateVal + 1);

        deleteAlert();
    };

    // const confirmDelete = (id) =>{
    //     const confirmed = window.confirm("Are you sure you want to delete this plant?");
    //     if(confirmed){
    //         deleteHandler(id);
    //     }
    // }

    const backgroundImageHandler =()=>{
        if(filteredGarden.length===0 ){
            return plantNotFound;
        }
        
        // else if(plants.length===0){
        //     return plantsUnavailable;
        // }
    }
    
    // console.log(filteredGarden)

    return(
        <div className={classes.backgroundPlants}>

            <div className={`${classes.IndividualPlantList} container-fluid`}>
                <img className={classes.plantNotFoundImage} src={backgroundImageHandler()}/>

                    <div className="row">
                        {filteredGarden.map((doc)=>{

                        return(
                            <div id="container" className={`col-md-4 d-flex align-items-stretch ${classes.PlantCard}`} >
                            <IndividualPlant 
                                plantData={doc} 
                                key={doc.title} 
                                id="card"
                                getIdAndEdit={(e) => {getPlantId(doc.id); showEdit();}}
                                deleteThePlant={
                                    (e)=> {
                                        const confirmed = window.confirm("Are you sure you want to delete this plant?");
                                        if(confirmed){
                                            // deleteAlert();
                                        if(doc.image !== ""){
                                        const imageUrl = ref(storage, doc.image);
                                        getMetadata(imageUrl)
                                        .then((metadata) => {
                                            const storageRef = ref(storage, `files/${imageUrl.name}`);
                                            deleteObject(storageRef).then(()=>{
                                                deleteHandler(doc.id);
                                                console.log("IMAGE DELETED");
                                            }).catch((error)=>{
                                                console.log(error);
                                            })
                                        })
                                        .catch((error) => {console.log(error)});
                                    }else{
                                        deleteHandler(doc.id);
                                    }
                                    }
                                    }}
                                />
                                </div>
                        )
                        
                        })}
                    </div>
        
        
        
            </div>

        </div>
    );
};
export default PlantList;