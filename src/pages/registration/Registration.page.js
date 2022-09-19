import React from "react";
import classes from "../../pages/registration/Registration.module.css";

import RegistrationForm from "../../components/registration/RegistrationForm.comp";

function RegistrationPage() {
  return (
    <div className={classes.registrationpage}>
      <div className={classes.card}>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
