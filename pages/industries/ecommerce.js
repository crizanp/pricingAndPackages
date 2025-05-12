import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const EcommerceServices = () => {
  // Hero section content
  const heroContent = {
    title: "Transformative E-commerce Solutions for Digital Retail",
    subtitle: "Empowering businesses with cutting-edge e-commerce technology, personalized shopping experiences, and scalable digital retail strategies.",
    buttonText: "Get Started",
    buttonLink: "#contact",
    backgroundImage: "/images/ecommerce-services-hero-banner.png",
    imageAlt: "Modern e-commerce platform interfaces and digital shopping"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "TECHNOLOGY IS REVOLUTIONIZING RETAIL THROUGH DIGITAL INNOVATION",
    highlightWord: "INNOVATION",
    descriptionText: "Technology is revolutionizing retail through innovative approaches to digital storefronts, customer experiences, and omnichannel integration. From AI-powered product recommendations to seamless checkout experiences and supply chain optimization, digital transformation is enhancing efficiency and personalization across the entire e-commerce ecosystem. Foxbeep helps retail businesses leverage technology to improve conversions, increase customer loyalty, and deliver exceptional online shopping experiences.",
    brandName: "Foxbeep",
    highlightColor: "bg-purple-300"
  };

  // E-commerce Platform Development section
  const platformDevelopmentContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing e-commerce industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "E-commerce Platform Development",
      "Customer Experience Optimization",
      "Omnichannel Integration",
      "E-commerce Analytics & Intelligence"
    ],
    featuredService: "E-commerce Platform Development",
    featuredServiceDescription: "We develop scalable, feature-rich e-commerce platforms tailored to your business needs. Our solutions integrate seamlessly with your existing systems while providing the flexibility to grow with your business and adapt to changing market demands.",
    featuredServiceImage: "/images/ecommerce-platform-development.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Custom storefronts",
        description: "We design and develop bespoke digital storefronts that showcase your unique brand identity, feature intuitive navigation, and provide seamless shopping experiences across all devices."
      },
      {
        title: "Headless commerce architecture",
        description: "Our headless commerce solutions separate the frontend presentation layer from the backend commerce functionality, enabling greater flexibility, faster performance, and personalized experiences."
      },
      {
        title: "Marketplace development",
        description: "We create scalable multi-vendor marketplace platforms with advanced vendor management, commission structures, and integrated payment splitting to power diverse business models."
      }
    ]
  };

  // Customer Experience Optimization section
  const customerExperienceContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing e-commerce industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "E-commerce Platform Development",
      "Customer Experience Optimization",
      "Omnichannel Integration",
      "E-commerce Analytics & Intelligence"
    ],
    featuredService: "Customer Experience Optimization",
    featuredServiceDescription: "We help e-commerce businesses create personalized, frictionless shopping experiences that drive conversions and build loyalty. Our CX solutions leverage behavioral data and AI to understand customer intent and deliver relevant content at every touchpoint.",
    featuredServiceImage: "/images/customer-experience-optimization.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Personalization engines",
        description: "Our AI-powered personalization systems analyze user behavior to deliver tailored product recommendations, content, and offers that significantly increase conversion rates and average order values."
      },
      {
        title: "Streamlined checkout experiences",
        description: "We develop frictionless checkout flows with smart payment options, address validation, and one-click purchasing to reduce cart abandonment and increase completion rates."
      },
      {
        title: "Loyalty & retention platforms",
        description: "Our comprehensive loyalty solutions create engaging reward programs, personalized incentives, and automated win-back campaigns to maximize customer lifetime value."
      }
    ]
  };

  // Omnichannel Integration section
  const omnichannelContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing e-commerce industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "E-commerce Platform Development",
      "Customer Experience Optimization",
      "Omnichannel Integration",
      "E-commerce Analytics & Intelligence"
    ],
    featuredService: "Omnichannel Integration",
    featuredServiceDescription: "We develop seamless omnichannel solutions that unify the customer experience across online and offline touchpoints. Our integrations ensure consistent product information, pricing, and promotions while enabling flexible fulfillment options.",
    featuredServiceImage: "/images/omnichannel-integration.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Unified commerce platforms",
        description: "Our integrated systems create a single source of truth for inventory, customer data, and transactions across all sales channels, enabling consistent experiences regardless of where customers shop."
      },
      {
        title: "In-store digital integration",
        description: "We develop solutions that bridge the physical-digital divide through in-store kiosks, mobile POS systems, QR-enabled product information, and contactless payment options."
      },
      {
        title: "Flexible fulfillment options",
        description: "Our omnichannel fulfillment solutions enable buy-online-pickup-in-store (BOPIS), curbside pickup, ship-from-store, and same-day delivery options with real-time inventory visibility across locations."
      }
    ]
  };

  // E-commerce Analytics & Intelligence section
  const analyticsIntelligenceContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing e-commerce industry solutions. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "E-commerce Platform Development",
      "Customer Experience Optimization",
      "Omnichannel Integration",
      "E-commerce Analytics & Intelligence"
    ],
    featuredService: "E-commerce Analytics & Intelligence",
    featuredServiceDescription: "We develop comprehensive analytics platforms that transform e-commerce data into actionable insights. Our solutions provide clear visibility into customer behavior, marketing performance, and operational efficiency to drive informed business decisions.",
    featuredServiceImage: "/images/ecommerce-analytics-intelligence.jpg",
    highlightColor: "bg-purple-300",
    featureDetails: [
      {
        title: "Customer journey analytics",
        description: "Our analytics platforms track and visualize the complete customer journey across touchpoints, identifying conversion barriers and optimization opportunities through funnel analysis and behavioral segmentation."
      },
      {
        title: "Predictive inventory management",
        description: "We create AI-powered forecasting systems that predict demand patterns, optimize stock levels, and reduce both stockouts and overstock situations to maximize inventory efficiency."
      },
      {
        title: "Marketing attribution models",
        description: "Our attribution solutions provide accurate multi-touch analysis of marketing effectiveness, allocating conversion value across channels to optimize ad spend and improve return on marketing investment."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "How can you help improve our e-commerce conversion rates?",
      answer: "We improve conversion rates through data-driven UX optimization, personalized product recommendations, A/B testing frameworks, streamlined checkout processes, and abandoned cart recovery systems. Our approach combines behavioral analytics with proven conversion strategies to identify and remove friction points throughout the customer journey."
    },
    {
      question: "What e-commerce platforms do you work with?",
      answer: "We work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built solutions. Our team has deep expertise in platform customization, theme development, plugin integration, and performance optimization across these ecosystems. We can also help migrate between platforms when your business outgrows its current solution."
    },
    {
      question: "How do you approach mobile optimization for e-commerce?",
      answer: "Our mobile optimization strategy focuses on responsive design, accelerated page loading through techniques like AMP and progressive image loading, simplified navigation patterns, thumb-friendly interfaces, and mobile-specific checkout optimizations. We ensure all e-commerce experiences perform flawlessly across all device types."
    },
    {
      question: "Can you help integrate our physical stores with our online presence?",
      answer: "Absolutely. Our omnichannel solutions include unified inventory management, buy-online-pickup-in-store (BOPIS) capabilities, in-store digital kiosks, mobile POS systems, shared customer data across channels, and consistent pricing and promotions. We create seamless experiences that bridge online and offline shopping moments."
    },
    {
      question: "What analytics capabilities do your e-commerce solutions provide?",
      answer: "Our analytics platforms deliver comprehensive insights including real-time sales dashboards, customer acquisition and retention metrics, product performance analysis, conversion funnel visualization, shopping cart analytics, search term analysis, customer segmentation, and marketing attribution models that drive data-informed business decisions."
    },
    {
      question: "How do you approach personalization in e-commerce?",
      answer: "We implement personalization through AI-powered product recommendations, dynamic content that adapts to user behavior, personalized email marketing automation, custom landing pages based on traffic source, behavioral triggers for real-time interactions, and segment-specific pricing and promotions that create tailored shopping experiences."
    },
    {
      question: "Can you help optimize our product search and filtering capabilities?",
      answer: "Yes, we develop advanced search solutions with natural language processing, auto-suggest functionality, typo tolerance, and semantic understanding. Our filtering systems include dynamic facets, visual filtering options, saved search preferences, and optimization for category-specific attributes to help customers find products quickly."
    },
    {
      question: "How do you handle e-commerce security and compliance?",
      answer: "We implement comprehensive security measures including PCI DSS compliance, secure payment gateways, SSL encryption, regular security audits, fraud detection systems, GDPR and CCPA compliance features, secure customer authentication, and data encryption at rest and in transit to protect both your business and your customers."
    },
    {
      question: "What options do you offer for international e-commerce expansion?",
      answer: "Our international e-commerce solutions include multi-currency support, localized payment methods, language-specific storefronts, international shipping and tax calculators, compliance with regional regulations, cultural adaptation of user experiences, and global inventory management to help you successfully expand into new markets."
    },
    {
      question: "Why choose Foxbeep for e-commerce technology solutions?",
      answer: "Foxbeep combines deep e-commerce expertise with cutting-edge technical capabilities. We understand the unique challenges of digital retail and develop solutions that address real business pain points. Our technology enhances conversion rates, improves customer experiences, optimizes operations, and provides actionable insights that drive growth and profitability."
    }
  ];

  // Final CTA section content
  const ctaContent = {
    heading: "Ready to transform your retail business with innovative e-commerce technology?",
    description: "Let's discuss how our digital retail expertise can help you optimize conversions, increase customer loyalty, and deliver exceptional online shopping experiences.",
    buttonText: "Book a consultation",
    buttonLink: "/contact"
  };

  return (
    <div>
      {/* Hero Banner */}
      <Hero {...heroContent} />
      
      {/* Text Highlight Section */}
      <TextHighlight {...textHeroContent} />
      
      {/* Trusted By Brand Slider */}
      <BrandSlider />
      
      {/* Services Overview Section */}
      <div className="max-w-7xl mx-auto px-4 xl:px-0 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl relative inline-block mb-6">
          <span className="bg-purple-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to developing technology solutions for the e-commerce industry. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "E-commerce Platform Development",
            "Customer Experience Optimization",
            "Omnichannel Integration",
            "E-commerce Analytics & Intelligence",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-purple-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15H5v-3.414l8.293-8.293a1 1 0 011.414 0zM7 13h.586L14 6.586 13.414 6 7 12.414V13z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Detailed Service Sections */}
      <EdtechServices {...platformDevelopmentContent} />
      <EdtechServices {...customerExperienceContent} />
      <EdtechServices {...omnichannelContent} />
      <EdtechServices {...analyticsIntelligenceContent} />
      
      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our e-commerce industry solutions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-2xl"
      />
      
      {/* Final Text Hero Section */}
      <TextHeroSection />
    </div>
  );
};

export default EcommerceServices;