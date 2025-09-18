import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import navicon from "../assets/navicon.png"; // make sure file exists

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About Us", "Service", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* ========== Container with left/right padding ========== */}
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4">
        {/* ===== Left: Logo ===== */}
        <img
          src={navicon}
          alt="Empire Blue Logo"
          className="h-10 w-auto cursor-pointer"
        />

        {/* ===== Center: All nav items together ===== */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="cursor-pointer transition-colors duration-300 hover:text-blue-900"
            >
              {item}
            </a>
          ))}
          {/* Book Now button inline with links */}
          <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-800 hover:scale-105">
            Book Now
            <FaArrowRight />
          </button>
        </div>

        {/* ===== Right: Mobile Hamburger ===== */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-blue-900 focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white text-gray-700 font-medium">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="cursor-pointer transition-colors duration-300 hover:text-blue-900"
            >
              {item}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-800 hover:scale-105">
            Book Now
            <FaArrowRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
