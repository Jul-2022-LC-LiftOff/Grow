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
import MainNavbar from "./components/navbar/main-navbar";
import { HomePage } from "./pages/homepage/homepage";
import MainBody from "./components/main_body/main_body";
import MainPage from "./pages/homepage/mainPage";

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
          <div className="mainBackground">
            {/* <ProfileNavbar /> */}
            {/* <MainNavbar /> */}
            {/* <HomePage /> */}
            {/* <RegistrationPage /> */}
            {/* <MyGarden /> */}
            {/* <CropperTester/> */}
            <MainPage />
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
