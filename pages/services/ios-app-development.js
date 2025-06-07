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

export default function IOSAppDevelopment() {
  // Structured Data for iOS App Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "iOS App Development Services",
    "description": "Professional iOS app development services including native iPhone and iPad applications, Swift development, SwiftUI design, App Store optimization, Apple Watch apps, and iOS mobile solutions. Expert iOS developers with 4.9★ rating and proven success in creating high-performance mobile applications.",
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
    "serviceType": "iOS App Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "iOS App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Native iOS App Development",
            "description": "Custom iPhone and iPad applications built with Swift and SwiftUI for optimal performance and user experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SwiftUI Interface Design",
            "description": "Modern, responsive user interfaces following Apple Human Interface Guidelines with native iOS components"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apple Watch App Development",
            "description": "Companion watchOS applications with health tracking, notifications, and seamless iPhone integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Store Optimization & Submission",
            "description": "Complete App Store submission process including ASO, metadata optimization, and approval management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iOS Enterprise App Development",
            "description": "Business and enterprise iOS applications with advanced security, scalability, and integration capabilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iOS App Maintenance & Updates",
            "description": "Ongoing iOS app support, bug fixes, feature updates, and iOS version compatibility maintenance"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "72",
      "bestRating": "5"
    },
    "priceRange": "$15,000 - $150,000+"
  };

  // FAQ structured data for iOS app development
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does iOS app development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iOS app development costs range from $15,000 for basic iPhone apps to $150,000+ for comprehensive applications with complex features. Pricing depends on app complexity, custom features, backend integration, design requirements, Apple Watch compatibility, and ongoing maintenance needs. We provide detailed project estimates based on your specific iOS app requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an iOS app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iOS app development typically takes 8 to 16 weeks depending on complexity and feature set. Simple apps with basic functionality require 8-10 weeks, while complex applications with advanced features, backend integration, and Apple ecosystem connectivity may take 12-16 weeks. Timeline includes design, development, testing, and App Store submission."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide both iPhone and iPad versions of the app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we develop universal iOS apps that work seamlessly across all Apple devices including iPhone, iPad, and iPad Pro with adaptive layouts. Our applications automatically adjust to different screen sizes and orientations, providing optimal user experiences on all iOS devices with consistent functionality and design."
        }
      },
      {
        "@type": "Question",
        "name": "Can you update our existing iOS application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We can modernize legacy iOS apps, add new features, improve performance, update to latest iOS versions, integrate new Apple technologies like SwiftUI, and completely rebuild applications with current Swift standards and modern iOS development practices."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle App Store submission and approval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we manage the complete App Store submission process including app store listing optimization, metadata creation, screenshot design, compliance with Apple guidelines, submission handling, and ongoing app store management to ensure successful approval and visibility."
        }
      }
    ]
  };

  const serviceData = {
    title: "iOS App Development Services",
    description: "We build high-performance, user-friendly iOS applications that deliver exceptional mobile experiences across iPhone, iPad, and Apple Watch platforms with native Swift development and cutting-edge design.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "72",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "Comprehensive iOS App Development Services",
    services: [
      { 
        title: "Native iOS Development with Swift & SwiftUI", 
        description: "Pure Swift and SwiftUI applications optimized for maximum performance, security, and seamless integration with iOS ecosystem features and Apple's latest technologies." 
      },
      { 
        title: "Universal iPhone & iPad App Design", 
        description: "Responsive, adaptive interfaces that deliver exceptional user experiences across all Apple devices with size-class optimization and device-specific functionality." 
      },
      { 
        title: "Advanced iOS Security & Authentication", 
        description: "Biometric authentication with Face ID and Touch ID, encrypted data storage, secure networking, and comprehensive privacy protection following Apple's security guidelines." 
      },
      { 
        title: "Cloud Integration & Backend Services", 
        description: "iCloud, Firebase, AWS, and custom API connectivity for real-time data synchronization, cloud storage, push notifications, and scalable backend infrastructure." 
      },
      { 
        title: "Apple Watch & wearOS Development", 
        description: "Companion watchOS applications with health tracking, fitness integration, notification management, and seamless synchronization with iPhone applications." 
      },
      { 
        title: "App Store Optimization & Marketing", 
        description: "Strategic App Store submission, ASO optimization, keyword research, compelling app descriptions, and marketing strategies for maximum visibility and downloads." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "iOS Applications for Every Industry & Business Sector",
    subtitle: "Foxbeep creates powerful, industry-specific iOS solutions that drive business growth and enhance user engagement across diverse market segments.",
    industries: [
      { 
        title: "E-commerce & Retail Mobile Apps", 
        description: "Feature-rich shopping applications with Apple Pay integration, product catalogs, inventory management, order tracking, customer reviews, and seamless checkout experiences." 
      },
      { 
        title: "Finance & Banking iOS Solutions", 
        description: "Secure financial applications with advanced encryption, transaction management, account monitoring, investment tracking, budget tools, and compliance with financial regulations." 
      },
      { 
        title: "Health & Fitness Applications", 
        description: "HealthKit integration, activity tracking, wellness monitoring, workout planning, nutrition tracking, telemedicine features, and comprehensive health data management." 
      },
      { 
        title: "Entertainment & Media Platforms", 
        description: "Streaming applications, content management, social features, offline viewing, subscription management, and immersive media experiences with AV capabilities." 
      },
      { 
        title: "Business & Productivity Tools", 
        description: "Enterprise applications for project management, team collaboration, document sharing, workflow automation, CRM integration, and business process optimization." 
      },
      { 
        title: "Social Networking & Communication", 
        description: "Community platforms with real-time messaging, video calling, content sharing, social features, user profiles, and engagement tools for modern social experiences." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Proven iOS App Development Methodology",
    description: "We follow Apple's best practices and industry standards to deliver high-quality, scalable, and user-centric iOS applications that exceed expectations and achieve business objectives.",
    processSteps: [
      { 
        number: 1, 
        title: "Project Discovery & iOS Strategy Planning", 
        description: "Comprehensive analysis of business requirements, target audience research, competitive analysis, iOS market research, and strategic planning for optimal app positioning and success." 
      },
      { 
        number: 2, 
        title: "User Experience Design & Interface Planning", 
        description: "Creating Apple Human Interface Guidelines-compliant designs, user journey mapping, wireframing, prototyping, and accessibility-focused design for exceptional user experiences." 
      },
      { 
        number: 3, 
        title: "iOS Architecture & Technical Planning", 
        description: "Establishing robust technical foundation, API design, database architecture, security implementation, third-party integration planning, and scalability considerations." 
      },
      { 
        number: 4, 
        title: "Swift Development & Feature Implementation", 
        description: "Native Swift and SwiftUI development following clean architecture principles, modular code structure, performance optimization, and integration of iOS-specific features." 
      },
      { 
        number: 5, 
        title: "Comprehensive Quality Assurance & Testing", 
        description: "Extensive testing across all Apple devices, iOS versions, automated testing, performance optimization, security validation, and user acceptance testing protocols." 
      },
      { 
        number: 6, 
        title: "App Store Submission & Launch Management", 
        description: "Complete App Store submission process, compliance verification, metadata optimization, launch strategy execution, and post-launch monitoring and optimization." 
      },
      { 
        number: 7, 
        title: "Ongoing Maintenance & iOS Updates", 
        description: "Continuous app maintenance, iOS version compatibility updates, feature enhancements, performance monitoring, security updates, and long-term support services." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does iOS app development cost?",
      answer: "iOS app development costs range from $15,000 for basic iPhone applications to $150,000+ for comprehensive apps with complex features and integrations. Key pricing factors include app complexity, custom features, backend development, design requirements, third-party integrations, Apple Watch compatibility, and ongoing maintenance needs. We provide detailed project estimates based on your specific requirements, timeline, and business objectives."
    },
    {
      question: "How long does it take to develop an iOS app?",
      answer: "iOS app development typically takes 8 to 16 weeks depending on project complexity and feature requirements. Simple applications with basic functionality can be completed in 8-10 weeks, while complex apps with advanced features, backend integration, and multiple Apple device compatibility may require 12-16 weeks. Our timeline includes discovery, design, development, testing, and App Store submission phases."
    },
    {
      question: "Do you provide both iPhone and iPad versions of the app?",
      answer: "Yes, we develop universal iOS applications that work seamlessly across all Apple devices including iPhone, iPad, and iPad Pro. Our apps feature adaptive layouts that automatically adjust to different screen sizes, orientations, and device capabilities while maintaining consistent functionality and exceptional user experiences across the entire Apple ecosystem."
    },
    {
      question: "Can you update our existing iOS application?",
      answer: "Absolutely! We provide comprehensive iOS app modernization services including legacy app updates, new feature additions, performance improvements, iOS version compatibility updates, Swift migration, SwiftUI integration, security enhancements, and complete app rebuilds using current iOS development standards and Apple's latest technologies."
    },
    {
      question: "Do you handle App Store submission and approval?",
      answer: "Yes, we manage the complete App Store submission process including compliance with Apple's guidelines, metadata optimization, app description creation, screenshot design, keyword optimization, submission handling, approval process management, and ongoing App Store optimization to maximize visibility and downloads."
    },
    {
      question: "What iOS technologies and frameworks do you use?",
      answer: "We utilize the latest iOS technologies including Swift 5.9+, SwiftUI, UIKit, Core Data, CloudKit, ARKit, Core ML, HealthKit, HomeKit, WatchKit, Combine framework, Core Animation, Metal framework, and other Apple-native technologies to create cutting-edge iOS applications with optimal performance and functionality."
    },
    {
      question: "Can you integrate Apple Pay and other Apple services?",
      answer: "Yes, we provide comprehensive Apple ecosystem integration including Apple Pay for secure payments, iCloud for data synchronization, Siri integration for voice commands, Apple Sign-In for authentication, HealthKit for health data, HomeKit for smart home integration, and other Apple services for enhanced functionality."
    },
    {
      question: "Do you develop Apple Watch companion apps?",
      answer: "Absolutely! We develop sophisticated Apple Watch applications and companion apps with health tracking, fitness monitoring, notification management, quick actions, complications, independent app functionality, and seamless synchronization with iPhone applications for comprehensive wearable experiences."
    }
  ];
  
  const benefitsData = {
    title: "Why Our iOS Development Services Excel in the Mobile App Industry",
    benefits: [
      "Expert Swift and SwiftUI development ensuring maximum performance, security, and seamless integration with Apple's ecosystem and latest iOS technologies",
      "Apple platform-specific optimizations including Core Data, CloudKit, ARKit, and Metal framework integration for enhanced functionality and user experience",
      "Universal app development creating seamless multi-device experiences across iPhone, iPad, Apple Watch, and Apple TV with adaptive design principles",
      "Human Interface Guidelines compliance ensuring intuitive, accessible interfaces that feel native to iOS users and meet Apple's quality standards",
      "Comprehensive quality assurance with rigorous testing across all current iOS versions, devices, and usage scenarios for reliable app performance"
    ],
    techIcons: [
      { name: "Swift", isDark: true },
      { name: "SwiftUI", isDark: false },
      { name: "Xcode", isDark: true },
      { name: "Firebase", isDark: false },
      { name: "CoreData", isDark: true },
      { name: "ARKit", isDark: false },
      { name: "CloudKit", isDark: true },
      { name: "CocoaPods", isDark: false },
      { name: "Alamofire", isDark: true }
    ],
    ctaText: "Build Your iOS Application Today"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for iOS App Development?",
    features: [
      {
        id: "performance",
        title: "Native iOS Performance Excellence",
        content: "Pure Swift development with advanced optimization techniques, efficient memory management, smooth animations, and lightning-fast performance that leverages the full potential of Apple's hardware and software integration for superior user experiences."
      },
      {
        id: "design",
        title: "Apple Design Standards Mastery",
        content: "Beautiful, intuitive interfaces that strictly follow Apple Human Interface Guidelines, incorporating native iOS components, gesture recognition, accessibility features, and design patterns that feel natural and familiar to iOS users."
      },
      {
        id: "ecosystem",
        title: "Complete Apple Ecosystem Integration",
        content: "Seamless connectivity with all Apple devices and services including iCloud synchronization, Handoff continuity, AirDrop sharing, Siri integration, Apple Pay implementation, and cross-device functionality for unified user experiences."
      },
      {
        id: "analytics",
        title: "Advanced User Analytics & Insights",
        content: "Comprehensive analytics implementation with App Store Connect integration, custom event tracking, user behavior analysis, performance monitoring, crash reporting, and actionable insights for data-driven app optimization and growth."
      },
      {
        id: "security",
        title: "Enterprise-Grade iOS Security",
        content: "Implementation of Apple's latest security features including Face ID and Touch ID authentication, Keychain services, data encryption, secure networking, app transport security, and privacy-focused development practices."
      },
      {
        id: "updates",
        title: "Future-Proof Development Approach",
        content: "Forward-compatible code architecture, regular iOS version updates, new feature integration, backward compatibility maintenance, and proactive adaptation to Apple's evolving technologies and development standards."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build an iOS App Development",
    highlightedText: "Team",
    buttonText: "Start Your iOS Project Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-600",
    buttonGradientFrom: "from-blue-500",
    buttonGradientTo: "to-blue-600",
    buttonHoverFrom: "from-blue-600",
    buttonHoverTo: "to-blue-700"
  };
  
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>iOS App Development Services | iPhone App Development | Swift Developers | Foxbeep</title>
        <meta name="description" content="Professional iOS app development services including native iPhone and iPad applications, SwiftUI design, Apple Watch apps, App Store optimization, and iOS mobile solutions. 4.9★ rated Swift developers with proven success in creating high-performance iOS applications." />
        <meta name="keywords" content="iOS app development, iPhone app development, iPad app development, Swift developers, SwiftUI design, iOS mobile app development, Apple Watch app development, native iOS apps, App Store optimization, iOS app design, iPhone application development, iOS development services, mobile app development iOS" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="iOS App Development Services | Native iPhone & iPad App Development | Foxbeep" />
        <meta property="og:description" content="Expert iOS app development with native Swift programming, SwiftUI design, and Apple ecosystem integration. 4.9★ rated iOS developers creating high-performance iPhone and iPad applications." />
        <meta property="og:image" content="https://foxbeep.com/images/ios-app-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/ios-app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep iOS App Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="iOS App Development | Swift & SwiftUI Mobile Applications" />
        <meta name="twitter:description" content="Professional iOS app development services with native Swift programming and Apple ecosystem integration. 4.9★ rated iOS developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/ios-app-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="iOS App Development" />
        <meta name="expertise" content="Swift Development, SwiftUI Design, iPhone Apps, iPad Apps, Apple Watch Apps" />
        <meta name="rating" content="4.9/5 based on 72 reviews" />
        <meta name="specialization" content="Native iOS Development, App Store Optimization, Apple Ecosystem Integration" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* iOS Development Meta Tags */}
        <meta name="ios-technologies" content="Swift, SwiftUI, UIKit, Core Data, CloudKit, ARKit, Core ML, HealthKit" />
        <meta name="apple-platforms" content="iPhone, iPad, Apple Watch, Apple TV, macOS" />
        <meta name="development-tools" content="Xcode, TestFlight, App Store Connect, Firebase, CocoaPods" />
        
        {/* Apple Integration Meta Tags */}
        <meta name="apple-services" content="Apple Pay, iCloud, Siri, Face ID, Touch ID, HealthKit, HomeKit" />
        <meta name="app-store" content="App Store Optimization, ASO, App Store Guidelines, App Submission" />
        <meta name="ios-versions" content="iOS 15+, iOS 16, iOS 17, Latest iOS Support" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/ios-app-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/ios-app-development" />
        
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
        <link rel="dns-prefetch" href="//developer.apple.com" />
        <link rel="dns-prefetch" href="//appstoreconnect.apple.com" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#2563EB" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$15,000 - $150,000+" />
        <meta name="currency" content="USD" />
        
        {/* iOS Development Meta Tags */}
        <meta name="development-time" content="8-16 weeks" />
        <meta name="technologies" content="Swift, SwiftUI, Xcode, Firebase, Core Data, ARKit, CloudKit" />
        <meta name="platforms" content="iPhone, iPad, Apple Watch, Universal iOS Apps" />
        <meta name="support" content="App Store Submission, Ongoing Maintenance, iOS Updates" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="iOS App Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen iOS development showcase image */}
        <section aria-label="iOS App Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/ios-development.jpg"
              alt="iOS App Development Services - Native iPhone and iPad Application Development with Swift and SwiftUI"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="iOS App Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="iOS Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured iOS Services Slider */}
        <section aria-label="Featured iOS App Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Consumer iOS Applications",
                description: "Engaging iPhone and iPad applications that connect brands with their customers through exceptional mobile experiences, featuring intuitive design, smooth performance, and Apple ecosystem integration.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-500"
              },
              {
                id: 2,
                title: "Enterprise iOS Solutions",
                description: "Secure, scalable business applications that streamline operations, boost productivity, and enable mobile workforce management with advanced security features and enterprise integrations.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-teal-500"
              },
              {
                id: 3,
                title: "Apple Ecosystem Applications",
                description: "Integrated experiences across iPhone, iPad, Apple Watch, and Apple TV with universal design, seamless data synchronization, and continuity features for comprehensive Apple ecosystem integration.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-indigo-500"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="blue"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="iOS App Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for iOS App Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build iOS App Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* iOS Industry Solutions Section */}
        <section aria-label="iOS Applications for Every Industry" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="iOS App Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About iOS App Development"
            subtitle="Get comprehensive answers about our iOS app development services, Swift programming, iPhone and iPad development process, App Store submission, and Apple ecosystem integration"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />     
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with iOS App Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}