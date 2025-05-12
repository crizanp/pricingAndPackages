import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import ServiceBanner from '@/components/services/upperHero';
import TextHeroSection from '@/components/home/textHero';

export default function FoxbeepTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Elena Rodriguez",
      position: "Senior Product Manager, TechInnovate",
      quote: "Foxbeep transformed our approach to digital solutions. Their innovative thinking and technical expertise brought our most challenging projects to life.",
      avatar: "/api/placeholder/120/120",
      rating: 5,
      company: "TechInnovate"
    },
    {
      name: "Marcus Chen",
      position: "CTO, GlobalStream Solutions",
      quote: "Working with Foxbeep was a game-changer. Their team doesn't just develop solutions; they reimagine possibilities and deliver beyond expectations.",
      avatar: "/api/placeholder/120/120",
      rating: 5,
      company: "GlobalStream Solutions"
    },
    {
      name: "Aisha Patel",
      position: "Founder, EcoTech Innovations",
      quote: "Foxbeep's internship program is revolutionary. They don't just teach technology; they nurture future leaders who can truly make a difference.",
      avatar: "/api/placeholder/120/120",
      rating: 5,
      company: "EcoTech Innovations"
    }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white text-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <ServiceBanner/>
        {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg"
          alt="AI Development"
          className="w-full h-full object-cover"
        />
      </div>
        <div className="grid md:grid-cols-2 gap-16 items-center py-24">
          {/* Testimonial Content Section */}
          <div className="space-y-8">
            <div className="relative">
              <Quote className="absolute -top-8 -left-12 text-gray-200 w-24 h-24 opacity-50" />
              <p className="text-4xl font-bold leading-tight relative z-10">
                {testimonials[currentTestimonial].quote}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-gray-600">
                {testimonials[currentTestimonial].rating}/5 Rating
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <button 
                onClick={handlePrevTestimonial}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <span className="text-gray-600">
                {currentTestimonial + 1} / {testimonials.length}
              </span>
              <button 
                onClick={handleNextTestimonial}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Testimonial Visual Section */}
          <div className="relative hidden md:block">
            <div className="bg-gray-100 rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 relative z-10 shadow-lg">
                <h2 className="text-5xl font-black mb-6 text-black">
                  Trusted By
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Industry leaders who have experienced the Foxbeep difference
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 rounded-xl p-4 text-center"
                    >
                      <h3 className="text-xl font-bold mb-2">
                        {testimonial.company}
                      </h3>
                      <p className="text-gray-600">
                        Tech Partner
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <TextHeroSection/>
      </div>
    </div>
  );
}