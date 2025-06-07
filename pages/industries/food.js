import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function FoodIndustrySoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Food Technology Solutions",
    "url": "https://foxbeep.com/industries/food",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional food industry technology development services including food delivery apps, restaurant management systems, online ordering platforms, and food-tech solutions. 18+ years experience with scalable food industry development.",
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
      "name": "Food Industry Technology Development Services",
      "description": "Custom food-tech development, food delivery apps, restaurant management systems, online ordering platforms, and food industry solutions"
    },
    "expertise": [
      "Food Delivery App Development",
      "Restaurant Management Systems",
      "Online Ordering Platforms",
      "Food Inventory Management",
      "Kitchen Display Systems",
      "Food Safety Compliance Software"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Food Industry Technology Development Services",
    subtitle: "Custom food-tech solutions including food delivery apps, restaurant management systems, online ordering platforms, and kitchen automation systems designed to streamline food service operations and enhance customer experiences.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/food.jpg",
    imageAlt: "Food industry technology development and restaurant solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "FOOD-TECH DEVELOPMENT FOR MODERN RESTAURANTS",
    highlightWord: "DEVELOPMENT",
    descriptionText: "Food industry technology development revolutionizes dining through innovative digital solutions. From food delivery apps to restaurant management systems, our development expertise delivers scalable food-tech applications. We specialize in custom ordering platforms, kitchen automation systems, and integrated restaurant solutions that improve operational efficiency and customer satisfaction.",
    brandName: "Foxbeep",
    highlightColor: "bg-orange-300"
  };

  // Food Delivery Apps section
  const deliveryAppContent = {
    mainHeading: "Our Food Industry Technology Solutions",
    introText: "We deliver professional food-tech development services focused on enhancing restaurant operations and customer dining experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Delivery Applications",
      "Restaurant Management Systems",
      "Online Ordering Platforms",
      "Kitchen Display Systems"
    ],
    featuredService: "Food Delivery Applications",
    featuredServiceDescription: "Comprehensive food delivery platforms with real-time tracking, multiple payment options, restaurant dashboards, and customer management. Perfect for food delivery startups, restaurant chains, and multi-vendor marketplaces.",
    featuredServiceImage: "/images/food-delivery-apps.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Real-Time Order Tracking",
        description: "Advanced GPS tracking with live order status updates, delivery time estimation, driver location sharing, push notifications, and customer communication for transparent delivery experiences."
      },
      {
        title: "Multi-Vendor Restaurant Platform",
        description: "Scalable marketplace architecture supporting multiple restaurants, individual restaurant dashboards, commission management, menu customization, and centralized order processing for delivery aggregators."
      },
      {
        title: "Smart Delivery Management",
        description: "Intelligent delivery optimization with route planning, driver assignment algorithms, delivery zone management, performance analytics, and automated dispatch systems for efficient operations."
      }
    ]
  };

  // Restaurant Management Systems section
  const restaurantManagementContent = {
    mainHeading: "Our Food Industry Technology Solutions",
    introText: "We deliver professional food-tech development services focused on enhancing restaurant operations and customer dining experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Delivery Applications",
      "Restaurant Management Systems",
      "Online Ordering Platforms",
      "Kitchen Display Systems"
    ],
    featuredService: "Restaurant Management Systems",
    featuredServiceDescription: "Complete restaurant management platforms with POS integration, inventory management, staff scheduling, financial reporting, and customer relationship management. Designed for restaurants, cafes, and food service businesses.",
    featuredServiceImage: "/images/restaurant-management-systems.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Point of Sale Integration",
        description: "Seamless POS system integration with order processing, payment handling, receipt generation, table management, split billing, and real-time sales reporting for streamlined restaurant operations."
      },
      {
        title: "Inventory & Supply Management",
        description: "Comprehensive inventory tracking with ingredient management, automatic reorder alerts, supplier integration, cost analysis, waste tracking, and recipe costing for optimal stock control."
      },
      {
        title: "Staff & Operations Management",
        description: "Complete staff management with scheduling, time tracking, performance monitoring, role-based access, payroll integration, and operational analytics for efficient restaurant administration."
      }
    ]
  };

  // Online Ordering Platforms section
  const onlineOrderingContent = {
    mainHeading: "Our Food Industry Technology Solutions",
    introText: "We deliver professional food-tech development services focused on enhancing restaurant operations and customer dining experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Delivery Applications",
      "Restaurant Management Systems",
      "Online Ordering Platforms",
      "Kitchen Display Systems"
    ],
    featuredService: "Online Ordering Platforms",
    featuredServiceDescription: "Custom online ordering systems with menu management, customer accounts, loyalty programs, and integrated payment processing. Perfect for restaurants wanting direct customer relationships without third-party commissions.",
    featuredServiceImage: "/images/online-ordering-platforms.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Custom Menu Management",
        description: "Dynamic menu systems with item customization, seasonal offerings, pricing controls, availability management, dietary filters, and visual menu presentation for enhanced customer ordering experiences."
      },
      {
        title: "Customer Loyalty Programs",
        description: "Integrated loyalty systems with points accumulation, reward redemption, member tiers, special offers, birthday rewards, and customer retention analytics to build lasting relationships."
      },
      {
        title: "Order Fulfillment Integration",
        description: "Seamless order processing with kitchen integration, pickup/delivery scheduling, order status updates, customer notifications, and fulfillment tracking for smooth service delivery."
      }
    ]
  };

  // Kitchen Display Systems section
  const kitchenDisplayContent = {
    mainHeading: "Our Food Industry Technology Solutions",
    introText: "We deliver professional food-tech development services focused on enhancing restaurant operations and customer dining experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Food Delivery Applications",
      "Restaurant Management Systems",
      "Online Ordering Platforms",
      "Kitchen Display Systems"
    ],
    featuredService: "Kitchen Display Systems",
    featuredServiceDescription: "Digital kitchen management systems with order queuing, preparation timing, quality control, and kitchen analytics. Designed to optimize kitchen workflows and improve food preparation efficiency.",
    featuredServiceImage: "/images/kitchen-display-systems.jpg",
    highlightColor: "bg-orange-300",
    featureDetails: [
      {
        title: "Order Queue Management",
        description: "Smart order prioritization with preparation time tracking, kitchen station assignment, order sequencing, rush order handling, and real-time kitchen performance monitoring for optimal workflow."
      },
      {
        title: "Preparation Time Optimization",
        description: "Recipe timing systems with cooking duration tracking, preparation alerts, quality checkpoints, temperature monitoring, and kitchen efficiency analytics to ensure consistent food quality."
      },
      {
        title: "Kitchen Performance Analytics",
        description: "Comprehensive kitchen insights with preparation times, order accuracy, peak hour analysis, staff performance metrics, and operational reports for continuous improvement and efficiency optimization."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What food industry technology development services do you provide?",
      answer: "We provide comprehensive food-tech development including food delivery apps, restaurant management systems, online ordering platforms, kitchen display systems, inventory management, and custom food industry software tailored to your business needs."
    },
    {
      question: "Can you develop custom food delivery applications?",
      answer: "Yes, we specialize in custom food delivery app development with features like real-time tracking, multi-vendor support, payment integration, driver management, customer ratings, and restaurant dashboards for complete delivery solutions."
    },
    {
      question: "Do you develop restaurant management software?",
      answer: "Absolutely. We develop comprehensive restaurant management systems with POS integration, inventory management, staff scheduling, table management, financial reporting, and customer relationship management features."
    },
    {
      question: "What technologies do you use for food-tech development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), real-time databases, payment gateways, and GPS tracking APIs for scalable food-tech solutions."
    },
    {
      question: "Can you integrate food software with existing restaurant systems?",
      answer: "Yes, we specialize in food-tech integration with existing systems including POS systems, payment processors, accounting software, inventory management, delivery services, and third-party food platforms through APIs and custom connectors."
    },
    {
      question: "How do you ensure food safety compliance in your software?",
      answer: "We implement food safety features including temperature monitoring, HACCP compliance tracking, expiration date management, allergen information, food traceability, health inspection reporting, and regulatory compliance documentation."
    },
    {
      question: "What is the typical timeline for food-tech development projects?",
      answer: "Food-tech development timelines vary based on complexity and features. Simple ordering apps take 3-5 months, while comprehensive restaurant management or delivery platforms may require 6-12 months. We provide detailed project timelines during consultation."
    },
    {
      question: "Can you develop multi-restaurant food delivery platforms?",
      answer: "Yes, we develop scalable multi-vendor food delivery platforms with restaurant onboarding, commission management, centralized order processing, delivery logistics, payment distribution, and administrative dashboards for marketplace operators."
    },
    {
      question: "Do you provide ongoing support and maintenance for food industry software?",
      answer: "Absolutely. We offer comprehensive support and maintenance services including bug fixes, security updates, feature enhancements, performance optimization, menu updates, and technical assistance to ensure smooth restaurant operations."
    },
    {
      question: "Why choose Foxbeep for food industry technology development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of restaurant operations and food service workflows. Our experienced team delivers user-friendly, scalable food-tech solutions that improve operational efficiency and customer satisfaction."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Food Industry Technology Development Services | Food-Tech Solutions | Foxbeep</title>
        <meta name="description" content="Professional food industry technology development services including food delivery apps, restaurant management systems, online ordering platforms, and food-tech solutions. Expert food industry developers." />
        <meta name="keywords" content="food industry technology development, food-tech development, food delivery apps, restaurant management systems, online ordering platforms, kitchen display systems, POS integration, restaurant software" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Food Industry Technology Development Services | Food-Tech Solutions" />
        <meta property="og:description" content="Custom food-tech development including food delivery apps, restaurant management systems, online ordering platforms, and kitchen automation systems designed to streamline food service operations." />
        <meta property="og:image" content="https://foxbeep.com/food-tech-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/food" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Food Technology Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food Industry Technology Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert food-tech development for restaurants, food delivery, and kitchen management solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/food-tech-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Food Industry Technology Development" />
        <meta name="services" content="Food Delivery Apps, Restaurant Management Systems, Online Ordering Platforms, Kitchen Display Systems" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/food" />
        
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
        <section aria-label="Food Industry Technology Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Food-Tech Development Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Food Industry Businesses">
          <BrandSlider />
        </section>
        
        {/* Food Industry Technology Services Sections */}
        <section aria-label="Food Delivery Applications">
          <EdtechServices {...deliveryAppContent} />
        </section>
        
        <section aria-label="Restaurant Management Systems">
          <EdtechServices {...restaurantManagementContent} />
        </section>
        
        <section aria-label="Online Ordering Platforms">
          <EdtechServices {...onlineOrderingContent} />
        </section>
        
        <section aria-label="Kitchen Display Systems">
          <EdtechServices {...kitchenDisplayContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Food Industry Technology Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our food industry technology development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Food-Tech Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}