import React from 'react';
import { Nav , Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/homepage/mainPage';
import RegistrationPage from '../../pages/registration/Registration.page';
import LogInPage from '../../LogIn/LogInPage';
import "./main-navbar-style.css";

export default function MainNavbar() {
    return (
        <>  
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="">

                <Nav>
                    <Navbar.Brand className="home" href="mainPage" alt="Go to home page">Grow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Nav.Link className="signin position-absolute end-0" href="LogIn" alt="Sign in">Sign in</Nav.Link>
                    <Nav.Link className="register position-absolute end-0" href="Registration" alt="Register">Register</Nav.Link>
                </Nav>
            </Navbar>

            <div>
                <Routes>
                    <Route path='/mainPage' element={<MainPage />}></Route>
                    <Route path='/LogIn' element={<LogInPage />}></Route>
                    <Route path='/Registration' element={<RegistrationPage />}></Route>
                </Routes>
            </div> 
        </>

    )
}