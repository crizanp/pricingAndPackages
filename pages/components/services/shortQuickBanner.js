import { useState } from 'react';

export default function TeamBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 py-8 mb-16">
      <div className="w-full max-w-7xl bg-white border border-gray-200 sm:rounded-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
          Create a software development <span className="text-purple-600">Team</span> with us
        </h2>
        <button
          className={`bg-gradient-to-r text-white text-xl cursor-pointer font-medium px-6 py-3 rounded-full transition-all duration-300 
          ${isHovered ? 'from-purple-600 to-purple-700' : 'from-purple-500 to-purple-600'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
}
