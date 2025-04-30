import { useState, useRef, useEffect } from 'react';

export default function TechShowcase() {
  const [activeCategory, setActiveCategory] = useState('Web Development');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const tabsContainerRef = useRef(null);
  
  // Check screen size on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Scroll active tab into view on mobile
  useEffect(() => {
    if (isSmallScreen && tabsContainerRef.current) {
      const activeTab = tabsContainerRef.current.querySelector('.active-tab');
      if (activeTab) {
        const container = tabsContainerRef.current;
        const scrollLeft = activeTab.offsetLeft - (container.clientWidth / 2) + (activeTab.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategory, isSmallScreen]);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'DevOps & CI/CD',
    'Data Science',
    'Blockchain'
  ];
    
  const technologies = {
    'Web Development': [
      { name: 'React', icon: '⚛️', color: 'blue' },
      { name: 'Next.js', icon: '▲', color: 'gray' },
      { name: 'Vue', icon: '🟢', color: 'green' },
      { name: 'Angular', icon: '🅰️', color: 'red' },
      { name: 'TypeScript', icon: '🔷', color: 'blue' },
      { name: 'Tailwind', icon: '🌊', color: 'cyan' }
    ],
    'Mobile Development': [
      { name: 'React Native', icon: '📱', color: 'blue' },
      { name: 'Flutter', icon: '🦋', color: 'cyan' },
      { name: 'Swift', icon: '🐦', color: 'orange' },
      { name: 'Kotlin', icon: '🟣', color: 'purple' },
      { name: 'Ionic', icon: '⚡', color: 'blue' },
      { name: 'Xamarin', icon: '📊', color: 'indigo' }
    ],
    'Cloud Solutions': [
      { name: 'AWS', icon: '☁️', color: 'orange' },
      { name: 'Azure', icon: '🔵', color: 'blue' },
      { name: 'GCP', icon: '🌐', color: 'red' },
      { name: 'Serverless', icon: '⚡', color: 'yellow' },
      { name: 'Firebase', icon: '🔥', color: 'amber' },
      { name: 'Digital Ocean', icon: '🌊', color: 'cyan' }
    ],
    'DevOps & CI/CD': [
      { name: 'Docker', icon: '🐳', color: 'blue' },
      { name: 'Kubernetes', icon: '⎈', color: 'sky' },
      { name: 'GitHub Actions', icon: '⚙️', color: 'gray' },
      { name: 'Jenkins', icon: '🤖', color: 'red' },
      { name: 'CircleCI', icon: '🔄', color: 'green' },
      { name: 'ArgoCD', icon: '🚀', color: 'purple' }
    ],
    'Data Science': [
      { name: 'Python', icon: '🐍', color: 'yellow' },
      { name: 'TensorFlow', icon: '🧠', color: 'orange' },
      { name: 'PyTorch', icon: '🔥', color: 'red' },
      { name: 'Pandas', icon: '🐼', color: 'blue' },
      { name: 'Scikit-learn', icon: '📊', color: 'orange' },
      { name: 'Jupyter', icon: '📓', color: 'amber' }
    ],
    'Blockchain': [
      { name: 'Ethereum', icon: '💎', color: 'purple' },
      { name: 'Solidity', icon: '📝', color: 'gray' },
      { name: 'Web3.js', icon: '🌐', color: 'indigo' },
      { name: 'Hardhat', icon: '🎩', color: 'yellow' },
      { name: 'Polygon', icon: '⬡', color: 'purple' },
      { name: 'NFT', icon: '🖼️', color: 'green' }
    ]
  };
  
  // Color mapper for tech cards
  const colorMap = {
    blue: 'from-blue-600 to-blue-800 shadow-blue-500/20',
    red: 'from-red-600 to-red-800 shadow-red-500/20',
    green: 'from-green-600 to-green-800 shadow-green-500/20',
    purple: 'from-purple-600 to-purple-800 shadow-purple-500/20',
    yellow: 'from-yellow-600 to-yellow-800 shadow-yellow-500/20',
    orange: 'from-orange-600 to-orange-800 shadow-orange-500/20',
    cyan: 'from-cyan-600 to-cyan-800 shadow-cyan-500/20',
    amber: 'from-amber-600 to-amber-800 shadow-amber-500/20',
    indigo: 'from-indigo-600 to-indigo-800 shadow-indigo-500/20',
    sky: 'from-sky-600 to-sky-800 shadow-sky-500/20',
    gray: 'from-gray-600 to-gray-800 shadow-gray-500/20'
  };

  return (
    <div className="w-full bg-gray-900 bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Technologies We Master
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access our network of 400+ specialized experts in cutting-edge technologies and frameworks, 
            ready to elevate your digital projects to the next level.
          </p>
        </div>
        
        {/* Mobile Tab Navigation */}
        {isSmallScreen && (
          <div 
            ref={tabsContainerRef}
            className="flex overflow-x-auto py-2 px-1 mb-8 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 py-3 px-5 mr-2 rounded-full transition-all duration-300 whitespace-nowrap text-center cursor-pointer
                  ${activeCategory === category 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20 active-tab'
                    : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                {category}
              </div>
            ))}
          </div>
        )}
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Desktop Sidebar Navigation */}
          {!isSmallScreen && (
            <div className="md:w-1/4 mb-8 md:mb-0 md:sticky md:top-0">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-4 px-6 mb-3 rounded-lg transition-all duration-300 cursor-pointer font-medium text-lg
                    ${activeCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'}`}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
          
          {/* Technology Cards */}
          <div className={`${isSmallScreen ? 'w-full' : 'md:w-3/4 md:pl-12'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {activeCategory}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies[activeCategory].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-xl p-5 border border-gray-700 hover:border-blue-500 
                    transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1
                    hover:scale-102 overflow-hidden relative group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[tech.color]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                      bg-gradient-to-br ${colorMap[tech.color]}`}>
                      {tech.icon}
                    </div>
                    
                    <div>
                      <span className="font-semibold text-lg">{tech.name}</span>
                      <div className="h-1.5 w-12 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}