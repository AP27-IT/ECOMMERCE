import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-4 max-w-6xl mx-auto gap-8">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src="/images/about.jpeg"
            alt="About us"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b pb-2">About Us</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
