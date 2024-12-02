import React from "react";
import foto from "../assets/mainPhoto.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <div
      id="home"
      className="mt-10 bg-gradient-to-r from-[#1d1e28] to-[#3a3b5a] py-16 px-5 rounded-lg shadow-xl"
    >
      <div className="flex w-[90%] mx-auto items-center justify-between">
        <div className="flex flex-col w-[50%] gap-6">
          <h2 className="text-[40px] lg:text-[46px] text-white font-bold leading-tight">
            Transform Your Idea Into Reality with{" "}
            <span className="text-[#444CFC]">Finsweet</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#c2c2d6] leading-relaxed">
            The entire Finsweet team knows what's good with Webflow, and you can
            too with just 1 week and a good attitude.
          </p>
          <button className="bg-[#444CFC] text-white w-[220px] h-[64px] flex items-center justify-center gap-2 rounded-lg shadow-lg hover:bg-[#373ecf] transition-all duration-300">
            Request Quote
            <IoIosArrowRoundForward className="text-[24px]" />
          </button>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <img
            src={foto}
            alt="Main Illustration"
            className="w-[80%] h-[auto] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
