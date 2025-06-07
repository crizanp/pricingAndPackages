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

export default function AIDevelopment() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Development Services",
    "description": "Professional AI development services including custom AI solutions, machine learning models, natural language processing, computer vision systems, and AI integration services. Expert AI developers with 18+ years experience.",
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
    "serviceType": "AI Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Solution Development",
            "description": "Tailor-made AI solutions aligned with specific business challenges and goals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Models",
            "description": "Development and deployment of machine learning models for actionable insights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Natural Language Processing",
            "description": "NLP solutions for text analysis, chatbots, and content generation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer Vision Systems",
            "description": "Image and video analysis systems for object detection and recognition"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration Services",
            "description": "Seamless integration of AI capabilities into existing software ecosystems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Maintenance & Optimization",
            "description": "Ongoing support, retraining, and optimization of AI systems"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48",
      "bestRating": "5"
    }
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does AI development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI development costs vary widely based on project complexity, data requirements, and implementation scope. Basic AI implementations may range from $10,000-$30,000, while sophisticated AI systems with custom algorithms can cost $50,000-$300,000+. Enterprise-level AI solutions typically start at $100,000 and can exceed $500,000 depending on scale and complexity."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the AI development process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for AI development typically ranges from 8-24 weeks depending on complexity. Simpler AI integrations may be completed in 8-12 weeks, while complex custom AI solutions can take 16-24 weeks or longer. Factors affecting timeline include data availability and quality, model complexity, integration requirements, and testing needs."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Foxbeep for AI development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clients choose Foxbeep for our proven track record of delivering high-quality AI solutions. We offer expert data scientists and AI engineers, transparent development processes, ethical AI practices, and ongoing optimization support. Our business-focused approach ensures your AI project delivers measurable ROI while solving real business problems."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for AI development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We utilize modern AI technologies including TensorFlow, PyTorch, and scikit-learn for model development. For natural language processing, we implement BERT, GPT, and custom transformers. Our computer vision solutions use OpenCV and deep learning frameworks. We deploy on scalable cloud infrastructure including AWS SageMaker, Google AI Platform, and Azure ML."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing AI maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive AI maintenance packages to ensure your models remain accurate and effective. Our maintenance services include model retraining, performance monitoring, data pipeline management, algorithm updates, and continuous improvement based on real-world feedback and changing business requirements."
        }
      }
    ]
  };

  const serviceData = {
    title: "AI Development Services",
    description: "We build custom AI solutions that enhance decision-making, automation, and business intelligence while delivering scalable, ethical, and innovative technological experiences.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "48",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      {
        title: "Custom AI Solution Development",
        description: "Get tailor-made AI solutions aligned with your specific business challenges and goals."
      },
      {
        title: "Machine Learning Models",
        description: "Develop and deploy machine learning models that extract actionable insights from your data."
      },
      {
        title: "Natural Language Processing",
        description: "Implement NLP solutions for advanced text analysis, chatbots, and content generation."
      },
      {
        title: "Computer Vision Systems",
        description: "Create powerful image and video analysis systems for object detection and recognition."
      },
      {
        title: "AI Integration Services",
        description: "Seamlessly integrate AI capabilities into your existing software ecosystem and workflows."
      },
      {
        title: "AI Maintenance & Optimization",
        description: "Ensure your AI systems remain accurate, ethical, and optimized with ongoing support and retraining."
      }
    ]
  };

  const industrySliderData = {
    title: "Serving a variety of industries with AI Solutions",
    subtitle: "FoxBeep provides industry-leading AI technologies that transform how businesses operate and engage with customers.",
    industries: [
      {
        title: "Finance",
        description: "Fraud detection, algorithmic trading, and personalized financial advisory systems.",
      },
      {
        title: "Healthcare",
        description: "Diagnostic assistance, patient data analysis, and treatment recommendation systems.",
      },
      {
        title: "Retail",
        description: "Inventory optimization, customer behavior prediction, and personalized shopping experiences.",
      },
      {
        title: "Manufacturing",
        description: "Predictive maintenance, quality control automation, and supply chain optimization.",
      },
      {
        title: "Transportation",
        description: "Route optimization, demand forecasting, and autonomous system development.",
      },
      {
        title: "Marketing",
        description: "Customer segmentation, content generation, and campaign performance prediction.",
      }
    ]
  };

  const devProcessData = {
    title: "Our AI Development Process",
    description: "We follow a systematic approach to deliver high-quality AI solutions that are effective, ethical, and tailored to your specific business requirements.",
    processSteps: [
      {
        number: 1,
        title: "Problem Definition",
        description: "Clearly identify the business problem and determine if AI is the appropriate solution, defining specific goals, metrics, and expected outcomes."
      },
      {
        number: 2,
        title: "Data Assessment",
        description: "Evaluate available data sources, quality, and volume needed for training effective AI models while identifying data collection or preparation needs."
      },
      {
        number: 3,
        title: "Solution Architecture",
        description: "Design the technical architecture for your AI solution, selecting appropriate algorithms, frameworks, and infrastructure components."
      },
      {
        number: 4,
        title: "Model Development",
        description: "Build, train, and test AI models using best practices in machine learning development and optimization techniques."
      },
      {
        number: 5,
        title: "Integration & Deployment",
        description: "Seamlessly integrate the AI system with your existing technology stack and deploy to production environments."
      },
      {
        number: 6,
        title: "Testing & Validation",
        description: "Conduct comprehensive testing across various scenarios to ensure accuracy, reliability, and performance of your AI solution."
      },
      {
        number: 7,
        title: "Monitoring & Improvement",
        description: "Implement continuous monitoring systems and iterative improvement processes to maintain and enhance AI performance over time."
      }
    ]
  };

  const faqItems = [
    {
      question: "How much does AI development cost?",
      answer: "AI development costs vary widely based on project complexity, data requirements, and implementation scope. Basic AI implementations may range from $10,000-$30,000, while sophisticated AI systems with custom algorithms can cost $50,000-$300,000+. Enterprise-level AI solutions typically start at $100,000 and can exceed $500,000 depending on scale and complexity."
    },
    {
      question: "How long does the AI development process take?",
      answer: "The timeline for AI development typically ranges from 8-24 weeks depending on complexity. Simpler AI integrations may be completed in 8-12 weeks, while complex custom AI solutions can take 16-24 weeks or longer. Factors affecting timeline include data availability and quality, model complexity, integration requirements, and testing needs."
    },
    {
      question: "Why choose Foxbeep for AI development?",
      answer: "Clients choose Foxbeep for our proven track record of delivering high-quality AI solutions. We offer expert data scientists and AI engineers, transparent development processes, ethical AI practices, and ongoing optimization support. Our business-focused approach ensures your AI project delivers measurable ROI while solving real business problems."
    },
    {
      question: "What technologies do you use for AI development?",
      answer: "We utilize modern AI technologies including TensorFlow, PyTorch, and scikit-learn for model development. For natural language processing, we implement BERT, GPT, and custom transformers. Our computer vision solutions use OpenCV and deep learning frameworks. We deploy on scalable cloud infrastructure including AWS SageMaker, Google AI Platform, and Azure ML."
    },
    {
      question: "Do you provide ongoing AI maintenance?",
      answer: "Yes, we offer comprehensive AI maintenance packages to ensure your models remain accurate and effective. Our maintenance services include model retraining, performance monitoring, data pipeline management, algorithm updates, and continuous improvement based on real-world feedback and changing business requirements."
    },
    {
      question: "What industries do you serve with AI development?",
      answer: "We serve diverse industries including finance (fraud detection, algorithmic trading), healthcare (diagnostic assistance, patient analysis), retail (inventory optimization, personalized experiences), manufacturing (predictive maintenance, quality control), transportation (route optimization, autonomous systems), and marketing (customer segmentation, content generation)."
    },
    {
      question: "How do you ensure AI ethics and transparency?",
      answer: "We implement ethical AI practices including bias detection and mitigation, explainable AI models, data privacy protection, fairness testing, and transparent decision-making processes. Our AI solutions comply with industry standards and regulations while maintaining accountability and trustworthiness."
    },
    {
      question: "Can you integrate AI with existing business systems?",
      answer: "Yes, we specialize in seamless AI integration with existing software ecosystems, databases, APIs, and workflows. Our integration services ensure minimal disruption to current operations while maximizing the value of AI capabilities across your organization."
    }
  ];

  const benefitsData = {
    title: "Key benefits of our AI development services",
    benefits: [
      "Data-driven decision making to improve business outcomes.",
      "Automation of repetitive tasks to increase operational efficiency.",
      "Scalable AI solutions that grow with your business.",
      "Ethical AI implementation with transparency and accountability.",
      "Experienced data scientists and machine learning engineers."
    ],
    techIcons: [
      { name: "TensorFlow", isDark: true },
      { name: "PyTorch", isDark: false },
      { name: "Python", isDark: true },
      { name: "Scikit-learn", isDark: false },
      { name: "Keras", isDark: true },
      { name: "AWS", isDark: false },
      { name: "Azure ML", isDark: true },
      { name: "Docker", isDark: false },
      { name: "Kubernetes", isDark: true }
    ],
    ctaText: "Let's Discuss"
  };

  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for AI Development",
    features: [
      {
        id: "customization",
        title: "Custom AI Solutions",
        content: "We build highly customized AI models tailored to your specific business challenges, ensuring relevant and actionable insights from your data."
      },
      {
        id: "security",
        title: "Ethical AI Practices",
        content: "Our AI development incorporates best-in-class security, privacy, and fairness measures to ensure responsible and trustworthy artificial intelligence."
      },
      {
        id: "userInterface",
        title: "Intuitive User Interfaces",
        content: "We design user-friendly interfaces that make complex AI outputs accessible and actionable for all stakeholders, regardless of technical expertise."
      },
      {
        id: "performance",
        title: "Optimized Performance",
        content: "Our AI systems are built for efficiency and accuracy, using advanced algorithms, model optimization, and scalable infrastructure to deliver reliable results."
      },
      {
        id: "integration",
        title: "Seamless Integration",
        content: "We integrate AI capabilities with your existing business systems, data sources, and workflows to maximize value and minimize disruption."
      },
      {
        id: "maintenance",
        title: "Continuous Improvement",
        content: "Get peace of mind with our ongoing support plans, including model retraining, performance monitoring, and algorithm updates to maintain accuracy."
      }
    ]
  };

  const teamBannerData = {
    title: "Build an AI development",
    highlightedText: "Team",
    buttonText: "Start Your Project",
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
        <title>AI Development Services | Custom AI Solutions & Machine Learning | Foxbeep</title>
        <meta name="description" content="Professional AI development services including custom AI solutions, machine learning models, NLP, computer vision, and AI integration. Expert AI developers with 18+ years experience and 4.9★ rating." />
        <meta name="keywords" content="AI development services, custom AI solutions, machine learning development, artificial intelligence consulting, AI integration, NLP development, computer vision, AI developers, machine learning engineers, AI consulting" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Development Services | Custom AI Solutions & Machine Learning" />
        <meta property="og:description" content="Professional AI development services with custom solutions, machine learning models, NLP, and computer vision. 4.9★ rated AI developers with 18+ years experience." />
        <meta property="og:image" content="https://foxbeep.com/images/ai-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/ai-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep AI Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Development Services | Custom AI Solutions | Foxbeep" />
        <meta name="twitter:description" content="Professional AI development with machine learning, NLP, computer vision. 4.9★ rated AI developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/ai-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="AI Development" />
        <meta name="expertise" content="Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, AI Integration" />
        <meta name="rating" content="4.9/5 based on 48 reviews" />
        <meta name="experience" content="18+ Years" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/ai-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/ai-development" />
        
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
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <section aria-label="AI Development Services Hero" itemProp="description">
          <ServiceBanner {...serviceData} />
        </section>

        {/* Full-screen image section below the banner */}
        <section aria-label="AI Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/ai-dev.avif"
              alt="AI Development Services - Custom AI Solutions and Machine Learning"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="AI Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="AI Development Benefits">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Service Cards Slider */}
        <section aria-label="Featured AI Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Machine Learning Models",
                description: "Custom ML models for prediction, classification, and anomaly detection.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-500"
              },
              {
                id: 2,
                title: "Natural Language Processing",
                description: "Advanced NLP solutions for text analysis, sentiment analysis, and chatbots.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-green-500"
              },
              {
                id: 3,
                title: "Computer Vision Systems",
                description: "Intelligent image and video analysis for object detection and recognition.",
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
        <section aria-label="AI Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for AI Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Banner Section */}
        <section aria-label="Build AI Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Industry Slider Section */}
        <section aria-label="AI Solutions for Various Industries" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="AI Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our AI development services"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with AI Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}