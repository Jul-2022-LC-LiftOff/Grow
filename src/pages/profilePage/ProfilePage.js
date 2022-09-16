import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";

import ProfileNavbar from "../../components/navbar/profile-navbar";
import SearchBar from "../../components/searchBar/searchBar";
import MyGarden from "../myGarden";
import { db } from "../../firebase-config";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";







function ProfilePage() {

    let [garden, setGarden] = useState("");
    let [filteredGarden, setFilteredGarden] = useState("");
    

    const getGarden = async () => {
        let resultArr = [];
        const plantsRef = collection(db, "plants");
        const plantsSnap = await getDocs(plantsRef);
        plantsSnap.forEach((doc) => {
            resultArr.push(doc.data());
        })
        return resultArr;
    }

    useEffect(() => {

        getGarden()
            .then((result) => {
                setGarden(result);
                setFilteredGarden(result);
            });
        
        // this is for debugging
        // if (filteredGarden !== "") {
        //     console.log(filteredGarden);
        // } else {
        //     console.log("nothing found");
        // }
        
    // }, [filteredGarden]);
    }, []);

    
    
    
    return (
        <div>
            
            {/* <ProfileNavbar /> */}
            
            <SearchBar userGarden={garden} setFilteredGarden={ setFilteredGarden }/> 

            <MyGarden filteredGarden={ filteredGarden }/>

        </div>
    );
}

export default ProfilePage;