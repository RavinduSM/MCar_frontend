import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useCreateVehicleMutation } from "../../redux/api/vehicles";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [createVehicle, { isLoading }] = useCreateVehicleMutation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    year: "",
    vehicleModel: "",
    bodyType: "",
    transmission: "",
    driveTrain: "",
    engine: "",
    fuelType: "",
    fuelEconomy: "",
    trim: "",
    mileage: "",
    interiorColor: "",
    exteriorColor: "",
    price: "",
    vehicleCondition: "",
    vehicleBrand: "",
    engineCapacity: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await createVehicle(formData);

      if (response.error) {
        throw new Error(response.error.message);
      }

      dispatch(response); // Assuming dispatch needs the entire response object

      navigate("/Dashboard");
      toast.success("Vehicle added successfully.");
    } catch (err) {
      console.error("Error adding vehicle:", err.message);
      toast.error(err.message || "Failed to add vehicle.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pl-[10rem] flex flex-wrap">
        <div className="mr-[4rem] mt-[5rem]">
          <h1 className="text-2xl font-semibold mb-4">Add Vehicle</h1>
          <form onSubmit={submitHandler} className="container w-[40rem]">
            <div className=".my-[2rem]">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-white"
              >
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Year"
                value={formData.year}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="vehicleModel"
                className="block text-sm font-medium text-white"
              >
                Vehicle Model
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter  Vehicle Model"
                value={formData.vehicleModel}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="vehicleBrand"
                className="block text-sm font-medium text-white"
              >
                Vehicle Brand
              </label>
              <input
                type="text"
                id="vehicleBrand"
                name="vehicleBrand"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Vehicle Brand"
                value={formData.vehicleBrand}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="bodyType"
                className="block text-sm font-medium text-white"
              >
                Body Type
              </label>
              <input
                type="text"
                id="bodyType"
                name="bodyType"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Body Type"
                value={formData.bodyType}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="transmission"
                className="block text-sm font-medium text-white"
              >
                Transmission
              </label>
              <input
                type="text"
                id="transmission"
                name="transmission"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Transmission"
                value={formData.transmission}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="driveTrain"
                className="block text-sm font-medium text-white"
              >
                Drivetrain
              </label>
              <input
                type="text"
                id="driveTrain"
                name="driveTrain"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Drivetrain"
                value={formData.driveTrain}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="engine"
                className="block text-sm font-medium text-white"
              >
                Engine
              </label>
              <input
                type="text"
                id="engine"
                name="engine"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Engine"
                value={formData.engine}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="engineCapacity"
                className="block text-sm font-medium text-white"
              >
                Engine Capacity
              </label>
              <input
                type="text"
                id="engineCapacity"
                name="engineCapacity"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter engineCapacity"
                value={formData.engineCapacity}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="fuelType"
                className="block text-sm font-medium text-white"
              >
                Fuel Type
              </label>
              <input
                type="text"
                id="fuelType"
                name="fuelType"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Fuel Type"
                value={formData.fuelType}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="fuelEconomy"
                className="block text-sm font-medium text-white"
              >
                Fuel Economy
              </label>
              <input
                type="text"
                id="fuelEconomy"
                name="fuelEconomy"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Fuel Economy"
                value={formData.fuelEconomy}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="trim"
                className="block text-sm font-medium text-white"
              >
                Trim
              </label>
              <input
                type="text"
                id="trim"
                name="trim"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Trim"
                value={formData.trim}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="mileage"
                className="block text-sm font-medium text-white"
              >
                Mileage
              </label>
              <input
                type="text"
                id="mileage"
                name="mileage"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Mileage"
                value={formData.mileage}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="vehicleCondition"
                className="block text-sm font-medium text-white"
              >
                Vehicle Condition
              </label>
              <input
                type="text"
                id="vehicleCondition"
                name="vehicleCondition"
                className="mt-1 p-2 border rounded w-full"
                placeholder="EnterVehicle Condition"
                value={formData.vehicleCondition}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-white"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="interiorColor"
                className="block text-sm font-medium text-white"
              >
                Interior Color
              </label>
              <input
                type="text"
                id="interiorColor"
                name="interiorColor"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Interior Color"
                value={formData.interiorColor}
                onChange={handleInputChange}
              />
            </div>

            <div className=".my-[2rem]">
              <label
                htmlFor="exteriorColor"
                className="block text-sm font-medium text-white"
              >
                Exterior Color
              </label>
              <input
                type="text"
                id="exteriorColor"
                name="exteriorColor"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter Exterior Color"
                value={formData.exteriorColor}
                onChange={handleInputChange}
              />
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded cursor-ponter my-[1rem]"
            >
              {isLoading ? "Adding..." : "Add"}
            </button>
            {isLoading && <Loader />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
