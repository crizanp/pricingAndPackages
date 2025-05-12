import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const FoodServices = () => {
  // Hero section content
  const heroContent = {
    title: "Innovative Food Solutions for Modern Businesses",
    subtitle: "Transforming the food industry with technology-driven services, sustainable practices, and exceptional dining experiences.",
    buttonText: "Get Started",
    buttonLink: "#contact",
    backgroundImage: "/images/food-services-hero-banner.png",
    imageAlt: "Modern food service professionals in action"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "TECHNOLOGY IS REVOLUTIONIZING THE FOOD INDUSTRY THROUGH INNOVATION",
    highlightWord: "INNOVATION",
    descriptionText: "Technology is revolutionizing the food industry through innovative approaches to sourcing, production, distribution, and consumer engagement. From farm management systems to restaurant automation and food delivery platforms, digital transformation is enhancing efficiency and sustainability across the entire food value chain. Foxbeep helps food businesses leverage technology to improve operations, reduce waste, and deliver exceptional customer experiences.",
    brandName: "Foxbeep",
    highlightColor: "bg-green-300"
  };

  // Food Tech Solutions section
  const foodTechContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing food industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Tech Solutions",
      "Restaurant Management Systems",
      "Supply Chain Optimization",
      "Food Delivery Platforms"
    ],
    featuredService: "Food Tech Solutions",
    featuredServiceDescription: "We develop innovative food technology solutions that help businesses streamline operations, enhance customer experiences, and maintain food safety. Our platforms integrate cutting-edge technologies to address the unique challenges of modern food businesses.",
    featuredServiceImage: "/images/food-tech-solutions.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Smart kitchen systems",
        description: "We create intelligent kitchen management platforms that optimize food preparation workflows, monitor cooking equipment, and ensure consistent food quality through IoT sensors and advanced analytics."
      },
      {
        title: "Food safety compliance",
        description: "Our digital compliance solutions help food businesses adhere to regulatory requirements through automated temperature monitoring, digital HACCP checklists, and allergen tracking systems."
      },
      {
        title: "Menu engineering platforms",
        description: "We develop data-driven menu engineering tools that analyze sales performance, ingredient costs, and customer preferences to optimize menu offerings and maximize profitability."
      }
    ]
  };

  // Restaurant Management Systems section
  const restaurantManagementContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing food industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Tech Solutions",
      "Restaurant Management Systems",
      "Supply Chain Optimization",
      "Food Delivery Platforms"
    ],
    featuredService: "Restaurant Management Systems",
    featuredServiceDescription: "Our comprehensive restaurant management systems integrate point-of-sale, inventory, staff scheduling, and customer relationship management into a unified platform. These solutions enhance operational efficiency while providing valuable business insights.",
    featuredServiceImage: "/images/restaurant-management-systems.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Integrated POS solutions",
        description: "We develop modern point-of-sale systems that seamlessly connect front-of-house and back-of-house operations, process multiple payment methods, and provide real-time sales analytics."
      },
      {
        title: "Reservation & table management",
        description: "Our reservation platforms optimize seating capacity, reduce wait times, and enhance the dining experience through digital waitlists, automatic table assignments, and customer preference tracking."
      },
      {
        title: "Staff management & scheduling",
        description: "We create intuitive staff management tools that optimize scheduling based on forecasted demand, track employee performance, and streamline communication between management and staff."
      }
    ]
  };

  // Supply Chain Optimization section
  const supplyChainContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing food industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Tech Solutions",
      "Restaurant Management Systems",
      "Supply Chain Optimization",
      "Food Delivery Platforms"
    ],
    featuredService: "Supply Chain Optimization",
    featuredServiceDescription: "We develop intelligent supply chain solutions that connect food producers, distributors, and businesses. Our platforms enhance transparency, reduce waste, and ensure food quality throughout the distribution process.",
    featuredServiceImage: "/images/supply-chain-optimization.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Inventory management systems",
        description: "Our inventory solutions provide real-time stock visibility, automated reordering, and expiration date tracking to minimize waste and optimize storage space utilization."
      },
      {
        title: "Supplier relationship platforms",
        description: "We create digital platforms that streamline communication with suppliers, centralize ordering processes, and provide analytics on supplier performance and pricing trends."
      },
      {
        title: "Food traceability solutions",
        description: "Our blockchain-based traceability systems track food products from farm to table, ensuring food safety, authenticating product origins, and enhancing consumer trust through transparent sourcing information."
      }
    ]
  };

  // Food Delivery Platforms section
  const foodDeliveryContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing food industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Tech Solutions",
      "Restaurant Management Systems",
      "Supply Chain Optimization",
      "Food Delivery Platforms"
    ],
    featuredService: "Food Delivery Platforms",
    featuredServiceDescription: "We develop sophisticated food delivery platforms that connect restaurants with customers while optimizing delivery logistics. Our solutions enhance the customer experience through intuitive interfaces, real-time order tracking, and seamless payment processing.",
    featuredServiceImage: "/images/food-delivery-platforms.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Online ordering systems",
        description: "We create customizable online ordering platforms that integrate with existing restaurant systems, feature interactive menus with dietary filters, and support multiple payment methods."
      },
      {
        title: "Delivery logistics optimization",
        description: "Our logistics solutions use machine learning algorithms to optimize delivery routes, estimate accurate delivery times, and balance driver workloads to maximize efficiency."
      },
      {
        title: "Customer engagement tools",
        description: "We develop sophisticated CRM systems that track customer preferences, enable personalized promotions, and build loyalty through rewards programs and targeted marketing campaigns."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "How can technology improve food safety in my business?",
      answer: "Our technology solutions enhance food safety through automated temperature monitoring, digital HACCP compliance tools, allergen tracking systems, and blockchain-based traceability. These systems provide real-time alerts for potential issues, maintain comprehensive digital records for inspections, and ensure consistent adherence to safety protocols across all locations."
    },
    {
      question: "What benefits do integrated restaurant management systems offer?",
      answer: "Integrated systems eliminate data silos by connecting POS, inventory, staff scheduling, and customer management into one platform. This provides a holistic view of operations, reduces manual data entry, enables data-driven decision making, and improves coordination between front and back of house teams, ultimately enhancing efficiency and customer satisfaction."
    },
    {
      question: "How can you help reduce food waste in our operations?",
      answer: "We address food waste through smart inventory management that tracks expiration dates and suggests usage priorities, AI-powered demand forecasting that improves ordering accuracy, portion control systems, and waste tracking analytics that identify patterns and improvement opportunities throughout your operations."
    },
    {
      question: "Can you create custom ordering systems for our unique menu?",
      answer: "Absolutely. We specialize in developing customized ordering platforms that showcase your unique menu items, accommodate special preparation instructions, highlight seasonal offerings, and integrate your branding. These systems can handle complex modifier options, dietary filters, and personalized recommendations based on customer preferences."
    },
    {
      question: "How do your delivery platforms optimize the last-mile logistics?",
      answer: "Our delivery platforms use machine learning algorithms to optimize routes based on real-time traffic conditions, driver location, and order clustering. They prioritize deliveries based on food type and preparation time, provide accurate delivery estimates to customers, and balance driver workloads to maximize efficiency and maintain food quality."
    },
    {
      question: "What analytics capabilities do your food service solutions provide?",
      answer: "Our platforms offer comprehensive analytics including sales performance by menu item, day-part, and location; ingredient-level cost analysis; labor productivity metrics; customer behavior patterns; delivery time performance; and predictive analytics for demand forecasting. These insights enable data-driven decisions across all aspects of your food business."
    },
    {
      question: "How do your solutions help with staff management challenges?",
      answer: "We address staffing challenges through AI-powered scheduling that matches staff skills with forecasted demand, mobile apps that improve communication and shift management, performance analytics that identify training needs, and streamlined onboarding tools that accelerate new employee productivity."
    },
    {
      question: "Can your systems integrate with our existing restaurant technology?",
      answer: "Yes, our solutions are designed with open APIs that enable seamless integration with existing POS systems, accounting software, reservation platforms, and kitchen equipment. We conduct thorough assessments of your current technology ecosystem and develop custom integration strategies to preserve your existing investments."
    },
    {
      question: "How do you address consumer demand for transparency in food sourcing?",
      answer: "We develop transparency solutions that track ingredients from farm to table, create digital storytelling platforms that showcase supplier partnerships, implement QR code systems that reveal product origins and journey, and provide allergen and nutritional information through interactive digital menus."
    },
    {
      question: "Why choose Foxbeep for food industry technology solutions?",
      answer: "Foxbeep combines deep food industry expertise with cutting-edge technical capabilities. We understand the unique challenges of food businesses and develop solutions that address real operational pain points. Our technology enhances efficiency, ensures compliance, improves customer experiences, and provides actionable insights that drive profitability and sustainability."
    }
  ];

  // Final CTA section content
  const ctaContent = {
    heading: "Ready to transform your food business with innovative technology?",
    description: "Let's discuss how our food industry expertise can help you optimize operations, reduce waste, and deliver exceptional dining experiences.",
    buttonText: "Book a consultation",
    buttonLink: "/contact"
  };

  return (
    <div>
      {/* Hero Banner */}
      <Hero {...heroContent} />
      
      {/* Text Highlight Section */}
      <TextHighlight {...textHeroContent} />
      
      {/* Trusted By Brand Slider */}
      <BrandSlider />
      
      {/* Services Overview Section */}
      <div className="max-w-7xl mx-auto px-4 xl:px-0 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl relative inline-block mb-6">
          <span className="bg-green-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to developing technology solutions for the food industry. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Food Tech Solutions",
            "Restaurant Management Systems",
            "Supply Chain Optimization",
            "Food Delivery Platforms",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-green-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15H5v-3.414l8.293-8.293a1 1 0 011.414 0zM7 13h.586L14 6.586 13.414 6 7 12.414V13z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Detailed Service Sections */}
      <EdtechServices {...foodTechContent} />
      <EdtechServices {...restaurantManagementContent} />
      <EdtechServices {...supplyChainContent} />
      <EdtechServices {...foodDeliveryContent} />
      
      {/* Success Stories / Case Studies */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <img src="/images/case-study-restaurant-chain.jpg" alt="Restaurant chain case study" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-green-600">Restaurant Chain</span>
                <h3 className="text-xl font-bold mt-1 mb-3">50% Reduction in Food Waste</h3>
                <p className="text-gray-600 mb-4">Our inventory management system helped a national restaurant chain reduce food waste by 50% while improving menu consistency across 120+ locations.</p>
                <a href="/case-studies/restaurant-chain" className="text-green-600 font-medium hover:text-green-700">Read case study →</a>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <img src="/images/case-study-food-delivery.jpg" alt="Food delivery case study" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-green-600">Food Delivery</span>
                <h3 className="text-xl font-bold mt-1 mb-3">30% Faster Delivery Times</h3>
                <p className="text-gray-600 mb-4">Our route optimization algorithm helped a regional food delivery service reduce delivery times by 30% while handling 45% more orders.</p>
                <a href="/case-studies/food-delivery" className="text-green-600 font-medium hover:text-green-700">Read case study →</a>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <img src="/images/case-study-food-producer.jpg" alt="Food producer case study" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-green-600">Food Producer</span>
                <h3 className="text-xl font-bold mt-1 mb-3">Complete Supply Chain Visibility</h3>
                <p className="text-gray-600 mb-4">Our blockchain traceability platform provided farm-to-table transparency for an organic food producer, increasing consumer trust and premium pricing power.</p>
                <a href="/case-studies/food-producer" className="text-green-600 font-medium hover:text-green-700">Read case study →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our food industry solutions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-2xl"
      />
      
      
      
      {/* Final Text Hero Section */}
      <TextHeroSection />
    </div>
  );
};

export default FoodServices;