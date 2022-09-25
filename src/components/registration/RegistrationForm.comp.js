import React from "react";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config";
import { db } from "../../firebase-config";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";

import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import classes from "../../pages/registration/Registration.module.css";

const RegistrationForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    hasPlant: false
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");

  const { username, email, password } = formValues;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (Object.keys(validate(formValues)).length === 0) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        updateProfile(auth.currentUser, { username: username });

        const formValuesCopy = { ...formValues };
        delete formValuesCopy.password;
        delete formValuesCopy.confirmpassword;

        formValuesCopy.timestamp = serverTimestamp();

        await setDoc(doc(db, "users", user.uid), formValuesCopy);

        navigate("/profilePage");
      } catch (error) {
        setError("This user already have an account");
        // setError(error);
      }
    } else {
      setFormErrors(validate(formValues));
    }
  };

  const validate = (values) => {
    const errors = {};
    // const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    // else if (!regEx.test(values.email)) {
    //   errors.email = "Invalid email!";
    // }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
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
          <h1 className={classes.signup}>Sign Up</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          {error && <Alert variant="danger">{error}</Alert>}
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

            <Button
              className={classes.custombtn}
              // variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="py-4">
        <Col>
          Already have an account?{" "}
          <Link to="/login" className={classes.loginhere}>
            Login Here
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
