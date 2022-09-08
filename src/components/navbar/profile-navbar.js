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

            <Navbar class="navbar-custom">
                <Container>
                    <Navbar.Brand className="me-auto" href='#home' class="brand">
                        Grow
                    </Navbar.Brand>

                    <Nav activeKey="/home">
                        <Nav.Link as={Link} to='/myGarden' className="text-success">My Garden</Nav.Link>
                        <Nav.Link as={Link} to='#' className="text-success">Log out</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>


            {/* <div>
                <Routes>
                    <Route path='/myGarden' element={<MyGarden />}></Route>
                </Routes>
            </div> */}

            </>


    )
}