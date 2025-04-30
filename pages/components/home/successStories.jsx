import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink, ChevronRight } from 'lucide-react';

export default function SuccessStories() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [animateSection, setAnimateSection] = useState(false);

    // Animation on scroll
    useEffect(() => {
        const handleScroll = () => {
            setAnimateSection(true);
        };
        
        window.addEventListener('scroll', handleScroll);
        // Trigger animation after component mounts
        setTimeout(() => setAnimateSection(true), 500);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const caseStudies = [
        {
            id: 1,
            logo: "https://m.media-amazon.com/images/I/913Be2GlZQL.png",
            title: "Interview Preparation App",
            description: "This app provides a wide range of job interview questions for both freshers and experienced job seekers.",
            image: "https://bohlerengineering.com/wp-content/uploads/2019/05/The-Industry-Working-740x420-1.jpg",
            stats: "4.8/5 user satisfaction"
        },
        {
            id: 2,
            logo: "https://worthyourwebsite.com/core/img/v2.png",
            title: "WorthYourWebsite - Domain Insights",
            description: "A web tool for website owners and internet users to retrieve domain name details, stats, and SEO insights.",
            image: "https://cdn-proxy.slickplan.com/wp-content/uploads/2024/07/AdobeStock_251279381-1.jpeg",
            stats: "10K+ active users"
        },
        {
            id: 3,
            logo: "https://workineu.co/wp-content/uploads/2022/10/WorkinEU-1-1.png",
            title: "WorkinEU - Jobs in Europe",
            description: "A Dubai-based company helping job seekers find career opportunities across Europe with ease and trust.",
            image: "https://ejp-eurad.eu/sites/default/files/styles/576x432/public/2022-04/eurad-implementation-compress_190422.jpg?itok=KmMjUoyU",
            stats: "1,200+ successful placements"
        },
        {
            id: 4,
            logo: "/api/placeholder/120/60",
            title: "Nepmate - Dating & Hookups",
            description: "A free dating app offering features for both casual hookups and serious relationships with a fun experience.",
            image: "https://ighdigital.ae/wp-content/uploads/2024/01/epmate.png",
            stats: "500K+ matches made"
        }
    ];
    
    return (
        <div className="w-full bg-white py-16 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 transition-all duration-1000 ${animateSection ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight leading-tight">
                            Success Stories 
                            <span className="block text-lg md:text-xl font-normal text-gray-600 mt-4">
                                Real results. Real impact.
                            </span>
                        </h2>
                    </div>
                    <a
                        href="/case-studies"
                        className="group flex items-center text-xl font-medium text-black hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-1"
                    >
                        Explore all case studies
                        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
                    <div className="space-y-16 md:space-y-32">
                        {caseStudies.filter((_, index) => index % 2 === 0).map((study, idx) => (
                            <div
                                key={study.id}
                                className={`group relative overflow-hidden transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                                style={{ transitionDelay: `${idx * 200}ms` }}
                                onMouseEnter={() => setHoveredCard(study.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="relative overflow-hidden rounded-2xl h-64 md:h-96 mb-8">
                                    <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className={`w-full h-full object-cover transform transition-transform duration-700 ${hoveredCard === study.id ? 'scale-105' : 'scale-100'}`}
                                    />
                                    <div className="absolute bottom-0 left-0 p-6 z-20">
                                        <span className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-full">
                                            {study.stats}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <div className="mb-6">
                                        <img src={study.logo} alt="Logo" className="h-10" />
                                    </div>

                                    <a 
                                        href={`/case-study/${study.id}`} 
                                        className="block mb-4"
                                    >
                                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 border-b-2 border-transparent group-hover:border-black inline-block">
                                            {study.title}
                                        </h3>
                                    </a>

                                    <p className="text-lg md:text-xl text-gray-700 mb-8">{study.description}</p>

                                    <a 
                                        href={`/case-study/${study.id}`}
                                        className="flex items-center text-lg font-semibold text-black transition-colors duration-300 group-hover:translate-x-1 transition-transform"
                                    >
                                        <span className="mr-2">Read case study</span>
                                        <ChevronRight className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-16 md:space-y-32 mt-0 md:mt-32">
                        {caseStudies.filter((_, index) => index % 2 !== 0).map((study, idx) => (
                            <div
                                key={study.id}
                                className={`group relative overflow-hidden transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                                style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
                                onMouseEnter={() => setHoveredCard(study.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="relative overflow-hidden rounded-2xl h-64 md:h-96 mb-8">
                                    <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className={`w-full h-full object-cover transform transition-transform duration-700 ${hoveredCard === study.id ? 'scale-105' : 'scale-100'}`}
                                    />
                                    <div className="absolute bottom-0 left-0 p-6 z-20">
                                        <span className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-full">
                                            {study.stats}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <div className="mb-6">
                                        <img src={study.logo} alt="Logo" className="h-10" />
                                    </div>

                                    <a 
                                        href={`/case-study/${study.id}`} 
                                        className="block mb-4"
                                    >
                                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 border-b-2 border-transparent group-hover:border-black inline-block">
                                            {study.title}
                                        </h3>
                                    </a>

                                    <p className="text-lg md:text-xl text-gray-700 mb-8">{study.description}</p>

                                    <a 
                                        href={`/case-study/${study.id}`}
                                        className="flex items-center text-lg font-semibold text-black transition-colors duration-300 group-hover:translate-x-1 transition-transform"
                                    >
                                        <span className="mr-2">Read case study</span>
                                        <ChevronRight className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}