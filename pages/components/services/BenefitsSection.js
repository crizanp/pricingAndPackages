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
    <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        {title}
      </h2>
      
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 lg:pr-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start mb-4 sm:mb-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="ml-3 sm:ml-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800">{benefit}</p>
            </div>
          ))}
          
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg cursor-pointer bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            {ctaText}
          </button>
        </div>
        
        <div className="w-full lg:w-5/12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {techIcons.map((icon, index) => (
              <div 
                key={index} 
                className={`rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-3 md:p-4 ${
                  icon.isDark ? 'bg-black' : 'bg-gray-100'
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center ${
                  icon.isDark ? 'text-white' : 'text-gray-700'
                }`}>
                  {/* Placeholder for tech icons */}
                  <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">{icon.name}</span>
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