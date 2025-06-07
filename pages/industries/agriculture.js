import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function AgricultureSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Agriculture Software Solutions",
    "url": "https://foxbeep.com/industries/agriculture",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional agriculture software development services including farm management systems, precision farming apps, and agricultural technology solutions. 18+ years experience with modern farming software.",
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
      "name": "Agriculture Software Development Services",
      "description": "Custom agriculture software development, farm management systems, precision farming apps, and agricultural technology solutions"
    },
    "expertise": [
      "Agriculture Software Development",
      "Farm Management Systems",
      "Precision Farming Apps",
      "Agricultural Mobile Apps",
      "Smart Farming Solutions",
      "Agricultural Analytics"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Agriculture Software Development Services",
    subtitle: "Custom agriculture software solutions including farm management systems, precision farming apps, and agricultural technology platforms for modern farming operations.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/agriculture.jpg",
    imageAlt: "Agriculture software development and farming technology solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "AGRICULTURE SOFTWARE DEVELOPMENT FOR MODERN FARMING",
    highlightWord: "SOFTWARE",
    descriptionText: "Agriculture software development transforms farming operations through innovative digital solutions. From farm management systems to precision farming apps, our software development expertise delivers scalable agricultural applications. We specialize in custom farming software, agricultural mobile apps, and smart farming systems that improve crop yields and streamline farm operations.",
    brandName: "Foxbeep",
    highlightColor: "bg-green-300"
  };

  // Farm Management Systems section
  const farmManagementContent = {
    mainHeading: "Our Agriculture Software Solutions",
    introText: "We deliver professional agriculture software development services focused on modern farming needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Farming Apps",
      "Agricultural Mobile Apps",
      "Smart Farming Analytics"
    ],
    featuredService: "Farm Management Systems",
    featuredServiceDescription: "Custom farm management software that streamlines operations, tracks crops, manages resources, and optimizes farm productivity. Our solutions are designed for farms of all sizes with user-friendly interfaces and comprehensive features.",
    featuredServiceImage: "/images/farm-management-systems.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Crop Management Software",
        description: "Comprehensive crop tracking systems with planting schedules, growth monitoring, harvest planning, and yield analysis designed for efficient farm operations and better crop management."
      },
      {
        title: "Resource Planning Tools",
        description: "Digital resource management systems for tracking seeds, fertilizers, equipment, and labor with automated scheduling, inventory alerts, and cost optimization features."
      },
      {
        title: "Farm Operation Dashboards",
        description: "Real-time dashboards showing farm performance, weather data, task management, and operational insights with easy-to-use interfaces for farmers and farm managers."
      }
    ]
  };

  // Precision Farming Apps section
  const precisionFarmingContent = {
    mainHeading: "Our Agriculture Software Solutions",
    introText: "We deliver professional agriculture software development services focused on modern farming needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Farming Apps",
      "Agricultural Mobile Apps",
      "Smart Farming Analytics"
    ],
    featuredService: "Precision Farming Apps",
    featuredServiceDescription: "Smart precision farming applications with GPS mapping, soil analysis, weather monitoring, and data-driven farming recommendations. Our apps help farmers make informed decisions and optimize crop production.",
    featuredServiceImage: "/images/precision-farming-apps.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "GPS Field Mapping",
        description: "Accurate GPS mapping software for field boundaries, crop zones, and farm layouts with satellite imagery integration and precise location tracking for farming operations."
      },
      {
        title: "Soil Analysis Tools",
        description: "Digital soil testing and analysis applications with nutrient tracking, pH monitoring, and fertilizer recommendations based on soil conditions and crop requirements."
      },
      {
        title: "Weather Integration",
        description: "Real-time weather monitoring systems with forecasting, irrigation scheduling, and climate-based farming recommendations to optimize crop growth and resource usage."
      }
    ]
  };

  // Agricultural Mobile Apps section
  const agriculturalMobileContent = {
    mainHeading: "Our Agriculture Software Solutions",
    introText: "We deliver professional agriculture software development services focused on modern farming needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Farming Apps",
      "Agricultural Mobile Apps",
      "Smart Farming Analytics"
    ],
    featuredService: "Agricultural Mobile Apps",
    featuredServiceDescription: "Native and cross-platform agricultural mobile applications for farmers, crop advisors, and agricultural businesses. Our apps provide on-the-go access to farm data and agricultural tools.",
    featuredServiceImage: "/images/agricultural-mobile-apps.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Farmer Mobile Apps",
        description: "User-friendly mobile applications for farmers with crop tracking, weather updates, market prices, and farming tips accessible from smartphones and tablets."
      },
      {
        title: "Crop Monitoring Apps",
        description: "Mobile crop monitoring solutions with photo-based disease detection, growth tracking, and pest identification using advanced image recognition technology."
      },
      {
        title: "Agricultural Marketplace Apps",
        description: "Digital marketplace applications connecting farmers with buyers, suppliers, and agricultural services with secure transactions and logistics management."
      }
    ]
  };

  // Smart Farming Analytics section
  const smartFarmingContent = {
    mainHeading: "Our Agriculture Software Solutions",
    introText: "We deliver professional agriculture software development services focused on modern farming needs:",
    companyName: "Foxbeep",
    servicesList: [
      "Farm Management Systems",
      "Precision Farming Apps",
      "Agricultural Mobile Apps",
      "Smart Farming Analytics"
    ],
    featuredService: "Smart Farming Analytics",
    featuredServiceDescription: "Advanced agricultural analytics platforms that transform farm data into actionable insights. Our analytics solutions help farmers optimize yields, reduce costs, and make data-driven farming decisions.",
    featuredServiceImage: "/images/smart-farming-analytics.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Yield Prediction Analytics",
        description: "Predictive analytics software that forecasts crop yields based on historical data, weather patterns, and farming practices to help with harvest planning and resource allocation."
      },
      {
        title: "Farm Performance Reports",
        description: "Comprehensive reporting systems that analyze farm productivity, cost efficiency, and profitability with visual charts and actionable recommendations for improvement."
      },
      {
        title: "Data Visualization Tools",
        description: "Interactive dashboards and visualization tools that present complex agricultural data in easy-to-understand formats for better decision-making and farm management."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What agriculture software development services do you provide?",
      answer: "We provide comprehensive agriculture software development including farm management systems, precision farming apps, agricultural mobile apps, smart farming analytics, crop monitoring software, and custom agricultural solutions for modern farming operations."
    },
    {
      question: "Can you develop custom farm management software?",
      answer: "Yes, we specialize in custom farm management software development with features like crop tracking, resource planning, inventory management, financial tracking, and operational dashboards tailored to your specific farming needs."
    },
    {
      question: "Do you develop mobile apps for agriculture?",
      answer: "Absolutely. We develop native iOS and Android agricultural apps as well as cross-platform farming applications including crop monitoring apps, weather tracking, marketplace apps, and farm management tools optimized for mobile devices."
    },
    {
      question: "What technologies do you use for agriculture software development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), GPS integration, IoT connectivity, and agricultural APIs while ensuring scalability and performance."
    },
    {
      question: "Can you integrate agriculture software with existing farm equipment?",
      answer: "Yes, we can integrate agriculture software with various farm equipment including tractors, sensors, irrigation systems, and IoT devices through APIs and standard agricultural protocols for seamless data collection and automation."
    },
    {
      question: "How do you handle agricultural data security and privacy?",
      answer: "We implement robust security measures including data encryption, secure APIs, user authentication, access controls, and regular security audits to protect sensitive farm data and ensure farmer privacy and data ownership."
    },
    {
      question: "What is precision farming software and how can it help?",
      answer: "Precision farming software uses GPS, sensors, and data analytics to optimize farming practices. It helps with accurate field mapping, soil analysis, variable rate application, and data-driven decisions to improve crop yields and reduce costs."
    },
    {
      question: "Can small farms benefit from agriculture software solutions?",
      answer: "Yes, we design scalable agriculture software suitable for farms of all sizes. Our solutions offer modular features and affordable pricing models that provide value even for small farms through improved efficiency and better crop management."
    },
    {
      question: "How do you ensure agriculture software is user-friendly for farmers?",
      answer: "We design agriculture software with farmers in mind, focusing on intuitive interfaces, simple navigation, and practical features. We conduct user testing with farmers and provide training to ensure easy adoption and effective use."
    },
    {
      question: "Why choose Foxbeep for agriculture software development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of agricultural needs. Our experienced team delivers scalable, user-friendly agriculture software solutions that help farmers improve productivity and profitability."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Agriculture Software Development Services | Farm Management Apps | Foxbeep</title>
        <meta name="description" content="Professional agriculture software development services including farm management systems, precision farming apps, agricultural mobile apps, and smart farming solutions. Expert agricultural software developers." />
        <meta name="keywords" content="agriculture software development, farm management software, precision farming apps, agricultural mobile apps, farming software development, smart farming solutions, crop management software, agricultural technology" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Agriculture Software Development Services | Farm Management Apps" />
        <meta property="og:description" content="Custom agriculture software development including farm management systems, precision farming apps, and agricultural technology solutions for modern farming operations." />
        <meta property="og:image" content="https://foxbeep.com/agriculture-software-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/agriculture" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Agriculture Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agriculture Software Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert agriculture software development for farm management, precision farming, and agricultural applications." />
        <meta name="twitter:image" content="https://foxbeep.com/agriculture-software-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Agriculture Software Development" />
        <meta name="services" content="Farm Management Systems, Precision Farming Apps, Agricultural Mobile Apps, Smart Farming Analytics" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/agriculture" />
        
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
        <section aria-label="Agriculture Software Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Agriculture Software Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Agricultural Organizations">
          <BrandSlider />
        </section>
        
        {/* Agriculture Software Services Sections */}
        <section aria-label="Farm Management Systems">
          <EdtechServices {...farmManagementContent} />
        </section>
        
        <section aria-label="Precision Farming Apps">
          <EdtechServices {...precisionFarmingContent} />
        </section>
        
        <section aria-label="Agricultural Mobile Apps">
          <EdtechServices {...agriculturalMobileContent} />
        </section>
        
        <section aria-label="Smart Farming Analytics">
          <EdtechServices {...smartFarmingContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Agriculture Software Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our agriculture software development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Agriculture Software Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}