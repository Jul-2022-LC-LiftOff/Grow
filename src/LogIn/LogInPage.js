import React from "react";
//import "./login/LogInPage.css";
//import LogInInput from "./components/LogInInput.comp.js";
// import LogInInput from "../components/LogInInput";
import LogInForm from "../LogIn/LogInForm.comp";
//import LogIn from "./components/LogInPage.comp.js";
import classes from "../LogIn/Login.module.css";

function LogInPage() {
  return (
    <div className={classes.LogInPage}>
      <div className={classes.card}>
        <LogInForm />
        {/* <LogInInput /> */}
        {/* <h1>Test</h1> */}
      </div>
    </div>
  );
}

export default LogInPage;
