import { useEffect, useState } from 'react';

export default function CompanyMetrics() {
    // Custom CSS for marquee animation
    const marqueeStyles = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: scroll 20s linear infinite;
    }
  `;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Tech stack items for the marquee (at least 30)
    const techStack = [
        "Blockchain", "Android", "iOS", "UX Design", "SAAS", "IoT", "Web Design",
        "React", "Next.js", "Node.js", "Python", "AWS", "Azure", "Google Cloud",
        "DevOps", "Machine Learning", "AI", "Data Science", "Vue.js", "Angular",
        "TypeScript", "Swift", "Kotlin", "Java", "Ruby on Rails", "PHP", "Laravel",
        "GraphQL", "Serverless", "Docker", "Kubernetes", "Flutter", "React Native",
        "Cyber Security", "BigData", "Augmented Reality"
    ];

    return (<>
        <div className="w-full bg-white py-16 px-4 md:px-8">
            {/* Injecting custom CSS */}
            <style jsx>{marqueeStyles}</style>
            {/* Main Heading */}
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Our journey of building success
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-800 max-w-4xl mb-16">
                    We are a full-cycle product development company that combines creative
                    thinking with technical expertise to create user-centric products that solve real
                    problems and drive business growth.
                </p>

                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Completed Projects */}
                    <div className="flex flex-col">
                        <span className="text-5xl md:text-6xl font-bold text-gray-900">1,300+</span>
                        <span className="text-xl md:text-2xl text-gray-800 mt-2">Completed Projects</span>
                    </div>

                    {/* Talented Team */}
                    <div className="flex flex-col">
                        <span className="text-5xl md:text-6xl font-bold text-gray-900">350+</span>
                        <span className="text-xl md:text-2xl text-gray-800 mt-2">Talented Cubixians</span>
                    </div>

                    {/* Satisfied Clients */}
                    <div className="flex flex-col">
                        <span className="text-5xl md:text-6xl font-bold text-gray-900">600+</span>
                        <span className="text-xl md:text-2xl text-gray-800 mt-2">Satisfied Clients</span>
                    </div>
                </div>

                {/* Technology Marquee */}

            </div>
            {isClient && (
            <div className="w-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex items-center">
                            <span className="text-2xl md:text-3xl font-medium text-gray-900">{tech}</span>
                            {index < techStack.length - 1 && (
                                <span className="text-3xl mx-4 text-gray-900">•</span>
                            )}
                        </div>
                    ))}
                    {/* Repeat for seamless scrolling */}
                    {techStack.map((tech, index) => (
                        <div key={`repeat-${index}`} className="flex items-center">
                            <span className="text-2xl md:text-3xl font-medium text-gray-900">{tech}</span>
                            {index < techStack.length - 1 && (
                                <span className="text-3xl mx-4 text-gray-900">•</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )}
        </div>
        
    </>
    );
}