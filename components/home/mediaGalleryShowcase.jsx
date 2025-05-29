import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

export default function VideoEditingShowcase() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoverCategory, setHoverCategory] = useState(null);
  const [screenWidth, setScreenWidth] = useState(1024); // Default to desktop width
  const detailsRef = useRef(null);

  const videoIds = [
    "b5NQy0IqMIY", // YouTube Video Editing
    "HGWi-5TBZU0", // Ads & Commercial Editing
    "YMKW-Nki-TQ", // Social Media Video Editing
    "EdD_mIjBIZI", // Corporate Video Editing
    "W3zroZV3Oy8", // Event Video Editing
    "IhrBmx78ZO0", // Short Video Creation
    "gxkEW6cOWyI"  // Whiteboard Animation
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      
      if (width >= 1024 && activeCategory === null) {
        setActiveCategory(1); 
      } else if (width < 1024) {
        setActiveCategory(null); 
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [activeCategory]);

  const categories = [
    {
      title: "YouTube Video Editing",
      description: "Tailored editing for YouTube creators to enhance watch time, engagement, and subscriber growth.",
      image: "/images/videoIcon/youtube.png",
      features: ["Engaging Intros/Outros", "Jump Cuts", "On-screen Text & Effects"]
    },
    {
      title: "Ads & Commercial Editing",
      description: "High-impact editing for advertisements and commercials designed to convert and captivate.",
      image: "/images/videoIcon/commercial.png",
      features: ["Brand Messaging", "Product Highlighting", "Call-To-Action Overlays"]
    },
    {
      title: "Social Media Video Editing",
      description: "Optimized video formats for platforms like Instagram, TikTok, and Facebook to boost shares and reach.",
      image: "/images/videoIcon/social-media.png",
      features: ["Vertical Formats", "Trendy Transitions", "Platform-Specific Captions"]
    },
    {
      title: "Corporate Video Editing",
      description: "Professional editing for corporate content like promos, training videos, and internal communications.",
      image: "/images/videoIcon/corporate.png",
      features: ["Clean Transitions", "Branded Graphics", "Subtle Background Music"]
    },
    {
      title: "Event Video Editing",
      description: "Dynamic editing for weddings, conferences, and live events to preserve the energy and emotion.",
      image: "/images/videoIcon/event.png",
      features: ["Highlight Reels", "Multi-Cam Syncing", "Emotion-Driven Cuts"]
    },
    {
      title: "Short Video Creation",
      description: "Dynamic editing for weddings, conferences, and live events to preserve the energy and emotion.",
      image: "/images/videoIcon/short-video.png",
      features: ["Highlight Reels", "Multi-Cam Syncing", "Emotion-Driven Cuts"]
    },
    {
      title: "Whiteboard Animation",
      description: "Clear and creative whiteboard-style animations to explain concepts or pitch ideas visually.",
      image: "/images/videoIcon/whiteboard.png",
      features: ["Hand-Drawn Effects", "Voiceover Syncing", "Script-Based Flow"]
    }
  ];

  const handleCategoryClick = (index) => {
    const previousActive = activeCategory;
    setActiveCategory(index === activeCategory ? null : index);

    if (typeof window !== 'undefined' && screenWidth < 1024 && index !== previousActive && index !== null) {
      setTimeout(() => {
        if (detailsRef.current) {
          detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const calculatePosition = (index, total) => {
    const angle = (index * (2 * Math.PI / total)) - Math.PI / 2;
    
    let radius = 180; 
    if (screenWidth >= 1536) radius = 280; 
    else if (screenWidth >= 1280) radius = 240; 
    else if (screenWidth >= 1024) radius = 200; 
    
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return { x, y };
  };

  const getYouTubeEmbedUrl = () => {
    if (activeCategory !== null) {
      const videoId = videoIds[activeCategory];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`;
    }
    return `https://www.youtube.com/embed/${videoIds[0]}?autoplay=0&controls=1&rel=0`;
  };

  return (
    <div className="w-full bg-black text-gray-800 py-6 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-white">
          Video and Media
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl">
          From promotional videos to branded content and high-quality animations, our media team brings your ideas to life. Leverage the skills of 400+ creative and technical professionals to deliver content that captivates, informs, and drives engagement.
        </p>
      </div>

      <div className="lg:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${activeCategory === index ? 'border-gray-200 ring-2 ring-gray-200' : 'border-gray-700'
                }`}
              onClick={() => handleCategoryClick(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 sm:p-3 bg-gray-900">
                <h3 className="text-xs sm:text-sm font-bold text-white truncate">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {activeCategory !== null && (
          <div ref={detailsRef} className="bg-gray-900 bg-opacity-80 rounded-xl sm:rounded-2xl w-full p-4 sm:p-6 overflow-hidden text-white shadow-2xl">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white pr-2">{categories[activeCategory].title}</h2>
              <button
                onClick={() => setActiveCategory(null)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-1 sm:p-2 flex-shrink-0"
              >
                <X size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 md:h-56">
              <iframe
                className="w-full h-full"
                src={getYouTubeEmbedUrl()}
                title={`${categories[activeCategory].title} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-100">{categories[activeCategory].description}</p>

            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-purple-300">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {categories[activeCategory].features.map((feature, idx) => (
                <span key={idx} className="bg-gray-100 bg-opacity-50 text-gray-800 px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl text-xs sm:text-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex flex-col lg:flex-row min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative">
          <div className="relative w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl aspect-square">            <div className="absolute left-1/2 top-1/2 w-48 h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 -ml-24 xl:-ml-28 2xl:-ml-32 -mt-24 xl:-mt-28 2xl:-mt-32 rounded-full bg-purple-700 shadow-xl flex items-center justify-center z-10 overflow-hidden">
              <img src="/images/videoIcon/main-video.png" alt="Company Logo" className="w-full h-full object-cover" />
            </div>

            {categories.map((category, index) => {
              const { x, y } = calculatePosition(index, categories.length);

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    zIndex: hoverCategory === index || activeCategory === index ? 20 : 5
                  }}
                  onMouseEnter={() => setHoverCategory(index)}
                  onMouseLeave={() => setHoverCategory(null)}
                  onClick={() => handleCategoryClick(index)}
                >
                  <div className="relative">
                    <div
                      className={`w-28 h-28 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 rounded-full overflow-hidden border-4 shadow-lg transition-all duration-300 ${activeCategory === index ? 'border-gray-200 scale-125' : 'border-white hover:scale-110'
                        }`}
                    >
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    {hoverCategory === index && activeCategory !== index && (
                      <div className="absolute -bottom-12 xl:-bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-90 rounded-lg p-2 xl:p-3 shadow-lg w-56 xl:w-72 text-center pointer-events-none">
                        <h4 className="font-bold text-sm xl:text-lg text-white">{category.title}</h4>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {activeCategory !== null ? (
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 xl:p-6">
            <div className="bg-gray-900 bg-opacity-80 rounded-2xl w-full h-[90%] p-4 xl:p-6 2xl:p-8 overflow-hidden text-white shadow-2xl">
              <div className="flex justify-between items-start mb-4 xl:mb-6">
                <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white py-2 xl:py-4">{categories[activeCategory].title}</h2>
              </div>

              <div className="mb-4 xl:mb-6 rounded-xl overflow-hidden h-48 xl:h-56 2xl:h-72">
                <iframe
                  className="w-full h-full"
                  src={getYouTubeEmbedUrl()}
                  title={`${categories[activeCategory].title} video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-base xl:text-lg 2xl:text-xl mb-4 xl:mb-6 text-purple-100">{categories[activeCategory].description}</p>

              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-bold mb-3 text-purple-300">Key Features</h3>
              <div className="flex flex-wrap gap-2 xl:gap-3">
                {categories[activeCategory].features.map((feature, idx) => (
                  <span key={idx} className="bg-black bg-opacity-50 text-gray-100 px-3 xl:px-4 py-2 rounded-xl text-sm xl:text-base 2xl:text-lg">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 xl:p-6">
            <div className="bg-gray-900 bg-opacity-80 rounded-2xl w-full h-[90%] p-6 xl:p-8 flex items-center justify-center text-white shadow-2xl">
              <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-white text-center">Select a category to view details</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}