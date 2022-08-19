import { namedQuery } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import PlantDataService from "../services/PlantDataService";
import { Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsImage } from "react-icons/bs";
import UploadImage from "./UploadImage";
const AddPlant = ({id, setPlantId})=>{

    const [name, setPlantName] = useState("");
    const [title, setPlantTitle] = useState("");
    const [soil, setPlantSoil] = useState("");
    const [size, setPlantSize] = useState("");
    const [sun, setPlantSun] = useState("");
    const [hardiness, setPlantHardiness] = useState("");
    const [water, setPlantWater] = useState("");
    const [family, setPlantFamily] = useState("");
    const [image, setPlantImage] = useState("");
    const [message, setMessage] = useState({error: false, msg: ""});
    // const handleEditClose = () => setShowEditModal(false);
    // const handleEditShow = () => setShowEditModal(true);    
    const[showAddModal,setShowAddModal] = useState(false);
    const handleAddClose = () => setShowAddModal(false);
    const handleAddShow = () => setShowAddModal(true);
    const [showImageModal, setShowImageModal] = useState(false);
    const handleImageClose = () => setShowImageModal(false);
    const handleImageShow = () => setShowImageModal(true);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setMessage("");
        if(name==="" || title==="" || water===""){
            setMessage({error:true, msg: "All fields are required!"});
            return;
        }
        const newPlant = {
            name, title, soil, size, sun, hardiness, water, family, image,
        };
        try{
            if(id !== undefined && id !== ""){
                await PlantDataService.updatePlant(id, newPlant);
                setPlantId("");
                setMessage({error:false, msg: "Plant updated successfully"});
            }else{
                await PlantDataService.addPlants(newPlant);
                setMessage({error:false, msg: "New plant added successfully"});
            }
        }catch (err){
            setMessage({error:true, msg: err.message});
        }
        setPlantName("");
        setPlantTitle("");
        setPlantSoil("");
        setPlantSize("");
        setPlantSun("");
        setPlantHardiness("");
        setPlantFamily("");
        setPlantWater("");
        setPlantImage("");
    };
    const editHandler = async () =>{
        setMessage("");
        try{
            const docSnap = await PlantDataService.getPlant(id);
            setPlantName(docSnap.data().name);
            setPlantTitle(docSnap.data().title);
            setPlantSoil(docSnap.data().soil);
            setPlantSize(docSnap.data().size);
            setPlantSun(docSnap.data().sun);
            setPlantHardiness(docSnap.data().hardiness);
            setPlantFamily(docSnap.data().family);
            setPlantWater(docSnap.data().water);
            setPlantImage(docSnap.data().image);
        }catch (err){
            setMessage({error:true, msg:err.message});
        }
    };
    useEffect(()=>{
        if(id !== undefined && id !== ""){
            editHandler();
        }
    },[id]);
    return(
        <>
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
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
                  <input class="editAdd" type="text" onChange={(event)=> setPlantTitle(event.target.value)} value={title}></input>
                  </div>
                   </ListGroupItem>
                  <ListGroupItem><span style={{fontWeight:'bold'}} > Name:</span>
                  <div>
                  <input class="editAdd" type="text" onChange={(event)=> setPlantName(event.target.value)} value={name}></input>
                  </div>
                   </ListGroupItem>
                  <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                  <div>
                  <input class="editAdd" type="text" onChange={(event)=> setPlantFamily(event.target.value)} value={family}></input>
                  </div>
                  </ListGroupItem>

                  <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                  <div>
                  <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSize(event.target.value)} value={size}>
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
                  <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSoil(event.target.value)} value={soil}>
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
                  <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantSun(event.target.value)} value={sun}>
                      <option value="Direct light">Direct light</option>
                      <option value="Bright indirect light">Bright indirect light</option>
                      <option value="Medium indirect light">Medium indirect light</option>
                      <option value="Low light">Low light</option>
                  </select>
                  </div>
                  </ListGroupItem>
                
                  <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                  <div>
                  <select id="hardiness" class="form-select" aria-label="Default select example"  onSelect={(event)=> setPlantHardiness(event.target.value)} value={hardiness}>

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

                  <select class="form-select" aria-label="Default select example" onSelect={(event)=> setPlantWater(event.target.value)} value={water}>
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
              <Button variant="primary" onClick={()=>{handleAddClose(); handleSubmit();}}>
          Save Plant
          </Button>
          </Modal.Footer>
      </Modal>
      <Modal show={showImageModal} onHide = {handleImageClose} class="modal">
          <Modal.Header closeButton>
              <Modal.Title>Upload Plant Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <UploadImage onChange={(event)=> {setPlantImage(event.target.value)}} value={image}/> 
              <Button onClick={() => { handleImageClose(); handleAddShow();}}>Save Image</Button>
          </Modal.Body>
      </Modal>
        </>
    )
}
export default AddPlant;