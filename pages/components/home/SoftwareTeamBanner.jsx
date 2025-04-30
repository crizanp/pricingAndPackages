import { useState } from 'react';

export default function SoftwareTeamBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 py-8 mt-16">
      <div className="w-full max-w-6xl bg-gray-800 border border-gray-800 sm:rounded-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left">
          Create a software development <span className="text-green-500">Team</span> with us
        </h2>
        <button
          className={`bg-gradient-to-r text-white font-medium px-6 py-3 rounded-full transition-all duration-300 
          ${isHovered ? 'from-blue-600 to-purple-700' : 'from-blue-500 to-purple-600'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
}
