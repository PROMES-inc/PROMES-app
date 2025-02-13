import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Constituency Monitor
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/projects" className="hover:text-blue-200 transition">
            Projects
          </Link>
          <Link to="/report" className="hover:text-blue-200 transition">
            Report
          </Link>
          <Link to="/revenue" className="hover:text-blue-200 transition">
            Revenue
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-black">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/projects"
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/report"
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Report
            </Link>
            <Link
              to="/revenue"
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Revenue
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
