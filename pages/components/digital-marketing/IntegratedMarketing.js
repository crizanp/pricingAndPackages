import React, { useState, useEffect } from "react";

export default function SpecificMarketingBanner({
  backgroundColor = "",
  borderColor = "border-gray-200",
  textColor = "text-gray-800",
  headingColor = "text-white",
  paragraphColor = "text-gray-300",
  title = "Integrated Digital Marketing Services",
  content = "Whether you're a small local business or a large corporation, we have the skills and resources to help you succeed in the ever-changing world of digital marketing. One of the things that sets us apart as a digital marketing company in India is the commitment to staying at the forefront of industry trends and techniques. In addition to a range of traditional digital marketing services, such as SEO and PPC, we also offer social media marketing, email marketing, and content marketing.",
  bgImageSrc = "https://www.srvmedia.com/wp-content/uploads/2023/10/Integrated-Digital-Marketing-Services.webp",
  bgImageAlt = "Background image",
  bgImageOverlay = "bg-black opacity-30",
  showOverlay = true
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-24">
      {/* Background image covering the entire component */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImageSrc}
          alt={bgImageAlt}
          className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${
            isScrolled ? "scale-110" : "scale-100"
          }`}
        />
        {/* Optional overlay */}
        {showOverlay && (
          <div className={`absolute inset-0 ${bgImageOverlay}`}></div>
        )}
      </div>

      {/* Content container */}
      <div className={`${backgroundColor} bg-opacity-0 relative z-10`}>
        <div className={`flex flex-col md:flex-row py-16 relative w-full max-w-7xl mx-auto ${textColor}`}>
          {/* Left content area */}
          <div className="w-full md:w-3/5 py-8 md:py-12 px-6 md:px-10">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${headingColor}`}>
              {title}
            </h1>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${paragraphColor}`}>
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
