import React from "react";
import "./App.css";
import MyGarden from "./pages/myGarden";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import RegistrationPage from "./pages/registration/Registration.page";

import ProfileNavbar from "./components/navbar/profile-navbar"

import CropperTester from "./components/CropperTester";
import MainNavbar from "./components/navbar/main-navbar";
import { HomePage } from "./pages/homepage/homepage";
import MainBody from "./components/bodys/main_body/main_body";


function App() {
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
            {/* <ProfileNavbar /> */}
            <MainNavbar />
            {/* <HomePage /> */}
            <MainBody />
            {/* <RegistrationPage /> */}
            {/* <MyGarden /> */}
            {/* <CropperTester/> */}
          </div>
        }
      />
    </Routes>

    // <div class="mainBackground">
    //   <MyGarden/>
    // </div>

  );
}
export default App;
