// RegistrationComponent.js
import React from "react";

const RegisterPage = () => {
  return (
    <div className="h-screen w-full  p-5  flex justify-center items-center">
    <div className="w-[90%] h-[80%] bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-3">
      {/* Left Side Content */}
      <div className="flex flex-col justify-center w-full md:w-[60%] p-8  rounded-t-lg md:rounded-t-none md:rounded-l-lg">
        <h2 className="text-xl text-yellow-400  mb-2 uppercase">Save the Day</h2>
        <p className="text-4xl  mb-2">
          Join a Day-Long Free Workshop for <br />
          <span className="text-yellow-400"><span className="font-semibold">Advance Mastering </span> on Sales</span>
        </p>
        <p className="text-sm font-light italic">Limited Time Offer! Hurry Up</p>
      </div>
  
      {/* Right Side Form */}
      <div className="w-full md:w-[40%] p-8 bg-white/20 backdrop-blur-lg rounded-b-lg md:rounded-b-none md:rounded-r-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register Now
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg hover:shadow-md"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  </div>
  
  
  );
};

export default RegisterPage;