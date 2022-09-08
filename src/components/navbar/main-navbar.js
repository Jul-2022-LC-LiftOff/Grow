import React from 'react';
import { Container , Nav , Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/homepage/homepage';
import RegistrationPage from '../../pages/registration/Registration.page';

export default function MainNavbar() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand className="me-auto" href='#home' class="brand">
                        Grow
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/Registration'>Log In/Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* <div>
                <Routes>
                    <Route path='/Registration' element={<RegistrationPage />}></Route>
                </Routes>
            </div> */}
        </>

    )
}