import { useState } from "react";
import { X } from "lucide-react";

export default function VideoEditingShowcase() {
  // Initialize with Film Production (index 1) by default
  const [activeCategory, setActiveCategory] = useState(1);
  const [hoverCategory, setHoverCategory] = useState(null);
 
  // Categories data
  const categories = [
    {
      title: "YouTube Video Editing",
      description: "Tailored editing for YouTube creators to enhance watch time, engagement, and subscriber growth.",
      image: "https://media.screenpal.com/blog/wp-content/uploads/2023/03/Free_Video_Editor.webp",
      features: ["Engaging Intros/Outros", "Jump Cuts", "On-screen Text & Effects"]
    },
    {
      title: "Ads & Commercial Editing",
      description: "High-impact editing for advertisements and commercials designed to convert and captivate.",
      image: "https://wp.disruptiveadvertising.com/wp-content/uploads/2017/11/video-ad-editing-blog.jpg",
      features: ["Brand Messaging", "Product Highlighting", "Call-To-Action Overlays"]
    },
    {
      title: "Social Media Video Editing",
      description: "Optimized video formats for platforms like Instagram, TikTok, and Facebook to boost shares and reach.",
      image: "https://cdn.prod.website-files.com/603f5d1df4ee236b69719ff2/659436b59d95556184643b68_role%20of%20video%20editing%20specialist.webp",
      features: ["Vertical Formats", "Trendy Transitions", "Platform-Specific Captions"]
    },
    {
      title: "Corporate Video Editing",
      description: "Professional editing for corporate content like promos, training videos, and internal communications.",
      image: "https://cdn.prod.website-files.com/65e72116758ee0365601bcec/6627c057d2411e6f100bf278_Professional-Editing-Business.jpg",
      features: ["Clean Transitions", "Branded Graphics", "Subtle Background Music"]
    },
    {
      title: "Event Video Editing",
      description: "Dynamic editing for weddings, conferences, and live events to preserve the energy and emotion.",
      image: "https://www.adobe.com/content/dam/cc/uk/products/professional-corporate-and-events-video-editing/corporate_marquee-uk-seo-1200x676.jpg",
      features: ["Highlight Reels", "Multi-Cam Syncing", "Emotion-Driven Cuts"]
    },
    {
        title: "Short Video Creation",
        description: "Dynamic editing for weddings, conferences, and live events to preserve the energy and emotion.",
        image: "https://static-cse.canva.com/blob/1145855/create_short-video-maker_hero_desktop-min.jpg",
        features: ["Highlight Reels", "Multi-Cam Syncing", "Emotion-Driven Cuts"]
      },
    {
      title: "Whiteboard Animation",
      description: "Clear and creative whiteboard-style animations to explain concepts or pitch ideas visually.",
      image: "https://img.freepik.com/free-psd/3d-illustration-cartoon-character-young-working-woman-standing-point-white-board-present-work-white_1150-52374.jpg",
      features: ["Hand-Drawn Effects", "Voiceover Syncing", "Script-Based Flow"]
    }
  ];
  

  // Handle category click to show details
  const handleCategoryClick = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  return (
    <div className="w-full bg-black text-gray-800 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Video and Media
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
          Access our network of 400+ specialized experts in cutting-edge technologies and frameworks,
          ready to elevate your digital projects to the next level.
        </p>
      </div>
        
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left side - Circle showcase */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
          <div className="relative w-full max-w-3xl aspect-square">
            {/* Central circle with company logo */}
            <div className="absolute left-1/2 top-1/2 w-64 h-64 -ml-32 -mt-32 rounded-full bg-purple-700 shadow-xl flex items-center justify-center z-0">
              <div className="rounded-full overflow-hidden w-56 h-56 border-4 border-white">
                <img src="https://p16-capcut-cms-sg.ibyteimg.com/tos-alisg-i-6rr7idwo9f-sg/14f5b7847ee1420fa025f752250c3945~tplv-6rr7idwo9f-image.image" alt="Company Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Orbital categories */}
            {categories.map((category, index) => {
              // Calculate position on the circle
              const angle = (index * (2 * Math.PI / categories.length)) - Math.PI / 2; // Start from top
              const radius = 240; // Distance from center
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    zIndex: hoverCategory === index || activeCategory === index ? 5 : 0
                  }}
                  onMouseEnter={() => setHoverCategory(index)}
                  onMouseLeave={() => setHoverCategory(null)}
                  onClick={() => handleCategoryClick(index)}
                >
                  <div className="relative">
                    <div 
                      className={`w-40 h-40 rounded-full overflow-hidden border-4 shadow-lg transition-all duration-300 ${
                        activeCategory === index ? 'border-purple-400 scale-125' : 'border-white hover:scale-110'
                      }`}
                    >
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    {hoverCategory === index && activeCategory !== index && (
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-90 rounded-lg p-2 shadow-lg w-72 z-51 text-center pointer-events-none">
                        <h4 className="font-bold text-lg text-white">{category.title}</h4>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side - Details Panel */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
          <div className="bg-gray-900 bg-opacity-80 rounded-2xl w-full h-[90%] p-6 overflow-hidden text-white shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-4xl font-bold text-white">{categories[activeCategory].title}</h2>
              <button 
                onClick={() => setActiveCategory(null)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="mb-6 rounded-xl overflow-hidden h-72">
              <img 
                src={categories[activeCategory].image} 
                alt={categories[activeCategory].title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-xl mb-6 text-purple-100">{categories[activeCategory].description}</p>
            
            <h3 className="text-2xl font-bold mb-3 text-purple-300">Key Features</h3>
            <div className="flex flex-wrap gap-3">
              {categories[activeCategory].features.map((feature, idx) => (
                <span key={idx} className="bg-purple-900 bg-opacity-50 text-purple-100 px-4 py-2 rounded-xl text-lg">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}