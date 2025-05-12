import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

const Manufacturing = () => {
  // This data would typically come from props, CMS, or API
  const heroContent = {
    title: "Revolutionizing Manufacturing Through Smart Technologies",
    subtitle: "Transforming production capabilities with innovative digital solutions that empower manufacturers to optimize operations in an increasingly competitive global landscape.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "https://10pearls.com/wp-content/uploads/2025/01/manufacturing-banner-hero-image.png",
    imageAlt: "Modern manufacturing facility with advanced robotics"
  };
  const textHeroContent = {
    headingText: "TECHNOLOGY IS RESHAPING MANUFACTURING BY DIGITALIZING",
    highlightWord: "DIGITALIZING",
    descriptionText: "Technology is reshaping manufacturing by digitalizing production processes, facilitating predictive maintenance, and fostering seamless integration between machines, systems, and human operators. From IoT sensors to digital twins, each emerging technology is poised to revolutionize manufacturing paradigms. {brandName} aids manufacturing enterprises in enhancing production efficiency and product quality via an innovative, connected industrial ecosystem.",
    brandName: "10Pearls",
    highlightColor: "bg-orange-300"
  };
  const manufacturingContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "we have a unique approach to developing your ideal industrial software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Industrial IoT Solutions",
      "Predictive Maintenance Platforms",
      "Supply Chain Optimization"
    ],
    featuredService: "Manufacturing Execution Systems (MES)",
    featuredServiceDescription: "Real-time production monitoring and control solutions are essential for modern manufacturing. We empower forward-thinking factories and production facilities to track operations efficiently, optimize workflows, and integrate innovative manufacturing methods transforming productivity.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/manufacturing-execution-systems.jpg",
    highlightColor: "bg-orange-300"
  };
  const MoremanufacturingContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal industrial software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Industrial IoT Solutions",
      "Predictive Maintenance Platforms",
      "Supply Chain Optimization"
    ],
    featuredService: "Manufacturing Execution Systems (MES)",
    featuredServiceDescription: "Real-time production monitoring and control solutions are essential for modern manufacturing. We empower forward-thinking factories and production facilities to track operations efficiently, optimize workflows, and integrate innovative manufacturing methods transforming productivity.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/manufacturing-execution-systems.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Intelligent production tracking",
        description: "We develop MES solutions incorporating AI assistance, empowering every production manager to monitor operations with unparalleled visibility. Our platforms feature seamless resource tracking, customized KPI dashboards, and secure real-time data accessibility."
      },
      {
        title: "Enterprise system integration",
        description: "Our forward-looking teams leverage cutting-edge technologies to enhance manufacturing workflows and elevate operational efficiency. By integrating customized, feature-rich MES platforms with ERP and PLM systems, we optimize production outcomes, streamline processes, and foster a connected manufacturing environment."
      },
      {
        title: "Production analytics and reporting",
        description: "We transform extensive manufacturing data into visually intuitive, actionable insights for all stakeholders and develop analytics tools to monitor production efficiency, quality metrics, and equipment performance."
      }
    ]
  };
  const Moremanufacturing2Content = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal industrial software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Industrial IoT Solutions",
      "Predictive Maintenance Platforms",
      "Supply Chain Optimization"
    ],
    featuredService: "Industrial IoT Solutions",
    featuredServiceDescription: "We create comprehensive IIoT ecosystems including sensor networks, edge computing, and central monitoring platforms. We develop tools for data collection, analysis, and visualization, making production operations more transparent and efficient for manufacturing teams.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/industrial-iot-solutions.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Connected Factory Platforms",
        description: "We facilitate comprehensive IIoT implementation by providing robust sensor integration, secure data transmission, and seamless connectivity within our industrial platforms. Our customized solutions manage device orchestration, data storage, and real-time monitoring to streamline operations."
      },
      {
        title: "Digital Twin Technology",
        description: "We specialize in designing and developing sophisticated digital twin solutions tailored to create virtual replicas of physical assets, production lines, and entire facilities for simulation, optimization, and predictive analysis."
      },
      {
        title: "Mobile Monitoring Applications",
        description: "We specialize in the design and development of mobile applications offering intuitive dashboards, alert systems, and remote control capabilities, ensuring seamless production monitoring that aligns with modern manufacturers' needs for flexibility and mobility."
      }
    ]
  };

  const Moremanufacturing3Content = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal industrial software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Industrial IoT Solutions",
      "Predictive Maintenance Platforms",
      "Supply Chain Optimization"
    ],
    featuredService: "Predictive Maintenance Platforms",
    featuredServiceDescription: "We revolutionize equipment reliability for manufacturing operations by designing and developing condition monitoring and predictive analytics solutions. Our maintenance platforms allow technical teams to prevent downtime and extend asset lifecycles with unprecedented precision.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/predictive-maintenance-platforms.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Equipment Health Monitoring",
        description: "We specialize in creating comprehensive condition monitoring solutions utilizing vibration analysis, thermal imaging, and acoustics to track equipment health and predict potential failures before they impact production."
      },
      {
        title: "Predictive Analytics",
        description: "With extensive expertise, we craft advanced analytics systems that leverage historical and real-time data to predict maintenance needs. Our teams utilize machine learning algorithms to create intelligent models that optimize maintenance scheduling and minimize downtime."
      },
      {
        title: "Augmented Reality Maintenance",
        description: "At 10Pearls, we specialize in developing AR-based maintenance applications that provide technicians with visual guidance, digital manuals, and expert remote assistance to accelerate repair processes and improve first-time fix rates."
      }
    ]
  };
  const Moremanufacturing4Content = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal industrial software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Industrial IoT Solutions",
      "Predictive Maintenance Platforms",
      "Supply Chain Optimization"
    ],
    featuredService: "Supply Chain Optimization",
    featuredServiceDescription: "We specialize in the development and deployment of digital supply chain technologies to transform inventory management, logistics coordination, supplier collaboration, and demand forecasting, promoting resilience and agility in manufacturing operations.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/supply-chain-optimization.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Inventory Management Systems",
        description: "We leverage advanced algorithms to transform inventory control capabilities, enabling manufacturers to optimize stock levels, reduce carrying costs, and prevent stockouts. This empowers operations teams to maintain optimal inventory with minimal capital investment."
      },
      {
        title: "Supplier Collaboration Platforms",
        description: "Offer comprehensive supplier relationship management through our bespoke digital platforms that enhance communication, quality control, and delivery performance. These intelligent systems streamline procurement processes and strengthen supplier partnerships."
      },
      {
        title: "Demand Forecasting Tools",
        description: "We specialize in the creation of AI-driven forecasting platforms designed to predict customer demand, optimize production scheduling, and align manufacturing capacity with market requirements based on historical data and market trends."
      }
    ]
  };
  const faqItems = [
    {
      question: "What types of manufacturing technology solutions do you offer?",
      answer: "We offer end-to-end manufacturing technology development services, including Manufacturing Execution Systems (MES), Industrial IoT platforms, predictive maintenance solutions, digital twin technology, supply chain optimization tools, and quality management systems. Our goal is to reshape the way manufacturing operations are managed and optimized."
    },
    {
      question: "How do you use AI in manufacturing platforms?",
      answer: "We leverage artificial intelligence to deliver predictive maintenance, quality inspection automation, demand forecasting, and production optimization. Our AI-driven systems also provide anomaly detection and root cause analysis to minimize downtime and optimize throughput."
    },
    {
      question: "Can you build a customized Manufacturing Execution System?",
      answer: "Absolutely. We specialize in developing scalable, feature-rich MES platforms tailored to your specific production processes and workflows. These systems support production scheduling, work order management, resource allocation, and real-time monitoring in a secure, integrated environment."
    },
    {
      question: "How do technologies like IoT enhance manufacturing operations?",
      answer: "Industrial IoT transforms manufacturing by offering real-time visibility into equipment performance, production metrics, and environmental conditions. These connected systems increase efficiency and quality, especially in areas like discrete manufacturing, process industries, and assembly operations."
    },
    {
      question: "Do you provide mobile manufacturing solutions?",
      answer: "Yes. We design mobile-first applications with intuitive interfaces, real-time production monitoring, maintenance support tools, and quality inspection capabilities. These apps ensure plant managers and technicians can access critical information from anywhere on the production floor."
    },
    {
      question: "How do you ensure data security in OT/IT environments?",
      answer: "We develop secure platforms that implement defense-in-depth strategies, network segmentation, and comprehensive access controls. Our solutions adhere to industry standards including IEC 62443, NIST, and ISA95 to safeguard critical manufacturing systems and data."
    },
    {
      question: "What kind of analytics do your platforms offer?",
      answer: "Our systems provide real-time insights on OEE (Overall Equipment Effectiveness), quality metrics, energy usage, and production throughput. Dashboards and reporting tools empower operations teams to make data-driven decisions that enhance manufacturing efficiency and product quality."
    },
    {
      question: "Can your platforms integrate with existing manufacturing systems?",
      answer: "Yes, we offer seamless platform integration with ERP systems, PLM software, SCADA, historians, and shop floor equipment. This ensures unified data flow between business and operational systems, smooth operations, and improved manufacturing continuity."
    },
    {
      question: "Do you support post-launch maintenance and updates?",
      answer: "Definitely. We offer continuous support, platform optimization, new feature rollouts, and technology updates to keep your manufacturing technology solution scalable, secure, and aligned with evolving industry requirements and operational needs."
    },
    {
      question: "Why choose 10Pearls for manufacturing technology development?",
      answer: "10Pearls stands out for its deep expertise in emerging technologies, user-centric design, and proven success in the manufacturing sector. We deliver secure, scalable, and future-ready solutions that empower operations teams and enhance production efficiency."
    }
  ];

  return (
    <div>
      <Hero {...heroContent} />
      <TextHighlight {...textHeroContent} />;
      <BrandSlider />
      <div className="max-w-7xl mx-auto px-4 xl:px-0 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl relative inline-block mb-6">
          <span className="bg-orange-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building impactful industrial software. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Manufacturing Execution Systems (MES)",
            "Predictive Maintenance Platforms",
            "Industrial IoT Solutions",
            "Supply Chain Optimization",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-orange-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15H5v-3.414l8.293-8.293a1 1 0 011.414 0zM7 13h.586L14 6.586 13.414 6 7 12.414V13z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>

      <EdtechServices {...MoremanufacturingContent} />;
      <EdtechServices {...Moremanufacturing2Content} />;
      <EdtechServices {...Moremanufacturing3Content} />;
      <EdtechServices {...Moremanufacturing4Content} />;
      <FAQSection
        title="Frequently Asked Questions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-2xl"
      />
      <TextHeroSection />
      {/* Rest of the page content would go here */}
    </div>
  );
};

export default Manufacturing;