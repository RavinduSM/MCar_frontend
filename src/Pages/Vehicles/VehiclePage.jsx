import React from "react";
import Navbar from "../../components/Navbar";

import VehicleListing from "./VehicleListing";

const VehiclePage = () => {
  return (
    <div>
      <Navbar />
      <VehicleListing />
    </div>
  );
};

export default VehiclePage;
