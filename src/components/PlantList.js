import React, { useEffect, useState } from "react";
import PlantDataService from "../services/PlantDataService";
import { Button } from "react-bootstrap";
import {IndividualPlant} from "../components/IndividualPlant";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { db } from "../firebase-config";
import { storage } from "../firebase-config";
import { ref, deleteObject, getMetadata } from "firebase/storage";
import plantsUnavailable from "../assets/plantsUnavailable.png";
import plantNotFound from "../assets/plantNotFound.png";
import classes from ".//PlantListStyle.module.css";
// import "./individual-style.css";


const PlantList = ({getPlantId, showEdit, filteredGarden}) =>{
    const [plants, setPlants] = useState([]);
    const [plantImage, setPlantImage] = useState("");

    useEffect(()=>{
        // getPlants();
    },[]);
    // componentDidMount(()=>{
    //     getPlants();
    // })
    

    const getPlants = async () => {
        const data = await PlantDataService.getAllPlants();
        setPlants(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    };

    const deleteHandler = async (id) =>{
       

        await PlantDataService.deletePlant(id);
        getPlants();
    };
    const confirmDelete = (id) =>{
        const confirmed = window.confirm("Are you sure you want to delete this plant?");
        if(confirmed){
            deleteHandler(id);
           
        }
    }

    // I comment the code block out to disable the function so it doesnt do anything for debuging
    const backgroundImageHandler =()=>{
        // if(filteredGarden.length===0 ){
        //     return plantNotFound;
        // }else if(plants.length===0){
        //     return plantsUnavailable;
        // }
    }


    // this is for preventing component getting undefined pass down to jsx causing errors
    if (filteredGarden == undefined) {
        console.log("null check fired");
        filteredGarden = [""];
    }

    
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