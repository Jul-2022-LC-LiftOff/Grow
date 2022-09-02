import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot } from "firebase/firestore";
import { ref as storageRef, deleteObject } from "firebase/storage";

import { storage } from "../firebase-config";

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
        const {image} = DocumentSnapshot.get();
        if(image !=null){
            const storageReference = storage().refFromURL(image);
            const imageRef = storage().ref(storageReference.fullPath);
            imageRef.delete().then(()=>{
                console.log("Image deleted");
                deleteDoc(plantDoc);
            }).catch((e) =>{
                console.log(e);
            });
        }else{
            return deleteDoc(plantDoc);
        }
        
    };

    getAllPlants = () =>{
        return getDocs(plantCollectionRef);
    };
    

    getPlant = (id) => {
        const plantDoc = doc(db, "plants", id);
        return getDoc(plantDoc);
    };
    // deleteImage =(id)=>{
    //     const singlePlant = this.getPlant(id);
    //     if(singlePlant.get( "image" )){
    //         const imageRef = storageRef(storage, `files/${singlePlant.image}`);
    //         deleteObject(imageRef);
    //     }
        
    // }

}
export default new PlantDataService();
