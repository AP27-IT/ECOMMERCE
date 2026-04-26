import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-4 max-w-6xl mx-auto gap-12">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/images/contactus.jpeg"
            alt="Contact us"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-5/12 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
          <h1 className="bg-gray-900 p-4 text-white text-center text-2xl font-bold tracking-wider">CONTACT US</h1>
          <div className="p-8">
            <p className="text-gray-600 text-justify mb-6 leading-relaxed">
              Any query and info about product feel free to call anytime we are 24x7
              available.
            </p>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center text-lg hover:text-black transition-colors duration-200">
                <BiMailSend className="text-2xl mr-3 text-blue-500" /> help@ecommerceapp.com
              </p>
              <p className="flex items-center text-lg hover:text-black transition-colors duration-200">
                <BiPhoneCall className="text-2xl mr-3 text-green-500" /> 012-3456789
              </p>
              <p className="flex items-center text-lg hover:text-black transition-colors duration-200">
                <BiSupport className="text-2xl mr-3 text-purple-500" /> 1800-0000-0000 (Toll Free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
