import { useState, useEffect, useRef } from 'react';
import { Brain, Code, BarChart3, Rocket, Workflow, Settings } from 'lucide-react';

export default function DevelopmentProcess() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    const steps = [
        {
            id: 1,
            title: "Ideate",
            description: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            icon: <Brain className="text-purple-400" size={48} />,
            largeIcon: <Brain className="text-purple-400" size={220} />
        },
        {
            id: 2,
            title: "Design",
            description: "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
            icon: <Workflow className="text-purple-400" size={48} />,
            largeIcon: <Workflow className="text-purple-400" size={220} />
        },
        {
            id: 3,
            title: "Develop",
            description: "Our expert engineers transform designs into robust, scalable code using cutting-edge technologies and development practices.",
            icon: <Code className="text-purple-400" size={48} />,
            largeIcon: <Code className="text-purple-400" size={220} />
        },
        {
            id: 4,
            title: "Test",
            description: "Rigorous quality assurance ensures your product functions flawlessly across all environments and use cases.",
            icon: <Settings className="text-purple-400" size={48} />,
            largeIcon: <Settings className="text-purple-400" size={220} />
        },
        {
            id: 5,
            title: "Analyze",
            description: "Data-driven insights guide continuous improvements, helping your product evolve with user needs and market demands.",
            icon: <BarChart3 className="text-purple-400" size={48} />,
            largeIcon: <BarChart3 className="text-purple-400" size={220} />
        },
        {
            id: 6,
            title: "Launch",
            description: "Strategic deployment and marketing support ensure your product reaches its target audience with maximum impact.",
            icon: <Rocket className="text-purple-400" size={48} />,
            largeIcon: <Rocket className="text-purple-400" size={220} />
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate how far we've scrolled within the section
            const scrollPosition = Math.max(0, scrollY - sectionTop);
            const totalScrollable = sectionHeight - windowHeight;

            // Calculate scroll progress as a percentage
            const progress = Math.min(Math.max(scrollPosition / totalScrollable, 0), 1) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} className="bg-black text-white min-h-[300vh] w-full py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-20 space-y-4">
                    <h2 className="text-6xl font-bold tracking-tight">
                        Our product
                        <span className="block text-purple-400">development process</span>
                    </h2>
                    <div className="flex items-center">
                        <button className="text-base flex items-center group text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/5 transition-all">
                            View More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Gallery container */}
                <div className="gallery-wrapper relative hidden lg:flex flex-col min-h-[200vh]">
                    {/* Progress bar - moved to left side */}
                    <div className="slider-progress-bar-container absolute left-0 top-0 bottom-0 w-1 bg-gray-800">
                        <div
                            id="sliderProgressBar"
                            className="slider-progress-bar absolute left-0 top-0 w-1 bg-white transition-all duration-300 ease-out"
                            style={{ height: `${scrollProgress}%` }}
                        ></div>
                    </div>

                    {steps.map((step) => (
                        <div key={step.id} className="flex">
                            {/* Left column with text content */}
                            <div className="w-2/4 ml-6">
                                <div className="pl-12">
                                    <div className="lg:pr-8 lg:pt-4">
                                        <div className="lg:max-w-lg">
                                            <p className="text-white font-normal mb-3 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                                {String(step.id).padStart(2, '0')}/06
                                            </p>
                                            <div className="overflow-hidden">
                                                <b className="font-bold text-purple-400 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:leading-[60px] 2xl:leading-[75px]"
                                                    style={{ transform: 'translate(0px, -7px)' }}>
                                                    {step.title}
                                                </b>
                                            </div>
                                            <p className="mt-7 mb-10 leading-9 text-white font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right column with icon */}
                            <div className="w-2/4 flex">
                                <div className="h-96 w-96 ml-20 mt-4 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-md flex justify-center">
                                    <div className="transform transition-all duration-300 hover:scale-110 mt-6">
                                        {step.largeIcon}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Mobile view */}
                <div className="lg:hidden mt-16">
                    <div className="space-y-16">
                        {steps.map((step) => (
                            <div key={step.id} className="relative">
                                <p className="text-white text-sm font-mono opacity-60 mb-1">
                                    {String(step.id).padStart(2, '0')}/06
                                </p>
                                <div className="text-purple-400 text-4xl font-bold">{step.title}</div>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">{step.description}</p>
                                <div className="rounded-xl overflow-hidden h-64 w-full bg-black/30 flex items-center justify-center">
                                    <div className="transform transition-all duration-300 hover:scale-110 my-auto">
                                        {step.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}