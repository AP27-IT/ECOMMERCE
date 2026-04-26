import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-4 max-w-6xl mx-auto gap-8">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src="/images/contactus.jpeg"
            alt="Privacy Policy"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b pb-2">Privacy Policy</h2>
          <div className="space-y-3 text-gray-600 leading-relaxed text-justify">
            <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Add privacy policy details here.</p>
            <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Add privacy policy details here.</p>
            <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Add privacy policy details here.</p>
            <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Add privacy policy details here.</p>
            <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Add privacy policy details here.</p>
            <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Add privacy policy details here.</p>
            <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Add privacy policy details here.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
