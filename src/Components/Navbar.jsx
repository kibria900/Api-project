import React from "react";
import Logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#D6D3D1]">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-10 h-10" />

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className="text-[#000000] hover:text-white font-Poppins font-medium leading-[26px] transition-all duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sponsor"
                className="text-[#000000] hover:text-white font-Poppins font-medium leading-[26px] transition-all duration-200"
              >
                Sponsor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/docs"
                className="text-[#000000] hover:text-white font-Poppins font-medium leading-[26px] transition-all duration-200"
              >
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-[#000000] hover:text-white font-Poppins font-medium leading-[26px] transition-all duration-200"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-[#000000] hover:text-white font-Poppins font-medium leading-[26px] transition-all duration-200"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/showcase"
                className="text-[#000000] hover:text-white font-Poppins font-medium leading-[26px] transition-all duration-200"
              >
                Showcase
              </NavLink>
            </li>
          </ul>

          {/* Contact Button */}
          <button className="px-6 py-2 bg-transparent text-[#000000] font-Poppins font-medium border border-[#000000]/40 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
