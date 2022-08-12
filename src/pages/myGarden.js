import React from "react";
import {IndividualPlant} from "../components/IndividualPlant";
import { useState, useEffect } from "react";
export const MyGarden=()=>{

    const[plants,setPlants]= useState([]);
    const ref = React.createRef();
    
useEffect(()=>{
    //get plant data from database later, using array as dummy data
    
    let plantData;
    plantData=[{id:0,image:"", title:"Sally 1", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
            {id:1,image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
            {id:2,image:"../assets/plantOne.jpg", title:"Gwendolynn", name:"Dracaena trifasciatas",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:3,image:"../assets/plantOne.jpg", title:"Gwendolynn 2", name:"Dracaena trifasciatat",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:4,image:"../assets/plantFour.jpg", title:"Gwendolynn 3", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:5,image:"../assets/plantThree.jpg", title:"Sally", name:"Ficus lyratas",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
            {id:6,image:"../assets/plantOne.jpg", title:"Jimmy the Plant 2", name:"Monestera Deliciosat",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
            {id:7,image:"../assets/plantFour.jpg", title:"Gwendolynn 5", name:"Dracaena trifasciatah",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:8,image:"../assets/plantFour.jpg", title:"Gwendolynn 6", name:"Dracaena trifasciatak",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:9,image:"../assets/plantFour.jpg", title:"Gwendolynn 7", name:"Dracaena trifasciatal",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"}];
    
    setPlants(plantData);
    
},[]);

return(
    
        <div className="IndividualPlant container-fluid d-flex justify-content-center ">
                    <div className="row">
        {plants.map((plant)=>{
            return(
            <IndividualPlant 
            plantData={plant} 
            key={plant.title} 
            id={plant.id}
            />
             )
        })}
        </div>
        </div>
)
};
export default MyGarden;

