import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/api/users";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  let navlinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Vehicles",
      link: "/vehicles",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="shadow-md w-full static top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">Logo</h1>
        </div>

        <div
          onClick={handleNav}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            nav ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link}
                className="text-white-800 hover:text-green-400 duration-500 pl-3 text-2xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-800 focus:outline-none"
            >
              {userInfo ? (
                <span className="text-black flex items-center pt-4 pl-2 text-2xl">
                  {userInfo.username}
                </span>
              ) : (
                <></>
              )}

              {userInfo && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 ${
                    dropdownOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              )}
            </button>

            {dropdownOpen && userInfo && (
              <ul
                className={`absolute right-0 mt-2 mr-14 w-[10rem] space-y-2 bg-white text-gray-600 ${
                  !userInfo.isAdmin ? "-bottom-20" : "-bottom-24"
                }`}
              >
                {userInfo.isAdmin && (
                  <>
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </>
                )}

                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>

                <li>
                  <button
                    onClick={logoutHandler}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}

            {!userInfo && (
              <Link
                to="/login"
                className="flex items-center  transition-transform transform hover:translate-x-2  md:pb-6"
              >
                <span className="text-xl pl-2 ">LOGIN</span>
              </Link>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
