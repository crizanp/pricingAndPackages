import { useState } from 'react';

export default function TeamBanner({ 
  title = "Create a software development", 
  highlightedText = "Team", 
  buttonText = "Get a Quote",
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  accentColor = "text-purple-600",
  buttonGradientFrom = "from-purple-500",
  buttonGradientTo = "to-purple-600",
  buttonHoverFrom = "from-purple-600",
  buttonHoverTo = "to-purple-700"
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full flex justify-center px-4 py-8 mb-16">
      <div className={`w-full max-w-7xl ${backgroundColor} border border-gray-200 sm:rounded-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 gap-4 shadow-md`}>
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor} text-center md:text-left`}>
          {title} <span className={accentColor}>{highlightedText}</span> with us
        </h2>
        <button
          className={`bg-gradient-to-r text-white text-xl cursor-pointer font-medium px-6 py-3 rounded-full transition-all duration-300 
          ${isHovered ? `${buttonHoverFrom} ${buttonHoverTo}` : `${buttonGradientFrom} ${buttonGradientTo}`}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}