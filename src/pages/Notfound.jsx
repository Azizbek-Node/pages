import React from "react";
import { useNavigate } from "react-router-dom";
import foto from "../../public/notfound.jpg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Image Section */}
      <div className="w-[50%]">
        <img
          src={foto}
          alt="Not Found"
          className="rounded-lg shadow-lg border border-gray-200"
        />
      </div>

      {/* Button Section */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-all duration-300"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
