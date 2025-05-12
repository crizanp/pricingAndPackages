import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import { EdtechServices } from "../components/industry/eduTech";
import { Hero } from "../components/industry/hero";
import { TextHighlight } from "../components/industry/textHero";
import FAQSection from "../components/services/faqSection";

const B2BSoftware = () => {
  // Hero section content
  const heroContent = {
    title: "Transforming Business Operations Through Enterprise Software",
    subtitle: "Delivering powerful B2B solutions that streamline workflows, enhance collaboration, and drive growth in today's competitive business landscape.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "/images/b2b-software-banner-hero-image.png",
    imageAlt: "Business professionals using enterprise software"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "TECHNOLOGY IS RESHAPING BUSINESS OPERATIONS BY AUTOMATING",
    highlightWord: "AUTOMATING",
    descriptionText: "Technology is reshaping business operations by automating complex workflows, facilitating data-driven decision making, and fostering seamless collaboration between departments, customers, and partners. From cloud-native architectures to API ecosystems, each emerging technology is poised to transform enterprise operations. Foxbeep helps businesses enhance operational efficiency and customer satisfaction via innovative, scalable B2B software solutions.",
    brandName: "Foxbeep",
    highlightColor: "bg-indigo-300"
  };

  // Enterprise Software Development section
  const enterpriseSoftwareContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal B2B software. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Enterprise Software Development",
      "SaaS Platform Development",
      "Workflow Automation Solutions",
      "Data Analytics & Business Intelligence"
    ],
    featuredService: "Enterprise Software Development",
    featuredServiceDescription: "Robust, scalable enterprise applications are essential for modern business operations. We empower forward-thinking organizations to streamline processes, enhance collaboration, and integrate innovative workflows transforming operational efficiency.",
    featuredServiceImage: "/images/enterprise-software-development.jpg",
    highlightColor: "bg-indigo-300",
    featureDetails: [
      {
        title: "Custom enterprise applications",
        description: "We develop enterprise-grade solutions incorporating cutting-edge technologies, empowering your organization to optimize complex operations. Our platforms feature seamless integration capabilities, customized workflow automation, and secure multi-tenant architecture."
      },
      {
        title: "System integration",
        description: "Our forward-looking teams leverage modern API strategies to enhance business connectivity and elevate operational efficiency. By integrating customized, feature-rich applications with existing systems, we optimize cross-functional workflows, streamline data exchange, and foster a connected enterprise ecosystem."
      },
      {
        title: "Enterprise mobility solutions",
        description: "We transform critical business processes into mobile-friendly applications with robust security features, offline capabilities, and seamless synchronization to keep your workforce productive regardless of location."
      }
    ]
  };

  // SaaS Platform Development section
  const saasPlatformContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal B2B software. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Enterprise Software Development",
      "SaaS Platform Development",
      "Workflow Automation Solutions",
      "Data Analytics & Business Intelligence"
    ],
    featuredService: "SaaS Platform Development",
    featuredServiceDescription: "We create scalable, cloud-native SaaS platforms engineered for growth, multi-tenancy, and operational efficiency. We develop secure, flexible solutions that accelerate time-to-market and enable subscription-based business models, making your services accessible to a broader range of business customers.",
    featuredServiceImage: "/images/saas-platform-development.jpg",
    highlightColor: "bg-indigo-300",
    featureDetails: [
      {
        title: "Multi-tenant architecture",
        description: "We design scalable multi-tenant SaaS solutions with robust data isolation, configurable features, and efficient resource allocation. Our customized platforms enable you to serve multiple customers from a single codebase while maintaining security and performance."
      },
      {
        title: "Subscription management",
        description: "We specialize in developing comprehensive subscription management systems that handle billing cycles, tier-based pricing models, usage tracking, and automated invoicing to maximize recurring revenue streams."
      },
      {
        title: "White-label solutions",
        description: "We specialize in creating customizable white-label software platforms that allow your clients to rebrand your solution as their own, complete with customized user interfaces, domain settings, and configuration options."
      }
    ]
  };

  // Workflow Automation Solutions section
  const workflowAutomationContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal B2B software. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Enterprise Software Development",
      "SaaS Platform Development",
      "Workflow Automation Solutions",
      "Data Analytics & Business Intelligence"
    ],
    featuredService: "Workflow Automation Solutions",
    featuredServiceDescription: "We revolutionize business efficiency by designing and developing intelligent workflow automation platforms. Our solutions enable teams to eliminate manual processes, reduce errors, and accelerate business operations with unprecedented precision.",
    featuredServiceImage: "/images/workflow-automation-solutions.jpg",
    highlightColor: "bg-indigo-300",
    featureDetails: [
      {
        title: "Business process automation",
        description: "We specialize in creating comprehensive automation solutions that digitize paper-based processes, automate repetitive tasks, and orchestrate complex workflows across departments and systems."
      },
      {
        title: "Low-code/No-code platforms",
        description: "With extensive expertise, we craft flexible business automation platforms that empower non-technical users to create, modify, and deploy automated workflows without extensive coding knowledge."
      },
      {
        title: "Document automation",
        description: "At Foxbeep, we specialize in developing intelligent document processing systems that extract data from unstructured documents, automate approval workflows, and integrate with your document management systems."
      }
    ]
  };

  // Data Analytics & Business Intelligence section
  const dataAnalyticsContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal B2B software. Our key focus areas are:",
    companyName: "Foxbeep",
    servicesList: [
      "Enterprise Software Development",
      "SaaS Platform Development",
      "Workflow Automation Solutions",
      "Data Analytics & Business Intelligence"
    ],
    featuredService: "Data Analytics & Business Intelligence",
    featuredServiceDescription: "We specialize in the development and deployment of advanced analytics platforms to transform raw data into actionable insights, enabling data-driven decision making, performance monitoring, and strategic planning across your organization.",
    featuredServiceImage: "/images/data-analytics-business-intelligence.jpg",
    highlightColor: "bg-indigo-300",
    featureDetails: [
      {
        title: "Business intelligence dashboards",
        description: "We leverage advanced visualization technologies to transform complex data into intuitive, interactive dashboards. This empowers decision-makers to identify trends, monitor KPIs, and gain insights that drive strategic business decisions."
      },
      {
        title: "Predictive analytics platforms",
        description: "Offer comprehensive forecasting capabilities through our bespoke analytics platforms that leverage machine learning to predict business trends, customer behavior, and market opportunities. These intelligent systems transform historical data into forward-looking insights."
      },
      {
        title: "Data integration solutions",
        description: "We specialize in creating robust ETL (Extract, Transform, Load) pipelines and data integration frameworks that connect disparate systems, unify data sources, and create a single source of truth for your organization."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What types of B2B software solutions do you offer?",
      answer: "We offer end-to-end B2B software development services, including enterprise applications, SaaS platforms, workflow automation tools, customer portals, business intelligence dashboards, and integration middleware. Our goal is to transform the way businesses operate through intelligent, scalable software solutions."
    },
    {
      question: "How do you ensure scalability in enterprise applications?",
      answer: "We design for scalability from the ground up, implementing microservices architecture, containerization, cloud-native technologies, and horizontal scaling capabilities. Our solutions grow seamlessly with your business, handling increasing loads, users, and data volumes without compromising performance."
    },
    {
      question: "Can you build a custom SaaS platform for our business?",
      answer: "Absolutely. We specialize in developing multi-tenant SaaS platforms tailored to your specific business model and market requirements. These solutions include robust subscription management, white-labeling capabilities, and the flexibility to serve diverse customer segments from a single codebase."
    },
    {
      question: "How do technologies like AI enhance B2B software?",
      answer: "AI transforms B2B software by enabling intelligent automation, predictive analytics, natural language processing, and personalized user experiences. These capabilities increase operational efficiency and provide deeper business insights, especially in areas like sales, customer service, and resource planning."
    },
    {
      question: "Do you provide API development and integration services?",
      answer: "Yes. We design and develop robust APIs that enable seamless connectivity between your applications and third-party services. Our integration expertise spans REST, GraphQL, SOAP, and event-driven architectures, ensuring your business systems communicate effectively in real-time."
    },
    {
      question: "How do you ensure security in B2B applications?",
      answer: "We implement comprehensive security measures including role-based access controls, encryption, secure authentication, regular vulnerability testing, and compliance with industry standards (SOC 2, GDPR, HIPAA). Security is integrated throughout our development lifecycle, not added as an afterthought."
    },
    {
      question: "What kind of analytics capabilities can you build into our software?",
      answer: "Our solutions include advanced analytics features such as interactive dashboards, real-time reporting, predictive modeling, anomaly detection, and data visualization tools. These capabilities provide actionable insights for operational improvements and strategic decision-making."
    },
    {
      question: "Can your B2B solutions integrate with our existing systems?",
      answer: "Yes, we offer extensive integration capabilities with CRM, ERP, accounting systems, payment processors, and other business applications. Our integration approach ensures seamless data flow, process continuity, and a unified experience across your technology ecosystem."
    },
    {
      question: "Do you support post-launch maintenance and updates?",
      answer: "Definitely. We offer continuous support, feature enhancements, security updates, and performance optimization to ensure your B2B software remains competitive, secure, and aligned with evolving business requirements and technology standards."
    },
    {
      question: "Why choose Foxbeep for B2B software development?",
      answer: "Foxbeep stands out for its deep expertise in enterprise architecture, modern development practices, and business process optimization. We deliver secure, scalable, and future-ready solutions that empower businesses to streamline operations and drive growth in rapidly changing markets."
    }
  ];

  // Final CTA section content
  const ctaContent = {
    heading: "Ready to transform your business with powerful software solutions?",
    description: "Let's discuss how our B2B software expertise can help you optimize operations, enhance collaboration, and drive growth.",
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
          <span className="bg-indigo-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building impactful B2B software. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Enterprise Software Development",
            "SaaS Platform Development",
            "Workflow Automation Solutions",
            "Data Analytics & Business Intelligence",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-indigo-500">
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
      <EdtechServices {...enterpriseSoftwareContent} />
      <EdtechServices {...saasPlatformContent} />
      <EdtechServices {...workflowAutomationContent} />
      <EdtechServices {...dataAnalyticsContent} />
      
      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our B2B software solutions"
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

export default B2BSoftware;