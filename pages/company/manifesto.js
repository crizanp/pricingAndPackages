import Head from 'next/head';
import TextHeroSection from '@/components/home/textHero';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CompanyManifesto() {
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

    const manifestoBeliefs = [
        {
            number: "01",
            title: "PURPOSE OVER PROFIT",
            icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
            description: "We believe business should be a force for good, driving positive impact alongside financial success.",
            details: "Every project we undertake must serve a greater purpose beyond commercial gains.",
            expandedText: "Our decisions are guided by long-term value creation rather than short-term gains. We prioritize projects that solve meaningful problems and contribute positively to society, recognizing that sustainable businesses create both economic and social returns. This principle influences our client selection, project approach, and measure of success.",
            keyPoints: [
                "Meaningful impact measurement",
                "Value-aligned partnerships",
                "Sustainable business practices",
                "Long-term relationship focus"
            ]
        },
        {
            number: "02",
            title: "HUMAN-CENTERED DESIGN",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
            description: "Technology should serve humanity, not the other way around. We design solutions that enhance human potential.",
            details: "Empathy and understanding drive our approach to creating digital experiences.",
            expandedText: "We place humans at the center of our design process, deeply understanding their needs, contexts, and aspirations before developing solutions. Our technology decisions are made with careful consideration of their human impact, aiming to augment human capabilities while respecting autonomy and wellbeing. We reject technological solutionism in favor of thoughtful application.",
            keyPoints: [
                "Inclusive design principles",
                "Ethical technology use",
                "Accessibility as standard",
                "Empathetic research methods"
            ]
        },
        {
            number: "03",
            title: "RADICAL TRANSPARENCY",
            icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            description: "We commit to honest, open communication in all aspects of our work, even when uncomfortable.",
            details: "Transparency builds trust and leads to better outcomes for all stakeholders.",
            expandedText: "We believe in clear, direct communication that acknowledges both successes and challenges. Our clients receive honest assessments of project status, including potential risks and limitations. Internally, we foster a culture where feedback flows freely and team members speak truth to power. This transparency extends to our business practices, pricing models, and decision-making processes.",
            keyPoints: [
                "Open communication protocols",
                "Clear project visibility",
                "Honest success metrics",
                "Shared learning from failures"
            ]
        },
        {
            number: "04",
            title: "CONTINUOUS EVOLUTION",
            icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
            description: "We embrace change, constantly questioning assumptions and refining our approaches to stay ahead.",
            details: "Stagnation is the enemy of innovation and relevance in rapidly shifting landscapes.",
            expandedText: "Our industry evolves at lightning speed, and so must we. We dedicate time and resources to continuous learning, experimentation, and adaptation. This philosophy applies to our technical skills, business processes, and strategic thinking. We challenge established patterns, including our own, to discover better ways of working and creating value for our clients and users.",
            keyPoints: [
                "Dedicated innovation time",
                "Regular knowledge sharing",
                "Experimentation culture",
                "Adaptive methodology"
            ]
        },
        {
            number: "05",
            title: "COLLECTIVE WISDOM",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            description: "The best solutions emerge from diverse perspectives working together toward shared goals.",
            details: "We actively cultivate diversity of thought, background, and experience.",
            expandedText: "We recognize that breakthrough ideas rarely come from homogeneous thinking. Our teams bring together different disciplines, backgrounds, and viewpoints to create richer solutions. We practice inclusive collaboration that values every voice and creates space for divergent thinking. This diversity strengthens our problem-solving capabilities and helps us create more universal and adaptable solutions.",
            keyPoints: [
                "Cross-disciplinary collaboration",
                "Diverse team composition",
                "Inclusive decision making",
                "Client co-creation processes"
            ]
        }
    ];

    // SEO Structured Data - Organization
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Foxbeep",
        "url": "https://foxbeep.com",
        "logo": "https://foxbeep.com/logo.jpg",
        "description": "Digital solutions company driven by purpose, human-centered design, transparency, continuous evolution, and collective wisdom.",
        "foundingLocation": "San Francisco, CA",
        "knowsAbout": [
            "Purpose-driven business",
            "Human-centered design",
            "Radical transparency",
            "Continuous innovation",
            "Collaborative solutions"
        ],
        "values": manifestoBeliefs.map(belief => belief.title),
        "sameAs": [
            "https://linkedin.com/company/foxbeep",
            "https://twitter.com/foxbeep"
        ]
    };

    // SEO Structured Data - WebPage
    const webPageStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Company Manifesto - Our Core Beliefs & Values | Foxbeep",
        "description": "Discover Foxbeep's manifesto: 5 core beliefs that drive everything we do. Purpose over profit, human-centered design, radical transparency, continuous evolution, and collective wisdom.",
        "url": "https://foxbeep.com/manifesto",
        "mainEntity": {
            "@type": "Article",
            "headline": "Our Manifesto: 5 Core Beliefs That Drive Everything We Do",
            "description": "The fundamental principles and values that guide Foxbeep's approach to business, technology, and human relationships.",
            "author": {
                "@type": "Organization",
                "name": "Foxbeep",
                "url": "https://foxbeep.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Foxbeep",
                "url": "https://foxbeep.com",
                "logo": "https://foxbeep.com/logo.jpg"
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-12-01",
            "articleSection": "Company Culture",
            "keywords": "company manifesto, core values, business philosophy, purpose-driven business, human-centered design, transparency, innovation, collaboration"
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
                    "name": "About",
                    "item": "https://foxbeep.com/about"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Manifesto",
                    "item": "https://foxbeep.com/manifesto"
                }
            ]
        }
    };

    // FAQ Structured Data
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does 'Purpose Over Profit' mean for Foxbeep?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Purpose Over Profit means we prioritize projects that solve meaningful problems and contribute positively to society. Our decisions are guided by long-term value creation rather than short-term gains, ensuring sustainable business practices and value-aligned partnerships."
                }
            },
            {
                "@type": "Question",
                "name": "How does Foxbeep implement human-centered design?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We place humans at the center of our design process by deeply understanding user needs, contexts, and aspirations before developing solutions. We follow inclusive design principles, prioritize accessibility, and use empathetic research methods to create technology that serves humanity."
                }
            },
            {
                "@type": "Question",
                "name": "What is radical transparency in business practice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Radical transparency means honest, open communication in all aspects of our work. We provide clear project visibility, honest success metrics, and share learning from failures. This transparency extends to our business practices, pricing models, and decision-making processes."
                }
            },
            {
                "@type": "Question",
                "name": "How does Foxbeep approach continuous evolution?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We dedicate time and resources to continuous learning, experimentation, and adaptation. This includes dedicated innovation time, regular knowledge sharing, fostering an experimentation culture, and maintaining adaptive methodology across all our processes."
                }
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Company Manifesto - Our Core Beliefs & Values | Foxbeep</title>
                <meta name="title" content="Company Manifesto - Our Core Beliefs & Values | Foxbeep" />
                <meta name="description" content="Discover Foxbeep's manifesto: 5 core beliefs that drive everything we do. Purpose over profit, human-centered design, radical transparency, continuous evolution, and collective wisdom guiding our digital solutions." />
                <meta name="keywords" content="company manifesto, core values, business philosophy, purpose-driven business, human-centered design, radical transparency, continuous evolution, collective wisdom, digital solutions, Foxbeep values" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://foxbeep.com/manifesto" />
                <meta property="og:title" content="Our Manifesto - 5 Core Beliefs That Drive Everything We Do | Foxbeep" />
                <meta property="og:description" content="Explore the fundamental principles that guide Foxbeep: Purpose over profit, human-centered design, radical transparency, continuous evolution, and collective wisdom." />
                <meta property="og:image" content="https://foxbeep.com/images/manifesto-og-image.png" />
                <meta property="og:site_name" content="Foxbeep" />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://foxbeep.com/manifesto" />
                <meta property="twitter:title" content="Our Manifesto - 5 Core Beliefs That Drive Everything We Do" />
                <meta property="twitter:description" content="The fundamental principles behind our approach to business, technology, and human relationships. Purpose-driven, transparent, and human-centered." />
                <meta property="twitter:image" content="https://foxbeep.com/images/manifesto-twitter-card.png" />
                <meta property="twitter:creator" content="@foxbeep" />
                <meta property="twitter:site" content="@foxbeep" />
                
                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <meta name="author" content="Foxbeep Team" />
                <meta name="revisit-after" content="7 days" />
                <meta name="rating" content="General" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="San Francisco" />
                <meta name="geo.position" content="37.7749;-122.4194" />
                <meta name="ICBM" content="37.7749, -122.4194" />
                
                {/* Content Classification */}
                <meta name="topic" content="Company Values and Philosophy" />
                <meta name="category" content="Business Culture" />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="audience" content="Business Professionals, Potential Clients, Partners" />
                
                {/* Article-specific Tags */}
                <meta name="article:author" content="Foxbeep Team" />
                <meta name="article:publisher" content="https://foxbeep.com" />
                <meta name="article:published_time" content="2024-01-15T00:00:00Z" />
                <meta name="article:modified_time" content="2024-12-01T00:00:00Z" />
                <meta name="article:section" content="Company Culture" />
                <meta name="article:tag" content="Manifesto, Values, Philosophy, Purpose, Design, Transparency, Innovation, Collaboration" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://foxbeep.com/manifesto" />
                
                {/* Alternative Languages */}
                <link rel="alternate" hrefLang="en" href="https://foxbeep.com/manifesto" />
                <link rel="alternate" hrefLang="x-default" href="https://foxbeep.com/manifesto" />
                
                {/* Favicon and Icons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
                />
                
                {/* Performance Optimizations */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//www.google-analytics.com" />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="preload" href="/fonts/primary-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                
                {/* Additional Performance Hints */}
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />
            </Head>

            <div className="bg-white min-h-screen">
                {/* Breadcrumb Navigation */}
                <nav className="max-w-7xl mx-auto px-4 py-4" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <Link href="/" className="text-gray-500 hover:text-black transition-colors" itemProp="item">
                                <span itemProp="name">Home</span>
                            </Link>
                            <meta itemProp="position" content="1" />
                        </li>
                        <li className="text-gray-400" aria-hidden="true">/</li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="/about" className="text-gray-500 hover:text-black transition-colors" itemProp="item">
                                <span itemProp="name">About</span>
                            </a>
                            <meta itemProp="position" content="2" />
                        </li>
                        <li className="text-gray-400" aria-hidden="true">/</li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span className="text-black font-medium" itemProp="name">Manifesto</span>
                            <meta itemProp="position" content="3" />
                        </li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <header className="w-full bg-black py-28 px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-7xl font-black mb-8 tracking-tight text-white">
                            OUR MANIFESTO
                        </h1>
                        <p className="text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
                            These are the core beliefs that drive everything we do. 
                            Not just words on a wall, but principles we live by every day.
                        </p>
                    </div>
                </header>

                <main 
                    ref={(el) => registerRef('manifesto', el)}
                    className="max-w-7xl mx-auto py-24 px-4"
                    itemScope
                    itemType="https://schema.org/Article"
                >
                    {/* Hidden structured data elements */}
                    <div style={{ display: 'none' }}>
                        <h2 itemProp="headline">Our Manifesto: 5 Core Beliefs That Drive Everything We Do</h2>
                        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
                            <span itemProp="name">Foxbeep</span>
                        </div>
                        <time itemProp="datePublished" dateTime="2024-01-15">January 15, 2024</time>
                        <time itemProp="dateModified" dateTime="2024-12-01">December 1, 2024</time>
                    </div>

                    <section className="space-y-32" aria-label="Our core beliefs">
                        {manifestoBeliefs.map((belief, index) => (
                            <article
                                key={index}
                                className={`flex flex-col md:flex-row items-start transform transition-all duration-1000 ${
                                    isIntersecting.manifesto ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                                itemScope
                                itemType="https://schema.org/DefinedTerm"
                            >
                                <div className="md:w-1/3 mb-6 md:mb-0 relative">
                                    <div className="absolute top-8 left-4 z-10">
                                        <div className="flex items-center">
                                            <svg 
                                                className="w-8 h-8 mr-3 text-black" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={belief.icon}></path>
                                            </svg>
                                            <h2 className="text-3xl font-bold text-black" itemProp="name">
                                                {belief.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-2/3 md:pl-8">
                                    <p className="text-xl mb-6 font-medium leading-relaxed text-black" itemProp="description">
                                        {belief.description}
                                    </p>

                                    <div className="mb-6 p-4 bg-gray-100">
                                        <p className="text-base text-gray-800 italic">
                                            {belief.details}
                                        </p>
                                    </div>

                                    <div className="text-lg mb-6 text-gray-800" itemProp="additionalProperty">
                                        {belief.expandedText}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                        {belief.keyPoints.map((point, i) => (
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
                        <h2 className="text-2xl font-bold mb-6 text-black">
                            TURNING BELIEFS INTO ACTION
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto text-black mb-8">
                            These principles aren&apos;t aspirational—they&apos;re operational. They guide our daily decisions, 
                            shape our processes, and define how we measure success. When you work with us, you&apos;ll 
                            experience the difference these beliefs make.
                        </p>

                        {/* Key Statistics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-8">
                            <div className="text-center">
                                <div className="text-4xl font-black text-black mb-2">100%</div>
                                <p className="text-lg text-gray-700">Purpose-Driven Projects</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-black mb-2">95%</div>
                                <p className="text-lg text-gray-700">Client Satisfaction Rate</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-black mb-2">24/7</div>
                                <p className="text-lg text-gray-700">Transparent Communication</p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link 
                                href="/work" 
                                className="px-8 py-4 bg-black text-white font-medium text-lg rounded hover:bg-gray-800 transition-colors duration-200 inline-block"
                                aria-label="View our work and see our manifesto in action"
                            >
                                See Our Work
                            </Link>
                        </div>
                    </section>
                </main>

                <TextHeroSection />
            </div>
        </>
    );
}