import React from "react";
import car from "../assets/car-1890494_1280.jpg";
import { Link } from "react-router-dom";

const VehicleCard = () => {
  return (
    <div className="w-[257px] h-[355px] flex flex-col relative hover:shadow-xl transition-shadow ">
      <div className="flex justify-between absolute p-[10px] items-center w-[100%]  ">
        {/* product Img */}
        <div className="bg-gray-300 flex w-[100%] h-[270px]  p-[10px] justify-center items-center ">
          <img
            src={car}
            alt={Image}
            className="max-w-[175px] max-h-[165px] object-cover"
          />
        </div>
        {/* details */}
        <div className="flex flex-col gap-[5px] p-[5px]">
          {/* title */}
          <div>
            <Link to={""}>
              <span className="font-[500] text-[16px] hover:underline cursor-pointer">
                Testing
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
