import React from "react";
import classes from "../../pages/registration/Registration.style.css";

import RegistrationForm from "../../components/registration/RegistrationForm.comp";

function RegistrationPage() {
  return (
    <div className="registrationPage">
      <div className="card">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
