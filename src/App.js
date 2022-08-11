import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import RegistrationPage from "./pages/registration/Registration.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route
        path="/login"
        element={<div className="style">Welcome To Login Page</div>}
      />
    </Routes>
  );
}

export default App;
