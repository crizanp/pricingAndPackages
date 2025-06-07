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

export default function WordPressDevelopment() {
  // Structured Data for WordPress Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WordPress Development Services",
    "description": "Professional WordPress website development services including custom themes, plugins, WooCommerce stores, and website maintenance. Expert WordPress developers with 4.9★ rating creating fast, secure websites.",
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
    "serviceType": "WordPress Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WordPress Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom WordPress Website Development",
            "description": "Build custom WordPress websites from scratch with unique designs and features"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Theme Development",
            "description": "Create custom WordPress themes that match your brand and business needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Plugin Development",
            "description": "Build custom WordPress plugins to add special features to your website"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WooCommerce Development",
            "description": "Create online stores using WooCommerce with payment processing and inventory management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Website Migration",
            "description": "Move your existing website to WordPress without losing content or search rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Maintenance & Support",
            "description": "Keep your WordPress website updated, secure, and running smoothly with ongoing support"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "52",
      "bestRating": "5"
    },
    "priceRange": "$3,000 - $50,000+"
  };

  // FAQ structured data for WordPress development
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does WordPress development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WordPress development costs range from $3,000 for simple websites to $50,000+ for complex online stores and custom features. Price depends on design complexity, special features, and whether you need an online store or custom plugins."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a WordPress website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most WordPress websites take 4 to 12 weeks to complete. Simple business websites can be done in 4-6 weeks, while complex sites with custom features or online stores may take 8-12 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Is WordPress good for business websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WordPress is excellent for business websites. It's easy to update, search engine friendly, secure when properly maintained, and can grow with your business. Over 40% of all websites use WordPress."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide WordPress training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete training on how to update your WordPress website including adding new pages, blog posts, images, and managing your content. We make sure you feel comfortable using your new website."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move my existing website to WordPress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We can move your website from any platform to WordPress while keeping all your content, images, and search engine rankings intact. We handle the entire migration process safely."
        }
      }
    ]
  };

  const serviceData = {
    title: "WordPress Development Services",
    description: "We build fast, secure WordPress websites that help your business grow online and attract more customers.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "52",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What You Get With Our WordPress Development",
    services: [
      {
        title: "Custom WordPress Websites",
        description: "We build unique WordPress websites that match your brand and help you stand out from competitors."
      },
      {
        title: "Beautiful Website Designs",
        description: "Get stunning, professional designs that look great on phones, tablets, and computers."
      },
      {
        title: "Custom Features & Tools",
        description: "Add special features to your website with custom plugins built just for your business needs."
      },
      {
        title: "Online Store Development",
        description: "Create a complete online store with WooCommerce to sell your products and accept payments easily."
      },
      {
        title: "Website Migration Help",
        description: "Move your existing website to WordPress safely without losing any content or search rankings."
      },
      {
        title: "Ongoing Support & Updates",
        description: "Keep your WordPress website secure, fast, and up-to-date with our maintenance services."
      }
    ]
  };

  const industrySliderData = {
    title: "WordPress Websites for Every Type of Business",
    subtitle: "Foxbeep creates professional WordPress websites for all kinds of businesses and industries.",
    industries: [
      {
        title: "Small Business Websites",
        description: "Professional websites for local businesses, service providers, and startups to attract more customers online."
      },
      {
        title: "Online Stores & Shops",
        description: "Complete e-commerce websites with shopping carts, payment processing, and inventory management."
      },
      {
        title: "Healthcare & Medical",
        description: "HIPAA-compliant WordPress websites for doctors, clinics, and healthcare providers with appointment booking."
      },
      {
        title: "Real Estate Websites",
        description: "Property listing websites with search features, photo galleries, and lead capture forms for real estate agents."
      },
      {
        title: "Restaurant & Food Service",
        description: "Attractive restaurant websites with online menus, reservation systems, and food ordering capabilities."
      },
      {
        title: "Non-Profit Organizations",
        description: "Engaging websites for charities and non-profits with donation systems and volunteer management tools."
      }
    ]
  };

  const devProcessData = {
    title: "How We Build Your WordPress Website",
    description: "We follow a simple, clear process to create your perfect WordPress website that meets your business goals.",
    processSteps: [
      {
        number: 1,
        title: "Understanding Your Business",
        description: "We learn about your business, goals, and target customers to plan the perfect website for your needs."
      },
      {
        number: 2,
        title: "Planning Your Website",
        description: "We create wireframes and plan your website structure, pages, and features before we start building."
      },
      {
        number: 3,
        title: "Designing Your Look",
        description: "Our designers create beautiful, professional designs that represent your brand and appeal to your customers."
      },
      {
        number: 4,
        title: "Building Your Website",
        description: "We code your WordPress website using clean, fast code that works perfectly on all devices."
      },
      {
        number: 5,
        title: "Adding Your Content",
        description: "We add all your text, images, and content while making sure everything is optimized for search engines."
      },
      {
        number: 6,
        title: "Testing Everything",
        description: "We test your website thoroughly on different devices and browsers to make sure everything works perfectly."
      },
      {
        number: 7,
        title: "Launch & Training",
        description: "We launch your website and teach you how to update and manage your content easily."
      }
    ]
  };

  const faqItems = [
    {
      question: "How much does WordPress development cost?",
      answer: "WordPress development costs range from $3,000 for simple business websites to $50,000+ for complex online stores with custom features. The price depends on your design needs, special features, and whether you need an online store. We provide clear pricing upfront with no hidden costs."
    },
    {
      question: "How long does it take to build a WordPress website?",
      answer: "Most WordPress websites take 4 to 12 weeks to complete. Simple business websites can be finished in 4-6 weeks, while complex sites with custom features or online stores may take 8-12 weeks. We give you a clear timeline before we start working."
    },
    {
      question: "Is WordPress good for my business website?",
      answer: "Yes! WordPress is perfect for business websites. It's easy to update, search engine friendly, secure when properly maintained, and can grow with your business. Over 40% of all websites worldwide use WordPress because it's reliable and flexible."
    },
    {
      question: "Will you teach me how to update my WordPress website?",
      answer: "Absolutely! We provide complete training on how to update your WordPress website including adding new pages, blog posts, images, and managing your content. We make sure you feel comfortable using your new website before we finish the project."
    },
    {
      question: "Can you move my existing website to WordPress?",
      answer: "Yes, we can move your website from any platform to WordPress while keeping all your content, images, and search engine rankings intact. We handle the entire migration process safely and make sure nothing is lost during the transfer."
    },
    {
      question: "Do you provide ongoing support after my website is finished?",
      answer: "Yes, we offer ongoing maintenance and support packages to keep your WordPress website secure, updated, and running smoothly. This includes security updates, backups, performance monitoring, and technical support whenever you need help."
    },
    {
      question: "Will my WordPress website work on mobile phones?",
      answer: "Definitely! All our WordPress websites are mobile-responsive, meaning they look great and work perfectly on smartphones, tablets, and desktop computers. We make sure your website provides an excellent experience for all visitors."
    },
    {
      question: "Can you add special features to my WordPress website?",
      answer: "Yes, we can add custom features to your WordPress website through plugins and custom development. Whether you need appointment booking, membership areas, custom forms, or special functionality, we can build it for you."
    }
  ];

  const benefitsData = {
    title: "Why Choose Our WordPress Development Services",
    benefits: [
      "Fast website loading speeds that keep visitors engaged and improve your search engine rankings",
      "Easy-to-use admin panel that lets you update your website content without technical knowledge",
      "Mobile-friendly designs that look perfect on all devices and screen sizes",
      "Search engine optimized websites that help you rank higher in Google search results",
      "Secure, reliable websites with regular updates and security monitoring to protect your business"
    ],
    techIcons: [
      { name: "WordPress", isDark: true },
      { name: "PHP", isDark: false },
      { name: "jQuery", isDark: true },
      { name: "HTML5", isDark: false },
      { name: "CSS3", isDark: true },
      { name: "MySQL", isDark: false },
      { name: "WooCommerce", isDark: true },
      { name: "Elementor", isDark: false },
      { name: "ACF", isDark: true }
    ],
    ctaText: "Start Your WordPress Project"
  };

  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for WordPress Development?",
    features: [
      {
        id: "customization",
        title: "Unique Website Designs",
        content: "We create custom WordPress websites that are unique to your business, not cookie-cutter templates. Your website will stand out from competitors and perfectly represent your brand."
      },
      {
        id: "security",
        title: "Strong Website Security",
        content: "Your WordPress website will be protected with the latest security measures, regular updates, and monitoring to keep hackers away and your business data safe."
      },
      {
        id: "userInterface",
        title: "Easy Website Management",
        content: "We design simple, user-friendly admin areas that make updating your website content as easy as using Microsoft Word. No technical skills required."
      },
      {
        id: "performance",
        title: "Fast Loading Websites",
        content: "Your WordPress website will load quickly on all devices, keeping visitors happy and improving your Google search rankings. Fast websites get more customers."
      },
      {
        id: "integration",
        title: "Connect Your Business Tools",
        content: "We integrate your WordPress website with your existing business tools like payment systems, email marketing, CRM software, and social media platforms."
      },
      {
        id: "maintenance",
        title: "Ongoing Website Support",
        content: "Get peace of mind with our maintenance services including regular backups, security updates, performance monitoring, and technical support whenever you need help."
      }
    ]
  };

  const teamBannerData = {
    title: "Build Your WordPress Development",
    highlightedText: "Team",
    buttonText: "Start Your WordPress Project",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-purple-600",
    buttonGradientFrom: "from-purple-500",
    buttonGradientTo: "to-purple-600",
    buttonHoverFrom: "from-purple-600",
    buttonHoverTo: "to-purple-700"
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>WordPress Development Services | Custom WordPress Websites | WordPress Developers | Foxbeep</title>
        <meta name="description" content="Professional WordPress development services including custom websites, themes, plugins, and WooCommerce stores. 4.9★ rated WordPress developers creating fast, secure websites that help businesses grow online." />
        <meta name="keywords" content="wordpress development, wordpress developer, custom wordpress website, wordpress design, wordpress themes, wordpress plugins, woocommerce development, wordpress maintenance, wordpress support, wordpress migration" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="WordPress Development Services | Custom WordPress Websites | Foxbeep" />
        <meta property="og:description" content="Expert WordPress development with custom designs, fast loading speeds, and easy content management. 4.9★ rated developers creating successful WordPress websites." />
        <meta property="og:image" content="https://foxbeep.com/images/wordpress-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/wordpress-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep WordPress Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WordPress Development Services | Custom WordPress Websites" />
        <meta name="twitter:description" content="Professional WordPress development services with custom designs and easy content management. 4.9★ rated developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/wordpress-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="WordPress Development" />
        <meta name="expertise" content="WordPress Themes, Plugins, WooCommerce, Custom Development" />
        <meta name="rating" content="4.9/5 based on 52 reviews" />
        <meta name="specialization" content="Custom WordPress Websites, WordPress Design, WordPress Maintenance" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* WordPress-Specific Meta Tags */}
        <meta name="cms-platform" content="WordPress" />
        <meta name="wordpress-services" content="Custom Development, Themes, Plugins, WooCommerce, Migration, Maintenance" />
        <meta name="development-tools" content="PHP, MySQL, HTML5, CSS3, JavaScript, jQuery" />
        
        {/* Technology Meta Tags */}
        <meta name="technologies" content="WordPress, PHP, MySQL, WooCommerce, Elementor, ACF, HTML5, CSS3" />
        <meta name="features" content="Responsive Design, SEO Optimization, Mobile Friendly, Fast Loading, Secure" />
        <meta name="integrations" content="Payment Gateways, CRM, Email Marketing, Social Media, Analytics" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/wordpress-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/wordpress-development" />
        
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
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#7C3AED" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$3,000 - $50,000+" />
        <meta name="currency" content="USD" />
        
        {/* WordPress Development Meta Tags */}
        <meta name="development-time" content="4-12 weeks" />
        <meta name="platforms" content="WordPress, WooCommerce, Custom Plugins, Themes" />
        <meta name="support" content="Migration, Training, Ongoing Maintenance, Technical Support" />
        <meta name="target-audience" content="Small Business, E-commerce, Healthcare, Real Estate, Restaurants" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="WordPress Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen WordPress showcase image */}
        <section aria-label="WordPress Development Services Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/cms-wp.jpg"
              alt="WordPress Development Services - Custom WordPress Websites and Professional Web Development"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="WordPress Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="WordPress Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured WordPress Services Slider */}
        <section aria-label="Featured WordPress Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Custom WordPress Themes",
                description: "Beautiful, responsive themes designed specifically for your brand with clean, optimized code that loads fast.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-purple-500"
              },
              {
                id: 2,
                title: "WordPress Plugin Development",
                description: "Custom plugins that add special features to your website and help your business work more efficiently.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-500"
              },
              {
                id: 3,
                title: "WooCommerce Online Stores",
                description: "Complete e-commerce websites with shopping cart, payment processing, and inventory management systems.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-pink-500"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="purple"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="WordPress Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for WordPress Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build WordPress Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* WordPress Industry Solutions Section */}
        <section aria-label="WordPress Websites for Every Business" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="WordPress Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Common Questions About WordPress Development"
            subtitle="Get clear answers about our WordPress development services, pricing, timelines, and what makes WordPress perfect for your business website"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />     
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with WordPress Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}