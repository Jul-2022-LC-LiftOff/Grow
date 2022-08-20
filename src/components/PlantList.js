import React, { useEffect, useState } from "react";
import PlantDataService from "../services/PlantDataService";
import { Button } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import {IndividualPlant} from "../components/IndividualPlant";
import { BsFillTrashFill } from "react-icons/bs";
import {doc, updateDoc, addDoc, collection} from 'firebase/firestore';

const PlantList = ({getPlantId, showEdit}) =>{
    const [plants, setPlants] = useState([]);
    useEffect(()=>{
        getPlants();
    },[]);

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
    return(
        <div>
        <div className="mb-2">
        <Button variant="dark edit" onClick={getPlants}>
          Refresh Garden
        </Button>
      </div>
     <div className="IndividualPlant container-fluid d-flex justify-content-center ">
               
                 <div className="row">
                 {plants.map((doc)=>{
         return(
             <div id="container" className="col-md-4">
             <IndividualPlant 
                 plantData={doc} 
                 key={doc.title} 
                 id="card"
                 />
                 <div class="buttons">
                         <div class="button-trash">
                         <button className="btn btn-light" onClick = {(e)=> confirmDelete(doc.id)}><BsFillTrashFill></BsFillTrashFill></button>
                         </div>
                         <div class="button-edit">
                        <button className="btn btn-light" onClick ={(e) => {getPlantId(doc.id); showEdit();}}><BsFillPencilFill></BsFillPencilFill></button>
                         </div>
                         </div>
                 </div>
         
          )
          
     })}
     </div>
     </div>
     </div>
    );
};

export default PlantList;