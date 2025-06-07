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

export default function ManufacturingWebsite() {
  // Structured Data for Manufacturing Website Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manufacturing Website Development Services",
    "description": "Professional manufacturing website development services including B2B industrial websites, product catalog systems, ERP integration, RFQ systems, CAD file management, and supply chain portals. Expert web developers specializing in manufacturing industry solutions with 4.9★ rating and proven success in creating lead-generating industrial websites.",
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
    "serviceType": "Manufacturing Website Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manufacturing Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Product Catalog Development",
            "description": "Comprehensive product catalog systems showcasing manufacturing capabilities, technical specifications, and product lines with advanced search functionality"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RFQ & Quote Management Systems",
            "description": "Custom request for quote systems with detailed product specifications, inquiry management, and automated quotation processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP System Integration",
            "description": "Seamless integration with manufacturing ERP systems including SAP, Oracle, Epicor for real-time inventory and order management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B Lead Generation Portals",
            "description": "Conversion-optimized websites designed specifically for manufacturing B2B sales with qualified lead capture and nurturing systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Design & Photography",
            "description": "Professional industrial photography, facility showcases, and visual presentation of manufacturing processes and capabilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Supply Chain Management Portals",
            "description": "Secure portals for distributors, dealers, and supply chain partners with inventory access, ordering systems, and partner management"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "70",
      "bestRating": "5"
    },
    "priceRange": "$12,000 - $60,000+"
  };

  // FAQ structured data for manufacturing website development
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a manufacturing website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing website development costs range from $12,000 for basic industrial sites to $60,000+ for comprehensive platforms with advanced features like product configurators, ERP integration, and custom B2B functionality. Pricing depends on complexity, integration requirements, catalog size, and custom features needed for your manufacturing business."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a manufacturing website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing website development typically takes 8 to 16 weeks depending on complexity of product catalog, ERP integration requirements, and technical specifications. Simple industrial websites require 8-10 weeks, while comprehensive platforms with advanced B2B features may take 12-16 weeks including testing and integration phases."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with our ERP system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in integrating manufacturing websites with popular ERP systems including SAP, Oracle, Epicor, Microsoft Dynamics, and other manufacturing management systems. Our integrations enable real-time inventory tracking, automated order processing, and seamless data synchronization between your website and business systems."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle technical product specifications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We create structured databases for technical specifications with advanced filtering, parametric search, and comparison tools designed for engineers and procurement professionals. Our systems organize complex technical data, CAD files, specification sheets, and product documentation for easy access and evaluation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide industrial photography services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer professional industrial photography and videography services to showcase manufacturing processes, facilities, equipment, and products. Our industrial photography captures the scale and precision of manufacturing operations, creating compelling visual content that builds trust with B2B customers."
        }
      }
    ]
  };

  const serviceData = {
    title: "Manufacturing Website Development Services",
    description: "We build robust, conversion-focused manufacturing websites that showcase your industrial capabilities, generate qualified B2B leads, and integrate seamlessly with your manufacturing systems and processes.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "70",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "Comprehensive Manufacturing Website Development Services",
    services: [
      { 
        title: "Advanced Product Catalog Integration & Management", 
        description: "Sophisticated product catalog systems showcasing manufacturing capabilities with detailed specifications, technical drawings, material properties, and interactive product configurators for complex industrial products." 
      },
      { 
        title: "Custom RFQ & Quote Management Systems", 
        description: "Professional request for quote platforms with detailed specification forms, automated quotation processes, project tracking, and customer relationship management specifically designed for manufacturing sales cycles." 
      },
      { 
        title: "Industrial Design Showcase & Visual Presentation", 
        description: "High-impact visual presentation of manufacturing processes, facility tours, equipment galleries, quality certifications, and capability demonstrations that build trust with B2B industrial customers." 
      },
      { 
        title: "Secure Distributor & Dealer Portal Development", 
        description: "Protected partner portals with inventory access, pricing information, marketing materials, order management, territory management, and communication tools for distribution networks and channel partners." 
      },
      { 
        title: "Technical Documentation & CAD File Management", 
        description: "Organized digital libraries for technical specifications, engineering drawings, CAD files, installation guides, maintenance manuals, and certification documents with secure access and version control." 
      },
      { 
        title: "Supply Chain Integration & Procurement Portals", 
        description: "Advanced connectivity with procurement systems, inventory management, supplier networks, and supply chain optimization tools for streamlined B2B operations and vendor management." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "Manufacturing Websites for Every Industrial Sector & Specialty",
    subtitle: "Foxbeep creates powerful, industry-specific manufacturing websites that drive B2B sales, showcase capabilities, and generate qualified leads across diverse manufacturing sectors.",
    industries: [
      { 
        title: "Industrial Equipment & Heavy Machinery", 
        description: "Specialized websites showcasing industrial equipment, heavy machinery, manufacturing systems, and capital equipment with detailed specifications, performance data, and technical documentation for B2B decision-makers." 
      },
      { 
        title: "Automotive Manufacturing & Parts Production", 
        description: "Comprehensive platforms for automotive manufacturers featuring parts catalogs, supplier networks, quality certifications, production capabilities, and OEM/aftermarket product management systems." 
      },
      { 
        title: "Electronics Manufacturing & Component Production", 
        description: "Precision-focused websites for electronics manufacturers with component catalogs, technical specifications, quality standards, certifications, and supply chain management for electronic components and assemblies." 
      },
      { 
        title: "Aerospace & Defense Manufacturing Solutions", 
        description: "Secure, compliance-focused manufacturing websites for aerospace and defense contractors with specialized certifications, security protocols, technical documentation, and government contracting capabilities." 
      },
      { 
        title: "Consumer Products & High-Volume Manufacturing", 
        description: "Scalable platforms for consumer product manufacturers featuring product lines, brand management, retail partnerships, distribution networks, and high-volume production capability showcases." 
      },
      { 
        title: "Custom Fabrication & Specialty Manufacturing", 
        description: "Flexible websites for custom fabrication shops showcasing materials expertise, manufacturing processes, project galleries, custom capabilities, and client collaboration tools for bespoke manufacturing solutions." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Proven Manufacturing Website Development Methodology",
    description: "We follow industry best practices and manufacturing-specific requirements to deliver high-performance, lead-generating websites that effectively communicate your industrial capabilities and drive B2B business growth.",
    processSteps: [
      { 
        number: 1, 
        title: "Manufacturing Capability Assessment & Strategy", 
        description: "Comprehensive analysis of manufacturing capabilities, production specializations, target market research, competitive landscape evaluation, and strategic planning for optimal industrial website positioning and B2B lead generation." 
      },
      { 
        number: 2, 
        title: "Industrial Audience Research & B2B User Experience", 
        description: "In-depth research of B2B decision-makers, procurement processes, engineering requirements, and industrial buyer journeys to create user experiences that resonate with manufacturing professionals and drive conversions." 
      },
      { 
        number: 3, 
        title: "Technical Content Strategy & Information Architecture", 
        description: "Strategic organization of complex technical information, product specifications, manufacturing processes, and industrial applications into intuitive navigation structures that facilitate B2B research and decision-making processes." 
      },
      { 
        number: 4, 
        title: "Industrial UX Design & Manufacturing-Focused Interface", 
        description: "Creation of professional, trust-building interfaces designed specifically for technical decision-makers, engineers, and procurement professionals with emphasis on credibility, functionality, and industrial aesthetics." 
      },
      { 
        number: 5, 
        title: "Enterprise System Integration & ERP Connectivity", 
        description: "Seamless integration with manufacturing ERP systems, inventory management, CRM platforms, supply chain systems, and business intelligence tools for real-time data synchronization and operational efficiency." 
      },
      { 
        number: 6, 
        title: "B2B Lead Generation Implementation & Conversion Optimization", 
        description: "Development of sophisticated lead capture systems, RFQ processes, qualification mechanisms, and nurturing workflows specifically designed for manufacturing sales cycles and B2B conversion optimization." 
      },
      { 
        number: 7, 
        title: "Industrial SEO & Manufacturing Market Visibility", 
        description: "Advanced search engine optimization targeting industrial keywords, technical search terms, B2B search patterns, and manufacturing-specific content strategies to maximize visibility among target industrial audiences." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does a manufacturing website cost?",
      answer: "Manufacturing website development costs range from $12,000 for basic industrial websites to $60,000+ for comprehensive platforms with advanced features like product configurators, ERP integration, and custom B2B functionality. Key pricing factors include catalog complexity, system integrations, custom features, design requirements, and ongoing maintenance needs. We provide detailed project estimates based on your specific manufacturing requirements and business objectives."
    },
    {
      question: "How long does it take to develop a manufacturing website?",
      answer: "Manufacturing website development typically takes 8 to 16 weeks depending on project complexity and integration requirements. Basic industrial websites can be completed in 8-10 weeks, while comprehensive platforms with ERP integration, advanced product catalogs, and custom B2B features may require 12-16 weeks. Timeline includes discovery, design, development, integration, testing, and launch phases."
    },
    {
      question: "Can you integrate with our ERP system?",
      answer: "Yes, we specialize in integrating manufacturing websites with popular ERP systems including SAP, Oracle, Epicor, Microsoft Dynamics, NetSuite, and other manufacturing management platforms. Our integrations enable real-time inventory tracking, automated order processing, customer portal access, and seamless data synchronization between your website and core business systems."
    },
    {
      question: "How do you handle technical product specifications?",
      answer: "We create sophisticated databases for technical specifications with advanced filtering capabilities, parametric search functionality, and comparison tools designed specifically for engineers and procurement professionals. Our systems organize complex technical data, CAD files, specification sheets, certifications, and product documentation with intuitive access and evaluation tools."
    },
    {
      question: "Do you provide industrial photography services?",
      answer: "Yes, we offer comprehensive industrial photography and videography services to showcase manufacturing processes, facilities, equipment, and products. Our industrial photography captures the scale, precision, and quality of manufacturing operations, creating compelling visual content that builds credibility and trust with B2B customers and decision-makers."
    },
    {
      question: "What manufacturing technologies and systems do you integrate with?",
      answer: "We integrate with leading manufacturing technologies including ERP systems (SAP, Oracle, Epicor), CRM platforms (Salesforce, HubSpot), inventory management systems, CAD software integration, PLM systems, supply chain management tools, and quality management systems to create comprehensive manufacturing website solutions."
    },
    {
      question: "How do you optimize manufacturing websites for B2B lead generation?",
      answer: "We implement specialized B2B conversion strategies including qualified lead capture forms, RFQ systems, technical specification requests, sample ordering processes, distributor locators, and nurturing workflows designed specifically for manufacturing sales cycles and industrial decision-making processes."
    },
    {
      question: "Can you create secure portals for distributors and partners?",
      answer: "Absolutely! We develop secure partner portals with role-based access control, inventory visibility, pricing information, marketing materials, order management, territory management, communication tools, and training resources specifically designed for manufacturing distribution networks and channel partners."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Manufacturing Website Development Services Excel in Industrial Markets",
    benefits: [
      "Intuitive interfaces designed specifically for complex technical products, making it easy for engineers and procurement professionals to find, evaluate, and specify manufacturing solutions",
      "Advanced optimization for B2B search patterns and industrial decision-makers, ensuring maximum visibility among target audiences actively seeking manufacturing solutions and capabilities",
      "Seamless integration with leading manufacturing ERP systems, CRM platforms, and supply chain management tools for real-time data synchronization and operational efficiency",
      "Specialized industrial SEO strategies targeting technical keywords, manufacturing terms, and B2B search behavior to generate qualified leads and improve search engine rankings",
      "Enterprise-grade security protocols protecting proprietary product information, technical specifications, and sensitive manufacturing data while enabling controlled access for authorized users"
    ],
    techIcons: [
      { name: "SAP", isDark: true },
      { name: "Epicor", isDark: false },
      { name: "Oracle", isDark: true },
      { name: "SolidWorks", isDark: false },
      { name: "AutoCAD", isDark: true },
      { name: "Salesforce", isDark: false },
      { name: "PHP", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "MongoDB", isDark: true }
    ],
    ctaText: "Showcase Your Manufacturing Excellence"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Manufacturing Website Development?",
    features: [
      {
        id: "technical",
        title: "Deep Manufacturing Industry Expertise",
        content: "Comprehensive understanding of manufacturing processes, industrial requirements, B2B sales cycles, and technical specifications enabling us to create websites that truly resonate with manufacturing professionals and drive qualified business inquiries."
      },
      {
        id: "integration",
        title: "Advanced ERP & System Integration Capabilities",
        content: "Proven expertise in integrating manufacturing websites with leading ERP systems, inventory management platforms, CRM solutions, and supply chain tools for seamless data flow and operational efficiency across your entire business ecosystem."
      },
      {
        id: "visualization",
        title: "Professional Industrial Visualization & Photography",
        content: "Advanced 3D product rendering, industrial photography services, process visualization, facility showcases, and technical documentation presentation that effectively communicates manufacturing capabilities and builds trust with B2B customers."
      },
      {
        id: "b2b",
        title: "Specialized B2B Lead Generation & Conversion",
        content: "Sophisticated conversion funnels designed specifically for industrial procurement processes, featuring qualified lead capture, RFQ management, technical specification forms, and nurturing workflows optimized for manufacturing sales cycles."
      },
      {
        id: "configurators",
        title: "Interactive Product Configurators & Technical Tools",
        content: "Custom-built product configuration tools, specification calculators, material selectors, and interactive technical resources that help prospects evaluate and specify manufacturing solutions while generating qualified sales opportunities."
      },
      {
        id: "global",
        title: "Global Manufacturing & Multi-Market Capabilities",
        content: "Multi-language website support, international compliance standards, global supply chain integration, regional customization, and cross-border functionality for manufacturing companies operating in multiple international markets."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a Manufacturing Website Development",
    highlightedText: "Team",
    buttonText: "Transform Your Industrial Presence",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-800",
    buttonGradientFrom: "from-blue-700",
    buttonGradientTo: "to-blue-800",
    buttonHoverFrom: "from-blue-800",
    buttonHoverTo: "to-blue-900"
  };
  
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Manufacturing Website Development Services | Industrial Web Design | B2B Manufacturing Websites | Foxbeep</title>
        <meta name="description" content="Professional manufacturing website development services including B2B industrial websites, product catalog systems, ERP integration, RFQ systems, and supply chain portals. 4.9★ rated web developers specializing in manufacturing industry solutions and lead generation." />
        <meta name="keywords" content="manufacturing website development, industrial web design, B2B manufacturing websites, factory website design, manufacturing web development, industrial website development, manufacturing company websites, ERP integration, product catalog websites, manufacturing lead generation, industrial web solutions" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Manufacturing Website Development | Industrial Web Design & B2B Lead Generation | Foxbeep" />
        <meta property="og:description" content="Expert manufacturing website development with ERP integration, product catalogs, and B2B lead generation. 4.9★ rated industrial web developers creating conversion-focused manufacturing websites." />
        <meta property="og:image" content="https://foxbeep.com/images/manufacturing-website-development.png" />
        <meta property="og:url" content="https://foxbeep.com/services/manufacturing-website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Manufacturing Website Development" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manufacturing Website Development | Industrial B2B Web Solutions" />
        <meta name="twitter:description" content="Professional manufacturing website development with ERP integration and B2B lead generation. 4.9★ rated industrial web developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/manufacturing-website-development.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Manufacturing Website Development" />
        <meta name="expertise" content="Industrial Web Design, B2B Websites, ERP Integration, Product Catalogs" />
        <meta name="rating" content="4.9/5 based on 70 reviews" />
        <meta name="specialization" content="Manufacturing Industry, Industrial Websites, B2B Lead Generation" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Manufacturing Industry Meta Tags */}
        <meta name="industries" content="Industrial Equipment, Automotive Manufacturing, Electronics, Aerospace, Consumer Products, Custom Fabrication" />
        <meta name="manufacturing-services" content="Product Catalogs, RFQ Systems, ERP Integration, Supply Chain Portals" />
        <meta name="erp-systems" content="SAP, Oracle, Epicor, Microsoft Dynamics, NetSuite Integration" />
        
        {/* B2B Features Meta Tags */}
        <meta name="b2b-features" content="Lead Generation, Quote Systems, Distributor Portals, Technical Documentation" />
        <meta name="manufacturing-tech" content="CAD Integration, Product Configurators, Inventory Management, Supply Chain" />
        <meta name="industrial-seo" content="B2B SEO, Industrial Keywords, Manufacturing Search Optimization" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/manufacturing-website" />
        
        {/* Alternate URLs */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/manufacturing-website" />
        
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
        <link rel="dns-prefetch" href="//www.sap.com" />
        <link rel="dns-prefetch" href="//www.oracle.com" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#1E40AF" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$12,000 - $60,000+" />
        <meta name="currency" content="USD" />
        
        {/* Manufacturing Development Meta Tags */}
        <meta name="development-time" content="8-16 weeks" />
        <meta name="technologies" content="PHP, Node.js, MongoDB, SAP, Oracle, Epicor Integration" />
        <meta name="platforms" content="Manufacturing ERP, CRM, Supply Chain Management Systems" />
        <meta name="support" content="ERP Integration, Technical Documentation, B2B Lead Generation" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="Manufacturing Website Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen manufacturing facility showcase image */}
        <section aria-label="Manufacturing Website Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/manufacturing.jpg"
              alt="Manufacturing Website Development Services - Industrial Web Design and B2B Manufacturing Websites with ERP Integration"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="Manufacturing Website Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="Manufacturing Website Development Benefits">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured Manufacturing Services Slider */}
        <section aria-label="Featured Manufacturing Website Solutions">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Industrial Equipment Manufacturing Websites",
                description: "Comprehensive websites showcasing heavy machinery and industrial solutions with detailed technical specifications, performance data, and B2B lead generation systems designed for equipment manufacturers.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-700"
              },
              {
                id: 2,
                title: "Parts Manufacturing & Component Platforms",
                description: "Advanced product catalog platforms with parametric search capabilities, technical specifications, inventory integration, and procurement tools specifically designed for manufactured components and parts suppliers.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-gray-700"
              },
              {
                id: 3,
                title: "Custom Fabrication & Materials Websites",
                description: "Interactive manufacturing platforms showcasing custom fabrication capabilities, materials expertise, project galleries, and client collaboration tools for specialized manufacturing and fabrication services.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-indigo-600"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="blue"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="Manufacturing Website Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for Manufacturing Website Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build Manufacturing Website Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Manufacturing Industry Solutions Section */}
        <section aria-label="Manufacturing Websites for Every Industrial Sector" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="Manufacturing Website Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About Manufacturing Website Development"
            subtitle="Get comprehensive answers about our manufacturing website development services, ERP integration, B2B lead generation, industrial web design process, and specialized manufacturing industry solutions"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />     
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with Manufacturing Website Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}