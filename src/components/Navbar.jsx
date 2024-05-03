import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24  bg-neutral-700 mx-auto px-3 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">MCARS</h1>
      <ul className="hidden md:flex">
        <NavLink to={"/"}>
          <li className="p-4">Home</li>
        </NavLink>
        <NavLink to={"/vehicles"}>
          <li className="p-4">Vehicles</li>
        </NavLink>

        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">MCARS</h1>
        <li className="p-4">Home</li>
        <li className="p-4">Vehicles</li>
        <li className="p-4">Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
