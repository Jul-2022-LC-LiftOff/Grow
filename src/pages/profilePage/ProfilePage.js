import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";

import ProfileNavbar from "../../components/navbar/profile-navbar";
import SearchBar from "../../components/searchBar/searchBar";
import MyGarden from "../myGarden";
import { db } from "../../firebase-config";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

function ProfilePage() {

    let [garden, setGarden] = useState(null);
    let [filteredGarden, setFilteredGarden] = useState(null);
    

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
            });
        console.log(filteredGarden);

    }, [filteredGarden])

    
    
    

    return (
        <div>
            
            {/* <ProfileNavbar /> */}
            
            <SearchBar userGarden={garden} setFilteredGarden={ setFilteredGarden }/> 

            {/* <MyGarden /> */}


        </div>
    );
}

export default ProfilePage;