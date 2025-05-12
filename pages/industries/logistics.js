import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const LogisticsServices = () => {
  // Hero section content
  const heroContent = {
    title: "Powering Modern Supply Chains with Intelligent Logistics Solutions",
    subtitle: "Leveraging advanced technology to optimize transportation networks, warehouse operations, and distribution systems for operational excellence.",
    buttonText: "Transform Your Logistics",
    buttonLink: "#contact",
    backgroundImage: "/images/logistics-hero-banner.png",
    imageAlt: "Modern logistics and supply chain operations"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "DIGITAL TRANSFORMATION IS REVOLUTIONIZING LOGISTICS THROUGH VISIBILITY",
    highlightWord: "VISIBILITY",
    descriptionText: "Digital transformation is revolutionizing logistics through end-to-end visibility, predictive intelligence, and autonomous operations. From IoT-enabled tracking to AI-powered route optimization and robotics automation, technology is creating resilient and adaptive supply chains. Foxbeep helps logistics companies harness these innovations to reduce costs, improve service levels, and build sustainable competitive advantages.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Supply Chain Visibility section
  const supplyChainVisibilityContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing logistics and supply chain solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Visibility",
      "Transportation Management",
      "Warehouse Automation",
      "Last-Mile Optimization"
    ],
    featuredService: "Supply Chain Visibility",
    featuredServiceDescription: "We develop comprehensive supply chain visualization platforms that provide real-time tracking, monitoring, and analysis of goods movement throughout the entire logistics network. Our solutions enable complete transparency from manufacturer to end consumer.",
    featuredServiceImage: "/images/supply-chain-visibility.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Real-time asset tracking",
        description: "Our IoT-enabled tracking solutions provide continuous visibility of shipments, vehicles, and assets with precise location data, environmental condition monitoring, and predictive ETA calculations across global logistics networks."
      },
      {
        title: "Control tower solutions",
        description: "We develop centralized logistics control tower platforms that consolidate data from multiple systems, highlight exceptions requiring attention, and enable proactive issue resolution before disruptions impact customers."
      },
      {
        title: "Supply chain analytics",
        description: "Our advanced analytics platforms transform raw logistics data into actionable insights, identifying bottlenecks, optimization opportunities, and performance trends through interactive dashboards and automated reporting."
      }
    ]
  };

  // Transportation Management section
  const transportationManagementContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing logistics and supply chain solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Visibility",
      "Transportation Management",
      "Warehouse Automation",
      "Last-Mile Optimization"
    ],
    featuredService: "Transportation Management",
    featuredServiceDescription: "Our transportation management solutions optimize fleet operations, carrier selection, and multi-modal shipping networks. These intelligent systems reduce transportation costs while improving service levels through advanced planning and execution capabilities.",
    featuredServiceImage: "/images/transportation-management.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Route optimization engines",
        description: "We develop AI-powered routing systems that calculate optimal delivery sequences, considering vehicle capacity, delivery windows, traffic patterns, and driver constraints to maximize efficiency and on-time performance."
      },
      {
        title: "Freight management platforms",
        description: "Our comprehensive freight platforms streamline carrier selection, automate load tendering, provide real-time shipment visibility, and facilitate accurate freight settlement across all transportation modes."
      },
      {
        title: "Fleet management solutions",
        description: "We create integrated fleet management systems that optimize vehicle utilization, monitor driver performance, automate maintenance scheduling, and ensure regulatory compliance for owned transportation assets."
      }
    ]
  };

  // Warehouse Automation section
  const warehouseAutomationContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing logistics and supply chain solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Visibility",
      "Transportation Management",
      "Warehouse Automation",
      "Last-Mile Optimization"
    ],
    featuredService: "Warehouse Automation",
    featuredServiceDescription: "We develop innovative warehouse management and automation solutions that transform distribution operations. Our systems optimize inventory placement, picking processes, and material handling to maximize throughput and accuracy.",
    featuredServiceImage: "/images/warehouse-automation.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Warehouse management systems",
        description: "Our advanced WMS platforms optimize all aspects of warehouse operations from receiving and putaway to picking, packing, and shipping, with real-time inventory visibility and labor management capabilities."
      },
      {
        title: "Robotics integration",
        description: "We specialize in integrating autonomous mobile robots (AMRs), automated storage and retrieval systems (AS/RS), and robotic picking solutions with existing warehouse systems to enhance productivity and throughput."
      },
      {
        title: "Smart inventory management",
        description: "Our inventory intelligence solutions leverage IoT sensors, RFID technology, and computer vision to maintain perpetual inventory accuracy, optimize slotting decisions, and reduce carrying costs through data-driven insights."
      }
    ]
  };

  // Last-Mile Optimization section
  const lastMileContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing logistics and supply chain solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Visibility",
      "Transportation Management",
      "Warehouse Automation",
      "Last-Mile Optimization"
    ],
    featuredService: "Last-Mile Optimization",
    featuredServiceDescription: "Our last-mile delivery solutions optimize the most challenging and costly segment of the supply chain. We develop intelligent systems that enhance delivery efficiency, provide real-time visibility, and improve the customer experience.",
    featuredServiceImage: "/images/last-mile-optimization.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Dynamic route planning",
        description: "We create sophisticated routing engines that adapt to real-time conditions, optimize multi-stop deliveries, and balance delivery efficiency with customer promise times through continuous route optimization."
      },
      {
        title: "Delivery experience platforms",
        description: "Our customer-facing delivery platforms provide accurate ETAs, real-time tracking, proof of delivery, and flexible delivery options that empower consumers and reduce failed delivery attempts."
      },
      {
        title: "Crowdsourced delivery integration",
        description: "We develop solutions that seamlessly integrate with gig economy delivery networks, enabling dynamic capacity scaling during peak periods and cost-effective service for time-sensitive deliveries."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "How can technology improve visibility in our supply chain?",
      answer: "Our technology solutions enhance supply chain visibility through IoT sensors that track location and condition of goods, integration platforms that connect disparate systems for unified data views, blockchain solutions that verify chain of custody, and advanced analytics that convert raw data into actionable insights. These systems provide real-time awareness of inventory levels, shipment status, and potential disruptions."
    },
    {
      question: "What benefits do transportation management systems provide?",
      answer: "Transportation management systems typically reduce freight costs by 8-12% through carrier optimization, automated load tendering, and route consolidation. They also improve on-time delivery performance, automate freight audit and payment processes, optimize modal selection, and provide analytics to identify continuous improvement opportunities in your transportation network."
    },
    {
      question: "How can we improve our warehouse productivity?",
      answer: "We enhance warehouse productivity through optimized picking algorithms that reduce travel time, labor management systems that improve workforce utilization, slotting optimization that places fast-moving items in accessible locations, and automation technologies like voice picking, pick-to-light, and robotics that multiply human productivity."
    },
    {
      question: "What metrics should we track to evaluate logistics performance?",
      answer: "Essential logistics KPIs include perfect order rate (complete, accurate, on-time deliveries), order cycle time, inventory accuracy, inventory turnover, cost per order, on-time delivery performance, freight cost as percentage of sales, and warehouse utilization. Our analytics dashboards can be customized to highlight the metrics most relevant to your strategic objectives."
    },
    {
      question: "How do your solutions address sustainability in logistics?",
      answer: "Our sustainability-focused solutions include carbon footprint tracking across the supply chain, route optimization that reduces miles and emissions, packaging optimization tools that minimize material usage, modal shift analysis to favor greener transportation options, and reverse logistics platforms that enhance recycling and circular economy initiatives."
    },
    {
      question: "Can your systems integrate with our existing logistics technology?",
      answer: "Yes, our solutions are designed with open APIs and standard integration frameworks that connect with ERP systems, WMS platforms, TMS solutions, and legacy applications. We conduct comprehensive integration assessments and develop tailored connectivity strategies that preserve existing investments while adding new capabilities."
    },
    {
      question: "How do you approach last-mile delivery optimization?",
      answer: "We optimize last-mile delivery through dynamic routing algorithms that adapt to real-time conditions, delivery density analysis that groups nearby stops, time window optimization that balances customer convenience with delivery efficiency, and automated customer communications that reduce failed delivery attempts and improve satisfaction."
    },
    {
      question: "What advanced technologies do you implement in logistics solutions?",
      answer: "We leverage cutting-edge technologies including artificial intelligence for demand and ETA prediction, machine learning for continuous route optimization, computer vision for automated dimensioning and damage detection, IoT for real-time asset tracking, and blockchain for secure, transparent documentation and chain of custody verification."
    },
    {
      question: "How do your solutions adapt to unpredictable demand and disruptions?",
      answer: "Our solutions enhance supply chain resilience through scenario planning tools that evaluate multiple what-if situations, network design optimization that builds appropriate redundancy, real-time alerting systems that identify disruptions early, and AI-powered recommendation engines that suggest mitigation actions based on current conditions."
    },
    {
      question: "Why choose Foxbeep for logistics technology solutions?",
      answer: "Foxbeep combines deep logistics industry expertise with cutting-edge technical capabilities. We understand the unique challenges of modern supply chains and develop solutions that address real operational pain points. Our technology enhances visibility, improves service levels, reduces costs, and provides the agility needed to thrive in today's dynamic business environment."
    }
  ];

  // Final CTA section content
  const ctaContent = {
    heading: "Ready to transform your logistics operations?",
    description: "Let's discuss how our technology solutions can optimize your supply chain, reduce costs, and improve customer satisfaction.",
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
      <div className="max-w-7xl mx-auto px-4 xl:px-0 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl relative inline-block mb-6">
          <span className="bg-blue-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to developing technology solutions for logistics and supply chain operations. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Supply Chain Visibility",
            "Transportation Management",
            "Warehouse Automation",
            "Last-Mile Optimization",
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
      <EdtechServices {...supplyChainVisibilityContent} />
      <EdtechServices {...transportationManagementContent} />
      <EdtechServices {...warehouseAutomationContent} />
      <EdtechServices {...lastMileContent} />
      
      {/* Customer Results Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Measurable Results for Our Logistics Clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Result Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.12 4.7a1 1 0 111.415 1.415l-2-2a1 1 0 00-1.415 0l-4 4a1 1 0 01-1.414-1.414l4-4zM15 8a1 1 0 01.707.293l2 2a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l.707-.707L11.293 12H8.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4A1 1 0 0110 6h5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2">27%</h3>
              <p className="text-xl font-medium mb-2">Transportation Cost Reduction</p>
              <p className="text-gray-600">For a global 3PL using our route optimization and carrier management platform</p>
            </div>
            
            {/* Result Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2">99.8%</h3>
              <p className="text-xl font-medium mb-2">Inventory Accuracy</p>
              <p className="text-gray-600">Achieved by an e-commerce retailer implementing our warehouse automation solution</p>
            </div>
            
            {/* Result Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2">94%</h3>
              <p className="text-xl font-medium mb-2">On-Time Delivery Rate</p>
              <p className="text-gray-600">Improvement for a last-mile delivery provider using our optimization platform</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technology Stack Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cutting-Edge Technology Stack</h2>
          <p className="text-lg text-gray-700">Our logistics solutions leverage the latest technologies to provide unmatched performance, scalability, and intelligence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tech 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
            <p className="text-gray-600">Predictive analytics for demand forecasting, route optimization, and maintenance scheduling</p>
          </div>
          
          {/* Tech 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">IoT & Telematics</h3>
            <p className="text-gray-600">Real-time tracking, condition monitoring, and automated data collection</p>
          </div>
          
          {/* Tech 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">API Integration</h3>
            <p className="text-gray-600">Seamless connectivity across systems, partners, and customers</p>
          </div>
          
          {/* Tech 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Blockchain</h3>
            <p className="text-gray-600">Secure, transparent documentation and chain of custody verification</p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our logistics solutions"
        faqItems={faqItems}
        backgroundColor="bg-gray-50"
        textColor="text-gray-700"
        questionSize="text-2xl"
      />
      
      
      
      {/* Final Text Hero Section */}
      <TextHeroSection />
    </div>
  );
};

export default LogisticsServices;