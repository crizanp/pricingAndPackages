import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function LegalIndustrySoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Legal Technology Solutions",
    "url": "https://foxbeep.com/industries/legal",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional legal industry technology development services including case management systems, law firm software, legal document automation, and legal-tech solutions. 18+ years experience with secure legal technology development.",
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
      "name": "Legal Industry Technology Development Services",
      "description": "Custom legal-tech development, case management systems, law firm software, legal document automation, and legal practice management solutions"
    },
    "expertise": [
      "Legal Case Management Systems",
      "Law Firm Practice Management",
      "Legal Document Automation",
      "Client Portal Development",
      "Legal Billing & Time Tracking",
      "Court Management Systems"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Legal Industry Technology Development Services",
    subtitle: "Custom legal-tech solutions including case management systems, law firm software, legal document automation, and client portal systems designed to streamline legal practice operations and enhance client service delivery.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/legal-image.png",
    imageAlt: "Legal industry technology development and law firm solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "LEGAL-TECH DEVELOPMENT FOR MODERN LAW FIRMS",
    highlightWord: "DEVELOPMENT",
    descriptionText: "Legal industry technology development transforms legal practice through innovative digital solutions. From case management systems to document automation platforms, our development expertise delivers secure legal-tech applications. We specialize in custom law firm software, client portals, and integrated legal systems that improve practice efficiency and client satisfaction.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Case Management Systems section
  const caseManagementContent = {
    mainHeading: "Our Legal Industry Technology Solutions",
    introText: "We deliver professional legal-tech development services focused on enhancing law firm operations and legal service delivery:",
    companyName: "Foxbeep",
    servicesList: [
      "Legal Case Management Systems",
      "Law Firm Practice Management",
      "Legal Document Automation",
      "Client Portal Systems"
    ],
    featuredService: "Legal Case Management Systems",
    featuredServiceDescription: "Comprehensive case management platforms with matter tracking, deadline management, document organization, client communication, and legal workflow automation. Designed for law firms, legal departments, and solo practitioners.",
    featuredServiceImage: "/images/legal-case-management.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Matter & Case Tracking",
        description: "Complete case lifecycle management with matter intake, case status tracking, milestone management, court date scheduling, case history documentation, and automated case progression workflows."
      },
      {
        title: "Legal Deadline Management",
        description: "Advanced calendar systems with court deadlines, statute of limitations tracking, automatic reminders, conflict checking, calendar synchronization, and critical date management for compliance assurance."
      },
      {
        title: "Document Management & Organization",
        description: "Secure document repositories with version control, metadata tagging, full-text search, document templates, electronic filing integration, and collaborative document review capabilities."
      }
    ]
  };

  // Law Firm Practice Management section
  const practiceManagementContent = {
    mainHeading: "Our Legal Industry Technology Solutions",
    introText: "We deliver professional legal-tech development services focused on enhancing law firm operations and legal service delivery:",
    companyName: "Foxbeep",
    servicesList: [
      "Legal Case Management Systems",
      "Law Firm Practice Management",
      "Legal Document Automation",
      "Client Portal Systems"
    ],
    featuredService: "Law Firm Practice Management",
    featuredServiceDescription: "Complete practice management solutions with time tracking, billing automation, client relationship management, financial reporting, and administrative tools. Perfect for law firms of all sizes and legal departments.",
    featuredServiceImage: "/images/law-firm-practice-management.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Time Tracking & Billing",
        description: "Comprehensive time management with automated time capture, billable hour tracking, expense management, invoice generation, payment processing, and detailed billing analytics for accurate client billing."
      },
      {
        title: "Client Relationship Management",
        description: "Integrated CRM systems with client contact management, communication history, conflict checking, client intake processes, relationship tracking, and client satisfaction monitoring."
      },
      {
        title: "Financial & Business Analytics",
        description: "Advanced reporting with revenue analysis, practice profitability, attorney performance metrics, client portfolio analysis, and business intelligence dashboards for strategic decision making."
      }
    ]
  };

  // Legal Document Automation section
  const documentAutomationContent = {
    mainHeading: "Our Legal Industry Technology Solutions",
    introText: "We deliver professional legal-tech development services focused on enhancing law firm operations and legal service delivery:",
    companyName: "Foxbeep",
    servicesList: [
      "Legal Case Management Systems",
      "Law Firm Practice Management",
      "Legal Document Automation",
      "Client Portal Systems"
    ],
    featuredService: "Legal Document Automation",
    featuredServiceDescription: "Intelligent document automation platforms with template creation, clause libraries, contract generation, legal forms automation, and document review workflows. Designed to reduce manual document preparation time.",
    featuredServiceImage: "/images/legal-document-automation.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Template & Clause Management",
        description: "Comprehensive template libraries with smart clause insertion, conditional logic, variable substitution, approval workflows, and template version control for consistent document creation."
      },
      {
        title: "Contract Generation & Review",
        description: "Automated contract creation with risk analysis, clause comparison, redlining tools, approval workflows, electronic signatures, and contract lifecycle management capabilities."
      },
      {
        title: "Legal Forms Automation",
        description: "Court forms automation with jurisdiction-specific templates, automatic form population, compliance checking, electronic filing integration, and forms management for streamlined legal processes."
      }
    ]
  };

  // Client Portal Systems section
  const clientPortalContent = {
    mainHeading: "Our Legal Industry Technology Solutions",
    introText: "We deliver professional legal-tech development services focused on enhancing law firm operations and legal service delivery:",
    companyName: "Foxbeep",
    servicesList: [
      "Legal Case Management Systems",
      "Law Firm Practice Management",
      "Legal Document Automation",
      "Client Portal Systems"
    ],
    featuredService: "Client Portal Systems",
    featuredServiceDescription: "Secure client communication platforms with case updates, document sharing, secure messaging, appointment scheduling, and billing transparency. Designed to improve client engagement and communication.",
    featuredServiceImage: "/images/legal-client-portals.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Secure Client Communication",
        description: "Encrypted communication channels with secure messaging, video conferencing, document sharing, client notifications, and communication history tracking for confidential attorney-client interactions."
      },
      {
        title: "Case Status & Updates",
        description: "Real-time case progress sharing with milestone updates, court date notifications, document access, case timeline visualization, and automated client status reports for transparency."
      },
      {
        title: "Document Sharing & Collaboration",
        description: "Secure document exchange with client document uploads, electronic signature capabilities, document review workflows, access controls, and audit trails for collaborative legal work."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What legal industry technology development services do you provide?",
      answer: "We provide comprehensive legal-tech development including case management systems, law firm practice management software, legal document automation, client portals, legal billing systems, and custom legal software tailored to your practice needs."
    },
    {
      question: "Can you develop custom case management systems for law firms?",
      answer: "Yes, we specialize in custom case management system development with features like matter tracking, deadline management, document organization, client communication, workflow automation, and integration with legal databases and court systems."
    },
    {
      question: "Do you develop legal document automation software?",
      answer: "Absolutely. We develop intelligent document automation platforms with template creation, clause libraries, contract generation, legal forms automation, document review workflows, and integration with legal practice management systems."
    },
    {
      question: "What technologies do you use for legal-tech development?",
      answer: "We use secure technologies including .NET, Java, Python, cloud platforms (AWS, Azure), encryption protocols, secure databases, API integrations with legal databases, and compliance frameworks specifically designed for legal industry requirements."
    },
    {
      question: "How do you ensure data security and client confidentiality?",
      answer: "We implement bank-level security measures including end-to-end encryption, secure authentication, role-based access controls, audit trails, attorney-client privilege protection, GDPR compliance, and regular security assessments to protect sensitive legal data."
    },
    {
      question: "Can you integrate legal software with existing court systems and databases?",
      answer: "Yes, we specialize in legal system integration with court filing systems, legal research databases (Westlaw, LexisNexis), accounting software, email systems, and other legal tools through secure APIs and custom connectors."
    },
    {
      question: "What is the typical timeline for legal-tech development projects?",
      answer: "Legal-tech development timelines vary based on complexity and compliance requirements. Simple legal tools take 4-6 months, while comprehensive case management or practice management systems may require 8-15 months including security audits and compliance validation."
    },
    {
      question: "Do you provide compliance support for legal software?",
      answer: "Yes, we ensure legal software compliance with attorney-client privilege, bar association requirements, legal ethics rules, data protection regulations, and jurisdiction-specific legal technology standards throughout the development process."
    },
    {
      question: "Can you develop mobile apps for legal professionals?",
      answer: "Absolutely. We develop secure mobile applications for legal professionals with features like case access, secure communication, time tracking, document review, court calendar integration, and offline capabilities for lawyers on-the-go."
    },
    {
      question: "Why choose Foxbeep for legal industry technology development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of legal workflows and compliance requirements. Our experienced team delivers secure, compliant legal-tech solutions that improve practice efficiency while maintaining the highest standards of client confidentiality."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Legal Industry Technology Development Services | Legal-Tech Solutions | Foxbeep</title>
        <meta name="description" content="Professional legal industry technology development services including case management systems, law firm software, legal document automation, and legal-tech solutions. Expert legal technology developers." />
        <meta name="keywords" content="legal industry technology development, legal-tech development, case management systems, law firm software, legal document automation, client portals, legal billing systems, practice management software" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Legal Industry Technology Development Services | Legal-Tech Solutions" />
        <meta property="og:description" content="Custom legal-tech development including case management systems, law firm software, legal document automation, and client portal systems designed to streamline legal practice operations." />
        <meta property="og:image" content="https://foxbeep.com/legal-tech-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/legal" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Legal Technology Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Legal Industry Technology Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert legal-tech development for law firms, case management, and legal practice automation solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/legal-tech-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Legal Industry Technology Development" />
        <meta name="services" content="Case Management Systems, Law Firm Practice Management, Legal Document Automation, Client Portal Systems" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/legal" />
        
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
        <section aria-label="Legal Industry Technology Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Legal-Tech Development Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Law Firms and Legal Organizations">
          <BrandSlider />
        </section>
        
        {/* Legal Industry Technology Services Sections */}
        <section aria-label="Legal Case Management Systems">
          <EdtechServices {...caseManagementContent} />
        </section>
        
        <section aria-label="Law Firm Practice Management">
          <EdtechServices {...practiceManagementContent} />
        </section>
        
        <section aria-label="Legal Document Automation">
          <EdtechServices {...documentAutomationContent} />
        </section>
        
        <section aria-label="Client Portal Systems">
          <EdtechServices {...clientPortalContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Legal Industry Technology Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our legal industry technology development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Legal-Tech Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}