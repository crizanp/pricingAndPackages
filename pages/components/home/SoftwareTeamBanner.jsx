import { useState } from 'react';

export default function SoftwareTeamBanner() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full flex justify-center px-4 py-8 mt-16">
      <div className="w-full max-w-7xl bg-gray-800 border border-gray-800 sm:rounded-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-4 shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center sm:text-left">
          Create a software development <span className="text-green-500">Team</span> with us
        </h2>
        
        <button
          className={`whitespace-nowrap text-sm sm:text-base bg-gradient-to-r text-white font-medium px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
            ${isHovered ? 'from-blue-600 to-purple-700 shadow-md' : 'from-blue-500 to-purple-600'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
}