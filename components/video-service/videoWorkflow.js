import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, FileEdit, Headphones, Layout } from "lucide-react";

export default function VideoEditingWorkflow({ 
  title = "How Does Our Leading Video Editing Strategy Work?",
  description = "Our video editing studio ensures a streamlined, transparent process from the initial contact to the delivery of your final video. Here's how we work in four essential steps to transform your raw footage into a professionally edited video, utilizing our top video editing services and post production services.",
  ctaText = "Schedule a call with our video experts!",
  steps = [
    { 
        title: "Project Onboarding", 
        icon: FileEdit,
        description: "Share your video content and editing requirements to get started."
      },
      { 
        title: "Strategy & Planning", 
        icon: Headphones,
        description: "We align on style, goals, and content structure to ensure clarity and impact."
      },
      { 
        title: "Editing In Progress", 
        icon: Layout,
        description: "Our editors craft a polished video using professional tools and techniques."
      },
      { 
        title: "Final Review", 
        icon: CheckCircle,
        description: "Review the draft, suggest changes, and approve the final cut."
      }
  ],
  conclusion = "Our process is designed to be as transparent and client-focused as possible, ensuring that working with our video post production company is straightforward and satisfying from start to finish."
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(true);

  // Check screen width for responsive design
  useEffect(() => {
    const checkWidth = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Animation for the steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 text-center bg-white text-black text-left sm:text-center"id="process ">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{title}</h1>
      
      {/* Description */}
      <div className="mb-12 text-2xl text-gray-700">
        <p className="mb-4">
          Our <span className="font-semibold">video editing studio</span> ensures a streamlined, transparent process from the initial contact to the delivery of your final video. Here&apos;s how we work in four essential steps to transform your raw footage into a professionally edited video, utilizing our top <span className="font-semibold">video editing services</span> and <span className="font-semibold">post production services</span>.
        </p>
      </div>
      
      {/* Steps */}
      <div className="relative mb-16">
        <div className={`flex ${isWideScreen ? 'flex-row' : 'flex-col'} justify-between items-center mb-8`}>
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Step Icon */}
              <div 
                className={`w-20 h-20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                  activeStep === index ? 'bg-purple-600 scale-110' : 'bg-purple-500'
                }`}
              >
                <step.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Step Number */}
              <p className="text-purple-600 font-semibold mb-2">Step {index + 1}</p>
              
              {/* Step Title */}
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{step.title}</h3>
              
              {/* Step Description (visible on hover or on mobile) */}
              <div className={`${isWideScreen ? 'opacity-0 group-hover:opacity-100 absolute top-full mt-2 text-center' : ''} text-sm text-gray-600 max-w-xs transition-opacity duration-300 text-center pb-6`}>
                {step.description}
              </div>
              
              {/* Connecting Line */}
              {isWideScreen && index < steps.length - 1 && (
                <div className="absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10 flex items-center justify-center">
                  <ArrowRight className="text-gray-300 w-6 h-6 bg-white" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Connection lines */}
        {isWideScreen && (
          <div className="absolute top-10 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
        )}
      </div>
      
      {/* Conclusion */}
      <div className="mb-12 text-2xl text-gray-700">
        <p>
          Our process is designed to be as transparent and client-focused as possible, ensuring that working with our <span className="font-semibold">video post production company</span> is straightforward and satisfying from start to finish.
        </p>
      </div>
      
      {/* CTA Button
      <div className="flex justify-center">
        <button className="group bg-gray-900 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center space-x-2">
          <span>{ctaText}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div> */}
    </div>
  );
}