import { useState, useRef, useEffect } from 'react';

export default function IndustrySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const industries = [
    {
      title: "Finance",
      description: "Secure WordPress sites for banks, financial advisors, and investment firms.",
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant WordPress solutions for medical practices and healthcare providers.",
    },
    {
      title: "Media",
      description: "Fast WordPress sites for content publishers, news outlets, and entertainment brands.",
    },
    {
      title: "Telecom",
      description: "Custom WordPress portals for telecom service providers and customer support.",
    },
    {
      title: "Retail",
      description: "WooCommerce and WordPress solutions for online stores and retail businesses.",
    },
    {
      title: "Education",
      description: "Learning management systems built on WordPress for schools and online courses.",
    }
  ];

  const totalSlides = Math.max(1, industries.length - 3); // Show 3 at once, so total slides is length - 3

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  };

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMove = (clientX) => {
    const diff = startXRef.current - clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < totalSlides) {
        // Swiped left
        setCurrentSlide(currentSlide + 1);
        isDraggingRef.current = false;
      } else if (diff < 0 && currentSlide > 0) {
        // Swiped right
        setCurrentSlide(currentSlide - 1);
        isDraggingRef.current = false;
      }
      startXRef.current = clientX;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentSlide]);

  const goToNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Serving a variety of industry

          </h1>
          <p className="text-2xl md:text-2xl text-gray-400 max-w-3xl">
            FoxBeep provides industry-leading solutions that transform how businesses operate and engage with customers.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden w-full mb-10 pl-38">
        <div
          className="relative"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <div
            className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
            style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${index > 0 ? 'pl-8' : ''}`}
                style={{ width: 'calc(25%)' }}
              >
                <div className="h-full bg-gradient-to-br from-black to-gray-800 rounded-2xl overflow-hidden shadow-2xl border " style={{ minHeight: '320px' }}>
                  <div className="p-5 md:p-12 h-full flex flex-col">
                    {/* All boxes now have left-aligned content */}
                    <div className="flex flex-col items-start text-left">
                      <h2 className="text-4xl font-bold text-white mb-6">{industry.title}</h2>
                      <p className="text-xl text-gray-500">{industry.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center space-x-6 mt-10">
        <button
          onClick={goToPrev}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full ${currentSlide === 0 ? 'bg-gray-800 text-gray-600' : 'bg-purple-700 text-white hover:bg-purple-600'} transition duration-300`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          disabled={currentSlide === totalSlides}
          className={`p-4 rounded-full ${currentSlide === totalSlides ? 'bg-gray-800 text-gray-600' : 'bg-purple-700 text-white hover:bg-purple-600'} transition duration-300`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalSlides + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-2 w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}