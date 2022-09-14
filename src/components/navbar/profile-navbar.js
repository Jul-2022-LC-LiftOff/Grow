import React from 'react';
import { Container , Nav , Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import MyGarden from "../../pages/myGarden";
import "./profile-navbar.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";


export default function ProfileNavbar() {
    return (
        <>
            
            <Navbar className="navbar-custom custom-color">
                    <Navbar.Brand href='#home' className="brand">Grow</Navbar.Brand>
                        <Nav activeKey="/home">
                            <Nav.Link as={Link} to='/myGarden' className="text-success">My Garden</Nav.Link>
                            <Nav.Link as={Link} to='#' className="text-success">Log out</Nav.Link>
                        </Nav>
            </Navbar>


            <div>
                <Routes>
                    <Route path='/myGarden' element={<MyGarden />}></Route>
                </Routes>
            </div>


        </>

    )
}