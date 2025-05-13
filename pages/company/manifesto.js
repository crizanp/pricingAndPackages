import TextHeroSection from '@/components/home/textHero';
import React from 'react';

export default function CompanyManifesto() {
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

    return (
        <div className="bg-white min-h-screen">
            <div className="w-full bg-black py-28 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-7xl font-black mb-8 tracking-tight text-white">
                        OUR MANIFESTO
                    </h1>
                    <p className="text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
                        These are the core beliefs that drive everything we do. 
                        Not just words on a wall, but principles we live by every day.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-4 space-y-32">
                {manifestoBeliefs.map((belief, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-start">
                        <div className="md:w-1/3 mb-6 md:mb-0 relative">
                            <div className="absolute top-8 left-4 z-10">
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={belief.icon}></path>
                                    </svg>
                                    <h3 className="text-3xl font-bold text-black">{belief.title}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3 md:pl-8">
                            <p className="text-xl mb-6 font-medium leading-relaxed text-black">
                                {belief.description}
                            </p>

                            <div className="mb-6 p-4 bg-gray-100">
                                <p className="text-base text-gray-800 italic">
                                    {belief.details}
                                </p>
                            </div>

                            <p className="text-lg mb-6 text-gray-800">
                                {belief.expandedText}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                {belief.keyPoints.map((point, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                                        <span className="text-gray-800 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-32 flex justify-center">
                    <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6 text-black">
                        TURNING BELIEFS INTO ACTION
                    </h3>
                    <p className="text-xl max-w-3xl mx-auto text-black">
                        These principles aren&apos;t aspirational—they&apos;re operational. They guide our daily decisions, 
                        shape our processes, and define how we measure success. When you work with us, you&apos;ll 
                        experience the difference these beliefs make.
                    </p>

                    <div className="mt-12">
                        <button className="px-8 py-4 bg-black text-white font-medium text-lg rounded hover:bg-gray-800 transition-colors">
                            See Our Work
                        </button>
                    </div>
                </div>
            </div>
            <TextHeroSection />
        </div>
    );
}
