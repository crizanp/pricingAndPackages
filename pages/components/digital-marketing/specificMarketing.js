import React from "react";

export default function SpecificMarketingBanner({
  backgroundColor = "bg-white",
  borderColor = "border-gray-200",
  textColor = "text-gray-800",
  headingColor = "text-gray-900",
  paragraphColor = "text-gray-700",
  title = "Integrated Digital Marketing Services",
  content = "Whether you're a small local business or a large corporation, we have the skills and resources to help you succeed in the ever-changing world of digital marketing. One of the things that sets us apart as a digital marketing company in India is the commitment to staying at the forefront of industry trends and techniques. In addition to a range of traditional digital marketing services, such as SEO and PPC, we also offer social media marketing, email marketing, and content marketing.",
  imageSrc = null,
  imageAlt = "",
  imageBorderRadius = null,
  imageOverlay = false,
  imageOverlayColor = null
}) {
  // Split the title to insert a <br> after the first word
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');
  
  return (
    <div className={`${backgroundColor} py-24`}>
      <div className={`flex flex-col md:flex-row py-16 ${borderColor} relative w-full max-w-7xl mx-auto ${textColor} overflow-hidden`}>
        {/* Left content area */}
        <div className="w-full md:w-3/5 py-8 md:py-12 px-6 md:px-10 z-10">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${headingColor}`}>
            {firstWord}<br />{restOfTitle}
          </h1>
          <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${paragraphColor}`}>
            {content}
          </p>
        </div>
        
        {/* Right side image */}
        <div className="w-full md:w-2/5 relative aspect-[4/3]">
        <div className="absolute inset-0">
          <img
  src={imageSrc || "/api/placeholder/600/400"}
  alt={imageAlt || "Marketing illustration"}
  className={`w-full h-full object-contain ${imageBorderRadius || "rounded-none"}`}
/>

            {/* Optional overlay for better text visibility on certain images */}
            {imageOverlay && (
              <div className={`absolute inset-0 ${imageOverlayColor || "bg-black opacity-30"}`}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}