import React from 'react';
import { Container , Nav , Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../pages/registration/Registration.page';

export default function mainNavbar() {
    return (
        <>  
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Grow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Registration">Log In/Register</Nav.Link>
                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path='/Registration' element={<RegistrationPage />}></Route>
                </Routes>
            </div>
        </>

    )
}