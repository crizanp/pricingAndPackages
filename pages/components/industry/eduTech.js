import React from 'react';

export const EdtechServices = ({
  mainHeading,
  introText,
  companyName,
  servicesList,
  featuredService,
  featuredServiceDescription,
  featuredServiceImage,
  featureDetails,
  highlightColor = 'bg-lime-300'
}) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-12 bg-white">
      <div className="container mx-auto">
        {/* Main heading with highlight */}
        
       
        {/* Featured service section */}
        <div className="mb-8">
          <div className={`${highlightColor} py-4 px-6 mb-8`}>
            <h3 className="text-2xl md:text-3xl font-bold">{featuredService}</h3>
          </div>
         
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg">{featuredServiceDescription}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={featuredServiceImage || "/api/placeholder/600/400"}
                alt={`${featuredService} illustration`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className="my-12 border-gray-200" />

        {/* Feature details in three columns */}
        {featureDetails && featureDetails.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureDetails.map((feature, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};