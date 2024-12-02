import React from "react";

import foto1 from "../assets/f1.png";
import foto2 from "../assets/f2.png";
import foto3 from "../assets/f3.png";

const Company = () => {
  return (
    <div
      id="company"
      className="w-[90%] mx-auto flex flex-col mt-10 bg-gradient-to-r from-[#f8fafc] to-[#e2e8f0] py-10 px-5 rounded-lg shadow-xl"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-6 items-center text-center">
        <p className="text-sm uppercase font-semibold text-[#444CFC] tracking-wide">
          Company
        </p>
        <h2 className="text-[36px] lg:text-[40px] text-[#232536] w-full md:w-[70%] font-bold leading-snug">
          Award-winning Company seen and used by millions around the world
        </h2>
        <p className="text-[16px] text-[#4d4d4d] w-full md:w-[60%] leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized platform transforming ideas into reality.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex gap-5 mt-10 justify-center items-center">
        <img
          src={foto1}
          alt="Company Award 1"
          className="w-[30%] md:w-[25%] rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        />
        <img
          src={foto2}
          alt="Company Award 2"
          className="w-[30%] md:w-[25%] rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        />
        <img
          src={foto3}
          alt="Company Award 3"
          className="w-[30%] md:w-[25%] rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Company;
