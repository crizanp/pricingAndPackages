import { useEffect, useState } from 'react';

export default function CompanyMetrics() {
    // Custom CSS for marquee animation with responsive speeds
    const marqueeStyles = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: scroll 20s linear infinite;
    }
    
    /* Responsive animation speeds */
    @media (max-width: 640px) {
      .animate-marquee {
        animation: scroll 15s linear infinite;
      }
    }
  `;
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Check for mobile viewport
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Tech stack items for the marquee
    const techStack = [
        "Blockchain", "Android", "iOS", "UX Design", "SAAS", "IoT", "Web Design",
        "React", "Next.js", "Node.js", "Python", "AWS", "Azure", "Google Cloud",
        "DevOps", "Machine Learning", "AI", "Data Science", "Vue.js", "Angular",
        "TypeScript", "Swift", "Kotlin", "Java", "Ruby on Rails", "PHP", "Laravel",
        "GraphQL", "Serverless", "Docker", "Kubernetes", "Flutter", "React Native",
        "Cyber Security", "BigData", "Augmented Reality"
    ];

    return (
        <div className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
            {/* Injecting custom CSS */}
            <style jsx>{marqueeStyles}</style>
            {/* Main Heading */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-tight">
                    Our journey of building success
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-4xl mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    We are a full-cycle product development company that combines creative
                    thinking with technical expertise to create user-centric products that solve real
                    problems and drive business growth.
                </p>

                {/* Metrics Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
                    {/* Completed Projects */}
                    <div className="flex flex-col bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">1,300+</span>
                        <span className="text-lg sm:text-xl md:text-2xl text-gray-800 mt-2">Completed Projects</span>
                    </div>

                    {/* Talented Team */}
                    <div className="flex flex-col bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">350+</span>
                        <span className="text-lg sm:text-xl md:text-2xl text-gray-800 mt-2">Talented Cubixians</span>
                    </div>

                    {/* Satisfied Clients */}
                    <div className="flex flex-col bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm sm:col-span-2 md:col-span-1">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">600+</span>
                        <span className="text-lg sm:text-xl md:text-2xl text-gray-800 mt-2">Satisfied Clients</span>
                    </div>
                </div>

                {/* Technology Marquee - Only render on client side */}

            </div>
            {isClient && (
                <div className="w-full overflow-hidden rounded-lg  py-4 sm:py-6">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">{tech}</span>
                                {index < techStack.length - 1 && (
                                    <span className="text-2xl sm:text-3xl mx-2 sm:mx-3 md:mx-4 text-gray-900">•</span>
                                )}
                            </div>
                        ))}
                        {/* Repeat for seamless scrolling */}
                        {techStack.map((tech, index) => (
                            <div key={`repeat-${index}`} className="flex items-center">
                                <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">{tech}</span>
                                {index < techStack.length - 1 && (
                                    <span className="text-2xl sm:text-3xl mx-2 sm:mx-3 md:mx-4 text-gray-900">•</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}