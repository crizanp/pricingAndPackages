import React, { useState, useEffect } from 'react';

const TextHero = ({
  tagline,
  subtitle,
  description,
  imageSrc = "https://www.brandbeavers.com/wp-content/uploads/2021/07/Video-editing-services-in-mumbai.jpg",
  buttonText,
  location = "Bhaktapur",
  companyName = "FoxBeep"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white min-h-screen">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Grid overlay for editor effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array(12).fill().map((_, i) => (
              <div key={i} className="border-r border-white h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 h-full absolute top-0 w-full">
            {Array(12).fill().map((_, i) => (
              <div key={i} className="border-b border-white w-full"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cursor blinking effect */}
      <div className="absolute top-6 left-6 z-10 flex items-center">
        <div className="w-3 h-6 bg-white animate-pulse mr-2"></div>
        <span className="font-mono text-sm opacity-70">editor://foxbeep</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 md:px-8 lg:px-12">
        <div className={`w-full md:w-4/5 lg:w-3/5 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="font-mono text-gray-300 mb-4 text-lg md:text-xl">
            <span className="text-white opacity-70">&gt;</span> {tagline}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {subtitle.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4 mb-2">{word}</span>
            ))}
          </h1>
          
          <p className="text-gray-100 text-xl md:text-2xl leading-relaxed max-w-2xl mb-8 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm p-4">
            {description}
          </p>
          
          {/* {buttonText && (
            <button className="mt-6 mb-12 px-8 py-4 bg-white text-black hover:bg-gray-200 text-lg md:text-xl font-mono border border-white transition-all duration-300 hover:tracking-wider focus:outline-none focus:ring-2 focus:ring-white">
              {buttonText}
            </button>
          )} */}
          
          {/* Location and company info with code-like formatting */}
          {(location || companyName) && (
            <div className="mt-6 font-mono text-gray-300">
              <p className="text-sm md:text-base">
                <span className="opacity-70">// </span>
                {companyName}{location ? ` @ ${location}` : ''}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Code lines indicator */}
      <div className="absolute left-0 top-0 h-full w-12 border-r border-white border-opacity-10 hidden lg:block">
        <div className="h-full flex flex-col justify-center">
          {Array(10).fill().map((_, i) => (
            <div key={i} className="text-gray-500 font-mono text-xs py-2 text-center">
              {i + 1}0
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextHero;