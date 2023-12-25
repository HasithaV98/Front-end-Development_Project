import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <img
        src="hero.png"
        alt=""
        className="w-full h-full object-cover lg:object-cover md:object-cover sm:object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-b from-[#1CBDDD] to-[#4DCA79] w-full h-[258px] sm:h-[294px] md:w-4/5 lg:w-3/5 mx-auto lg:ml-20 lg:mb-16  md:ml-14 md:mb-10">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-white">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>

        <button className="bg-[#F28D35] text-white py-2 px-4 rounded-lg">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
