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
    <div className="w-full flex justify-center px-4 sm:px-6 py-6 sm:py-8 mb-8 sm:mb-12 md:mb-16 bg-white">
      <div 
        className={`w-full max-w-7xl ${backgroundColor} border border-gray-200 rounded-2xl sm:rounded-3xl md:rounded-full 
        flex flex-col sm:flex-row items-center justify-between 
        px-5 sm:px-8 md:px-10 py-5 sm:py-6 gap-4 sm:gap-6 shadow-md`}
      >
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor} text-center sm:text-left`}>
          {title} <span className={accentColor}>{highlightedText}</span> <span className="hidden xs:inline">with us</span>
          <span className="inline xs:hidden">with us</span>
        </h2>
        
        <button
          className={`w-full sm:w-auto bg-gradient-to-r text-white text-lg sm:text-xl cursor-pointer font-medium 
          px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300
          ${isHovered ? `${buttonHoverFrom} ${buttonHoverTo}` : `${buttonGradientFrom} ${buttonGradientTo}`}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}