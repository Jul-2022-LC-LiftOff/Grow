import { useState, useEffect } from "react";
import { collection, doc, getDoc , getDocs, setDoc, addDoc, deleteDoc} from "firebase/firestore";

import ProfileNavbar from "../../components/navbar/profile-navbar";
import SearchBar from "../../components/searchBar/searchBar";
import MyGarden from "../myGarden";
import { db } from "../../firebase-config";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { getAuth } from "firebase/auth";







function ProfilePage( props ) {

    let [garden, setGarden] = useState("");
    let [filteredGarden, setFilteredGarden] = useState([]);
    let [updateTrigger, setUpdateTrigger] = useState(1);
    // const [user, setUser] = useState();

    var userId = props.userId;
    const getGarden = async () => {
        let resultArr = [];
        
        // const plantsRef = collection(db,"users", userId, "Garden");

        // get the current user doc ref
        const userRef = doc(db,"users", userId);
        // console.log(userRef);

        // this is how you read data from the user doc ref
        const userSnap = await getDoc(userRef);
        // console.log(userSnap.data())

        // userSnap.forEach((doc) => {
        //     resultArr.push(doc.data());
        // })


        // this can add objects to the Garden collection, using addDoc, because we like to have auto gened Id for the plant
        // await addDoc(collection(db,"users", userId, "Garden"), {test: "test Obj"})

        
        // get the Garden collection ref from firestore
        const userGardenRef = collection(db, "users", userId, "Garden");
        // console.log(userGardenRef);

        // get all the documents in the Garden collection
        const userGardenSnap = await getDocs(userGardenRef);
        
        userGardenSnap.forEach((doc) => {
            // add id to the object we got from the database
            let newObj = {...doc.data(), id: doc.id}
        
            resultArr.push(newObj);
        })
        // console.log(resultArr);
        return resultArr;
    }
    
    useEffect(() => {
        
        if (userId) {
            getGarden()
                .then((result) => {
                    setGarden(result);
                    setFilteredGarden(result);
                    
                });
        }

    }, [userId, updateTrigger]);
    

    return (
        <div>
            
            <ProfileNavbar />
            
            <SearchBar userGarden={garden} setFilteredGarden={ setFilteredGarden }/> 
            
            <MyGarden filteredGarden={ filteredGarden } userId={props.userId} updateTrigger={setUpdateTrigger} updateVal={updateTrigger}/>
        </div>
        
    );
}

export default ProfilePage;