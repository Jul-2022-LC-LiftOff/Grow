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
import {addDoc, collection} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import {getDocs} from 'firebase/firestore';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import plantThree from "../assets/plantThree.jpg";

export const MyGarden=()=>{
//grace brach
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
    //const userCollectionRef = collection(db, "users");
    let navigate = useNavigate();
    const createPlant = async () => {
        await addDoc(plantsCollectionRef,{title, name, soil, size, sun, hardiness, water, family, image});
        navigate("/");
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
// const deletePlant = async () =>{
//     const plantDoc = doc(db, "plants", )
// }

return(
    //add plant button maybe will go near search functionality?
        <div>
           <Button onClick={handleAddShow} className="btn-lg"><span>Add Plant   </span><BsFillPlusCircleFill></BsFillPlusCircleFill></Button>
        <div className="IndividualPlant container-fluid d-flex justify-content-center ">
                  
                    <div className="row">
        {plants.map((plant)=>{
            return(
            //     <IndividualPlant 
            // plantData={plant} 
            // key={plant.title} 
            // id={plant.id}
            ///>
            <div className="col-md-4">
                        <section>
                    <div className="IndividualPlant text-left col-sm">
                        <Card className="IndividualPlant" key={plant.id} >
                         
                            <Card.Img variant="top"  src= {plantThree}></Card.Img>
                             <Card.Body >
                            <Card.Title  className="fw-bolder text-center" >
                             {plant.title}
                            </Card.Title>
                            
                            <ListGroup variant="flush" >

                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span> {plant.name}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> {plant.family}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> {plant.size}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> {plant.soil}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> {plant.sun}</ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> {plant.hardiness}</ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> {plant.water}</ListGroupItem>
 
 
                            </ListGroup>
                            
                            <div className="position-absolute bottom-10 start-10">
                            <button className="btn btn-light" onClick = {()=>{window.confirm("Do you really want to delete this plant?")}}><BsFillTrashFill></BsFillTrashFill></button>
                            </div>
                            <div className="text-end">
                            <Button onClick = {handleEditShow}><BsFillPencilFill></BsFillPencilFill></Button>
                            </div>
                            </Card.Body>
                        </Card>

                        
                     </div>
                     </section>
{/*Edit Plant Modal */}
                     <div >
                     <Modal show={showEditModal} onHide={handleEditClose} class="modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Edit {plant.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <section>
                    <div className="IndividualPlantModal text-left col-sm">
                        <Card className="IndividualPlantModal" key={plant.id} >
                         
                            <Card.Img variant="top"  src= {plantThree}>
                            
                            </Card.Img>
                             <Button className="position-absolute top-0 end-0" onClick = {() => { handleImageShow(); handleEditClose();}} ><BsImage></BsImage></Button> 
                             
                             <Card.Body >
                            
                            <ListGroup variant="flush" >
                            <ListGroupItem><span style={{fontWeight:'bold'}}> Title:</span>
                                <div>
                                <input class="editAdd" type="text" placeholder={plant.title}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}> Name:</span>
                                <div>
                                <input class="editAdd" type="text" placeholder={plant.name}></input>
                                </div>
                                 </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                                <div>
                                <input class="editAdd" type="text" placeholder={plant.family}></input>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                                <div>
                                <input class="editAdd" type="text" placeholder={plant.size}></input>
                                </div>
                                </ListGroupItem>
 
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Soil:</span> 
                                <div>
                                <input class="editAdd" type="text" placeholder={plant.soil}></input>
                                </div>
                                </ListGroupItem>
                                
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Sun:</span> 
                                <div >
                                <input class="editAdd" type="text" placeholder={plant.sun}></input>
                                </div>
                                </ListGroupItem>
                              
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                                <div>
                                <input class="editAdd" type="text" placeholder={plant.hardiness}></input>
                                </div>
                                </ListGroupItem>
                                <ListGroupItem><span style={{fontWeight:'bold'}}>Water:</span> 
                                <div>
                                <input class="editAdd" type="text" placeholder={plant.water}></input>
                                </div>
                                </ListGroupItem>
 
 
                            </ListGroup>
                            <div className="text-end">
                            </div>
                            </Card.Body>
                        </Card>
                        
                     </div>
                     </section>
 {/* upload image modal */}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={handleEditClose}>
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
                    </Modal>
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

