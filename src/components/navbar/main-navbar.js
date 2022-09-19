import React from 'react';
import { Container , Nav , Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../pages/registration/Registration.page';
import "./main-navbar.style.css";

export default function mainNavbar() {
    return (
        <>  
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="">

                <Nav>
                    <Navbar.Brand className="home" href="#home" alt="Go to home page">Grow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Nav.Link className="signout position-absolute end-0" href="#Registration" alt="Sign in/Register">Sign in/Register</Nav.Link>
                </Nav>
            </Navbar>
            <div>
                <Routes>
                    <Route path='/Registration' element={<RegistrationPage />}></Route>
                </Routes>
            </div>
        </>

    )
}