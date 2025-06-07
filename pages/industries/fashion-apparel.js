import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function FashionSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Fashion Technology Solutions",
    "url": "https://foxbeep.com/industries/fashion-apparel",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional fashion technology development services including fashion e-commerce platforms, virtual try-on solutions, inventory management systems, and fashion mobile apps. 18+ years experience with fashion industry software.",
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
      "name": "Fashion Technology Development Services",
      "description": "Custom fashion e-commerce development, virtual try-on solutions, inventory management systems, fashion mobile apps, and retail technology solutions"
    },
    "expertise": [
      "Fashion E-commerce Development",
      "Virtual Try-On Solutions",
      "Fashion Inventory Management",
      "Fashion Mobile Apps",
      "Retail Technology Solutions",
      "Fashion Brand Websites"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Fashion Technology Development Services",
    subtitle: "Custom fashion technology solutions including e-commerce platforms, virtual try-on experiences, inventory management systems, and fashion mobile apps designed to elevate fashion brands and enhance customer shopping experiences.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/fashion-apparel.jpg",
    imageAlt: "Fashion technology development and retail solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "FASHION TECHNOLOGY FOR MODERN RETAIL",
    highlightWord: "TECHNOLOGY",
    descriptionText: "Fashion technology development transforms retail experiences through innovative digital solutions. From virtual try-on platforms to smart inventory systems, our development expertise delivers cutting-edge fashion applications. We specialize in custom fashion e-commerce, AR/VR solutions, and integrated retail systems that boost sales and enhance customer engagement.",
    brandName: "Foxbeep",
    highlightColor: "bg-pink-300"
  };

  // Fashion E-commerce Platforms section
  const fashionEcommerceContent = {
    mainHeading: "Our Fashion Technology Solutions",
    introText: "We deliver professional fashion technology development services focused on enhancing retail experiences and brand growth:",
    companyName: "Foxbeep",
    servicesList: [
      "Fashion E-commerce Platforms",
      "Virtual Try-On Solutions",
      "Fashion Inventory Management",
      "Fashion Mobile Apps"
    ],
    featuredService: "Fashion E-commerce Platforms",
    featuredServiceDescription: "Sophisticated fashion e-commerce platforms with visual product displays, size guides, style recommendations, and seamless shopping experiences. Designed specifically for fashion brands, retailers, and designers.",
    featuredServiceImage: "/images/fashion-ecommerce-platforms.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "Visual Product Showcase",
        description: "High-resolution image galleries with zoom functionality, 360-degree product views, color variants, multiple angles, and lifestyle photography integration for compelling fashion product presentation."
      },
      {
        title: "Size & Fit Solutions",
        description: "Advanced size guide systems with fit calculators, size recommendations, measurement tools, and customer reviews integration to reduce returns and improve customer satisfaction."
      },
      {
        title: "Style Recommendation Engine",
        description: "AI-powered style suggestions with personalized recommendations, outfit combinations, trend analysis, and customer preference learning for enhanced shopping experiences and increased sales."
      }
    ]
  };

  // Virtual Try-On Solutions section
  const virtualTryOnContent = {
    mainHeading: "Our Fashion Technology Solutions",
    introText: "We deliver professional fashion technology development services focused on enhancing retail experiences and brand growth:",
    companyName: "Foxbeep",
    servicesList: [
      "Fashion E-commerce Platforms",
      "Virtual Try-On Solutions",
      "Fashion Inventory Management",
      "Fashion Mobile Apps"
    ],
    featuredService: "Virtual Try-On Solutions",
    featuredServiceDescription: "Cutting-edge AR/VR virtual try-on experiences that allow customers to visualize clothing, accessories, and makeup digitally. Reduces returns and increases customer confidence in online purchases.",
    featuredServiceImage: "/images/virtual-try-on-solutions.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "AR Clothing Visualization",
        description: "Augmented reality technology enabling customers to see how clothing fits and looks on their body using smartphone cameras, with realistic fabric rendering and movement simulation."
      },
      {
        title: "Virtual Fitting Rooms",
        description: "Interactive virtual fitting room experiences with body scanning, size matching, outfit mixing, and sharing capabilities for immersive online shopping experiences."
      },
      {
        title: "Makeup & Accessory Try-On",
        description: "Real-time makeup application and accessory placement using facial recognition technology, color matching, and lighting adjustments for accurate virtual beauty experiences."
      }
    ]
  };

  // Fashion Inventory Management section
  const inventoryManagementContent = {
    mainHeading: "Our Fashion Technology Solutions",
    introText: "We deliver professional fashion technology development services focused on enhancing retail experiences and brand growth:",
    companyName: "Foxbeep",
    servicesList: [
      "Fashion E-commerce Platforms",
      "Virtual Try-On Solutions",
      "Fashion Inventory Management",
      "Fashion Mobile Apps"
    ],
    featuredService: "Fashion Inventory Management",
    featuredServiceDescription: "Comprehensive inventory management systems designed for fashion retailers with size/color variants, seasonal tracking, trend analysis, and multi-location support for efficient fashion business operations.",
    featuredServiceImage: "/images/fashion-inventory-management.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "Multi-Variant Product Tracking",
        description: "Advanced inventory tracking for fashion products with size, color, style variants, SKU management, barcode scanning, and real-time stock level monitoring across all channels."
      },
      {
        title: "Seasonal Collection Management",
        description: "Specialized tools for managing fashion seasons, collection launches, trend forecasting, markdown planning, and seasonal inventory optimization to maximize profitability."
      },
      {
        title: "Supply Chain Integration",
        description: "Seamless integration with suppliers, manufacturers, and distributors with automated reordering, lead time tracking, and quality control workflows for efficient fashion supply chain management."
      }
    ]
  };

  // Fashion Mobile Apps section
  const fashionMobileContent = {
    mainHeading: "Our Fashion Technology Solutions",
    introText: "We deliver professional fashion technology development services focused on enhancing retail experiences and brand growth:",
    companyName: "Foxbeep",
    servicesList: [
      "Fashion E-commerce Platforms",
      "Virtual Try-On Solutions",
      "Fashion Inventory Management",
      "Fashion Mobile Apps"
    ],
    featuredService: "Fashion Mobile Apps",
    featuredServiceDescription: "Native and cross-platform fashion mobile applications with personalized shopping experiences, style discovery, social features, and seamless mobile commerce for fashion-forward customers.",
    featuredServiceImage: "/images/fashion-mobile-apps.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "Personal Style Discovery",
        description: "AI-powered style profiling with preference learning, trend discovery, personalized feeds, and style inspiration features to help customers discover their unique fashion sense."
      },
      {
        title: "Social Fashion Features",
        description: "Social networking capabilities with outfit sharing, style ratings, fashion challenges, influencer integration, and community features to create engaging fashion experiences."
      },
      {
        title: "Mobile Shopping Optimization",
        description: "Mobile-first shopping experiences with swipe navigation, quick checkout, wishlist management, push notifications, and offline browsing for seamless mobile fashion commerce."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What fashion technology development services do you provide?",
      answer: "We provide comprehensive fashion technology development including fashion e-commerce platforms, virtual try-on solutions, inventory management systems, fashion mobile apps, brand websites, and custom retail technology solutions tailored to fashion businesses."
    },
    {
      question: "Can you develop custom fashion e-commerce websites?",
      answer: "Yes, we specialize in custom fashion e-commerce development with features like visual product showcases, size guides, style recommendations, customer reviews, and fashion-specific checkout processes designed for clothing and accessory retailers."
    },
    {
      question: "Do you develop virtual try-on and AR solutions for fashion?",
      answer: "Absolutely. We develop advanced AR/VR virtual try-on solutions including clothing visualization, virtual fitting rooms, makeup try-on, and accessory placement using cutting-edge augmented reality technology."
    },
    {
      question: "What technologies do you use for fashion app development?",
      answer: "We use modern technologies including React, Node.js, Python, AR/VR frameworks, AI/ML for recommendations, mobile frameworks (React Native, Flutter), cloud platforms (AWS, Azure), and fashion-specific APIs for comprehensive solutions."
    },
    {
      question: "Can you integrate fashion software with existing retail systems?",
      answer: "Yes, we specialize in fashion retail integration with existing systems including POS systems, inventory management, accounting software, CRM platforms, and third-party fashion services through APIs and custom connectors."
    },
    {
      question: "How do you handle fashion inventory management with multiple variants?",
      answer: "We develop sophisticated inventory systems specifically for fashion with multi-variant tracking (size, color, style), SKU management, seasonal collection handling, and real-time stock monitoring across all sales channels."
    },
    {
      question: "What is the typical timeline for fashion technology development?",
      answer: "Fashion technology development timelines vary based on complexity. Simple fashion websites take 2-4 months, while comprehensive e-commerce platforms with AR features may require 4-8 months. We provide detailed timelines during consultation."
    },
    {
      question: "Can you customize existing fashion platforms like Shopify or WooCommerce?",
      answer: "Yes, we provide extensive customization for fashion-focused platforms including custom themes, fashion-specific plugins, size chart integrations, and specialized features for clothing and accessory businesses."
    },
    {
      question: "Do you provide ongoing support for fashion technology solutions?",
      answer: "Absolutely. We offer comprehensive support including seasonal updates, new feature development, performance optimization, security updates, and technical support to keep your fashion technology running smoothly."
    },
    {
      question: "Why choose Foxbeep for fashion technology development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of fashion industry needs and customer behavior. Our team delivers innovative, visually stunning fashion technology solutions that enhance brand presence and drive sales."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Fashion Technology Development Services | Fashion E-commerce | Foxbeep</title>
        <meta name="description" content="Professional fashion technology development services including fashion e-commerce platforms, virtual try-on solutions, inventory management systems, and fashion mobile apps. Expert fashion developers." />
        <meta name="keywords" content="fashion technology development, fashion e-commerce, virtual try-on solutions, fashion mobile apps, fashion inventory management, retail technology, fashion website development, AR fashion solutions" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Fashion Technology Development Services | Fashion E-commerce" />
        <meta property="og:description" content="Custom fashion technology development including e-commerce platforms, virtual try-on experiences, inventory management, and fashion mobile apps designed for modern retail." />
        <meta property="og:image" content="https://foxbeep.com/fashion-technology-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/fashion-apparel" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Fashion Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fashion Technology Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert fashion technology development for e-commerce, virtual try-on, and retail solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/fashion-technology-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Fashion Technology Development" />
        <meta name="services" content="Fashion E-commerce Platforms, Virtual Try-On Solutions, Fashion Inventory Management, Fashion Mobile Apps" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/fashion-apparel" />
        
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
        <section aria-label="Fashion Technology Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Fashion Technology Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Fashion Brands">
          <BrandSlider />
        </section>
        
        {/* Fashion Technology Services Sections */}
        <section aria-label="Fashion E-commerce Platforms">
          <EdtechServices {...fashionEcommerceContent} />
        </section>
        
        <section aria-label="Virtual Try-On Solutions">
          <EdtechServices {...virtualTryOnContent} />
        </section>
        
        <section aria-label="Fashion Inventory Management">
          <EdtechServices {...inventoryManagementContent} />
        </section>
        
        <section aria-label="Fashion Mobile Applications">
          <EdtechServices {...fashionMobileContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Fashion Technology Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our fashion technology development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Fashion Technology Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}