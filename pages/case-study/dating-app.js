import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Star, Users, Heart, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';
import TextHero from '@/components/video-service/textHero';

export default function NepmateCaseStudy() {
    const [animateSection, setAnimateSection] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimateSection(true), 300);
    }, []);

    const projectStats = [
        { label: "User Rating", value: "4.6/5", icon: Star },
        { label: "Active Users", value: "100K+", icon: Users },
        { label: "Matches Made", value: "500K+", icon: Heart },
        { label: "Success Rate", value: "78%", icon: TrendingUp }
    ];

    const features = [
        "Advanced matching algorithm for compatible connections",
        "Dual-purpose platform for casual and serious dating",
        "Real-time messaging with multimedia support",
        "Privacy-focused profile customization options",
        "Location-based discovery and filtering",
        "Video call integration for safe virtual dates"
    ];

    const techStack = [
        "React Native", "Node.js", "MongoDB", "Socket.io", "Firebase", "WebRTC", "Push Notifications"
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="pt-16 pb-24">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className={`transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-center mb-12">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59ECUashts6AUud70xgEIyNjD4QaDR0kmoQ&s"
                                alt="Nepmate Logo"
                                className="h-16 mx-auto mb-8 rounded-lg"
                            />
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                Nepmate
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                                Connecting hearts and minds through a versatile dating platform that caters to both casual encounters and meaningful relationships
                            </p>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden mb-16">
                            <img
                                src="https://ighdigital.ae/wp-content/uploads/2024/01/epmate.png"
                                alt="Nepmate Dating App Interface"
                                className="w-full h-96 md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full my-6">
                    <a href="#" className='cursor-pointer flex items-center px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all text-lg lg:text-xl font-semibold'>
                        <ExternalLink className="h-6 w-6 mr-3" />
                        Download App
                    </a>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {projectStats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl mb-4">
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-24">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Overview</h2>
                            <div className="space-y-6 text-lg text-gray-700">
                                <p>
                                    Nepmate was developed to address the diverse needs of modern dating culture. Understanding that users
                                    seek different types of connections at different times in their lives, we created a platform that
                                    seamlessly accommodates both casual encounters and serious relationship seekers without judgment.
                                </p>
                                <p>
                                    Our approach focused on creating an inclusive environment where users can be transparent about their
                                    intentions while maintaining privacy and safety. The app combines sophisticated matching algorithms
                                    with user-friendly design to facilitate genuine connections.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                                <p className="text-gray-700">
                                    Existing dating apps often pigeonhole users into specific categories, failing to acknowledge that
                                    peoples relationship goals can evolve and vary, creating a need for a more flexible platform.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Solution</h3>
                                <p className="text-gray-700">
                                    A versatile dating application that allows users to specify their current intentions while providing
                                    robust matching algorithms and safety features for all types of connections.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24 bg-gray-50">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Innovative features designed to create meaningful connections while prioritizing user safety and experience
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <CheckCircle className="h-8 w-8 text-pink-500 mb-4" />
                                <p className="text-lg font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Technology Stack</h2>
                        <p className="text-xl text-gray-600">
                            Built with modern technologies to ensure smooth performance and real-time communication
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 rounded-full font-medium transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* User Experience Section */}
            <section className="py-24 bg-gray-50">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">User Experience</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Designed with user safety, privacy, and authentic connections at the forefront
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Authentic Connections</h3>
                            <p className="text-gray-700">
                                Our matching algorithm considers personality compatibility, shared interests, and relationship goals
                                to facilitate genuine connections that align with user intentions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <MessageCircle className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Safe Communication</h3>
                            <p className="text-gray-700">
                                Built-in safety features including photo verification, secure messaging, and video call options
                                ensure users can connect confidently in a protected environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <TextHeroSection/>

        </div>
    );
}