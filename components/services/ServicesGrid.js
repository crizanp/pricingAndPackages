const ServicesGrid = ({
  title = "Our MVP development services",
  services = [
    {
      title: "MVP Consultation",
      description: "Define clear goals and core functionalities with our experts."
    },
    {
      title: "MVP Development",
      description: "Craft lean MVPs designed to evolve."
    },
    {
      title: "Product Innovation",
      description: "Upgrade and enhance your MVP into a full-fledged product."
    },
    {
      title: "Market Analysis",
      description: "Use the latest tools to analyze market needs and perform SWOT reports."
    },
    {
      title: "Vision to Prototype",
      description: "Create a fully functioning prototype before full-scale development."
    },
    {
      title: "MVP to Full-scale",
      description: "Smoothly transition your MVP to a full-scale product."
    }
  ]
}) => {
  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 md:px-6 xl:px-8 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 sm:mb-12 lg:mb-16">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-8 sm:gap-y-12 md:gap-y-14 lg:gap-y-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
              {service.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl pt-2 sm:pt-3 md:pt-4 text-black">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;