import React, { useEffect, useState } from "react";
import PlantDataService from "../services/PlantDataService";
import { Button } from "react-bootstrap";
import {IndividualPlant} from "../components/IndividualPlant";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

import { db } from "../firebase-config";
import { storage } from "../firebase-config";
import { ref, deleteObject, getMetadata } from "firebase/storage";
const PlantList = ({getPlantId, showEdit}) =>{
    const [plants, setPlants] = useState([]);
    const [plantImage, setPlantImage] = useState("");
    useEffect(()=>{
        getPlants();
    },[]);

  

    const getPlants = async () => {
        const data = await PlantDataService.getAllPlants();
        setPlants(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    };

    const deleteHandler = async (id) =>{
    //    

        await PlantDataService.deletePlant(id);
        getPlants();
    };
    const confirmDelete = (id) =>{
        const confirmed = window.confirm("Are you sure you want to delete this plant?");
        if(confirmed){
            deleteHandler(id);
           
        }
    }
    
    return(
        <div>
        <div className="mb-2">
        <Button variant="dark edit" onClick={getPlants}>
          Refresh Garden
        </Button>
      </div>
     <div className="IndividualPlant container-fluid ">
               
                 <div className="row">
                 {plants.map((doc)=>{
          return(
            <div id="container" className="col-md-4 d-flex align-items-stretch">
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