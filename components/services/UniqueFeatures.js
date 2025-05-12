import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UniqueFeatures({ title = "Unique features of Foxbeep WordPress development services", features = defaultFeatures }) {
  const [activeFeature, setActiveFeature] = useState(features[0]?.id || "");
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Function to handle slider navigation
  const handleSlide = (direction) => {
    const currentIndex = features.findIndex(f => f.id === activeFeature);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % features.length;
    } else {
      newIndex = (currentIndex - 1 + features.length) % features.length;
    }
    
    setActiveFeature(features[newIndex].id);
  };

  // Find the active feature object
  const activeFeatureObject = features.find(f => f.id === activeFeature);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 bg-white text-black">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-12 text-black">{title}</h1>
      
      <div className="border-t border-gray-200"></div>
      
      {isMobile ? (
        <div className="mt-6" ref={sliderRef}>
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => handleSlide('prev')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h3 className="text-xl font-medium text-center px-4">{activeFeatureObject?.title}</h3>
            <button 
              onClick={() => handleSlide('next')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg md:text-xl">{activeFeatureObject?.content}</p>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-3 h-3 rounded-full ${
                  activeFeature === feature.id ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-1 pt-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`py-3 px-2 cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id 
                    ? "bg-gray-50 rounded-l-lg relative" 
                    : "hover:bg-gray-50/50"
                }`}
              >
                {activeFeature === feature.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-black rounded-l"></div>
                )}
                <h3 className="text-xl lg:text-2xl pl-3 font-medium">{feature.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-2 bg-gray-50 p-6 md:p-8 rounded-lg md:rounded-l-none md:rounded-r-lg flex items-center">
            <p className="text-lg md:text-xl lg:text-2xl">{activeFeatureObject?.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Default features if none are provided
const defaultFeatures = [
  {
    id: "customization",
    title: "Custom WordPress Solutions",
    content: "We build highly customized WordPress themes and plugins tailored to your specific business needs, ensuring a unique digital presence."
  },
  {
    id: "security",
    title: "Robust Security Practices",
    content: "Our WordPress development incorporates best-in-class security measures, including regular updates, malware scanning, and secure authentication to protect your website and user data."
  },
  {
    id: "userInterface",
    title: "User-Friendly Dashboard",
    content: "We design intuitive and easy-to-navigate admin interfaces, making content management seamless even for non-technical users."
  },
  {
    id: "performance",
    title: "Optimized Performance",
    content: "Our websites are built for speed and efficiency, using clean code, optimized images, and caching strategies to ensure fast load times and excellent SEO performance."
  },
  {
    id: "integration",
    title: "Third-Party Integration",
    content: "We integrate essential tools like payment gateways, CRMs, and marketing platforms, extending WordPress functionality to meet your business goals."
  },
  {
    id: "maintenance",
    title: "Ongoing Support & Maintenance",
    content: "Get peace of mind with our post-launch support plans, including backups, plugin updates, uptime monitoring, and issue resolution."
  }
];