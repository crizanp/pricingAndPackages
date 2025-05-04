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
  buttonText = "Get Started"
}) {
  return (
    <div className="w-full bg-white px-6 py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
      {/* Simple Header with Icon */}
        <div className="flex items-center gap-3 mb-12">
          <Video className="w-8 h-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            {title}
          </h1>
        </div>
        
        {/* Tagline */}
        <p className="text-2xl font-medium text-black mb-16">{tagline}</p>
        
        {/* Clean Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 py-8 px-4 rounded-lg">
              <span className="text-5xl font-bold text-black mb-2">{stat.percentage}</span>
              <span className="text-xl font-medium text-gray-700">{stat.label}</span>
            </div>
          ))}
        </div>
        
        {/* Description */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-4">{subtitle}</h2>
          <p className="text-xl text-black">{description}</p>
        </div>
        
        {/* Benefits as Simple List */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <p className="text-lg text-black">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Simple CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-black text-white text-lg px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <Play className="w-5 h-5" />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}