import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
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
        // const image = doc(`/plants/${id}/image`);
        // const image = plantDoc.data.image;
        // console.log(image);
;        // //const image = getMetadata(imageReference);
        // var filename = image.substring(image.lastIndexOf('/')+1);
        // console.log(filename);
        // if(image !=null){
        //     const storageReference = storage().refFromURL(image.name);
        //     const imageRef =ref(storage, `files/${storageReference}`);
        //     imageRef.delete().then(()=>{
        //         console.log("Image deleted");
        //         return deleteDoc(plantDoc);
        //     }).catch((e) =>{
        //         console.log(e);
        //     });
        // }else{
            return deleteDoc(plantDoc);
        //}
        
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
