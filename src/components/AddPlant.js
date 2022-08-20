import React, {useState, useEffect} from "react";
import { Alert,  Button } from "react-bootstrap";
import PlantDataService from "../services/PlantDataService";
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import UploadImage from "./UploadImage";
const AddPlant = ({id, setPlantId, closeModal})=>{

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
        console.log(newPlant);
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
          
          <section>
      <div >
          <Card className="IndividualPlantModal" id="addModal"  >
              <div class="uploadImage ">
                    <UploadImage onChange={(event)=> {setPlantImage(event.target.value)}} value={image}/> 
              </div>
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
                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantSize(event.target.value)} value={size}>
                        <option value=""></option>
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
                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantSoil(event.target.value)} value={soil}>
                    <option value=""></option>
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
                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantSun(event.target.value)} value={sun}>
                        <option value=""></option>
                      <option value="Direct light">Direct light</option>
                      <option value="Bright indirect light">Bright indirect light</option>
                      <option value="Medium indirect light">Medium indirect light</option>
                      <option value="Low light">Low light</option>
                  </select>
                  </div>
                  </ListGroupItem>
                
                  <ListGroupItem><span style={{fontWeight:'bold'}}>Hardiness:</span> 
                  <div>
                  <select id="hardiness" class="form-select" aria-label="Default select example"  onChange={(event)=> setPlantHardiness(event.target.value)} value={hardiness}>
                    <option value=""></option>
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

                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantWater(event.target.value)} value={water}>
                      <option value=""></option>
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
              <Button variant="primary" onClick={handleSubmit} onSubmit={closeModal}>
          Save Plant
          </Button>
              </Card.Body>
          </Card>
          
       </div>
       </section>
        </>
    )
}
export default AddPlant;