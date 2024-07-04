import React, { useEffect, useState } from "react";
import { useGetVehiclesQuery } from "../../redux/api/vehicles";
import { useDeleteVehicleMutation } from "../../redux/api/vehicles";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const VehicleTable = () => {
  const { data, error, isLoading } = useGetVehiclesQuery();

  //   console.log(data);

  const [deleteVehicle] = useDeleteVehicleMutation();

  const handleDeleteVehicle = async (id) => {
    try {
      await deleteVehicle(id);
      toast.success("Vehicle deleted successfully");
    } catch (error) {
      console.error("Error deleting vehicle:", error.message);
      toast.error("Failed to delete vehicle.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Link to="/addVehicle">
        <button className="">Add Vehicles</button>
      </Link>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Vehicle
              </th>
              <th scope="col" class="px-6 py-3">
                Year
              </th>
              <th scope="col" class="px-6 py-3">
                Engine
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.vehicle.map((vehicles) => (
                <tr
                  class="odd:bg-white  even:bg-gray-50  border-b "
                  key={vehicles._id}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {vehicles.vehicleBrand}
                    {vehicles.vehicleModel}
                  </th>
                  <td class="px-6 py-4">{vehicles.year}</td>
                  <td class="px-6 py-4">{vehicles.engine}</td>
                  <td class="px-6 py-4">$ {vehicles.price}</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600  hover:underline"
                    >
                      Edit
                    </a>
                    <button
                      type="button"
                      onClick={(e) => handleDeleteVehicle(vehicles._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleTable;
