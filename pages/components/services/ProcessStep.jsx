import { useState } from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-4">
      <div className="flex flex-col">
        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold mb-2 text-black">
          {number.toString().padStart(2, '0')}
        </h2>
        <h3 className="text-4xl mb-1 text-black">{title}</h3>
        <p className="text-2xl mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default function DevProcess() {
  const processSteps = [
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sticky left side */}
        <div className="md:sticky top-24 h-fit self-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  font-semibold mt-8 mb-12 text-black">
            How we make your vision a reality
          </h1>
          <p className="text-2xl mb-6 text-gray-700">
            We follow a tried-and-tested approach to build feature-rich, and secure WordPress websites that enhance users' experience with multiple optimization layers.
          </p>
        </div>

        {/* Right side steps */}
        <div className="py-8">
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
