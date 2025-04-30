import { useState, useEffect, useRef } from 'react';
import { Brain, Code, BarChart3, Rocket, Workflow, Settings } from 'lucide-react';

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesignSectionVisible, setIsDesignSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const designSectionRef = useRef(null);
  
  const steps = [
    {
      id: 1,
      title: "Ideate",
      description: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      icon: <Brain className="text-purple-400" size={48} />,
      image: "https://www.cubix.co/dist/images/Ideate-bc1d4e566aed2c962b29a5eb74cb4254.webp" // Using placeholder image
    },
    {
      id: 2,
      title: "Design",
      description: "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
      icon: <Workflow className="text-purple-400" size={48} />,
      image: "https://www.cubix.co/dist/images/Design-39bcd11bff10a7a8ea23556caf975533.webp"
    },
    {
      id: 3,
      title: "Develop",
      description: "Our expert engineers transform designs into robust, scalable code using cutting-edge technologies and development practices.",
      icon: <Code className="text-purple-400" size={48} />,
      image: "https://www.cubix.co/dist/images/Development-416373ce2f0f56120822d93ff881ddaa.webp"
    },
    {
      id: 4,
      title: "Test",
      description: "Rigorous quality assurance ensures your product functions flawlessly across all environments and use cases.",
      icon: <Settings className="text-purple-400" size={48} />,
      image: "https://www.cubix.co/dist/images/Test-60ec19b4da318d0eaed81b505394b34c.webp"
    },
    {
      id: 5,
      title: "Analyze",
      description: "Data-driven insights guide continuous improvements, helping your product evolve with user needs and market demands.",
      icon: <BarChart3 className="text-purple-400" size={48} />,
      image: "https://www.cubix.co/dist/images/Launch-4770dcb20907819e53c2ad2a9c9b3506.webp"
    },
    {
      id: 6,
      title: "Launch",
      description: "Strategic deployment and marketing support ensure your product reaches its target audience with maximum impact.",
      icon: <Rocket className="text-purple-400" size={48} />,
      image: "https://www.cubix.co/dist/images/NewSupport-e6ca49799c45bd3b18e9095cc5a2370c.webp"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled within the section
      const scrollPosition = Math.max(0, scrollY - sectionTop);
      const totalScrollable = sectionHeight - windowHeight;
      
      // Calculate scroll progress as a percentage
      const progress = Math.min(Math.max(scrollPosition / totalScrollable, 0), 1) * 100;
      setScrollProgress(progress);
      
      // Determine which step is active based on scroll position
      // Each step takes an equal portion of the total scroll
      const stepHeight = totalScrollable / steps.length;
      const currentStep = Math.min(
        Math.floor(scrollPosition / stepHeight),
        steps.length - 1
      );
      
      setActiveStep(Math.max(0, currentStep));

      // Check if the design section is visible
      if (designSectionRef.current) {
        const designSection = designSectionRef.current;
        const designSectionTop = designSection.offsetTop;
        const designSectionHeight = designSection.offsetHeight;
        const designSectionBottom = designSectionTop + designSectionHeight;
        
        // Set isDesignSectionVisible to true when scrollY is within the design section
        setIsDesignSectionVisible(
          scrollY >= designSectionTop - windowHeight/2 && 
          scrollY <= designSectionBottom - windowHeight/2
        );
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [steps.length]);

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen w-full py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-20 space-y-4">
          <h1 className="text-7xl font-bold tracking-tight">
            Our product
            <span className="block text-purple-400">development process</span>
          </h1>
          <div className="flex items-center">
            <button className="text-base flex items-center group text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/5 transition-all">
              View More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Gallery container */}
        <div className="gallery relative hidden lg:flex">
          {/* Left column with text content */}
          <div className="left-col w-2/4">
            <div className="detailsWrapper pl-12">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="details pb-36"
                  ref={step.id === 2 ? designSectionRef : null}
                >
                  <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <p className="text-white font-normal mb-3 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        {String(step.id).padStart(2, '0')}/06
                      </p>
                      <div className="overflow-hidden">
                        <b className="font-bold text-purple-400 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:leading-[60px] 2xl:leading-[75px]" 
                           style={{ transform: 'translate(0px, -7px)' }}>
                          {step.title}
                        </b>
                      </div>
                      <p className="mt-7 mb-10 leading-9 text-white font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column with sticky images */}
          <div ref={galleryRef} className="right h-[34rem] w-96 ml-20 rounded-full overflow-hidden md:sticky top-[10%]">
            <div className="rounded-full">
              <div className="photos relative">
                {steps.map((step, index) => {
                  // Special case for Design (index 1)
                  if (index === 1) {
                    return (
                      <div 
                        key={step.id}
                        className={`photo w-full h-full absolute inset-0 transition-transform ease-out duration-300 ${isDesignSectionVisible ? 'z-20' : 'z-10'}`}
                        style={{ 
                          transform: isDesignSectionVisible ? 'translate(0px, 0px)' : 'translate(0px, 900px)',
                          opacity: isDesignSectionVisible ? 1 : (index === activeStep ? 1 : 0)
                        }}
                      >
                        <div className="rounded-2xl">
                          <img 
                            src={step.image} 
                            width="400" 
                            className="h-[34rem] w-full object-cover" 
                            alt={step.title}
                          />
                        </div>
                      </div>
                    )
                  }
                  return (
                    <div 
                      key={step.id}
                      className={`photo w-full h-full absolute inset-0 transition-transform ease-out duration-300 ${index === activeStep && !isDesignSectionVisible ? 'z-20' : 'z-10'}`}
                      style={{ 
                        transform: index === activeStep && !isDesignSectionVisible ? 'translate(0px, 0px)' : 'translate(0px, 900px)',
                        opacity: isDesignSectionVisible && index === 1 ? 0 : (index === activeStep ? 1 : 0)
                      }}
                    >
                      <div className="rounded-2xl">
                        <img 
                          src={step.image} 
                          width="400" 
                          className="h-[34rem] w-full object-cover" 
                          alt={step.title}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="slider-progress-bar-container absolute right-0 top-0 bottom-0 w-1 bg-gray-800">
            <div 
              id="sliderProgressBar" 
              className="slider-progress-bar absolute left-0 top-0 w-1 bg-white transition-all duration-300 ease-out" 
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Mobile view */}
        <div className="lg:hidden mt-16">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <p className="text-white text-sm font-mono opacity-60 mb-1">
                  {String(step.id).padStart(2, '0')}/06
                </p>
                <div className="text-purple-400 text-4xl font-bold mb-4">{step.title}</div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{step.description}</p>
                <div className="rounded-xl overflow-hidden h-64 w-full">
                  <img 
                    src={step.image} 
                    className="h-full w-full object-cover" 
                    alt={step.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}