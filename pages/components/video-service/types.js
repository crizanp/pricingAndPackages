import { useState, useEffect } from 'react';
import { ShoppingBag, Award, Megaphone, TrendingUp, Film, Plus, ChevronRight } from 'lucide-react';

const TypesVideo = ({ 
  title = "Ads & Commercial Video Editing",
  id = "ads-and-commercial",
  backgroundColor = "bg-black",
  textColor = "text-white",
  accentColor = "#ec4899",
  showCTA = false,
  ctaText = "Start Your Ad Project",
  ctaLink = "#contact",
  services = [
    {
      title: "Product Commercials",
      icon: "ShoppingBag",
      color: "#ec4899", // Pink
      features: ["Product highlighting techniques", "Feature showcase sequences", "Benefit-driven storytelling"],
      videoId: "RX6XeJ2XVqo"
    },
    {
      title: "Brand Storytelling",
      icon: "Award",
      color: "#8b5cf6", // Purple
      features: ["Emotional narrative building", "Brand value visualization", "Identity-consistent aesthetics"],
      videoId: "VTdSO1pqHwc"
    },
    {
      title: "Social Media Ads",
      icon: "Megaphone",
      color: "#0ea5e9", // Blue
      features: ["Platform-optimized formats", "Scroll-stopping openers", "CTA-driven editing"],
      videoId: "xPZ2Nm3O4jE"
    },
    {
      title: "Conversion-Focused Videos",
      icon: "TrendingUp",
      color: "#22c55e", // Green
      features: ["Sales funnel optimization", "Viewer decision prompts", "Trust-building segments"],
      videoId: "nuTtFw6EvGM"
    },
    {
      title: "TV & OTT Commercials",
      icon: "Film",
      color: "#f59e0b", // Orange
      features: ["Broadcast-quality production", "15/30/60 second formats", "Multi-platform deliverables"],
      videoId: "Aeb4SfWmkXU"
    }
  ]
}) => {
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const isWhiteBg = backgroundColor === "bg-white";
  
  // Dynamic styling based on background color
  const borderColor = isWhiteBg ? "border-gray-200" : "border-slate-700";
  const serviceBg = isWhiteBg ? "bg-gray-100" : "bg-slate-800/50";
  const serviceHoverBg = isWhiteBg ? "bg-gray-200" : "bg-slate-800/20";
  const mobileTabBg = isWhiteBg ? "bg-gray-100" : "bg-slate-800/40";
  const mobileTabActiveBg = isWhiteBg ? "bg-gray-200" : "bg-slate-800";
  const featuresBg = isWhiteBg ? "bg-gray-50" : "bg-slate-800/50";
  const particleColor = isWhiteBg ? "bg-gray-300" : "bg-white";
  
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Create particles
    const newParticles = [];
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    setParticles(newParticles);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const selectService = (index) => {
    setActiveService(index);
  };

  // Icon mapping
  const iconMap = {
    "ShoppingBag": ShoppingBag,
    "Award": Award,
    "Megaphone": Megaphone,
    "TrendingUp": TrendingUp,
    "Film": Film
  };

  // Render the appropriate icon component based on the service index
  const renderIcon = (index) => {
    const IconComponent = iconMap[services[index].icon] || ShoppingBag;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    // Fixed: removed template literal from id attribute
    <div className={`${backgroundColor} ${textColor}  w-full p-4 lg:p-24 relative overflow-hidden`} id={id}>
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className={`absolute rounded-full ${particleColor}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 text-center md:text-left">
          {title}
        </h1>
        
        {/* Mobile View - Only Videos */}
        {isMobile && (
          <div className="flex flex-col space-y-6">
            {/* Video Preview */}
            <div className={`rounded-lg overflow-hidden border ${borderColor} shadow-xl bg-black`}>
              <div className="relative pb-[56.25%]">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${services[activeService].videoId}?autoplay=1&mute=1`}
                  title={services[activeService].title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Service Selection Tabs */}
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 ${
                    index === activeService 
                      ? mobileTabActiveBg + ' border-2' 
                      : mobileTabBg + ' border ' + borderColor
                  }`}
                  style={{ borderColor: index === activeService ? service.color : undefined }}
                  onClick={() => selectService(index)}
                >
                  <div 
                    className="p-1 rounded-md" 
                    style={{ color: service.color }}
                  >
                    {renderIcon(index)}
                  </div>
                  <span className="text-sm font-medium" style={{ color: index === activeService ? service.color : undefined }}>
                    {service.title.split('/')[0].trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Desktop View */}
        {!isMobile && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              {/* Services List */}
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`border-l-4 transition-all duration-300 ${
                    index === activeService 
                      ? serviceBg + ' backdrop-blur-sm' 
                      : serviceHoverBg
                  }`}
                  style={{ borderColor: service.color }}
                >
                  <div 
                    className="flex items-center cursor-pointer p-4 gap-3"
                    onClick={() => selectService(index)}
                  >
                    <div 
                      className="p-2 rounded-md" 
                      style={{ backgroundColor: service.color }}
                    >
                      {index === activeService ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                    <h3 className="text-2xl md:text-xl lg:text-2xl font-medium flex-1" style={{ color: service.color }}>
                      {service.title}
                    </h3>
                    <ChevronRight className={`w-5 h-5 ${isWhiteBg ? 'text-gray-400' : 'text-gray-400'} transition-transform duration-300 ${
                      index === activeService ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Video Preview Section */}
            <div className="relative">
              <div className={`rounded-lg overflow-hidden border ${borderColor} shadow-xl bg-black relative`}>
                {/* YouTube Embed */}
                <div className="relative pb-[56.25%]">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${services[activeService].videoId}?autoplay=1&mute=1`}
                    title={services[activeService].title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Service Features */}
              <div className={`mt-6 ${featuresBg} backdrop-blur-sm rounded-lg p-6 border ${borderColor}`}>
                <h3 className="text-2xl font-medium mb-4" style={{ color: services[activeService].color }}>
                  {services[activeService].title} Features
                </h3>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: services[activeService].color }}></div>
                      <span className={`${isWhiteBg ? 'text-gray-700' : 'text-slate-300'} text-xl`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        {showCTA && (
          <div className="mt-16 text-center">
            <a 
              href={ctaLink}
              className={`inline-block px-8 py-4 ${isWhiteBg ? 'bg-black text-white' : 'bg-white text-black'} font-semibold rounded-md hover:opacity-90 transition-all duration-300`}
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypesVideo;

// Custom Minus icon component since it's not in lucide-react
const Minus = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);