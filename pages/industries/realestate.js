import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function RealEstateSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Real Estate Software Solutions",
    "url": "https://foxbeep.com/industries/real-estate",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional real estate software development services including property management systems, MLS platforms, real estate CRM, and property technology solutions. 18+ years experience with modern real estate software.",
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
      "name": "Real Estate Software Development Services",
      "description": "Custom real estate software development, property management systems, MLS platforms, real estate CRM, and property technology solutions"
    },
    "expertise": [
      "Real Estate Software Development",
      "Property Management Systems",
      "MLS Platform Development",
      "Real Estate Mobile Apps",
      "Property Portal Development",
      "Real Estate Analytics"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Real Estate Software Development Services",
    subtitle: "Custom real estate software solutions including property management systems, MLS platforms, real estate CRM, and property technology applications for modern real estate businesses.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/real-estate.jpg",
    imageAlt: "Real estate software development and property technology solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "REAL ESTATE SOFTWARE DEVELOPMENT FOR MODERN PROPERTY BUSINESS",
    highlightWord: "SOFTWARE",
    descriptionText: "Real estate software development transforms property businesses through innovative digital solutions. From property management systems to MLS platforms, our software development expertise delivers scalable real estate applications. We specialize in custom property software, real estate mobile apps, and PropTech systems that streamline operations and enhance client experiences.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Property Management Systems section
  const propertyManagementContent = {
    mainHeading: "Our Real Estate Software Solutions",
    introText: "We deliver professional real estate software development services focused on modern property business needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Property Management Systems",
      "MLS Platform Development",
      "Real Estate Mobile Apps",
      "Property Analytics Tools"
    ],
    featuredService: "Property Management Systems",
    featuredServiceDescription: "Comprehensive property management software that streamlines rental operations, tenant management, maintenance tracking, and financial reporting. Our solutions are designed for property managers and real estate companies of all sizes.",
    featuredServiceImage: "/images/property-management-systems.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Tenant Management Software",
        description: "Complete tenant management systems with lease tracking, rent collection, communication tools, and tenant screening features designed for efficient property management and better tenant relations."
      },
      {
        title: "Maintenance Management",
        description: "Digital maintenance management systems for tracking work orders, scheduling repairs, vendor management, and maintenance history with automated notifications and cost tracking features."
      },
      {
        title: "Financial Reporting Tools",
        description: "Real-time financial dashboards showing rental income, expenses, vacancy rates, and ROI analysis with comprehensive reporting features for property owners and managers."
      }
    ]
  };

  // MLS Platform Development section
  const mlsPlatformContent = {
    mainHeading: "Our Real Estate Software Solutions",
    introText: "We deliver professional real estate software development services focused on modern property business needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Property Management Systems",
      "MLS Platform Development",
      "Real Estate Mobile Apps",
      "Property Analytics Tools"
    ],
    featuredService: "MLS Platform Development",
    featuredServiceDescription: "Custom Multiple Listing Service (MLS) platforms with advanced search capabilities, property listings management, agent collaboration tools, and real-time market data integration for real estate professionals.",
    featuredServiceImage: "/images/mls-platform-development.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Advanced Property Search",
        description: "Sophisticated search and filtering systems with map integration, property comparison tools, and saved search features that help buyers and agents find properties efficiently."
      },
      {
        title: "Listing Management Tools",
        description: "Comprehensive listing management systems for real estate agents with photo galleries, virtual tours, property details management, and automated listing syndication."
      },
      {
        title: "Agent Collaboration Features",
        description: "Professional collaboration tools for real estate agents including lead sharing, commission management, document sharing, and communication systems for better teamwork."
      }
    ]
  };

  // Real Estate Mobile Apps section
  const realEstateMobileContent = {
    mainHeading: "Our Real Estate Software Solutions",
    introText: "We deliver professional real estate software development services focused on modern property business needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Property Management Systems",
      "MLS Platform Development",
      "Real Estate Mobile Apps",
      "Property Analytics Tools"
    ],
    featuredService: "Real Estate Mobile Apps",
    featuredServiceDescription: "Native and cross-platform real estate mobile applications for agents, buyers, sellers, and property managers. Our apps provide on-the-go access to property data and real estate tools.",
    featuredServiceImage: "/images/real-estate-mobile-apps.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Property Search Apps",
        description: "User-friendly mobile applications for property search with GPS integration, photo galleries, virtual tours, and instant notifications for new listings matching user preferences."
      },
      {
        title: "Agent Productivity Apps",
        description: "Mobile productivity solutions for real estate agents with CRM integration, lead management, appointment scheduling, and document management accessible from smartphones and tablets."
      },
      {
        title: "Property Investment Apps",
        description: "Investment analysis applications for real estate investors with ROI calculators, market analysis tools, property valuation features, and portfolio management capabilities."
      }
    ]
  };

  // Property Analytics Tools section
  const propertyAnalyticsContent = {
    mainHeading: "Our Real Estate Software Solutions",
    introText: "We deliver professional real estate software development services focused on modern property business needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Property Management Systems",
      "MLS Platform Development",
      "Real Estate Mobile Apps",
      "Property Analytics Tools"
    ],
    featuredService: "Property Analytics Tools",
    featuredServiceDescription: "Advanced real estate analytics platforms that transform property data into actionable insights. Our analytics solutions help real estate professionals make data-driven decisions and optimize their business strategies.",
    featuredServiceImage: "/images/property-analytics-tools.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Market Analysis Software",
        description: "Comprehensive market analysis tools that track property trends, price movements, inventory levels, and market forecasts to help agents and investors make informed decisions."
      },
      {
        title: "Property Valuation Tools",
        description: "Automated valuation models (AVM) and comparative market analysis (CMA) tools that provide accurate property valuations using machine learning and market data analysis."
      },
      {
        title: "Performance Dashboards",
        description: "Interactive dashboards and visualization tools that present complex real estate data in easy-to-understand formats for better business insights and strategic planning."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What real estate software development services do you provide?",
      answer: "We provide comprehensive real estate software development including property management systems, MLS platforms, real estate mobile apps, property analytics tools, CRM systems, and custom real estate solutions for modern property businesses."
    },
    {
      question: "Can you develop custom property management software?",
      answer: "Yes, we specialize in custom property management software development with features like tenant management, lease tracking, maintenance management, financial reporting, and operational dashboards tailored to your specific property management needs."
    },
    {
      question: "Do you develop mobile apps for real estate?",
      answer: "Absolutely. We develop native iOS and Android real estate apps as well as cross-platform property applications including property search apps, agent productivity tools, investment analysis apps, and property management tools optimized for mobile devices."
    },
    {
      question: "What technologies do you use for real estate software development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), mapping APIs, MLS integrations, and real estate APIs while ensuring scalability and performance."
    },
    {
      question: "Can you integrate real estate software with existing MLS systems?",
      answer: "Yes, we can integrate real estate software with various MLS systems, property databases, and third-party services through APIs and standard real estate protocols for seamless data synchronization and workflow automation."
    },
    {
      question: "How do you handle real estate data security and privacy?",
      answer: "We implement robust security measures including data encryption, secure APIs, user authentication, access controls, and regular security audits to protect sensitive property data and ensure client privacy and regulatory compliance."
    },
    {
      question: "What is PropTech and how can it benefit my real estate business?",
      answer: "PropTech (Property Technology) uses digital innovation to improve real estate processes. It benefits businesses through automation, better client experiences, data-driven insights, improved efficiency, and competitive advantages in the market."
    },
    {
      question: "Can small real estate agencies benefit from custom software solutions?",
      answer: "Yes, we design scalable real estate software suitable for agencies of all sizes. Our solutions offer modular features and affordable pricing models that provide value even for small agencies through improved efficiency and better client service."
    },
    {
      question: "How do you ensure real estate software is user-friendly for agents and clients?",
      answer: "We design real estate software with end-users in mind, focusing on intuitive interfaces, simple navigation, and practical features. We conduct user testing with real estate professionals and provide training to ensure easy adoption and effective use."
    },
    {
      question: "Why choose Foxbeep for real estate software development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of real estate industry needs. Our experienced team delivers scalable, user-friendly real estate software solutions that help businesses improve efficiency and profitability."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Real Estate Software Development Services | Property Management Apps | Foxbeep</title>
        <meta name="description" content="Professional real estate software development services including property management systems, MLS platforms, real estate mobile apps, and PropTech solutions. Expert real estate software developers." />
        <meta name="keywords" content="real estate software development, property management software, MLS platform development, real estate mobile apps, PropTech solutions, property portal development, real estate CRM, property technology" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Real Estate Software Development Services | Property Management Apps" />
        <meta property="og:description" content="Custom real estate software development including property management systems, MLS platforms, and property technology solutions for modern real estate businesses." />
        <meta property="og:image" content="https://foxbeep.com/real-estate-software-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/real-estate" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Real Estate Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Software Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert real estate software development for property management, MLS platforms, and PropTech applications." />
        <meta name="twitter:image" content="https://foxbeep.com/real-estate-software-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Real Estate Software Development" />
        <meta name="services" content="Property Management Systems, MLS Platform Development, Real Estate Mobile Apps, Property Analytics Tools" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/real-estate" />
        
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
        <section aria-label="Real Estate Software Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Real Estate Software Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Real Estate Organizations">
          <BrandSlider />
        </section>
        
        {/* Real Estate Software Services Sections */}
        <section aria-label="Property Management Systems">
          <EdtechServices {...propertyManagementContent} />
        </section>
        
        <section aria-label="MLS Platform Development">
          <EdtechServices {...mlsPlatformContent} />
        </section>
        
        <section aria-label="Real Estate Mobile Apps">
          <EdtechServices {...realEstateMobileContent} />
        </section>
        
        <section aria-label="Property Analytics Tools">
          <EdtechServices {...propertyAnalyticsContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Real Estate Software Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our real estate software development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Real Estate Software Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}