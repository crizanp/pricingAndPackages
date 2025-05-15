import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TextHeroSection from '@/components/home/textHero';

export default function WorkPage() {
    const [isIntersecting, setIsIntersecting] = useState({});
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorText, setCursorText] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRefs = useRef({});

    // Categories for filtering
    const categories = [
        { id: 'all', label: 'All Work' },
        { id: 'app', label: 'Mobile Apps' },
        { id: 'website', label: 'Websites' },
        { id: 'wordpress', label: 'WordPress' },
        { id: 'web3', label: 'Web3' },
        { id: 'video', label: 'Video Production' }
    ];

    // Portfolio projects data
    const projects = [
        {
            id: 1,
            title: "Simple Health Facts",
            category: ["website", "wordpress"],
            client: "MediTech Solutions",
            year: "2024",
            thumbnail: "/images/portfolio/simple-health-fact.jpg",
            images: ["/images/portfolio/simple-health-fact.jpg"],
            description: "Here you'll find free articles and infographics in nutrition, exercise, health, fitness, exercise and coaching. We provide you the best tips, information, idea about healthy food and top ways to stay healthy.",
            challenge: "Creating an intuitive interface that could handle complex health data while remaining accessible to users of all ages.",
            solution: "We implemented a customizable dashboard with color-coded metrics and simplified navigation, along with cloud synchronization for seamless data access across devices.",
            technology: ["React Native", "Firebase", "HealthKit API", "Google Fit API"]
        },
        {
            id: 2,
            title: "Worth Your Website",
            category: "website",
            client: "CityFoods Inc.",
            year: "2015",
            thumbnail: "/images/portfolio/worth-your-website.jpg",
            images: ["/images/portfolio/worth-your-website.jpg"],
            description: "WorthYourWebsite is a web service for Website Owners, Webmasters, and General Internet Users to retrieve information related to Domain Name and Website. It's the most used tool that provides various statistical reports for any website like Estimated worth of Domain Name and Website Valuation, Search Engine Reports, Traffic Reports, Social Engagement, Safety, Host Information, Domain WHOIS, Page Speed, and much more. Simply type your Domain Name above for all related information.",
            challenge: "Building a scalable system that could handle thousands of concurrent orders while providing accurate delivery estimates.",
            solution: "We developed a microservices architecture with load balancing and implemented a machine learning algorithm to predict delivery times based on traffic and order volume.",
            technology: ["Next.js", "Node.js", "MongoDB", "Stripe API", "Google Maps API"]
        },
        {
            id: 3,
            title: "NXTech SEO Tools",
            category: "website",
            client: "EcoStyle Collective",
            year: "2023",
            thumbnail: "/images/portfolio/nxtech-seo-tools.jpg",
            images: ["/images/portfolio/nxtech-seo-tools.jpg", "/images/portfolio/nxtech-seo-tools.jpg"],
            description: "Nxtech SEO Tools - is a bundled collection of best SEO tools websites. We offer all for free of charge, Such as XML Sitemap Generator, Plagiarism Checker etc.",
            challenge: "Creating a visually stunning site that maintained fast loading times despite high-resolution fashion photography.",
            solution: "We implemented advanced image optimization, lazy loading, and a custom caching strategy to ensure blazing-fast performance without sacrificing visual quality.",
            technology: ["WordPress", "Custom Theme Development", "WooCommerce", "Advanced Custom Fields"]
        },
        {
            id: 4,
            title: "NDS Nepal",
            category: "website",
            client: "Blockchain Ventures",
            year: "2020",
            thumbnail: "/images/portfolio/nds-nepal.jpg",
            images: ["/images/portfolio/nds-nepal.jpg"],
            description: "A decentralized marketplace for buying, selling, and trading NFTs with multi-chain support and fractional ownership capabilities.",
            challenge: "Creating an accessible platform for both crypto newcomers and experienced collectors while ensuring robust security measures.",
            solution: "We developed an intuitive UI with educational onboarding, implemented smart contract auditing, and created a hybrid storage solution for optimal performance.",
            technology: ["Ethereum", "Solidity", "IPFS", "React", "Web3.js", "MetaMask Integration"]
        },
        {
            id: 5,
            title: "Mountain Explorer Documentary",
            category: "video",
            client: "Adventure Films",
            year: "2023",
            thumbnail: "/images/portfolio/pipe.jpg",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            description: "A breathtaking documentary series exploring remote mountain ranges and the communities that inhabit them.",
            challenge: "Creating a cohesive narrative from footage shot across multiple expeditions in challenging environments.",
            solution: "Our post-production team developed a custom color grading workflow and implemented advanced stabilization techniques to enhance footage captured in extreme conditions.",
            technology: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Drone Cinematography"]
        },
        {
            id: 6,
            title: "French House",
            category: "wordpress",
            client: "ProsperWell Financial",
            year: "2023",
            thumbnail: "/images/portfolio/french-house.jpg",
            images: ["/images/portfolio/app-2-detail.jpg", "/images/portfolio/app-2-detail2.jpg"],
            description: "A personal finance application that helps users budget, save, and invest with personalized recommendations and financial education.",
            challenge: "Handling sensitive financial data while creating an engaging user experience that encourages healthy financial habits.",
            solution: "We implemented bank-level encryption, developed interactive financial planning tools, and created a gamified approach to savings goals.",
            technology: ["Flutter", "Plaid API", "AWS", "Machine Learning for Personalization"]
        },
        {
            id: 7,
            title: "Global Logistics Dashboard",
            category: "website",
            client: "InternationalFreight Corp",
            year: "2024",
            thumbnail: "/images/portfolio/web-2.jpg",
            images: ["/images/portfolio/web-2-detail.jpg", "/images/portfolio/web-2-detail2.jpg"],
            description: "A comprehensive logistics management platform with real-time tracking, automated customs documentation, and predictive analytics.",
            challenge: "Integrating with dozens of international shipping carriers and customs systems while maintaining a unified user experience.",
            solution: "We created a standardized API adapter layer and implemented a modular architecture that allows for easy addition of new carriers and compliance with regional regulations.",
            technology: ["Angular", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "Elasticsearch"]
        },
        {
            id: 8,
            title: "Luxury Real Estate Portal",
            category: "wordpress",
            client: "Prestige Properties",
            year: "2023",
            thumbnail: "/images/portfolio/wp-2.jpg",
            images: ["/images/portfolio/wp-2-detail.jpg", "/images/portfolio/wp-2-detail2.jpg"],
            description: "A high-end real estate website featuring virtual tours, interactive property maps, and personalized client portals.",
            challenge: "Creating an exclusive, luxury experience while making property information easily accessible and searchable.",
            solution: "We developed a custom WordPress theme with advanced property filtering, implemented 360° virtual tours, and created a sophisticated CRM integration for agent-client communications.",
            technology: ["WordPress", "Custom Plugin Development", "Matterport Integration", "Salesforce CRM Integration"]
        },
        {
            id: 9,
            title: "DecentralizedDAO Governance",
            category: "web3",
            client: "Community Chain Collective",
            year: "2024",
            thumbnail: "/images/portfolio/web3-2.jpg",
            images: ["/images/portfolio/web3-2-detail.jpg", "/images/portfolio/web3-2-detail2.jpg"],
            description: "A decentralized autonomous organization platform with proposal voting, treasury management, and governance token distribution.",
            challenge: "Building a system that maintains true decentralization while providing an accessible interface for non-technical community members.",
            solution: "We implemented a layered approach with an intuitive frontend masking complex blockchain interactions, along with comprehensive documentation and governance visualizations.",
            technology: ["Polygon", "TheGraph", "React", "Hardhat", "Snapshot.js", "IPFS"]
        },
        {
            id: 10,
            title: "Unbelievable! Top 5 Mind-Blowing AI Tools of 2024 That Will Blow Your Mind Away!",
            category: "video",
            client: "TechInnovate",
            year: "2023",
            thumbnail: "/images/portfolio/video-2.jpg",
            videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "A series of promotional videos for a revolutionary tech product launch, including teasers, feature highlights, and user testimonials.",
            challenge: "Creating compelling visual content that explains complex technology to a mainstream audience within a tight launch timeline.",
            solution: "Our team developed a distinctive visual language with 3D animations and motion graphics to simplify technical concepts, and implemented a modular production approach to enable rapid iteration.",
            technology: ["Adobe Creative Suite", "Cinema 4D", "RED Camera", "Motion Capture"]
        },
        {
            id: 11,
            title: "Community Marketplace App",
            category: "app",
            client: "LocalConnect",
            year: "2024",
            thumbnail: "/images/portfolio/app-3.jpg",
            images: ["/images/portfolio/app-3-detail.jpg", "/images/portfolio/app-3-detail2.jpg"],
            description: "A hyperlocal marketplace app connecting neighbors for buying, selling, and trading goods and services within their community.",
            challenge: "Building trust and safety features while maintaining a frictionless user experience for quick local transactions.",
            solution: "We implemented a verified user system, in-app messaging with content moderation, and geofencing to ensure truly local connections.",
            technology: ["React Native", "Firebase", "Google Maps API", "Stripe Connect"]
        },
        {
            id: 12,
            title: "Interactive Music Festival Experience",
            category: "website",
            client: "Harmony Productions",
            year: "2023",
            thumbnail: "/images/portfolio/web-3.jpg",
            images: ["/images/portfolio/web-3-detail.jpg", "/images/portfolio/web-3-detail2.jpg"],
            description: "A dynamic festival website with personalized schedules, augmented reality venue maps, and live streaming integration.",
            challenge: "Handling massive traffic spikes during ticket sales and festival dates while providing real-time updates to attendees.",
            solution: "We developed a progressive web app with offline capabilities, implemented serverless architecture for unlimited scaling, and created a custom content delivery network for media assets.",
            technology: ["Vue.js", "GraphQL", "AWS Lambda", "WebSockets", "AR.js", "PWA"]
        }
    ];

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

    // Normalize category format and handle filtering properly
    const normalizeCategory = (category) => {
        return Array.isArray(category) ? category : [category];
    };

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => {
            const projectCategories = normalizeCategory(project.category);
            return projectCategories.includes(activeCategory);
        });

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Helper function to get category label
    const getCategoryLabels = (project) => {
        const projectCategories = normalizeCategory(project.category);
        return projectCategories
            .map(catId => categories.find(cat => cat.id.toLowerCase() === catId.toLowerCase())?.label || catId)
            .join(', ');
    };

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
                        OUR WORK
                    </h1>

                    <div className="max-w-3xl">
                        <p className="text-3xl font-light mb-6 leading-snug">
                            Exceptional projects for forward-thinking clients.
                        </p>
                        <p className="text-xl mb-12">
                            Explore our portfolio of digital solutions across mobile apps, websites, WordPress, Web3, and video production that drive real business results.
                        </p>
                    </div>
                </div>

                <div className="absolute right-10 top-24 text-[180px] font-black text-gray-50 select-none leading-none z-0">
                    PORTFOLIO
                </div>
            </div>

            {/* Filter categories */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 font-bold transition-all duration-300 text-lg ${activeCategory === category.id
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            onMouseEnter={() => handleMouseEnter(category.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Portfolio grid */}
            <div
                ref={(el) => registerRef('portfolio', el)}
                className="max-w-7xl mx-auto px-4 py-16"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`transform transition-all duration-700 ${isIntersecting.portfolio ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => openModal(project)}
                            onMouseEnter={() => handleMouseEnter('View Project')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="group relative overflow-hidden bg-gray-100 cursor-pointer">
                                {/* Project thumbnail */}
                                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                        {project.thumbnail && (
                                            <img
                                                src={project.thumbnail}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}
                                        {!project.thumbnail && (
                                            <span>{project.title} Thumbnail</span>
                                        )}
                                    </div>
                                </div>

                                {/* Overlay with project info */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="text-white text-center p-4">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm uppercase tracking-wider">{getCategoryLabels(project)}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project info below thumbnail */}
                            <div className="mt-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-600">{project.client} • {project.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats section */}
            <div
                ref={(el) => registerRef('stats', el)}
                className="max-w-7xl mx-auto px-4 py-24 bg-black text-white -mx-4 px-8"
            >
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-6 tracking-tight">THE NUMBERS</h2>
                    <p className="text-xl max-w-3xl mx-auto">Our commitment to excellence has led to measurable success across multiple industries and platforms.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: "150+", label: "Projects Delivered" },
                        { value: "42M+", label: "App Downloads" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "28", label: "Industry Awards" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center transform transition-all duration-700 ${isIntersecting.stats ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="text-6xl font-black mb-2">{stat.value}</div>
                            <div className="text-xl">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Client testimonials */}
            <div
                ref={(el) => registerRef('testimonials', el)}
                className="max-w-7xl mx-auto px-4 py-24"
            >
                <h2 className="text-5xl font-black mb-16 tracking-tight text-center">CLIENT STORIES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            quote: "The team at Foxbeep transformed our business with their mobile app development. The user engagement metrics have exceeded our expectations by 200%.",
                            client: "Sarah Johnson",
                            company: "MediTech Solutions",
                            image: "/images/clients/client1.jpg"
                        },
                        {
                            quote: "Their Web3 expertise helped us pioneer a revolutionary platform in our industry. The technical challenges they solved seemed impossible to others.",
                            client: "Michael Chen",
                            company: "Blockchain Ventures",
                            image: "/images/clients/client2.jpg"
                        },
                        {
                            quote: "The WordPress site they built for us not only looks stunning but has increased our conversion rate by 45%. Their attention to detail is unmatched.",
                            client: "Elena Rodriguez",
                            company: "EcoStyle Collective",
                            image: "/images/clients/client3.jpg"
                        },
                        {
                            quote: "Our product launch video campaign created by Foxbeep generated over 2 million views and directly contributed to our most successful product release ever.",
                            client: "James Wilson",
                            company: "TechInnovate",
                            image: "/images/clients/client4.jpg"
                        }
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 p-8 transform transition-all duration-700 ${isIntersecting.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex flex-col h-full">
                                <div className="text-4xl font-serif mb-6">"</div>
                                <p className="text-xl mb-8 flex-grow">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
                                        {testimonial.image && (
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.client}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.client}</h4>
                                        <p className="text-gray-600">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div
                ref={(el) => registerRef('cta', el)}
                className="max-w-7xl mx-auto px-4 py-24 bg-gray-50 -mx-4 px-8"
            >
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-5xl font-black mb-8 tracking-tight">READY TO BUILD SOMETHING AMAZING?</h2>
                    <p className="text-xl mb-12">
                        Let's collaborate to create digital experiences that elevate your brand, engage your audience, and drive business growth.
                    </p>
                    <button
                        className="px-8 py-4 bg-black text-white text-xl font-bold transition-all duration-300 hover:bg-opacity-80"
                        onMouseEnter={() => handleMouseEnter('Get Started')}
                        onMouseLeave={handleMouseLeave}
                    >
                        START A PROJECT
                    </button>
                </div>
            </div>

            {/* Project Detail Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-80"
                        onClick={closeModal}
                    ></div>

                    <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white p-8 mx-4">
                        <button
                            className="absolute top-4 right-4 text-4xl leading-none"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Image/Video Section */}
                            <div>
                                {selectedProject.category === 'video' || (Array.isArray(selectedProject.category) && selectedProject.category.includes('video')) ? (
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                                        <a
                                            href={selectedProject.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col items-center justify-center w-full h-full group"
                                        >
                                            {selectedProject.thumbnail && (
                                                <div className="relative w-full h-full">
                                                    <img
                                                        src={selectedProject.thumbnail}
                                                        alt={selectedProject.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                                                        <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <span className="mt-4 text-black font-medium">Watch on YouTube</span>
                                        </a>
                                    </div>
                                ) : (
                                    <div className="bg-gray-100">
                                        {selectedProject.thumbnail && (
                                            <img
                                                src={selectedProject.thumbnail}
                                                alt={selectedProject.title}
                                                className="w-full h-auto"
                                            />
                                        )}

                                        {selectedProject.images && selectedProject.images.length > 0 && (
                                            <div className="grid grid-cols-2 gap-4 mt-4">
                                                {selectedProject.images.map((image, index) => (
                                                    <div key={index} className="aspect-w-16 aspect-h-9 bg-gray-200">
                                                        <img
                                                            src={image}
                                                            alt={`${selectedProject.title} detail ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Project Info Section */}
                            <div>
                                <h2 className="text-4xl font-black mb-4">{selectedProject.title}</h2>

                                <div className="mb-6">
                                    <p className="text-xl font-semibold">{selectedProject.client}</p>
                                    <p className="text-gray-600">
                                        {getCategoryLabels(selectedProject)} • {selectedProject.year}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-3">Overview</h3>
                                    <p className="text-lg">{selectedProject.description}</p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-3">Challenge</h3>
                                    <p className="text-lg">{selectedProject.challenge}</p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-3">Solution</h3>
                                    <p className="text-lg">{selectedProject.solution}</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technology.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 px-3 py-1 text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Signature section */}
            <TextHeroSection />
        </div>
    );
}