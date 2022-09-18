import React, { useContext } from "react";
import "./App.css";
import MyGarden from "./pages/myGarden";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { UserContext } from "./components/UserContext";
import RegistrationPage from "./pages/registration/Registration.page";
import NotificationPage from "./pages/notification/Notification.page";

import ProfileNavbar from "./components/navbar/profile-navbar";

import CropperTester from "./components/CropperTester";

function App() {
  // const currentUser = auth.
  return (
    <Routes>
      <Route path="/signup" element={<RegistrationPage />} />
      <Route
        path="/login"
        element={<div className="style">Welcome To Login Page</div>}
      />
      <Route
        path="/"
        element={
          <div class="mainBackground">
            {/* <ProfileNavbar />
            <MyGarden /> */}
            {/* <CropperTester/> */}
            <ProfilePage />
          </div>
        }
      />
      <Route path="/notify" element={<NotificationPage />} />
    </Routes>


    // <div class="mainBackground">
    //   <MyGarden/>
    // </div>
  );
}
export default App;
