import Head from "next/head";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

export default function EducationSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep Education Technology Solutions",
    "url": "https://foxbeep.com/industries/education",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional education technology development services including learning management systems, online course platforms, educational mobile apps, and e-learning solutions. 18+ years experience with scalable EdTech development.",
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
      "name": "Education Technology Development Services",
      "description": "Custom EdTech development, learning management systems, online course platforms, educational mobile apps, and e-learning solutions"
    },
    "expertise": [
      "EdTech Development",
      "Learning Management Systems",
      "Online Course Platforms",
      "Educational Mobile Apps",
      "E-learning Solutions",
      "Student Information Systems"
    ]
  };

  // Hero section content
  const heroContent = {
    title: "Education Technology Development Services",
    subtitle: "Custom EdTech solutions including learning management systems, online course platforms, educational mobile apps, and e-learning systems designed to enhance education delivery and student engagement.",
    buttonText: "Get Free Consultation",
    buttonLink: "#contact",
    backgroundImage: "/images/industries/education.jpg",
    imageAlt: "Education technology development and e-learning solutions"
  };

  // Text highlight section content
  const textHeroContent = {
    headingText: "EDTECH DEVELOPMENT FOR MODERN EDUCATION",
    highlightWord: "DEVELOPMENT",
    descriptionText: "Education technology development transforms learning through innovative digital solutions. From learning management systems to interactive course platforms, our development expertise delivers scalable educational applications. We specialize in custom e-learning platforms, educational mobile apps, and integrated learning systems that improve student outcomes and educational efficiency.",
    brandName: "Foxbeep",
    highlightColor: "bg-green-300"
  };

  // Learning Management Systems section
  const lmsContent = {
    mainHeading: "Our Education Technology Solutions",
    introText: "We deliver professional EdTech development services focused on enhancing education and learning experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Educational Mobile Apps",
      "Student Information Systems"
    ],
    featuredService: "Learning Management Systems",
    featuredServiceDescription: "Comprehensive LMS platforms with course management, student tracking, assessment tools, and collaborative learning features. Our systems support blended learning, remote education, and institutional management.",
    featuredServiceImage: "/images/learning-management-systems.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Course Management & Delivery",
        description: "Complete course creation tools with multimedia content support, lesson planning, curriculum mapping, progress tracking, and automated content delivery for structured learning experiences."
      },
      {
        title: "Assessment & Grading Tools",
        description: "Advanced assessment features including online quizzes, automated grading, rubric-based evaluation, plagiarism detection, and comprehensive grade management for fair student evaluation."
      },
      {
        title: "Student Progress Analytics",
        description: "Detailed learning analytics with performance dashboards, engagement metrics, learning path tracking, and predictive insights to support personalized education strategies."
      }
    ]
  };

  // Online Course Platforms section
  const coursePlatformContent = {
    mainHeading: "Our Education Technology Solutions",
    introText: "We deliver professional EdTech development services focused on enhancing education and learning experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Educational Mobile Apps",
      "Student Information Systems"
    ],
    featuredService: "Online Course Platforms",
    featuredServiceDescription: "Interactive online learning platforms with video streaming, live classes, discussion forums, and monetization features. Perfect for educators, institutions, and online course creators.",
    featuredServiceImage: "/images/online-course-platforms.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Interactive Video Learning",
        description: "High-quality video streaming with interactive elements, bookmarking, note-taking, playback speed control, and offline viewing capabilities for engaging multimedia learning experiences."
      },
      {
        title: "Live Virtual Classrooms",
        description: "Real-time video conferencing with screen sharing, digital whiteboard, breakout rooms, recording capabilities, and interactive tools for immersive online education delivery."
      },
      {
        title: "Course Monetization Tools",
        description: "Comprehensive payment integration with subscription models, one-time purchases, course bundles, discount coupons, and revenue analytics for successful course business management."
      }
    ]
  };

  // Educational Mobile Apps section
  const mobileEducationContent = {
    mainHeading: "Our Education Technology Solutions",
    introText: "We deliver professional EdTech development services focused on enhancing education and learning experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Educational Mobile Apps",
      "Student Information Systems"
    ],
    featuredService: "Educational Mobile Apps",
    featuredServiceDescription: "Native and cross-platform educational apps with offline learning, gamification, interactive content, and progress synchronization. Designed for students, teachers, and educational institutions.",
    featuredServiceImage: "/images/educational-mobile-apps.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Offline Learning Capabilities",
        description: "Download courses and content for offline access, automatic synchronization when online, offline progress tracking, and seamless learning continuity without internet dependency."
      },
      {
        title: "Gamification & Engagement",
        description: "Interactive learning elements with badges, points, leaderboards, achievements, learning streaks, and social features to motivate students and increase engagement."
      },
      {
        title: "Adaptive Learning Paths",
        description: "AI-powered personalized learning recommendations, difficulty adjustment based on performance, customized study plans, and intelligent content delivery for optimal learning outcomes."
      }
    ]
  };

  // Student Information Systems section
  const sisContent = {
    mainHeading: "Our Education Technology Solutions",
    introText: "We deliver professional EdTech development services focused on enhancing education and learning experiences:",
    companyName: "Foxbeep",
    servicesList: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Educational Mobile Apps",
      "Student Information Systems"
    ],
    featuredService: "Student Information Systems",
    featuredServiceDescription: "Comprehensive SIS platforms with enrollment management, academic records, scheduling, communication tools, and administrative features. Designed for schools, colleges, and universities.",
    featuredServiceImage: "/images/student-information-systems.jpg",
    highlightColor: "bg-green-300",
    featureDetails: [
      {
        title: "Enrollment & Registration",
        description: "Complete student lifecycle management with online admissions, course registration, fee management, document handling, and automated enrollment workflows for streamlined administration."
      },
      {
        title: "Academic Records Management",
        description: "Secure academic record keeping with transcript generation, grade management, attendance tracking, academic history, and compliance with educational standards and regulations."
      },
      {
        title: "Parent-Teacher Communication",
        description: "Integrated communication portals with parent access, teacher messaging, progress reports, event notifications, and collaborative tools to enhance educational community engagement."
      }
    ]
  };

  // FAQ Section content
  const faqItems = [
    {
      question: "What education technology development services do you provide?",
      answer: "We provide comprehensive EdTech development including learning management systems, online course platforms, educational mobile apps, student information systems, e-learning portals, and custom educational software tailored to your institution's needs."
    },
    {
      question: "Can you develop custom learning management systems (LMS)?",
      answer: "Yes, we specialize in custom LMS development with features like course management, student tracking, assessment tools, progress analytics, content delivery, and collaborative learning environments designed specifically for your educational requirements."
    },
    {
      question: "Do you develop educational mobile applications?",
      answer: "Absolutely. We develop native iOS and Android educational apps as well as cross-platform applications with features like offline learning, gamification, interactive content, progress tracking, and synchronized learning experiences."
    },
    {
      question: "What technologies do you use for EdTech development?",
      answer: "We use modern technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure), mobile frameworks (React Native, Flutter), AI/ML integration, video streaming solutions, and educational APIs for scalable EdTech solutions."
    },
    {
      question: "Can you integrate educational software with existing school systems?",
      answer: "Yes, we specialize in EdTech integration with existing systems including student information systems, library management, accounting software, HR systems, and third-party educational tools through APIs and custom connectors."
    },
    {
      question: "How do you ensure data security and student privacy compliance?",
      answer: "We implement robust security measures including data encryption, secure authentication, role-based access controls, FERPA compliance, GDPR compliance, and regular security audits to protect sensitive educational and student data."
    },
    {
      question: "What is the typical timeline for EdTech development projects?",
      answer: "EdTech development timelines vary based on complexity and features. Simple educational apps take 3-5 months, while comprehensive LMS or SIS solutions may require 6-12 months. We provide detailed project timelines during consultation."
    },
    {
      question: "Can you customize existing educational platforms like Moodle or Canvas?",
      answer: "Yes, we provide extensive customization services for platforms like Moodle, Canvas, Blackboard, and others. This includes custom plugins, themes, integrations, and feature enhancements to match your specific educational workflows."
    },
    {
      question: "Do you provide ongoing support and maintenance for educational software?",
      answer: "Absolutely. We offer comprehensive support and maintenance services including bug fixes, security updates, feature enhancements, performance optimization, content management support, and technical assistance to ensure smooth operation."
    },
    {
      question: "Why choose Foxbeep for education technology development?",
      answer: "Foxbeep combines 18+ years of software development expertise with deep understanding of educational processes and learning methodologies. Our experienced team delivers user-friendly, scalable EdTech solutions that improve educational outcomes and institutional efficiency."
    }
  ];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Education Technology Development Services | EdTech Solutions | Foxbeep</title>
        <meta name="description" content="Professional education technology development services including learning management systems, online course platforms, educational mobile apps, and e-learning solutions. Expert EdTech developers." />
        <meta name="keywords" content="education technology development, EdTech development, learning management systems, online course platforms, educational mobile apps, e-learning solutions, student information systems, LMS development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Education Technology Development Services | EdTech Solutions" />
        <meta property="og:description" content="Custom EdTech development including learning management systems, online course platforms, educational mobile apps, and e-learning systems designed to enhance education delivery." />
        <meta property="og:image" content="https://foxbeep.com/edtech-development.png" />
        <meta property="og:url" content="https://foxbeep.com/industries/education" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Education Solutions" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education Technology Development Services | Foxbeep" />
        <meta name="twitter:description" content="Expert EdTech development for learning management, online courses, and educational mobile solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/edtech-development.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industry" content="Education Technology Development" />
        <meta name="services" content="Learning Management Systems, Online Course Platforms, Educational Mobile Apps, Student Information Systems" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries/education" />
        
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
        <section aria-label="Education Technology Development Hero">
          <Hero {...heroContent} />
        </section>
        
        {/* Text Highlight Section */}
        <section aria-label="EdTech Development Overview">
          <TextHighlight {...textHeroContent} />
        </section>
        
        {/* Brand Partners */}
        <section aria-label="Trusted by Leading Educational Institutions">
          <BrandSlider />
        </section>
        
        {/* Education Technology Services Sections */}
        <section aria-label="Learning Management Systems">
          <EdtechServices {...lmsContent} />
        </section>
        
        <section aria-label="Online Course Platforms">
          <EdtechServices {...coursePlatformContent} />
        </section>
        
        <section aria-label="Educational Mobile Applications">
          <EdtechServices {...mobileEducationContent} />
        </section>
        
        <section aria-label="Student Information Systems">
          <EdtechServices {...sisContent} />
        </section>
        
        {/* FAQ Section */}
        <section aria-label="Education Technology Development FAQ">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our education technology development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>
        
        {/* Call to Action */}
        <section aria-label="Get Started with EdTech Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}