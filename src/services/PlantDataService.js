import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
import { storage } from "../firebase-config";
import { useEffect, useRef } from "react";

//onChildChanged and onChildRemoved
const plantCollectionRef = collection(db,"plants");
class PlantDataService{

    addPlants = (newPlant)=>{
        return addDoc(plantCollectionRef, newPlant);
    };

    updatePlant = (id, updatedPlant)=>{
        const plantDoc = doc(db, "plants", id);
        return updateDoc(plantDoc, updatedPlant);
    };

    deletePlant = (id) =>{
        const plantDoc = doc(db, "plants", id);
        
            return deleteDoc(plantDoc);
        
        
    };

    getAllPlants = () =>{
        
        return getDocs(plantCollectionRef);
    };
    

    getPlant = (id) => {
        const plantDoc = doc(db, "plants", id);

        return getDoc(plantDoc);
    };

   
   
    // deleteImage =  (id) =>{
    //     const plant = doc(db, "plants", id);
    //     const doc = getDoc(plant);
    //     const imageUrl = ref(storage, doc.image);
    //                         getMetadata(imageUrl)
    //                         .then((metadata) => {
    //                             const storageRef = ref(storage, `files/${imageUrl.name}`);
    //                             deleteObject(storageRef).then(()=>{
    //                                 console.log("IMAGE DELETED");
    //                             }).catch((error)=>{
    //                                 console.log(error);
    //                             })
    //                         })
    //                         .catch((error) => {console.log(error)});
    // }

}
export default new PlantDataService();
