import TextHeroSection from '@/components/home/textHero';
import React, { useState } from 'react';

export default function ClientWorkflowProcess() {
  const [activeStep, setActiveStep] = useState(null);

  const workflowSteps = [
    {
      title: "Initial Consultation",
      icon: "📞",
      description: "We begin with an in-depth discovery session to understand your unique business challenges, goals, and vision.",
      details: [
        "Comprehensive needs assessment",
        "Understanding your target audience",
        "Identifying key performance indicators",
        "Exploring potential solution frameworks"
      ],
      benefits: [
        "Aligned project objectives",
        "Clear communication roadmap",
        "Tailored strategic approach"
      ]
    },
    {
      title: "Strategic Proposal",
      icon: "📋",
      description: "Our team develops a detailed, customized proposal that outlines the project scope, methodology, and expected outcomes.",
      details: [
        "Comprehensive project blueprint",
        "Detailed timeline and milestones",
        "Technology and approach recommendations",
        "Estimated resource allocation"
      ],
      benefits: [
        "Transparent project planning",
        "Clear expectations",
        "Comprehensive solution design"
      ]
    },
    {
      title: "Collaborative Design",
      icon: "🎨",
      description: "We co-create solution designs through iterative workshops, ensuring the final product meets your exact specifications.",
      details: [
        "User experience (UX) wireframing",
        "Interactive prototype development",
        "Regular design review sessions",
        "Continuous client feedback integration"
      ],
      benefits: [
        "User-centric design",
        "Reduced development iterations",
        "Aligned visual and functional expectations"
      ]
    },
    {
      title: "Agile Development",
      icon: "💻",
      description: "Our engineering team implements the solution using cutting-edge technologies and agile methodologies.",
      details: [
        "Modular development approach",
        "Continuous integration and deployment",
        "Regular progress updates",
        "Quality assurance testing"
      ],
      benefits: [
        "Flexible and adaptive development",
        "Transparent progress tracking",
        "High-quality code delivery"
      ]
    },
    {
      title: "Comprehensive Testing",
      icon: "🔍",
      description: "Rigorous testing ensures your solution meets the highest standards of performance, security, and user experience.",
      details: [
        "Functional testing",
        "Performance benchmarking",
        "Security vulnerability assessment",
        "User acceptance testing"
      ],
      benefits: [
        "Robust and reliable solution",
        "Minimized potential issues",
        "Enhanced user satisfaction"
      ]
    },
    {
      title: "Launch & Support",
      icon: "🚀",
      description: "We provide a smooth deployment process and ongoing support to ensure continued success and evolution of your solution.",
      details: [
        "Guided implementation",
        "Performance monitoring",
        "Ongoing optimization",
        "Dedicated support team"
      ],
      benefits: [
        "Seamless go-live experience",
        "Continuous improvement",
        "Long-term partnership"
      ]
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl font-black mb-16 text-center tracking-tight">
          OUR CLIENT WORKFLOW
        </h1>
        <p className="text-2xl text-center mb-16 max-w-4xl mx-auto">
          A meticulously crafted, client-centric approach that transforms complex challenges into innovative, high-performance digital solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <div 
              key={index}
              className={`
                border-2 border-gray-200 rounded-2xl p-6 transition-all duration-300 
                ${activeStep === index ? 'bg-black text-white shadow-2xl' : 'hover:bg-gray-50'}
              `}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{step.icon}</span>
                <h2 className="text-2xl font-bold">{step.title}</h2>
              </div>
              
              <p className={`
                text-lg mb-4 
                ${activeStep === index ? 'text-gray-200' : 'text-gray-600'}
              `}>
                {step.description}
              </p>

              {activeStep === index && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Key Activities</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expected Benefits</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {step.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl max-w-4xl mx-auto">
            Our workflow is not just a process—it's a collaborative journey designed to unlock your business's full potential through strategic digital transformation.
          </p>
        </div>
        <TextHeroSection/>
      </div>
    </div>
  );
}