import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function EcommerceSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep E-commerce Development Solutions",
    "url": "https://foxbeep.com/industries/ecommerce",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional e-commerce development services including custom online stores, marketplace platforms, mobile commerce apps, and enterprise e-commerce solutions. 18+ years experience with scalable e-commerce development.",
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
      "name": "E-commerce Development Services",
      "description": "Custom e-commerce development, online store creation, marketplace platforms, mobile commerce apps, and enterprise e-commerce solutions"
    },
    "expertise": [
      "E-commerce Development",
      "Custom Online Stores",
      "Marketplace Platforms",
      "Mobile Commerce Apps",
      "Shopping Cart Development",
      "Enterprise E-commerce Solutions"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "E-commerce Development Services",
    subtitle: "Custom e-commerce solutions including online stores, marketplace platforms, mobile commerce apps, and enterprise e-commerce systems designed to drive sales and enhance customer shopping experiences.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/ecommerce.jpg",
    imageAlt: "E-commerce development and online store solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "E-COMMERCE DEVELOPMENT FOR ONLINE SUCCESS",
    highlightWord: "DEVELOPMENT",
    descriptionText: "E-commerce development transforms businesses through powerful online selling platforms. From custom online stores to marketplace solutions, our development expertise delivers scalable e-commerce applications. We specialize in custom shopping platforms, mobile commerce apps, and integrated payment systems that increase sales and improve customer satisfaction.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Custom Online Stores section
  const customStoreContent = {
    mainHeading: "Our E-commerce Development Solutions",
    introText: "We deliver professional e-commerce development services focused on online growth and customer engagement:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom Online Stores",
      "Marketplace Platforms",
      "Mobile Commerce Apps",
      "Enterprise E-commerce Solutions"
    ],
    featuredService: "Custom Online Stores",
    featuredServiceDescription: "Tailored e-commerce websites built from scratch to match your brand identity, business requirements, and customer needs. Our custom solutions provide complete control over design, functionality, and user experience.",
    featuredServiceImage: "/images/custom-online-stores.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Product Catalog Management",
        description: "Comprehensive product management systems with inventory tracking, category organization, variant management, and bulk upload capabilities for efficient product catalog administration."
      },
      {
        title: "Shopping Cart & Checkout",
        description: "Optimized shopping cart functionality with guest checkout, saved carts, multiple payment methods, shipping calculations, and secure checkout processes to maximize conversion rates."
      },
      {
        title: "Payment Gateway Integration",
        description: "Secure payment processing with multiple gateway support including credit cards, digital wallets, bank transfers, and cryptocurrency payments for global customer accessibility."
      }
    ]
  };

  // Marketplace Platforms section
  const marketplaceContent = {
    mainHeading: "Our E-commerce Development Solutions",
    introText: "We deliver professional e-commerce development services focused on online growth and customer engagement:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom Online Stores",
      "Marketplace Platforms",
      "Mobile Commerce Apps",
      "Enterprise E-commerce Solutions"
    ],
    featuredService: "Marketplace Platforms",
    featuredServiceDescription: "Multi-vendor marketplace solutions that connect buyers and sellers on a single platform. Features include vendor management, commission tracking, dispute resolution, and comprehensive admin controls.",
    featuredServiceImage: "/images/marketplace-platforms.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Vendor Management System",
        description: "Complete vendor onboarding and management tools with profile creation, product approval workflows, performance tracking, and commission management for marketplace operators."
      },
      {
        title: "Multi-Store Architecture",
        description: "Scalable multi-tenant architecture supporting unlimited vendors with separate storefronts, inventory management, order processing, and customizable branding options."
      },
      {
        title: "Revenue & Commission Tracking",
        description: "Automated commission calculation, payment splitting, financial reporting, and revenue analytics to manage marketplace earnings and vendor payouts efficiently."
      }
    ]
  };

  // Mobile Commerce Apps section
  const mobileCommerceContent = {
    mainHeading: "Our E-commerce Development Solutions",
    introText: "We deliver professional e-commerce development services focused on online growth and customer engagement:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom Online Stores",
      "Marketplace Platforms",
      "Mobile Commerce Apps",
      "Enterprise E-commerce Solutions"
    ],
    featuredService: "Mobile Commerce Apps",
    featuredServiceDescription: "Native and cross-platform mobile shopping apps with intuitive interfaces, push notifications, offline browsing, and seamless mobile payment integration for enhanced mobile shopping experiences.",
    featuredServiceImage: "/images/mobile-commerce-apps.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Mobile-First Shopping Experience",
        description: "Optimized mobile interfaces with touch-friendly navigation, product galleries, quick search, barcode scanning, and mobile-specific features designed for smartphone shoppers."
      },
      {
        title: "Push Notifications & Marketing",
        description: "Personalized push notifications for promotions, abandoned cart recovery, order updates, and targeted marketing campaigns to increase engagement and sales."
      },
      {
        title: "Mobile Payment Integration",
        description: "Seamless mobile payment options including digital wallets, one-click payments, biometric authentication, and mobile-specific payment methods for quick checkout."
      }
    ]
  };

  // Enterprise E-commerce Solutions section
  const enterpriseEcommerceContent = {
    mainHeading: "Our E-commerce Development Solutions",
    introText: "We deliver professional e-commerce development services focused on online growth and customer engagement:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom Online Stores",
      "Marketplace Platforms",
      "Mobile Commerce Apps",
      "Enterprise E-commerce Solutions"
    ],
    featuredService: "Enterprise E-commerce Solutions",
    featuredServiceDescription: "Scalable enterprise e-commerce platforms with advanced automation, multi-channel integration, and comprehensive analytics. Designed for large businesses with complex selling requirements.",
    featuredServiceImage: "/images/enterprise-ecommerce-solutions.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Multi-Channel Integration",
        description: "Unified e-commerce platform connecting online stores, social media, marketplaces, and physical stores with centralized inventory, order management, and customer data synchronization."
      },
      {
        title: "Advanced Automation",
        description: "Sophisticated automation workflows including inventory management, order processing, customer segmentation, email marketing, and business process automation to increase operational efficiency."
      },
      {
        title: "Business Intelligence & Analytics",
        description: "Comprehensive analytics dashboards with sales insights, customer behavior analysis, inventory reports, and predictive analytics to support data-driven business decisions."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What e-commerce development services do you provide?",
      answer: "We provide comprehensive e-commerce development including custom online stores, marketplace platforms, mobile commerce apps, enterprise e-commerce solutions, payment gateway integration, and third-party system integrations tailored to your business needs."
    },
    {
      question: "Can you develop custom e-commerce websites from scratch?",
      answer: "Yes, we specialize in custom e-commerce development built from the ground up. Our solutions include product catalogs, shopping carts, payment processing, order management, customer accounts, and custom features designed specifically for your business model."
    },
    {
      question: "Do you develop mobile commerce applications?",
      answer: "Absolutely. We develop native iOS and Android commerce apps as well as cross-platform mobile applications with features like offline browsing, push notifications, mobile payments, and optimized mobile shopping experiences."
    },
    {
      question: "What e-commerce platforms and technologies do you use?",
      answer: "We use modern technologies including React, Node.js, Python, PHP, Shopify, WooCommerce, Magento, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), and various payment gateways for scalable e-commerce solutions."
    },
    {
      question: "Can you integrate e-commerce sites with existing business systems?",
      answer: "Yes, we specialize in e-commerce integration with existing systems including ERP, inventory management, accounting software, CRM systems, email marketing platforms, and third-party services through APIs and custom connectors."
    },
    {
      question: "How do you ensure e-commerce security and PCI compliance?",
      answer: "We implement robust security measures including SSL certificates, secure payment processing, PCI DSS compliance, data encryption, secure authentication, and regular security audits to protect customer data and transactions."
    },
    {
      question: "What is the typical timeline for e-commerce development?",
      answer: "E-commerce development timelines vary based on complexity and features. Simple online stores take 2-4 months, while comprehensive enterprise solutions may require 4-8 months. We provide detailed project timelines during consultation."
    },
    {
      question: "Can you customize existing e-commerce platforms like Shopify or WooCommerce?",
      answer: "Yes, we provide extensive customization services for platforms like Shopify, WooCommerce, Magento, and others. This includes custom themes, plugins, integrations, and feature enhancements to match your specific business requirements."
    },
    {
      question: "Do you provide ongoing support and maintenance for e-commerce sites?",
      answer: "Absolutely. We offer comprehensive support and maintenance services including security updates, bug fixes, performance optimization, feature enhancements, backup management, and technical support to ensure your e-commerce site runs smoothly."
    },
    {
      question: "Why choose Foxbeep for e-commerce development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of e-commerce trends and customer behavior. Our experienced team delivers scalable, conversion-optimized e-commerce solutions that help businesses increase online sales and customer satisfaction."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>E-commerce Development Services | Custom Online Stores | Foxbeep</title>
        <meta name="description" content="Professional e-commerce development services including custom online stores, marketplace platforms, mobile commerce apps, and enterprise e-commerce solutions. Expert e-commerce developers." />
        <meta name="keywords" content="e-commerce development, custom online stores, marketplace platforms, mobile commerce apps, shopping cart development, enterprise e-commerce solutions, e-commerce development company, online store development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="E-commerce Development Services | Custom Online Stores" />
        <meta property="og:description" content="Custom e-commerce development including online stores, marketplace platforms, mobile commerce apps, and enterprise e-commerce systems designed to drive sales and enhance shopping experiences." />
        <meta property="og:image" content="https://foxbeep.com/ecommerce-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/ecommerce" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep E-commerce Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-commerce Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert e-commerce development for online stores, marketplaces, and mobile commerce solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/ecommerce-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="E-commerce Development" />
        <meta name="services" content="Custom Online Stores, Marketplace Platforms, Mobile Commerce Apps, Enterprise E-commerce Solutions" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/ecommerce" />
        
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
        <section aria-label="E-commerce Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="E-commerce Development Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading E-commerce Businesses">
          <BrandSlider />
        </section>
        
        {/* E-commerce Development Services Sections */}
        <section aria-label="Custom Online Stores">
          <EdtechServices {...customStoreContent} />
        </section>
        
        <section aria-label="Marketplace Platforms">
          <EdtechServices {...marketplaceContent} />
        </section>
        
        <section aria-label="Mobile Commerce Applications">
          <EdtechServices {...mobileCommerceContent} />
        </section>
        
        <section aria-label="Enterprise E-commerce Solutions">
          <EdtechServices {...enterpriseEcommerceContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="E-commerce Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our e-commerce development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with E-commerce Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}