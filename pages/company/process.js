import Head from 'next/head';
import TextHeroSection from '@/components/home/textHero';
import React, { useState, useEffect, useRef } from 'react';

export default function ClientWorkflowProcess() {
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
                    // Find the id of the element
                    Object.keys(refs.current).forEach(key => {
                        if (refs.current[key] === entry.target) {
                            setIsIntersecting(prev => ({ ...prev, [key]: true }));
                        }
                    });
                }
            });
        };
        
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        
        // Observe all registered refs
        Object.values(refs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });
        
        return () => {
            observer.disconnect();
        };
    }, []);

    const workflowSteps = [
        {
            number: "01",
            title: "DISCOVER",
            icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
            description: "We begin by deeply understanding your business, users, and objectives through collaborative workshops, research, and strategic analysis.",
            details: "This foundational phase establishes the strategic direction and success metrics for your project.",
            expandedText: "Our discovery process combines qualitative research with quantitative data analysis to uncover insights that drive successful outcomes. We conduct stakeholder interviews, user research, competitive analysis, and market research to build a comprehensive understanding of your unique challenges and opportunities.",
            keyPoints: [
                "Business strategy alignment",
                "User needs assessment",
                "Market opportunity analysis",
                "Technical feasibility exploration"
            ]
        },
        {
            number: "02",
            title: "DEFINE",
            icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
            description: "We transform insights into clear specifications, user journeys, and technical requirements that guide the entire development process.",
            details: "A detailed roadmap ensures alignment between business goals and technical implementation.",
            expandedText: "Our definition phase creates a blueprint for success. We develop user personas, journey maps, and detailed use cases that capture the essence of your users' needs. These artifacts, combined with technical specifications and architecture plans, form a comprehensive project plan.",
            keyPoints: [
                "Requirements documentation",
                "User flow mapping",
                "Technical architecture planning",
                "Project timeline establishment"
            ]
        },
        {
            number: "03",
            title: "DESIGN",
            icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
            description: "Our designers create intuitive interfaces and experiences that balance aesthetic appeal with functional clarity and technical feasibility.",
            details: "Iterative prototyping helps validate concepts before significant resources are invested in development.",
            expandedText: "Our design process balances creativity with methodology. We start with wireframes and low-fidelity prototypes that establish the foundation of the user experience. As designs evolve, we incorporate visual language, interaction patterns, and accessibility considerations to create interfaces that are both beautiful and functional.",
            keyPoints: [
                "UX/UI design strategy",
                "Visual identity development",
                "Interactive prototyping",
                "User testing and validation"
            ]
        },
        {
            number: "04",
            title: "DEVELOP",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            description: "Our engineering team brings designs to life with clean, efficient code and robust architecture built for performance and scalability.",
            details: "Regular quality assurance testing throughout development ensures a polished final product.",
            expandedText: "Our development methodology emphasizes quality, maintainability, and performance. We employ agile practices with regular sprints and demos to ensure transparent progress. Our engineers implement solutions using modern technology stacks that balance innovation with proven reliability.",
            keyPoints: [
                "Agile development practices",
                "Clean code architecture",
                "Continuous integration/deployment",
                "Comprehensive testing protocols"
            ]
        },
        {
            number: "05",
            title: "DEPLOY & REFINE",
            icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
            description: "We carefully launch your solution and provide ongoing support, optimization, and enhancements based on real-world feedback.",
            details: "Analytics and user behavior tracking inform continuous improvements.",
            expandedText: "Our deployment process is designed to minimize risk and maximize adoption. We implement comprehensive testing, phased rollouts, and user training to ensure smooth transitions. Post-launch, we monitor performance, gather feedback, and continuously optimize your solution to deliver increasing value over time.",
            keyPoints: [
                "Controlled release management",
                "User adoption strategies",
                "Performance optimization",
                "Analytics-driven enhancement"
            ]
        }
    ];

    // SEO Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Development Process - Foxbeep Digital Solutions",
        "description": "Learn about Foxbeep's proven 5-step development process: Discover, Define, Design, Develop, Deploy & Refine. From strategy to launch, we deliver results.",
        "url": "https://foxbeep.com/process",
        "mainEntity": {
            "@type": "HowTo",
            "name": "Digital Solution Development Process",
            "description": "A comprehensive 5-step process for developing digital solutions that drive business results",
            "totalTime": "P12W",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "25000"
            },
            "step": workflowSteps.map((step, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": step.title,
                "text": step.description,
                "description": step.expandedText
            }))
        },
        "breadcrumb": {
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
                    "name": "Process",
                    "item": "https://foxbeep.com/company/process"
                }
            ]
        },
        "publisher": {
            "@type": "Organization",
            "name": "Foxbeep",
            "url": "https://foxbeep.com",
            "logo": "https://foxbeep.com/logo.jpg"
        }
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does the development process take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our development process typically takes 8-16 weeks depending on project complexity. The timeline includes discovery (1-2 weeks), definition (1-2 weeks), design (2-4 weeks), development (4-8 weeks), and deployment (1-2 weeks)."
                }
            },
            {
                "@type": "Question",
                "name": "What is included in the discovery phase?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The discovery phase includes business strategy alignment, user needs assessment, market opportunity analysis, and technical feasibility exploration through collaborative workshops and research."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide ongoing support after deployment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Deploy & Refine phase includes ongoing support, optimization, and enhancements based on real-world feedback and analytics-driven insights."
                }
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>Our Development Process - Foxbeep | 5-Step Digital Solution Method</title>
                <meta name="description" content="Discover Foxbeep's proven 5-step development process: Discover, Define, Design, Develop, Deploy & Refine. From strategy to successful launch, we deliver digital solutions that drive real business results." />
                <meta name="keywords" content="development process, software development methodology, digital solution process, agile development, UX design process, web development workflow, app development steps, Foxbeep process" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Our Development Process - Proven 5-Step Digital Solution Method" />
                <meta property="og:description" content="From discovery to deployment, learn how Foxbeep's methodical 5-step process transforms complex challenges into elegant digital solutions." />
                <meta property="og:image" content="https://foxbeep.com/images/process-og-image.png" />
                <meta property="og:url" content="https://foxbeep.com/process" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Foxbeep" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Development Process - 5-Step Digital Solution Method" />
                <meta name="twitter:description" content="Discover how our proven process delivers successful digital solutions: Discover → Define → Design → Develop → Deploy & Refine" />
                <meta name="twitter:image" content="https://foxbeep.com/images/process-twitter-card.png" />
                
                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                <meta name="author" content="Foxbeep Team" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="San Francisco" />
                <meta name="geo.position" content="37.7749;-122.4194" />
                <meta name="ICBM" content="37.7749, -122.4194" />
                
                {/* Topic and Category */}
                <meta name="topic" content="Software Development Process" />
                <meta name="category" content="Technology Services" />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="rating" content="General" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://foxbeep.com/company/process" />
                
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                
                {/* Structured Data - Main Process */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
            </Head>

            <div className="bg-white min-h-screen">
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
                            <span className="text-black font-medium" itemProp="name">Process</span>
                            <meta itemProp="position" content="2" />
                        </li>
                    </ol>
                </nav>

                <main 
                    ref={(el) => registerRef('process', el)}
                    className="max-w-7xl mx-auto py-24 bg-white"
                >
                    <header className="mb-20">
                        <h1 className="text-6xl font-black mb-6 tracking-tight text-black">
                            OUR DEVELOPMENT PROCESS
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl text-gray-700">
                            A methodical approach designed to transform complex challenges into elegant, effective solutions that drive real business results.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">5-Step Process</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full">8-16 Week Timeline</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full">Agile Methodology</span>
                            <span className="bg-gray-100 px-3 py-1 rounded-full">Continuous Support</span>
                        </div>
                    </header>
                    
                    <section className="space-y-32" aria-label="Development process steps">
                        {workflowSteps.map((step, index) => (
                            <article
                                key={index}
                                className={`flex flex-col md:flex-row items-start transform transition-all duration-1000 ${
                                    isIntersecting.process ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                                itemScope
                                itemType="https://schema.org/HowToStep"
                            >
                                <div className="md:w-1/3 mb-6 md:mb-0 relative">
                                    <div className="absolute top-8 left-4 z-10">
                                        <div className="flex items-center">
                                            <svg 
                                                className="w-8 h-8 mr-3 text-black" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}></path>
                                            </svg>
                                            <h2 className="text-3xl font-bold text-black" itemProp="name">
                                                {step.number}. {step.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="md:w-2/3 md:pl-8">
                                    <p className="text-xl mb-6 font-medium leading-relaxed text-black" itemProp="text">
                                        {step.description}
                                    </p>
                                    
                                    <div className="mb-6 p-4 bg-gray-100">
                                        <p className="text-base text-gray-800 italic">
                                            {step.details}
                                        </p>
                                    </div>
                                    
                                    <p className="text-lg mb-6 text-gray-800" itemProp="description">
                                        {step.expandedText}
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                        {step.keyPoints.map((point, i) => (
                                            <div key={i} className="flex items-center">
                                                <div className="w-2 h-2 bg-black rounded-full mr-2" aria-hidden="true"></div>
                                                <span className="text-gray-800 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                    
                    <div className="mt-32 flex justify-center">
                        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-black to-transparent" aria-hidden="true"></div>
                    </div>
                    
                    <section className="mt-16 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-black">Why Our Process Works</h2>
                        <p className="text-xl max-w-3xl mx-auto text-black font-medium mb-8">
                            Our process is built on years of experience delivering successful digital solutions across industries. 
                            Each step is designed to minimize risk and maximize value, ensuring your project succeeds.
                        </p>
                        
                        {/* Key Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center">
                                <div className="text-4xl font-black text-black mb-4">250+</div>
                                <p className="text-lg">Successful Projects Delivered</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-black mb-4">92%</div>
                                <p className="text-lg">Client Retention Rate</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-black mb-4">35</div>
                                <p className="text-lg">Industry Awards Won</p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="mt-20 text-center bg-black text-white p-12 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Let's discuss how our proven process can transform your ideas into successful digital solutions.
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            Start Your Project
                        </a>
                    </section>
                </main>
                
                <TextHeroSection />
            </div>
        </>
    );
}