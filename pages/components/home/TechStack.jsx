import { useState, useRef, useEffect } from 'react';
import SoftwareTeamBanner from './SoftwareTeamBanner';

export default function EnhancedTechShowcase() {
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
    'Web Development': {
      subcategories: ['Frontend', 'Backend', 'CMS'],
      technologies: {
        'Frontend': [
          { name: 'React', icon: '⚛️' },
          { name: 'Vue', icon: '🟢' },
          { name: 'Angular', icon: '🅰️' },
          { name: 'Next.js', icon: '▲' }
        ],
        'Backend': [
          { name: 'Node.js', icon: '🟩' },
          { name: 'Django', icon: '🐍' },
          { name: 'Laravel', icon: '🔸' },
          { name: 'Express', icon: '⚡' }
        ],
        'CMS': [
          { name: 'WordPress', icon: '📝' },
          { name: 'Strapi', icon: '🔷' },
          { name: 'Contentful', icon: '📊' },
          { name: 'Sanity', icon: '🧩' }
        ]
      }
    },
    'Mobile Development': {
      subcategories: ['iOS', 'Android', 'Cross-Platform'],
      technologies: {
        'iOS': [
          { name: 'Swift', icon: '🐦' },
          { name: 'UI Kit', icon: '📱' },
          { name: 'RxSwift', icon: '⚛️' },
          { name: 'Combine', icon: '🔄' },
          { name: 'MVVM', icon: '🏗️' },
          { name: 'Core Data', icon: '💾' },
          { name: 'Alamofire', icon: '🔥' }
        ],
        'Android': [
          { name: 'Kotlin', icon: '🟣' },
          { name: 'MVVM', icon: '🏗️' },
          { name: 'RxJava', icon: '⚡' },
          { name: 'Java', icon: '☕' },
          { name: 'Retrofit', icon: '🔄' },
          { name: 'Jetpack', icon: '🚀' }
        ],
        'Cross-Platform': [
          { name: 'React Native', icon: '⚛️' },
          { name: 'Flutter', icon: '🦋' },
          { name: 'Ionic', icon: '⚡' },
          { name: 'Xamarin', icon: '📊' }
        ]
      }
    },
    'Cloud Solutions': {
      subcategories: ['Providers', 'Services', 'Tools'],
      technologies: {
        'Providers': [
          { name: 'AWS', icon: '☁️' },
          { name: 'Azure', icon: '🔵' },
          { name: 'GCP', icon: '🌐' },
          { name: 'Digital Ocean', icon: '🌊' }
        ],
        'Services': [
          { name: 'Lambda', icon: 'λ' },
          { name: 'S3', icon: '📦' },
          { name: 'EC2', icon: '🖥️' },
          { name: 'DynamoDB', icon: '🗄️' }
        ],
        'Tools': [
          { name: 'Terraform', icon: '🏗️' },
          { name: 'Serverless', icon: '⚡' },
          { name: 'Firebase', icon: '🔥' },
          { name: 'Pulumi', icon: '🧰' }
        ]
      }
    },
    'DevOps & CI/CD': {
      subcategories: ['Containerization', 'CI/CD', 'Monitoring'],
      technologies: {
        'Containerization': [
          { name: 'Docker', icon: '🐳' },
          { name: 'Kubernetes', icon: '⎈' },
          { name: 'Helm', icon: '⛵' },
          { name: 'Podman', icon: '📦' }
        ],
        'CI/CD': [
          { name: 'GitHub Actions', icon: '⚙️' },
          { name: 'Jenkins', icon: '🤖' },
          { name: 'CircleCI', icon: '🔄' },
          { name: 'ArgoCD', icon: '🚀' }
        ],
        'Monitoring': [
          { name: 'Prometheus', icon: '📊' },
          { name: 'Grafana', icon: '📈' },
          { name: 'ELK Stack', icon: '🔍' },
          { name: 'Datadog', icon: '🐶' }
        ]
      }
    },
    'Data Science': {
      subcategories: ['ML/AI', 'Data Processing', 'Visualization'],
      technologies: {
        'ML/AI': [
          { name: 'TensorFlow', icon: '🧠' },
          { name: 'PyTorch', icon: '🔥' },
          { name: 'Scikit-learn', icon: '📊' },
          { name: 'NLTK', icon: '📝' }
        ],
        'Data Processing': [
          { name: 'Python', icon: '🐍' },
          { name: 'Pandas', icon: '🐼' },
          { name: 'Spark', icon: '⚡' },
          { name: 'Dask', icon: '🧮' }
        ],
        'Visualization': [
          { name: 'Matplotlib', icon: '📈' },
          { name: 'D3.js', icon: '📊' },
          { name: 'Tableau', icon: '📉' },
          { name: 'Jupyter', icon: '📓' }
        ]
      }
    },
    'Blockchain': {
      subcategories: ['Platforms', 'Development', 'Tools'],
      technologies: {
        'Platforms': [
          { name: 'Ethereum', icon: '💎' },
          { name: 'Polygon', icon: '⬡' },
          { name: 'Solana', icon: '☀️' },
          { name: 'Binance', icon: '🔶' }
        ],
        'Development': [
          { name: 'Solidity', icon: '📝' },
          { name: 'Web3.js', icon: '🌐' },
          { name: 'Hardhat', icon: '🎩' },
          { name: 'Truffle', icon: '🍫' }
        ],
        'Tools': [
          { name: 'MetaMask', icon: '🦊' },
          { name: 'Ganache', icon: '🧪' },
          { name: 'Etherscan', icon: '🔍' },
          { name: 'NFT', icon: '🖼️' }
        ]
      }
    }
  };

  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-18">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Technologies We Use
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            Access our network of 400+ specialized experts in cutting-edge technologies and frameworks, 
            ready to elevate your digital projects to the next level.
          </p>
        </div>
        
        {/* Mobile Tab Navigation */}
        {isSmallScreen && (
          <div 
            ref={tabsContainerRef}
            className="flex overflow-x-auto py-2 px-1 mb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 py-2 px-4 mr-2 rounded-full transition-all duration-300 whitespace-nowrap text-center cursor-pointer
                  ${activeCategory === category 
                    ? 'bg-purple-600 text-white shadow-lg active-tab'
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
            <div className="md:w-1/4 mb-8 md:mb-0 md:pr-8">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-3 px-5 mb-3 rounded-lg transition-all duration-300 cursor-pointer font-medium text-lg
                    ${activeCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'}`}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
          
          {/* Technology Cards with Subcategories */}
          <div className={`${isSmallScreen ? 'w-full' : 'md:w-3/4'}`}>
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {activeCategory}
            </h2> */}
            
            {/* Subcategory Sections */}
            <div className="space-y-12">
              {technologies[activeCategory].subcategories.map((subcategory) => (
                <div key={subcategory} className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-200 border-b border-gray-700 pb-2">
                    {subcategory}
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {technologies[activeCategory].technologies[subcategory].map((tech, index) => (
                      <div
                        key={tech.name}
                        className="bg-gray-800 rounded-lg p-1 border border-gray-700 hover:border-white 
                          transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-2xl ">
                            {tech.icon}
                          </div>
                          
                          <div>
                            <span className="font-medium text-white">{tech.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
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