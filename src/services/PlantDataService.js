import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
import { storage } from "../firebase-config";
import { useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";


// const plantCollectionRef = collection(db,"plants");


function PlantDataService ( props ) {
    console.log(props.userId);

    if (props.userId != null) {
        const auth = getAuth();
        // const user = auth.currentUser;
        const plantCollectionRef = collection(db,"users", props.userId, "Garden");
    
        const addPlants = (newPlant)=>{
            return addDoc(plantCollectionRef, newPlant);
        };
            
        const updatePlant = (id, updatedPlant)=>{
            const plantDoc = doc(db,"users", props.userId, "Garden", id);
            // const plantDoc = doc(db,"plants", id);

            return updateDoc(plantDoc, updatedPlant);
        };

        const deletePlant = (id) =>{
            const plantDoc = doc(db,"users", props.userId, "Garden", id);
            // const plantDoc = doc(db,"plants", id);

                return deleteDoc(plantDoc);
            
            
        };

        const getAllPlants = () =>{
            
            return getDocs(plantCollectionRef);
        };
        

        const getPlant = (id) => {
            const plantDoc = doc(db,"users", props.userId, "Garden", id);
            // const plantDoc = doc(db, "plants", id);

            return getDoc(plantDoc);
        };
        

    }
}
export default PlantDataService;


// class PlantDataService {

    

//     addPlants = (newPlant)=>{
//         return addDoc(plantCollectionRef, newPlant);
//     };

//     updatePlant = (id, updatedPlant)=>{
//         const plantDoc = doc(db,"users", user.uid, "Garden", id);
//         // const plantDoc = doc(db,"plants", id);

//         return updateDoc(plantDoc, updatedPlant);
//     };

//     deletePlant = (id) =>{
//         const plantDoc = doc(db,"users", user.uid, "Garden", id);
//         // const plantDoc = doc(db,"plants", id);

//             return deleteDoc(plantDoc);
        
        
//     };

//     getAllPlants = () =>{
        
//         return getDocs(plantCollectionRef);
//     };
    

//     getPlant = (id) => {
//         const plantDoc = doc(db,"users", user.uid, "Garden", id);
//         // const plantDoc = doc(db, "plants", id);

//         return getDoc(plantDoc);
//     };


// }
// export default new PlantDataService();
