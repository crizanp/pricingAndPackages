import { useState, useEffect } from 'react';
import { BookOpen, Video, Film, Mic, Plus, ChevronRight } from 'lucide-react';

const TypesVideo = () => {
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState([]);
  
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

  const services = [
    {
      title: "Courses Editing / E-Learning",
      icon: BookOpen,
      color: "#0ea5e9",
      features: ["Interactive learning elements", "Chapter markers & knowledge checks", "Engagement-optimized pacing"],
      videoId: "jYTZ9U_R_Y0"
    },
    {
      title: "Faceless Channels (AI)",
      icon: Video,
      color: "#8b5cf6",
      features: ["AI voice synthesis & narration", "Dynamic motion graphics", "Data-driven content creation"],
      videoId: "b5NQy0IqMIY"
    },
    {
      title: "YouTube Shorts Editing",
      icon: Film,
      color: "#ef4444",
      features: ["Vertical format optimization", "Hook-focused opening sequences", "Trending effects & transitions"],
      videoId: "IhrBmx78ZO0"
    },
    {
      title: "Interviews/Podcasts",
      icon: Mic,
      color: "#22c55e",
      features: ["Multi-camera switching", "Audio enhancement & noise reduction", "Visual highlight segments"],
      videoId: "nuTtFw6EvGM"
    },
    {
      title: "Explanatory Videos",
      icon: BookOpen,
      color: "#f59e0b",
      features: ["Complex concept visualization", "Step-by-step visual breakdowns", "Annotation & emphasis techniques"],
      videoId: "Aeb4SfWmkXU"
    }
  ];

  // Render the appropriate icon component based on the service index
  const renderIcon = (index) => {
    const IconComponent = services[index].icon;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <div className="bg-black text-white min-h-screen w-full p-4 lg:p-12 relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="absolute rounded-full bg-white"
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
          YouTube Video Editing
        </h1>
        
        {/* Mobile View - Only Videos */}
        {isMobile && (
          <div className="flex flex-col space-y-6">
            {/* Video Preview */}
            <div className="rounded-lg overflow-hidden border border-slate-700 shadow-xl bg-black">
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
                      ? 'bg-slate-800 border-2' 
                      : 'bg-slate-800/40 border border-slate-700'
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
                      ? 'bg-slate-800/50 backdrop-blur-sm' 
                      : 'bg-slate-800/20'
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
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      index === activeService ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Video Preview Section */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-slate-700 shadow-xl bg-black relative">
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
              <div className="mt-6 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-2xl font-medium mb-4" style={{ color: services[activeService].color }}>
                  {services[activeService].title} Features
                </h3>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: services[activeService].color }}></div>
                      <span className="text-slate-300 text-xl">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
       
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