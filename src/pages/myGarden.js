import React from "react";
import Button from 'react-bootstrap/Button';
import "../components/individual-style.css";
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
import {doc, updateDoc, addDoc, collection} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import {getDocs} from 'firebase/firestore';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import plantThree from "../assets/plantThree.jpg";
import plantsServices from "../services/plants.services";
export const MyGarden=()=>{

    const[plants,setPlants]= useState([]);
    const ref = React.createRef();
    const [showEditModal, setShowEditModal] = useState(false);
    const handleEditClose = () => setShowEditModal(false);
    const handleEditShow = () => setShowEditModal(true);    
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
    const [message, setMessage] = useState({error: false, msg: ""});
    //const userCollectionRef = collection(db, "users");
    let navigate = useNavigate();

    const createPlant = async (e) => {
        e.preventDefault();
        setMessage("");
        if(title=== "" || name === "" || watering === ""){
            setMessage({error:true, msg: "All fields are mandatory!"});
            return;
        }
        const newPlant = {
            title, name, soil, size, sun, hardiness, water, family, image,
        };
        try{
            await plantsServices.addPlants(newPlant);
            setMessage({error=false, msg:"New plant added successfully"});
        }
        navigate("/");
    }
    const editPlant = async (id) => {
        const plantDocRef = doc(db, "plants", id);
        await updateDoc(plantDocRef, {title, name, soil, size, sun, hardiness, water, family, image});
    }
    const deletePlant = async (id) =>{
        const plantDoc = doc(db, "plants", id);
        await deletePlant(plantDoc,);
      }
      const confirmDelete = (id) =>{
          const confirmed = window.confirm("Are you sure you want to delete this plant?");
          if(confirmed){
              deletePlant(id);
          }
      }

    useEffect(()=>{
    //get plant data from database later, using array as dummy data
    // const getPlants = async () =>{
    //     const plantData = await getDocs(plantsCollectionRef);
    //     setPlants(plantData.docs.map((doc)=>({...doc.plantData(),id: doc.id})));
    // };
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
    //getPlants();
    
    },[]);

return(
    //add plant button maybe will go near search functionality?
        <div>
           <Button onClick={handleAddShow} className="btn-lg"><span>Add Plant   </span><BsFillPlusCircleFill></BsFillPlusCircleFill></Button>
        <div className="IndividualPlant container-fluid d-flex justify-content-center ">
                  
                    <div className="row">
                    {plants.map((plant)=>{
            return(
                <div id="container" className="col-md-4">
                <IndividualPlant 
                    plantData={plant} 
                    key={plant.title} 
                    id="card"
                    />
                    <div class="buttons">
                            <div class="button-trash">
                            <button className="btn btn-light" onClick = {()=> confirmDelete(plant.id)}><BsFillTrashFill></BsFillTrashFill></button>
                            </div>
                            <div class="button-edit">
                            <button className="btn btn-light" onClick ={()=> handleEditShow()}><BsFillPencilFill></BsFillPencilFill></button>
                            </div>
                            </div>
                    </div>
            
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
                    <div >
                        <Card className="IndividualPlantModal" id="addModal"  >
                            <div>
                            <Card.Img variant="top" >
                            
                            </Card.Img>
                            </div>
                             <Button className="position-absolute top-0 end-0" onClick = {() => { handleImageShow(); handleAddClose();}} ><span>Upload Image   </span><BsImage></BsImage></Button> 
                             
                             <Card.Body >
                            
                            <ListGroup variant="flush" >
                            <ListGroupItem><span style={{fontWeight:'bold'}}> Title:</span>
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> setPlantTitle(event.target.value)}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span>
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> setPlantName(event.target.value)}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                                <div>
                                <input class="editAdd" type="text" onChange={(event)=> setPlantFamily(event.target.value)}></input>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                                <div>
                                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSize(event.target.value)}>
                                    <option value="1-3 inches">1-5 inches</option>
                                    <option value="4-7 inches">4-7 inches</option>
                                    <option value="8-12 inches">8-11 inches</option>
                                    <option value="1-1.5 feet">1-1.5 feet</option>
                                    <option value="1.5-2 feet">1.5-2 feet</option>
                                    <option value="2-2.5 feet">2-2.5 feet</option>
                                    <option value="2.5-3 feet">2.5-3 feet</option>
                                    <option value="3+ feet">3+ feet</option>
                                </select>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> 
                                <div>
                                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSoil(event.target.value)}>
                                    <option value="Clay">Clay</option>
                                    <option value="Sandy">Sandy</option>
                                    <option value="Silty">Silty</option>
                                    <option value="Peaty">Peaty</option>
                                    <option value="Chalky">Chalky</option>
                                    <option value="Loamy">Loamy</option>
                                </select>
                                </div>
                                </ListGroupItem>
                                
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> 
                                <div >
                                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSun(event.target.value)}>
                                    <option value="Direct light">Direct light</option>
                                    <option value="Bright indirect light">Bright indirect light</option>
                                    <option value="Medium indirect light">Medium indirect light</option>
                                    <option value="Low light">Low light</option>
                                </select>
                                </div>
                                </ListGroupItem>
                              
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                                <div>
                                <select id="hardiness" class="form-select" aria-label="Default select example"  onSelect={(event)=> setPlantHardiness(event.target.value)}>

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>

                                </select>
                                </div>
                                </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> 
                                <div>

                                <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantWater(event.target.value)}>
                                    <option value="Daily">Daily</option>
                                    <option value="3-5 times per week">3-5 times per week</option>
                                    <option value="1-2 times per week">1-2 times per week</option>
                                    <option value="2 times per month">2 times per month</option>
                                    <option value="1 time per month">1 time per month</option>
                                    <option value="Never">Never</option>
                                </select>
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
    {/* Edit plant modal */}
                    {/* <div class="modalBackground">
                     <Modal show={showEditModal} onHide={handleEditClose} class="modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Edit {plantData.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <section>
                    <div className="IndividualPlantModal text-left col-sm">
                        <Card className="IndividualPlantModal" key={plantData.id} >
                         
                            <Card.Img variant="top"  src= {plantThree}>
                            
                            </Card.Img>
                             <Button className="position-absolute top-0 end-0" onClick = {() => { handleImageShow(); handleEditClose();}} ><BsImage></BsImage></Button> 
                             
                             <Card.Body >
                            
                            <ListGroup id="plantCharacteristics" variant="flush" >
                            <ListGroupItem><span style={{fontWeight:'bold'}}> Title:</span>
                                <div>
                                <input class="editAdd" type="text" placeholder={plantData.title} value={title}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}} > Name:</span>
                                <div>
                                <input class="editAdd" type="text" placeholder={plantData.name} value={name}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                                <div>
                                <input class="editAdd" type="text" placeholder={plantData.family} value={family}></input>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                                <div> */}
                                {/* <input class="editAdd" type="text" placeholder={plantData.size} value={size}></input> */}
                                {/* <select class="form-select" aria-label="Default select example" value={size} onSelect={(event)=> {setPlantSize(event.target.value)}}>
                                    <option value="1-3 inches">1-5 inches</option>
                                    <option value="4-7 inches">4-7 inches</option>
                                    <option value="8-12 inches">8-11 inches</option>
                                    <option value="1-1.5 feet">1-1.5 feet</option>
                                    <option value="1.5-2 feet">1.5-2 feet</option>
                                    <option value="2-2.5 feet">2-2.5 feet</option>
                                    <option value="2.5-3 feet">2.5-3 feet</option>
                                    <option value="3+ feet">3+ feet</option>
                                </select>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> 
                                <div> */}
                                {/* <input class="editAdd" type="text" placeholder={plantData.soil} value={soil}></input> */}
                                {/* <select class="form-select" aria-label="Default select example" value={soil} onSelect={(event)=> {setPlantSoil(event.target.value)}}>
                                    <option value="Clay">Clay</option>
                                    <option value="Sandy">Sandy</option>
                                    <option value="Silty">Silty</option>
                                    <option value="Peaty">Peaty</option>
                                    <option value="Chalky">Chalky</option>
                                    <option value="Loamy">Loamy</option>
                                </select>
                                </div>
                                </ListGroupItem>
                                
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> 
                                <div >
                                {/* <input class="editAdd" type="text" placeholder={plantData.sun} value={sun}></input> */}
                                {/* <select class="form-select" aria-label="Default select example"  value={sun} onSelect={(event)=> {setPlantSun(event.target.value)}}>
                                    <option value="Direct light">Direct light</option>
                                    <option value="Bright indirect light">Bright indirect light</option>
                                    <option value="Medium indirect light">Medium indirect light</option>
                                    <option value="Low light">Low light</option>
                                </select>
                                </div>
                                </ListGroupItem>
                              
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                                <div> */} 
                                {/* <input class="editAdd" type="text" placeholder={plantData.hardiness} value={hardiness}></input> */}
                                {/* <select id="hardiness" class="form-select" aria-label="Default select example"  value={hardiness} onSelect={(event)=> {setPlantHardiness(event.target.value)}}>

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>

                                </select>
                                </div>
                                </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> 
                                <div> */}
                                {/* <input class="editAdd" type="text" placeholder={plantData.water} value={water}></input> */}
                                {/* <select class="form-select" aria-label="Default select example" value={water} onSelect={(event)=> {setPlantWater(event.target.value)}}>
                                    <option value="Daily">Daily</option>
                                    <option value="3-5 times per week">3-5 times per week</option>
                                    <option value="1-2 times per week">1-2 times per week</option>
                                    <option value="2 times per month">2 times per month</option>
                                    <option value="1 time per month">1 time per month</option>
                                    <option value="Never">Never</option>
                                </select>
                                </div>
                                </ListGroupItem>
 
 
                            </ListGroup>
                            <div className="text-end">
                            </div>
                            </Card.Body>
                        </Card>
                        
                     </div>
                     </section>
 
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={() => { editPlant(plantData.id); handleEditClose();}}>
                        Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </div>
                    <Modal show={showImageModal} onHide = {handleImageClose} class="modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Upload Plant Image</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UploadImage/> 
                            <Button onClick={() => { handleImageClose(); handleEditShow();}}>Save Image</Button>
                        </Modal.Body>
                    </Modal> */}
        </div>
        
)
};
export default MyGarden;

