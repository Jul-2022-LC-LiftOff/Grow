import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import RegistrationPage from "./pages/registration/Registration.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
