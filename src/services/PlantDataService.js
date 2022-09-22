import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
import { storage } from "../firebase-config";
import React, { useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";


// const plantCollectionRef = collection(db,"plants");


function PlantDataService ( props ) {

    
    if (props.userId == null) {
        console.log("not login yet");
    }


    const plantCollectionRef = ""
    // const auth = getAuth();
    // const user = auth.currentUser;
    if (props.userId != null) {
        plantCollectionRef = collection(db,"users", props.userId, "Garden");
    }
    

    let addPlants = (newPlant)=>{
        return addDoc(plantCollectionRef, newPlant);
    };
        
    let updatePlant = (id, updatedPlant)=>{
        const plantDoc = doc(db,"users", props.userId, "Garden", id);
        // const plantDoc = doc(db,"plants", id);

        return updateDoc(plantDoc, updatedPlant);
    };

    let deletePlant = (id) =>{
        const plantDoc = doc(db,"users", props.userId, "Garden", id);
        // const plantDoc = doc(db,"plants", id);

            return deleteDoc(plantDoc);
        
        
    };

    let getAllPlants = () =>{
        
        return getDocs(plantCollectionRef);
    };
    

    let getPlant = (id) => {
        const plantDoc = doc(db,"users", props.userId, "Garden", id);
        // const plantDoc = doc(db, "plants", id);

        return getDoc(plantDoc);
    };
    
    // return {
    //     addPlants: this.addPlants,
    //     updatePlant: this.updatePlant,
    //     deletePlant:  this.deletePlant,
    //     getAllPlants: this.getAllPlants,
    //     getPlant: this.getPlant
    // }

}
export default PlantDataService;


// function PlantDataService ( props ) {

    
//     if (props.userId == null) {
//         console.log("not login yet");
//     }


//     const plantCollectionRef = ""
//     // const auth = getAuth();
//     // const user = auth.currentUser;
//     if (props.userId != null) {
//         plantCollectionRef = collection(db,"users", props.userId, "Garden");
//     }
    

//     addPlants = (newPlant)=>{
//         return addDoc(plantCollectionRef, newPlant);
//     };
        
//     updatePlant = (id, updatedPlant)=>{
//         const plantDoc = doc(db,"users", props.userId, "Garden", id);
//         // const plantDoc = doc(db,"plants", id);

//         return updateDoc(plantDoc, updatedPlant);
//     };

//     deletePlant = (id) =>{
//         const plantDoc = doc(db,"users", props.userId, "Garden", id);
//         // const plantDoc = doc(db,"plants", id);

//             return deleteDoc(plantDoc);
        
        
//     };

//     getAllPlants = () =>{
        
//         return getDocs(plantCollectionRef);
//     };
    

//     getPlant = (id) => {
//         const plantDoc = doc(db,"users", props.userId, "Garden", id);
//         // const plantDoc = doc(db, "plants", id);

//         return getDoc(plantDoc);
//     };
    

// }
// export default PlantDataService;



// class PlantDataService extends React.Component{

//     constructor(props) {
//         super(props); 
//         if (this.props.userId == null) {
//             console.log("not login yet");
//             let plantCollectionRef = ""
//         } else {
//             console.log(this.props.userId);
//             let plantCollectionRef = collection(db,"users", this.props.userId, "Garden");
//         }
        
//     }
    
//     // auth = getAuth();
//     // user = auth.currentUser;
//     // plantCollectionRef = collection(db,"users", this.props.userId, "Garden");
    

//     addPlants = (newPlant)=>{
//         return addDoc(this.props.plantCollectionRef, newPlant);
//     };

//     updatePlant = (id, updatedPlant)=>{
//         const plantDoc = doc(db,"users", this.props.userId, "Garden", id);
//         // const plantDoc = doc(db,"plants", id);

//         return updateDoc(plantDoc, updatedPlant);
//     };

//     deletePlant = (id) =>{
//         const plantDoc = doc(db,"users", this.props.userId, "Garden", id);
//         // const plantDoc = doc(db,"plants", id);

//             return deleteDoc(plantDoc);
        
        
//     };

//     getAllPlants = () =>{
        
//         return getDocs(this.props.plantCollectionRef);
//     };
    

//     getPlant = (id) => {
//         const plantDoc = doc(db,"users", this.props.userId, "Garden", id);
//         // const plantDoc = doc(db, "plants", id);

//         return getDoc(plantDoc);
//     };


// }
// export default new PlantDataService();
