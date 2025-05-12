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
            "quote": "Great leadership means seeing the future clearly&mdash;and building the path to get there."
        },
        {
            "name": "Srijan Pokhrel",
            "role": "CTO",
            "specialty": "Software Developer",
            "quote": "Every line of code is a step toward smarter, more intuitive technology."
        },
        {
            "name": "Suwani Baral",
            "role": "Design Director",
            "specialty": "Video and Production",
            "quote": "Visual storytelling transforms ideas into experiences people remember."
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

    return (
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
            <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-12">
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

                <div className="absolute right-10 top-24 text-[180px] font-black text-gray-50 select-none leading-none z-0">
                    FOXBEEP
                </div>
            </div>

            {/* About section with split design */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-12 md:mb-0">
                        <h2 className="text-5xl font-black mb-8 tracking-tight">OUR STORY</h2>
                        <div className="w-24 h-2 bg-black mb-12"></div>
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
            </div>

            {/* Values section with hover interaction */}
            <div
                ref={(el) => registerRef('values', el)}
                className="max-w-7xl mx-auto px-4 py-24"
            >
                <h2 className="text-5xl font-black mb-16 tracking-tight text-center">OUR VALUES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { title: "INTEGRITY", desc: "We build trust through transparency and honesty in all our interactions, believing that ethical business is good business." },
                        { title: "INNOVATION", desc: "We constantly explore new technologies and approaches to deliver better solutions, embracing calculated risks to drive meaningful progress." },
                        { title: "EXCELLENCE", desc: "We hold ourselves to the highest standards in every line of code and pixel of design, refusing to compromise on quality or performance." },
                        { title: "PARTNERSHIP", desc: "We work as an extension of your team, committed to your long-term success and ensuring our solutions align with your strategic objectives." }
                    ].map((value, index) => (
                        <div
                            key={index}
                            className={`border-t-2 border-black pt-6 transform transition-all duration-700 ${isIntersecting.values ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            onMouseEnter={() => handleMouseEnter(value.title)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                            <p className="text-xl">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team section with dynamic layout */}
            <div
                ref={(el) => registerRef('team', el)}
                className="max-w-7xl mx-auto px-4 py-24 bg-gray-50 -mx-4 px-8"
            >
                <h2 className="text-5xl font-black mb-16 tracking-tight">THE TEAM</h2>

                <div className="flex flex-wrap -mx-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-16 transform transition-all duration-700 ${isIntersecting.team ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            onMouseEnter={() => handleMouseEnter(member.specialty)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative group aspect-w-1 aspect-h-1 bg-gray-900 overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src={`/images/teams/${member.name}.jpg`}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition duration-300"></div>

                                {/* Text content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-opacity duration-500 opacity-100 group-hover:opacity-100">
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-sm">{member.role}</p>
                                    <p className="text-xs italic mt-1">&ldquo;{member.quote}&rdquo;</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Approach section with animated text reveal */}
            <div
                ref={(el) => registerRef('approach', el)}
                className="max-w-7xl mx-auto px-4 py-24"
            >
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className="text-5xl font-black mb-8 tracking-tight">OUR APPROACH</h2>
                        <div className="w-24 h-2 bg-black mb-12"></div>
                        <p className="text-xl mb-8">
                            We believe that great technology should be both powerful and accessible. Our process combines deep technical expertise with human-centered design principles to create solutions that not only work flawlessly but feel intuitive to use.
                        </p>
                        <p className="text-xl">
                            Every project begins with understanding&mdash;not just requirements, but the people who will use the solution, the business context, and the long-term objectives. This foundation of understanding guides every decision we make throughout the development process.
                        </p>
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <div className="text-7xl font-black leading-tight tracking-tighter">
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
            </div>

            {/* NEW SECTION 1: Services Section */}
            <div
                ref={(el) => registerRef('services', el)}
                className="max-w-7xl mx-auto px-4 py-24 bg-black text-white -mx-4 px-8"
            >
                <h2 className="text-5xl font-black mb-16 tracking-tight">OUR SERVICES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-700 ${isIntersecting.services ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            onMouseEnter={() => handleMouseEnter(service.title)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                            <div className="w-16 h-1 bg-white mb-6"></div>
                            <p className="text-xl mb-8 text-gray-300">{service.description}</p>
                            <ul className="grid grid-cols-2 gap-2">
                                {service.capabilities.map((capability, capIndex) => (
                                    <li key={capIndex} className="text-lg text-gray-300">• {capability}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* NEW SECTION 2: Achievement & Clients */}
            <div
                ref={(el) => registerRef('achievements', el)}
                className="max-w-7xl mx-auto px-4 py-24"
            >
                <div className="mb-24">
                    <h2 className="text-5xl font-black mb-16 tracking-tight text-center">OUR IMPACT</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className={`text-center transform transition-all duration-700 ${isIntersecting.achievements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="text-6xl font-black mb-2">{item.metric}</div>
                                <div className="text-xl">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="text-4xl font-black mb-12 tracking-tight text-center">TRUSTED BY INDUSTRY LEADERS</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {clientLogos.map((logo, index) => (
                        <div
                            key={index}
                            className={`aspect-w-3 aspect-h-1 transform transition-all duration-700 ${isIntersecting.achievements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                        >
                            <div className="flex items-center justify-center border border-gray-200 bg-gray-50 h-24">
                                <span className="text-3xl font-bold text-gray-400">{logo}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* NEW SECTION 3: Process Breakdown */}
            <div
                ref={(el) => registerRef('process', el)}
                className="max-w-7xl mx-auto px-4 py-24 bg-gray-50 -mx-4 px-8"
            >
                <h2 className="text-5xl font-black mb-16 tracking-tight">OUR PROCESS</h2>

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
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-start transform transition-all duration-1000 ${isIntersecting.process ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="md:w-1/4 mb-6 md:mb-0">
                                <div className="text-8xl font-black text-gray-200">{step.number}</div>
                            </div>

                            <div className="md:w-3/4">
                                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                                <p className="text-xl mb-4">{step.description}</p>
                                <p className="text-lg text-gray-600">{step.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Signature section */}
            <TextHeroSection />
        </div>
    );
}