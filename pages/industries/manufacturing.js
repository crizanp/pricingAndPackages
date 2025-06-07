import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function ManufacturingIndustrySoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Manufacturing Technology Solutions",
    "url": "https://foxbeep.com/industries/manufacturing",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional manufacturing industry technology development services including MES systems, ERP solutions, IoT integration, quality management systems, and Industry 4.0 automation platforms. 18+ years experience with manufacturing technology development.",
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
      "name": "Manufacturing Industry Technology Development Services",
      "description": "Custom manufacturing technology development, MES systems, ERP solutions, IoT integration, quality management systems, and Industry 4.0 automation platforms"
    },
    "expertise": [
      "Manufacturing Execution Systems (MES)",
      "Enterprise Resource Planning (ERP)",
      "IoT & Industry 4.0 Integration",
      "Quality Management Systems",
      "Production Planning & Scheduling",
      "Smart Factory Solutions"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Manufacturing Industry Technology Development Services",
    subtitle: "Custom manufacturing technology solutions including MES systems, ERP integration, IoT automation, quality management platforms, and Industry 4.0 solutions designed to optimize production efficiency and enhance manufacturing operations.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/manufacturing.png",
    imageAlt: "Manufacturing industry technology development and smart factory solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "MANUFACTURING TECHNOLOGY DEVELOPMENT FOR SMART FACTORIES",
    highlightWord: "DEVELOPMENT",
    descriptionText: "Manufacturing industry technology development transforms production operations through cutting-edge digital solutions. From MES systems to IoT integration platforms, our development expertise delivers scalable manufacturing technology applications. We specialize in custom ERP solutions, quality management systems, and integrated Industry 4.0 platforms that improve production efficiency and reduce operational costs.",
    brandName: "Foxbeep",
    highlightColor: "bg-green-300"
  };

  // Manufacturing Execution Systems section
  const mesSystemsContent = {
    mainHeading: "Our Manufacturing Industry Technology Solutions",
    introText: "We deliver professional manufacturing technology development services focused on optimizing production operations and manufacturing efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Enterprise Resource Planning (ERP)",
      "IoT & Industry 4.0 Integration",
      "Quality Management Systems"
    ],
    featuredService: "Manufacturing Execution Systems (MES)",
    featuredServiceDescription: "Comprehensive MES platforms with production tracking, work order management, resource allocation, real-time monitoring, and manufacturing analytics. Designed for discrete manufacturing, process industries, and hybrid production environments.",
    featuredServiceImage: "/images/manufacturing-execution-systems.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Production Tracking & Monitoring",
        description: "Real-time production visibility with work order tracking, machine status monitoring, production scheduling, throughput analysis, downtime tracking, and performance dashboards for optimized manufacturing operations."
      },
      {
        title: "Resource & Capacity Management",
        description: "Intelligent resource allocation with machine scheduling, labor management, material tracking, capacity planning, bottleneck identification, and resource optimization for maximum production efficiency."
      },
      {
        title: "Manufacturing Analytics & Reporting",
        description: "Advanced manufacturing intelligence with OEE calculations, production KPIs, trend analysis, predictive maintenance alerts, and comprehensive reporting for data-driven manufacturing decisions."
      }
    ]
  };

  // Enterprise Resource Planning section
  const erpSolutionsContent = {
    mainHeading: "Our Manufacturing Industry Technology Solutions",
    introText: "We deliver professional manufacturing technology development services focused on optimizing production operations and manufacturing efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Enterprise Resource Planning (ERP)",
      "IoT & Industry 4.0 Integration",
      "Quality Management Systems"
    ],
    featuredService: "Enterprise Resource Planning (ERP)",
    featuredServiceDescription: "Integrated ERP solutions with financial management, inventory control, procurement, sales management, and manufacturing planning. Perfect for manufacturers seeking end-to-end business process integration and operational visibility.",
    featuredServiceImage: "/images/manufacturing-erp-solutions.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Financial & Cost Management",
        description: "Comprehensive financial control with cost accounting, budget management, financial reporting, variance analysis, profitability tracking, and integrated accounting for accurate manufacturing cost management."
      },
      {
        title: "Inventory & Supply Chain Integration",
        description: "Advanced inventory management with material requirements planning (MRP), supplier management, purchase order automation, inventory optimization, and supply chain visibility for streamlined operations."
      },
      {
        title: "Sales & Customer Management",
        description: "Integrated sales processes with order management, customer relationship management, quotation systems, delivery tracking, and customer service integration for enhanced customer satisfaction."
      }
    ]
  };

  // IoT & Industry 4.0 Integration section
  const iotIntegrationContent = {
    mainHeading: "Our Manufacturing Industry Technology Solutions",
    introText: "We deliver professional manufacturing technology development services focused on optimizing production operations and manufacturing efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Enterprise Resource Planning (ERP)",
      "IoT & Industry 4.0 Integration",
      "Quality Management Systems"
    ],
    featuredService: "IoT & Industry 4.0 Integration",
    featuredServiceDescription: "Smart manufacturing solutions with IoT sensor integration, machine connectivity, predictive maintenance, digital twins, and automated data collection. Designed to enable smart factory transformation and Industry 4.0 capabilities.",
    featuredServiceImage: "/images/iot-industry-4-integration.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Machine Connectivity & Data Collection",
        description: "Comprehensive machine integration with PLC connectivity, sensor data collection, equipment monitoring, automated data capture, and real-time machine status tracking for connected manufacturing operations."
      },
      {
        title: "Predictive Maintenance & Analytics",
        description: "AI-powered maintenance systems with vibration analysis, temperature monitoring, predictive failure detection, maintenance scheduling, and equipment health monitoring for reduced downtime and maintenance costs."
      },
      {
        title: "Digital Twin & Simulation",
        description: "Advanced digital modeling with virtual factory replicas, process simulation, scenario planning, optimization algorithms, and digital twin synchronization for enhanced manufacturing planning and optimization."
      }
    ]
  };

  // Quality Management Systems section
  const qualityManagementContent = {
    mainHeading: "Our Manufacturing Industry Technology Solutions",
    introText: "We deliver professional manufacturing technology development services focused on optimizing production operations and manufacturing efficiency:",
    companyName: "Foxbeep",
    servicesList: [
      "Manufacturing Execution Systems (MES)",
      "Enterprise Resource Planning (ERP)",
      "IoT & Industry 4.0 Integration",
      "Quality Management Systems"
    ],
    featuredService: "Quality Management Systems",
    featuredServiceDescription: "Comprehensive quality control platforms with inspection management, non-conformance tracking, statistical process control, compliance management, and quality analytics. Designed to ensure product quality and regulatory compliance.",
    featuredServiceImage: "/images/quality-management-systems.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Inspection & Quality Control",
        description: "Automated quality processes with inspection planning, quality checkpoints, measurement data collection, pass/fail criteria, quality alerts, and inspection workflow management for consistent product quality."
      },
      {
        title: "Non-Conformance & CAPA Management",
        description: "Comprehensive quality issue management with non-conformance reporting, root cause analysis, corrective and preventive action (CAPA) tracking, quality investigations, and continuous improvement processes."
      },
      {
        title: "Compliance & Regulatory Management",
        description: "Regulatory compliance systems with audit trail management, document control, regulatory reporting, certification tracking, and compliance monitoring for adherence to industry standards and regulations."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What manufacturing industry technology development services do you provide?",
      answer: "We provide comprehensive manufacturing technology development including MES systems, ERP solutions, IoT integration, quality management systems, production planning software, and custom manufacturing applications tailored to your production requirements."
    },
    {
      question: "Can you develop custom Manufacturing Execution Systems (MES)?",
      answer: "Yes, we specialize in custom MES development with features like production tracking, work order management, resource allocation, real-time monitoring, manufacturing analytics, and integration with existing factory systems."
    },
    {
      question: "Do you develop IoT solutions for smart manufacturing?",
      answer: "Absolutely. We develop comprehensive IoT solutions with machine connectivity, sensor integration, predictive maintenance, digital twins, automated data collection, and Industry 4.0 capabilities for smart factory transformation."
    },
    {
      question: "What technologies do you use for manufacturing software development?",
      answer: "We use industrial-grade technologies including .NET, Java, Python, cloud platforms (AWS, Azure), IoT protocols (MQTT, OPC-UA), PLC integration, real-time databases, and machine learning platforms specifically designed for manufacturing environments."
    },
    {
      question: "How do you ensure integration with existing manufacturing equipment?",
      answer: "We implement seamless integration through PLC connectivity, OPC-UA protocols, machine APIs, sensor interfaces, SCADA systems, and custom hardware interfaces to connect with your existing manufacturing infrastructure and equipment."
    },
    {
      question: "Can you integrate manufacturing software with ERP and business systems?",
      answer: "Yes, we specialize in manufacturing system integration with ERP platforms (SAP, Oracle, Microsoft Dynamics), accounting systems, CRM platforms, supply chain systems, and other business applications through secure APIs and data synchronization."
    },
    {
      question: "What is the typical timeline for manufacturing technology development projects?",
      answer: "Manufacturing technology development timelines vary based on complexity and integration requirements. Simple production tracking systems take 4-6 months, while comprehensive MES or ERP implementations may require 8-18 months including testing and deployment phases."
    },
    {
      question: "Do you provide predictive maintenance solutions?",
      answer: "Yes, we develop predictive maintenance platforms with vibration analysis, temperature monitoring, machine learning algorithms, failure prediction, maintenance scheduling, and equipment health monitoring for reduced downtime and maintenance costs."
    },
    {
      question: "Can you develop mobile apps for manufacturing operations?",
      answer: "Absolutely. We develop mobile applications for manufacturing with features like production monitoring, quality inspections, maintenance management, inventory tracking, work order management, and offline capabilities for shop floor operations."
    },
    {
      question: "Why choose Foxbeep for manufacturing industry technology development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of manufacturing processes and Industry 4.0 technologies. Our experienced team delivers scalable, integrated manufacturing solutions that optimize production efficiency, reduce costs, and enable smart factory transformation."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Manufacturing Industry Technology Development Services | Smart Factory Solutions | Foxbeep</title>
        <meta name="description" content="Professional manufacturing industry technology development services including MES systems, ERP solutions, IoT integration, quality management systems, and Industry 4.0 automation platforms. Expert manufacturing technology developers." />
        <meta name="keywords" content="manufacturing industry technology development, MES systems, manufacturing ERP, IoT integration, Industry 4.0, smart factory solutions, quality management systems, predictive maintenance, production planning software" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Manufacturing Industry Technology Development Services | Smart Factory Solutions" />
        <meta property="og:description" content="Custom manufacturing technology development including MES systems, ERP integration, IoT automation, quality management platforms, and Industry 4.0 solutions designed to optimize production efficiency." />
        <meta property="og:image" content="https://foxbeep.com/manufacturing-tech-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/manufacturing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Manufacturing Technology Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manufacturing Industry Technology Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert manufacturing technology development for smart factories, MES systems, IoT integration, and Industry 4.0 solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/manufacturing-tech-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Manufacturing Industry Technology Development" />
        <meta name="services" content="Manufacturing Execution Systems, Enterprise Resource Planning, IoT Integration, Quality Management Systems" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/manufacturing" />
        
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
        <section aria-label="Manufacturing Industry Technology Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Manufacturing Technology Development Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Manufacturing Companies and Industrial Organizations">
          <BrandSlider />
        </section>
        
        {/* Manufacturing Industry Technology Services Sections */}
        <section aria-label="Manufacturing Execution Systems (MES)">
          <EdtechServices {...mesSystemsContent} />
        </section>
        
        <section aria-label="Enterprise Resource Planning (ERP)">
          <EdtechServices {...erpSolutionsContent} />
        </section>
        
        <section aria-label="IoT & Industry 4.0 Integration">
          <EdtechServices {...iotIntegrationContent} />
        </section>
        
        <section aria-label="Quality Management Systems">
          <EdtechServices {...qualityManagementContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Manufacturing Industry Technology Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our manufacturing industry technology development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Manufacturing Technology Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}