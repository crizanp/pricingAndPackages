import React from "react";
import { ArrowRight, Check, Star } from "lucide-react";

export default function SpecificMarketingBanner({
  // Color customization
  backgroundColor = "bg-white",
  borderColor = "border-gray-200",
  textColor = "text-gray-800",
  headingColor = "text-gray-900",
  paragraphColor = "text-gray-700",
  ctaButtonColor = "bg-blue-600",
  ctaTextColor = "text-white",
  accentColor = "text-blue-600",
  id="facebook-ads",
  
  // Graphic elements colors
  graphicBgColor = "bg-blue-900",
  graphicDotsColor = "bg-blue-500",
  graphicLinesColor = "bg-blue-400",
  graphicPathColor = "rgba(96, 165, 250, 0.6)",
  
  // Content
  title = "Integrated Digital Marketing Services",
  content = "Whether you're a small local business or a large corporation, we have the skills and resources to help you succeed in the ever-changing world of digital marketing.",
  
  // Image settings
  imageSrc = null,
  imageAlt = "",
  imageBorderRadius = "rounded-lg",
  imageOverlay = false,
  imageOverlayColor = "bg-black opacity-30",
  
  // Features section
  showFeatures = true,
  features = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Content Strategy",
    "Email Campaigns"
  ],
  featureIconColor = "",
  featureTextColor = "",
  
  // Call to action
  showCta = true,
  ctaText = "Get Started",
  ctaLink = "#",
  
  // Visual elements
  showStars = false,
  showPattern = false,
  patternColor = "text-gray-100",
  showGraphic = false,
  
  // Badge
  showBadge = false,
  badgeText = "Premium Service",
  badgeColor = "bg-amber-100",
  badgeBorderColor = "border-amber-200",
  badgeTextColor = "text-amber-800",
  
  // Layout
  compactMode = false,
  fullWidth = false
}) {
  // Split the title to insert a <br> after the first word
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');
  
  return (
    <div className={`${backgroundColor} py-16 md:py-24 `} id={id || `title`}>
      <div className={`flex flex-col md:flex-row ${compactMode ? 'sm:py-8' : 'sm:py-16'} sm:border ${borderColor} relative ${fullWidth ? 'w-full' : 'max-w-7xl mx-auto'} ${textColor} overflow-hidden rounded-xl sm:shadow-lg`}>
        {/* Left content area */}
        <div className={`w-full ${showFeatures ? 'md:w-3/5' : 'md:w-1/2'} py-8 md:py-12 px-6 md:px-10 z-10`}>
          {showBadge && (
            <div className={`inline-block ${badgeColor} ${badgeTextColor} ${badgeBorderColor} border px-3 py-1 rounded-full text-xs font-medium mb-4`}>
              {badgeText}
            </div>
          )}
          
          <h1 className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ${headingColor}`}>
            <span className={accentColor || headingColor}>{firstWord}</span> {restOfTitle}
          </h1>
          
          <p className={`text-lg md:text-lg leading-relaxed ${paragraphColor} mb-6`}>
            {content}
          </p>
          
          {showFeatures && features.length > 0 && (
            <div className="mt-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`${featureIconColor || accentColor || headingColor} mr-2`}>
                      <Check size={18} />
                    </div>
                    <span className={`text-lg ${featureTextColor || ''}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {showCta && (
            <div className="mt-8">
              <a
                href={ctaLink}
                className={`inline-flex items-center ${ctaButtonColor} ${ctaTextColor} px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90`}
              >
                {ctaText}
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          )}
        </div>
        
        {/* Right side image */}
        <div className={`w-full ${showFeatures ? 'md:w-2/5' : 'md:w-1/2'} relative`}>
          <div className="absolute inset-0">
            <img
              src={imageSrc || "/api/placeholder/600/400"}
              alt={imageAlt || "Marketing illustration"}
              className={`w-full h-full object-cover ${imageBorderRadius}`}
            />
            
            {/* Optional overlay for better text visibility on certain images */}
            {imageOverlay && (
              <div className={`absolute inset-0 ${imageOverlayColor}`}></div>
            )}
           
           
          </div>
        </div>
      </div>
    </div>
  );
}