import React from 'react';

export const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  imageAlt
}) => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt={imageAlt || "Background"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800"></div>
        )}
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto z-10 px-6 md:px-12 w-full">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-xl mb-8">{subtitle}</p>

          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
