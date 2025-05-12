import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

const AutomotiveServices = () => {
  // Hero section content
  const heroContent = {
    title: "Advanced Automotive Solutions for Modern Vehicles",
    subtitle: "Transforming the automotive industry with technology-driven services, sustainable practices, and exceptional customer experiences.",
    buttonText: "Get Started",
    buttonLink: "#contact",
    backgroundImage: "/images/automotive-services-hero-banner.png",
    imageAlt: "Modern automotive service professionals in action"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "TECHNOLOGY IS REVOLUTIONIZING THE AUTOMOTIVE INDUSTRY THROUGH INNOVATION",
    highlightWord: "INNOVATION",
    descriptionText: "Technology is revolutionizing the automotive industry through innovative approaches to manufacturing, maintenance, customer experience, and connected vehicles. From diagnostic systems to fleet management and autonomous driving platforms, digital transformation is enhancing efficiency and sustainability across the entire automotive value chain. Foxbeep helps automotive businesses leverage technology to improve operations, reduce environmental impact, and deliver exceptional customer experiences.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Automotive Tech Solutions section
  const automotiveTechContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing automotive industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Automotive Tech Solutions",
      "Dealership Management Systems",
      "Fleet Management Platforms",
      "Connected Vehicle Solutions"
    ],
    featuredService: "Automotive Tech Solutions",
    featuredServiceDescription: "We develop innovative automotive technology solutions that help businesses streamline operations, enhance customer experiences, and maintain vehicle safety. Our platforms integrate cutting-edge technologies to address the unique challenges of modern automotive businesses.",
    featuredServiceImage: "/images/automotive-tech-solutions.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Smart diagnostic systems",
        description: "We create intelligent diagnostic platforms that optimize maintenance workflows, monitor vehicle systems, and ensure consistent service quality through IoT sensors and advanced analytics."
      },
      {
        title: "Safety compliance platforms",
        description: "Our digital compliance solutions help automotive businesses adhere to regulatory requirements through automated safety checks, digital maintenance records, and comprehensive vehicle history tracking."
      },
      {
        title: "Service optimization tools",
        description: "We develop data-driven service optimization tools that analyze performance metrics, part costs, and customer satisfaction to streamline workshop operations and maximize efficiency."
      }
    ]
  };

  // Dealership Management Systems section
  const dealershipManagementContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing automotive industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Automotive Tech Solutions",
      "Dealership Management Systems",
      "Fleet Management Platforms",
      "Connected Vehicle Solutions"
    ],
    featuredService: "Dealership Management Systems",
    featuredServiceDescription: "Our comprehensive dealership management systems integrate sales, inventory, service scheduling, and customer relationship management into a unified platform. These solutions enhance operational efficiency while providing valuable business insights.",
    featuredServiceImage: "/images/dealership-management-systems.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Integrated sales platforms",
        description: "We develop modern sales systems that seamlessly connect showroom and online operations, process multiple payment methods, and provide real-time sales analytics."
      },
      {
        title: "Inventory & showroom management",
        description: "Our inventory platforms optimize vehicle stock levels, track vehicle location and status, and enhance the showroom experience through digital vehicle information systems and virtual customization tools."
      },
      {
        title: "Service department optimization",
        description: "We create intuitive service management tools that optimize scheduling based on forecasted demand, track technician performance, and streamline communication between service advisors and technicians."
      }
    ]
  };

  // Fleet Management Platforms section
  const fleetManagementContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing automotive industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Automotive Tech Solutions",
      "Dealership Management Systems",
      "Fleet Management Platforms",
      "Connected Vehicle Solutions"
    ],
    featuredService: "Fleet Management Platforms",
    featuredServiceDescription: "We develop intelligent fleet management solutions that connect vehicle operators, maintenance providers, and businesses. Our platforms enhance transparency, reduce downtime, and ensure vehicle safety throughout the fleet lifecycle.",
    featuredServiceImage: "/images/fleet-management-platforms.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Telematics integration systems",
        description: "Our telematics solutions provide real-time vehicle tracking, driver behavior monitoring, and fuel consumption analytics to optimize fleet operations and reduce overall costs."
      },
      {
        title: "Predictive maintenance platforms",
        description: "We create digital platforms that analyze vehicle data to predict maintenance needs, prevent breakdowns, and optimize service scheduling to minimize vehicle downtime."
      },
      {
        title: "Fleet sustainability solutions",
        description: "Our comprehensive systems help fleet operators transition to electric and hybrid vehicles, optimize routes for fuel efficiency, and track environmental impact metrics."
      }
    ]
  };

  // Connected Vehicle Solutions section
  const connectedVehicleContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing automotive industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Automotive Tech Solutions",
      "Dealership Management Systems",
      "Fleet Management Platforms",
      "Connected Vehicle Solutions"
    ],
    featuredService: "Connected Vehicle Solutions",
    featuredServiceDescription: "We develop sophisticated connected vehicle platforms that link vehicles with infrastructure and cloud services. Our solutions enhance the driving experience through intuitive interfaces, real-time data integration, and seamless connectivity.",
    featuredServiceImage: "/images/connected-vehicle-solutions.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "In-vehicle infotainment systems",
        description: "We create customizable infotainment platforms that integrate with existing vehicle systems, feature interactive interfaces with voice control, and support multiple connectivity options."
      },
      {
        title: "V2X communication platforms",
        description: "Our Vehicle-to-Everything (V2X) solutions use advanced algorithms to enable communication between vehicles and infrastructure, improving safety and traffic flow in urban environments."
      },
      {
        title: "Customer engagement applications",
        description: "We develop sophisticated mobile applications that connect drivers with their vehicles, enable remote diagnostics and controls, and build loyalty through personalized services and rewards programs."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "How can technology improve vehicle maintenance in my business?",
      answer: "Our technology solutions enhance vehicle maintenance through predictive diagnostics, automated service reminders, digital service histories, and IoT sensor monitoring. These systems provide real-time alerts for potential issues, maintain comprehensive digital records for warranty claims, and ensure consistent adherence to maintenance schedules across entire fleets."
    },
    {
      question: "What benefits do integrated dealership management systems offer?",
      answer: "Integrated systems eliminate data silos by connecting sales, inventory, service scheduling, and customer management into one platform. This provides a holistic view of operations, reduces manual data entry, enables data-driven decision making, and improves coordination between departments, ultimately enhancing efficiency and customer satisfaction."
    },
    {
      question: "How can you help reduce environmental impact in our automotive operations?",
      answer: "We address environmental impact through EV integration planning, route optimization that reduces fuel consumption, idle-time monitoring systems, and sustainability analytics that identify patterns and improvement opportunities throughout your operations."
    },
    {
      question: "Can you create custom customer portals for our dealership group?",
      answer: "Absolutely. We specialize in developing customized customer portals that showcase your inventory, accommodate service scheduling, highlight special offers, and integrate your branding. These systems can handle complex vehicle searches, financing calculators, and personalized recommendations based on customer preferences."
    },
    {
      question: "How do your fleet platforms optimize vehicle utilization?",
      answer: "Our fleet platforms use machine learning algorithms to optimize vehicle assignments based on usage patterns, maintenance schedules, and business needs. They prioritize assignments based on vehicle type and condition, provide accurate availability forecasts, and balance utilization to maximize efficiency and extend vehicle lifespan."
    },
    {
      question: "What analytics capabilities do your automotive solutions provide?",
      answer: "Our platforms offer comprehensive analytics including sales performance by model, salesperson, and location; part-level cost analysis; technician productivity metrics; customer behavior patterns; vehicle performance data; and predictive analytics for maintenance forecasting. These insights enable data-driven decisions across all aspects of your automotive business."
    },
    {
      question: "How do your solutions help with technician management challenges?",
      answer: "We address staffing challenges through AI-powered scheduling that matches technician skills with forecasted service demand, mobile apps that improve communication and job management, performance analytics that identify training needs, and streamlined documentation tools that accelerate job completion."
    },
    {
      question: "Can your systems integrate with our existing automotive technology?",
      answer: "Yes, our solutions are designed with open APIs that enable seamless integration with existing DMS systems, accounting software, CRM platforms, and diagnostic equipment. We conduct thorough assessments of your current technology ecosystem and develop custom integration strategies to preserve your existing investments."
    },
    {
      question: "How do you address consumer demand for transparency in vehicle history?",
      answer: "We develop transparency solutions that track vehicle history from manufacture to current state, create digital storytelling platforms that showcase vehicle care, implement QR code systems that reveal service history and authenticity, and provide comprehensive vehicle information through interactive digital interfaces."
    },
    {
      question: "Why choose Foxbeep for automotive industry technology solutions?",
      answer: "Foxbeep combines deep automotive industry expertise with cutting-edge technical capabilities. We understand the unique challenges of automotive businesses and develop solutions that address real operational pain points. Our technology enhances efficiency, ensures compliance, improves customer experiences, and provides actionable insights that drive profitability and sustainability."
    }
  ];

  // Final CTA section content
  const ctaContent = {
    heading: "Ready to transform your automotive business with innovative technology?",
    description: "Let's discuss how our automotive industry expertise can help you optimize operations, reduce costs, and deliver exceptional customer experiences.",
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
          <span className="bg-blue-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to developing technology solutions for the automotive industry. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Automotive Tech Solutions",
            "Dealership Management Systems",
            "Fleet Management Platforms",
            "Connected Vehicle Solutions",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-blue-500">
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
      <EdtechServices {...automotiveTechContent} />
      <EdtechServices {...dealershipManagementContent} />
      <EdtechServices {...fleetManagementContent} />
      <EdtechServices {...connectedVehicleContent} />
      
      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our automotive industry solutions"
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

export default AutomotiveServices;