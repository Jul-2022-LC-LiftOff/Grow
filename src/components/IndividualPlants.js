
import React,{Component} from "react";
import IndividualPlant from "./IndividualPlant";
import ".//individual-style.css";
class IndividualPlants extends Component{

    render(){
        const cardInfo =[
            {id:0,image:"", title:"Sally", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
            {id:1,image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
            {id:2,image:"../assets/plantOne.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:3,image:"../assets/plantOne.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:4,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:5,image:"../assets/plantThree.jpg", title:"Sally", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
            {id:6,image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
            {id:7,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:8,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
            {id:9,image:"../assets/plantFour.jpg", title:"Gwendolynn", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"}
    
        ];
        return(
            // <div className="IndividualPlant container-fluid d-flex  justify-content-center">
            //     <div className="row">  
            <div className="IndividualPlant container-fluid d-flex justify-content-center ">
            <div className="row">
            {cardInfo.map((props)=>
                <IndividualPlant/>
                 
               )}    
            // </div>
            </div>  
        );
    }
}
export default IndividualPlants;