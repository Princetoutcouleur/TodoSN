import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App container w-100">
        <div>
          <Routes>
            <Route exact path="/" element={<Login className="w-lg-50" />} />
            <Route path="/signup" element={<Signup className="w-lg-50" />} />
            <Route path="/home" element={<Home className="w-lg-75" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
