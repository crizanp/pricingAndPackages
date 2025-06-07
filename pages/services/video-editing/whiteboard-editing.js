import TextHeroSection from "@/components/home/textHero";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function WhiteboardVideoEditing() {
    const [activeService, setActiveService] = useState(0);

    // Structured Data for Whiteboard Video Editing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Whiteboard Video Editing & Animation Services",
        "description": "Professional whiteboard video editing and animation services for educational content, explainer videos, business presentations, and marketing materials. Expert editors creating engaging visual storytelling.",
        "provider": {
            "@type": "Organization",
            "name": "Foxbeep",
            "url": "https://foxbeep.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bhaktapur",
                "addressRegion": "Bagmati Province",
                "addressCountry": "Nepal"
            }
        },
        "serviceType": "Whiteboard Video Editing",
        "areaServed": "Worldwide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "203"
        },
        "priceRange": "$200 - $2500"
    };

    const services = [
        {
            title: "Educational Videos",
            description: "Engaging whiteboard animations that make complex topics easy to understand",
            features: ["Concept visualization", "Step-by-step explanations", "Interactive elements"],
            icon: "📚"
        },
        {
            title: "Business Explainers",
            description: "Professional whiteboard videos that explain your products and services clearly",
            features: ["Product demonstrations", "Process explanations", "Brand storytelling"],
            icon: "💼"
        },
        {
            title: "Marketing Videos",
            description: "Compelling whiteboard animations that convert viewers into customers",
            features: ["Sales presentations", "Marketing campaigns", "Social media content"],
            icon: "📈"
        },
        {
            title: "Training Content",
            description: "Interactive whiteboard videos for employee training and skill development",
            features: ["Corporate training", "Skill tutorials", "Safety procedures"],
            icon: "🎯"
        }
    ];

    const pricingPlans = [
        {
            name: "Basic Whiteboard",
            price: "$200",
            duration: "Up to 1 minute",
            features: [
                "Simple hand-drawn animation",
                "Basic voiceover sync",
                "Standard transitions",
                "1 revision included",
                "HD 1080p delivery"
            ]
        },
        {
            name: "Professional",
            price: "$800",
            duration: "2-5 minutes",
            features: [
                "Advanced hand animations",
                "Professional voiceover",
                "Custom illustrations",
                "Smooth transitions",
                "Background music",
                "Multiple format delivery",
                "3 revisions included"
            ],
            popular: true
        },
        {
            name: "Premium Series",
            price: "$2500",
            duration: "Series of 5-10 videos",
            features: [
                "Complex animations",
                "Custom character design",
                "Interactive elements",
                "Professional narration",
                "Branded templates",
                "Multi-language support",
                "Unlimited revisions"
            ]
        }
    ];

    const faqs = [
        {
            question: "What makes whiteboard videos so effective?",
            answer: "Whiteboard videos are highly engaging because they simulate the natural learning process. The hand-drawing animation keeps viewers focused, while the visual storytelling makes complex information easier to understand and remember."
        },
        {
            question: "Can you create custom illustrations for my whiteboard video?",
            answer: "Absolutely! We create custom illustrations that match your brand, topic, and target audience. Our artists can draw anything from simple icons to complex diagrams and characters."
        },
        {
            question: "Do you provide voiceover services?",
            answer: "Yes, we offer professional voiceover services in multiple languages and accents. We can also work with your existing audio or help you script the perfect narration for your video."
        },
        {
            question: "How long does it take to create a whiteboard video?",
            answer: "Simple 1-minute videos typically take 5-7 days, while longer, more complex videos can take 2-3 weeks. We'll provide a detailed timeline based on your specific requirements."
        },
        {
            question: "Can you match my brand colors and style?",
            answer: "While traditional whiteboard videos use black markers on white backgrounds, we can incorporate your brand colors strategically and create custom elements that align with your brand identity."
        },
        {
            question: "What file formats do you deliver?",
            answer: "We deliver in multiple formats including MP4 for web use, high-resolution files for presentations, and optimized versions for different social media platforms."
        }
    ];

    const videoTypes = [
        { name: "Educational Content", icon: "🎓" },
        { name: "Product Demos", icon: "📱" },
        { name: "How-to Tutorials", icon: "🔧" },
        { name: "Sales Pitches", icon: "💰" },
        { name: "Training Videos", icon: "👨‍🏫" },
        { name: "Presentations", icon: "📊" },
        { name: "Explainer Videos", icon: "💡" },
        { name: "Marketing Content", icon: "📢" }
    ];

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>Whiteboard Video Editing Services | Professional Animation | Foxbeep</title>
                <meta name="description" content="Professional whiteboard video editing and animation services. Create engaging educational content, explainer videos, and marketing materials starting at $200." />
                <meta name="keywords" content="whiteboard video editing, whiteboard animation, explainer videos, educational videos, business videos, animated presentations, marketing videos, training videos" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Whiteboard Video Editing Services | Professional Animation" />
                <meta property="og:description" content="Professional whiteboard video editing and animation services for educational content, business explainers, and marketing videos starting at $200." />
                <meta property="og:image" content="https://foxbeep.com/images/whiteboard-editing.jpg" />
                <meta property="og:url" content="https://foxbeep.com/services/whiteboard-video-editing" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Whiteboard Video Editing Services | Professional Animation" />
                <meta name="twitter:description" content="Professional whiteboard video editing starting at $200. Expert animation for educational content, business explainers, and marketing videos." />
                <meta name="twitter:image" content="https://foxbeep.com/images/whiteboard-editing.jpg" />
                
                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://foxbeep.com/services/whiteboard-video-editing" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="author" content="Foxbeep" />
                <meta name="geo.region" content="NP-03" />
                <meta name="geo.placename" content="Bhaktapur" />
                <meta name="geo.position" content="27.6728;85.4298" />
                <meta name="ICBM" content="27.6728, 85.4298" />
                
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-white border-b-4 border-gray-900 text-gray-900 py-28">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Whiteboard Video Editing
                            <br />
                            <span className="text-gray-600">Visual Storytelling</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
                            Professional whiteboard video editing services that transform complex ideas 
                            into engaging visual stories that educate, explain, and convert.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <button className="cursor-pointer bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition border-2 border-gray-900">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link href="/work">
                                <button className="cursor-pointer border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition">
                                    View Portfolio
                                </button>
                            </Link>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">500+</div>
                                <div className="text-sm text-gray-600">Videos Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">4.9★</div>
                                <div className="text-sm text-gray-600">Client Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">5 Days</div>
                                <div className="text-sm text-gray-600">Avg. Delivery</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="max-w-7xl mx-auto py-8 px-4 md:px-6 xl:px-8 py-20 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Whiteboard Video Services
                            </h2>
                            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                                We create engaging whiteboard animations for every purpose and audience
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg transition transform hover:-translate-y-1"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-600 flex items-center">
                                                <span className="text-gray-900 mr-2 font-bold">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Types Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Video Types We Create
                            </h2>
                            <p className="text-2xl text-gray-600">
                                From simple explanations to complex training materials
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {videoTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:border-gray-900 transition"
                                >
                                    <div className="text-3xl mb-3">{type.icon}</div>
                                    <h3 className="font-semibold text-gray-800">{type.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Whiteboard Video Packages
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Professional whiteboard animation services for every budget
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-8 border-2 ${
                                        plan.popular
                                            ? 'bg-gray-900 text-white border-gray-900 transform scale-105'
                                            : 'bg-white border-gray-200 hover:border-gray-900'
                                    } transition`}
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4">
                                            <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-center mb-8">
                                        <h3 className={`text-2xl font-bold mb-2 ${
                                            plan.popular ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {plan.name}
                                        </h3>
                                        <div className={`text-4xl font-bold mb-2 ${
                                            plan.popular ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {plan.price}
                                        </div>
                                        <p className={`${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {plan.duration}
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-center ${
                                                plan.popular ? 'text-white' : 'text-gray-600'
                                            }`}>
                                                <span className={`mr-3 font-bold ${
                                                    plan.popular ? 'text-white' : 'text-gray-900'
                                                }`}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-3 rounded-lg font-semibold transition border-2 ${
                                        plan.popular
                                            ? 'bg-white text-gray-900 border-white hover:bg-gray-100'
                                            : 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800'
                                    }`}>
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Our Creation Process
                            </h2>
                            <p className="text-2xl text-gray-600">
                                From concept to final animation - here is how we bring your ideas to life
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Script & Storyboard</h3>
                                <p className="text-gray-600">We develop the narrative and create detailed storyboards</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Illustration Design</h3>
                                <p className="text-gray-600">Custom illustrations are created to match your content</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Animation & Sync</h3>
                                <p className="text-gray-600">Hand-drawing animation synced with voiceover and music</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Final Polish</h3>
                                <p className="text-gray-600">Quality check and delivery in multiple formats</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Everything you need to know about whiteboard video editing
                            </p>
                        </div>
                        
                        <div className="max-w-3xl mx-auto space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gray-900 transition">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <TextHeroSection />
            </div>
        </>
    );
}