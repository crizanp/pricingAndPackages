import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";


export default function AutomotiveIndustry() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Automotive Solutions",
    "url": "https://foxbeep.com/automotive",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional automotive software development services including autonomous driving systems, connected vehicle solutions, and fleet management platforms. 18+ years experience with 350+ automotive software professionals.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nepal"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+977-9810570201",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://facebook.com/foxbeep",
      "https://twitter.com/foxbeep",
      "https://linkedin.com/company/foxbeep"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Automotive Software Development Services",
      "description": "Custom automotive software development, connected vehicle solutions, autonomous driving systems, and fleet management platforms"
    },
    "expertise": [
      "Autonomous Driving Systems",
      "Connected Vehicle Solutions", 
      "Fleet Management Platforms",
      "Automotive IoT Solutions",
      "Vehicle Telematics",
      "ADAS Development"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Automotive Software Development Services",
    subtitle: "Expert automotive software development for vehicle automation, safety, connectivity, and performance optimization with cutting-edge IT solutions.",
    buttonText: "Request Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/automotive.jpg",
    imageAlt: "Advanced automotive software development and connected vehicle technology"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "AUTOMOTIVE INDUSTRY TRANSFORMATION THROUGH ADVANCED SOFTWARE SOLUTIONS",
    highlightWord: "SOFTWARE",
    descriptionText: "The automotive industry is experiencing digital transformation through innovative software solutions. From autonomous driving systems to connected vehicle platforms, our IT expertise delivers comprehensive automotive software development services. We specialize in vehicle automation, predictive maintenance, fleet management systems, and smart mobility solutions that enhance safety, efficiency, and user experience across the automotive ecosystem.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Autonomous Driving Systems section
  const autonomousDrivingContent = {
    mainHeading: "Our Automotive Software Solutions",
    introText: "We deliver comprehensive automotive software development services with focus on innovation and reliability:",
    companyName: "Foxbeep",
    servicesList: [
      "Autonomous Driving Systems",
      "Connected Vehicle Platforms",
      "Fleet Management Solutions", 
      "Automotive IoT Integration"
    ],
    featuredService: "Autonomous Driving Systems",
    featuredServiceDescription: "Advanced autonomous driving software solutions that integrate AI, machine learning, and real-time sensor data processing. Our systems enhance vehicle safety through intelligent navigation, object detection, and decision-making algorithms designed for modern automotive requirements.",
    featuredServiceImage: "/images/autonomous-driving-systems.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "AI-Powered Navigation Systems",
        description: "Intelligent navigation software that processes real-time traffic data, weather conditions, and road infrastructure to optimize routing and enhance driver safety through predictive analytics."
      },
      {
        title: "Advanced Driver Assistance Systems (ADAS)",
        description: "Comprehensive ADAS software development including adaptive cruise control, lane departure warnings, automatic emergency braking, and parking assistance systems with sensor fusion technology."
      },
      {
        title: "Computer Vision Integration",
        description: "Real-time object detection and recognition systems that identify pedestrians, vehicles, traffic signals, and road conditions using advanced computer vision algorithms and machine learning models."
      }
    ]
  };

  // Connected Vehicle Platforms section
  const connectedVehicleContent = {
    mainHeading: "Our Automotive Software Solutions", 
    introText: "We deliver comprehensive automotive software development services with focus on innovation and reliability:",
    companyName: "Foxbeep",
    servicesList: [
      "Autonomous Driving Systems",
      "Connected Vehicle Platforms",
      "Fleet Management Solutions",
      "Automotive IoT Integration"
    ],
    featuredService: "Connected Vehicle Platforms",
    featuredServiceDescription: "Comprehensive connected vehicle software platforms that enable seamless communication between vehicles, infrastructure, and cloud services. Our solutions provide real-time vehicle diagnostics, remote monitoring, and enhanced user experiences through integrated connectivity.",
    featuredServiceImage: "/images/connected-vehicle-platforms.jpg", 
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Vehicle-to-Everything (V2X) Communication",
        description: "Advanced V2X communication software that enables vehicles to communicate with infrastructure, other vehicles, and cloud services for improved traffic flow and enhanced safety protocols."
      },
      {
        title: "Telematics and Remote Diagnostics",
        description: "Comprehensive telematics solutions providing real-time vehicle health monitoring, predictive maintenance alerts, and remote diagnostic capabilities through IoT sensors and cloud integration."
      },
      {
        title: "In-Vehicle Infotainment Systems",
        description: "Modern infotainment platform development with touchscreen interfaces, voice control, smartphone integration, and cloud-based services for enhanced driver and passenger experience."
      }
    ]
  };

  // Fleet Management Solutions section
  const fleetManagementContent = {
    mainHeading: "Our Automotive Software Solutions",
    introText: "We deliver comprehensive automotive software development services with focus on innovation and reliability:",
    companyName: "Foxbeep", 
    servicesList: [
      "Autonomous Driving Systems",
      "Connected Vehicle Platforms",
      "Fleet Management Solutions",
      "Automotive IoT Integration"
    ],
    featuredService: "Fleet Management Solutions",
    featuredServiceDescription: "Enterprise-grade fleet management software solutions that optimize vehicle utilization, reduce operational costs, and enhance fleet efficiency. Our platforms provide comprehensive vehicle tracking, maintenance scheduling, and performance analytics for commercial and enterprise fleets.",
    featuredServiceImage: "/images/fleet-management-solutions.jpg",
    highlightColor: "bg-blue-300", 
    featureDetails: [
      {
        title: "Real-Time Fleet Tracking",
        description: "GPS-based fleet tracking systems with real-time location monitoring, route optimization, geofencing capabilities, and comprehensive reporting dashboards for fleet managers."
      },
      {
        title: "Predictive Maintenance Systems",
        description: "AI-powered predictive maintenance software that analyzes vehicle data to predict maintenance needs, schedule service appointments, and prevent costly breakdowns through proactive maintenance planning."
      },
      {
        title: "Driver Performance Analytics",
        description: "Comprehensive driver behavior monitoring systems that track driving patterns, fuel efficiency, safety scores, and provide actionable insights for fleet optimization and driver training programs."
      }
    ]
  };

  // Automotive IoT Integration section
  const iotIntegrationContent = {
    mainHeading: "Our Automotive Software Solutions",
    introText: "We deliver comprehensive automotive software development services with focus on innovation and reliability:",
    companyName: "Foxbeep",
    servicesList: [
      "Autonomous Driving Systems", 
      "Connected Vehicle Platforms",
      "Fleet Management Solutions",
      "Automotive IoT Integration"
    ],
    featuredService: "Automotive IoT Integration",
    featuredServiceDescription: "Advanced automotive IoT software solutions that connect vehicles, infrastructure, and mobile devices through intelligent sensor networks. Our IoT platforms enable smart vehicle monitoring, automated maintenance alerts, and enhanced connectivity for modern automotive ecosystems.",
    featuredServiceImage: "/images/automotive-iot-integration.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Smart Sensor Integration",
        description: "Comprehensive IoT sensor integration for vehicle monitoring including temperature sensors, pressure monitors, GPS tracking, and environmental sensors with real-time data processing capabilities."
      },
      {
        title: "Cloud-Based Vehicle Analytics",
        description: "Advanced cloud analytics platforms that process vehicle IoT data to provide insights on performance, usage patterns, maintenance needs, and operational efficiency through machine learning algorithms."
      },
      {
        title: "Mobile App Integration",
        description: "Native mobile applications that connect drivers with their vehicles through IoT networks, providing remote vehicle control, diagnostics, location tracking, and maintenance notifications."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What automotive software development services do you provide?",
      answer: "We provide comprehensive automotive software development including autonomous driving systems, connected vehicle platforms, fleet management solutions, ADAS development, telematics integration, IoT connectivity, predictive maintenance systems, and custom automotive applications tailored to specific industry requirements."
    },
    {
      question: "How do you ensure automotive software compliance and safety standards?",
      answer: "Our automotive software development follows ISO 26262 functional safety standards, AUTOSAR architecture guidelines, and industry best practices. We implement rigorous testing protocols, code reviews, and quality assurance processes to ensure compliance with automotive safety and regulatory requirements."
    },
    {
      question: "Can you integrate with existing automotive systems and hardware?",
      answer: "Yes, we specialize in integrating automotive software with existing vehicle systems, ECUs, sensors, and third-party hardware. Our solutions are designed for seamless compatibility with various automotive platforms and can be customized for specific vehicle models and manufacturer requirements."
    },
    {
      question: "What technologies do you use for automotive software development?",
      answer: "We use cutting-edge technologies including C/C++, Python, Java, embedded systems programming, real-time operating systems (RTOS), machine learning frameworks, computer vision libraries, IoT platforms, cloud services, and automotive-specific development tools and simulators."
    },
    {
      question: "How do you handle automotive data security and privacy?",
      answer: "We implement advanced cybersecurity measures including end-to-end encryption, secure communication protocols, intrusion detection systems, and compliance with automotive cybersecurity standards. Our solutions protect vehicle data, user privacy, and prevent unauthorized access to automotive systems."
    },
    {
      question: "What is your experience with autonomous vehicle development?",
      answer: "We have extensive experience developing autonomous driving software including sensor fusion algorithms, path planning systems, object detection and classification, decision-making algorithms, and safety-critical software components for various levels of vehicle automation from Level 1 to Level 4 autonomy."
    },
    {
      question: "Can you develop custom fleet management solutions?",
      answer: "Absolutely. We develop custom fleet management platforms with features like real-time GPS tracking, route optimization, fuel monitoring, maintenance scheduling, driver behavior analysis, reporting dashboards, and mobile applications tailored to specific fleet management requirements and business models."
    },
    {
      question: "How do you support connected vehicle and V2X communication development?",
      answer: "We develop V2X communication software supporting Vehicle-to-Vehicle (V2V), Vehicle-to-Infrastructure (V2I), and Vehicle-to-Cloud (V2C) connectivity. Our solutions enable real-time data exchange, traffic optimization, safety warnings, and smart transportation system integration."
    },
    {
      question: "What is your approach to automotive software testing and validation?",
      answer: "We employ comprehensive testing methodologies including unit testing, integration testing, hardware-in-the-loop (HIL) testing, software-in-the-loop (SIL) testing, and real-world validation. Our testing processes ensure software reliability, performance, and safety compliance before deployment."
    },
    {
      question: "Why choose Foxbeep for automotive software development?",
      answer: "Foxbeep combines 18+ years of software development expertise with specialized automotive industry knowledge. Our 350+ software professionals have experience in safety-critical systems, real-time processing, and automotive standards compliance, ensuring reliable and innovative automotive software solutions."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Automotive Software Development Services | Connected Vehicle Solutions | Foxbeep</title>
        <meta name="description" content="Expert automotive software development services including autonomous driving systems, connected vehicle platforms, fleet management, and IoT integration. 18+ years experience, 350+ automotive software professionals." />
        <meta name="keywords" content="automotive software development, autonomous driving systems, connected vehicle platforms, fleet management software, automotive IoT, ADAS development, vehicle telematics, automotive app development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Automotive Software Development Services | Connected Vehicle Solutions" />
        <meta property="og:description" content="Professional automotive software development including autonomous driving, connected vehicles, fleet management, and IoT solutions. Expert automotive software developers." />
        <meta property="og:image" content="https://foxbeep.com/automotive-software-development.png" />
        <meta property="og:url" content="https://foxbeep.com/automotive" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Automotive Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automotive Software Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert automotive software development for autonomous driving, connected vehicles, and fleet management solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/automotive-software-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Automotive Software Development" />
        <meta name="services" content="Autonomous Driving Systems, Connected Vehicle Platforms, Fleet Management, Automotive IoT" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/automotive" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <main>
        {/* Hero Section */}
        <section aria-label="Automotive Software Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Automotive Industry Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Automotive Companies">
          <BrandSlider />
        </section>
        
       
        
        {/* Automotive Software Services Sections */}
        <section aria-label="Autonomous Driving Systems">
          <EdtechServices {...autonomousDrivingContent} />
        </section>
        
        <section aria-label="Connected Vehicle Platforms">
          <EdtechServices {...connectedVehicleContent} />
        </section>
        
        <section aria-label="Fleet Management Solutions">
          <EdtechServices {...fleetManagementContent} />
        </section>
        
        <section aria-label="Automotive IoT Integration">
          <EdtechServices {...iotIntegrationContent} />
        </section>
        
       
       
        
       
        {/* FAQ Section */}
        <section aria-label="Automotive Software Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our automotive software development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
      
        {/* Call to Action */}
        <section aria-label="Get Started with Automotive Software Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}