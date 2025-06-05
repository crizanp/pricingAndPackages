import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Star, Users, Search, TrendingUp, CheckCircle, BarChart3 } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';

export default function WorthYourWebsiteCaseStudy() {
    const [animateSection, setAnimateSection] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimateSection(true), 300);
    }, []);

    const projectStats = [
        { label: "User Rating", value: "4.7/5", icon: Star },
        { label: "Active Users", value: "10K+", icon: Users },
        { label: "Domain Searches", value: "500K+", icon: Search },
        { label: "Data Accuracy", value: "95%", icon: TrendingUp }
    ];

    const features = [
        "Comprehensive domain name analysis and insights",
        "Real-time SEO metrics and performance data",
        "Website traffic estimation and analytics",
        "Domain history and registration details",
        "Competitor analysis and benchmarking",
        "Export functionality for detailed reports"
    ];

    const techStack = [
        "React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Chart.js", "Domain Analysis Tools"
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="pt-16 pb-24">
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <div className={`transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-center mb-12">
                            <img
                                src="https://worthyourwebsite.com/core/img/v2.png"
                                alt="WorthYourWebsite Logo"
                                className="h-16 mx-auto mb-8"
                            />
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                WorthYourWebsite
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                                Empowering website owners and digital marketers with comprehensive domain insights, SEO analytics, and performance metrics
                            </p>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden mb-16">
                            <img
                                src="https://cdn-proxy.slickplan.com/wp-content/uploads/2024/07/AdobeStock_251279381-1.jpeg"
                                alt="Domain Analysis Dashboard"
                                className="w-full h-96 md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full my-6">
                    <a href="https://worthyourwebsite.com" className='cursor-pointer flex items-center px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-lg lg:text-xl font-semibold'>
                        <ExternalLink className="h-6 w-6 mr-3" />
                        View Live Tool
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
                                    WorthYourWebsite was developed to democratize access to professional-grade domain analysis tools.
                                    Understanding that small business owners and digital marketers often lack the resources for expensive
                                    SEO tools, we created a comprehensive platform that provides valuable insights at an accessible price point.
                                </p>
                                <p>
                                    Our platform combines multiple data sources to deliver accurate domain statistics, SEO metrics, and
                                    competitive analysis. The tool serves both technical professionals and non-technical users who need
                                    to understand their websites performance and market position.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                                <p className="text-gray-700">
                                    Website owners and digital marketers needed affordable access to comprehensive domain analysis tools
                                    that were previously only available through expensive enterprise solutions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Solution</h3>
                                <p className="text-gray-700">
                                    A user-friendly web application providing detailed domain insights, SEO metrics, and competitive
                                    analysis with an intuitive interface accessible to users of all technical levels.
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
                            Powerful tools designed to provide actionable insights for website optimization
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
                            Built with robust technologies for reliable data processing and visualization
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
                            Delivering valuable insights that drive informed digital marketing decisions
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-green-400 mb-4">95%</div>
                            <p className="text-lg">Data accuracy rate across all domain metrics</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-400 mb-4">10K+</div>
                            <p className="text-lg">Active users relying on our insights monthly</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-purple-400 mb-4">500K+</div>
                            <p className="text-lg">Domain searches processed since launch</p>
                        </div>
                    </div>
                </div>
            </section>

           <TextHeroSection/>
        </div>
    );
}