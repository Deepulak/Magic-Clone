// Footer.js
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';

const FooterTwo = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap  md:ml-20 sm:ml-8 xl:ml-56">
        {/* Section 1: Logo, Heading, Button, Social Icons */}
        <div className="w-full md:w-1/4 lg:w-1/4 mb-4 lg:mb-0">
          <div className="flex items-center mb-4">
            <Image className="h-8 w-8 mr-2 cursor-pointer" src="/image/magic.webp" width={20} height={20} alt="Logo" />
            <h3 className="text-xl font-bold cursor-pointer">Your Company</h3>
          </div>
          <p className="mb-4 sm:w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full mb-4 cursor-pointer">Subscribe</button>
          <div className="flex cursor-pointer">
          <FaFacebook size={40} className="text-2xl fill-red-500 mr-2" />
            <FaTwitter size={40} className="text-2xl fill-sky-600 mr-2" />
            <FaInstagramSquare size={40} className="text-2xl fill-emerald-600 mr-2" />
          </div>
        </div>

        {/* Section 2: Services Links */}
        <div className="w-full md:w-1/4 lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4 cursor-pointer">Services</h3>
          <ul>
            <li><a href="#">Service 1</a></li>
            <li><a href="#">Service 2</a></li>
            <li><a href="#">Service 3</a></li>
          </ul>
        </div>

        {/* Section 3: Resources Links */}
        <div className="w-full md:w-1/4 lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4 cursor-pointer">Resources</h3>
          <ul>
            <li><a href="#">Resource 1</a></li>
            <li><a href="#">Resource 2</a></li>
            <li><a href="#">Resource 3</a></li>
          </ul>
        </div>

        {/* Section 4: Company Links */}
        <div className="w-full md:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-bold mb-4 cursor-pointer">Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="text-center mt-8 sm:w-72 sm:ml-12 md:w-full md:-ml-4">
        <p>&copy; 2023 Your Company. All Rights Reserved. | <span className="text-blue-500 cursor-pointer">Terms of Service</span> | <span className="text-blue-500 cursor-pointer">Privacy Policy</span></p>
      </div>
    </footer>
  );
};

export default FooterTwo;
