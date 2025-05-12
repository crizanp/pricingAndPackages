import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const CRMDevelopment = () => {
  // Hero section content
  const heroContent = {
    title: "Custom CRM Development to Power Business Relationships",
    subtitle: "Building intelligent customer relationship management solutions that enhance engagement, streamline sales processes, and maximize customer lifetime value.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "/images/crm-development-hero-banner.png",
    imageAlt: "Business team using CRM software dashboard"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "MODERN CRM SYSTEMS ARE REDEFINING BUSINESS RELATIONSHIPS THROUGH PERSONALIZATION",
    highlightWord: "PERSONALIZATION",
    descriptionText: "Modern CRM systems are redefining business relationships through personalization, automation, and data-driven insights. From AI-powered sales forecasting to omnichannel customer engagement, each CRM innovation transforms how businesses attract, convert, and retain customers. Foxbeep delivers tailored CRM solutions that enhance customer experiences, optimize sales workflows, and provide actionable analytics for sustainable growth.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Custom CRM Development section
  const customCRMContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal CRM solution. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Development",
      "Sales Automation Solutions",
      "Customer Support & Service CRM",
      "CRM Integration & Migration"
    ],
    featuredService: "Custom CRM Development",
    featuredServiceDescription: "We design and develop bespoke CRM systems tailored to your unique business processes and customer journey. Our custom solutions align perfectly with your sales methodology, customer engagement strategies, and reporting requirements, providing a competitive advantage over generic platforms.",
    featuredServiceImage: "/images/custom-crm-development.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Tailored CRM architecture",
        description: "We develop flexible CRM frameworks specifically designed for your business processes, incorporating customized data models, workflow automation, and user roles that reflect your organization's structure and operational needs."
      },
      {
        title: "360° customer profiles",
        description: "Our solutions create comprehensive customer views by consolidating interaction data across touchpoints, providing actionable insights into preferences, behaviors, and engagement patterns to drive personalized experiences."
      },
      {
        title: "Industry-specific CRM solutions",
        description: "We create specialized CRM platforms for sectors like real estate, healthcare, finance, and manufacturing with industry-specific functionality, compliance features, and process automation tailored to vertical market requirements."
      }
    ]
  };

  // Sales Automation Solutions section
  const salesAutomationContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal CRM solution. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Development",
      "Sales Automation Solutions",
      "Customer Support & Service CRM",
      "CRM Integration & Migration"
    ],
    featuredService: "Sales Automation Solutions",
    featuredServiceDescription: "We build intelligent sales automation systems that accelerate deal cycles, enhance pipeline visibility, and boost conversion rates. Our solutions eliminate repetitive tasks, prioritize high-value opportunities, and provide actionable insights to sales teams and management.",
    featuredServiceImage: "/images/sales-automation-solutions.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Sales pipeline management",
        description: "We develop intuitive pipeline visualization tools with stage-specific workflows, opportunity scoring, and forecasting capabilities to optimize deal progression and resource allocation throughout the sales cycle."
      },
      {
        title: "Lead management & scoring",
        description: "Our solutions implement advanced lead capturing, distribution, and nurturing systems with AI-powered scoring algorithms that identify promising prospects based on behavior patterns and engagement metrics."
      },
      {
        title: "Sales intelligence & analytics",
        description: "We create comprehensive dashboards and reporting tools that transform sales data into actionable insights, providing real-time visibility into performance metrics, conversion rates, and revenue forecasts."
      }
    ]
  };

  // Customer Support & Service CRM section
  const customerSupportContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal CRM solution. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Development",
      "Sales Automation Solutions",
      "Customer Support & Service CRM",
      "CRM Integration & Migration"
    ],
    featuredService: "Customer Support & Service CRM",
    featuredServiceDescription: "We deliver comprehensive support and service CRM solutions that streamline case management, enable rapid issue resolution, and enhance customer satisfaction. Our platforms connect customer service teams with the information and tools they need to deliver exceptional support experiences.",
    featuredServiceImage: "/images/customer-support-service-crm.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Ticket management systems",
        description: "We create sophisticated case management platforms with automated routing, SLA tracking, and escalation workflows that ensure timely resolution of customer issues while maintaining accountability across support teams."
      },
      {
        title: "Knowledge management integration",
        description: "Our solutions incorporate intelligent knowledge bases with contextual search capabilities, enabling agents to quickly access relevant information and deliver consistent, accurate responses to customer inquiries."
      },
      {
        title: "Omnichannel support capabilities",
        description: "We develop unified support platforms that seamlessly integrate communication across email, chat, phone, social media, and self-service portals, providing consistent customer experiences regardless of channel preference."
      }
    ]
  };

  // CRM Integration & Migration section
  const crmIntegrationContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal CRM solution. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Custom CRM Development",
      "Sales Automation Solutions",
      "Customer Support & Service CRM",
      "CRM Integration & Migration"
    ],
    featuredService: "CRM Integration & Migration",
    featuredServiceDescription: "We specialize in seamless CRM integration with existing business systems and data migration from legacy platforms. Our expertise ensures continuity of operations, data integrity, and enhanced functionality as your CRM ecosystem evolves.",
    featuredServiceImage: "/images/crm-integration-migration.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Enterprise system integration",
        description: "We develop robust integration frameworks connecting your CRM with ERP, marketing automation, e-commerce platforms, and financial systems to create unified business processes and 360-degree data visibility."
      },
      {
        title: "Data migration & cleansing",
        description: "Our comprehensive migration methodology includes data mapping, cleansing, and validation processes that ensure accurate transfer from legacy systems while enhancing data quality and compliance."
      },
      {
        title: "API development & management",
        description: "We create powerful, secure API layers that facilitate real-time data exchange between your CRM and third-party applications, enabling extended functionality and seamless workflow automation across platforms."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What are the advantages of custom CRM development over off-the-shelf solutions?",
      answer: "Custom CRM development delivers perfect alignment with your specific business processes, integration with existing systems, enhanced scalability, and competitive differentiation. While requiring higher initial investment than off-the-shelf products, custom solutions eliminate ongoing subscription costs, avoid feature bloat, and provide long-term value through improved operational efficiency and customer insights tailored to your needs."
    },
    {
      question: "How long does it typically take to develop a custom CRM solution?",
      answer: "Development timelines vary based on complexity, but typically range from 3-9 months. Basic CRM systems can be developed in 3-4 months, while enterprise-grade solutions with complex integrations may require 6-9 months. We implement an agile methodology with phased delivery, allowing you to start utilizing core functionality while additional features are being developed."
    },
    {
      question: "Can you integrate our CRM with existing business systems?",
      answer: "Absolutely. We specialize in creating seamless integrations between your CRM and essential business systems including ERP, marketing automation platforms, accounting software, e-commerce systems, customer support tools, and communication platforms. These integrations eliminate data silos, ensure information consistency, and create unified business processes across your technology ecosystem."
    },
    {
      question: "How do you ensure data security in CRM systems?",
      answer: "We implement comprehensive security measures including role-based access controls, data encryption at rest and in transit, secure authentication with MFA, regular security audits, and compliance with relevant regulations like GDPR, CCPA, and industry standards. Our development processes incorporate security by design, with continuous vulnerability testing throughout the development lifecycle."
    },
    {
      question: "Can you migrate data from our existing CRM to a new system?",
      answer: "Yes, we provide comprehensive data migration services including data mapping, cleaning, transformation, and validation. Our migration specialists ensure accurate transfer of customer records, interaction history, pipeline data, and custom fields while maintaining relationships between records. We also implement parallel running periods and verification processes to ensure data integrity before full cutover."
    },
    {
      question: "How can AI enhance our CRM capabilities?",
      answer: "AI transforms CRM functionality through intelligent lead scoring, predictive sales forecasting, automated data entry, sentiment analysis, and personalized customer recommendations. These capabilities enable sales teams to focus on high-value activities while providing deeper customer insights. Our AI implementations are designed for practical business outcomes, continuously improving through machine learning based on your specific data patterns."
    },
    {
      question: "Do you provide support and maintenance after CRM implementation?",
      answer: "Yes, we offer comprehensive post-launch support including technical maintenance, performance optimization, user training, bug fixes, and feature enhancements. Our support packages range from basic technical assistance to full managed services with dedicated teams and guaranteed response times, ensuring your CRM continues to deliver optimal performance and evolves with your business needs."
    },
    {
      question: "Can you develop mobile CRM applications?",
      answer: "Definitely. We create responsive web applications and native mobile CRM apps for iOS and Android platforms, enabling sales teams and service personnel to access customer data, update records, and manage activities from anywhere. Our mobile solutions include offline capabilities with automatic synchronization, location-based features, and optimized interfaces designed for on-the-go productivity."
    },
    {
      question: "How do you ensure user adoption of new CRM systems?",
      answer: "We focus on user adoption through intuitive interface design, comprehensive training programs, and change management support. Our development process includes stakeholder involvement from the beginning, creating systems that reflect actual user workflows rather than forcing new processes. We also implement phased rollouts, super-user programs, and continuous feedback loops to ensure successful adoption throughout your organization."
    },
    {
      question: "What makes Foxbeep different from other CRM development companies?",
      answer: "Foxbeep distinguishes itself through our consultative approach that begins with understanding your business objectives rather than just technical requirements. We combine deep industry experience with technical expertise in modern CRM architectures, ensuring solutions that deliver measurable business impact. Our ongoing partnership model provides strategic guidance and technical support well beyond initial implementation, helping you continuously evolve your customer relationship capabilities."
    }
  ];

  // Final CTA section content
  const ctaContent = {
    heading: "Ready to transform your customer relationships with an intelligent CRM solution?",
    description: "Let's discuss how our CRM development expertise can help you engage customers more effectively, optimize sales processes, and drive sustainable growth.",
    buttonText: "Schedule a consultation",
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
          <span className="bg-blue-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building powerful CRM solutions. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Custom CRM Development",
            "Sales Automation Solutions",
            "Customer Support & Service CRM",
            "CRM Integration & Migration",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-blue-500">
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
      <EdtechServices {...customCRMContent} />
      <EdtechServices {...salesAutomationContent} />
      <EdtechServices {...customerSupportContent} />
      <EdtechServices {...crmIntegrationContent} />
      
      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our CRM development services"
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

export default CRMDevelopment;