import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import car from "../../assets/car-1890494_1280.jpg";
import { useParams } from "react-router-dom";
import { useGetVehiclesByIdQuery } from "../../redux/api/vehicles";
import { toast } from "react-toastify";

const SingleVehicleView = () => {
  const { id } = useParams();

  console.log(id);

  const { data, error, isLoading } = useGetVehiclesByIdQuery(id);
  console.log(data);

  useEffect(() => {
    // Optionally handle error or loading states
    if (error) {
      toast.error("Error fetching vehicles:", error);
      console.error("Error fetching vehicles:", error);
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="py-10">
        {/*  */}
        <div className="grid grid-cols-1 p-8 my-10 md:grid-cols-2 md:my-0">
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <img
              src={car}
              alt="/"
              className=" w-full duration-300 md:h-[450px]   h-[300px]  "
            />
          </div>
          <div className="flex flex-col px-3 mt-6 lg:px-10 md:mt-0">
            <h1 className="pb-6 text-3xl font-medium">Audi</h1>
            <div className="flex gap-6 pb-6">
              <span className="text-red-600">Rs 1,200,000.00</span>
            </div>
            <div className="grid grid-cols-1 p-8 my-10 md:grid-cols-2 md:my-0">
              <div className="relative flex flex-col">
                <p className="">Year</p>
                <p className="">Vehicle Model</p>
                <p className="">Vehicle Brand</p>
                <p className="">Body Type</p>
                <p className="">Transmission</p>
                <p className="">Drivetrain</p>
                <p className="">Engine</p>
                <p className="">Engine Capacity</p>
                <p className="">Fuel Type</p>
                <p className="">Fuel Economy</p>
                <p className="">Trim</p>
                <p className="">Mileage</p>
                <p className="">Vehicle Condition</p>
              </div>
              <div className="relative flex flex-col">
                <p className="">Year</p>
                <p className="">Vehicle Model</p>
                <p className="">Vehicle Brand</p>
                <p className="">Body Type</p>
                <p className="">Transmission</p>
                <p className="">Drivetrain</p>
                <p className="">Engine</p>
                <p className="">Engine Capacity</p>
                <p className="">Fuel Type</p>
                <p className="">Fuel Economy</p>
                <p className="">Trim</p>
                <p className="">Mileage</p>
                <p className="">Vehicle Condition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVehicleView;
