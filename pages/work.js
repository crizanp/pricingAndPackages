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
            client: "EcoStyle Collective",
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
            client: "NXtech Solution",
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
            client: "Nepal Digital Services",
            year: "2020",
            thumbnail: "/images/portfolio/nds-nepal.jpg",
            images: ["/images/portfolio/nds-nepal.jpg"],
            description: "A digital services platform providing marketing, brand boosting, SEO, and online visibility solutions tailored for Nepalese businesses and individuals.",
            challenge: "Building a user-friendly platform that clearly communicates a wide range of services while establishing credibility and trust in a competitive market.",
            solution: "We designed a sleek, modern website with clear service segmentation, strong branding, and lead-generation funnels. The site includes integrated contact forms, social proof elements, and service-based navigation for intuitive exploration.",
            technology: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "SEO Optimization", "Google Analytics"]
        }
        ,
        {
            id: 5,
            title: "Explanation Video Editing",
            category: "video",
            client: "Techno Wani",
            year: "2023",
            thumbnail: "/images/portfolio/techno-wani-ai-tools.png",
            videoUrl: "https://www.youtube.com/watch?v=apjHHIND6OM",
            videoEmbed: "https://www.youtube.com/embed/apjHHIND6OM",
            description: "An educational YouTube series that simplifies AI tools, demonstrating how to use them effectively for content creation, automation, and productivity.",
            challenge: "Delivering complex AI concepts in a visually engaging and easy-to-understand format for a general audience.",
            solution: "We implemented dynamic motion graphics, concise scripting, and clean editing techniques to make technical topics accessible and retain viewer attention.",
            technology: ["Adobe Premiere Pro", "After Effects", "Descript", "ChatGPT", "Runway ML", "Midjourney"]
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

    // Helper function to check if project is video
    const isVideoProject = (project) => {
        const projectCategories = normalizeCategory(project.category);
        return projectCategories.includes('video');
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
                            onMouseEnter={() => handleMouseEnter(isVideoProject(project) ? 'Watch Video' : 'View Project')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="group relative overflow-hidden bg-gray-100 cursor-pointer">
                                {/* Project thumbnail */}
                                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 relative">
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

                                        {/* Video Play Button Overlay */}
                                        {isVideoProject(project) && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-red-600 bg-opacity-90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-8 w-8 text-white ml-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Overlay with project info */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="text-white text-center p-4">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm uppercase tracking-wider">{getCategoryLabels(project)}</p>
                                        {isVideoProject(project) && (
                                            <p className="text-sm mt-2 opacity-80">Click to watch</p>
                                        )}
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

            {/* Project Detail Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-80"
                        onClick={closeModal}
                    ></div>

                    <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white p-8 mx-4">
                        <button
                            className="absolute top-4 right-4 text-4xl leading-none z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Image/Video Section */}
                            <div>
                                {isVideoProject(selectedProject) ? (
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                                        {selectedProject.videoEmbed ? (
                                            <iframe
                                                src={selectedProject.videoEmbed}
                                                title={selectedProject.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                                style={{ aspectRatio: '16/9' }}
                                            ></iframe>
                                        ) : (
                                            // Fallback for videos without embed URL
                                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                <a
                                                    href={selectedProject.videoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex flex-col items-center justify-center group"
                                                >
                                                    {selectedProject.thumbnail && (
                                                        <div className="relative">
                                                            <img
                                                                src={selectedProject.thumbnail}
                                                                alt={selectedProject.title}
                                                                className="w-full h-auto max-h-64 object-cover"
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
                                        )}
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