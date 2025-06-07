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

export default function BusinessWebsite() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Website Development Services",
    "description": "Professional business website development services including custom design, responsive development, CMS implementation, SEO optimization, and ongoing maintenance. Expert web developers with 4.9★ rating and 18+ years experience.",
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
    "serviceType": "Business Website Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Design",
            "description": "Unique website designs that reflect your brand identity and business goals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Responsive Web Development",
            "description": "Professional websites that work perfectly on all devices and screen sizes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CMS Implementation",
            "description": "Easy-to-use content management systems for effortless website updates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Search engine optimized websites built to rank well and attract customers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Maintenance",
            "description": "Ongoing support to keep your business website secure, fast, and updated"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics Integration",
            "description": "Track website performance with powerful insights and conversion tracking"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "62",
      "bestRating": "5"
    },
    "priceRange": "$3,000 - $25,000+"
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does business website development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business website development costs range from $3,000 for basic professional sites to $25,000+ for complex business platforms. Factors affecting cost include design complexity, functionality requirements, CMS integration, e-commerce features, and ongoing maintenance needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a business website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business website development typically takes 4 to 12 weeks, depending on complexity and requirements. Simple business sites may be completed in 4-6 weeks, while comprehensive business platforms with advanced features can take 8-12 weeks or longer."
        }
      },
      {
        "@type": "Question",
        "name": "Which CMS do you recommend for business websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend WordPress, Drupal, or custom CMS solutions based on your specific business needs. WordPress is ideal for most businesses due to its ease of use, while Drupal offers more advanced capabilities for complex requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO services with website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build all business websites with SEO best practices included, such as optimized page structure, meta tags, schema markup, and fast loading speeds. We also provide ongoing SEO optimization services to improve search rankings."
        }
      }
    ]
  };

  const serviceData = {
    title: "Business Website Development Services",
    description: "We build professional websites that establish your brand, attract customers, and drive business growth with proven conversion optimization techniques.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "62",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included in Our Business Website Development Services?",
    services: [
      { 
        title: "Custom Website Design", 
        description: "Unique website designs that reflect your brand identity and business goals with conversion-focused layouts." 
      },
      { 
        title: "Responsive Web Development", 
        description: "Professional websites that work perfectly on all devices and screen sizes with optimized performance." 
      },
      { 
        title: "CMS Implementation", 
        description: "Easy-to-use content management systems for effortless website updates and content publishing." 
      },
      { 
        title: "SEO Optimization", 
        description: "Search engine optimized websites built to rank well and attract qualified business leads." 
      },
      { 
        title: "Analytics Integration", 
        description: "Track website performance with powerful insights, conversion tracking, and business intelligence." 
      },
      { 
        title: "Maintenance & Support", 
        description: "Ongoing support to keep your business website secure, fast, updated, and performing optimally." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "Professional Websites for Every Business Industry",
    subtitle: "FoxBeep creates effective business websites that drive results across all sectors with industry-specific expertise and proven conversion strategies.",
    industries: [
      { 
        title: "Professional Services", 
        description: "Showcase expertise with trust-building elements, client testimonials, and lead generation forms optimized for service businesses." 
      },
      { 
        title: "Healthcare & Medical", 
        description: "Patient-friendly websites with appointment booking systems, HIPAA compliance, and medical practice optimization." 
      },
      { 
        title: "Real Estate", 
        description: "Property listing websites with advanced search, filtering, virtual tours, and lead capture optimization." 
      },
      { 
        title: "Finance & Banking", 
        description: "Secure financial websites with calculators, resources, compliance features, and trust-building design elements." 
      },
      { 
        title: "Manufacturing & Industrial", 
        description: "B2B websites highlighting capabilities, product catalogs, case studies, and industrial expertise showcases." 
      },
      { 
        title: "Hospitality & Tourism", 
        description: "Booking systems, virtual tours, gallery showcases, and reservation management for hospitality businesses." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Business Website Development Process",
    description: "We follow a comprehensive process to ensure professional, functional, and brand-aligned websites that drive business results and customer engagement.",
    processSteps: [
      { 
        number: 1, 
        title: "Discovery & Strategy", 
        description: "Comprehensive analysis of your business goals, target audience, competition, and requirements to create a strategic development plan." 
      },
      { 
        number: 2, 
        title: "Information Architecture", 
        description: "Planning optimal site structure, navigation flow, and user experience paths for maximum engagement and conversions." 
      },
      { 
        number: 3, 
        title: "UX/UI Design", 
        description: "Creating wireframes, mockups, and visual designs that align with your brand and optimize user experience across all devices." 
      },
      { 
        number: 4, 
        title: "Content Development", 
        description: "Crafting compelling, SEO-optimized content, messaging, and visuals that communicate your value proposition effectively." 
      },
      { 
        number: 5, 
        title: "Core Development", 
        description: "Building a fast, secure, and responsive website using modern technologies and best practices for optimal performance." 
      },
      { 
        number: 6, 
        title: "Testing & QA", 
        description: "Comprehensive testing across devices, browsers, and performance metrics to ensure everything works perfectly before launch." 
      },
      { 
        number: 7, 
        title: "Launch & Training", 
        description: "Smooth website launch with comprehensive training, documentation, and ongoing support to manage your business website." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does business website development cost?",
      answer: "Business website development costs range from $3,000 for basic professional sites to $25,000+ for complex business platforms. Factors affecting cost include design complexity, functionality requirements, CMS integration, e-commerce features, custom development needs, and ongoing maintenance requirements. We provide detailed quotes based on your specific business needs and objectives."
    },
    {
      question: "How long does it take to build a business website?",
      answer: "Business website development typically takes 4 to 12 weeks, depending on complexity and requirements. Simple business sites may be completed in 4-6 weeks, while comprehensive business platforms with advanced features can take 8-12 weeks or longer. Timeline factors include content preparation, design revisions, custom functionality, and client feedback cycles."
    },
    {
      question: "Which CMS do you recommend for business websites?",
      answer: "We recommend WordPress, Drupal, or custom CMS solutions based on your specific business needs, technical requirements, and growth plans. WordPress is ideal for most businesses due to its ease of use and extensive plugin ecosystem, while Drupal offers more advanced capabilities for complex enterprise requirements."
    },
    {
      question: "Do you provide SEO services with website development?",
      answer: "Yes, we build all business websites with comprehensive SEO best practices included, such as optimized page structure, meta tags, schema markup, fast loading speeds, mobile optimization, and search-friendly URLs. We also provide ongoing SEO optimization services to improve search rankings and organic traffic."
    },
    {
      question: "Can you update or redesign my existing business website?",
      answer: "Absolutely! We specialize in website redesigns, modernization projects, platform migrations, and performance optimization. Whether you need a complete overhaul or targeted improvements, we can enhance your existing site's design, functionality, speed, and search engine visibility."
    },
    {
      question: "What ongoing support do you provide after website launch?",
      answer: "We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, backup management, technical support, and continuous optimization. Our support ensures your business website remains secure, fast, and effective in achieving your business goals."
    },
    {
      question: "How do you ensure my business website converts visitors into customers?",
      answer: "We implement conversion optimization strategies including strategic call-to-action placement, lead capture forms, trust signals, social proof, clear value propositions, and user-friendly navigation. We also provide analytics setup to track conversions and continuously optimize performance."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can provide reliable hosting solutions optimized for business websites, including SSL certificates, regular backups, security monitoring, and performance optimization. We also assist with domain registration and DNS management as part of our comprehensive website services."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Business Website Development Services Excel",
    benefits: [
      "Conversion-focused design that transforms website visitors into paying customers with strategic optimization",
      "Professional branding that builds trust, credibility, and establishes your business as an industry authority",
      "Mobile-first responsive design ensuring perfect functionality across all devices and screen sizes",
      "SEO-optimized architecture built for search engines from the ground up with technical optimization",
      "Scalable solutions that grow seamlessly with your business needs and expansion plans"
    ],
    techIcons: [
      { name: "WordPress", isDark: true },
      { name: "Drupal", isDark: false },
      { name: "React", isDark: true },
      { name: "Google Analytics", isDark: false },
      { name: "Cloudflare", isDark: true },
      { name: "AWS", isDark: false },
      { name: "PHP", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "MongoDB", isDark: true }
    ],
    ctaText: "Start Your Business Website Project"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Business Website Development?",
    features: [
      {
        id: "branding",
        title: "Brand-Aligned Design",
        content: "Professional websites that perfectly represent your company's values, identity, and unique selling proposition with cohesive visual branding."
      },
      {
        id: "performance",
        title: "Performance Optimized",
        content: "Lightning-fast loading times, optimized images, efficient code, and CDN integration for superior user experience and SEO rankings."
      },
      {
        id: "accessibility",
        title: "Accessibility Focused",
        content: "Inclusive design following WCAG guidelines that reaches all potential customers and improves usability for everyone."
      },
      {
        id: "conversion",
        title: "Conversion Optimized",
        content: "Strategic layouts, compelling CTAs, lead capture forms, and user journey optimization that drive measurable business results."
      },
      {
        id: "security",
        title: "Enterprise-Grade Security",
        content: "Comprehensive security measures including SSL certificates, regular updates, malware protection, and continuous monitoring."
      },
      {
        id: "seo",
        title: "Built for Search Success",
        content: "Technical SEO implementation, schema markup, optimized content structure, and search engine best practices for better visibility."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a Business Website Development",
    highlightedText: "Team",
    buttonText: "Get Started Now",
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
        <title>Business Website Development Services | Professional Web Design & Development | Foxbeep</title>
        <meta name="description" content="Professional business website development services with custom design, responsive development, CMS integration, SEO optimization, and ongoing support. 4.9★ rated developers with 18+ years experience helping businesses grow online." />
        <meta name="keywords" content="business website development, professional web design, custom website design, responsive web development, CMS implementation, business web development, corporate website design, small business websites, professional website services, web development company" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Business Website Development Services | Professional Web Design & Development | Foxbeep" />
        <meta property="og:description" content="Professional business website development with custom design, responsive development, and SEO optimization. 4.9★ rated developers helping businesses establish strong online presence." />
        <meta property="og:image" content="https://foxbeep.com/images/business-website-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/business-website-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Business Website Development" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Website Development Services | Professional Web Design" />
        <meta name="twitter:description" content="Professional business website development with custom design and SEO optimization. 4.9★ rated developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/business-website-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Business Website Development" />
        <meta name="expertise" content="WordPress, Drupal, React, Custom CMS, Responsive Design, SEO Optimization" />
        <meta name="rating" content="4.9/5 based on 62 reviews" />
        <meta name="experience" content="18+ Years" />
        <meta name="specialization" content="Business Websites, Corporate Web Design, Professional Web Development" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industries" content="Professional Services, Healthcare, Real Estate, Finance, Manufacturing, Hospitality" />
        <meta name="solutions" content="Custom Design, Responsive Development, CMS Implementation, SEO Optimization, Maintenance" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/business-website-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/business-website-development" />
        
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
        <link rel="dns-prefetch" href="//wordpress.org" />
        <link rel="dns-prefetch" href="//drupal.org" />
        
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
        <meta name="price-range" content="$3,000 - $25,000+" />
        <meta name="currency" content="USD" />
        
        {/* Website Development Meta Tags */}
        <meta name="development-time" content="4-12 weeks" />
        <meta name="technologies" content="WordPress, Drupal, React, Custom CMS, Responsive Design" />
        <meta name="support" content="24/7 Support Available" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="Business Website Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen showcase image */}
        <section aria-label="Business Website Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/business-dev.jpg"
              alt="Business Website Development Services - Professional Web Design and Development Solutions"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="Business Website Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="Business Website Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured Business Website Services Slider */}
        <section aria-label="Featured Business Website Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Corporate Websites",
                description: "Professional company websites that establish credibility, showcase services, and drive business growth with conversion optimization.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-500"
              },
              {
                id: 2,
                title: "Small Business Sites",
                description: "Cost-effective websites that help local businesses attract customers, build online presence, and compete effectively in digital markets.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-green-500"
              },
              {
                id: 3,
                title: "Service Portfolios",
                description: "Showcase your expertise and work portfolio with elegant, conversion-optimized websites that attract high-quality leads.",
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
        <section aria-label="Business Website Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for Business Website Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build Business Website Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Industry Solutions Section */}
        <section aria-label="Business Website Solutions for Various Industries" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="Business Website Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About Business Website Development"
            subtitle="Get answers to common questions about our business website development services, costs, timeline, and process"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with Business Website Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}