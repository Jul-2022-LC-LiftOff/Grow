import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import MyGarden from "./pages/myGarden";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { UserContext } from "./components/UserContext";
import RegistrationPage from "./pages/registration/Registration.page";
import NotificationPage from "./pages/notification/Notification.page";
//import {createBrowserHistory} from "history";
import ProfileNavbar from "./components/navbar/profile-navbar";
import ProfilePage from "./pages/profilePage/ProfilePage";
import LogInPage from "./LogIn/LogInPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainNavbar from "./components/navbar/main-navbar";
import MainBody from "./components/main_body/main_body";
import MainPage from "./pages/homepage/mainPage";
import { FirebaseError } from "firebase/app";
import { doc, getDoc} from "firebase/firestore";
import { db } from "./firebase-config";


function App() {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    let id = localStorage.getItem("id");

    setUserId(id);

    if (id != undefined) {
      getUser(id)
        .then((res) => {
          setUser(res);
        })
    }
    
    
  }, [userId]);

 
  const getUser = async () => {
    let userRef 
    if (userId != undefined) {
      userRef = doc(db,"users", userId);

      const userSnap = await getDoc(userRef);
      const userObj = {...userSnap.data(), uid: userId};

      return userObj;
    }
    
}

  return (
    <Routes>
      {/* <Route path="/signup" element={<RegistrationPage />} /> */}
      {/* <Route
        path="/login"
        element={<div className="style">Welcome To Login Page</div>}
      /> */}
      <Route
        path="/"
        element={
          <div className="mainBackground">
            <MainPage />
          </div>
        }
      />
      <Route
        path="/profilePage"
        element={<ProfilePage userId={userId} />}
      ></Route>
      <Route
        path="/LogIn"
        element={<LogInPage setUserId={setUserId} />} //setUserId={setUserId}
      ></Route>
      <Route path="/Registration" element={<RegistrationPage />}></Route>
      <Route path="/notify" element={ <NotificationPage user={user}/> }></Route>
      
      
    </Routes>

    // <div class="mainBackground">
    //   <MyGarden/>
    // </div>
  );
}
export default App;
