import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

export default function FoxbeepTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Jackie Dallas",
      position: "Director, Hotset",
      quote: "Foxbeep managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.",
      avatar: "/api/placeholder/120/120",
      initials: "JD",
      rating: 5,
      company: "Hotset",
      logoUrl: "/api/placeholder/32/32"
    },
    {
      name: "Elena Rodriguez",
      position: "Senior Product Manager, TechInnovate",
      quote: "Foxbeep transformed our approach to digital solutions. Their innovative thinking and technical expertise brought our most challenging projects to life.",
      avatar: "/api/placeholder/120/120",
      initials: "ER",
      rating: 5,
      company: "TechInnovate"
    },
    {
      name: "Marcus Chen",
      position: "CTO, GlobalStream Solutions",
      quote: "Working with Foxbeep was a game-changer. Their team doesn't just develop solutions; they reimagine possibilities and deliver beyond expectations.",
      avatar: "/api/placeholder/120/120",
      initials: "MC",
      rating: 5,
      company: "GlobalStream Solutions"
    },
    {
      name: "Aisha Patel",
      position: "Founder, EcoTech Innovations",
      quote: "Foxbeep's internship program is revolutionary. They don't just teach technology; they nurture future leaders who can truly make a difference.",
      avatar: "/api/placeholder/120/120",
      initials: "AP",
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
    <div>
      {/* Testimonial Banner */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full py-16 px-4 text-black max-w-7xl mx-auto">
        <div className="w-full lg:w-3/4 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6">
            Client Testimonials
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black">
            Hear what our clients have to say about our exceptional service and innovative solutions.
          </p>
        </div>

        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 mr-2 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold">4.9 Clutch</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-base">50+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white min-h-screen">
        {/* Hero Banner */}


        <div className="flex flex-col items-center w-full py-24 px-4 bg-black text-white max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Our clients simply love <span className="text-purple-400">what we do</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 mr-4 flex items-center justify-center text-red-500 font-bold text-xl">
                C
              </div>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-base font-bold">52 REVIEWS</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 mr-4 flex items-center justify-center text-blue-500 font-bold text-xl">
                F
              </div>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-base font-bold">32 REVIEWS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-7xl mx-auto px-4 w-full py-16">
          <div className="grid md:grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <p className="text-3xl font-medium mb-8 text-gray-100">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 mr-4 flex items-center justify-center text-gray-900 font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-xl">
                      {testimonial.position}
                    </p>
                  </div>
                  {testimonial.logoUrl && (
                    <div className="ml-auto">
                      <img
                        src={testimonial.logoUrl}
                        alt={`${testimonial.company} logo`}
                        className="h-8"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>


          {/* Featured Testimonial */}
          <div className="mt-16 bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Quote className="text-purple-400 w-12 h-12 mb-4" />
                <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500 mr-4 flex items-center justify-center text-gray-900 font-bold text-xl">
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-400 text-xl">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <div className="flex mt-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 flex flex-col justify-center">
                <div className="flex flex-col space-y-4">
                  <h4 className="text-xl font-bold text-white">More reviews</h4>
                  <div className="flex space-x-4">
                    <button
                      onClick={handlePrevTestimonial}
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextTestimonial}
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                  <span className="text-gray-400">
                    {currentTestimonial + 1} / {testimonials.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-400">
              <h3 className="text-5xl font-bold text-purple-400 mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction Rate</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-400">
              <h3 className="text-5xl font-bold text-purple-400 mb-2">84+</h3>
              <p className="text-gray-300">Successful Projects</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-400">
              <h3 className="text-5xl font-bold text-purple-400 mb-2">90%</h3>
              <p className="text-gray-300">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}