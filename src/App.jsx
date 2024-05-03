import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Homes/Home";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Navbar from "./components/Navbar";
import Vehicle from "./Pages/Vehicle/Vehicle";
>>>>>>> parent of 106a048 (Revert "RTK Query setup")
=======
>>>>>>> parent of e033458 (slider removed)

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
