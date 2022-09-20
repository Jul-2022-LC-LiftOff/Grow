import React from 'react';
import {  Nav , Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MyGarden from "../../pages/myGarden";
import MainPage from "../../pages/homepage/mainPage";
import "./profile-navbar.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";


export default function ProfileNavbar() {
    return (
        <>
            
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="">

                <Nav>
                    <Navbar.Brand className="home" href="myGarden" alt="Go to your garden">Grow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Nav.Link className="signout position-absolute end-0" href="/" alt="sign out">Sign Out</Nav.Link>
                </Nav>
            </Navbar>


            {/* <div>
                <Routes>
                    <Route path='/myGarden' element={<MyGarden />}></Route>
                    <Route path='/mainpage' element={<MainPage />}></Route>
                </Routes>
            </div> */}

        </>


    )
}