import React, { useContext } from "react";
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
import { useEffect } from "react";
//import { UserContext } from "../components/UserContext";
 const MyGarden=()=>{
   
    //const currentUser = useContext(UserContext)
     const [showAdd, setShowAdd] = useState(false);
     const [showEdit, setShowEdit] = useState(false);
     const [message, setMessage] = useState({msg: ""});

     const[plantId, setPlantId] = useState("");
     const getPlantIdHandler = (id) =>{
        setPlantId(id);
     }  
    const handleAddClose = () => {
        setShowAdd(false);
        setMessage({msg:"New plant added successfully"})
    }
    const handleAddShow = () => {setShowAdd(true);}
    const handleEditClose = () => {
        setShowEdit(false);
        setMessage({msg:"Plant updated successfully"})

    }
    const handleEditShow = () => {setShowEdit(true);}
    
   
return(
    <>
     
    <Button  onClick = {handleAddShow}className="btn-lg"><span>Add Plant   </span><BsFillPlusCircleFill></BsFillPlusCircleFill></Button>
   <div className="editAddAlert">
    {message?.msg && (
          <Alert
            variant={'success'}
            
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
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
    <PlantList getPlantId={getPlantIdHandler} showEdit={handleEditShow}/>
    </>

   
)
};
export default MyGarden;

