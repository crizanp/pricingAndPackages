import { useState } from 'react';

export default function SoftwareTeamBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 mt-16">
      <div className="w-full max-w-7xl bg-gray-800 border border-gray-800 rounded-2xl sm:rounded-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-12 py-6 gap-6 sm:gap-8 shadow-lg">
        <h2 className="text-center md:text-left text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          Create a software development <span className="text-green-500">Team</span> with us
        </h2>

        <button
          className={`whitespace-nowrap text-sm sm:text-base md:text-lg bg-gradient-to-r text-white font-semibold px-6 sm:px-8 md:px-10 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
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
