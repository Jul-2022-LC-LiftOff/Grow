import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/homepage/mainPage";
import RegistrationPage from "../../pages/registration/Registration.page";
import LogInPage from "../../LogIn/LogInPage";
import "./main-navbar-style.css";
import growLogo from "../../assets/growLogo.png";
export default function MainNavbar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className=""
      >
        <Nav>
          <Navbar.Brand className="home" href="/" alt="Go to home page">
            {/* //Grow */}
            <img
            alt="Grow"
            src={growLogo}
            height="40px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Nav.Link
            className="signin position-absolute end-0"
            href="LogIn"
            alt="Sign in"
            
            
          >
            Sign in
          </Nav.Link>

          <Nav.Link
            className="register position-absolute end-0"
            href="Registration"
            alt="Register"
          >
            Register
          </Nav.Link>
        </Nav>
      </Navbar>

    </>
  );
}
