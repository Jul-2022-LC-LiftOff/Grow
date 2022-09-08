import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import LogInPage from "./LogIn/LogInPage";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LogInPage />} />
    //   <Route
    //     path="/LogInPage"
    //     element={<div className="style">Welcome To Login Page</div>}
    //   />
    // </Routes>
    <LogInPage />
  );
}

export default App;