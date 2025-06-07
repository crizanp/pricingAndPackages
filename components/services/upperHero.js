const ServiceBanner = ({
  title = "iPhone App Development Services",
  description = "We build custom iPhone app solutions that boost engagement, brand value, and revenue while delivering experiences that ensure users keep coming back.",
  rating = "4.9",
  platform = "ON CLUTCH",
  reviewCount = "52",
  reviewLabel = "REVIEWS"
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full py-8 sm:py-12 md:py-16 lg:py-24 px-4 md:px-6 xl:px-8 bg-white text-black max-w-7xl mx-auto">
      <div className="w-full lg:w-3/4 mb-8 lg:mb-0 lg:pr-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-4 sm:mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-black">
          {description}
        </p>
      </div>
      
      <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
        <div className="flex flex-col items-center lg:items-end">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 mr-2 flex items-center justify-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold">{rating} {platform}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm sm:text-base">{reviewCount} {reviewLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;