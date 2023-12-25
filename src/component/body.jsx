import React from "react";

const BodySection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-[1064px] mx-auto p-4 lg:p-0">
        <div>
          <img
            src="/image2.png"
            alt=""
            className="w-full lg:w-[65%] h-auto mb-4 lg:mb-0"
          />
        </div>
        <div className="p-5 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl text-[#6B3CC9]">
            Web & Mobile App Development
          </h3>
          <div className="text-base mt-2">
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks that tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-[#F28D35] text-white py-2 px-4 rounded-lg text-base">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-[1064px] mx-auto p-4 lg:p-0 mt-10">
        <div className="p-5 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl text-[#6B3CC9]">
            Digital Strategy Consulting
          </h3>
          <div className="text-base mt-2">
            <p>
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-[#F28D35] text-white py-2 px-4 rounded-lg text-base">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="text-center">
          <img src="/image1.png" alt="" className="w-full h-auto lg:w-[65%]" />
        </div>
      </div>
    </div>
  );
};

export default BodySection;
