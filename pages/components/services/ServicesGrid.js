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
    <div className="max-w-7xl mx-auto py-24 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-3xl md:text-3xl font-bold text-black mb-4">
              {service.title}
            </h3>
            <p className="text-2xl text-black">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;