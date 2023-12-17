// Navbar.js
"use client"

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import the menu and close icons


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0 lg:mb-0">
          <span className="text-white text-2xl font-bold">YourLogo</span>
        </div>

        {/* Menu buttons for small screens */}
        <div className="lg:hidden md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX className="text-white text-2xl" />
          ) : (
            <FiMenu className="text-white text-2xl" />
          )}
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden' 
          } lg:flex flex-col lg:flex-row lg:ml-auto mt-4 lg:mt-0 md:flex md:flex-row md:ml-auto md:mt-0`}
        >
          <a href="#" className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block md:inline-block">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block md:inline-block">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block md:inline-block">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300 py-2 px-4 block lg:inline-block md:inline-block">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
