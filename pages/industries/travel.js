import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function TravelIndustrySoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Travel Technology Solutions",
    "url": "https://foxbeep.com/industries/travel",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional travel industry technology development services including booking systems, travel management platforms, hotel reservation software, and tourism technology solutions. 18+ years experience with travel technology development.",
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
      "name": "Travel Industry Technology Development Services",
      "description": "Custom travel technology development, booking systems, travel management platforms, hotel reservation software, and tourism technology solutions"
    },
    "expertise": [
      "Online Booking Systems",
      "Travel Management Platforms",
      "Hotel Reservation Software",
      "Tourism Mobile Applications",
      "Travel CRM Systems",
      "Tour Package Management"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Travel Industry Technology Development Services",
    subtitle: "Custom travel technology solutions including online booking systems, travel management platforms, hotel reservation software, and tourism mobile applications designed to enhance travel experiences and streamline travel operations.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/travel.png",
    imageAlt: "Travel industry technology development and tourism solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "TRAVEL TECHNOLOGY DEVELOPMENT FOR MODERN TOURISM",
    highlightWord: "DEVELOPMENT",
    descriptionText: "Travel industry technology development revolutionizes tourism operations through innovative digital solutions. From online booking systems to mobile travel applications, our development expertise delivers scalable travel technology platforms. We specialize in custom hotel reservation systems, travel management platforms, and integrated tourism solutions that enhance customer experiences and increase booking conversions.",
    brandName: "Foxbeep",
    highlightColor: "bg-purple-300"
  };

  // Online Booking Systems section
  const bookingSystemsContent = {
    mainHeading: "Our Travel Industry Technology Solutions",
    introText: "We deliver professional travel technology development services focused on enhancing travel experiences and tourism operations:",
    companyName: "Foxbeep",
    servicesList: [
      "Online Booking Systems",
      "Travel Management Platforms",
      "Hotel Reservation Software",
      "Tourism Mobile Applications"
    ],
    featuredService: "Online Booking Systems",
    featuredServiceDescription: "Comprehensive booking platforms with flight reservations, hotel bookings, tour packages, payment processing, and multi-language support. Designed for travel agencies, tour operators, and online travel companies.",
    featuredServiceImage: "/images/online-booking-systems.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Multi-Service Booking Platform",
        description: "Integrated booking system with flight reservations, hotel bookings, car rentals, tour packages, activity bookings, and travel insurance options with real-time availability and instant confirmation capabilities."
      },
      {
        title: "Payment & Pricing Management",
        description: "Secure payment processing with multiple payment gateways, dynamic pricing algorithms, discount management, promotional codes, multi-currency support, and automated billing for seamless transactions."
      },
      {
        title: "Inventory & Availability Management",
        description: "Real-time inventory control with availability tracking, booking calendars, capacity management, overbooking protection, and automated inventory updates for accurate booking management."
      }
    ]
  };

  // Travel Management Platforms section
  const travelManagementContent = {
    mainHeading: "Our Travel Industry Technology Solutions",
    introText: "We deliver professional travel technology development services focused on enhancing travel experiences and tourism operations:",
    companyName: "Foxbeep",
    servicesList: [
      "Online Booking Systems",
      "Travel Management Platforms",
      "Hotel Reservation Software",
      "Tourism Mobile Applications"
    ],
    featuredService: "Travel Management Platforms",
    featuredServiceDescription: "Complete travel management solutions with itinerary planning, customer management, booking administration, financial reporting, and travel analytics. Perfect for travel agencies, corporate travel managers, and tour operators.",
    featuredServiceImage: "/images/travel-management-platforms.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Itinerary & Trip Planning",
        description: "Advanced trip planning tools with custom itinerary creation, destination management, activity scheduling, travel timeline management, and collaborative planning features for personalized travel experiences."
      },
      {
        title: "Customer Relationship Management",
        description: "Comprehensive CRM system with customer profiles, booking history, preferences tracking, communication management, loyalty programs, and personalized travel recommendations for enhanced customer service."
      },
      {
        title: "Business Analytics & Reporting",
        description: "Travel business intelligence with booking analytics, revenue reporting, customer insights, market trends analysis, performance dashboards, and financial management for data-driven travel business decisions."
      }
    ]
  };

  // Hotel Reservation Software section
  const hotelReservationContent = {
    mainHeading: "Our Travel Industry Technology Solutions",
    introText: "We deliver professional travel technology development services focused on enhancing travel experiences and tourism operations:",
    companyName: "Foxbeep",
    servicesList: [
      "Online Booking Systems",
      "Travel Management Platforms",
      "Hotel Reservation Software",
      "Tourism Mobile Applications"
    ],
    featuredService: "Hotel Reservation Software",
    featuredServiceDescription: "Advanced hotel management systems with room reservations, property management, channel management, guest services, and revenue optimization. Designed for hotels, resorts, and hospitality businesses.",
    featuredServiceImage: "/images/hotel-reservation-software.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Room & Reservation Management",
        description: "Complete reservation system with room availability, booking management, check-in/check-out processes, guest registration, room assignment, and housekeeping coordination for efficient hotel operations."
      },
      {
        title: "Channel & Distribution Management",
        description: "Multi-channel distribution with OTA integrations (Booking.com, Expedia), channel manager connectivity, rate synchronization, inventory distribution, and booking consolidation from multiple sources."
      },
      {
        title: "Guest Services & Experience",
        description: "Enhanced guest experience with online check-in, digital concierge services, room service management, guest communication, feedback collection, and personalized service delivery for superior hospitality."
      }
    ]
  };

  // Tourism Mobile Applications section
  const mobileApplicationsContent = {
    mainHeading: "Our Travel Industry Technology Solutions",
    introText: "We deliver professional travel technology development services focused on enhancing travel experiences and tourism operations:",
    companyName: "Foxbeep",
    servicesList: [
      "Online Booking Systems",
      "Travel Management Platforms",
      "Hotel Reservation Software",
      "Tourism Mobile Applications"
    ],
    featuredService: "Tourism Mobile Applications",
    featuredServiceDescription: "Interactive mobile travel apps with destination guides, booking capabilities, offline maps, travel assistance, and social sharing features. Designed to enhance traveler experiences and increase engagement.",
    featuredServiceImage: "/images/tourism-mobile-applications.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Destination & Travel Guides",
        description: "Comprehensive travel guides with destination information, attraction details, local recommendations, cultural insights, weather updates, and interactive maps for immersive travel experiences."
      },
      {
        title: "Mobile Booking & Services",
        description: "On-the-go booking capabilities with instant reservations, mobile payments, digital tickets, booking modifications, and travel services access for convenient mobile travel management."
      },
      {
        title: "Travel Assistance & Navigation",
        description: "Smart travel assistance with GPS navigation, offline maps, real-time translations, emergency contacts, travel alerts, and local discovery features for safe and informed travel experiences."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What travel industry technology development services do you provide?",
      answer: "We provide comprehensive travel technology development including online booking systems, travel management platforms, hotel reservation software, tourism mobile applications, travel CRM systems, and custom travel solutions tailored to your business needs."
    },
    {
      question: "Can you develop custom online booking systems for travel agencies?",
      answer: "Yes, we specialize in custom booking system development with features like flight reservations, hotel bookings, tour packages, payment processing, inventory management, and multi-language support for travel agencies and tour operators."
    },
    {
      question: "Do you develop hotel reservation and property management systems?",
      answer: "Absolutely. We develop comprehensive hotel management systems with room reservations, property management, channel management, guest services, housekeeping coordination, and revenue optimization for hotels and resorts."
    },
    {
      question: "What technologies do you use for travel software development?",
      answer: "We use travel-optimized technologies including .NET, Java, Python, cloud platforms (AWS, Azure), payment gateways, GDS integrations, mapping APIs, mobile frameworks, and real-time databases specifically designed for travel industry requirements."
    },
    {
      question: "How do you ensure integration with travel industry systems and APIs?",
      answer: "We implement seamless integration through GDS connections (Amadeus, Sabre), OTA APIs (Booking.com, Expedia), payment gateways, airline APIs, hotel chains, and third-party travel services through secure APIs and data synchronization."
    },
    {
      question: "Can you integrate travel software with existing booking and payment systems?",
      answer: "Yes, we specialize in travel system integration with existing booking platforms, payment processors, accounting systems, CRM platforms, inventory management, and other travel tools through secure APIs and custom connectors."
    },
    {
      question: "What is the typical timeline for travel technology development projects?",
      answer: "Travel technology development timelines vary based on complexity and integration requirements. Simple booking systems take 3-6 months, while comprehensive travel management or hotel reservation platforms may require 6-12 months including testing and integration phases."
    },
    {
      question: "Do you provide mobile app development for tourism and travel?",
      answer: "Yes, we develop mobile applications for travel with features like destination guides, mobile booking, offline maps, travel assistance, real-time notifications, and social sharing capabilities for enhanced traveler experiences."
    },
    {
      question: "Can you develop multi-language and multi-currency travel platforms?",
      answer: "Absolutely. We develop globalized travel platforms with multi-language support, multi-currency processing, regional customization, local payment methods, and cultural adaptations for international travel markets."
    },
    {
      question: "Why choose Foxbeep for travel industry technology development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of travel industry workflows and customer expectations. Our experienced team delivers scalable, integrated travel solutions that enhance customer experiences, increase bookings, and optimize travel operations."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Travel Industry Technology Development Services | Tourism Software Solutions | Foxbeep</title>
        <meta name="description" content="Professional travel industry technology development services including online booking systems, travel management platforms, hotel reservation software, and tourism mobile applications. Expert travel technology developers." />
        <meta name="keywords" content="travel industry technology development, online booking systems, travel management platforms, hotel reservation software, tourism mobile applications, travel CRM systems, tour package management" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Travel Industry Technology Development Services | Tourism Software Solutions" />
        <meta property="og:description" content="Custom travel technology development including online booking systems, travel management platforms, hotel reservation software, and tourism mobile applications designed to enhance travel experiences." />
        <meta property="og:image" content="https://foxbeep.com/travel-tech-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/travel" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Travel Technology Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Industry Technology Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert travel technology development for booking systems, travel management, and tourism solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/travel-tech-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Travel Industry Technology Development" />
        <meta name="services" content="Online Booking Systems, Travel Management Platforms, Hotel Reservation Software, Tourism Mobile Applications" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/travel" />
        
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
        <section aria-label="Travel Industry Technology Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Travel Technology Development Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Travel Companies and Tourism Organizations">
          <BrandSlider />
        </section>
        
        {/* Travel Industry Technology Services Sections */}
        <section aria-label="Online Booking Systems">
          <EdtechServices {...bookingSystemsContent} />
        </section>
        
        <section aria-label="Travel Management Platforms">
          <EdtechServices {...travelManagementContent} />
        </section>
        
        <section aria-label="Hotel Reservation Software">
          <EdtechServices {...hotelReservationContent} />
        </section>
        
        <section aria-label="Tourism Mobile Applications">
          <EdtechServices {...mobileApplicationsContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Travel Industry Technology Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our travel industry technology development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Travel Technology Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}