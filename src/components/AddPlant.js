import React, {useState, useEffect, useRef} from "react";
import { Alert,  Button } from "react-bootstrap";
import PlantDataService from "../services/PlantDataService";
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { storage } from "../firebase-config";
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import ReactAvatarEditor from "react-avatar-editor";
import Select from "react-select";
import ImageUnavailable from "../assets/ImageUnavailable.png";

const AddPlant = ({id, setPlantId, closeAddModal,})=>{
    
    const [name, setPlantName] = useState("");
    const [title, setPlantTitle] = useState("");
    const [soil, setPlantSoil] = useState("");
    const [size, setPlantSize] = useState("");
    const [sun, setPlantSun] = useState("");
    const [hardiness, setPlantHardiness] = useState("");
    const [water, setPlantWater] = useState("");
    const [waterTime, setPlantWaterTime] = useState("");
    const [waterDay, setPlantWaterDay] = useState([]);
    const [disableWater, setDisableWater] = useState(8);
    const [family, setPlantFamily] = useState("");
    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    const [per, setPerc] = useState(0);
    const [showProgBar, setShowProgBar] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [message, setMessage] = useState({error: false, msg: ""});
    const [width, setWidth] = useState(330);
    const [height, setHeight] = useState(330);
    const [zoomOut, setZoomOut] = useState(false);
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
    const dayOptions=[
        {value:' Sunday ', label: 'Sunday'},
        {value:' Monday ', label: 'Monday'},
        {value:' Tuesday ', label: 'Tuesday'},
        {value:' Wednesday ', label: 'Wednesday'},
        {value:' Thursday ', label: 'Thursday'},
        {value:' Friday ', label: 'Friday'},
        {value:' Saturday ', label: 'Saturday'},
    ]
    // const handleDisableWater = ()=>{
    //     if(water==="Daily"){
    //         setDisableWater(7)
    //     }else if(water==="3-5 times per week"){
    //         setDisableWater(5)
    //     }else if(water==="1-2 times per week"){
    //         setDisableWater(2)
    //     }else if(water==="2 times per month"){
    //         setDisableWater(2)
    //     }else if(water==="1 time per month"){
    //         setDisableWater(1)
    //     }else if(water==="Never"){
    //         setDisableWater(0)
    //     }else{
    //         setDisableWater(7)
    //     }
        
    // }
    
    const handleWaterDay=(e)=>{
        setPlantWaterDay(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    const handleScale = (e) => {
        const scale = parseFloat(e.target.value);
        setScale(scale);
    };
    
    const handleImagePreview = (e)=>{
        setImagePreview(e.target.files[0]);
    }
    
    
    const handlePositionChange = (position) =>{
        setPosition({position});
    }
    
    const setEditorRef = useRef(null);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setMessage("");
        
        if(name==="" || title==="" || water==="" || waterTime==="" || waterDay===""){
            setMessage({error:true, msg: "All fields are required!"});
            return;
        }
       
        
        const newPlant = {
            name, title, soil, size, sun, hardiness, water, waterTime, waterDay, family, image,
        };
        try{
            
            if(id !== undefined && id !== "" ){
                
                await PlantDataService.updatePlant(id, newPlant);
                setPlantId("");
                 setMessage({error:false, msg: "Plant updated successfully"});
            }else{
                await PlantDataService.addPlants(newPlant);
                setMessage({error:false, msg: "New plant added successfully"});
            }
        }catch (err){
            
            setMessage({error:true, msg: "Error!"});
            return;
        }
        setPlantName("");
        setPlantTitle("");
        setPlantSoil("");
        setPlantSize("");
        setPlantSun("");
        setPlantHardiness("");
        setPlantFamily("");
        setPlantWater("");
        setPlantWaterTime("");
        setPlantWaterDay([]);
        setImage("");
        console.log(newPlant);
        //closeAddModal();
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
            setPlantWaterTime(docSnap.data().waterTime);
            setPlantWaterDay(docSnap.data().waterDay);
            setImage(docSnap.data().image);
        }catch (err){
            setMessage({error:true, msg:err.message});
        }
    };

    const handleImage = (e)=>{
        setFile(imagePreview);
       
    };

    

    useEffect(()=>{
        if(id !== undefined && id !== ""){
            editHandler();
        }
    },[id]);

    useEffect(()=>{
        const handleUpload = () =>{
            
            const name = new Date().getTime() + file.name;
            const imageRef = ref(storage, `files/${name}`);
            //const defaultImageRef = ref(storage, "altImages/imageUnavailable.png");
            //const defaultUploadTask = uploadBytesResumable(defaultImageRef, file);
            const uploadTask = uploadBytesResumable(imageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot)=>{
                    setUploaded(true);
                    setShowProgBar(true);
                    const progress = 
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setPerc(progress);
                    if(per === 100){
                        showProgBar(false);
                    };
                    switch(snapshot.state){
                        case "paused":
                        console.log("Upload is paused");
                            break;
                        case "running":
                        console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error)=>{
                    console.log(error);
                },
                ()=>{
                    getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                        setUploaded(false);
                        setShowProgBar(false);
                        setImage(url);
                    }) ;
                }
                
            );
            
        };
        file && handleUpload();
        },[file]);

        

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
                    <div>
                    <div>
                        <ReactAvatarEditor
                            ref={setEditorRef}
                            scale = {parseFloat(scale)}
                            width = {height}
                            height = {width}
                            // position = {position}
                            onPositionChange={handlePositionChange}
                            rotate={parseFloat(rotate)}
                            image = {id !== undefined && id !== "" ? image : imagePreview}
                            alt={image}
                            className = "editor-canvas"
                        />
                        </div>
                        <br/>
            <label >
                <input
                name="upload-img-input"
                type="file"
                accept="image/*" 
                onChange={handleImagePreview}
                multiple ={false}
                />
                
            </label>
            <br/>
            
             <input
                name="scale"
                type="range"
                onChange={handleScale}
                min={zoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
            />
            <button onClick={handleImage}> Upload Image</button> 

        </div>

                     {showProgBar && <ProgressBar 
                        className="progress__bar"
                        now={per}
                        size="medium"
                        inverted
                        
                    /> }
                   
              </div>
               <Card.Body >
              <ListGroup variant="flush" >
              <ListGroupItem><span style={{fontWeight:'bold'}}> Title:</span>
                  <div>
                  <input class="editAdd" type="text" onChange={(event)=> setPlantTitle(event.target.value)} value={title} required></input>
                  </div>
                   </ListGroupItem>
                  <ListGroupItem><span style={{fontWeight:'bold'}} > Name:</span>
                  <div>
                  <input class="editAdd" type="text" onChange={(event)=> setPlantName(event.target.value)} value={name} required></input>
                  </div>
                   </ListGroupItem>
                  <ListGroupItem><span style={{fontWeight:'bold'}}>Family:</span> 
                  <div>
                  <input class="editAdd" type="text" onChange={(event)=> setPlantFamily(event.target.value)} value={family} required></input>
                  </div>
                  </ListGroupItem>

                  <ListGroupItem><span style={{fontWeight:'bold'}}>Size:</span> 
                  <div>
                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantSize(event.target.value)} value={size} required>
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
                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantSoil(event.target.value)} value={soil} required>
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
                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantSun(event.target.value)} value={sun} required>
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
                  <select id="hardiness" class="form-select" aria-label="Default select example"  onChange={(event)=> setPlantHardiness(event.target.value)} value={hardiness} required>
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
                  <ListGroupItem><span style={{fontWeight:'bold'}}>Watering Frequency:</span> 
                  <div>

                  <select class="form-select" aria-label="Default select example" onChange={(event)=> setPlantWater(event.target.value)} value={water} >
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
                  <ListGroupItem><span style={{fontWeight:'bold'}}>Watering Time:</span>
                        <div>
                        <input  type="time" onChange={(event)=> setPlantWaterTime(event.target.value)} placeholder={waterTime} value={waterTime} required></input>
                        </div>
                  </ListGroupItem>
                  <ListGroupItem><span style={{fontWeight:'bold'}}>Watering Days:</span>
                  <Select
                    className="dropdown"
                    placeholder="Select Days"
                    value={waterDay? dayOptions.filter(obj => waterDay.includes(obj.value)) : ""} 
                    options={dayOptions} 
                    onChange={handleWaterDay} 
                    isMulti
                    required
                    //isOptionDisabled={() => waterDay.length >= {disableWater}}
      />            
                         
                 </ListGroupItem>
              </ListGroup>
              <Button disabled = {uploaded} variant="primary" onClick={handleSubmit} >
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