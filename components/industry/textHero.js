import React from 'react';

export const TextHighlight = ({
  headingText,
  highlightWord,
  descriptionText,
  highlightColor = 'bg-yellow-300',
  brandName = ''
}) => {
  // Split the heading to handle highlighting a specific word
  const headingParts = headingText.split(highlightWord);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 xl:px-0  bg-white">
      <div className=" mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
        {/* Left column - Big heading with highlighted word */}
        <div className="w-full md:w-5/12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
            {headingParts[0]}
            <span className="relative inline-block px-1">
              <span className="relative z-10">{highlightWord}</span>
              <span className="absolute left-0 bottom-1 h-2 w-full bg-lime-400 rounded-md z-0"></span>
            </span>
            {headingParts[1]}
          </h1>

        </div>

        {/* Right column - Description text */}
        <div className="w-full md:w-7/12 my-auto">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            {descriptionText.replace('{brandName}', brandName)}
          </p>
        </div>
      </div>
    </div>
  );
};