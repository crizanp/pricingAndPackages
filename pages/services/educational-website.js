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

export default function EducationalWebsite() {
  // Structured Data for Educational Website Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Educational Website Development Services",
    "description": "Professional educational website development services including Learning Management Systems (LMS), school websites, online course platforms, student portals, and e-learning solutions. Expert developers specializing in educational technology with 4.9★ rating and proven success in creating engaging learning platforms.",
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
    "serviceType": "Educational Website Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Learning Management System Development",
            "description": "Custom LMS platforms with course delivery, student tracking, assessment tools, and interactive learning features"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "School Website Development",
            "description": "Professional K-12 and higher education websites with student portals, faculty management, and parent communication systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Course Platform Development",
            "description": "Feature-rich e-learning platforms with video streaming, progress tracking, certification, and payment integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Student Information System",
            "description": "Comprehensive student management systems with enrollment, grades, attendance, and administrative tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Virtual Classroom Solutions",
            "description": "Interactive online learning environments with live streaming, collaboration tools, and digital whiteboard integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Mobile Apps",
            "description": "Native iOS and Android educational apps with offline learning, push notifications, and synchronized content delivery"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "68",
      "bestRating": "5"
    },
    "priceRange": "$5,000 - $30,000+"
  };

  // FAQ structured data for educational websites
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does educational website development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Educational website development costs range from $5,000 for basic school websites to $30,000+ for comprehensive Learning Management Systems. Pricing depends on features like student portals, course management, assessment tools, payment integration, and custom functionality requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an educational website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Educational website development typically takes 6 to 16 weeks depending on complexity, features, and integrations. Basic school websites take 6-8 weeks, while comprehensive Learning Management Systems may require 12-16 weeks for full implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Which platforms do you use for educational websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with leading educational platforms including Moodle, Canvas, WordPress LMS, LearnDash, and custom solutions. Platform selection depends on your institution's needs, budget, and technical requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with existing school management systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we integrate with popular Student Information Systems (SIS) and School Management Systems (SMS) including PowerSchool, Blackboard, Canvas, Google Classroom, and others for seamless data synchronization."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide content creation for educational websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer instructional design services to help develop engaging educational content, including multimedia materials, interactive assessments, course structures, and learning pathway design."
        }
      }
    ]
  };

  const serviceData = {
    title: "Educational Website Development Services",
    description: "We build engaging, accessible learning platforms that transform education through innovative technology, intuitive design, and pedagogically-sound development approaches that inspire learners and educators alike.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "68",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "Comprehensive Educational Website Development Services",
    services: [
      { 
        title: "Learning Management System (LMS) Development", 
        description: "Custom LMS platforms with course delivery, progress tracking, interactive assessments, student analytics, and comprehensive administrative tools for modern education." 
      },
      { 
        title: "Mobile-Responsive Educational Design", 
        description: "Accessible education on all devices with touch-friendly interfaces, offline capability, progressive web app features, and seamless cross-platform synchronization." 
      },
      { 
        title: "Interactive Learning Content Integration", 
        description: "Engaging multimedia elements including video streaming, interactive quizzes, gamification features, virtual labs, and immersive learning experiences." 
      },
      { 
        title: "Secure Student Portal Development", 
        description: "Protected login areas with single sign-on (SSO), grade access, assignment submission, communication tools, and privacy-compliant data management." 
      },
      { 
        title: "Advanced Assessment & Testing Tools", 
        description: "Comprehensive evaluation systems with automated grading, plagiarism detection, timed assessments, question banks, and detailed performance analytics." 
      },
      { 
        title: "Integrated Course Management Systems", 
        description: "Streamlined content organization with curriculum mapping, lesson planning, resource libraries, scheduling tools, and collaborative teaching features." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "Educational Website Solutions for Every Learning Environment",
    subtitle: "Foxbeep creates tailored educational platforms that address the unique needs of diverse learning institutions and educational organizations worldwide.",
    industries: [
      { 
        title: "K-12 Schools & Districts", 
        description: "Age-appropriate interfaces with parent communication portals, attendance tracking, behavior management, and child-safe online environments with COPPA compliance." 
      },
      { 
        title: "Higher Education Institutions", 
        description: "Comprehensive university platforms with research collaboration tools, library integration, alumni networks, campus life features, and academic resource management." 
      },
      { 
        title: "Corporate Training & Development", 
        description: "Professional learning systems with skills tracking, certification management, compliance training, performance analytics, and enterprise integration capabilities." 
      },
      { 
        title: "Online Course Marketplaces", 
        description: "MOOC-style platforms with instructor tools, student enrollment, payment processing, course marketplace features, and revenue sharing capabilities." 
      },
      { 
        title: "Language Learning Platforms", 
        description: "Interactive language education with speech recognition, pronunciation tools, cultural content, progress tracking, and adaptive learning algorithms." 
      },
      { 
        title: "Special Needs Education", 
        description: "Accessible platforms with assistive technology integration, individualized education plan (IEP) support, adaptive interfaces, and inclusive design principles." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Educational Website Development Methodology",
    description: "We follow a research-driven, pedagogy-focused development process that ensures educational effectiveness, user engagement, accessibility compliance, and scalable growth for learning institutions.",
    processSteps: [
      { 
        number: 1, 
        title: "Educational Needs Assessment & Research", 
        description: "Comprehensive analysis of learning objectives, target audience research, pedagogical approach evaluation, accessibility requirements, and institutional goal alignment." 
      },
      { 
        number: 2, 
        title: "Learning Experience Design & Planning", 
        description: "User journey mapping for students and educators, intuitive navigation design, learning pathway optimization, and engagement strategy development." 
      },
      { 
        number: 3, 
        title: "Educational Interface Design & Prototyping", 
        description: "Creating engaging, accessible UI designs with age-appropriate aesthetics, clear information hierarchy, visual learning aids, and responsive layouts." 
      },
      { 
        number: 4, 
        title: "Content Architecture & Information Structure", 
        description: "Organizing course materials, resource libraries, assessment tools, communication systems, and administrative functions for optimal learning flow." 
      },
      { 
        number: 5, 
        title: "Platform Development & Integration", 
        description: "Building robust educational systems with third-party integrations, security implementation, performance optimization, and scalability considerations." 
      },
      { 
        number: 6, 
        title: "Interactive Features & Learning Tools", 
        description: "Implementing engagement tools, assessment systems, collaboration features, multimedia integration, and innovative educational technology solutions." 
      },
      { 
        number: 7, 
        title: "Training, Testing & Educational Support", 
        description: "Comprehensive staff training, usability testing with real users, accessibility validation, and ongoing educational technology support." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does educational website development cost?",
      answer: "Educational website development costs range from $5,000 for basic school websites to $30,000+ for comprehensive Learning Management Systems. Pricing factors include platform complexity, student capacity, custom features, integrations with existing systems, accessibility requirements, and ongoing support needs. We provide detailed quotes based on your institution's specific educational objectives and technical requirements."
    },
    {
      question: "How long does it take to develop an educational website?",
      answer: "Educational website development typically takes 6 to 16 weeks depending on project complexity, feature requirements, and integration needs. Basic school websites can be completed in 6-8 weeks, while comprehensive Learning Management Systems with advanced features may require 12-16 weeks. Timeline factors include content preparation, staff training, testing phases, and accessibility compliance validation."
    },
    {
      question: "Which platforms do you use for educational websites?",
      answer: "We work with leading educational technology platforms including Moodle for comprehensive LMS functionality, Canvas for higher education, WordPress LMS with LearnDash for flexibility, Google Classroom integration, and custom solutions for unique requirements. Platform selection depends on your institution's size, technical needs, budget considerations, and educational objectives."
    },
    {
      question: "Can you integrate with existing school management systems?",
      answer: "Absolutely! We specialize in seamless integrations with popular Student Information Systems (SIS) and School Management Systems (SMS) including PowerSchool, Blackboard, Canvas, Infinite Campus, Skyward, Google Workspace for Education, Microsoft Education, and other educational technology platforms for unified data management and streamlined operations."
    },
    {
      question: "Do you provide content creation for educational websites?",
      answer: "Yes, we offer comprehensive instructional design services including educational content development, multimedia creation, interactive assessment design, course structure planning, learning objective alignment, accessibility compliance, and pedagogically-sound content organization that enhances student engagement and learning outcomes."
    },
    {
      question: "How do you ensure educational website accessibility?",
      answer: "We implement comprehensive accessibility features following WCAG 2.1 guidelines, Section 508 compliance, screen reader compatibility, keyboard navigation support, alternative text for images, closed captioning for videos, high contrast options, and assistive technology integration to ensure inclusive education for all learners."
    },
    {
      question: "What security measures do you implement for student data?",
      answer: "We implement robust security measures including FERPA compliance for student privacy, COPPA compliance for children under 13, SSL encryption, secure authentication systems, role-based access controls, data backup systems, regular security audits, and privacy-by-design principles to protect sensitive educational information."
    },
    {
      question: "Do you offer mobile apps for educational websites?",
      answer: "Yes, we develop native iOS and Android educational apps, progressive web applications (PWA), and responsive mobile-optimized websites with offline learning capabilities, push notifications for assignments, synchronized content delivery, and mobile-specific educational features for learning on-the-go."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Educational Website Development Services Transform Learning",
    benefits: [
      "Pedagogy-first design approach that prioritizes educational effectiveness and learning outcome achievement over aesthetic considerations",
      "Universal accessibility compliance ensuring inclusive education for learners with diverse abilities and learning needs",
      "FERPA-compliant security architecture protecting student privacy with enterprise-grade data protection and secure authentication systems",
      "Scalable cloud infrastructure supporting institutional growth from small schools to large university systems with global reach",
      "Performance-optimized platforms delivering seamless learning experiences with fast loading times and reliable uptime for uninterrupted education"
    ],
    techIcons: [
      { name: "Moodle", isDark: true },
      { name: "Canvas", isDark: false },
      { name: "WordPress LMS", isDark: true },
      { name: "Google Classroom", isDark: false },
      { name: "H5P", isDark: true },
      { name: "Zoom", isDark: false },
      { name: "AWS", isDark: true },
      { name: "PHP", isDark: false },
      { name: "React", isDark: true }
    ],
    ctaText: "Transform Education Today"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Educational Website Development?",
    features: [
      {
        id: "pedagogy",
        title: "Pedagogy-Driven Development",
        content: "Educational websites designed with learning science principles, cognitive load theory, and evidence-based pedagogical approaches that maximize student engagement and knowledge retention through thoughtful user experience design."
      },
      {
        id: "accessibility",
        title: "Universal Design for Learning",
        content: "Comprehensive accessibility implementation following WCAG guidelines, Section 508 compliance, and Universal Design for Learning (UDL) principles to ensure inclusive education for learners with diverse abilities and learning styles."
      },
      {
        id: "engagement",
        title: "Interactive Learning Innovation",
        content: "Cutting-edge educational technology integration including gamification elements, interactive multimedia, virtual reality experiences, and adaptive learning algorithms that motivate students and enhance educational outcomes."
      },
      {
        id: "analytics",
        title: "Educational Data Analytics",
        content: "Advanced learning analytics dashboards providing actionable insights into student progress, engagement patterns, learning obstacles, and institutional performance metrics for data-driven educational improvement."
      },
      {
        id: "security",
        title: "Educational Privacy Protection",
        content: "Comprehensive data protection with FERPA compliance, COPPA adherence for younger students, secure authentication systems, privacy-by-design architecture, and transparent data handling practices for educational institutions."
      },
      {
        id: "mobile",
        title: "Mobile-First Learning",
        content: "Responsive educational platforms optimized for mobile learning with offline capabilities, touch-friendly interfaces, progressive web app features, and seamless synchronization across devices for flexible education delivery."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build an Educational Website Development",
    highlightedText: "Team",
    buttonText: "Transform Learning Today",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-green-600",
    buttonGradientFrom: "from-green-500",
    buttonGradientTo: "to-green-600",
    buttonHoverFrom: "from-green-600",
    buttonHoverTo: "to-green-700"
  };
  
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Educational Website Development Services | LMS Development | School Website Design | Learning Platform | Foxbeep</title>
        <meta name="description" content="Professional educational website development services including custom LMS platforms, school websites, online course systems, student portals, and e-learning solutions. 4.9★ rated developers specializing in educational technology and accessible learning platforms." />
        <meta name="keywords" content="educational website development, LMS development, learning management system, school website design, online course platform, student portal development, e-learning website, educational technology, moodle development, canvas integration, online education platform, virtual classroom, educational app development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Educational Website Development Services | LMS & School Website Development | Foxbeep" />
        <meta property="og:description" content="Professional educational website development with custom LMS platforms, school websites, and e-learning solutions. 4.9★ rated educational technology specialists." />
        <meta property="og:image" content="https://foxbeep.com/images/educational-website-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/educational-website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Educational Website Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Educational Website Development | LMS & School Website Design Services" />
        <meta name="twitter:description" content="Professional educational website development with LMS platforms and school website design. 4.9★ rated educational technology experts." />
        <meta name="twitter:image" content="https://foxbeep.com/images/educational-website-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Educational Website Development" />
        <meta name="expertise" content="LMS Development, School Websites, Online Learning Platforms, Educational Technology" />
        <meta name="rating" content="4.9/5 based on 68 reviews" />
        <meta name="platforms" content="Moodle, Canvas, WordPress LMS, Google Classroom, Custom Solutions" />
        <meta name="specialization" content="Learning Management Systems, Student Portals, Online Course Platforms, Educational Mobile Apps" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Education-Specific Meta Tags */}
        <meta name="education-sectors" content="K-12 Schools, Higher Education, Corporate Training, Online Courses, Language Learning, Special Education" />
        <meta name="compliance" content="FERPA Compliant, COPPA Compliant, WCAG Accessible, Section 508" />
        <meta name="features" content="Student Portals, Assessment Tools, Course Management, Mobile Learning, Analytics" />
        
        {/* Educational Technology Meta Tags */}
        <meta name="educational-platforms" content="Moodle, Canvas, WordPress LMS, LearnDash, Google Classroom" />
        <meta name="learning-features" content="Interactive Content, Video Streaming, Assessment Tools, Progress Tracking" />
        <meta name="accessibility" content="WCAG 2.1 Compliant, Screen Reader Compatible, Universal Design" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/educational-website" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/educational-website" />
        
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
        <link rel="dns-prefetch" href="//moodle.org" />
        <link rel="dns-prefetch" href="//canvas.instructure.com" />
        <link rel="dns-prefetch" href="//wordpress.org" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#16A34A" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$5,000 - $30,000+" />
        <meta name="currency" content="USD" />
        
        {/* Educational Development Meta Tags */}
        <meta name="development-time" content="6-16 weeks" />
        <meta name="technologies" content="Moodle, Canvas, WordPress LMS, React, PHP, MySQL" />
        <meta name="security" content="FERPA Compliant, COPPA Compliant, SSL Encrypted" />
        <meta name="support" content="24/7 Educational Technology Support Available" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="Educational Website Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen educational showcase image */}
        <section aria-label="Educational Website Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/e-learning.jpg"
              alt="Educational Website Development Services - Learning Management System and School Website Design"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="Educational Website Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="Educational Website Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured Educational Services Slider */}
        <section aria-label="Featured Educational Website Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "School Website Development",
                description: "Professional K-12 and higher education websites that showcase your institution, engage students and parents, and provide essential educational information with modern, accessible design.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-green-500"
              },
              {
                id: 2,
                title: "Learning Management Systems",
                description: "Comprehensive LMS platforms with course delivery, student progress tracking, assessment tools, collaborative learning features, and administrative dashboards for effective education management.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-500"
              },
              {
                id: 3,
                title: "Online Course Platforms",
                description: "Feature-rich e-learning platforms for creating, selling, and delivering educational content with video streaming, interactive assessments, certification, and payment processing capabilities.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-purple-500"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="green"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="Educational Website Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for Educational Website Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build Educational Website Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Educational Industry Solutions Section */}
        <section aria-label="Educational Website Solutions for Various Learning Environments" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="Educational Website Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About Educational Website Development"
            subtitle="Get comprehensive answers about our educational website development services, Learning Management Systems, school website design, and e-learning platform development process"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with Educational Website Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}