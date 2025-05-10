import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const AgricultureTechnology = () => {
  // Hero section content
  const heroContent = {
    title: "Agricultural Technology Solutions for Sustainable Farming",
    subtitle: "Empowering agribusinesses with data-driven tools, IoT systems, and precision agriculture platforms to optimize yields, reduce waste, and promote sustainable farming practices.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "/images/agriculture-technology-hero-banner.png",
    imageAlt: "Modern farm with agricultural technology in use"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "MODERN AGRICULTURE IS BEING REVOLUTIONIZED BY SMART FARMING TECHNOLOGIES",
    highlightWord: "SMART FARMING",
    descriptionText: "Modern agriculture is being revolutionized by smart farming technologies that provide unprecedented visibility into crop health, soil conditions, and environmental factors. From IoT-enabled field sensors to AI-driven analytics, each technological advancement is transforming how farmers manage resources, increase yields, and ensure sustainability. Foxbeep develops agricultural technology solutions that empower farmers with actionable insights, automated processes, and improved decision-making tools.",
    brandName: "Foxbeep",
    highlightColor: "bg-green-300"
  };

  // Farm Management Systems section
  const farmManagementContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing agricultural technology solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Agriculture Platforms",
      "Supply Chain Management Solutions",
      "Agricultural Data Analytics"
    ],
    featuredService: "Farm Management Systems",
    featuredServiceDescription: "We develop comprehensive farm management platforms that consolidate operations, simplify record-keeping, and optimize resource utilization. Our solutions provide real-time visibility into farm performance, automate operational workflows, and facilitate data-driven decision making across all aspects of agricultural operations.",
    featuredServiceImage: "/images/farm-management-systems.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Integrated farm operations dashboards",
        description: "We create centralized command centers that provide real-time monitoring of field operations, equipment status, labor allocation, and inventory levels. Our intuitive dashboards enable farmers to manage activities, identify bottlenecks, and optimize operational efficiency across multiple farm locations."
      },
      {
        title: "Crop planning & rotation tools",
        description: "Our solutions include advanced planning tools that optimize crop selection, rotation schedules, and planting strategies based on soil conditions, climate forecasts, market trends, and historical yield data to maximize productivity and sustainability."
      },
      {
        title: "Resource management systems",
        description: "We develop comprehensive management systems that track and optimize the utilization of vital farm resources including water, fertilizer, seed, equipment, and labor. These solutions enable precise allocation of resources while reducing waste and environmental impact."
      }
    ]
  };

  // Precision Agriculture Platforms section
  const precisionAgricultureContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing agricultural technology solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Agriculture Platforms",
      "Supply Chain Management Solutions",
      "Agricultural Data Analytics"
    ],
    featuredService: "Precision Agriculture Platforms",
    featuredServiceDescription: "We create innovative precision agriculture platforms that leverage IoT sensors, satellite imagery, and machine learning to enable site-specific crop management. Our solutions help farmers implement variable rate applications, detect issues early, and maximize yield while reducing input costs and environmental impact.",
    featuredServiceImage: "/images/precision-agriculture-platforms.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "IoT sensor networks & monitoring",
        description: "We implement comprehensive sensor ecosystems that collect real-time data on soil moisture, temperature, humidity, rainfall, and nutrient levels. These networks provide continuous monitoring of field conditions, enabling timely interventions and precision resource management."
      },
      {
        title: "Remote sensing & field mapping",
        description: "Our solutions integrate satellite imagery, drone photography, and NDVI analysis to create detailed field maps showing crop health, growth patterns, pest infestations, and yield potential. These visualization tools enable targeted interventions and zone-specific management strategies."
      },
      {
        title: "Variable rate application systems",
        description: "We develop intelligent systems that enable precise, location-specific application of water, fertilizers, and crop protection products. By applying inputs only where and when needed, these solutions optimize resource utilization while reducing environmental impact and operational costs."
      }
    ]
  };

  // Supply Chain Management Solutions section
  const supplyChainContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing agricultural technology solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Agriculture Platforms",
      "Supply Chain Management Solutions",
      "Agricultural Data Analytics"
    ],
    featuredService: "Supply Chain Management Solutions",
    featuredServiceDescription: "We develop integrated supply chain platforms that enhance traceability, streamline logistics, and connect producers directly with buyers. Our solutions optimize inventory management, ensure compliance with food safety standards, and create transparent supply chains from field to consumer.",
    featuredServiceImage: "/images/supply-chain-management-solutions.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Blockchain-based traceability",
        description: "We implement distributed ledger technologies that create immutable records of agricultural products throughout the supply chain. These systems enable instant verification of origin, cultivation practices, and handling processes, building consumer trust and ensuring food safety."
      },
      {
        title: "Logistics optimization platforms",
        description: "Our solutions streamline transportation routing, warehouse management, and distribution planning for agricultural products. These platforms minimize spoilage, reduce fuel consumption, and ensure timely delivery of fresh produce to market."
      },
      {
        title: "Direct-to-market platforms",
        description: "We create digital marketplaces that connect farmers directly with retailers, processors, and consumers. These platforms eliminate intermediaries, increase producer margins, and provide buyers with transparent sourcing options and quality verification."
      }
    ]
  };

  // Agricultural Data Analytics section
  const agriculturalAnalyticsContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing agricultural technology solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Agriculture Platforms",
      "Supply Chain Management Solutions",
      "Agricultural Data Analytics"
    ],
    featuredService: "Agricultural Data Analytics",
    featuredServiceDescription: "We build powerful analytics platforms that transform agricultural data into actionable insights. Our solutions help farmers analyze historical patterns, predict future outcomes, and optimize decision-making across all aspects of farm operations for maximum productivity and sustainability.",
    featuredServiceImage: "/images/agricultural-data-analytics.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Predictive yield modeling",
        description: "We develop advanced analytics models that forecast crop yields based on historical data, current conditions, and weather patterns. These predictive tools enable better harvest planning, resource allocation, and financial forecasting throughout the growing season."
      },
      {
        title: "Pest & disease prediction",
        description: "Our solutions utilize machine learning algorithms to analyze environmental conditions, historical pest patterns, and crop vulnerability data to predict potential outbreaks. These early warning systems enable preventative measures that reduce crop losses and minimize chemical applications."
      },
      {
        title: "Financial performance analytics",
        description: "We create comprehensive analytics platforms that evaluate farm financial performance, cost structures, and profitability by crop, field, and season. These insights help optimize operational decisions, capital investments, and long-term strategic planning."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "How can agricultural technology improve farm productivity?",
      answer: "Agricultural technology enhances productivity through precision resource application, automated monitoring, data-driven decision making, and optimized operations. Our IoT sensor networks provide real-time field insights enabling precise irrigation and fertilization, while analytics platforms identify underperforming areas and suggest interventions. These technologies typically deliver 15-30% yield improvements while reducing input costs by optimizing resource utilization based on actual field conditions."
    },
    {
      question: "What ROI can farmers expect from agricultural technology investments?",
      answer: "Farmers implementing agricultural technology solutions typically see ROI within 1-3 growing seasons, depending on the technology adopted. Precision agriculture tools often deliver 2-5x return on investment through input savings (10-15% reduction in water, fertilizer, and pesticide use) combined with yield improvements (5-20% increase). Farm management systems additionally reduce administrative time by 30-50% while preventing costly errors and improving compliance documentation."
    },
    {
      question: "How do you ensure agricultural solutions work in areas with limited connectivity?",
      answer: "We design our agricultural solutions with rural connectivity challenges in mind, implementing edge computing capabilities that enable critical functions to operate offline. Our systems use local data processing and storage with automatic synchronization when connectivity is available. For extremely remote areas, we incorporate mesh networks, LoRaWAN technology, and satellite connectivity options to ensure continuous operation regardless of traditional internet availability."
    },
    {
      question: "Can your agricultural solutions integrate with existing farm equipment?",
      answer: "Yes, our solutions are designed to integrate with a wide range of farm equipment from various manufacturers. We support industry-standard protocols like ISOBUS and implement custom interfaces for legacy equipment. Our platforms can collect and analyze data from existing tractors, combines, sprayers, and irrigation systems, enhancing their capabilities without requiring complete replacement. This approach provides technological advancement while protecting farmers' existing capital investments."
    },
    {
      question: "How do you address data ownership and privacy concerns?",
      answer: "We firmly believe that farm data belongs to the farmer. Our solutions implement strict data sovereignty principles, providing farmers complete control over who can access their information and how it can be used. We utilize advanced encryption, secure access controls, and transparent data handling policies. Farmers maintain ownership of their data and can selectively share insights with advisors, buyers, or research partners while maintaining confidentiality of sensitive operational information."
    },
    {
      question: "What types of sensors and IoT devices do you deploy in agricultural settings?",
      answer: "We implement a comprehensive range of agricultural IoT sensors including soil moisture/temperature probes, weather stations, crop canopy sensors, irrigation flow meters, and equipment monitors. These rugged, field-hardened devices are designed for agricultural environments with extended battery life, wireless connectivity, and resistance to dust, moisture, and temperature extremes. Our sensor networks provide continuous monitoring of critical parameters that influence crop development and resource management."
    },
    {
      question: "How does your technology help with sustainability and environmental compliance?",
      answer: "Our agricultural solutions promote sustainability through precise resource management that minimizes waste and environmental impact. Features like variable-rate application reduce chemical runoff by 30-50%, while smart irrigation systems typically decrease water usage by 20-40%. We also provide comprehensive documentation of farming practices, input application rates, and conservation efforts, simplifying regulatory compliance and sustainability certification processes while supporting environmental stewardship goals."
    },
    {
      question: "Can small and mid-sized farms benefit from your agricultural technology solutions?",
      answer: "Absolutely. We design scalable solutions suitable for operations of all sizes. For smaller farms, we offer modular systems with pay-as-you-grow pricing models that allow implementation of specific components based on immediate needs and budget constraints. Our platforms deliver rapid ROI even on smaller acreage through input savings, yield improvements, and operational efficiencies, making advanced agricultural technology accessible and beneficial regardless of farm size."
    },
    {
      question: "How do you handle implementation and farmer training for new technology?",
      answer: "We employ a comprehensive implementation approach that includes initial assessment, phased deployment, and ongoing support. Our team works directly with farm personnel to understand existing workflows before configuring systems to enhance rather than disrupt operations. We provide hands-on training tailored to various user roles, from field operators to management, supplemented by video tutorials and documentation. Our implementation process ensures smooth technology adoption with minimal disruption to farm operations."
    },
    {
      question: "Why choose Foxbeep for agricultural technology solutions?",
      answer: "Foxbeep combines deep agricultural domain expertise with advanced software development capabilities. Our team includes professionals with backgrounds in both farming and technology, ensuring solutions that are technically sophisticated yet practical in real-world agricultural settings. We maintain a long-term partnership approach, continuously evolving our platforms based on seasonal feedback and emerging agricultural challenges. Our commitment to sustainable agriculture and farmer prosperity drives every aspect of our solution development process."
    }
  ];

  // Final CTA section content
  const ctaContent = {
    heading: "Ready to transform your agricultural operations with intelligent technology?",
    description: "Let's discuss how our agricultural solutions can help you increase yields, optimize resources, and build a more sustainable farming operation.",
    buttonText: "Schedule a consultation",
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
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-6">
          <span className="bg-green-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services we offer
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to developing agricultural technology solutions. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Farm Management Systems",
            "Precision Agriculture Platforms",
            "Supply Chain Management Solutions",
            "Agricultural Data Analytics",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-green-600">
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
      <EdtechServices {...farmManagementContent} />
      <EdtechServices {...precisionAgricultureContent} />
      <EdtechServices {...supplyChainContent} />
      <EdtechServices {...agriculturalAnalyticsContent} />
      
      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our agricultural technology solutions"
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

export default AgricultureTechnology;