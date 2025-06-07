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

export default function ECommerce() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "eCommerce Development Services",
    "description": "Professional eCommerce development services including custom online store development, Shopify development, WooCommerce solutions, payment gateway integration, mobile commerce, and digital marketing. Expert eCommerce developers with 4.9★ rating and proven track record in online retail success.",
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
    "serviceType": "eCommerce Website Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "eCommerce Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom eCommerce Development",
            "description": "Tailored online stores with unique user experiences designed to maximize conversions and sales growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify Development",
            "description": "Professional Shopify store setup, customization, theme development, and app integration for scalable online retail"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WooCommerce Development",
            "description": "WordPress-based eCommerce solutions with custom functionality, payment integration, and SEO optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Magento Development",
            "description": "Enterprise-grade Magento stores with advanced features, multi-store management, and B2B capabilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Commerce Solutions",
            "description": "Responsive mobile-first designs and native mobile apps for seamless shopping experiences across devices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "eCommerce Consulting",
            "description": "Strategic eCommerce consulting for platform selection, conversion optimization, and digital growth strategies"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "58",
      "bestRating": "5"
    },
    "priceRange": "$5,000 - $50,000+"
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does eCommerce development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "eCommerce development costs range from $5,000 for basic Shopify stores to over $50,000 for large, custom enterprise platforms. Factors affecting cost include platform selection, custom features, payment gateway integration, inventory management complexity, and ongoing maintenance requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build an eCommerce website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "eCommerce development typically takes 6 to 20 weeks, depending on platform complexity, custom features, integrations, and design requirements. Simple Shopify stores may be completed in 6-8 weeks, while complex custom solutions can take 16-20 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Which eCommerce platform do you recommend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend Shopify for ease of use and quick setup, WooCommerce for WordPress integration and flexibility, Magento for enterprise features, or BigCommerce for built-in marketing tools. The choice depends on your business size, technical requirements, and growth plans."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing maintenance for eCommerce sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive eCommerce maintenance including security updates, performance optimization, plugin updates, backup management, uptime monitoring, and feature enhancements to keep your store running smoothly."
        }
      }
    ]
  };

  const serviceData = {
    title: "eCommerce Development Services",
    description: "We create powerful, conversion-optimized online stores that drive sales growth, enhance customer experience, and scale seamlessly across all devices with cutting-edge eCommerce technology.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "58",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "Comprehensive eCommerce Development Services",
    services: [
      { 
        title: "Custom eCommerce Development", 
        description: "Bespoke online stores built from scratch with unique user experiences, advanced functionality, and conversion-focused designs tailored to your brand identity." 
      },
      { 
        title: "Responsive Mobile Commerce", 
        description: "Mobile-first responsive designs optimized for smartphones and tablets, ensuring seamless shopping experiences across all devices and screen sizes." 
      },
      { 
        title: "Payment Gateway Integration", 
        description: "Secure multi-payment options including credit cards, PayPal, Stripe, digital wallets, and buy-now-pay-later solutions for maximum checkout convenience." 
      },
      { 
        title: "Inventory Management Systems", 
        description: "Advanced stock management with real-time tracking, automated reorder alerts, multi-location inventory, and comprehensive reporting dashboards." 
      },
      { 
        title: "Platform Migration Services", 
        description: "Seamless migration from legacy platforms to modern eCommerce solutions with zero data loss, SEO preservation, and minimal downtime." 
      },
      { 
        title: "Performance & SEO Optimization", 
        description: "Speed optimization, search engine optimization, conversion rate optimization, and ongoing maintenance for sustained growth and visibility." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "eCommerce Solutions Across All Industries",
    subtitle: "Foxbeep delivers industry-specific eCommerce solutions that understand unique business requirements and customer behaviors across diverse market sectors.",
    industries: [
      { 
        title: "Fashion & Apparel", 
        description: "Stylish online stores with advanced filtering, size guides, wishlist functionality, virtual try-on features, and seasonal collection management." 
      },
      { 
        title: "Electronics & Technology", 
        description: "Product comparison tools, detailed specifications, warranty management, tech support integration, and advanced search capabilities for electronics retail." 
      },
      { 
        title: "Food & Beverage", 
        description: "Online ordering systems with delivery scheduling, subscription management, inventory tracking for perishables, and restaurant integration solutions." 
      },
      { 
        title: "Health & Beauty", 
        description: "Personalized product recommendations, subscription boxes, ingredient tracking, customer reviews, and loyalty program integration for beauty brands." 
      },
      { 
        title: "Home & Furniture", 
        description: "Room visualization tools, augmented reality features, custom configuration options, delivery scheduling, and assembly service integration." 
      },
      { 
        title: "Digital Products & Services", 
        description: "Digital download management, subscription billing, license key generation, customer portal access, and automated delivery systems." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Proven eCommerce Development Process",
    description: "We follow a comprehensive methodology that ensures secure, fast, conversion-optimized online stores that drive sustainable business growth and exceptional user experiences.",
    processSteps: [
      { 
        number: 1, 
        title: "Discovery & eCommerce Strategy", 
        description: "Comprehensive business analysis, target audience research, competitor analysis, platform selection, and strategic planning for optimal market positioning." 
      },
      { 
        number: 2, 
        title: "UX/UI Design & Wireframing", 
        description: "Conversion-focused design creation with user journey mapping, mobile-first approach, brand integration, and intuitive navigation for maximum sales." 
      },
      { 
        number: 3, 
        title: "Platform Selection & Setup", 
        description: "Strategic platform evaluation and configuration based on business requirements, scalability needs, budget considerations, and long-term growth plans." 
      },
      { 
        number: 4, 
        title: "Core Development & Customization", 
        description: "Full-scale development with custom features, third-party integrations, performance optimization, and security implementation for robust functionality." 
      },
      { 
        number: 5, 
        title: "Payment & Shipping Integration", 
        description: "Secure payment gateway setup, multiple shipping options, tax calculation, international commerce support, and fraud prevention measures." 
      },
      { 
        number: 6, 
        title: "Quality Assurance & Testing", 
        description: "Comprehensive testing including functionality, security, performance, cross-browser compatibility, and mobile responsiveness validation." 
      },
      { 
        number: 7, 
        title: "Launch & Training Support", 
        description: "Smooth store launch with staff training, documentation, SEO setup, analytics integration, and ongoing support for successful operations." 
      }
    ]
  };

  const faqItems = [
    {
      question: "How much does eCommerce development cost?",
      answer: "eCommerce development costs range from $5,000 for basic Shopify stores to over $50,000 for large-scale custom enterprise platforms. Pricing factors include platform selection (Shopify, WooCommerce, Magento), custom feature requirements, design complexity, third-party integrations, payment gateway setup, inventory management needs, and ongoing maintenance. We provide detailed quotes based on your specific business requirements and growth objectives."
    },
    {
      question: "How long does it take to build an eCommerce website?",
      answer: "eCommerce development typically takes 6 to 20 weeks depending on project complexity, platform selection, custom features, and integration requirements. Simple Shopify stores can be completed in 6-8 weeks, while complex custom solutions with advanced functionality may take 16-20 weeks. Timeline factors include design approval, content preparation, payment setup, and testing phases."
    },
    {
      question: "Which eCommerce platform do you recommend?",
      answer: "We recommend platforms based on your specific needs: Shopify for ease of use and quick deployment, WooCommerce for WordPress integration and flexibility, Magento for enterprise-level features and scalability, BigCommerce for built-in marketing tools, or custom solutions for unique requirements. Selection depends on business size, technical complexity, budget, and growth plans."
    },
    {
      question: "Do you provide ongoing maintenance for eCommerce sites?",
      answer: "Yes, we offer comprehensive eCommerce maintenance packages including security updates, performance monitoring, plugin updates, backup management, uptime monitoring, bug fixes, feature enhancements, and platform updates. Our maintenance ensures your store remains secure, fast, and optimized for conversions with 24/7 support availability."
    },
    {
      question: "Can you integrate my existing systems with a new eCommerce store?",
      answer: "Absolutely! We specialize in seamless integrations with existing business systems including ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), POS (Point of Sale), inventory management, accounting software, email marketing platforms, and third-party logistics providers for unified business operations."
    },
    {
      question: "How do you ensure eCommerce website security?",
      answer: "We implement comprehensive security measures including SSL certificates, PCI DSS compliance, secure payment processing, data encryption, regular security audits, malware protection, DDoS protection, secure hosting environments, and regular security updates to protect customer data and maintain trust."
    },
    {
      question: "Do you offer mobile app development for eCommerce?",
      answer: "Yes, we develop native mobile apps for iOS and Android platforms, progressive web apps (PWA), and responsive mobile-optimized websites. Our mobile solutions include push notifications, offline browsing, mobile payments, location-based features, and seamless synchronization with your online store."
    },
    {
      question: "What kind of marketing features do you include?",
      answer: "We integrate essential marketing tools including SEO optimization, Google Analytics, email marketing integration, social media connectivity, customer reviews, abandoned cart recovery, discount code management, affiliate tracking, newsletter signup, and conversion tracking for comprehensive digital marketing support."
    }
  ];

  const benefitsData = {
    title: "Why Our eCommerce Development Services Drive Results",
    benefits: [
      "Conversion-optimized designs that increase sales through strategic user experience and persuasive design elements",
      "Mobile-first responsive development ensuring perfect performance across smartphones, tablets, and desktop devices",
      "Scalable architecture built to handle traffic growth, inventory expansion, and international market entry",
      "Enterprise-grade security with PCI compliance, SSL encryption, and fraud prevention for customer trust",
      "Lightning-fast performance with optimized loading speeds, CDN integration, and caching for better user experience"
    ],
    techIcons: [
      { name: "Shopify", isDark: true },
      { name: "WooCommerce", isDark: false },
      { name: "Magento", isDark: true },
      { name: "Stripe", isDark: false },
      { name: "PayPal", isDark: true },
      { name: "BigCommerce", isDark: false },
      { name: "React", isDark: true },
      { name: "MySQL", isDark: false },
      { name: "AWS", isDark: true }
    ],
    ctaText: "Start Your eCommerce Project"
  };

  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for eCommerce Development?",
    features: [
      {
        id: "conversion",
        title: "Conversion-Focused Design",
        content: "Strategic UX/UI design with proven conversion optimization techniques, A/B testing capabilities, and psychology-driven checkout processes that turn visitors into customers."
      },
      {
        id: "security",
        title: "Enterprise-Grade Security",
        content: "Comprehensive security implementation including PCI DSS compliance, SSL encryption, fraud detection, secure payment processing, and regular security audits for maximum protection."
      },
      {
        id: "scalability",
        title: "Built for Growth",
        content: "Scalable architecture designed to handle increasing traffic, expanding product catalogs, multiple currencies, international shipping, and business growth without performance degradation."
      },
      {
        id: "performance",
        title: "Lightning-Fast Performance",
        content: "Optimized for speed with advanced caching, CDN integration, image optimization, database optimization, and performance monitoring for exceptional user experience."
      },
      {
        id: "integration",
        title: "Seamless Integrations",
        content: "Connect your store with essential business tools including CRM, ERP, email marketing, accounting software, inventory management, and third-party logistics providers."
      },
      {
        id: "analytics",
        title: "Data-Driven Insights",
        content: "Advanced analytics and reporting with conversion tracking, customer behavior analysis, sales performance metrics, and actionable insights for continuous optimization."
      }
    ]
  };

  const teamBannerData = {
    title: "Build an eCommerce Development",
    highlightedText: "Team",
    buttonText: "Start Your eCommerce Journey",
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
        <title>eCommerce Development Services | Online Store Development | Shopify & WooCommerce Experts | Foxbeep</title>
        <meta name="description" content="Professional eCommerce development services including custom online stores, Shopify development, WooCommerce solutions, mobile commerce, and conversion optimization. 4.9★ rated developers with proven success in online retail growth." />
        <meta name="keywords" content="ecommerce development, online store development, shopify development, woocommerce development, magento development, custom ecommerce, mobile commerce, payment gateway integration, ecommerce consulting, online retail solutions, ecommerce website design, shopping cart development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="eCommerce Development Services | Online Store Development | Foxbeep" />
        <meta property="og:description" content="Professional eCommerce development with custom online stores, platform expertise, and conversion optimization. 4.9★ rated developers driving online retail success." />
        <meta property="og:image" content="https://foxbeep.com/images/ecommerce-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/ecommerce-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep eCommerce Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="eCommerce Development Services | Online Store & Shopify Development" />
        <meta name="twitter:description" content="Professional eCommerce development with custom stores and platform expertise. 4.9★ rated online retail specialists." />
        <meta name="twitter:image" content="https://foxbeep.com/images/ecommerce-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="eCommerce Development" />
        <meta name="expertise" content="Shopify, WooCommerce, Magento, Custom eCommerce, Mobile Commerce" />
        <meta name="rating" content="4.9/5 based on 58 reviews" />
        <meta name="platforms" content="Shopify, WooCommerce, Magento, BigCommerce, Custom Solutions" />
        <meta name="specialization" content="Online Stores, Mobile Commerce, Payment Integration, Conversion Optimization" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industries" content="Fashion, Electronics, Food & Beverage, Health & Beauty, Home & Furniture, Digital Products" />
        <meta name="solutions" content="Custom Stores, Mobile Commerce, Payment Integration, Inventory Management, Platform Migration" />
        
        {/* eCommerce-Specific Meta Tags */}
        <meta name="ecommerce-platforms" content="Shopify, WooCommerce, Magento, BigCommerce, Custom PHP" />
        <meta name="payment-gateways" content="Stripe, PayPal, Square, Authorize.net, Razorpay" />
        <meta name="features" content="Mobile Responsive, SEO Optimized, Payment Integration, Inventory Management" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/ecommerce-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/ecommerce-development" />
        
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
        <link rel="dns-prefetch" href="//shopify.com" />
        <link rel="dns-prefetch" href="//woocommerce.com" />
        <link rel="dns-prefetch" href="//magento.com" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$5,000 - $50,000+" />
        <meta name="currency" content="USD" />
        
        {/* eCommerce Development Meta Tags */}
        <meta name="development-time" content="6-20 weeks" />
        <meta name="technologies" content="Shopify, WooCommerce, Magento, React, PHP, MySQL" />
        <meta name="security" content="PCI DSS Compliant, SSL Encrypted" />
        <meta name="support" content="24/7 eCommerce Support Available" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="eCommerce Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen showcase image */}
        <section aria-label="eCommerce Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/ecom-dev.jpg"
              alt="eCommerce Development Services - Custom Online Store Development and Shopping Cart Solutions"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="eCommerce Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="eCommerce Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured eCommerce Services Slider */}
        <section aria-label="Featured eCommerce Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Custom eCommerce Stores",
                description: "Tailor-made online stores with unique user experiences, advanced functionality, and conversion-focused designs that maximize sales and customer satisfaction.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-500"
              },
              {
                id: 2,
                title: "B2B eCommerce Platforms",
                description: "Specialized wholesale portals with bulk ordering, account management, custom pricing, quote systems, and advanced inventory management for business clients.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-green-500"
              },
              {
                id: 3,
                title: "Marketplace Development",
                description: "Multi-vendor platforms that connect buyers and sellers in unified ecosystems with commission management, vendor dashboards, and advanced search capabilities.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-orange-500"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="blue"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="eCommerce Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for eCommerce Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build eCommerce Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Industry Solutions Section */}
        <section aria-label="eCommerce Solutions for Various Industries" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="eCommerce Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About eCommerce Development"
            subtitle="Get answers to common questions about our online store development services, eCommerce platforms, payment integration, and development process"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with eCommerce Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}