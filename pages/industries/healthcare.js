import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function HealthcareSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Healthcare Software Solutions",
    "url": "https://foxbeep.com/industries/healthcare",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional healthcare software development services including telemedicine platforms, patient management systems, and medical app development. 18+ years experience with 350+ healthcare software professionals.",
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
      "name": "Healthcare Software Development Services",
      "description": "Custom healthcare software development, telemedicine platforms, patient management systems, and medical mobile apps"
    },
    "expertise": [
      "Healthcare Software Development",
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Medical Mobile Apps",
      "Healthcare Analytics",
      "HIPAA Compliant Solutions"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Healthcare Software Development Services",
    subtitle: "Custom healthcare software solutions including telemedicine platforms, patient management systems, and medical apps with HIPAA compliance and modern technology.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/healthcare.jpg",
    imageAlt: "Healthcare software development and medical technology solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "HEALTHCARE SOFTWARE DEVELOPMENT FOR MODERN MEDICAL PRACTICES",
    highlightWord: "SOFTWARE",
    descriptionText: "Healthcare software development transforms medical practices through innovative digital solutions. From telemedicine platforms to patient management systems, our software development expertise delivers secure, HIPAA-compliant healthcare applications. We specialize in custom medical software, healthcare mobile apps, and integrated healthcare systems that improve patient care and streamline medical operations.",
    brandName: "Foxbeep",
    highlightColor: "bg-blue-300"
  };

  // Telemedicine Platforms section
  const telemedicineContent = {
    mainHeading: "Our Healthcare Software Solutions",
    introText: "We deliver professional healthcare software development services focused on innovation and compliance:",
    companyName: "Foxbeep",
    servicesList: [
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Medical Mobile Apps",
      "Healthcare Analytics"
    ],
    featuredService: "Telemedicine Platforms",
    featuredServiceDescription: "Custom telemedicine software platforms that enable secure video consultations, patient scheduling, and remote healthcare delivery. Our solutions are HIPAA-compliant and designed for modern healthcare practices seeking digital transformation.",
    featuredServiceImage: "/images/telemedicine-platforms.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Video Consultation Software",
        description: "Secure video conferencing platforms with HD quality, screen sharing, file transfer, and encrypted communication designed specifically for healthcare consultations and patient interactions."
      },
      {
        title: "Patient Scheduling Systems",
        description: "Automated appointment booking software with calendar integration, reminder notifications, patient registration, and seamless scheduling management for healthcare providers."
      },
      {
        title: "Prescription Management",
        description: "Digital prescription systems with e-prescribing capabilities, medication tracking, pharmacy integration, and automated refill management for efficient healthcare delivery."
      }
    ]
  };

  // Patient Management Systems section
  const patientManagementContent = {
    mainHeading: "Our Healthcare Software Solutions",
    introText: "We deliver professional healthcare software development services focused on innovation and compliance:",
    companyName: "Foxbeep",
    servicesList: [
      "Telemedicine Platforms", 
      "Patient Management Systems",
      "Medical Mobile Apps",
      "Healthcare Analytics"
    ],
    featuredService: "Patient Management Systems",
    featuredServiceDescription: "Comprehensive patient management software that streamlines medical records, appointment scheduling, billing, and patient communication. Our systems integrate with existing healthcare infrastructure while maintaining HIPAA compliance.",
    featuredServiceImage: "/images/patient-management-systems.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Electronic Medical Records (EMR)",
        description: "Custom EMR software development with patient history tracking, medical documentation, lab results integration, and secure data storage designed for healthcare practices of all sizes."
      },
      {
        title: "Patient Portal Development",
        description: "User-friendly patient portals with appointment booking, medical record access, test results viewing, and secure messaging between patients and healthcare providers."
      },
      {
        title: "Billing and Insurance Integration",
        description: "Automated medical billing software with insurance claim processing, payment tracking, and revenue cycle management integrated with patient management systems."
      }
    ]
  };

  // Medical Mobile Apps section
  const medicalAppsContent = {
    mainHeading: "Our Healthcare Software Solutions",
    introText: "We deliver professional healthcare software development services focused on innovation and compliance:",
    companyName: "Foxbeep",
    servicesList: [
      "Telemedicine Platforms",
      "Patient Management Systems", 
      "Medical Mobile Apps",
      "Healthcare Analytics"
    ],
    featuredService: "Medical Mobile Apps",
    featuredServiceDescription: "Native and cross-platform medical mobile applications for patient engagement, health monitoring, and healthcare provider tools. Our apps are designed with medical workflows and patient privacy in mind.",
    featuredServiceImage: "/images/medical-mobile-apps.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Patient Health Apps",
        description: "Mobile health applications for symptom tracking, medication reminders, appointment scheduling, and health data monitoring with intuitive user interfaces and secure data handling."
      },
      {
        title: "Healthcare Provider Apps",
        description: "Professional medical apps for doctors and nurses including patient lookup, medical references, clinical calculators, and secure communication tools optimized for mobile devices."
      },
      {
        title: "Remote Monitoring Apps",
        description: "Mobile applications for remote patient monitoring with wearable device integration, vital signs tracking, and real-time health data transmission to healthcare providers."
      }
    ]
  };

  // Healthcare Analytics section
  const healthcareAnalyticsContent = {
    mainHeading: "Our Healthcare Software Solutions",
    introText: "We deliver professional healthcare software development services focused on innovation and compliance:",
    companyName: "Foxbeep",
    servicesList: [
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Medical Mobile Apps",
      "Healthcare Analytics"
    ],
    featuredService: "Healthcare Analytics",
    featuredServiceDescription: "Advanced healthcare analytics software that transforms medical data into actionable insights. Our analytics platforms help healthcare organizations improve patient outcomes, optimize operations, and make data-driven decisions.",
    featuredServiceImage: "/images/healthcare-analytics.jpg",
    highlightColor: "bg-blue-300",
    featureDetails: [
      {
        title: "Medical Data Visualization",
        description: "Interactive dashboards and reporting tools that present complex medical data in clear, actionable formats for healthcare administrators and medical professionals."
      },
      {
        title: "Patient Outcome Analytics",
        description: "Analytics software that tracks patient outcomes, treatment effectiveness, and health trends to support evidence-based medical decision-making and quality improvement."
      },
      {
        title: "Healthcare Business Intelligence",
        description: "Comprehensive BI solutions for healthcare organizations including performance metrics, resource utilization analysis, and operational efficiency reporting."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What healthcare software development services do you provide?",
      answer: "We provide comprehensive healthcare software development including telemedicine platforms, patient management systems, medical mobile apps, healthcare analytics, EMR systems, patient portals, and custom healthcare solutions designed for modern medical practices."
    },
    {
      question: "How do you ensure HIPAA compliance in healthcare software?",
      answer: "Our healthcare software development follows strict HIPAA compliance guidelines including data encryption, secure authentication, access controls, audit logging, and secure data transmission. We implement comprehensive security measures to protect patient health information."
    },
    {
      question: "Can you develop custom telemedicine platforms?",
      answer: "Yes, we specialize in custom telemedicine software development with secure video consultations, patient scheduling, prescription management, payment processing, and integration with existing healthcare systems tailored to your specific requirements."
    },
    {
      question: "What technologies do you use for healthcare software development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), database systems, and healthcare-specific APIs while ensuring security and compliance standards."
    },
    {
      question: "How do you handle medical data security and privacy?",
      answer: "We implement advanced security measures including end-to-end encryption, secure APIs, multi-factor authentication, role-based access controls, and regular security audits to ensure complete protection of sensitive medical data and patient privacy."
    },
    {
      question: "Can you integrate healthcare software with existing systems?",
      answer: "Absolutely. We specialize in healthcare system integration including EMR/EHR systems, hospital management systems, laboratory systems, pharmacy systems, and third-party healthcare APIs ensuring seamless data flow and interoperability."
    },
    {
      question: "Do you develop mobile apps for healthcare?",
      answer: "Yes, we develop native iOS and Android medical apps as well as cross-platform healthcare applications for patient engagement, health monitoring, doctor-patient communication, and healthcare provider tools with focus on usability and security."
    },
    {
      question: "What is your experience with healthcare analytics software?",
      answer: "We have extensive experience developing healthcare analytics platforms including patient outcome tracking, medical data visualization, business intelligence dashboards, and predictive analytics tools that help healthcare organizations make data-driven decisions."
    },
    {
      question: "How do you ensure healthcare software quality and reliability?",
      answer: "We follow rigorous testing protocols including functional testing, security testing, performance testing, and compliance validation. Our quality assurance process ensures healthcare software meets medical standards and provides reliable performance."
    },
    {
      question: "Why choose Foxbeep for healthcare software development?",
      answer: "Foxbeep combines 18+ years of software development expertise with specialized healthcare industry knowledge. Our 350+ software professionals understand medical workflows, compliance requirements, and deliver secure, scalable healthcare software solutions."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Healthcare Software Development Services | Medical App Development | Foxbeep</title>
        <meta name="description" content="Professional healthcare software development services including telemedicine platforms, patient management systems, medical mobile apps, and HIPAA-compliant solutions. Expert healthcare software developers." />
        <meta name="keywords" content="healthcare software development, medical app development, telemedicine platforms, patient management systems, healthcare mobile apps, EMR software, medical software development, HIPAA compliant software" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Healthcare Software Development Services | Medical App Development" />
        <meta property="og:description" content="Custom healthcare software development including telemedicine platforms, patient management systems, and medical apps with HIPAA compliance and modern technology." />
        <meta property="og:image" content="https://foxbeep.com/healthcare-software-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/healthcare" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Healthcare Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Software Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert healthcare software development for telemedicine, patient management, and medical applications." />
        <meta name="twitter:image" content="https://foxbeep.com/healthcare-software-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Healthcare Software Development" />
        <meta name="services" content="Telemedicine Platforms, Patient Management Systems, Medical Mobile Apps, Healthcare Analytics" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/healthcare" />
        
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
        <section aria-label="Healthcare Software Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="Healthcare Software Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Healthcare Organizations">
          <BrandSlider />
        </section>
        
        {/* Healthcare Software Services Sections */}
        <section aria-label="Telemedicine Platforms">
          <EdtechServices {...telemedicineContent} />
        </section>
        
        <section aria-label="Patient Management Systems">
          <EdtechServices {...patientManagementContent} />
        </section>
        
        <section aria-label="Medical Mobile Apps">
          <EdtechServices {...medicalAppsContent} />
        </section>
        
        <section aria-label="Healthcare Analytics">
          <EdtechServices {...healthcareAnalyticsContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Healthcare Software Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our healthcare software development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with Healthcare Software Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}