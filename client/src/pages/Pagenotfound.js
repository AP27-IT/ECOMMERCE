import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[65vh] bg-gray-50 px-4">
        <h1 className="text-8xl md:text-[120px] font-bold text-gray-900 tracking-tighter drop-shadow-sm">404</h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-600 mt-4 mb-8 text-center">Oops! Page Not Found</h2>
        <Link 
          to="/" 
          className="px-8 py-3 bg-white text-gray-900 border border-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow-sm"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
