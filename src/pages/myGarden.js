import React from "react";
import Button from 'react-bootstrap/Button';
import {IndividualPlant} from "../components/IndividualPlant";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from 'react-bootstrap/ListGroup';
import { Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import UploadImage from "../components/UploadImage";
import {BsImage } from "react-icons/bs"
import { db , auth} from "../firebase-config";
import {addDoc, collection} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import {getDocs} from 'firebase/firestore';
export const MyGarden=()=>{
//grace brach
    const[plants,setPlants]= useState([]);
    const ref = React.createRef();
    const[showAddModal,setShowAddModal] = useState(false);
    const handleAddClose = () => setShowAddModal(false);
    const handleAddShow = () => setShowAddModal(true);
    const [showImageModal, setShowImageModal] = useState(false);
    const handleImageClose = () => setShowImageModal(false);
    const handleImageShow = () => setShowImageModal(true);
    const [name, setPlantName] = useState("");
    const [title, setPlantTitle] = useState("");
    const [soil, setPlantSoil] = useState("");
    const [size, setPlantSize] = useState("");
    const [sun, setPlantSun] = useState("");
    const [hardiness, setPlantHardiness] = useState("");
    const [water, setPlantWater] = useState("");
    const [family, setPlantFamily] = useState("");
    const [image, setPlantImage] = useState("");
    const plantsCollectionRef = collection(db, "plants");
    //const userCollectionRef = collection(db, "users");
    let navigate = useNavigate();
    const createPlant = async () => {
        await addDoc(plantsCollectionRef,{title, name, soil, size, sun, hardiness, water, family, image});
        navigate("/");
    }
useEffect(()=>{
    //get plant data from database later, using array as dummy data
    const getPlants = async () =>{
        const plantData = await getDocs(plantsCollectionRef);
        setPlants(plantData.docs.map((doc)=>({...doc.plantData(),id: doc.id})));
    };
    // let plantData;
    // plantData=[{id:0,image:"", title:"Sally 1", name:"Ficus lyrata",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
    //         {id:1,image:"../assets/plantOne.jpg", title:"Jimmy the Plant", name:"Monestera Deliciosa",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
    //         {id:2,image:"../assets/plantOne.jpg", title:"Gwendolynn", name:"Dracaena trifasciatas",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
    //         {id:3,image:"../assets/plantOne.jpg", title:"Gwendolynn 2", name:"Dracaena trifasciatat",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
    //         {id:4,image:"../assets/plantFour.jpg", title:"Gwendolynn 3", name:"Dracaena trifasciata",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
    //         {id:5,image:"../assets/plantThree.jpg", title:"Sally", name:"Ficus lyratas",family:"Fig",size:"12-15m",soil:"Well draining and peat-based",sun:"Around 5 hours a day",hardiness:"Zones 9-11",water:"Once a week"},
    //         {id:6,image:"../assets/plantOne.jpg", title:"Jimmy the Plant 2", name:"Monestera Deliciosat",family:"Arcaceae",size:"10'-15'",soil:"Potting soil with great drainage",sun:"5-8 hours per day of direct sunlight",hardiness:" Zones 10-12",water:"Water once every 1-2 weeks"},
    //         {id:7,image:"../assets/plantFour.jpg", title:"Gwendolynn 5", name:"Dracaena trifasciatah",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
    //         {id:8,image:"../assets/plantFour.jpg", title:"Gwendolynn 6", name:"Dracaena trifasciatak",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"},
    //         {id:9,image:"../assets/plantFour.jpg", title:"Gwendolynn 7", name:"Dracaena trifasciatal",family:"Asparagaceae",size:"80-100cm",soil:"Free draining potting mix",sun:"Indirect sunlight",hardiness:"Zones 10+",water:"Once every two weeks"}];
    
    // setPlants(plantData);
    getPlants();
    
});

return(
    //add plant button maybe will go near search functionality?
        <div>
           <Button onClick={handleAddShow} className="btn-lg"><span>Add Plant   </span><BsFillPlusCircleFill></BsFillPlusCircleFill></Button>
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
        <Modal show={showAddModal} onHide={handleAddClose} class="modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Add Plant</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <section>
                    <div className="IndividualPlantModal text-left col-sm">
                        <Card className="IndividualPlantModal"  >
                            <div>
                            <Card.Img variant="top" >
                            
                            </Card.Img>
                            </div>
                             <Button className="position-absolute top-0 end-0" onClick = {() => { handleImageShow(); handleAddClose();}} ><span>Upload Image   </span><BsImage></BsImage></Button> 
                             
                             <Card.Body >
                            
                            <ListGroup variant="flush" >
                            <ListGroupItem><span style={{fontWeight:'bold'}}> Title:</span>
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantTitle(event.target.value)}}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span>
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantName(event.target.value)}}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantFamily(event.target.value)}}></input>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantSize(event.target.value)}}></input>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> 
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantSoil(event.target.value)}}></input>
                                </div>
                                </ListGroupItem>
                                
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> 
                                <div >
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantSun(event.target.value)}}></input>
                                </div>
                                </ListGroupItem>
                              
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantHardiness(event.target.value)}}></input>
                                </div>
                                </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> 
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> {setPlantWater(event.target.value)}}></input>
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
        </div>
        
)
};
export default MyGarden;
