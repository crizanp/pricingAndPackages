import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function B2BSolutions() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep B2B Solutions",
    "url": "https://foxbeep.com/b2b-solutions",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional B2B software development services including CRM systems, ERP solutions, supply chain management, and enterprise automation platforms. 18+ years experience with 350+ B2B software professionals.",
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
      "name": "B2B Software Development Services",
      "description": "Custom B2B software development, CRM systems, ERP solutions, supply chain management, and enterprise automation platforms"
    },
    "expertise": [
      "CRM Development",
      "ERP Solutions",
      "Supply Chain Management",
      "B2B Platform Development",
      "Enterprise Automation",
      "Business Intelligence Systems"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "B2B Software Development Services",
    subtitle: "Expert B2B software solutions for enterprise automation, customer relationship management, supply chain optimization, and business process enhancement with cutting-edge IT solutions.",
    buttonText: "Request Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/b2b.jpg",
    imageAlt: "Advanced B2B software development and enterprise solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "B2B INDUSTRY TRANSFORMATION THROUGH INTELLIGENT SOFTWARE SOLUTIONS",
    highlightWord: "INTELLIGENT",
    descriptionText: "The B2B industry is experiencing digital transformation through innovative software solutions. From customer relationship management to enterprise resource planning, our IT expertise delivers comprehensive B2B software development services. We specialize in business automation, supply chain optimization, CRM systems, and enterprise platforms that enhance efficiency, productivity, and growth across B2B ecosystems.",
    brandName: "Foxbeep",
    highlightColor: "bg-purple-300"
  };

  // CRM Development section
  const crmDevelopmentContent = {
    mainHeading: "Our B2B Software Solutions",
    introText: "We deliver comprehensive B2B software development services with focus on innovation and scalability:",
    companyName: "Foxbeep",
    servicesList: [
      "CRM Development",
      "ERP Solutions",
      "Supply Chain Management",
      "B2B Platform Development"
    ],
    featuredService: "CRM Development",
    featuredServiceDescription: "Advanced customer relationship management software solutions that streamline sales processes, enhance customer interactions, and boost revenue growth. Our CRM systems integrate AI-powered analytics, automated workflows, and comprehensive customer data management for modern B2B requirements.",
    featuredServiceImage: "/images/crm-development-systems.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Sales Pipeline Management",
        description: "Intelligent sales pipeline software that tracks leads, opportunities, and deals through automated workflows, forecasting analytics, and performance dashboards to maximize sales team efficiency and revenue generation."
      },
      {
        title: "Customer Data Analytics",
        description: "Comprehensive customer analytics platforms that analyze interaction patterns, purchase history, and behavioral data to provide actionable insights for personalized marketing and improved customer retention strategies."
      },
      {
        title: "Marketing Automation Integration",
        description: "Seamless marketing automation systems that nurture leads through personalized campaigns, email sequences, and targeted content delivery based on customer segmentation and engagement analytics."
      }
    ]
  };

  // ERP Solutions section
  const erpSolutionsContent = {
    mainHeading: "Our B2B Software Solutions",
    introText: "We deliver comprehensive B2B software development services with focus on innovation and scalability:",
    companyName: "Foxbeep",
    servicesList: [
      "CRM Development",
      "ERP Solutions", 
      "Supply Chain Management",
      "B2B Platform Development"
    ],
    featuredService: "ERP Solutions",
    featuredServiceDescription: "Comprehensive enterprise resource planning software solutions that integrate business processes, financial management, inventory control, and human resources. Our ERP systems provide real-time visibility, automated workflows, and data-driven decision making across all business operations.",
    featuredServiceImage: "/images/erp-solutions-systems.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Financial Management Systems",
        description: "Advanced financial management modules including accounting automation, budget planning, expense tracking, and financial reporting with real-time dashboards and compliance management for accurate financial oversight."
      },
      {
        title: "Inventory & Warehouse Management",
        description: "Intelligent inventory management systems with real-time stock tracking, automated reordering, warehouse optimization, and supply chain visibility to minimize costs and prevent stockouts."
      },
      {
        title: "Human Resource Management",
        description: "Comprehensive HR management platforms covering employee onboarding, payroll processing, performance management, attendance tracking, and talent acquisition with self-service portals and analytics."
      }
    ]
  };

  // Supply Chain Management section
  const supplyChainContent = {
    mainHeading: "Our B2B Software Solutions",
    introText: "We deliver comprehensive B2B software development services with focus on innovation and scalability:",
    companyName: "Foxbeep",
    servicesList: [
      "CRM Development",
      "ERP Solutions",
      "Supply Chain Management",
      "B2B Platform Development"
    ],
    featuredService: "Supply Chain Management",
    featuredServiceDescription: "Advanced supply chain management software solutions that optimize procurement, logistics, vendor relationships, and inventory management. Our platforms provide end-to-end supply chain visibility, predictive analytics, and automated processes for efficient B2B operations.",
    featuredServiceImage: "/images/supply-chain-management-b2b.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Vendor Management Systems",
        description: "Comprehensive vendor management platforms that streamline supplier onboarding, performance monitoring, contract management, and procurement processes with automated workflows and vendor scorecards."
      },
      {
        title: "Logistics Optimization",
        description: "AI-powered logistics management systems that optimize transportation routes, warehouse operations, delivery scheduling, and cost management through predictive analytics and real-time tracking capabilities."
      },
      {
        title: "Procurement Automation",
        description: "Intelligent procurement platforms that automate purchase requisitions, approval workflows, supplier selection, and contract management while ensuring compliance and cost optimization across procurement processes."
      }
    ]
  };

  // B2B Platform Development section
  const b2bPlatformContent = {
    mainHeading: "Our B2B Software Solutions",
    introText: "We deliver comprehensive B2B software development services with focus on innovation and scalability:",
    companyName: "Foxbeep",
    servicesList: [
      "CRM Development",
      "ERP Solutions",
      "Supply Chain Management",
      "B2B Platform Development"
    ],
    featuredService: "B2B Platform Development",
    featuredServiceDescription: "Custom B2B platform development that connects businesses, streamlines transactions, and enhances collaboration. Our platforms include marketplace solutions, partner portals, API integrations, and enterprise communication systems designed for scalable B2B operations.",
    featuredServiceImage: "/images/b2b-platform-development.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "B2B Marketplace Platforms",
        description: "Custom B2B marketplace development with multi-vendor support, product catalogs, bulk ordering systems, price negotiation tools, and integrated payment processing for seamless business-to-business transactions."
      },
      {
        title: "Partner Portal Systems",
        description: "Comprehensive partner portal development that enables secure collaboration, document sharing, performance tracking, and communication between business partners with role-based access controls and analytics."
      },
      {
        title: "API Integration & Development",
        description: "Robust API development and integration services that connect B2B systems, third-party applications, and business tools to create unified ecosystems with seamless data flow and automated processes."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What B2B software development services do you provide?",
      answer: "We provide comprehensive B2B software development including CRM systems, ERP solutions, supply chain management platforms, B2B marketplaces, partner portals, business intelligence systems, workflow automation, and custom enterprise applications tailored to specific B2B industry requirements."
    },
    {
      question: "How do you ensure B2B software scalability and performance?",
      answer: "Our B2B software development follows enterprise architecture best practices, microservices design patterns, and cloud-native technologies. We implement load balancing, database optimization, caching strategies, and performance monitoring to ensure scalability and reliability for growing businesses."
    },
    {
      question: "Can you integrate with existing B2B systems and third-party tools?",
      answer: "Yes, we specialize in integrating B2B software with existing enterprise systems, CRM platforms, accounting software, inventory management tools, and third-party APIs. Our solutions are designed for seamless compatibility and can be customized for specific business requirements."
    },
    {
      question: "What technologies do you use for B2B software development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure, GCP), databases (PostgreSQL, MongoDB), microservices architecture, API development, business intelligence tools, and enterprise integration platforms for robust B2B solutions."
    },
    {
      question: "How do you handle B2B data security and compliance?",
      answer: "We implement enterprise-grade security measures including data encryption, secure authentication, role-based access controls, audit trails, and compliance with industry standards like GDPR, SOC 2, and ISO 27001. Our solutions protect sensitive business data and ensure regulatory compliance."
    },
    {
      question: "What is your experience with CRM and ERP development?",
      answer: "We have extensive experience developing custom CRM and ERP systems with modules for sales management, customer service, financial management, inventory control, HR management, and business intelligence. Our solutions are tailored to specific industry needs and business processes."
    },
    {
      question: "Can you develop custom B2B marketplace platforms?",
      answer: "Absolutely. We develop custom B2B marketplace platforms with features like multi-vendor management, product catalogs, bulk ordering, price negotiation, payment processing, logistics integration, and analytics dashboards tailored to specific B2B marketplace requirements."
    },
    {
      question: "How do you support supply chain management software development?",
      answer: "We develop comprehensive supply chain management solutions including vendor management, procurement automation, inventory optimization, logistics tracking, demand forecasting, and supply chain analytics with real-time visibility and predictive capabilities."
    },
    {
      question: "What is your approach to B2B software testing and quality assurance?",
      answer: "We employ comprehensive testing methodologies including unit testing, integration testing, performance testing, security testing, and user acceptance testing. Our QA processes ensure software reliability, performance optimization, and business continuity before deployment."
    },
    {
      question: "Why choose Foxbeep for B2B software development?",
      answer: "Foxbeep combines 18+ years of software development expertise with specialized B2B industry knowledge. Our 350+ software professionals have experience in enterprise systems, business process automation, and B2B platform development, ensuring reliable and innovative B2B software solutions."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>B2B Software Development Services | CRM & ERP Solutions | Foxbeep</title>
        <meta name="description" content="Expert B2B software development services including CRM systems, ERP solutions, supply chain management, and B2B platform development. 18+ years experience, 350+ B2B software professionals." />
        <meta name="keywords" content="B2B software development, CRM development, ERP solutions, supply chain management software, B2B platform development, enterprise automation, business intelligence systems" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="B2B Software Development Services | CRM & ERP Solutions" />
        <meta property="og:description" content="Professional B2B software development including CRM systems, ERP solutions, supply chain management, and enterprise platforms. Expert B2B software developers." />
        <meta property="og:image" content="https://foxbeep.com/b2b-software-development.png" />
        <meta property="og:url" content="https://foxbeep.com/b2b-solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep B2B Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B2B Software Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert B2B software development for CRM systems, ERP solutions, and supply chain management platforms." />
        <meta name="twitter:image" content="https://foxbeep.com/b2b-software-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="B2B Software Development" />
        <meta name="services" content="CRM Development, ERP Solutions, Supply Chain Management, B2B Platform Development" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/b2b-solutions" />
        
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
        <section aria-label="B2B Software Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="B2B Industry Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading B2B Companies">
          <BrandSlider />
        </section>
        
        {/* B2B Software Services Sections */}
        <section aria-label="CRM Development">
          <EdtechServices {...crmDevelopmentContent} />
        </section>
        
        <section aria-label="ERP Solutions">
          <EdtechServices {...erpSolutionsContent} />
        </section>
        
        <section aria-label="Supply Chain Management">
          <EdtechServices {...supplyChainContent} />
        </section>
        
        <section aria-label="B2B Platform Development">
          <EdtechServices {...b2bPlatformContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="B2B Software Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our B2B software development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with B2B Software Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}