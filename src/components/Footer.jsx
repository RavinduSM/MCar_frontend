import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex flex-wrap lg:justify-center py-8 px-3">
        <div className="lg:w-3/4">
          <h2 className="text-neutral-400 lg:text-5xl text-3xl px-3 lg:px-12">
            Let's find your
            <br />
            dream car
          </h2>
        </div>
        <div className="lg:w-1/4 px-3 pt-4">
          <ul classname="list-none ">
            <li className=" flex flex-wrap ">
              <FaLocationDot className="text-neutral-100" />
              <p className="text-neutral-100 text-sm pl-2">
                {" "}
                146, Baselin rd, <br />
                Amandoluwa, <br />
                Seeduwa
                <br />
              </p>
            </li>
            <li className="flex flex-wrap pt-2">
              <BsTelephoneFill className="text-neutral-100" />
              <p className="text-neutral-100 text-sm pl-2"> 0718861390</p>
            </li>
            <li className="flex flex-wrap pt-2">
              <MdEmail className="text-neutral-100" />
              <p className="text-neutral-100 text-sm pl-2">
                {" "}
                ravindursm1@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
