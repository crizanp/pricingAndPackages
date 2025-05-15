import { useState, useEffect, useRef } from 'react';

export default function BrandSlider() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const positionRef = useRef(0);
  const animationRef = useRef(null);
  
  const brands = [
    { id: 1, name: "Michael's", logo: "/images/slider-company/adidas.png" },
    { id: 2, name: "Walmart", logo: "/images/slider-company/ncell.png" },
    { id: 3, name: "POLITICO", logo: "/images/slider-company/nxtech-seo.png" },
    { id: 4, name: "DreamWorks", logo: "/images/svg/4.svg" },
    { id: 5, name: "SONY", logo: "/images/svg/5.svg" },
    { id: 6, name: "TISSOT", logo: "/images/svg/6.svg" },
    { id: 7, name: "CONVERSE", logo: "/images/svg/7.svg" },
    { id: 8, name: "Ray-Ban", logo: "/images/svg/8.svg" },
    { id: 9, name: "Adidas", logo: "/images/svg/9.svg" },
    { id: 10, name: "Nike", logo: "/images/svg/10.svg" },
    { id: 11, name: "Puma", logo: "/images/svg/1.svg" },
    { id: 12, name: "Apple", logo: "/images/svg/2.svg" },
    { id: 13, name: "Samsung", logo: "/images/svg/3.svg" },
    { id: 14, name: "Google", logo: "/images/svg/4.svg" },
    { id: 15, name: "Microsoft", logo: "/images/svg/5.svg" },
    { id: 16, name: "Amazon", logo: "/images/svg/6.svg" },
    { id: 17, name: "Tesla", logo: "/images/svg/7.svg" },
  ];
  
  const duplicatedBrands = [...brands, ...brands];
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    
    // Adjust animation speed based on device
    const speedMultiplier = isMobile ? 0.5 : 0.8;
    const frameRate = 1000 / 60; // 60fps
    
    const animate = () => {
      if (isHovering && !isMobile) {
        // On hover, just keep the current position
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Increment position
      positionRef.current += 0.002 * speedMultiplier;
      
      // Reset position when we reach the end of the first set
      if (positionRef.current >= 1) {
        positionRef.current = 0;
      }
      
      // Apply transform based on current position - smooth transition
      slider.style.transform = `translateX(-${positionRef.current * 100}%)`;
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, isMobile]);

  // Calculate how many logos to show at once based on screen size
  const getLogoWidthClass = () => {
    // For phones (extra small)
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return 'w-1/3'; // 3 logos per row
    }
    // For small tablets
    else if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 'w-1/4'; // 4 logos per row
    }
    // For tablets (medium)
    else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return 'w-1/5'; // 5 logos per row
    }
    // For laptops (large)
    else if (typeof window !== 'undefined' && window.innerWidth < 1280) {
      return 'w-1/6'; // 6 logos per row
    }
    // For desktops (extra large)
    return 'w-1/8'; // 8 logos per row
  };

  return (
    <div
      className="w-full bg-white py-3 sm:py-4 md:py-6 border-b border-solid overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
    >
      <div className="max-w-full mx-auto px-2 sm:px-3 md:px-4">
        <div className="relative overflow-hidden">
          {/* Logo Slider */}
          <div
            ref={sliderRef}
            className="flex items-center"
            style={{ willChange: 'transform' }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className={`flex-none w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8 px-2 sm:px-3 md:px-4 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-8 sm:h-10 md:h-12 object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Edge fade effects */}
          <div className="absolute top-0 left-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}