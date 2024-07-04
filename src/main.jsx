import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
// Auth

// Restricted

import Home from "./Pages/Homes/Home.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Register from "./Pages/Auth/Register.jsx";
import VehiclePage from "./Pages/Vehicles/VehiclePage.jsx";
import VehicleView from "./Pages/Vehicles/SingleVehicleView.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import AddVehicle from "./Pages/Dashboard/AddVehicle.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/vehicles" element={<VehiclePage />} />
      <Route path="/vehicles/:id" element={<VehicleView />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/addVehicle" element={<AddVehicle />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
