import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-6">
        <form className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter your name..."
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter your login..."
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="password"
            placeholder="Enter your password..."
          />
          <button
            className="w-full py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>

        <div className="flex gap-4 justify-between">
          <button
            onClick={() => navigate("/")}
            className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            Go home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
