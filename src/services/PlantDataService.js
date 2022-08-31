import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { storage } from "../firebase-config";

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
        // this.deleteImage(id);
        return deleteDoc(plantDoc);
    };

    getAllPlants = () =>{
        return getDocs(plantCollectionRef);
    };
    

    getPlant = (id) => {
        const plantDoc = doc(db, "plants", id);
        return getDoc(plantDoc);
    };
    deleteImage =(id)=>{
        const singlePlant = this.getPlant(id);
        if(singlePlant.get( "image" )){
            const imageRef = ref(storage, `files/${singlePlant.image}`);
            imageRef.deleteObject();
        }
        
    }

}
export default new PlantDataService();
