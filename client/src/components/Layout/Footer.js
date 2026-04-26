import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white py-6 bg-gradient-to-r from-gray-700 to-black">
      <h1 className="text-center text-lg font-medium">All Right Reserved &copy; Techinfoyt</h1>
      <p className="text-center mt-3 flex justify-center items-center space-x-2">
        <Link to="/about" className="hover:text-yellow-200 hover:border-b hover:border-yellow-200 transition-all duration-300 pb-1">About</Link>
        <span>|</span>
        <Link to="/contact" className="hover:text-yellow-200 hover:border-b hover:border-yellow-200 transition-all duration-300 pb-1">Contact</Link>
        <span>|</span>
        <Link to="/policy" className="hover:text-yellow-200 hover:border-b hover:border-yellow-200 transition-all duration-300 pb-1">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
