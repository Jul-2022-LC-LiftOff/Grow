import React from "react";
//import "./LogIn/LogInPage.css";
//import LogInInput from "./components/LogInInput.comp.js";
import LogInInput from "../components/LogInInput";
//import LogIn from "./components/LogInPage.comp.js";

function LogInPage() {
  return (
    <div className="LogInPage-page">
      <div className="card">
        <LogInInput />
        {/* <h1>Test</h1> */}
      </div>
    </div>
  );
}

export default LogInPage;