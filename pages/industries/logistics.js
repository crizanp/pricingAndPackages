import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function LogisticsIndustrySoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Logistics Technology Solutions",
    "url": "https://foxbeep.com/industries/logistics",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional logistics industry technology development services including supply chain management systems, warehouse management software, fleet tracking solutions, and logistics automation platforms. 18+ years experience with logistics technology development.",
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
      "name": "Logistics Industry Technology Development Services",
      "description": "Custom logistics technology development, supply chain management systems, warehouse management software, fleet tracking solutions, and logistics automation platforms"
    },
    "expertise": [
      "Supply Chain Management Systems",
      "Warehouse Management Software",
      "Fleet Tracking & Management",
      "Logistics Automation Platforms",
      "Transportation Management Systems",
      "Inventory Management Solutions"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Logistics Industry Technology Development Services",
    subtitle: "Custom logistics technology solutions including supply chain management systems, warehouse management software, fleet tracking platforms, and logistics automation tools designed to optimize operations and enhance supply chain efficiency.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/logistic.png",
    imageAlt: "Logistics industry technology development and supply chain solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "LOGISTICS TECHNOLOGY DEVELOPMENT FOR MODERN SUPPLY CHAINS",
    highlightWord: "DEVELOPMENT",
    descriptionText: "Logistics industry technology development revolutionizes supply chain operations through innovative digital solutions. From warehouse management systems to fleet tracking platforms, our development expertise delivers scalable logistics technology applications. We specialize in custom supply chain software, transportation management systems, and integrated logistics platforms that improve operational efficiency and reduce costs.",
    brandName: "Foxbeep",
    highlightColor: "bg-orange-300"
  };

  // Supply Chain Management Systems section
  const supplyChainContent = {
    mainHeading: "Our Logistics Industry Technology Solutions",
    introText: "We deliver professional logistics technology development services focused on optimizing supply chain operations and logistics efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Management Systems",
      "Warehouse Management Software",
      "Fleet Tracking & Management",
      "Logistics Automation Platforms"
    ],
    featuredService: "Supply Chain Management Systems",
    featuredServiceDescription: "Comprehensive supply chain platforms with demand forecasting, supplier management, procurement automation, inventory optimization, and end-to-end supply chain visibility. Designed for manufacturers, distributors, and logistics companies.",
    featuredServiceImage: "/images/supply-chain-management.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Demand Planning & Forecasting",
        description: "Advanced analytics with demand prediction, seasonal trend analysis, inventory planning, supplier capacity planning, risk assessment, and automated replenishment recommendations for optimized supply chain planning."
      },
      {
        title: "Supplier & Procurement Management",
        description: "Integrated supplier portals with vendor management, RFQ processing, contract management, purchase order automation, supplier performance tracking, and procurement analytics for streamlined sourcing operations."
      },
      {
        title: "Supply Chain Visibility & Analytics",
        description: "Real-time supply chain monitoring with shipment tracking, milestone management, exception handling, performance dashboards, and predictive analytics for proactive supply chain optimization."
      }
    ]
  };

  // Warehouse Management Software section
  const warehouseManagementContent = {
    mainHeading: "Our Logistics Industry Technology Solutions",
    introText: "We deliver professional logistics technology development services focused on optimizing supply chain operations and logistics efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Management Systems",
      "Warehouse Management Software",
      "Fleet Tracking & Management",
      "Logistics Automation Platforms"
    ],
    featuredService: "Warehouse Management Software",
    featuredServiceDescription: "Complete warehouse management solutions with inventory tracking, order fulfillment, picking optimization, storage management, and warehouse automation integration. Perfect for distribution centers and fulfillment operations.",
    featuredServiceImage: "/images/warehouse-management-software.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Inventory Management & Tracking",
        description: "Real-time inventory control with barcode/RFID integration, cycle counting, stock level monitoring, location management, expiry tracking, and automated inventory alerts for accurate warehouse operations."
      },
      {
        title: "Order Fulfillment & Picking",
        description: "Optimized fulfillment processes with wave planning, pick path optimization, batch picking, packing automation, shipping integration, and quality control workflows for efficient order processing."
      },
      {
        title: "Warehouse Automation Integration",
        description: "Seamless integration with automated systems including conveyor systems, sortation equipment, robotic picking, AGV coordination, and IoT sensors for smart warehouse operations."
      }
    ]
  };

  // Fleet Tracking & Management section
  const fleetTrackingContent = {
    mainHeading: "Our Logistics Industry Technology Solutions",
    introText: "We deliver professional logistics technology development services focused on optimizing supply chain operations and logistics efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Management Systems",
      "Warehouse Management Software",
      "Fleet Tracking & Management",
      "Logistics Automation Platforms"
    ],
    featuredService: "Fleet Tracking & Management",
    featuredServiceDescription: "Advanced fleet management platforms with GPS tracking, route optimization, driver management, vehicle maintenance, fuel monitoring, and delivery tracking. Designed to improve fleet efficiency and reduce operational costs.",
    featuredServiceImage: "/images/fleet-tracking-management.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Real-time GPS Tracking & Monitoring",
        description: "Comprehensive vehicle tracking with live location monitoring, geofencing, route deviation alerts, driver behavior analytics, trip history, and real-time fleet visibility dashboards."
      },
      {
        title: "Route Optimization & Planning",
        description: "Intelligent routing algorithms with multi-stop optimization, traffic consideration, delivery time windows, driver scheduling, load planning, and dynamic route adjustments for maximum efficiency."
      },
      {
        title: "Vehicle Maintenance & Compliance",
        description: "Preventive maintenance scheduling with service reminders, vehicle inspection tracking, compliance monitoring, fuel management, cost analysis, and fleet performance reporting."
      }
    ]
  };

  // Logistics Automation Platforms section
  const logisticsAutomationContent = {
    mainHeading: "Our Logistics Industry Technology Solutions",
    introText: "We deliver professional logistics technology development services focused on optimizing supply chain operations and logistics efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Supply Chain Management Systems",
      "Warehouse Management Software",
      "Fleet Tracking & Management",
      "Logistics Automation Platforms"
    ],
    featuredService: "Logistics Automation Platforms",
    featuredServiceDescription: "Intelligent logistics automation solutions with workflow automation, document processing, shipment management, customs clearance, and end-to-end logistics orchestration. Designed to streamline logistics operations and reduce manual processes.",
    featuredServiceImage: "/images/logistics-automation-platforms.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Shipment & Transportation Management",
        description: "Automated shipment processing with carrier selection, rate comparison, booking automation, tracking integration, proof of delivery, and transportation analytics for optimized shipping operations."
      },
      {
        title: "Document & Customs Automation",
        description: "Streamlined documentation with automated customs clearance, trade compliance, document generation, electronic data interchange (EDI), and regulatory compliance management for international logistics."
      },
      {
        title: "Workflow & Process Automation",
        description: "Intelligent process automation with business rule engines, exception handling, approval workflows, notification systems, and integration APIs for seamless logistics operations."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What logistics industry technology development services do you provide?",
      answer: "We provide comprehensive logistics technology development including supply chain management systems, warehouse management software, fleet tracking solutions, logistics automation platforms, transportation management systems, and custom logistics software tailored to your operational needs."
    },
    {
      question: "Can you develop custom warehouse management systems?",
      answer: "Yes, we specialize in custom warehouse management system development with features like inventory tracking, order fulfillment, picking optimization, storage management, barcode/RFID integration, and warehouse automation connectivity."
    },
    {
      question: "Do you develop fleet tracking and management software?",
      answer: "Absolutely. We develop comprehensive fleet management platforms with GPS tracking, route optimization, driver management, vehicle maintenance scheduling, fuel monitoring, and real-time fleet visibility dashboards."
    },
    {
      question: "What technologies do you use for logistics software development?",
      answer: "We use scalable technologies including .NET, Java, Python, cloud platforms (AWS, Azure), IoT integration, GPS/mapping APIs, EDI systems, mobile technologies, and real-time analytics platforms specifically designed for logistics industry requirements."
    },
    {
      question: "How do you ensure system integration with existing logistics infrastructure?",
      answer: "We implement seamless integration through APIs, EDI protocols, warehouse automation interfaces, ERP system connectors, carrier APIs, IoT device integration, and custom middleware solutions to connect with your existing logistics ecosystem."
    },
    {
      question: "Can you integrate logistics software with third-party carriers and suppliers?",
      answer: "Yes, we specialize in logistics system integration with major carriers (FedEx, UPS, DHL), freight brokers, customs systems, supplier portals, e-commerce platforms, and logistics service providers through secure APIs and data exchange protocols."
    },
    {
      question: "What is the typical timeline for logistics technology development projects?",
      answer: "Logistics technology development timelines vary based on complexity and integration requirements. Simple tracking systems take 3-5 months, while comprehensive supply chain or warehouse management platforms may require 6-12 months including testing and integration phases."
    },
    {
      question: "Do you provide IoT integration for smart logistics solutions?",
      answer: "Yes, we integrate IoT technologies including RFID tracking, sensor monitoring, telematics devices, smart warehouse equipment, temperature monitoring, and connected vehicle systems for intelligent logistics operations."
    },
    {
      question: "Can you develop mobile apps for logistics operations?",
      answer: "Absolutely. We develop mobile applications for logistics professionals with features like shipment tracking, delivery confirmation, warehouse operations, driver apps, inventory management, and offline capabilities for field operations."
    },
    {
      question: "Why choose Foxbeep for logistics industry technology development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of logistics workflows and supply chain operations. Our experienced team delivers scalable, integrated logistics technology solutions that optimize operations, reduce costs, and improve customer satisfaction."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Logistics Industry Technology Development Services | Supply Chain Software | Foxbeep</title>
        <meta name="description" content="Professional logistics industry technology development services including supply chain management systems, warehouse management software, fleet tracking solutions, and logistics automation platforms. Expert logistics technology developers." />
        <meta name="keywords" content="logistics industry technology development, supply chain management systems, warehouse management software, fleet tracking solutions, logistics automation platforms, transportation management systems, inventory management" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Logistics Industry Technology Development Services | Supply Chain Software" />
        <meta property="og:description" content="Custom logistics technology development including supply chain management systems, warehouse management software, fleet tracking platforms, and logistics automation tools designed to optimize operations." />
        <meta property="og:image" content="https://foxbeep.com/logistics-tech-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/logistics" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Logistics Technology Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Logistics Industry Technology Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert logistics technology development for supply chain optimization, warehouse management, and fleet tracking solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/logistics-tech-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Logistics Industry Technology Development" />
        <meta name="services" content="Supply Chain Management Systems, Warehouse Management Software, Fleet Tracking Solutions, Logistics Automation Platforms" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/logistics" />
        
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
        <section aria-label="Logistics Industry Technology Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Logistics Technology Development Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Logistics Companies and Supply Chain Organizations">
          <BrandSlider />
        </section>
        
        {/* Logistics Industry Technology Services Sections */}
        <section aria-label="Supply Chain Management Systems">
          <EdtechServices {...supplyChainContent} />
        </section>
        
        <section aria-label="Warehouse Management Software">
          <EdtechServices {...warehouseManagementContent} />
        </section>
        
        <section aria-label="Fleet Tracking & Management">
          <EdtechServices {...fleetTrackingContent} />
        </section>
        
        <section aria-label="Logistics Automation Platforms">
          <EdtechServices {...logisticsAutomationContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Logistics Industry Technology Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our logistics industry technology development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Logistics Technology Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}