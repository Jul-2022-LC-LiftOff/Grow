import React from "react";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";

import { Container, Row, Col, Button, Form } from "react-bootstrap";

const RegistrationForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {}, [formValues]);

  const { username, email, password } = formValues;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, { username: username });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regEx.test(values.email)) {
      errors.email = "Invalid email!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (!(values.password === values.confirmpassword)) {
      errors.confirmpassword = "Confirm password and password must be same";
    }
    return errors;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Sign Up</h1>
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
            <p className="text-danger">{formErrors.username}</p>

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
            <p className="text-danger">{formErrors.email}</p>

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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmpassword"
                placeholder="ConfirmPassword"
                value={formValues.connfirmpassword}
                onChange={handleChange}
              />
            </Form.Group>
            <p className="text-danger">{formErrors.confirmpassword}</p>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="py-4">
        <Col>
          Already have an account? <Link to="/login">Login Here</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
