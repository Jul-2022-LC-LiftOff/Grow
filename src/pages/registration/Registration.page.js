import React from "react";
import "../../pages/registration/Registration.style.css";

import RegistrationForm from "../../components/RegistrationForm.comp";

function RegistrationPage() {
  return (
    <div className="registration-page">
      <div className="card">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
