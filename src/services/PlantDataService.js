import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
import { storage } from "../firebase-config";
import { useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";

// const auth = getAuth();
// const user = auth.currentUser;
const plantCollectionRef = collection(db,"users", 
"8O5ciqNR20Q2veqyKulUHxO3Vhv2"
, "Garden");
//const plantCollectionRef = collection(db,"plants");

class PlantDataService{
    getCollectionRef = (user)=>{
        return collection(db,"users", user, "Garden");
    }
    addPlants = (newPlant, user)=>{
        return addDoc(this.getCollectionRef(user), newPlant);
    };

    updatePlant = (id, updatedPlant, user)=>{
        //const plantDoc = doc(db,"users", user.uid, "Garden", id);
        //const plantDoc = doc(db,"plants", id);

        return updateDoc(this.getCollectionRef(user), updatedPlant);
    };

    deletePlant = (id, user) =>{
        //const plantDoc = doc(db,"users", user.uid, "Garden", id);
        //const plantDoc = doc(db,"plants", id);

            return deleteDoc(this.getCollectionRef(user));
        
        
    };

    getAllPlants = (user) =>{
        
        return getDocs(this.getCollectionRef(user));
    };
    

    getPlant = (id, user) => {
        //const plantDoc = doc(db,"users", user.uid, "Garden", id);
        //const plantDoc = doc(db, "plants", id);

        return getDoc(this.getCollectionRef(user));
    };


}
export default new PlantDataService();
