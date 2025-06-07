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

export default function HealthcareWebsite() {
  // Structured Data for Healthcare Website Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Website Development Services",
    "description": "Professional healthcare website development services including HIPAA-compliant patient portals, medical practice websites, telehealth platforms, EHR/EMR integration, and secure healthcare platforms. Expert developers specializing in healthcare technology with 4.9★ rating and proven success in creating compliant medical websites.",
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
    "serviceType": "Healthcare Website Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HIPAA-Compliant Patient Portal Development",
            "description": "Secure patient portals with appointment scheduling, medical records access, provider messaging, and payment processing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Practice Website Development",
            "description": "Professional healthcare websites for medical practices, hospitals, clinics, and healthcare organizations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Telehealth Platform Development",
            "description": "Virtual consultation platforms with video conferencing, remote monitoring, and digital health tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EHR/EMR Integration Services",
            "description": "Electronic health record integration with Epic, Cerner, Allscripts, and other healthcare management systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Mobile App Development",
            "description": "Native iOS and Android healthcare apps with secure patient data handling and real-time health monitoring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Content Management Systems",
            "description": "Healthcare-specific CMS platforms for managing medical content, patient education, and clinical resources"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "72",
      "bestRating": "5"
    },
    "priceRange": "$8,000 - $50,000+"
  };

  // FAQ structured data for healthcare websites
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does healthcare website development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare website development costs range from $8,000 for basic medical practice websites to $50,000+ for comprehensive healthcare platforms with patient portals, EHR integration, and telehealth capabilities. Pricing depends on HIPAA compliance requirements, features like appointment scheduling, patient portals, telemedicine integration, and custom functionality needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does healthcare website development take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare website development typically takes 8 to 20 weeks depending on complexity, compliance requirements, and integrations. Basic medical practice websites take 8-12 weeks, while comprehensive healthcare platforms with patient portals and EHR integration may require 16-20 weeks for full HIPAA-compliant implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Is your healthcare website development HIPAA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our healthcare websites are fully HIPAA compliant with proper safeguards for Protected Health Information (PHI), secure data transmission, access controls, audit logs, and Business Associate Agreements (BAA). We implement comprehensive security measures including encryption, secure authentication, and regular compliance audits."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with existing EHR/EMR systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in seamless integration with popular Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems including Epic, Cerner, Allscripts, eClinicalWorks, NextGen, athenahealth, and other healthcare management platforms for unified patient data management."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide content creation for healthcare websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive medical content development services with healthcare communication specialists, including patient education materials, service descriptions, medical procedure explanations, health resource libraries, and SEO-optimized healthcare content that complies with medical marketing regulations."
        }
      }
    ]
  };

  const serviceData = {
    title: "Healthcare Website Development Services",
    description: "We build secure, HIPAA-compliant healthcare platforms that enhance patient care, streamline medical operations, and transform healthcare delivery through innovative digital solutions and user-centered design.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "72",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "Comprehensive Healthcare Website Development Services",
    services: [
      { 
        title: "HIPAA-Compliant Patient Portal Development", 
        description: "Secure patient portals with encrypted messaging, appointment scheduling, medical record access, prescription management, and payment processing with full PHI protection." 
      },
      { 
        title: "Mobile-Responsive Medical Design", 
        description: "Healthcare websites optimized for all devices with touch-friendly interfaces, fast loading times, accessible design, and seamless mobile patient experiences." 
      },
      { 
        title: "Advanced Appointment Scheduling Systems", 
        description: "Online booking platforms with calendar integration, automated reminders, waitlist management, multi-provider scheduling, and patient self-service capabilities." 
      },
      { 
        title: "Telehealth & Virtual Care Integration", 
        description: "Complete telemedicine solutions with secure video conferencing, remote patient monitoring, digital prescriptions, and virtual consultation management." 
      },
      { 
        title: "EHR/EMR System Integration", 
        description: "Seamless electronic health record integration with Epic, Cerner, Allscripts, and other medical systems for unified patient data management and workflow optimization." 
      },
      { 
        title: "Secure Healthcare Payment Processing", 
        description: "HIPAA-compliant billing systems with insurance verification, claims processing, payment plans, and automated financial workflows for healthcare organizations." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "Healthcare Website Solutions for Every Medical Specialty",
    subtitle: "Foxbeep creates specialized healthcare platforms tailored to the unique needs of diverse medical practices and healthcare organizations worldwide.",
    industries: [
      { 
        title: "Medical Practices & Clinics", 
        description: "Comprehensive websites for primary care, specialty practices, and multi-location clinics with patient portals, appointment scheduling, and practice management integration." 
      },
      { 
        title: "Hospitals & Healthcare Systems", 
        description: "Enterprise healthcare platforms with complex patient workflows, department integration, staff portals, visitor information, and comprehensive medical service showcases." 
      },
      { 
        title: "Mental Health & Therapy Services", 
        description: "Sensitive and accessible platforms for mental health professionals with secure patient communication, therapy scheduling, progress tracking, and crisis resources." 
      },
      { 
        title: "Dental & Orthodontic Practices", 
        description: "Specialized dental websites with treatment galleries, before/after photos, appointment booking, treatment planning tools, and patient education resources." 
      },
      { 
        title: "Pharmacies & Medical Supply", 
        description: "E-commerce enabled pharmacy websites with prescription management, medication refill systems, drug interaction tools, and medical supply catalogs." 
      },
      { 
        title: "Wellness & Preventive Care Centers", 
        description: "Holistic health platforms featuring wellness programs, health screening tools, nutrition guidance, fitness integration, and preventive care resources." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Healthcare Website Development Methodology",
    description: "We follow a compliance-first, patient-centered development process that ensures HIPAA adherence, optimal user experience, regulatory compliance, and seamless healthcare workflow integration.",
    processSteps: [
      { 
        number: 1, 
        title: "Healthcare Needs Assessment & Compliance Planning", 
        description: "Comprehensive analysis of medical services, patient demographics, regulatory requirements, HIPAA compliance needs, and healthcare workflow optimization opportunities." 
      },
      { 
        number: 2, 
        title: "Patient Experience Design & User Journey Mapping", 
        description: "Creating intuitive patient pathways, accessibility-focused design, provider workflow optimization, and user-centered healthcare experience design." 
      },
      { 
        number: 3, 
        title: "Medical Interface Design & Accessibility", 
        description: "Designing clean, professional healthcare interfaces with medical industry standards, accessibility compliance, and patient-friendly navigation systems." 
      },
      { 
        number: 4, 
        title: "Healthcare Content Architecture & Information Structure", 
        description: "Organizing medical services, patient resources, clinical information, appointment systems, and healthcare content for optimal patient engagement." 
      },
      { 
        number: 5, 
        title: "HIPAA-Compliant Platform Development", 
        description: "Building secure healthcare systems with encryption, access controls, audit trails, data backup, and comprehensive security measures for PHI protection." 
      },
      { 
        number: 6, 
        title: "EHR Integration & Healthcare System Connectivity", 
        description: "Implementing seamless connections with electronic health records, practice management systems, billing platforms, and healthcare technology infrastructure." 
      },
      { 
        number: 7, 
        title: "Staff Training, Testing & Healthcare Support", 
        description: "Comprehensive medical staff training, HIPAA compliance validation, security testing, and ongoing healthcare technology support services." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does healthcare website development cost?",
      answer: "Healthcare website development costs range from $8,000 for basic medical practice websites to $50,000+ for comprehensive healthcare platforms with patient portals, EHR integration, and telehealth capabilities. Pricing factors include HIPAA compliance requirements, patient portal complexity, EHR integrations, appointment systems, telehealth features, and ongoing security maintenance. We provide detailed quotes based on your healthcare organization's specific needs and regulatory requirements."
    },
    {
      question: "How long does healthcare website development take?",
      answer: "Healthcare website development typically takes 8 to 20 weeks depending on project complexity, compliance requirements, and system integrations. Basic medical practice websites can be completed in 8-12 weeks, while comprehensive healthcare platforms with patient portals and EHR integration may require 16-20 weeks. Timeline factors include HIPAA compliance validation, staff training, security testing, and regulatory approval processes."
    },
    {
      question: "Is your healthcare website development HIPAA compliant?",
      answer: "Yes, all our healthcare websites are fully HIPAA compliant with comprehensive safeguards for Protected Health Information (PHI). We implement required security measures including data encryption, secure authentication, access controls, audit logging, data backup systems, and Business Associate Agreements (BAA). Our development process includes regular compliance audits and security assessments to ensure ongoing HIPAA adherence."
    },
    {
      question: "Can you integrate with existing EHR/EMR systems?",
      answer: "Absolutely! We specialize in seamless integration with popular Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems including Epic, Cerner, Allscripts, eClinicalWorks, NextGen, athenahealth, Practice Fusion, and other healthcare management platforms. Our integration capabilities include patient data synchronization, appointment scheduling, billing systems, and clinical workflow optimization."
    },
    {
      question: "Do you provide content creation for healthcare websites?",
      answer: "Yes, we offer comprehensive medical content development services with healthcare communication specialists and medical writers. Our content services include patient education materials, service descriptions, medical procedure explanations, health resource libraries, treatment information, and SEO-optimized healthcare content that complies with medical marketing regulations and accessibility standards."
    },
    {
      question: "What security measures do you implement for healthcare websites?",
      answer: "We implement multi-layer security measures including SSL/TLS encryption, secure authentication systems, role-based access controls, data encryption at rest and in transit, regular security audits, vulnerability assessments, intrusion detection, automated backups, and comprehensive logging for HIPAA compliance and PHI protection."
    },
    {
      question: "Do you develop telehealth and telemedicine platforms?",
      answer: "Yes, we develop comprehensive telehealth platforms with secure video conferencing, remote patient monitoring, digital prescriptions, virtual consultation scheduling, patient health tracking, and integrated communication tools. Our telemedicine solutions are HIPAA-compliant and designed for seamless virtual healthcare delivery."
    },
    {
      question: "Can you create patient portals with appointment scheduling?",
      answer: "Absolutely! We develop feature-rich patient portals with online appointment scheduling, medical record access, prescription refill requests, secure messaging with providers, bill payment, insurance information management, and health tracking tools, all within a HIPAA-compliant environment with robust security measures."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Healthcare Website Development Services Lead the Industry",
    benefits: [
      "HIPAA-compliant architecture with comprehensive PHI protection and regulatory adherence ensuring patient privacy and data security",
      "Universal accessibility design following WCAG guidelines to serve patients with diverse abilities and healthcare needs effectively",
      "Intuitive patient-centered interfaces that reduce administrative burden while enhancing healthcare delivery and patient satisfaction",
      "Scalable cloud infrastructure supporting healthcare growth from small practices to large hospital systems with enterprise-grade reliability",
      "Performance-optimized platforms delivering fast, reliable healthcare services with 99.9% uptime for critical medical operations"
    ],
    techIcons: [
      { name: "Epic", isDark: true },
      { name: "Cerner", isDark: false },
      { name: "Allscripts", isDark: true },
      { name: "Zoom Health", isDark: false },
      { name: "Stripe Medical", isDark: true },
      { name: "AWS Healthcare", isDark: false },
      { name: "PHP", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "MongoDB", isDark: true }
    ],
    ctaText: "Transform Healthcare Today"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Healthcare Website Development?",
    features: [
      {
        id: "compliance",
        title: "Comprehensive Healthcare Compliance",
        content: "Full HIPAA compliance with PHI protection, audit trails, secure data handling, Business Associate Agreements, and adherence to healthcare regulations including HITECH, ADA, and state medical privacy laws."
      },
      {
        id: "accessibility",
        title: "Universal Healthcare Accessibility",
        content: "Inclusive design following WCAG 2.1 guidelines, screen reader compatibility, keyboard navigation, high contrast options, and assistive technology integration to serve patients with diverse abilities and healthcare needs."
      },
      {
        id: "interoperability",
        title: "Advanced Medical System Integration",
        content: "Seamless connectivity with EHR/EMR systems, practice management software, billing platforms, laboratory systems, imaging systems, and healthcare APIs for unified patient data management and workflow optimization."
      },
      {
        id: "analytics",
        title: "Healthcare Data Analytics & Insights",
        content: "Advanced analytics dashboards providing actionable insights into patient engagement, treatment outcomes, operational efficiency, appointment patterns, and healthcare delivery metrics for data-driven medical decision making."
      },
      {
        id: "security",
        title: "Multi-Layer Healthcare Security",
        content: "Enterprise-grade security with end-to-end encryption, multi-factor authentication, role-based access controls, regular security audits, penetration testing, and 24/7 monitoring for comprehensive PHI protection."
      },
      {
        id: "telehealth",
        title: "Integrated Telehealth Solutions",
        content: "Complete virtual care platforms with secure video conferencing, remote patient monitoring, digital prescriptions, virtual consultation scheduling, and telemedicine workflow integration for modern healthcare delivery."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a Healthcare Website Development",
    highlightedText: "Team",
    buttonText: "Transform Patient Care Now",
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
        <title>Healthcare Website Development Services | Medical Practice Websites | Patient Portals | Foxbeep</title>
        <meta name="description" content="Professional healthcare website development services including HIPAA-compliant patient portals, medical practice websites, telehealth platforms, EHR/EMR integration, and secure healthcare solutions. 4.9★ rated developers specializing in healthcare technology and medical website design." />
        <meta name="keywords" content="healthcare website development, HIPAA compliant websites, medical practice website design, patient portal development, telehealth platform, EHR integration, EMR systems, healthcare web design, medical website development, hospital website design, healthcare technology, telemedicine platforms, medical web applications" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Healthcare Website Development Services | HIPAA Compliant Medical Websites | Foxbeep" />
        <meta property="og:description" content="Professional healthcare website development with HIPAA-compliant patient portals, medical practice websites, and telehealth solutions. 4.9★ rated healthcare technology specialists." />
        <meta property="og:image" content="https://foxbeep.com/images/healthcare-website-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/healthcare-website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Healthcare Website Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Website Development | HIPAA Compliant Medical Websites" />
        <meta name="twitter:description" content="Professional healthcare website development with patient portals and medical practice websites. 4.9★ rated healthcare technology experts." />
        <meta name="twitter:image" content="https://foxbeep.com/images/healthcare-website-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Healthcare Website Development" />
        <meta name="expertise" content="HIPAA Compliance, Patient Portals, Medical Websites, Telehealth Platforms, EHR Integration" />
        <meta name="rating" content="4.9/5 based on 72 reviews" />
        <meta name="compliance" content="HIPAA Compliant, HITECH Compliant, ADA Accessible" />
        <meta name="specialization" content="Medical Practice Websites, Patient Portals, Telehealth Platforms, Healthcare Mobile Apps" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Healthcare-Specific Meta Tags */}
        <meta name="healthcare-sectors" content="Medical Practices, Hospitals, Clinics, Mental Health, Dental, Pharmacies, Wellness Centers" />
        <meta name="medical-compliance" content="HIPAA Compliant, PHI Protected, BAA Available, Audit Trails, Secure Authentication" />
        <meta name="healthcare-features" content="Patient Portals, Appointment Scheduling, EHR Integration, Telehealth, Secure Messaging" />
        
        {/* Medical Technology Meta Tags */}
        <meta name="ehr-systems" content="Epic, Cerner, Allscripts, eClinicalWorks, NextGen, athenahealth" />
        <meta name="healthcare-integrations" content="Practice Management, Billing Systems, Laboratory Systems, Imaging Systems" />
        <meta name="telehealth-features" content="Video Conferencing, Remote Monitoring, Digital Prescriptions, Virtual Consultations" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/healthcare-website" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/healthcare-website" />
        
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
        <link rel="dns-prefetch" href="//epic.com" />
        <link rel="dns-prefetch" href="//cerner.com" />
        <link rel="dns-prefetch" href="//allscripts.com" />
        
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
        <meta name="price-range" content="$8,000 - $50,000+" />
        <meta name="currency" content="USD" />
        
        {/* Healthcare Development Meta Tags */}
        <meta name="development-time" content="8-20 weeks" />
        <meta name="technologies" content="Epic, Cerner, Allscripts, PHP, Node.js, React, MongoDB" />
        <meta name="security" content="HIPAA Compliant, PHI Protected, Encrypted, Secure Authentication" />
        <meta name="support" content="24/7 Healthcare Technology Support Available" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="Healthcare Website Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen healthcare showcase image */}
        <section aria-label="Healthcare Website Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/healthcare.jpg"
              alt="Healthcare Website Development Services - HIPAA Compliant Medical Practice Websites and Patient Portals"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="Healthcare Website Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="Healthcare Website Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured Healthcare Services Slider */}
        <section aria-label="Featured Healthcare Website Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Medical Practice Websites",
                description: "Professional healthcare websites that showcase your medical services, build patient trust, and provide essential health information with modern, accessible design and HIPAA-compliant features.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-500"
              },
              {
                id: 2,
                title: "Patient Portals",
                description: "Secure HIPAA-compliant platforms for appointment scheduling, medical record access, provider messaging, prescription management, and payment processing with comprehensive patient self-service capabilities.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-teal-500"
              },
              {
                id: 3,
                title: "Telehealth Platforms",
                description: "Feature-rich telemedicine solutions for virtual consultations, remote patient monitoring, digital prescriptions, and comprehensive virtual healthcare delivery with integrated communication tools.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-indigo-500"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="blue"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="Healthcare Website Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for Healthcare Website Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build Healthcare Website Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Healthcare Industry Solutions Section */}
        <section aria-label="Healthcare Website Solutions for Medical Specialties" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="Healthcare Website Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About Healthcare Website Development"
            subtitle="Get comprehensive answers about our HIPAA-compliant healthcare website development services, patient portal development, medical practice websites, and telehealth platform development process"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with Healthcare Website Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}