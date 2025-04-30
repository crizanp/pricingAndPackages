import { useState, useEffect, useRef } from 'react';

export default function BrandSlider() {
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);
  
  const brands = [
    { id: 1, name: "Michael's", logo: "/images/svg/1.svg" },
    { id: 2, name: "Walmart", logo: "/images/svg/2.svg" },
    { id: 3, name: "POLITICO", logo: "/images/svg/3.svg" },
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
    if (isHovering) return;
    
    const slider = sliderRef.current;
    let animationFrameId;
    let position = 0;
    
    const animate = () => {
      position += 0.01; 
      
      if (position >= brands.length) {
        position = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0px)`;
        void slider.offsetHeight;
      }
      
      slider.style.transition = 'transform 2000ms linear';
      slider.style.transform = `translateX(-${position * (100 / brands.length)}%)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, brands.length]);
  
  return (
    <div 
      className="w-full bg-white py-6 border-b border-solid overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-full mx-auto px-4">
        <div className="relative overflow-hidden">
          {/* Logo Slider */}
          <div 
            ref={sliderRef}
            className="flex items-center"
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-none w-1/5 md:w-1/6 lg:w-1/8 px-4 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}