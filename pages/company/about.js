import Head from 'next/head';
import TextHeroSection from '@/components/home/textHero';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutPage() {
    const [isIntersecting, setIsIntersecting] = useState({});
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorText, setCursorText] = useState('');
    const sectionRefs = useRef({});

    useEffect(() => {
        const observers = {};

        Object.keys(sectionRefs.current).forEach(sectionId => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsIntersecting(prev => ({
                        ...prev,
                        [sectionId]: entry.isIntersecting
                    }));
                },
                { threshold: 0.2 }
            );

            if (sectionRefs.current[sectionId]) {
                observer.observe(sectionRefs.current[sectionId]);
                observers[sectionId] = observer;
            }
        });

        return () => {
            Object.values(observers).forEach(observer => observer.disconnect());
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseEnter = (text) => {
        setCursorText(text);
    };

    const handleMouseLeave = () => {
        setCursorText('');
    };

    const registerRef = (id, element) => {
        sectionRefs.current[id] = element;
    };

    const teamMembers = [
        {
            "name": "Krish Khadka",
            "role": "Founder & CEO",
            "specialty": "Strategic Vision",
            "quote": "Great leadership means seeing the future clearly&mdash;and building the path to get there.",
            "linkedin": "https://linkedin.com/in/krishkhadka",
            "email": "krish@foxbeep.com"
        },
        {
            "name": "Srijan Pokhrel",
            "role": "Co-Founder & CTO",
            "specialty": "Software Developer",
            "quote": "Every line of code is a step toward smarter, more intuitive technology.",
            "linkedin": "https://linkedin.com/in/srijanpokhrel",
            "email": "srijan@foxbeep.com"
        },
        {
            "name": "Suwani Baral",
            "role": "Co-Founder and Design Director",
            "specialty": "Video and Production",
            "quote": "Visual storytelling transforms ideas into experiences people remember.",
            "linkedin": "#",
            "email": "suwani@foxbeep.com"
        }
    ];

    const clientLogos = [
        "ACME", "GLOBEX", "INITECH", "STARK", "WAYNE", "HOOLI", "DUNDER", "PIED"
    ];

    const services = [
        {
            title: "Video & Media Production",
            description: "We bring your stories to life through powerful visuals and seamless post-production.",
            capabilities: ["Video Editing", "Motion Graphics", "VFX", "Post-Production"]
        },
        {
            title: "Marketing",
            description: "We craft data-driven campaigns that amplify your brand and drive engagement.",
            capabilities: ["Digital Marketing", "Content Strategy", "SEO & SEM", "Social Media Management"]
        },
        {
            title: "Website & Software Development",
            description: "We build high-performance digital platforms tailored to your business needs.",
            capabilities: ["Website Development", "Custom Software", "Mobile Applications", "API Integration"]
        },
        {
            title: "AI & Machine Learning",
            description: "We develop intelligent systems that learn, adapt, and deliver real-world results.",
            capabilities: ["Machine Learning Models", "Data Processing", "Predictive Analytics", "Natural Language Processing"]
        }
    ];

    const achievements = [
        { metric: "250+", description: "Successful Projects" },
        { metric: "35", description: "Industry Awards" },
        { metric: "12", description: "Global Offices" },
        { metric: "92%", description: "Client Retention" }
    ];

    // SEO Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Foxbeep",
        "url": "https://foxbeep.com",
        "logo": "https://foxbeep.com/logo.png",
        "description": "Leading digital technology company founded in 2015, specializing in software development, AI solutions, video production, and digital marketing. Led by CEO Krish Khadka, CTO Srijan Pokhrel, and Design Director Suwani Baral.",
        "foundingDate": "2015",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressCountry": "US"
        },
        "employee": [
            {
                "@type": "Person",
                "name": "Krish Khadka",
                "jobTitle": "Founder & CEO",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Foxbeep"
                }
            },
            {
                "@type": "Person",
                "name": "Srijan Pokhrel",
                "jobTitle": "Co-Founder & CTO",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Foxbeep"
                }
            },
            {
                "@type": "Person",
                "name": "Suwani Baral",
                "jobTitle": "Co-Founder and Design Director",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Foxbeep"
                }
            }
        ],
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
        "areaServed": "Worldwide",
        "knowsAbout": [
            "Software Development",
            "Web Development",
            "Mobile App Development",
            "Artificial Intelligence",
            "Machine Learning",
            "Video Production",
            "Digital Marketing",
            "UI/UX Design"
        ]
    };

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>About Foxbeep - Meet Our Team | Krish Khadka, Srijan Pokhrel, Suwani Baral</title>
                <meta name="description" content="Learn about Foxbeep's journey since 2015. Meet our leadership team: CEO Krish Khadka, CTO Srijan Pokhrel, and Design Director Suwani Baral. 250+ successful projects, 35 industry awards." />
                <meta name="keywords" content="Foxbeep team, Krish Khadka CEO, Srijan Pokhrel CTO, Suwani Baral designer, about Foxbeep, company history, software development team, digital agency leadership" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="About Foxbeep - Meet Our Expert Team & Leadership" />
                <meta property="og:description" content="Discover Foxbeep's story since 2015. Meet CEO Krish Khadka, CTO Srijan Pokhrel & Design Director Suwani Baral. 250+ projects, 35 awards, global reach." />
                <meta property="og:image" content="https://foxbeep.com/images/about-og-image.png" />
                <meta property="og:url" content="https://foxbeep.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Foxbeep" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Foxbeep - Meet Our Expert Team & Leadership" />
                <meta name="twitter:description" content="Founded in 2015 by Krish Khadka, Srijan Pokhrel & Suwani Baral. 250+ successful projects in software development, AI, and digital solutions." />
                <meta name="twitter:image" content="https://foxbeep.com/images/about-twitter-card.png" />
                
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
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://foxbeep.com/about" />
                
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
                
                {/* Breadcrumb Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
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
                                    "name": "About",
                                    "item": "https://foxbeep.com/about"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="relative bg-white text-black min-h-screen overflow-hidden">
                {/* Custom cursor */}
                <div
                    className="fixed pointer-events-none z-50 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        opacity: cursorText ? 1 : 0
                    }}
                >
                    <div className="text-lg font-bold bg-black text-white px-3 py-1 rounded-full">
                        {cursorText}
                    </div>
                </div>

                {/* Hero section */}
                <header className="relative max-w-7xl mx-auto px-4 pt-24 pb-12">
                    <div className="relative z-10">
                        <h1
                            className="text-8xl font-black tracking-tighter mb-8 leading-none"
                            style={{
                                textShadow: "1px 1px 0px rgba(0,0,0,0.1)",
                                fontKerning: "normal"
                            }}
                        >
                            WE ARE FOXBEEP
                        </h1>

                        <div className="max-w-3xl">
                            <p className="text-3xl font-light mb-6 leading-snug">
                                A team of digital architects building tomorrow&apos;s solutions today.
                            </p>
                            <p className="text-xl mb-12">
                                We blend technological expertise with creative vision to transform ideas into impactful digital experiences that drive real business results.
                            </p>
                        </div>
                    </div>

                    <div className="absolute right-10 top-24 text-[180px] font-black text-gray-50 select-none leading-none z-0" aria-hidden="true">
                        FOXBEEP
                    </div>
                </header>

                {/* About section with split design */}
                <section className="max-w-7xl mx-auto px-4 py-24" aria-labelledby="story-heading">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 mb-12 md:mb-0">
                            <h2 id="story-heading" className="text-5xl font-black mb-8 tracking-tight">OUR STORY</h2>
                            <div className="w-24 h-2 bg-black mb-12" aria-hidden="true"></div>
                        </div>

                        <div className="md:w-2/3 md:pl-12">
                            <p className="text-2xl mb-8">
                                Founded in 2015, FOXBEEP began with a simple mission: create digital solutions that empower businesses to thrive in an increasingly connected world.
                            </p>

                            <p className="text-xl mb-8">
                                What started as a small team of passionate developers in a San Francisco loft has grown into a global technology partner helping companies across industries transform their digital presence and capabilities.
                            </p>

                            <p className="text-xl mb-8">
                                Our journey has been defined by continuous evolution&mdash;embracing new technologies, refining our processes, and expanding our expertise to meet the changing needs of our clients and the market.
                            </p>

                            <p className="text-xl">
                                Today, we blend technical expertise with creative thinking to deliver solutions that are not just functional, but transformative. Our approach combines rigorous methodology with bold innovation, ensuring we build systems that solve today&apos;s challenges while anticipating tomorrow&apos;s needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values section with hover interaction */}
                <section
                    ref={(el) => registerRef('values', el)}
                    className="max-w-7xl mx-auto px-4 py-24"
                    aria-labelledby="values-heading"
                >
                    <h2 id="values-heading" className="text-5xl font-black mb-16 tracking-tight text-center">OUR VALUES</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "INTEGRITY", desc: "We build trust through transparency and honesty in all our interactions, believing that ethical business is good business." },
                            { title: "INNOVATION", desc: "We constantly explore new technologies and approaches to deliver better solutions, embracing calculated risks to drive meaningful progress." },
                            { title: "EXCELLENCE", desc: "We hold ourselves to the highest standards in every line of code and pixel of design, refusing to compromise on quality or performance." },
                            { title: "PARTNERSHIP", desc: "We work as an extension of your team, committed to your long-term success and ensuring our solutions align with your strategic objectives." }
                        ].map((value, index) => (
                            <article
                                key={index}
                                className={`border-t-2 border-black pt-6 transform transition-all duration-700 ${isIntersecting.values ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                                onMouseEnter={() => handleMouseEnter(value.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                                <p className="text-xl">{value.desc}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Team section with dynamic layout */}
                <section
                    ref={(el) => registerRef('team', el)}
                    className="max-w-7xl mx-auto px-4 py-24 bg-gray-50 -mx-4 px-8"
                    aria-labelledby="team-heading"
                >
                    <h2 id="team-heading" className="text-5xl font-black mb-16 tracking-tight">THE BOARD TEAM</h2>

                    <div className="flex flex-wrap -mx-4">
                        {teamMembers.map((member, index) => (
                            <article
                                key={index}
                                className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-16 transform transition-all duration-700 ${isIntersecting.team ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                onMouseEnter={() => handleMouseEnter(member.specialty)}
                                onMouseLeave={handleMouseLeave}
                                itemScope
                                itemType="https://schema.org/Person"
                            >
                                <div className="relative group aspect-w-1 aspect-h-1 bg-gray-900 overflow-hidden rounded-2xl shadow-lg h-96">
                                    <img
                                        src={`/images/teams/${member.name}.jpg`}
                                        alt={`${member.name} - ${member.role} at Foxbeep`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        itemProp="image"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition duration-300" aria-hidden="true"></div>

                                    {/* Social Links - Show on hover */}
                                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                                            aria-label={`${member.name}'s LinkedIn profile`}
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200"
                                            aria-label={`Send email to ${member.name}`}
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </a>
                                    </div>

                                    {/* Text content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-opacity duration-500 opacity-100 group-hover:opacity-100">
                                        <h3 className="text-xl font-semibold" itemProp="name">{member.name}</h3>
                                        <p className="text-sm" itemProp="jobTitle">{member.role}</p>
                                        <p className="text-xs italic mt-1 opacity-90">{member.quote}</p>
                                        
                                        {/* Contact info - appears on hover */}
                                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <div className="flex items-center space-x-4 text-xs">
                                                <a 
                                                    href={member.linkedin} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="hover:text-blue-300 transition-colors duration-200"
                                                >
                                                    LinkedIn
                                                </a>
                                                <span className="text-gray-400">•</span>
                                                <a 
                                                    href={`mailto:${member.email}`}
                                                    className="hover:text-blue-300 transition-colors duration-200"
                                                >
                                                    {member.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Approach section with animated text reveal */}
                <section
                    ref={(el) => registerRef('approach', el)}
                    className="max-w-7xl mx-auto px-4 py-24"
                    aria-labelledby="approach-heading"
                >
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 id="approach-heading" className="text-5xl font-black mb-8 tracking-tight">OUR APPROACH</h2>
                            <div className="w-24 h-2 bg-black mb-12" aria-hidden="true"></div>
                            <p className="text-xl mb-8">
                                We believe that great technology should be both powerful and accessible. Our process combines deep technical expertise with human-centered design principles to create solutions that not only work flawlessly but feel intuitive to use.
                            </p>
                            <p className="text-xl">
                                Every project begins with understanding&mdash;not just requirements, but the people who will use the solution, the business context, and the long-term objectives. This foundation of understanding guides every decision we make throughout the development process.
                            </p>
                        </div>

                        <div className="md:w-1/2 md:pl-12">
                            <div className="text-7xl font-black leading-tight tracking-tighter" aria-label="Our three-step approach">
                                <div className="overflow-hidden">
                                    <span className="block transform transition-transform duration-1000"
                                        style={{ transform: isIntersecting.approach ? 'translateY(0)' : 'translateY(100%)' }}>
                                        THINK.
                                    </span>
                                </div>
                                <div className="overflow-hidden">
                                    <span className="block transform transition-transform duration-1000 delay-300"
                                        style={{ transform: isIntersecting.approach ? 'translateY(0)' : 'translateY(100%)' }}>
                                        BUILD.
                                    </span>
                                </div>
                                <div className="overflow-hidden">
                                    <span className="block transform transition-transform duration-1000 delay-600"
                                        style={{ transform: isIntersecting.approach ? 'translateY(0)' : 'translateY(100%)' }}>
                                        EVOLVE.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section
                    ref={(el) => registerRef('services', el)}
                    className="max-w-7xl mx-auto px-4 py-24 bg-black text-white -mx-4 px-8"
                    aria-labelledby="services-heading"
                >
                    <h2 id="services-heading" className="text-5xl font-black mb-16 tracking-tight">OUR SERVICES</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {services.map((service, index) => (
                            <article
                                key={index}
                                className={`transform transition-all duration-700 ${isIntersecting.services ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                                onMouseEnter={() => handleMouseEnter(service.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                                <div className="w-16 h-1 bg-white mb-6" aria-hidden="true"></div>
                                <p className="text-xl mb-8 text-gray-300">{service.description}</p>
                                <ul className="grid grid-cols-2 gap-2" role="list">
                                    {service.capabilities.map((capability, capIndex) => (
                                        <li key={capIndex} className="text-lg text-gray-300">• {capability}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Achievement & Clients */}
                <section
                    ref={(el) => registerRef('achievements', el)}
                    className="max-w-7xl mx-auto px-4 py-24"
                    aria-labelledby="impact-heading"
                >
                    <div className="mb-24">
                        <h2 id="impact-heading" className="text-5xl font-black mb-16 tracking-tight text-center">OUR IMPACT</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
                            {achievements.map((item, index) => (
                                <div
                                    key={index}
                                    className={`text-center transform transition-all duration-700 ${isIntersecting.achievements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                    role="listitem"
                                >
                                    <div className="text-6xl font-black mb-2">{item.metric}</div>
                                    <div className="text-xl">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h3 className="text-4xl font-black mb-12 tracking-tight text-center">TRUSTED BY INDUSTRY LEADERS</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
                        {clientLogos.map((logo, index) => (
                            <div
                                key={index}
                                className={`aspect-w-3 aspect-h-1 transform transition-all duration-700 ${isIntersecting.achievements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                                role="listitem"
                            >
                                <div className="flex items-center justify-center border border-gray-200 bg-gray-50 h-24">
                                    <span className="text-3xl font-bold text-gray-400" aria-label={`${logo} company logo`}>{logo}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Breakdown */}
                <section
                    ref={(el) => registerRef('process', el)}
                    className="max-w-7xl mx-auto px-4 py-24 bg-gray-50 -mx-4 px-8"
                    aria-labelledby="process-heading"
                >
                    <h2 id="process-heading" className="text-5xl font-black mb-16 tracking-tight">OUR PROCESS</h2>

                    <div className="space-y-24">
                        {[
                            {
                                number: "01",
                                title: "DISCOVER",
                                description: "We begin by deeply understanding your business, users, and objectives through collaborative workshops, research, and strategic analysis.",
                                details: "This foundational phase establishes the strategic direction and success metrics for your project."
                            },
                            {
                                number: "02",
                                title: "DEFINE",
                                description: "We transform insights into clear specifications, user journeys, and technical requirements that guide the entire development process.",
                                details: "A detailed roadmap ensures alignment between business goals and technical implementation."
                            },
                            {
                                number: "03",
                                title: "DESIGN",
                                description: "Our designers create intuitive interfaces and experiences that balance aesthetic appeal with functional clarity and technical feasibility.",
                                details: "Iterative prototyping helps validate concepts before significant resources are invested in development."
                            },
                            {
                                number: "04",
                                title: "DEVELOP",
                                description: "Our engineering team brings designs to life with clean, efficient code and robust architecture built for performance and scalability.",
                                details: "Regular quality assurance testing throughout development ensures a polished final product."
                            },
                            {
                                number: "05",
                                title: "DEPLOY & REFINE",
                                description: "We carefully launch your solution and provide ongoing support, optimization, and enhancements based on real-world feedback.",
                                details: "Analytics and user behavior tracking inform continuous improvements."
                            }
                        ].map((step, index) => (
                            <article
                                key={index}
                                className={`flex flex-col md:flex-row items-start transform transition-all duration-1000 ${isIntersecting.process ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="md:w-1/4 mb-6 md:mb-0">
                                    <div className="text-8xl font-black text-gray-200" aria-hidden="true">{step.number}</div>
                                </div>

                                <div className="md:w-3/4">
                                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-xl mb-4">{step.description}</p>
                                    <p className="text-lg text-gray-600">{step.details}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Signature section */}
                <TextHeroSection />
            </div>
        </>
    );
}