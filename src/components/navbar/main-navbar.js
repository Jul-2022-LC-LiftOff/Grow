import React from 'react';
import { Container , Nav , Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../pages/registration/Registration.page';

export default function mainNavbar() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href='#home'></Navbar.Brand>
                    <Nav className='me-auto' activeKey="/home" 
                    onSelect={(selectedKey)  => alert(`selected ${selectedKey}` )}
                    >
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/Registration'>Log In/Register</Nav.Link>
                    </Nav>
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