import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket, 
  Brain, 
  Globe, 
  Users, 
  Award, 
  BookOpen, 
  Zap, 
  Clock, 
  Target 
} from 'lucide-react';

export default function FoxbeepUniversityPage() {
  const [activeProgram, setActiveProgram] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState({});
  const refs = useRef({});
  
  const registerRef = (id, element) => {
    if (element && !refs.current[id]) {
      refs.current[id] = element;
    }
  };
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Object.keys(refs.current).forEach(key => {
            if (refs.current[key] === entry.target) {
              setIsIntersecting(prev => ({ ...prev, [key]: true }));
            }
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    Object.values(refs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const internshipPrograms = [
    {
      title: "Tech Innovators Internship",
      description: "Dive into cutting-edge technology projects that push the boundaries of innovation. Work alongside our top engineers and develop solutions that shape the future.",
      icon: <Rocket className="w-16 h-16 text-orange-500" />,
      skills: ["AI/ML", "Cloud Computing", "Blockchain", "IoT"],
      duration: "12 weeks",
      level: "Intermediate to Advanced"
    },
    {
      title: "Design & Experience Program", 
      description: "Transform user experiences through creative design thinking. Craft intuitive interfaces and user-centric solutions that revolutionize digital interactions.",
      icon: <Brain className="w-16 h-16 text-purple-500" />,
      skills: ["UX/UI Design", "Interaction Design", "Prototyping", "User Research"],
      duration: "10 weeks",
      level: "Beginner to Intermediate"
    },
    {
      title: "Global Impact Internship",
      description: "Collaborate on international projects that address real-world challenges. Work with our global teams and make a meaningful difference through technology.",
      icon: <Globe className="w-16 h-16 text-blue-500" />,
      skills: ["Cross-Cultural Collaboration", "Social Innovation", "Global Tech Solutions"],
      duration: "16 weeks",
      level: "All Levels"
    }
  ];

  const learningJourney = [
    {
      step: "01",
      title: "Application & Assessment",
      description: "Submit your unique profile. We'll evaluate your potential through a comprehensive skills assessment and innovative problem-solving challenge.",
      timeline: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Tailored Learning Path",
      description: "Get matched with a personalized internship program that aligns with your strengths, interests, and career aspirations.",
      timeline: "1 week"
    },
    {
      step: "03",
      title: "Immersive Experience", 
      description: "Engage in real-world projects, receive mentorship from industry leaders, and transform your potential into breakthrough innovations.",
      timeline: "10-16 weeks"
    }
  ];

  const internshipPerks = [
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Expert Mentorship",
      description: "Direct guidance from industry experts and senior innovators with 10+ years experience."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Industry Recognition",
      description: "Opportunities to showcase your work and gain recognition from top tech companies."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-red-600" />,
      title: "Continuous Learning",
      description: "Access to world-class training resources, workshops, and certification programs."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Innovation Challenges",
      description: "Participate in cutting-edge tech challenges, hackathons, and startup competitions."
    }
  ];

  // SEO Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Foxbeep University",
    "description": "Premier technology internship and training programs for aspiring tech innovators. Learn AI/ML, UX/UI design, and global tech solutions through hands-on experience.",
    "url": "https://foxbeep.com/university",
    "logo": "https://foxbeep.com/images/foxbeep-university-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-FOXBEEP",
      "contactType": "Admissions",
      "availableLanguage": "English"
    },
    "offers": internshipPrograms.map(program => ({
      "@type": "Course",
      "name": program.title,
      "description": program.description,
      "provider": {
        "@type": "Organization",
        "name": "Foxbeep University"
      },
      "courseMode": "blended",
      "timeRequired": program.duration,
      "skillLevel": program.level,
      "teaches": program.skills
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "147",
      "bestRating": "5"
    }
  };

  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Foxbeep University Internship Programs",
    "description": "Comprehensive technology internship programs designed to launch your tech career",
    "numberOfItems": internshipPrograms.length,
    "itemListElement": internshipPrograms.map((program, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": program.title,
      "description": program.description,
      "provider": {
        "@type": "Organization", 
        "name": "Foxbeep University"
      },
      "teaches": program.skills,
      "timeRequired": program.duration,
      "courseMode": "blended",
      "skillLevel": program.level
    }))
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long are Foxbeep University internship programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our internship programs range from 10-16 weeks depending on the specialization. Tech Innovators runs 12 weeks, Design & Experience is 10 weeks, and Global Impact is 16 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What prerequisites are needed for the internship programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prerequisites vary by program. Tech Innovators requires intermediate programming skills, Design & Experience welcomes beginners, and Global Impact accepts all levels with focus on collaboration skills."
        }
      },
      {
        "@type": "Question",
        "name": "Do interns receive certificates upon completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all successful interns receive industry-recognized certificates and have opportunities to showcase their work for potential employment with partner companies."
        }
      },
      {
        "@type": "Question",
        "name": "What is the application process for Foxbeep University?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The application process includes submitting your profile, completing a skills assessment, and participating in an innovative problem-solving challenge. The entire process takes 1-2 weeks."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Foxbeep University - Tech Internships & Innovation Programs | Launch Your Career</title>
        <meta name="description" content="Join Foxbeep University's premier tech internship programs. Learn AI/ML, UX/UI design, and global innovation through hands-on experience with industry experts. Apply now for 2025 programs." />
        <meta name="keywords" content="tech internship, technology training, AI ML internship, UX UI design program, software development internship, innovation training, tech career, coding bootcamp, design thinking, global tech program" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Foxbeep University - Premier Tech Internship Programs for Future Innovators" />
        <meta property="og:description" content="Transform your career with hands-on tech internships. Learn from industry experts in AI/ML, UX/UI design, and global innovation. 95% job placement rate." />
        <meta property="og:image" content="https://foxbeep.com/images/university-og-image.png" />
        <meta property="og:url" content="https://foxbeep.com/university" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep University" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Foxbeep University - Tech Internships That Launch Careers" />
        <meta name="twitter:description" content="Join 500+ successful graduates. Learn AI/ML, UX/UI design & global tech innovation through real-world projects." />
        <meta name="twitter:image" content="https://foxbeep.com/images/university-twitter-card.png" />
        <meta name="twitter:site" content="@FoxbeepUniv" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Foxbeep University Team" />
        
        {/* Educational Meta Tags */}
        <meta name="education.type" content="Internship Program" />
        <meta name="education.level" content="Professional" />
        <meta name="education.subject" content="Technology, Software Development, Design, Innovation" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
        {/* Topic and Category */}
        <meta name="topic" content="Technology Education and Training" />
        <meta name="category" content="Education, Technology, Career Development" />
        <meta name="coverage" content="Global" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="audience" content="Students, Recent Graduates, Career Changers" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/university" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data - Main Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Structured Data - Courses */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseStructuredData) }}
        />
        
        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional Performance Hints */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Additional SEO Links */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/university" />
        <link rel="alternate" hrefLang="x-default" href="https://foxbeep.com/university" />
      </Head>

      <div className="bg-white text-black min-h-screen">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" className="text-gray-500 hover:text-black" itemProp="item">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-black font-medium" itemProp="name">University</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header 
          ref={(el) => registerRef('hero', el)}
          className={`max-w-7xl mx-auto px-4 pt-24 pb-16 text-left transform transition-all duration-1000 ${
            isIntersecting.hero ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <h1 className="text-7xl font-black mb-6 tracking-tight text-black">
            FOXBEEP UNIVERSITY
          </h1>
          <p className="text-2xl max-w-4xl mb-8 text-gray-800">
            Unleash your potential. Transform ideas into groundbreaking innovations. Your journey of technological excellence starts here.
          </p>
          
          {/* Key Stats */}
          <div className="flex flex-wrap gap-4 text-sm mb-8">
            <span className="bg-gray-100 px-3 py-1 rounded-full">500+ Graduates</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">95% Job Placement</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">3 Specialized Programs</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Expert Mentorship</span>
          </div>
          
          <div className="flex justify-left space-x-6">
            <a 
              href="https://forms.gle/vJYoRrJ1G6Z1Setz8" 
              className="bg-black text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="#programs" 
              className="border-2 border-black text-black px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </a>
          </div>
        </header>

        {/* Internship Programs */}
        <section 
          id="programs"
          ref={(el) => registerRef('programs', el)}
          className="py-24 bg-gray-50"
          aria-label="Internship Programs"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-black mb-6 text-left">
              INTERNSHIP PROGRAMS
            </h2>
            <p className="text-xl mb-16 max-w-3xl text-gray-700">
              Choose from three specialized tracks designed to accelerate your career in technology and innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {internshipPrograms.map((program, index) => (
                <article 
                  key={index}
                  className={`
                    p-8 text-left transition-all duration-300 border-2 cursor-pointer transform
                    ${activeProgram === index 
                      ? 'bg-gray-100 border-black scale-105' 
                      : 'hover:bg-gray-100 border-transparent hover:border-black hover:scale-102'
                    }
                    ${isIntersecting.programs ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setActiveProgram(activeProgram === index ? null : index)}
                  itemScope
                  itemType="https://schema.org/Course"
                >
                  <div className="flex justify-left mb-6" aria-hidden="true">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4" itemProp="name">{program.title}</h3>
                  <p className="mb-4 text-gray-700" itemProp="description">{program.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Duration: <strong itemProp="timeRequired">{program.duration}</strong></span>
                      <span>Level: <strong itemProp="skillLevel">{program.level}</strong></span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-left gap-2">
                    {program.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
                        itemProp="teaches"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Journey */}
        <section 
          ref={(el) => registerRef('journey', el)}
          className="py-24"
          aria-label="Learning Journey"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-black mb-6 text-left">
              YOUR LEARNING JOURNEY
            </h2>
            <p className="text-xl mb-16 max-w-3xl text-gray-700">
              A structured path from application to career launch, designed to maximize your growth and success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {learningJourney.map((stage, index) => (
                <article 
                  key={index}
                  className={`text-left transform transition-all duration-500 hover:scale-105 ${
                    isIntersecting.journey ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  itemScope
                  itemType="https://schema.org/HowToStep"
                >
                  <div className="text-6xl font-black text-gray-200 mb-4" aria-hidden="true">{stage.step}</div>
                  <h3 className="text-3xl font-bold mb-4" itemProp="name">{stage.title}</h3>
                  <p className="text-gray-600 mb-4" itemProp="text">{stage.description}</p>
                  <div className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Timeline: {stage.timeline}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Perks */}
        <section 
          ref={(el) => registerRef('perks', el)}
          className="bg-gray-50 py-24"
          aria-label="Program Benefits"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-black mb-6 text-left">
              PROGRAM ADVANTAGES
            </h2>
            <p className="text-xl mb-16 max-w-3xl text-gray-700">
              Experience world-class benefits designed to accelerate your professional growth and career success.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {internshipPerks.map((perk, index) => (
                <article 
                  key={index}
                  className={`text-left group transform transition-all duration-500 ${
                    isIntersecting.perks ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-left mb-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                    {perk.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-700 transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600">{perk.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Track Record</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-black text-black mb-2">500+</div>
                <p className="text-lg text-gray-600">Successful Graduates</p>
              </div>
              <div>
                <div className="text-5xl font-black text-black mb-2">95%</div>
                <p className="text-lg text-gray-600">Job Placement Rate</p>
              </div>
              <div>
                <div className="text-5xl font-black text-black mb-2">$85K</div>
                <p className="text-lg text-gray-600">Average Starting Salary</p>
              </div>
              <div>
                <div className="text-5xl font-black text-black mb-2">4.9★</div>
                <p className="text-lg text-gray-600">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {faqStructuredData.mainEntity.map((faq, index) => (
                <details key={index} className="bg-white p-6 rounded-lg" itemScope itemType="https://schema.org/Question">
                  <summary className="font-bold text-lg cursor-pointer" itemProp="name">
                    {faq.name}
                  </summary>
                  <div className="mt-4 text-gray-700" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="apply" className="text-center py-24 bg-black text-white">
          <h2 className="text-5xl font-black mb-8">
            YOUR FUTURE STARTS NOW
          </h2>
          <p className="text-2xl max-w-4xl mx-auto mb-12">
            Break barriers, challenge conventions, and become a tech innovator. Foxbeep University is your launchpad to an extraordinary career.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://forms.gle/vJYoRrJ1G6Z1Setz8" 
              className="bg-white text-black px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-200 transition-colors"
            >
              START YOUR APPLICATION
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white/20 transition-colors"
            >
              SCHEDULE A CONSULTATION
            </a>
          </div>
        </section>
      </div>
    </>
  );
}