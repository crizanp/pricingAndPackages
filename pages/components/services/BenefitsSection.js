const BenefitsSection = ({ 
    title = "Key benefits of our WordPress development services",
    benefits = [
      "Quick turnaround times to get your website to market faster.",
      "Cost-effective solutions while delivering a high-quality website.",
      "Scalable sites to help grow your business.",
      "User-centric and design first approach.",
      "Experienced WordPress developers and designers."
    ],
    techIcons = [
      { name: "WordPress", isDark: true },
      { name: "PHP", isDark: false },
      { name: "jQuery", isDark: true },
      { name: "HTML5", isDark: false },
      { name: "CSS3", isDark: true },
      { name: "MySQL", isDark: false },
      { name: "WooCommerce", isDark: true },
      { name: "Elementor", isDark: false },
      { name: "ACF", isDark: true }
    ],
    ctaText = "Let's Discuss"
  }) => {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
          {title}
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-4 text-lg">{benefit}</p>
              </div>
            ))}
            
            <button className="mt-8 px-8 py-3 bg-black text-white rounded-full font-medium">
              {ctaText}
            </button>
          </div>
          
          <div className="w-full lg:w-5/12">
            <div className="grid grid-cols-3 gap-4">
              {techIcons.map((icon, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl flex items-center justify-center p-4 ${
                    icon.isDark ? 'bg-black' : 'bg-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center ${
                    icon.isDark ? 'text-white' : 'text-gray-700'
                  }`}>
                    {/* Placeholder for tech icons */}
                    <span className="font-bold text-sm">{icon.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BenefitsSection;