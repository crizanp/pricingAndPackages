import TextHeroSection from "@/components/home/textHero";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function AdsCommercialEditing() {
    const [activeService, setActiveService] = useState(0);

    // Structublue Data for Ads & Commercial Video Editing
    const structublueData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Video Editing & Advertisement Production Services",
        "description": "Professional commercial video editing and advertisement production services for businesses, brands, social media ads, TV commercials, and digital marketing campaigns. Expert editors with fast turnaround.",
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
        "serviceType": "Commercial Video Editing",
        "areaServed": "Worldwide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89"
        },
        "priceRange": "$200 - $2000"
    };

    const services = [
        {
            title: "Social Media Ads",
            description: "Eye-catching video ads optimized for Facebook, Instagram, TikTok, and LinkedIn",
            features: ["Platform-specific formats", "Engagement optimization", "A/B test variations"],
            icon: "📱"
        },
        {
            title: "TV Commercials",
            description: "Broadcast-quality commercials for television and streaming platforms",
            features: ["Broadcast standards", "Professional color grading", "Audio mastering"],
            icon: "📺"
        },
        {
            title: "Product Demos",
            description: "Compelling product demonstration videos that drive conversions",
            features: ["Feature highlights", "Lifestyle integration", "Call-to-action focus"],
            icon: "🛍️"
        },
        {
            title: "Corporate Videos",
            description: "Professional corporate content for brand storytelling and communication",
            features: ["Brand consistency", "Executive presentations", "Company culture videos"],
            icon: "🏢"
        }
    ];

    const pricingPlans = [
        {
            name: "Social Media Package",
            price: "$200",
            duration: "Up to 60 seconds",
            features: [
                "Multi-platform optimization",
                "Basic motion graphics",
                "Background music",
                "2 format variations",
                "3 revisions included"
            ]
        },
        {
            name: "Professional Commercial",
            price: "$800",
            duration: "Up to 2 minutes",
            features: [
                "Broadcast-quality editing",
                "Advanced motion graphics",
                "Professional color grading",
                "Custom animations",
                "Voice-over sync",
                "5 revisions included"
            ],
            popular: true
        },
        {
            name: "Premium Campaign",
            price: "$2000",
            duration: "Multiple versions",
            features: [
                "Complete campaign package",
                "Multiple format versions",
                "Advanced VFX & CGI",
                "Custom soundtrack",
                "Brand asset creation",
                "Unlimited revisions"
            ]
        }
    ];

    const faqs = [
        {
            question: "What's the difference between social media ads and TV commercials?",
            answer: "Social media ads are optimized for digital platforms with shorter attention spans, vertical/square formats, and platform-specific features. TV commercials follow broadcast standards with longer storytelling arcs and traditional 16:9 format."
        },
        {
            question: "How long does commercial video editing take?",
            answer: "Social media ads typically take 3-5 days, while full TV commercials can take 1-2 weeks depending on complexity. Rush delivery is available for urgent campaigns."
        },
        {
            question: "Do you provide multiple format versions?",
            answer: "Yes! We create multiple versions optimized for different platforms - square for Instagram, vertical for TikTok, horizontal for YouTube, and various duration cuts for different ad placements."
        },
        {
            question: "Can you work with existing brand guidelines?",
            answer: "Absolutely! We strictly follow your brand guidelines including colors, fonts, logos, and style preferences to ensure consistent brand representation across all video content."
        },
        {
            question: "What if I need voice-over or music licensing?",
            answer: "We can sync professional voice-overs and provide royalty-free music options. For licensed music or celebrity voice-overs, we'll guide you through the licensing process."
        },
        {
            question: "Do you offer A/B testing versions?",
            answer: "Yes! We can create multiple variations of your ads with different hooks, calls-to-action, or visual styles to help you test and optimize campaign performance."
        }
    ];

    const industries = [
        { name: "E-commerce", icon: "🛒" },
        { name: "Healthcare", icon: "🏥" },
        { name: "Technology", icon: "💻" },
        { name: "Food & Beverage", icon: "🍔" },
        { name: "Fashion", icon: "👗" },
        { name: "Real Estate", icon: "🏠" },
        { name: "Education", icon: "🎓" },
        { name: "Finance", icon: "💰" }
    ];

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>Commercial Video Editing Services | Professional Ad Production | Foxbeep</title>
                <meta name="description" content="Professional commercial video editing and advertisement production services. Expert editors for TV commercials, social media ads, product demos, and corporate videos. Starting at $200." />
                <meta name="keywords" content="commercial video editing, advertisement production, TV commercial editing, social media ad editing, video marketing, corporate video editing, product demo videos, brand video production" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Commercial Video Editing Services | Professional Advertisement Production" />
                <meta property="og:description" content="Professional commercial video editing services for businesses. Expert editors for TV commercials, social media ads, and corporate videos starting at $200." />
                <meta property="og:image" content="https://foxbeep.com/images/commercial-editing.jpg" />
                <meta property="og:url" content="https://foxbeep.com/services/ads-commercial-editing" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Commercial Video Editing Services | Professional Ad Production" />
                <meta name="twitter:description" content="Professional commercial video editing starting at $200. Expert editors for all types of business video content." />
                <meta name="twitter:image" content="https://foxbeep.com/images/commercial-editing.jpg" />
                
                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://foxbeep.com/services/ads-commercial-editing" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="author" content="Foxbeep" />
                <meta name="geo.region" content="NP-03" />
                <meta name="geo.placename" content="Bhaktapur" />
                <meta name="geo.position" content="27.6728;85.4298" />
                <meta name="ICBM" content="27.6728, 85.4298" />
                
                {/* Structublue Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structublueData) }}
                />
            </Head>

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-animated-blue text-white py-28">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Commercial Video Editing
                            <br />
                            <span className="text-yellow-300">That Converts</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            Professional commercial video editing and advertisement production services 
                            that drive results for your business and boost your brand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <button className="cursor-pointer bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                                    Start Your Campaign
                                </button>
                            </Link>
                            <Link href="/work">
                                <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                                    View Our Portfolio
                                </button>
                            </Link>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold">200+</div>
                                <div className="text-sm opacity-80">Ads Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">4.9★</div>
                                <div className="text-sm opacity-80">Client Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">72h</div>
                                <div className="text-sm opacity-80">Fast Delivery</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="max-w-7xl mx-auto py-8 px-4 md:px-6 xl:px-8 py-20 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Commercial Editing Services
                            </h2>
                            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                                We create compelling video content that drives engagement and converts viewers into customers
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-600 flex items-center">
                                                <span className="text-green-500 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Industries We Serve
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Creating targeted video content for diverse business sectors
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition"
                                >
                                    <div className="text-3xl mb-3">{industry.icon}</div>
                                    <h3 className="font-semibold text-gray-800">{industry.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Transparent Pricing
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Professional video editing packages designed for your business needs
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-8 ${
                                        plan.popular
                                            ? 'bg-blue-600 text-white transform scale-105'
                                            : 'bg-white border-2 border-gray-200'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4">
                                            <span className="bg-yellow-400 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
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
                                            plan.popular ? 'text-white' : 'text-blue-600'
                                        }`}>
                                            {plan.price}
                                        </div>
                                        <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                            {plan.duration}
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-center ${
                                                plan.popular ? 'text-white' : 'text-gray-600'
                                            }`}>
                                                <span className={`mr-3 ${
                                                    plan.popular ? 'text-yellow-400' : 'text-green-500'
                                                }`}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-3 rounded-lg font-semibold transition ${
                                        plan.popular
                                            ? 'bg-white text-blue-600 hover:bg-gray-100'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
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
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Our Process
                            </h2>
                            <p className="text-2xl text-gray-600">
                                From concept to final delivery, we make it simple and professional
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Brief & Strategy</h3>
                                <p className="text-gray-600">We understand your goals, target audience, and brand requirements</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Concept</h3>
                                <p className="text-gray-600">We develop creative concepts and storyboards for your approval</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Production & Editing</h3>
                                <p className="text-gray-600">Professional editing with motion graphics, color grading, and effects</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Review & Deliver</h3>
                                <p className="text-gray-600">Multiple format delivery optimized for your chosen platforms</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-2xl text-white">
                                Everything you need to know about our commercial video editing services
                            </p>
                        </div>
                        
                        <div className="max-w-3xl mx-auto space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                                    <p className="text-gray-50 leading-relaxed">{faq.answer}</p>
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