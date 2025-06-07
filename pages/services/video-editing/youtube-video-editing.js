import TextHeroSection from "@/components/home/textHero";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function YouTubeVideoEditing() {
    const [activeService, setActiveService] = useState(0);

    // Structured Data for YouTube Video Editing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "YouTube Video Editing Services",
        "description": "Professional YouTube video editing services for content creators, tutorials, vlogs, gaming videos, and YouTube Shorts. Expert editors with fast turnaround.",
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
        "serviceType": "YouTube Video Editing",
        "areaServed": "Worldwide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
        },
        "priceRange": "$50 - $500"
    };

    const services = [
        {
            title: "YouTube Tutorials",
            description: "Educational content with clear explanations and engaging visuals",
            features: ["Screen recording sync", "Callout animations", "Clear audio editing"],
            icon: "📚"
        },
        {
            title: "Vlogs & Lifestyle",
            description: "Personal stories with smooth transitions and engaging pacing",
            features: ["Storytelling flow", "Color grading", "Music synchronization"],
            icon: "🎬"
        },
        {
            title: "YouTube Shorts",
            description: "Vertical short-form content optimized for maximum engagement",
            features: ["Hook-focused intros", "Trending effects", "Platform optimization"],
            icon: "📱"
        },
        {
            title: "Gaming Videos",
            description: "Gaming content with highlights, commentary sync, and effects",
            features: ["Highlight reels", "Commentary sync", "Gaming overlays"],
            icon: "🎮"
        }
    ];

    const pricingPlans = [
        {
            name: "Basic Edit",
            price: "$50",
            duration: "Up to 10 minutes",
            features: [
                "Basic cuts and transitions",
                "Audio enhancement",
                "Simple graphics",
                "2 revisions included"
            ]
        },
        {
            name: "Standard Edit",
            price: "$150",
            duration: "Up to 20 minutes",
            features: [
                "Advanced editing",
                "Color correction",
                "Motion graphics",
                "Background music",
                "3 revisions included"
            ],
            popular: true
        },
        {
            name: "Premium Edit",
            price: "$300",
            duration: "Up to 30 minutes",
            features: [
                "Professional editing",
                "Custom animations",
                "Advanced effects",
                "Thumbnail design",
                "Unlimited revisions"
            ]
        }
    ];

    const faqs = [
        {
            question: "How long does YouTube video editing take?",
            answer: "Most YouTube videos are completed within 2-5 days, depending on length and complexity. Rush delivery is available for urgent projects."
        },
        {
            question: "What file formats do you accept?",
            answer: "We accept all major video formats including MP4, MOV, AVI, and raw footage from any camera or recording device."
        },
        {
            question: "Do you provide YouTube thumbnails?",
            answer: "Yes! Custom YouTube thumbnails are included with our Standard and Premium packages, designed to maximize click-through rates."
        },
        {
            question: "Can you optimize videos for YouTube SEO?",
            answer: "Absolutely! We optimize video length, pacing, and engagement elements to improve YouTube algorithm performance and viewer retention."
        }
    ];

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>YouTube Video Editing Services | Professional YouTube Editors | Foxbeep</title>
                <meta name="description" content="Professional YouTube video editing services for content creators. Expert editors for tutorials, vlogs, gaming videos, and YouTube Shorts. Fast turnaround, affordable pricing starting at $50." />
                <meta name="keywords" content="YouTube video editing, YouTube editor, professional video editing, YouTube content creation, video editing services, YouTube Shorts editing, gaming video editing, vlog editing" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="YouTube Video Editing Services | Professional YouTube Editors" />
                <meta property="og:description" content="Professional YouTube video editing services with fast turnaround. Expert editors for all types of YouTube content starting at $50." />
                <meta property="og:image" content="https://foxbeep.com/images/youtube-editing.jpg" />
                <meta property="og:url" content="https://foxbeep.com/services/youtube-video-editing" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="YouTube Video Editing Services | Professional Editors" />
                <meta name="twitter:description" content="Professional YouTube video editing starting at $50. Fast turnaround for all YouTube content types." />
                <meta name="twitter:image" content="https://foxbeep.com/images/youtube-editing.jpg" />

                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://foxbeep.com/services/youtube-video-editing" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <div className="min-h-screen  bg-white">

                {/* Hero Section */}
                <section className="bg-animated-red text-white py-28">

                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            YouTube Video Editing
                            <br />
                            <span className="text-yellow-300">Made Simple</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            Professional YouTube video editing services to help your channel grow.
                            From tutorials to vlogs, we make your content shine.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <button className="cursor-pointer bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                                    Start Your Project
                                </button></Link>
                            <Link href="work"><button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition">
                                View Our Work
                            </button></Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold">500+</div>
                                <div className="text-sm opacity-80">Videos Edited</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">4.9★</div>
                                <div className="text-sm opacity-80">Client Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">48h</div>
                                <div className="text-sm opacity-80">Fast Delivery</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="max-w-7xl mx-auto py-8 px-4 md:px-6 xl:px-8 py-20 bg-white">
                    <div className="container mx-auto ">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">YouTube Editing Services</h2>
                            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                                We specialize in all types of YouTube content to help your channel succeed
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

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">Simple Pricing</h2>
                            <p className="text-2xl text-gray-600">Choose the plan that fits your needs</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-8 ${plan.popular
                                            ? 'bg-red-600 text-white transform scale-105'
                                            : 'bg-white border-2 border-gray-200'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4">
                                            <span className="bg-yellow-400 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                                            {plan.name}
                                        </h3>
                                        <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-red-600'}`}>
                                            {plan.price}
                                        </div>
                                        <p className={`${plan.popular ? 'text-red-100' : 'text-gray-600'}`}>
                                            {plan.duration}
                                        </p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-center ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                                                <span className={`mr-3 ${plan.popular ? 'text-yellow-400' : 'text-green-500'}`}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular
                                            ? 'bg-white text-red-600 hover:bg-gray-100'
                                            : 'bg-red-600 text-white hover:bg-red-700'
                                        }`}>
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                            <p className="text-2xl text-white">Everything you need to know about our YouTube editing services</p>
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