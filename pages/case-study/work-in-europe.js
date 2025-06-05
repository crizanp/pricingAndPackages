import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Star, Users, MapPin, TrendingUp, CheckCircle, Briefcase } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';

export default function WorkinEUCaseStudy() {
    const [animateSection, setAnimateSection] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimateSection(true), 300);
    }, []);

    const projectStats = [
        { label: "Success Rate", value: "92%", icon: Star },
        { label: "Job Seekers", value: "5K+", icon: Users },
        { label: "Placements", value: "1,200+", icon: Briefcase },
        { label: "EU Countries", value: "27", icon: MapPin }
    ];

    const features = [
        "Comprehensive job matching across 27 EU countries",
        "End-to-end visa and relocation assistance",
        "Industry-specific career guidance and counseling",
        "Cultural integration and language support programs",
        "Employer partnership network across Europe",
        "Post-placement support and career development"
    ];

    const techStack = [
        "React", "Node.js", "MongoDB", "Express.js", "Payment Integration", "Multi-language Support", "CRM System"
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="pt-16 pb-24">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className={`transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-center mb-12">
                            <img
                                src="https://workineu.co/wp-content/uploads/2022/10/WorkinEU-1-1.png"
                                alt="WorkinEU Logo"
                                className="h-16 mx-auto mb-8"
                            />
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                WorkinEU
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                                Connecting talented professionals with career opportunities across Europe through trusted guidance and comprehensive support
                            </p>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden mb-16">
                            <img
                                src="https://ejp-eurad.eu/sites/default/files/styles/576x432/public/2022-04/eurad-implementation-compress_190422.jpg?itok=KmMjUoyU"
                                alt="European Career Opportunities"
                                className="w-full h-96 md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full my-6">
                    <a href="https://workineu.co" className='cursor-pointer flex items-center px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-lg lg:text-xl font-semibold'>
                        <ExternalLink className="h-6 w-6 mr-3" />
                        Explore Opportunities
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
                                    WorkinEU was established to bridge the gap between talented professionals seeking European career
                                    opportunities and the complex process of international job placement. Based in Dubai, our platform
                                    serves as a trusted intermediary that understands both the aspirations of job seekers and the
                                    requirements of European employers.
                                </p>
                                <p>
                                    Our comprehensive approach goes beyond simple job matching. We provide end-to-end support including
                                    visa assistance, cultural integration programs, and ongoing career development to ensure successful
                                    long-term placements across all 27 EU member countries.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                                <p className="text-gray-700">
                                    Job seekers faced complex barriers when pursuing European career opportunities, including visa
                                    requirements, cultural differences, and lack of trusted guidance through the relocation process.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Solution</h3>
                                <p className="text-gray-700">
                                    A comprehensive platform offering job matching, visa assistance, cultural integration support,
                                    and ongoing career development services tailored to European market requirements.
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive support services designed to ensure successful European career transitions
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
                            Built with scalable technologies to handle international operations and multi-language support
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
                            Transforming careers and lives through successful European job placements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-green-400 mb-4">92%</div>
                            <p className="text-lg">Success rate in securing European job placements</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-400 mb-4">1,200+</div>
                            <p className="text-lg">Successful career placements across Europe</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-purple-400 mb-4">27</div>
                            <p className="text-lg">EU countries with active job opportunities</p>
                        </div>
                    </div>
                </div>
            </section>

           <TextHeroSection/>
        </div>
    );
}