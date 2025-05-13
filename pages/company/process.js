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

    return (
        <div className="bg-white min-h-screen">
            <div 
                ref={(el) => registerRef('process', el)}
                className="max-w-7xl mx-auto py-24 bg-white"
            >
                <h2 className="text-6xl font-black mb-6 tracking-tight text-black">
                    OUR PROCESS
                </h2>
                <p className="text-xl mb-20 max-w-3xl text-gray-700">
                    A methodical approach designed to transform complex challenges into elegant, effective solutions that drive real business results.
                </p>
                
                <div className="space-y-32">
                    {workflowSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-start transform transition-all duration-1000 ${
                                isIntersecting.process ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="md:w-1/3 mb-6 md:mb-0 relative">
                                
                                <div className="absolute top-8 left-4 z-10">
                                    <div className="flex items-center">
                                        <svg className="w-8 h-8 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}></path>
                                        </svg>
                                        <h3 className="text-3xl font-bold text-black">{step.title}</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="md:w-2/3 md:pl-8">
                                <p className="text-xl mb-6 font-medium leading-relaxed text-black">
                                    {step.description}
                                </p>
                                
                                <div className="mb-6 p-4 bg-gray-100">
                                    <p className="text-base text-gray-800 italic">
                                        {step.details}
                                    </p>
                                </div>
                                
                                <p className="text-lg mb-6 text-gray-800">
                                    {step.expandedText}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                    {step.keyPoints.map((point, i) => (
                                        <div key={i} className="flex items-center">
                                            <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                                            <span className="text-gray-800 font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-32 flex justify-center">
                    <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-xl max-w-3xl mx-auto text-black font-medium">
                        Our process is built on years of experience delivering successful digital solutions across industries. 
                        Each step is designed to minimize risk and maximize value, ensuring your project succeeds.
                    </p>
                </div>
            </div>
            <TextHeroSection />
        </div>
    );
}