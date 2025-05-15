import { useState, useEffect, useRef } from 'react';
import { Brain, Code, BarChart3, Rocket, Workflow, Settings } from 'lucide-react';

export default function DevelopmentProcess() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef(null);
    const stepsRef = useRef([]);

    const steps = [
        {
            id: 1,
            title: "Ideate",
            description: "We carefully think about your idea and understand your goals clearly. This helps us plan a path that matches your vision and sets the product up for success.",
            icon: <Brain className="text-purple-400" size={48} />,
            largeIcon: <Brain className="text-purple-400" size={220} />
        },
        {
            id: 2,
            title: "Design",
            description: "We create a simple version of your product that looks nice and works well. This design focuses on the most important features to give users a great experience.",
            icon: <Workflow className="text-purple-400" size={48} />,
            largeIcon: <Workflow className="text-purple-400" size={220} />
        },
        {
            id: 3,
            title: "Develop",
            description: "Our skilled developers turn the design into real working software. We use modern tools and methods to build strong and flexible code.",
            icon: <Code className="text-purple-400" size={48} />,
            largeIcon: <Code className="text-purple-400" size={220} />
        },
        {
            id: 4,
            title: "Test",
            description: "We carefully check the product to make sure it works without problems. We test it in different situations to make sure it’s reliable for all users.",
            icon: <Settings className="text-purple-400" size={48} />,
            largeIcon: <Settings className="text-purple-400" size={220} />
        },
        {
            id: 5,
            title: "Analyze",
            description: "We look at data and feedback to see how the product is doing. These insights help us improve it and keep it useful for your users over time.",
            icon: <BarChart3 className="text-purple-400" size={48} />,
            largeIcon: <BarChart3 className="text-purple-400" size={220} />
        },
        {
            id: 6,
            title: "Launch",
            description: "We help you launch the product in the best way possible. Our support and promotion make sure it reaches the right people and makes a big impact.",
            icon: <Rocket className="text-purple-400" size={48} />,
            largeIcon: <Rocket className="text-purple-400" size={220} />
        }
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

            // Calculate which step should be active based on scroll position
            const stepHeight = totalScrollable / steps.length;
            const currentStep = Math.min(
                Math.floor(scrollPosition / stepHeight),
                steps.length - 1
            );

            if (currentStep >= 0) {
                setActiveStep(currentStep);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [steps.length]);

    return (
        <div ref={sectionRef} className="bg-black text-white min-h-[150vh] md:min-h-[200vh] lg:min-h-[300vh] w-full py-16 relative overflow-hidden px-6 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto ">
                {/* Header Section - maintain original desktop styling */}
                <div className="mb-20 space-y-4">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
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

                {/* Desktop Scroll Experience - keeping original layout */}
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

                            {/* Right column with icon - keeping original design */}
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

                {/* Tablet View */}
                <div className="hidden md:block lg:hidden mt-16">
                    <div className="space-y-16">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col md:flex-row">
                                <div className="md:w-3/5 mb-6 md:mb-0 md:pr-6">
                                    <p className="text-white text-sm font-mono opacity-60 mb-1">
                                        {String(step.id).padStart(2, '0')}/06
                                    </p>
                                    <div className="text-purple-400 text-4xl font-bold mb-4">{step.title}</div>
                                    <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                                </div>
                                <div className="md:w-2/5">
                                    <div className="rounded-xl overflow-hidden h-64 w-full bg-black/30 flex items-center justify-center">
                                        <div className="transform transition-all duration-300 hover:scale-110">
                                            {step.largeIcon}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile view - with larger icons */}
                <div className="md:hidden mt-12">
                    <div className="space-y-16">
                        {steps.map((step) => (
                            <div key={step.id} className="relative">
                                <p className="text-white text-sm font-mono opacity-60 mb-1">
                                    {String(step.id).padStart(2, '0')}/06
                                </p>
                                <div className="text-purple-400 text-3xl sm:text-4xl font-bold mb-3">{step.title}</div>
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12">{step.description}</p>
                                <div className="rounded-xl overflow-hidden h-14 w-full bg-black/30 flex items-center justify-center">
                                    <div className="transform transition-all duration-300 hover:scale-110">
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