import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-xl font-bold tracking-widest text-gray-800 uppercase font-roboto">
                <GiShoppingBag className="mr-2 text-2xl" /> Ecommerce App
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-black font-medium uppercase text-sm" : "text-gray-500 hover:text-gray-900 font-light uppercase text-sm transition-colors duration-200"}>Home</NavLink>
              <NavLink to="/category" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-black font-medium uppercase text-sm" : "text-gray-500 hover:text-gray-900 font-light uppercase text-sm transition-colors duration-200"}>Category</NavLink>
              <NavLink to="/register" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-black font-medium uppercase text-sm" : "text-gray-500 hover:text-gray-900 font-light uppercase text-sm transition-colors duration-200"}>Register</NavLink>
              <NavLink to="/login" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-black font-medium uppercase text-sm" : "text-gray-500 hover:text-gray-900 font-light uppercase text-sm transition-colors duration-200"}>Login</NavLink>
              <NavLink to="/cart" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-black font-medium uppercase text-sm" : "text-gray-500 hover:text-gray-900 font-light uppercase text-sm transition-colors duration-200"}>Cart (0)</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 pt-2 pb-3 space-y-1 px-2">
             <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50" : "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"}>Home</NavLink>
             <NavLink to="/category" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50" : "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"}>Category</NavLink>
             <NavLink to="/register" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50" : "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"}>Register</NavLink>
             <NavLink to="/login" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50" : "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"}>Login</NavLink>
             <NavLink to="/cart" onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? "block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50" : "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"}>Cart (0)</NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
