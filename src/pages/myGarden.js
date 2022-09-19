import React, { useContext, useEffect } from "react";
import {Button} from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
import "../components/individual-style.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import AddPlant from "../components/AddPlant";
import PlantList from "../components/PlantList";
import PlantDataService from "../services/PlantDataService";
import { successAdd } from "../components/AddPlant";
import { successEdit } from "../components/AddPlant";

 const MyGarden=( props )=>{
   
    //const currentUser = useContext(UserContext)
     const [showAdd, setShowAdd] = useState(false);
     const [showEdit, setShowEdit] = useState(false);
     const [message, setMessage] = useState({msg: ""});
    const [alert, setAlert] = useState(false);
     const[plantId, setPlantId] = useState("");
     const getPlantIdHandler = (id) =>{
        setPlantId(id);
     }  
    const handleAddClose = () => {
        setShowAdd(false);
        if(successAdd===true){
            setMessage({msg:"New plant added successfully"});
            setAlert(true);
        };
        // if({successAdd}){
        // setAlert(true);
        // }
    }
    const handleAddShow = () => {setShowAdd(true);}
    const handleEditClose = () => {
        setShowEdit(false);
        
    }
    const handleEditShow = () => {setShowEdit(true);}
   const showAlert = ()=>{
    setAlert(true);
    const timeout = setTimeout(3000);
    return () => clearTimeout(timeout);
   }
   
   useEffect(()=>{
    const timeout = setTimeout(()=>{
        setAlert(false);
    }, 3000);
    return ()=> clearTimeout(timeout);

   },[alert]);


   // this code is to show that the data thats comming in
    let table = null;
    if (props.filteredGarden != "") {
        table = props.filteredGarden.map((plant) => <h3>{plant.name}</h3>);
    }



return(
    <div className = "myGarden">
    
    {table}

    <Button  onClick = {handleAddShow}className="btn-lg"><span>Add Plant   </span><BsFillPlusCircleFill></BsFillPlusCircleFill></Button>
   <div className="editAddAlert">
    
          <Alert
            variant={'success'}
            dismissible
            show = {alert}
            
            onClose={() => setMessage("")}
          >
        {message?.msg}
          </Alert>
       
        </div>
    <Modal show={showAdd} onHide={handleAddClose}  class="modal">
         <Modal.Header >
        
             <Modal.Title>Add Plant </Modal.Title>
             <CloseButton onClick={() => { handleAddClose();}}/>
         </Modal.Header>
         <Modal.Body>
         <AddPlant id={plantId} setPlantId={setPlantId} closeAddModal={handleAddClose}/>
        </Modal.Body>
       </Modal>
       
       <Modal show={showEdit} onHide={handleEditClose}  class="modal">
         <Modal.Header >
        
             <Modal.Title>Edit Plant </Modal.Title>
             <CloseButton onClick={() => { handleEditClose()}}/>
         </Modal.Header>
         <Modal.Body>
         <AddPlant id={plantId} setPlantId={setPlantId} closeModal={handleEditClose}/>
        </Modal.Body>
       </Modal>
      
    <PlantList getPlantId={getPlantIdHandler} showEdit={handleEditShow} filteredGarden={props.filteredGarden}/>
    
    </div>

   
)
};
export default MyGarden;

