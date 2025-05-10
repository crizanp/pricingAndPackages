import React, { useState } from 'react';

export const EducationalServicesDetail = ({
  services,
  highlightColor = 'bg-lime-300',
  accentColor = 'border-lime-500'
}) => {
  const [activeService, setActiveService] = useState(0);
  
  return (
    <div className="w-full py-12 px-4 md:px-12 bg-white">
      <div className="container mx-auto">
        {/* Services tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-lg font-medium rounded-md transition-all duration-300 ${
                activeService === index 
                  ? `${highlightColor} border-b-2 ${accentColor}` 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveService(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
        
        {/* Active service content */}
        <div className="mb-10">
          <div className={`${highlightColor} py-4 px-6 mb-6`}>
            <h3 className="text-2xl md:text-3xl font-bold">{services[activeService].title}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed">{services[activeService].description}</p>
            </div>
            <div className="flex justify-center">
              <img 
                src={services[activeService].image || "/api/placeholder/500/300"} 
                alt={`${services[activeService].title} illustration`} 
                className="rounded-lg shadow-lg max-h-64 w-auto"
              />
            </div>
          </div>
          
          {/* Feature points */}
          {services[activeService].features && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {services[activeService].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`mt-1 h-5 w-5 rounded-full ${highlightColor} flex items-center justify-center`}>
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};