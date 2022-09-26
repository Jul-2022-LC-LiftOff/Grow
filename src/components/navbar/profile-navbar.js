import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MyGarden from "../../pages/myGarden";
import MainPage from "../../pages/homepage/mainPage";
import NotificationPage from "../../pages/notification/Notification.page";
import "./profile-navbar.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import growLogo from "../../assets/growLogo.png";
//import "bootstrap/dist/js/bootstrap.min.js";
import { getAuth, signOut } from "firebase/auth";


export default function ProfileNavbar() {
  const signOuthandler = () => {
    localStorage.removeItem("id");

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <Navbar

        expand="md"
        bg="dark"
        variant="dark"
      >
        <Nav>
          <Navbar.Brand
            className="home"
            href="myGarden"
          >
            <img
            alt="Grow"
            src={growLogo}
            height="40px"
            />
          </Navbar.Brand>


          <Nav.Link
            className="signout position-absolute end-0"
            href="/"
            alt="sign out"
            onClick={signOuthandler}
          >
            Sign Out
          </Nav.Link>

          <Nav.Link
            className="water position-absolute end-0"
            href="/notify"
            alt="water schedule"
          >
            Water
          </Nav.Link>

        </Nav>
      </Navbar>

    </>
  );
}
