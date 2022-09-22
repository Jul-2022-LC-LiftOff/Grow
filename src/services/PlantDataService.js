import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
import { storage } from "../firebase-config";
import { useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";



class PlantDataService{
    getCollectionRef = (user)=>{
        return collection(db,"users", user, "Garden");
    }
    addPlants = (newPlant, user)=>{
        return addDoc(this.getCollectionRef(user), newPlant);
    };

    updatePlant = (id, updatedPlant, user)=>{
       
        return updateDoc(this.getCollectionRef(user), updatedPlant);
    };

    deletePlant = (id, user) =>{
      

            return deleteDoc(this.getCollectionRef(user));
        
        
    };

    getAllPlants = (user) =>{
        
        return getDocs(this.getCollectionRef(user));
    };
    

    getPlant = (id, user) => {
       
        return getDoc(this.getCollectionRef(user));
    };


}
export default new PlantDataService();
