import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#050414]">
      <div className="w-16 h-16 border-6 border-gray-300 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
      <p className="text-2xl sm:text-3xl text-white">Loading...</p>
    </div>
  );
};

export default Loader;
