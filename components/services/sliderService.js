import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function IndustrySlider({ 
  title = "Serving a variety of industry", 
  subtitle = "FoxBeep provides industry-leading solutions that transform how businesses operate and engage with customers.",
  industries = defaultIndustries 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Calculate total slides based on screen size
  const totalSlides = Math.max(0, industries.length - slidesPerView);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      if (width < 640) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else if (width < 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // When slidesPerView changes, ensure currentSlide is still valid
  useEffect(() => {
    if (currentSlide > totalSlides) {
      setCurrentSlide(totalSlides);
    }
  }, [slidesPerView, totalSlides, currentSlide]);

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
      } else if (diff < 0 && currentSlide > 0) {
        // Swiped right
        setCurrentSlide(currentSlide - 1);
      }
      isDraggingRef.current = false;
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

  // Calculate slide width based on slidesPerView
  const slideWidth = 100 / slidesPerView;

  return (
    <div className="w-full bg-black py-12 sm:py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Slider container with proper padding for all screen sizes */}
      <div className="relative overflow-hidden w-full mb-6 sm:pl-0 md:pl-0 lg:pl-26 sm:mb-10">
      <div
          className="relative px-4 sm:px-6 md:px-8"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <div
            className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
            style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 pr-4 sm:pr-6 md:pr-8"
                style={{ width: `${slideWidth}%` }}
              >
                <div 
                  className="h-full bg-gradient-to-br from-black to-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800" 
                  style={{ minHeight: isMobile ? '250px' : '320px' }}
                >
                  <div className="p-4 sm:p-6 md:p-8 lg:p-12 h-full flex flex-col">
                    <div className="flex flex-col items-start text-left">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">{industry.title}</h2>
                      <p className="text-base sm:text-lg md:text-xl text-gray-500">{industry.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation controls - Improved for mobile */}
      <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8 md:mt-10">
        <button
          onClick={goToPrev}
          disabled={currentSlide === 0}
          className={`p-3 sm:p-4 rounded-full ${
            currentSlide === 0 ? 'bg-gray-800 text-gray-600' : 'bg-purple-700 text-white hover:bg-purple-600'
          } transition duration-300`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={isMobile ? 20 : 24} />
        </button>

        <button
          onClick={goToNext}
          disabled={currentSlide === totalSlides}
          className={`p-3 sm:p-4 rounded-full ${
            currentSlide === totalSlides ? 'bg-gray-800 text-gray-600' : 'bg-purple-700 text-white hover:bg-purple-600'
          } transition duration-300`}
          aria-label="Next slide"
        >
          <ChevronRight size={isMobile ? 20 : 24} />
        </button>
      </div>

      {/* Pagination dots - Improved for mobile */}
      <div className="flex justify-center mt-6 sm:mt-8 overflow-x-auto px-4 gap-2">
        {Array.from({ length: totalSlides + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-1 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-6 sm:w-8' : 'bg-gray-600 w-2 sm:w-3 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Default industries if none are provided
const defaultIndustries = [
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