import { useState } from "react";


import ProfileNavbar from "../../components/navbar/profile-navbar";
import SearchBar from "../../components/searchBar/searchBar";
import MyGarden from "../myGarden";


function ProfilePage() {

    let [garden, setGarden] = useState(null);
    let [filteredGarden, setFilteredGarden] = useState(null);

    return (
        <div>

            <ProfileNavbar />

            <SearchBar /> 

            {/* <MyGarden /> */}


        </div>
    );
}

export default ProfilePage;