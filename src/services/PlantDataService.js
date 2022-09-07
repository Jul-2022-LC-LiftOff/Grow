import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
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

}
export default new PlantDataService();