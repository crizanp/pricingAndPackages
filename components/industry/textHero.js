import React from 'react';

export const TextHighlight = ({
  headingText,
  highlightWord,
  descriptionText,
  highlightColor = 'bg-blue-600',
  brandName = ''
}) => {
  // Split the heading to handle highlighting a specific word
  const headingParts = headingText.split(highlightWord);

  return (
    <div className="max-w-7xl mx-auto py-20 px-6 xl:px-8 bg-white">
      <div className="mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left column - Big heading with highlighted word */}
        <div className="w-full lg:w-5/12 my-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  text-gray-900 leading-tight">
            {headingParts[0]}
            <span className="relative inline-block">
              <span className="relative z-10">{highlightWord}</span>
              <span className={`absolute left-0 bottom-2 h-3 w-full ${highlightColor} opacity-20 rounded-sm`}></span>
            </span>
            {headingParts[1]}
          </h1>
        </div>

        {/* Right column - Description text */}
        <div className="w-full lg:w-7/12 flex items-center">
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            {descriptionText.replace('{brandName}', brandName)}
          </p>
        </div>
      </div>
    </div>
  );
};

// Example usage
export default function Demo() {
  return (
    <TextHighlight
      headingText="We deliver innovative solutions that transform your business"
      highlightWord="transform"
      descriptionText="Our comprehensive approach combines cutting-edge technology with proven methodologies to help organizations achieve their strategic objectives and drive sustainable growth."
      highlightColor="bg-blue-600"
      brandName="TechCorp"
    />
  );
}