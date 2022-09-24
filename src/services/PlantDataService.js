import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot, setDoc } from "firebase/firestore";
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
        return updateDoc(doc(db, "users", user, "Garden", id), updatedPlant);
    };

    deletePlant = (id, user) =>{
        // return deleteDoc(this.getCollectionRef(user));
        return deleteDoc(doc(db, "users", user, "Garden", id))
    };

    getAllPlants = (user) =>{
        return getDocs(this.getCollectionRef(user));
    };
    



    getPlant = (id, user) => {
        return getDoc(doc(db, "users", user, "Garden", id));
    };


}
export default new PlantDataService();
