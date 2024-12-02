import React from "react";

const Service = () => {
  return (
    <div id="service" className="mt-12">
      <div className="flex flex-wrap w-[90%] mx-auto bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white py-16 px-10 rounded-2xl shadow-2xl">
        {/* Text Section */}
        <div className="flex flex-col gap-8 w-full md:w-[55%] items-start justify-center">
          <p className="text-lg uppercase text-[#22D3EE] font-semibold tracking-wide">
            Our Exclusive Services
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Delivering Solutions that Empower Your Business to Succeed
          </h2>
          <p className="text-lg leading-relaxed">
            With cutting-edge technology and unparalleled expertise, we craft
            tailored solutions that drive success and innovation for our clients
            worldwide.
          </p>
          <button className="bg-[#22D3EE] text-[#1E293B] px-8 py-4 text-xl font-medium rounded-full shadow-md hover:bg-[#0F9DBF] transition-all">
            Request a Quote
          </button>
        </div>

        {/* Services List Section */}
        <div className="w-full md:w-[45%] flex justify-center items-center mt-8 md:mt-0">
          <ul className="text-2xl space-y-6 list-none">
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#22D3EE] rounded-full"></span>
              Advanced Technical Support
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#22D3EE] rounded-full"></span>
              Custom Development
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#22D3EE] rounded-full"></span>
              Cloud Integration (AWS/Azure)
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#22D3EE] rounded-full"></span>
              Strategic IT Consulting
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#22D3EE] rounded-full"></span>
              Comprehensive IT Solutions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
