import Head from "next/head";
import TextHeroSection from "../../components/home/textHero";
import BenefitsSection from "../../components/services/BenefitsSection";
import FAQSection from "../../components/services/faqSection";
import DevProcess from "../../components/services/ProcessStep";
import ServiceCardSlider from "../../components/services/ServiceCardSlider";
import ServicesGrid from "../../components/services/ServicesGrid";
import TeamBanner from "../../components/services/shortQuickBanner";
import IndustrySlider from "../../components/services/sliderService";
import UniqueFeatures from "../../components/services/UniqueFeatures";
import ServiceBanner from "../../components/services/upperHero";

export default function AndroidAppDevelopment() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Android App Development Services",
    "description": "Professional Android app development services including native Android development, Material Design UI/UX, biometric authentication, cloud backend integration, and Play Store optimization. Expert Android developers with 18+ years experience.",
    "provider": {
      "@type": "Organization",
      "name": "Foxbeep",
      "url": "https://foxbeep.com",
      "logo": "https://foxbeep.com/logo.png",
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
      ]
    },
    "serviceType": "Android App Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Android App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Native Android Development",
            "description": "Kotlin and Java apps for optimal performance and user experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Material Design UI/UX",
            "description": "Beautiful interfaces following Google's design language standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Biometric Authentication",
            "description": "Fingerprint, face recognition, and secure login systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Backend Integration",
            "description": "Firebase, AWS, and Google Cloud Platform connectivity solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wearable Extensions",
            "description": "Companion applications for Android Wear and smartwatch devices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Play Store Optimization",
            "description": "Strategic app submission and App Store Optimization for visibility"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "72",
      "bestRating": "5"
    }
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does an Android app cost to develop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Android app development costs range from $12,000 for basic apps to $120,000+ for comprehensive applications with complex features. The final cost depends on app complexity, features, design requirements, third-party integrations, and development timeline."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an Android app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Android app development typically takes 8 to 16 weeks, depending on complexity and feature set. Simple apps may be completed in 8-10 weeks, while complex enterprise applications can take 12-16 weeks or longer."
        }
      },
      {
        "@type": "Question",
        "name": "Do you ensure compatibility across different Android devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we test Android apps on multiple screen sizes, resolutions, and Android OS versions to ensure broad compatibility across thousands of Android devices. Our testing covers various manufacturers including Samsung, Google Pixel, OnePlus, and others."
        }
      },
      {
        "@type": "Question",
        "name": "Can you update our existing Android application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can modernize legacy Android apps, add new features, improve performance, update to latest Android versions, or completely rebuild with current technologies like Kotlin and Android Jetpack components."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle Google Play Store submission and approval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we manage the entire Google Play Store submission process, including store listing optimization, compliance with Play Store policies, app metadata optimization, and handling the approval process to ensure successful app launch."
        }
      }
    ]
  };

  const serviceData = {
    title: "Android App Development Services",
    description: "We build powerful, feature-rich Android applications that reach the widest audience possible with native performance, Material Design, and seamless user experiences.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "72",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included in Our Android Development Services?",
    services: [
      { 
        title: "Native Android Development", 
        description: "High-performance Kotlin and Java applications optimized for Android ecosystem with native features and superior performance." 
      },
      { 
        title: "Material Design UI/UX", 
        description: "Beautiful, intuitive interfaces following Google's Material Design principles for consistent and engaging user experiences." 
      },
      { 
        title: "Biometric Authentication", 
        description: "Advanced security with fingerprint recognition, face unlock, and secure biometric login systems for enhanced app security." 
      },
      { 
        title: "Cloud Backend Integration", 
        description: "Seamless integration with Firebase, Amazon Web Services (AWS), and Google Cloud Platform for scalable backend solutions." 
      },
      { 
        title: "Wearable Extensions", 
        description: "Companion applications for Android Wear, smartwatches, and wearable devices to extend your app's functionality." 
      },
      { 
        title: "Play Store Optimization", 
        description: "Complete App Store Optimization (ASO) strategy, Play Store submission, and marketing optimization for maximum visibility." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "Android Applications for Every Industry",
    subtitle: "FoxBeep creates effective Android mobile solutions across all business sectors with industry-specific features and compliance.",
    industries: [
      { 
        title: "E-commerce & Retail", 
        description: "Feature-rich shopping apps with Google Pay integration, product catalogs, and personalized shopping experiences." 
      },
      { 
        title: "Finance & Banking", 
        description: "Secure financial applications with transaction management, account monitoring, and compliance with banking regulations." 
      },
      { 
        title: "Health & Fitness", 
        description: "Health tracking apps with Google Fit integration, activity monitoring, and wellness management features." 
      },
      { 
        title: "Entertainment & Media", 
        description: "Streaming platforms, interactive content apps, and media consumption applications with engaging user experiences." 
      },
      { 
        title: "Business & Productivity", 
        description: "Enterprise mobile solutions, workflow management tools, and productivity applications for business efficiency." 
      },
      { 
        title: "Social Networking", 
        description: "Community platforms with real-time messaging, social features, and user engagement capabilities." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Android App Development Process",
    description: "Our proven development methodology ensures high-quality, scalable, and user-centric Android mobile experiences that drive business results.",
    processSteps: [
      { 
        number: 1, 
        title: "Discovery & Requirements Analysis", 
        description: "Comprehensive analysis of your business goals, target audience, and technical requirements to create detailed project specifications." 
      },
      { 
        number: 2, 
        title: "UI/UX Design & Prototyping", 
        description: "Creating Material Design compliant interfaces with wireframes, mockups, and interactive prototypes for optimal user experience." 
      },
      { 
        number: 3, 
        title: "Architecture Planning & Setup", 
        description: "Establishing robust technical architecture, API design, database structure, and development environment setup." 
      },
      { 
        number: 4, 
        title: "Native Android Development", 
        description: "Expert Kotlin and Java development following clean architecture principles, modern Android development practices, and performance optimization." 
      },
      { 
        number: 5, 
        title: "Quality Assurance & Testing", 
        description: "Comprehensive testing across multiple Android devices, OS versions, automated testing, and performance optimization." 
      },
      { 
        number: 6, 
        title: "Play Store Submission & Launch", 
        description: "Complete Google Play Store submission process, App Store Optimization, and launch strategy implementation." 
      },
      { 
        number: 7, 
        title: "Maintenance & Updates", 
        description: "Ongoing technical support, feature updates, Android version compatibility, and continuous improvement based on user feedback." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does an Android app cost to develop?",
      answer: "Android app development costs range from $12,000 for basic apps to $120,000+ for comprehensive applications with complex features. The final cost depends on app complexity, features, design requirements, third-party integrations, and development timeline. We provide detailed project estimates based on your specific requirements."
    },
    {
      question: "How long does it take to develop an Android app?",
      answer: "Android app development typically takes 8 to 16 weeks, depending on complexity and feature set. Simple apps may be completed in 8-10 weeks, while complex enterprise applications can take 12-16 weeks or longer. Timeline factors include design complexity, integrations, testing requirements, and feature scope."
    },
    {
      question: "Do you ensure compatibility across different Android devices?",
      answer: "Yes, we test Android apps on multiple screen sizes, resolutions, and Android OS versions to ensure broad compatibility across thousands of Android devices. Our testing covers various manufacturers including Samsung, Google Pixel, OnePlus, Xiaomi, and others to guarantee consistent performance."
    },
    {
      question: "Can you update our existing Android application?",
      answer: "Yes, we can modernize legacy Android apps, add new features, improve performance, update to latest Android versions, or completely rebuild with current technologies like Kotlin and Android Jetpack components. We also provide migration services from older frameworks to modern Android development standards."
    },
    {
      question: "Do you handle Google Play Store submission and approval?",
      answer: "Yes, we manage the entire Google Play Store submission process, including store listing optimization, compliance with Play Store policies, app metadata optimization, screenshot creation, and handling the approval process to ensure successful app launch and maximum visibility."
    },
    {
      question: "What Android technologies and frameworks do you use?",
      answer: "We use modern Android development technologies including Kotlin (preferred), Java, Android Jetpack components, Room database, Retrofit for API integration, Firebase for backend services, Material Design components, and Android Architecture Components for maintainable and scalable applications."
    },
    {
      question: "Do you provide ongoing Android app maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, performance optimization, security updates, Android OS compatibility updates, feature enhancements, server maintenance, and continuous monitoring to ensure your app remains current and performs optimally."
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! We integrate various third-party services including payment gateways (Google Pay, PayPal, Stripe), social media APIs, mapping services (Google Maps), analytics tools (Google Analytics, Firebase Analytics), push notification services, and custom API integrations based on your business needs."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Android Development Services Excel",
    benefits: [
      "Expert Kotlin development for maximum performance, security, and code maintainability",
      "Material Design optimization for intuitive, modern user experiences that users love",
      "Multi-device compatibility across the fragmented Android ecosystem with extensive testing",
      "Performance optimization for various hardware specifications and Android versions",
      "Rigorous quality assurance testing on popular Android devices and OS versions"
    ],
    techIcons: [
      { name: "Kotlin", isDark: true },
      { name: "Java", isDark: false },
      { name: "Android Studio", isDark: true },
      { name: "Firebase", isDark: false },
      { name: "Room", isDark: true },
      { name: "Jetpack", isDark: false },
      { name: "Retrofit", isDark: true },
      { name: "Gradle", isDark: false },
      { name: "Dagger", isDark: true }
    ],
    ctaText: "Start Your Android Project"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Android App Development?",
    features: [
      {
        id: "performance",
        title: "Native Android Performance",
        content: "Pure Kotlin and Java development for optimal speed, efficiency, and seamless integration with Android ecosystem features."
      },
      {
        id: "design",
        title: "Material Design Excellence",
        content: "Beautiful, modern interfaces that follow Google's Material Design system for consistent and intuitive user experiences."
      },
      {
        id: "compatibility",
        title: "Maximum Device Compatibility",
        content: "Apps that work seamlessly across thousands of Android device types, screen sizes, and OS versions for maximum reach."
      },
      {
        id: "analytics",
        title: "User Behavior Insights",
        content: "Integrated analytics and user behavior tracking to improve app engagement, retention, and business performance."
      },
      {
        id: "security",
        title: "Enhanced Security Features",
        content: "Implementation of latest Android security features, encryption, biometric authentication, and data protection standards."
      },
      {
        id: "updates",
        title: "Future-Proof Development",
        content: "Forward-compatible code architecture and development practices for seamless updates to upcoming Android versions."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build an Android app development",
    highlightedText: "Team",
    buttonText: "Start Your Android App Project",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-green-600",
    buttonGradientFrom: "from-green-500",
    buttonGradientTo: "to-green-600",
    buttonHoverFrom: "from-green-600",
    buttonHoverTo: "to-green-700"
  };
  
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Android App Development Services | Native Android Apps | Foxbeep</title>
        <meta name="description" content="Professional Android app development services with native Kotlin/Java development, Material Design UI/UX, Play Store optimization. Expert Android developers with 4.9★ rating and 18+ years experience." />
        <meta name="keywords" content="android app development, native android development, kotlin app development, android app developers, mobile app development, android studio, material design, play store optimization, android app cost, hire android developers" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Android App Development Services | Native Android Apps | Foxbeep" />
        <meta property="og:description" content="Professional Android app development with native Kotlin/Java, Material Design, and Play Store optimization. 4.9★ rated developers with 18+ years experience." />
        <meta property="og:image" content="https://foxbeep.com/images/android-app-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/android-app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Android Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Android App Development Services | Native Android Apps" />
        <meta name="twitter:description" content="Professional Android development with Kotlin/Java, Material Design, Play Store optimization. 4.9★ rated developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/android-app-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Android App Development" />
        <meta name="expertise" content="Kotlin, Java, Android Studio, Material Design, Firebase, Play Store Optimization" />
        <meta name="rating" content="4.9/5 based on 72 reviews" />
        <meta name="experience" content="18+ Years" />
        <meta name="specialization" content="Native Android Development, Enterprise Apps, E-commerce Apps" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Mobile App Specific Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/android-app-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/android-app-development" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//play.google.com" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#4CAF50" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$12,000 - $120,000+" />
        <meta name="currency" content="USD" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="Android App Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen showcase image */}
        <section aria-label="Android App Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/android-app-dev.jpg"
              alt="Android App Development Services - Native Kotlin and Java Mobile Applications"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="Android Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="Android Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured Android Services Slider */}
        <section aria-label="Featured Android Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Consumer Android Apps",
                description: "Engaging mobile applications that connect brands with their customers through exceptional user experiences and modern Android features.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-green-500"
              },
              {
                id: 2,
                title: "Enterprise Android Solutions",
                description: "Secure, scalable business applications that streamline operations, boost productivity, and enhance enterprise mobility.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-teal-500"
              },
              {
                id: 3,
                title: "Google Ecosystem Apps",
                description: "Integrated Android experiences across smartphones, tablets, wearables, Android TV, and Google ecosystem services.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-green-700"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="green"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="Android App Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for Android Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build Android Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Industry Solutions Section */}
        <section aria-label="Android Apps for Various Industries" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="Android Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About Android App Development"
            subtitle="Get answers to common questions about our Android development services, costs, timeline, and process"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with Android App Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}