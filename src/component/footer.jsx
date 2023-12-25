import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6B3CC9] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="mb-4 lg:mb-0 lg:col-span-1 pl-5">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4 flex items-center space-x-2">
            <img src="/WhiteSecondaryLogo.png" alt="" className="h-8 w-auto" />
            <span>AT DIGITAL</span>
          </h3>

          <p className="text-sm">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
        <div className="mb-4 lg:mb-0 pl-5">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            Our Technologies
          </h3>
          <ul className="list-none">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJs</li>
            <li>NodeJs</li>
            <li>GraphQL</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div className="pl-5">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            Our Services
          </h3>
          <ul className="list-none">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
            <li>Google Marketing Solutions</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-4 text-center lg:text-left">
        <div className="flex justify-center items-center mb-4">
          <hr className="border-white w-1/3" />
        </div>
        <p className="text-sm mx-auto lg:w-[33.33333%] text-center">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
