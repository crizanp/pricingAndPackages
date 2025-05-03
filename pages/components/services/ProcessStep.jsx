import { useState, useEffect } from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 md:mb-8">
      <div className="flex flex-col">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 text-black">
          {number.toString().padStart(2, '0')}
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 text-black">{title}</h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-1 sm:mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default function DevProcess({
  title = "How we make your vision a reality",
  description = "We follow a tried-and-tested approach to build feature-rich, and secure WordPress websites that enhance users' experience with multiple optimization layers.",
  processSteps = defaultProcessSteps 
}) {
  // Track if we should apply sticky positioning based on screen width
  const [isDesktop, setIsDesktop] = useState(true);

  // Check if the screen is desktop size whenever the window resizes
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    
    // Initial check
    checkDesktop();
    
    // Add event listener
    window.addEventListener('resize', checkDesktop);
    
    // Clean up
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left side - sticky on desktop only */}
        <div className={`${isDesktop ? 'md:sticky top-24 h-fit self-start' : ''}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-black">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-gray-700">
            {description}
          </p>
        </div>
        
        {/* Right side steps */}
        <div className="py-4 sm:py-6 md:py-8">
          {processSteps.map(step => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Default process steps if none are provided
const defaultProcessSteps = [
  {
    number: 1,
    title: "Discovery & Planning",
    description: "Explore your business needs and goals to establish a clear roadmap for your WordPress website that aligns with your brand identity and target audience."
  },
  {
    number: 2,
    title: "Design & Wireframing",
    description: "Create intuitive user interfaces and responsive layouts that enhance user experience across all devices while maintaining your brand aesthetics."
  },
  {
    number: 3,
    title: "Core Development",
    description: "Build the foundation of your website with clean, optimized code following WordPress best practices for performance and future scalability."
  },
  {
    number: 4,
    title: "Plugin Integration",
    description: "Select and implement the right WordPress plugins to extend functionality while ensuring compatibility and maintaining optimal site performance."
  },
  {
    number: 5,
    title: "Content Implementation",
    description: "Structure and integrate your content with SEO best practices to maximize visibility and engage your target audience effectively."
  },
  {
    number: 6,
    title: "Quality Assurance",
    description: "Conduct comprehensive testing across browsers and devices to identify and resolve any issues, ensuring a flawless user experience."
  },
  {
    number: 7,
    title: "Launch & Training",
    description: "Deploy your website with proper configurations and provide training sessions so you can confidently manage your WordPress site."
  }
];