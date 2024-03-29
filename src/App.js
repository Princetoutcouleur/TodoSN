import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./components/Auth/ForgotPassword";

function App() {
  return (
    <Router>
      <div className="App container w-100">
        <div>
        <ToastContainer />
          <Routes>
            <Route exact path="/" element={<Login className="w-lg-50" />} />
            <Route path="/signup" element={<Signup className="w-lg-50" />} />
            <Route path="/home" element={<Home className="w-lg-75" />} />
            <Route path="/reset" element={<ForgotPassword className="w-lg-75" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
