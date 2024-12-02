import React from "react";

import career from "../assets/career.png";

const Career = () => {
  return (
    <div
      id="career"
      className="w-[80%] mx-auto flex flex-col mt-3 bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] py-10 rounded-lg shadow-lg"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 items-center">
        <p className="text-[#232536] text-[14px] tracking-wide font-semibold uppercase">
          Career at Finsweet
        </p>
        <h2 className="text-[#232536] text-[36px] lg:text-[48px] w-[90%] md:w-[70%] text-center font-bold leading-tight">
          We hire people who are always passionate about what they do
        </h2>
        <p className="text-[#4d4d4d] text-[16px] lg:text-[18px] w-[90%] md:w-[60%] text-center leading-relaxed">
          Through true passion, we build teams who thrive on creativity, growth,
          and delivering impactful solutions for every challenge.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-6 flex justify-center items-center">
        <img
          src={career}
          alt="Career at Finsweet"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Career;
