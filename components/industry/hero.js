import Link from 'next/link';
import React from 'react';

export const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  imageAlt = "Hero background"
}) => {
  return (
    <div className="relative w-full bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-900 to-indigo-800"></div>
        )}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 xl:px-8 py-12">
        <div className=" text-left py-6 md:py-24 lg:py-32">
          <h1 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <Link
              href='/contact'
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
