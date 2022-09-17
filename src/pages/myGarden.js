import React, { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { CloseButton } from "react-bootstrap";
import "../components/individual-style.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import AddPlant from "../components/AddPlant";
import PlantList from "../components/PlantList";
//import { UserContext } from "../components/UserContext";
 const MyGarden=( props )=>{

    //const currentUser = useContext(UserContext)
     const [showAdd, setShowAdd] = useState(false);
     const [showEdit, setShowEdit] = useState(false);

     const[plantId, setPlantId] = useState("");
     const getPlantIdHandler = (id) =>{
        setPlantId(id);
     }  
    const handleAddClose = () => setShowAdd(false);
    const handleAddShow = () => setShowAdd(true);
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = () => setShowEdit(true);
    
    
    //this is for debuging
    useEffect(() => {

        console.log(props.filteredGarden);

    }, [props.filteredGarden])

    let table = null;
    if (props.filteredGarden != "") {
        table = props.filteredGarden.map((plant) => <h1>{plant.name}</h1>);
    }

return(
    <>

    {table};

    <Button  onClick = {handleAddShow}className="btn-lg"><span>Add Plant   </span><BsFillPlusCircleFill></BsFillPlusCircleFill></Button>

    <Modal show={showAdd} onHide={handleAddClose}  class="modal">
         <Modal.Header >
        
             <Modal.Title>Add Plant </Modal.Title>
             <CloseButton onClick={() => { handleAddClose()}}/>
         </Modal.Header>
         <Modal.Body>
         <AddPlant id={plantId} setPlantId={setPlantId} closeModal={handleAddClose}/>
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
    <PlantList getPlantId={getPlantIdHandler} showEdit={handleEditShow} filteredGarden={props.filteredGarden} /> 
    </>

   
)
};
export default MyGarden;

