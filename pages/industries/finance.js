import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function FinanceSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Finance Software Solutions",
    "url": "https://foxbeep.com/industries/finance",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional finance software development services including banking applications, fintech solutions, trading platforms, and financial management systems. 18+ years experience with secure financial software.",
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
      "name": "Finance Software Development Services",
      "description": "Custom finance software development, banking applications, fintech solutions, trading platforms, and financial management systems"
    },
    "expertise": [
      "Finance Software Development",
      "Banking Applications",
      "Fintech Solutions",
      "Trading Platforms",
      "Payment Processing Systems",
      "Financial Analytics"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Finance Software Development Services",
    subtitle: "Custom finance software solutions including banking applications, fintech platforms, trading systems, and financial management tools for modern financial institutions and businesses.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/finance.jpg",
    imageAlt: "Finance software development and fintech solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "FINANCE SOFTWARE DEVELOPMENT FOR MODERN BANKING",
    highlightWord: "SOFTWARE",
    descriptionText: "Finance software development transforms financial operations through innovative digital solutions. From banking applications to fintech platforms, our software development expertise delivers secure and scalable financial applications. We specialize in custom finance software, payment processing systems, and trading platforms that enhance financial services and streamline operations.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Banking Applications section
  const bankingApplicationsContent = {
    mainHeading: "Our Finance Software Solutions",
    introText: "We deliver professional finance software development services focused on modern financial needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Banking Applications",
      "Fintech Platforms",
      "Trading Systems",
      "Financial Analytics"
    ],
    featuredService: "Banking Applications",
    featuredServiceDescription: "Comprehensive banking software solutions with account management, transaction processing, loan management, and customer relationship tools. Our applications are built with enterprise-grade security and regulatory compliance.",
    featuredServiceImage: "/images/banking-applications.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Core Banking Systems",
        description: "Robust core banking platforms with account management, transaction processing, multi-currency support, and real-time reporting designed for banks and financial institutions of all sizes."
      },
      {
        title: "Digital Banking Solutions",
        description: "Modern digital banking applications with mobile banking, online banking portals, digital wallet integration, and seamless customer experience across all touchpoints."
      },
      {
        title: "Loan Management Systems",
        description: "Comprehensive loan origination and management systems with application processing, credit scoring, risk assessment, and automated approval workflows for efficient lending operations."
      }
    ]
  };

  // Fintech Platforms section
  const fintechPlatformsContent = {
    mainHeading: "Our Finance Software Solutions",
    introText: "We deliver professional finance software development services focused on modern financial needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Banking Applications",
      "Fintech Platforms",
      "Trading Systems",
      "Financial Analytics"
    ],
    featuredService: "Fintech Platforms",
    featuredServiceDescription: "Innovative fintech solutions including payment gateways, digital wallets, peer-to-peer lending platforms, and cryptocurrency applications. Our platforms are designed for scalability and regulatory compliance.",
    featuredServiceImage: "/images/fintech-platforms.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Payment Processing Systems",
        description: "Secure payment gateway solutions with multi-payment method support, fraud detection, PCI compliance, and real-time transaction processing for e-commerce and financial services."
      },
      {
        title: "Digital Wallet Solutions",
        description: "Feature-rich digital wallet applications with contactless payments, money transfers, bill payments, and loyalty program integration with advanced security features."
      },
      {
        title: "Cryptocurrency Platforms",
        description: "Blockchain-based cryptocurrency trading platforms with secure wallet management, real-time market data, trading tools, and regulatory compliance features."
      }
    ]
  };

  // Trading Systems section
  const tradingSystemsContent = {
    mainHeading: "Our Finance Software Solutions",
    introText: "We deliver professional finance software development services focused on modern financial needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Banking Applications",
      "Fintech Platforms",
      "Trading Systems",
      "Financial Analytics"
    ],
    featuredService: "Trading Systems",
    featuredServiceDescription: "High-performance trading platforms with real-time market data, algorithmic trading, portfolio management, and risk assessment tools. Built for institutional traders and retail investors.",
    featuredServiceImage: "/images/trading-systems.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Stock Trading Platforms",
        description: "Advanced stock trading applications with real-time quotes, charting tools, order management, and portfolio tracking designed for seamless trading experiences."
      },
      {
        title: "Algorithmic Trading Systems",
        description: "Automated trading systems with strategy backtesting, algorithmic execution, risk management, and performance analytics for institutional and professional traders."
      },
      {
        title: "Portfolio Management Tools",
        description: "Comprehensive portfolio management solutions with asset allocation, performance tracking, risk analysis, and reporting tools for investment advisors and fund managers."
      }
    ]
  };

  // Financial Analytics section
  const financialAnalyticsContent = {
    mainHeading: "Our Finance Software Solutions",
    introText: "We deliver professional finance software development services focused on modern financial needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Banking Applications",
      "Fintech Platforms",
      "Trading Systems",
      "Financial Analytics"
    ],
    featuredService: "Financial Analytics",
    featuredServiceDescription: "Advanced financial analytics platforms that transform financial data into actionable insights. Our analytics solutions help institutions make data-driven decisions and optimize financial performance.",
    featuredServiceImage: "/images/financial-analytics.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Risk Management Analytics",
        description: "Sophisticated risk assessment tools with credit scoring, market risk analysis, operational risk monitoring, and regulatory reporting for comprehensive risk management."
      },
      {
        title: "Financial Reporting Systems",
        description: "Automated financial reporting solutions with regulatory compliance, real-time dashboards, and customizable reports for accurate financial insights and decision-making."
      },
      {
        title: "Fraud Detection Systems",
        description: "AI-powered fraud detection platforms with machine learning algorithms, real-time monitoring, and automated alerts to prevent financial fraud and protect transactions."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What finance software development services do you provide?",
      answer: "We provide comprehensive finance software development including banking applications, fintech platforms, trading systems, payment processing solutions, financial analytics, and custom financial software for banks, fintech companies, and financial institutions."
    },
    {
      question: "Can you develop secure banking applications?",
      answer: "Yes, we specialize in secure banking software development with features like multi-factor authentication, encryption, PCI compliance, fraud detection, and regulatory compliance following industry standards and best practices."
    },
    {
      question: "Do you develop mobile banking and fintech apps?",
      answer: "Absolutely. We develop native iOS and Android banking apps as well as cross-platform fintech applications including mobile banking, digital wallets, payment apps, and trading platforms optimized for mobile devices."
    },
    {
      question: "What technologies do you use for finance software development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure), blockchain technologies, APIs integration, and financial databases while ensuring security, scalability, and regulatory compliance."
    },
    {
      question: "Can you integrate finance software with existing banking systems?",
      answer: "Yes, we can integrate finance software with core banking systems, payment gateways, third-party APIs, and legacy systems through secure APIs and standard financial protocols for seamless data flow and operations."
    },
    {
      question: "How do you ensure financial data security and compliance?",
      answer: "We implement robust security measures including end-to-end encryption, secure APIs, multi-factor authentication, audit trails, and compliance with regulations like PCI DSS, GDPR, and local financial regulations."
    },
    {
      question: "What is fintech software and how can it benefit financial institutions?",
      answer: "Fintech software leverages technology to improve financial services through digital payments, automated processes, enhanced user experiences, and innovative solutions that reduce costs and increase efficiency for financial institutions."
    },
    {
      question: "Can you develop cryptocurrency and blockchain applications?",
      answer: "Yes, we develop blockchain-based applications including cryptocurrency trading platforms, digital wallets, smart contracts, and decentralized finance (DeFi) solutions with secure architecture and regulatory considerations."
    },
    {
      question: "How do you ensure finance software is user-friendly and accessible?",
      answer: "We design finance software with user experience in mind, focusing on intuitive interfaces, accessibility standards, responsive design, and comprehensive user testing to ensure easy adoption and effective use by all users."
    },
    {
      question: "Why choose Foxbeep for finance software development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of financial industry requirements. Our experienced team delivers secure, scalable, and compliant finance software solutions that drive business growth and efficiency."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Finance Software Development Services | Banking Apps | Fintech Solutions | Foxbeep</title>
        <meta name="description" content="Professional finance software development services including banking applications, fintech platforms, trading systems, and financial management solutions. Expert financial software developers." />
        <meta name="keywords" content="finance software development, banking applications, fintech solutions, trading platforms, payment processing, financial software development, digital banking, financial analytics" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Finance Software Development Services | Banking Apps | Fintech Solutions" />
        <meta property="og:description" content="Custom finance software development including banking applications, fintech platforms, trading systems, and financial management solutions for modern financial institutions." />
        <meta property="og:image" content="https://foxbeep.com/finance-software-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/finance" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Finance Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finance Software Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert finance software development for banking, fintech, and financial management applications." />
        <meta name="twitter:image" content="https://foxbeep.com/finance-software-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Finance Software Development" />
        <meta name="services" content="Banking Applications, Fintech Platforms, Trading Systems, Financial Analytics" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/finance" />
        
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
        <section aria-label="Finance Software Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Finance Software Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Financial Institutions">
          <BrandSlider />
        </section>
        
        {/* Finance Software Services Sections */}
        <section aria-label="Banking Applications">
          <EdtechServices {...bankingApplicationsContent} />
        </section>
        
        <section aria-label="Fintech Platforms">
          <EdtechServices {...fintechPlatformsContent} />
        </section>
        
        <section aria-label="Trading Systems">
          <EdtechServices {...tradingSystemsContent} />
        </section>
        
        <section aria-label="Financial Analytics">
          <EdtechServices {...financialAnalyticsContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Finance Software Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our finance software development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Finance Software Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}