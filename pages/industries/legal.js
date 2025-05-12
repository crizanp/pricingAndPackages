import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

const Legal = () => {
  // This data would typically come from props, CMS, or API
  const heroContent = {
    title: "Transforming Legal Services Through Innovative Technologies",
    subtitle: "Revolutionizing the legal experience with powerful digital solutions that empower attorneys and clients in an increasingly complex legal landscape.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "https://10pearls.com/wp-content/uploads/2025/01/legal-banner-hero-image.png",
    imageAlt: "Modern law office with legal professionals"
  };
  const textHeroContent = {
    headingText: "TECHNOLOGY IS RESHAPING LEGAL SERVICES BY TRANSFORMING",
    highlightWord: "TRANSFORMING",
    descriptionText: "Technology is reshaping legal services by transforming how legal information is accessed, facilitating data-driven decision making, and fostering seamless collaboration between attorneys and clients alike. From AI-powered legal research to blockchain-based smart contracts, each emerging technology is poised to revolutionize legal paradigms. {brandName} aids legal enterprises in enhancing client experiences and operational efficiency via an innovative, secure legal technology ecosystem.",
    brandName: "10Pearls",
    highlightColor: "bg-blue-300"
  };
  const legaltechContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "we have a unique approach to developing your ideal legal software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Case Management Systems",
      "Legal Document Automation",
      "Compliance and Regulatory Tech",
      "Artificial Intelligence"
    ],
    featuredService: "Case Management Systems",
    featuredServiceDescription: "Seamless, secure case management solutions are essential for modern legal practice. We empower forward-thinking law firms and legal departments to manage cases efficiently, track client interactions, and integrate innovative workflow methods transforming legal practice.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/case-management-systems.jpg",
    highlightColor: "bg-blue-300" // Changed from lime to blue for legal theme
  };
  const MorelegalContent = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal legal software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Case Management Systems",
      "Legal Document Automation",
      "Compliance and Regulatory Tech",
      "Artificial Intelligence"
    ],
    featuredService: "Case Management Systems",
    featuredServiceDescription: "Seamless, secure case management solutions are essential for modern legal practice. We empower forward-thinking law firms and legal departments to manage cases efficiently, track client interactions, and integrate innovative workflow methods transforming legal practice.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/case-management-systems.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Intelligent legal practice platforms",
        description: "We develop case management solutions incorporating AI assistance, empowering every attorney to manage client matters with unprecedented efficiency. Our platforms feature seamless document tracking, customized reporting dashboards, and secure client portal accessibility."
      },
      {
        title: "Platform integration",
        description: "Our forward-looking teams leverage cutting-edge technologies to enhance legal workflows and elevate client service. By integrating customized, feature-rich practice management platforms, we optimize operational outcomes, streamline case handling, and foster a collaborative legal environment."
      },
      {
        title: "Legal analytics and reporting",
        description: "We transform extensive case data into visually intuitive, actionable insights for all stakeholders and develop analytics tools to monitor attorney productivity, case progress, and financial performance."
      }
    ]
  };
  const Morelegal2Content = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal legal software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Case Management Systems",
      "Legal Document Automation",
      "Compliance and Regulatory Tech",
      "Artificial Intelligence"
    ],
    featuredService: "Legal Document Automation",
    featuredServiceDescription: "We create powerful document automation systems including intelligent contract generation, e-signature integration, and document assembly platforms. We develop tools for document creation, review, and distribution, making legal services more efficient and accessible for clients.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/legal-document-automation.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Document Management System (DMS)",
        description: "We facilitate custom document creation by providing intuitive document management tools, robust templates, and seamless integration capabilities within our DMS platform. Our customized DMS solutions manage authoring, storage, versioning, and document analytics and streamline content creation."
      },
      {
        title: "Client Portal Solutions",
        description: "We specialize in designing and developing robust client portal platforms tailored to facilitate secure document sharing, case updates, and interactive communications between attorneys and clients."
      },
      {
        title: "Mobile Legal App Development",
        description: "We specialize in the design and development of mobile applications offering intuitive interfaces, secure document access, and offline capabilities, ensuring seamless legal services that align with modern clients' needs and preferences."
      }
    ]
  };

  const Morelegal3Content = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal legal software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Case Management Systems",
      "Legal Document Automation",
      "Compliance and Regulatory Tech",
      "Artificial Intelligence"
    ],
    featuredService: "Compliance and Regulatory Tech",
    featuredServiceDescription: "We revolutionize regulatory compliance for legal institutions by designing and developing automated monitoring and reporting solutions. Our compliance tools allow legal teams to navigate complex regulatory environments with confidence and precision.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/compliance-regulatory-tech.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Automated Compliance Monitoring",
        description: "We specialize in creating comprehensive compliance solutions utilizing AI/ML to track regulatory changes and ensure continued adherence to evolving legal standards across jurisdictions."
      },
      {
        title: "Blockchain Solutions",
        description: "With extensive expertise, we craft secure blockchain-based solutions for immutable record-keeping, smart contracts, and transparent transaction management. Our teams utilize distributed ledger technology to create tamper-proof legal documentation systems."
      },
      {
        title: "Risk Management Tools",
        description: "At 10Pearls, we specialize in developing risk assessment and management platforms to identify potential legal and compliance issues before they escalate. Incorporating predictive analytics serves to enhance due diligence and mitigate liability."
      }
    ]
  };
  const Morelegal4Content = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal legal software. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Case Management Systems",
      "Legal Document Automation",
      "Compliance and Regulatory Tech",
      "Artificial Intelligence"
    ],
    featuredService: "Artificial Intelligence",
    featuredServiceDescription: "We specialize in the development and deployment of AI technologies to transform legal research, contract analysis, case prediction, and due diligence processes, promoting efficiency and precision in legal services delivery.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/artificial-intelligence-legal.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Legal Research Automation",
        description: "We leverage AI/ML algorithms to transform legal research capabilities, enabling attorneys to quickly analyze case law, statutes, and regulations. This empowers legal professionals to deliver more accurate and efficient counsel."
      },
      {
        title: "Contract Analysis Tools",
        description: "Offer comprehensive contract review through our bespoke AI systems that can identify risks, inconsistencies, and non-standard clauses. These intelligent tools streamline due diligence and contract management processes."
      },
      {
        title: "Predictive Analytics",
        description: "We specialize in the creation of AI-driven analytics platforms designed to predict case outcomes, litigation timelines, and resource requirements based on historical data and similar precedents."
      }
    ]
  };
  const faqItems = [
    {
      question: "What types of legal technology solutions do you offer?",
      answer: "We offer end-to-end legal technology development services, including Case Management Systems, document automation platforms, AI-driven legal research tools, compliance monitoring software, blockchain-based smart contracts, and legal analytics dashboards. Our goal is to reshape the way legal services are delivered and experienced."
    },
    {
      question: "How do you use AI in legal platforms?",
      answer: "We leverage artificial intelligence to deliver automated legal research, contract analysis, predictive case outcomes, and regulatory compliance monitoring. Our AI-driven assistants also provide efficient document review and due diligence support for legal professionals."
    },
    {
      question: "Can you build a customized Case Management System?",
      answer: "Absolutely. We specialize in developing scalable, feature-rich case management platforms tailored to your firm's specific practice areas and workflows. These systems support matter tracking, document management, time and billing, and client communications in a secure, collaborative environment."
    },
    {
      question: "How do technologies like blockchain enhance legal services?",
      answer: "Blockchain transforms legal services by offering immutable record-keeping, automated smart contracts, and transparent transaction management. These tools increase security and efficiency, especially in areas like intellectual property, real estate, and corporate governance."
    },
    {
      question: "Do you provide mobile legal solutions?",
      answer: "Yes. We design mobile-first legal apps with intuitive interfaces, secure document access, client communication tools, and time tracking capabilities. These apps ensure attorneys can work efficiently from anywhere while maintaining client confidentiality."
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer: "We develop secure platforms that implement military-grade encryption, role-based access controls, and comprehensive audit trails. Our solutions adhere to industry standards including GDPR, CCPA, and attorney-client privilege requirements to safeguard sensitive legal information."
    },
    {
      question: "What kind of analytics do your platforms offer?",
      answer: "Our systems provide real-time insights on case progress, attorney productivity, financial performance, and practice area profitability. Dashboards and reporting tools empower firm management to make data-driven decisions that enhance operational efficiency and client service."
    },
    {
      question: "Can your platforms integrate with existing legal software?",
      answer: "Yes, we offer seamless platform integration with practice management systems, document management solutions, accounting software, e-discovery tools, and third-party legal research databases. This ensures unified data flow, smooth operations, and improved practice continuity."
    },
    {
      question: "Do you support post-launch maintenance and updates?",
      answer: "Definitely. We offer continuous support, platform optimization, new feature rollouts, and technology updates to keep your legal technology solution scalable, secure, and aligned with evolving regulatory requirements and practice needs."
    },
    {
      question: "Why choose 10Pearls for legal technology development?",
      answer: "10Pearls stands out for its deep expertise in emerging technologies, user-centric design, and proven success in the legal sector. We deliver secure, scalable, and future-ready solutions that empower attorneys and enhance client service delivery."
    }
  ];

  return (
    <div>
      <Hero {...heroContent} />
      <TextHighlight {...textHeroContent} />;
      <BrandSlider />
      <div className="max-w-7xl mx-auto px-4 xl:px-0 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl relative inline-block mb-6">
          <span className="bg-blue-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building impactful legal software. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Case Management Systems",
            "Compliance and Regulatory Tech",
            "Legal Document Automation",
            "Artificial Intelligence",
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

      <EdtechServices {...MorelegalContent} />;
      <EdtechServices {...Morelegal2Content} />;
      <EdtechServices {...Morelegal3Content} />;
      <EdtechServices {...Morelegal4Content} />;
      <FAQSection
        title="Frequently Asked Questions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-2xl"
      />
      <TextHeroSection />
      {/* Rest of the page content would go here */}
    </div>
  );
};

export default Legal;