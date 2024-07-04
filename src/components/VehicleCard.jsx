import React from "react";
import car from "../assets/car-1890494_1280.jpg";
import { FaHeart, FaEye } from "react-icons/fa";

import { Link } from "react-router-dom";

const VehicleCard = (props) => {
  const { vehicles } = props;
  return (
    <div>
      <div className="relative flex flex-col w-full overflow-hidden rounded-lg shadow-xl group">
        <div>
          <img src={car} alt="" className=" w-full md:h-[250px] h-[150px]" />
        </div>

        <div className="flex justify-between px-2 py-3 mx-1 duration-300 bg-white rounded-full group-hover:-mt-6 md:mx-6 group-hover:md:-mt-7 md:px-6">
          <FaHeart
            size={25}
            className="duration-200 cursor-pointer hover:scale-110"
          />
          <Link to={`/vehicles/${vehicles._id}`}>
            <FaEye
              size={25}
              className="duration-200 cursor-pointer hover:scale-110"
            />
          </Link>
        </div>

        <div className="text-start">
          <p className="py-2 mx-3 text-lg font-bold md:mx-8">
            {vehicles.vehicleBrand} {vehicles.vehicleModel}
          </p>
        </div>
        <div className="flex">
          <p className="py-2  mx-3 text-xl font-bold md:mx-8">
            Rs.{vehicles.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
