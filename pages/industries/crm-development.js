import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function CRMSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep CRM Software Solutions",
    "url": "https://foxbeep.com/industries/crm",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional CRM software development services including custom CRM systems, sales management platforms, and customer relationship management solutions. 18+ years experience with enterprise CRM development.",
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
      "name": "CRM Software Development Services",
      "description": "Custom CRM software development, sales management systems, customer relationship platforms, and enterprise CRM solutions"
    },
    "expertise": [
      "CRM Software Development",
      "Custom CRM Systems",
      "Sales Management Platforms",
      "Customer Management Software",
      "CRM Mobile Apps",
      "Enterprise CRM Solutions"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "CRM Software Development Services",
    subtitle: "Custom CRM software solutions including sales management systems, customer relationship platforms, and enterprise CRM applications designed to boost sales and improve customer relationships.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/crm.jpg",
    imageAlt: "CRM software development and customer relationship management solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "CRM SOFTWARE DEVELOPMENT FOR BUSINESS GROWTH",
    highlightWord: "SOFTWARE",
    descriptionText: "CRM software development transforms business relationships through powerful customer management solutions. From custom CRM systems to sales automation platforms, our software development expertise delivers scalable CRM applications. We specialize in custom customer management software, CRM mobile apps, and integrated business systems that increase sales and improve customer satisfaction.",
    brandName: "Foxbeep",
    highlightColor: "bg-purple-300"
  };

  // Custom CRM Systems section
  const customCRMContent = {
    mainHeading: "Our CRM Software Solutions",
    introText: "We deliver professional CRM software development services focused on business growth and customer management:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Systems",
      "Sales Management Platforms",
      "CRM Mobile Applications",
      "Enterprise CRM Solutions"
    ],
    featuredService: "Custom CRM Systems",
    featuredServiceDescription: "Tailored CRM software development that fits your unique business processes, customer workflows, and sales requirements. Our custom solutions provide complete control over features, integrations, and user experience.",
    featuredServiceImage: "/images/custom-crm-systems.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Contact Management Systems",
        description: "Comprehensive contact databases with customer profiles, interaction history, communication tracking, and relationship mapping designed for effective customer relationship management."
      },
      {
        title: "Lead Management Tools",
        description: "Advanced lead tracking systems with lead scoring, pipeline management, conversion tracking, and automated follow-up features to maximize sales opportunities and revenue."
      },
      {
        title: "Customer Communication Hub",
        description: "Centralized communication platforms with email integration, call logging, meeting scheduling, and interaction tracking for seamless customer relationship management."
      }
    ]
  };

  // Sales Management Platforms section
  const salesManagementContent = {
    mainHeading: "Our CRM Software Solutions",
    introText: "We deliver professional CRM software development services focused on business growth and customer management:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Systems",
      "Sales Management Platforms",
      "CRM Mobile Applications",
      "Enterprise CRM Solutions"
    ],
    featuredService: "Sales Management Platforms",
    featuredServiceDescription: "Powerful sales management software with pipeline tracking, performance analytics, forecasting tools, and team collaboration features. Our platforms help sales teams close more deals and achieve targets.",
    featuredServiceImage: "/images/sales-management-platforms.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Sales Pipeline Management",
        description: "Visual sales pipeline tools with drag-and-drop functionality, stage tracking, deal progression monitoring, and automated workflows for efficient sales process management."
      },
      {
        title: "Performance Analytics",
        description: "Comprehensive sales analytics with performance dashboards, revenue tracking, conversion metrics, and team performance analysis to optimize sales strategies and results."
      },
      {
        title: "Quote and Proposal Systems",
        description: "Automated quote generation tools with pricing management, proposal templates, approval workflows, and contract management for streamlined sales operations."
      }
    ]
  };

  // CRM Mobile Applications section
  const crmMobileContent = {
    mainHeading: "Our CRM Software Solutions",
    introText: "We deliver professional CRM software development services focused on business growth and customer management:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Systems",
      "Sales Management Platforms",
      "CRM Mobile Applications",
      "Enterprise CRM Solutions"
    ],
    featuredService: "CRM Mobile Applications",
    featuredServiceDescription: "Native and cross-platform CRM mobile apps that provide on-the-go access to customer data, sales tools, and business insights. Perfect for field sales teams and remote workers.",
    featuredServiceImage: "/images/crm-mobile-applications.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Mobile Customer Access",
        description: "Instant access to customer information, contact details, interaction history, and account data from smartphones and tablets with offline capabilities and real-time synchronization."
      },
      {
        title: "Field Sales Tools",
        description: "Mobile sales tools including lead capture, opportunity tracking, visit scheduling, GPS location tracking, and digital signature collection for field sales representatives."
      },
      {
        title: "Real-time Notifications",
        description: "Push notifications for new leads, follow-up reminders, deal updates, and important customer communications to keep sales teams informed and responsive."
      }
    ]
  };

  // Enterprise CRM Solutions section
  const enterpriseCRMContent = {
    mainHeading: "Our CRM Software Solutions",
    introText: "We deliver professional CRM software development services focused on business growth and customer management:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Systems",
      "Sales Management Platforms",
      "CRM Mobile Applications",
      "Enterprise CRM Solutions"
    ],
    featuredService: "Enterprise CRM Solutions",
    featuredServiceDescription: "Scalable enterprise CRM platforms with advanced automation, multi-department integration, and comprehensive reporting. Designed for large organizations with complex customer management needs.",
    featuredServiceImage: "/images/enterprise-crm-solutions.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Multi-Department Integration",
        description: "Integrated CRM systems connecting sales, marketing, customer service, and support teams with shared customer data, unified workflows, and cross-departmental collaboration tools."
      },
      {
        title: "Advanced Automation",
        description: "Sophisticated automation workflows including lead assignment, email sequences, task creation, follow-up scheduling, and process automation to increase efficiency and consistency."
      },
      {
        title: "Business Intelligence",
        description: "Comprehensive BI dashboards with customer insights, sales forecasting, performance metrics, and predictive analytics to support strategic business decisions and growth planning."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What CRM software development services do you provide?",
      answer: "We provide comprehensive CRM software development including custom CRM systems, sales management platforms, CRM mobile applications, enterprise CRM solutions, customer portal development, and integration services tailored to your business needs."
    },
    {
      question: "Can you develop custom CRM software from scratch?",
      answer: "Yes, we specialize in custom CRM software development built from the ground up. Our solutions include contact management, lead tracking, sales pipeline, reporting, and custom features designed specifically for your business processes and requirements."
    },
    {
      question: "Do you develop CRM mobile apps?",
      answer: "Absolutely. We develop native iOS and Android CRM apps as well as cross-platform CRM applications with features like offline access, real-time sync, mobile-optimized interfaces, and field sales tools for on-the-go customer management."
    },
    {
      question: "What technologies do you use for CRM development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), database systems (MySQL, PostgreSQL), and API integrations for scalable CRM solutions."
    },
    {
      question: "Can you integrate CRM software with existing business systems?",
      answer: "Yes, we specialize in CRM integration with existing systems including ERP, accounting software, email platforms, marketing tools, e-commerce platforms, and third-party applications through APIs and custom connectors."
    },
    {
      question: "How do you ensure CRM data security and privacy?",
      answer: "We implement robust security measures including data encryption, secure authentication, role-based access controls, regular backups, and compliance with data protection regulations to safeguard sensitive customer information."
    },
    {
      question: "What is the typical timeline for CRM software development?",
      answer: "CRM development timelines vary based on complexity and features. Simple CRM systems take 3-6 months, while comprehensive enterprise solutions may require 6-12 months. We provide detailed project timelines during consultation."
    },
    {
      question: "Can you customize existing CRM platforms like Salesforce?",
      answer: "Yes, we provide CRM customization services for platforms like Salesforce, HubSpot, and others. This includes custom fields, workflows, integrations, reports, and feature enhancements to match your specific business requirements."
    },
    {
      question: "Do you provide ongoing support and maintenance for CRM systems?",
      answer: "Absolutely. We offer comprehensive support and maintenance services including bug fixes, updates, feature enhancements, performance optimization, backup management, and technical support to ensure your CRM runs smoothly."
    },
    {
      question: "Why choose Foxbeep for CRM software development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of business processes and customer management. Our experienced team delivers scalable, user-friendly CRM solutions that help businesses improve sales performance and customer relationships."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>CRM Software Development Services | Custom CRM Systems | Foxbeep</title>
        <meta name="description" content="Professional CRM software development services including custom CRM systems, sales management platforms, CRM mobile apps, and enterprise customer relationship management solutions. Expert CRM developers." />
        <meta name="keywords" content="CRM software development, custom CRM systems, sales management software, customer relationship management, CRM mobile apps, enterprise CRM solutions, CRM development company, customer management software" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="CRM Software Development Services | Custom CRM Systems" />
        <meta property="og:description" content="Custom CRM software development including sales management systems, customer relationship platforms, and enterprise CRM applications designed to boost sales and improve customer relationships." />
        <meta property="og:image" content="https://foxbeep.com/crm-software-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/crm" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep CRM Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CRM Software Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert CRM software development for sales management, customer relationships, and business growth solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/crm-software-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="CRM Software Development" />
        <meta name="services" content="Custom CRM Systems, Sales Management Platforms, CRM Mobile Applications, Enterprise CRM Solutions" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/crm" />
        
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
        <section aria-label="CRM Software Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="CRM Software Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Businesses">
          <BrandSlider />
        </section>
        
        {/* CRM Software Services Sections */}
        <section aria-label="Custom CRM Systems">
          <EdtechServices {...customCRMContent} />
        </section>
        
        <section aria-label="Sales Management Platforms">
          <EdtechServices {...salesManagementContent} />
        </section>
        
        <section aria-label="CRM Mobile Applications">
          <EdtechServices {...crmMobileContent} />
        </section>
        
        <section aria-label="Enterprise CRM Solutions">
          <EdtechServices {...enterpriseCRMContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="CRM Software Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our CRM software development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with CRM Software Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}