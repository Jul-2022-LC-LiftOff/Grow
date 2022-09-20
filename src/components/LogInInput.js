import React from "react";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";
import { db } from "../firebase-config";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import LogInPage from "../login/LogInPage.js";

const LogInInput = () => {
   const initialValues = {
     username: "",
     password: "",
   };

   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   useEffect(() => {}, [formValues]);

   const { username, password } = formValues;

  // const navigate = useNavigate();

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormValues({ ...formValues, [name]: value });
   };

   const handleSubmit = async (e) => {
   e.preventDefault();
   setFormErrors(validate(formValues));
   }
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       username,
  //       password
  //     );

  //     const user = userCredential.user;
  //     updateProfile(auth.currentUser, { username: username });

  //    const formValuesCopy = { ...formValues };
  //    delete formValuesCopy.password;
  //    formValuesCopy.timestamp = serverTimestamp();

   //   await setDoc(doc(db, "users", user.uid), formValuesCopy);

  //     navigate("/LogIn");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

   const validate = (values) => {
     const errors = {};
    const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  return (
    <Container>
      {/* <h1>InPut Test</h1> */}
     <Row>
        <Col>
          <h1 className="LogInPage">Log in</h1>
        </Col>
      </Row> 

       <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </Form.Group>
            {/* <p className="text-danger">{formErrors.username}</p>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Form.Group>
  <p className="text-danger">{formErrors.email}</p>*/}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </Form.Group>
            <p className="text-danger">{formErrors.password}</p>

            <Button
              className="custom-btn "
              // variant="primary"
              type="submit"
            >
              Log in
            </Button> 
          </Form>
        </Col>
      </Row> 

    </Container>
  );
};

export default LogInInput;