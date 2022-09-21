import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
// import { db } from "../firebase-config";
import { serverTimestamp } from "firebase/firestore";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import classes from "./Login.module.css";

const LogInForm = ( ) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");
  // [isSubmit, setIsSubmit] = useState(false);
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const { email, password } = formValues;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const formValuesCopy = { ...formValues };
      delete formValuesCopy.password;
      formValuesCopy.timestamp = serverTimestamp();
      navigate("/");
    } catch (err) {
      setError("Incorrect email or password");
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className={classes.signin}>Sign In</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <h2 className="mb-3">Firebase Auth LogIn</h2> */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
            {/* <p className="text-danger">{formErrors.email}</p> */}
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
            {/* <p className="text-danger">{formErrors.password}</p> */}
            <Button
              className={classes.custombtn}
              type="submit"
              // disabled={loading}
              // onClick={() => {
              //   navigate("/login");
              // }}
            >
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          Don't have an account{" "}
          <Link to="/Registration" className={classes.loginhere}>
            Sign up Here
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default LogInForm;
