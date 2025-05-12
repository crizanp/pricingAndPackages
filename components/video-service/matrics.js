import React from 'react';
import { Play, Video } from 'lucide-react';

export default function VideoMetrics({
  title = "Why Should You Create A Video?",
  tagline = "Attention span is melting faster than the arctic ice.",
  stats = [
    { percentage: "75%", label: "REACH" },
    { percentage: "60%", label: "ENGAGEMENT" },
    { percentage: "35%", label: "CONVERT" }
  ],
  description = "50% of people now prefer watching videos instead of scrolling through a prolonged article. Not making videos can eventually take a toll on your marketing and brand efforts.",
  benefits = [
    "If you don't create videos, your prospects won't see you.",
    "If they don't see you, they'll not know you.",
    "If they don't know you, well, will they even buy your product or service?"
  ],
  subtitle = "We can give thousands of reasons but here's the one that ultimately matters!",
  buttonText = "Get Started",
  accentColor = "black",
  backgroundColor = "bg-white",
  textColor = "text-black",
  secondaryTextColor = "text-gray-700",
  statsBgColor = "bg-gray-100",
  benefitsBgColor = "bg-gray-100",
  showCTA = false,
  ctaLink = "#contact",
  headerIcon = Video,
  ctaIcon = Play
}) {
  return (
    <div className={`w-full ${backgroundColor} py-20`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with Icon */}
        <div className="flex items-center gap-4 mb-10">
          
          <h1 className={`text-4xl md:text-5xl font-bold ${textColor} tracking-tight`}>
            {title}
          </h1>
        </div>
        
        {/* Tagline with enhanced styling */}
        <p className={`text-lg md:text-xl lg:text-2xl font-medium ${textColor} mb-16 max-w-3xl`}>
          {tagline}
        </p>
        
        {/* Stats Display - Improved spacing and shadow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center ${statsBgColor} py-10 px-6 rounded-xl shadow-sm border border-gray-200 transition-transform hover:scale-105`}
            >
              <span 
                className={`text-6xl font-bold mb-3`} 
                style={{ color: accentColor }}
              >
                {stat.percentage}
              </span>
              <span className={`text-xl font-semibold ${secondaryTextColor} uppercase tracking-wider`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Description with improved typography */}
        <div className="mb-16">
          <h2 className={`text-lg md:text-xl lg:text-2xl font-bold ${textColor} mb-4`}>
            {subtitle}
          </h2>
          <p className={`text-lg md:text-xl lg:text-2xl ${textColor} max-w-4xl leading-relaxed`}>
            {description}
          </p>
        </div>
        
        {/* Benefits as List with improved styling */}
        <div className={`${benefitsBgColor} p-10 rounded-2xl shadow-sm border border-gray-200`}>
          <h3 className={`text-2xl font-bold mb-8 ${textColor}`}>Key Benefits</h3>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base font-medium"
                  style={{ backgroundColor: accentColor, color: 'white' }}
                >
                  {index + 1}
                </div>
                <p className={`text-lg md:text-xl lg:text-2xl ${textColor} leading-tight pt-1`}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button with improved styling */}
        {showCTA && (
          <div className="flex justify-center mt-16">
            <a
              href={ctaLink}
              className="flex items-center gap-3 text-lg px-8 py-4 rounded-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: accentColor, color: 'white' }}
            >
              {React.createElement(ctaIcon, { className: "w-5 h-5" })}
              <span className="font-medium">{buttonText}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}