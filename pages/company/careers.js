import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Car, Shield, GraduationCap, Briefcase, Gift, Clock, Globe, Rocket } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';
import Link from 'next/link';

export default function CareersPage() {
  const [activeIndustry, setActiveIndustry] = useState(null);
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

  const hiringProcess = [
    {
      title: "Application",
      description: "Submit your online application through our website. Our Talent Acquisition team will assess your skills and experience.",
      step: "01"
    },
    {
      title: "Interview",
      description: "A face-to-face interview will follow so that we can familiarize ourselves with your expertise and experience in the field.",
      step: "02"
    },
    {
      title: "Decision & Offer",
      description: "Congratulations! You have been selected. Sign the agreement and begin the on-boarding process with us.",
      step: "03"
    }
  ];

  const perks = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Vehicle",
      description: "The company's maintained car."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Insurance",
      description: "We ensure all your healthcare needs, including maternity coverage."
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
      title: "Training",
      description: "We have mentors to guide and support you along with training programs to polish your skills."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-yellow-600" />,
      title: "Retirement Planning",
      description: "We plan your retirement through EOBI and gratuity funds."
    },
    {
      icon: <Gift className="w-12 h-12 text-red-600" />,
      title: "Bonuses",
      description: "Pay rise, promotions, and top opportunities for professional development."
    },
    {
      icon: <Clock className="w-12 h-12 text-teal-600" />,
      title: "Comprehensive Leaves",
      description: "Sick, casual, annual, parental, marriage, and hajj leaves."
    }
  ];

  const industries = [
    {
      title: "Automotive",
      description: "Improve vehicle management and enhance customer satisfaction with custom solutions.",
      icon: <Car className="w-16 h-16" />
    },
    {
      title: "Finance",
      description: "Get scalable solutions that improve the efficiency and security of financial services.",
      icon: <Briefcase className="w-16 h-16" />
    },
    {
      title: "Real Estate",
      description: "Streamline operations, simplifying property management and sales.",
      icon: <Globe className="w-16 h-16" />
    },
    {
      title: "Hospitality",
      description: "Create user-friendly solutions that enhance guest experiences and boost customer satisfaction.",
      icon: <Rocket className="w-16 h-16" />
    },
    {
      title: "Education",
      description: "Revolutionize ed-tech with solutions that boost student engagement and simplify learning.",
      icon: <GraduationCap className="w-16 h-16" />
    },
    {
      title: "Healthcare",
      description: "Enhance healthcare by streamlining processes and improving patient care.",
      icon: <Shield className="w-16 h-16" />
    }
  ];

  // SEO Structured Data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep",
    "url": "https://foxbeep.com",
    "logo": "https://foxbeep.com/logo.jpg",
    "description": "Innovative digital solutions company transforming businesses across automotive, finance, real estate, hospitality, education, and healthcare industries.",
    "foundingDate": "2018",
    "numberOfEmployees": "50-200",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "HR Department",
      "email": "careers@foxbeep.com"
    },
    "sameAs": [
      "https://linkedin.com/company/foxbeep",
      "https://twitter.com/foxbeep",
      "https://facebook.com/foxbeep"
    ]
  };

  const jobPostingStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Multiple Positions Available",
    "description": "Join Foxbeep's innovative team! We're hiring across multiple departments including software development, design, project management, and business development. Work on cutting-edge digital solutions across automotive, finance, real estate, hospitality, education, and healthcare industries.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Foxbeep",
      "sameAs": "https://foxbeep.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "employmentType": ["FULL_TIME", "CONTRACTOR"],
    "datePosted": "2025-06-06",
    "validThrough": "2025-12-31",
    "applicationContact": {
      "@type": "ContactPoint",
      "email": "careers@foxbeep.com",
      "url": "https://foxbeep.com/careers"
    },
    "jobBenefits": [
      "Company vehicle",
      "Health insurance including maternity coverage",
      "Professional training and mentorship",
      "Retirement planning (EOBI and gratuity)",
      "Performance bonuses",
      "Comprehensive leave policy"
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://foxbeep.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://foxbeep.com/careers"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the hiring process at Foxbeep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our hiring process consists of 3 steps: (1) Online application submission and skills assessment, (2) Face-to-face interview to evaluate expertise and experience, (3) Decision, offer, and onboarding process."
        }
      },
      {
        "@type": "Question", 
        "name": "What benefits does Foxbeep offer employees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive benefits including company vehicle, health insurance with maternity coverage, professional training and mentorship, retirement planning through EOBI and gratuity funds, performance bonuses, and comprehensive leave policies covering sick, casual, annual, parental, marriage, and hajj leaves."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Foxbeep work in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Foxbeep transforms businesses across six key industries: Automotive, Finance, Real Estate, Hospitality, Education, and Healthcare, providing custom digital solutions for each sector."
        }
      },
      {
        "@type": "Question",
        "name": "Does Foxbeep provide professional development opportunities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide mentors to guide and support employees along with comprehensive training programs to polish skills, pay rises, promotions, and top opportunities for professional development."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Careers at Foxbeep - Join Our Innovative Digital Solutions Team</title>
        <meta name="description" content="Start your dream career at Foxbeep! Join our innovative team transforming automotive, finance, real estate, hospitality, education & healthcare industries. Excellent benefits, growth opportunities & comprehensive hiring process." />
        <meta name="keywords" content="foxbeep careers, software developer jobs, digital solutions careers, tech jobs san francisco, innovation careers, automotive tech jobs, finance technology careers, real estate software jobs, healthcare tech careers, education technology jobs" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Careers at Foxbeep - Your Dream Career Begins Here" />
        <meta property="og:description" content="Join Foxbeep's mission to revolutionize digital innovation! We offer amazing perks, comprehensive benefits, and opportunities to work on cutting-edge solutions across multiple industries." />
        <meta property="og:image" content="https://foxbeep.com/images/careers-og-image.png" />
        <meta property="og:url" content="https://foxbeep.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Foxbeep - Join Our Innovation Team" />
        <meta name="twitter:description" content="Transform your career with Foxbeep! Company vehicle, health insurance, training, bonuses & more. Apply now to join our digital solutions team." />
        <meta name="twitter:image" content="https://foxbeep.com/images/careers-twitter-card.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Foxbeep HR Team" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
        {/* Job/Career Specific Meta Tags */}
        <meta name="topic" content="Technology Careers" />
        <meta name="category" content="Employment" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="employment-type" content="Full-time, Contract" />
        <meta name="industry" content="Information Technology, Software Development" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/careers" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        
        {/* Structured Data - Job Posting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingStructuredData) }}
        />
        
        {/* Structured Data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
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
        <link rel="dns-prefetch" href="//linkedin.com" />
        
        {/* Alternative Links for Multilingual SEO (if applicable) */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/careers" />
        <link rel="alternate" hrefLang="x-default" href="https://foxbeep.com/careers" />
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
              <span className="text-black font-medium" itemProp="name">Careers</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header 
          ref={(el) => registerRef('hero', el)}
          className="max-w-7xl mx-auto px-4 pt-24 pb-16"
        >
          <div className="text-left">
            <h1 className="text-7xl font-black mb-6 tracking-tight">
              YOUR DREAM CAREER BEGINS HERE
            </h1>
            <p className="text-2xl max-w-4xl mb-12">
              We are on a mission to bring some of the best minds out there to join us in revolutionizing the world of innovation. Come join us!
            </p>
            <div className="flex flex-wrap gap-4 text-sm mb-8">
              <span className="bg-gray-100 px-3 py-1 rounded-full">6 Industries</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Comprehensive Benefits</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Career Growth</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Remote Friendly</span>
            </div>
            <Link 
              href="https://forms.gle/vJYoRrJ1G6Z1Setz8" 
              className="bg-black text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors"
              aria-label="Apply for a position at Foxbeep"
            >
              Apply Now
            </Link>
          </div>
        </header>

        {/* Hiring Process */}
        <section 
          ref={(el) => registerRef('process', el)}
          className="bg-gray-50 py-24"
          aria-label="Hiring process"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-black mb-16 text-left">OUR HIRING PROCESS</h2>
            <p className="text-xl text-left mb-16 max-w-4xl">
              Foxbeep makes hiring easier by breaking down the steps to working with us. Our process evaluates candidates for technical knowledge, IQ, communication skills, and ability to work in a team environment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {hiringProcess.map((process, index) => (
                <article 
                  key={index}
                  className={`text-left transform transition-all duration-1000 ${
                    isIntersecting.process ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  itemScope
                  itemType="https://schema.org/HowToStep"
                >
                  <div className="text-6xl font-black text-gray-200 mb-4" aria-hidden="true">{process.step}</div>
                  <h3 className="text-3xl font-bold mb-4" itemProp="name">{process.title}</h3>
                  <p className="text-gray-600" itemProp="text">{process.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section 
          ref={(el) => registerRef('perks', el)}
          className="py-24"
          aria-label="Employee benefits and perks"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-black mb-16 text-left">OUR PERKS</h2>
            <p className="text-xl text-left mb-16 max-w-4xl">
              Let us help you build your ideal work-life balance with our amazing perks.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <article 
                  key={index}
                  className={`text-left group transform transition-all duration-1000 ${
                    isIntersecting.perks ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <div className="flex justify-left mb-6" aria-hidden="true">
                    {perk.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors" itemProp="name">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600" itemProp="description">{perk.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section 
          ref={(el) => registerRef('industries', el)}
          className="bg-black text-white py-24"
          aria-label="Industries we transform"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-black mb-16 text-left">INDUSTRIES WE TRANSFORM</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <article 
                  key={index}
                  className={`
                    text-left p-8 transition-all duration-300 cursor-pointer transform
                    ${isIntersecting.industries ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                    ${activeIndustry === index 
                      ? 'bg-gray-900 text-white scale-105' 
                      : 'hover:bg-gray-900 hover:text-white hover:scale-105'
                    }
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setActiveIndustry(activeIndustry === index ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveIndustry(activeIndustry === index ? null : index);
                    }
                  }}
                  aria-expanded={activeIndustry === index}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="flex justify-left mb-6 opacity-70" aria-hidden="true">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4" itemProp="name">{industry.title}</h3>
                  <p itemProp="description">{industry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <TextHeroSection/>
      </div>
    </>
  );
}