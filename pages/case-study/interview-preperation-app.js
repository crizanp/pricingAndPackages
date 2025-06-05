import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Star, Users, Download, TrendingUp, CheckCircle, Play } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';
import Link from 'next/link';

export default function InterviewPrepCaseStudy() {
    const [animateSection, setAnimateSection] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimateSection(true), 300);
    }, []);

    const projectStats = [
        { label: "User Rating", value: "4.8/5", icon: Star },
        { label: "Active Users", value: "500K+", icon: Users },
        { label: "Downloads", value: "1M+", icon: Download },
        { label: "Success Rate", value: "85%", icon: TrendingUp }
    ];

    const features = [
        "Comprehensive question database for all experience levels",
        "Industry-specific interview preparation",
        "Mock interview simulator with AI feedback",
        "Progress tracking and performance analytics",
        "Personalized study plans",
        "Offline access to questions"
    ];

    const techStack = [
        "React Native", "Node.js", "MongoDB", "Express.js", "Firebase", "AI/ML Integration"
    ];

    return (
        <div className="min-h-screen bg-white text-black">


            {/* Hero Section */}
            <section className="pt-16 pb-24">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className={`transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-center mb-12">
                            <img
                                src="https://m.media-amazon.com/images/I/913Be2GlZQL.png"
                                alt="Interview Prep App Logo"
                                className="h-16 mx-auto mb-8"
                            />
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                Interview Preparation App
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                                Empowering job seekers with comprehensive interview preparation tools and personalized learning experiences
                            </p>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden mb-16">
                            <img
                                src="https://bohlerengineering.com/wp-content/uploads/2019/05/The-Industry-Working-740x420-1.jpg"
                                alt="Interview Preparation Interface"
                                className="w-full h-96 md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full my-6">
                    <Link href="https://play.google.com/store/apps/details?id=com.interview.qa.nxtech" className='cursor-pointer flex items-center px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-lg lg:text-xl font-semibold' passHref>
                            <ExternalLink className="h-6 w-6 mr-3" />
                            View Live App
                    </Link>
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
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl mb-4">
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
                                    The Interview Preparation App was designed to bridge the gap between job seekers and their dream careers.
                                    Recognizing the anxiety and uncertainty that comes with job interviews, we created a comprehensive platform
                                    that provides structured preparation for both fresh graduates and experienced professionals.
                                </p>
                                <p>
                                    Our approach focused on creating an intuitive, engaging experience that adapts to individual learning styles
                                    and career goals. The app combines a vast question database with AI-powered feedback to create personalized
                                    learning paths.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                                <p className="text-gray-700">
                                    Job seekers lacked access to quality, structured interview preparation resources that could adapt to their specific needs and experience levels.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Solution</h3>
                                <p className="text-gray-700">
                                    A mobile-first application offering personalized interview preparation with AI-powered feedback, comprehensive question banks, and progress tracking.
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
                            Comprehensive tools designed to boost confidence and improve interview performance
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
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
                            Built with modern, scalable technologies for optimal performance
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24 bg-black text-white">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Results & Impact</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Measurable success in helping job seekers achieve their career goals
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-green-400 mb-4">85%</div>
                            <p className="text-lg">Success rate in securing job offers after using the app</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-400 mb-4">4.8/5</div>
                            <p className="text-lg">Average user rating with over 10,000 reviews</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-purple-400 mb-4">1M+</div>
                            <p className="text-lg">Total downloads within the first year of launch</p>
                        </div>
                    </div>
                </div>
            </section>
            <TextHeroSection />
        </div>
    );
}