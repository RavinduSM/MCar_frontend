import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Homes/Home";
<<<<<<< HEAD
=======
import Navbar from "./components/Navbar";
import Vehicle from "./Pages/Vehicle/Vehicle";
>>>>>>> parent of 106a048 (Revert "RTK Query setup")

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicle />} />
      </Routes>
    </div>
  );
};

export default App;
