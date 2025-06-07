import TextHeroSection from "@/components/home/textHero";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function EventVideoEditing() {
    const [activeService, setActiveService] = useState(0);

    // Structured Data for Event Video Editing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Event Video Editing & Production Services",
        "description": "Professional event video editing services for weddings, corporate events, conferences, concerts, and special occasions. Expert editors with cinematic quality and fast turnaround.",
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
        "serviceType": "Event Video Editing",
        "areaServed": "Worldwide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156"
        },
        "priceRange": "$300 - $3000"
    };

    const services = [
        {
            title: "Wedding Videos",
            description: "Cinematic wedding films that capture every precious moment and emotion",
            features: ["Highlight reels", "Ceremony & reception", "Multi-camera sync"],
            icon: "💍"
        },
        {
            title: "Corporate Events",
            description: "Professional event documentation for conferences, seminars, and company gatherings",
            features: ["Keynote presentations", "Panel discussions", "Networking moments"],
            icon: "🏢"
        },
        {
            title: "Concerts & Performances",
            description: "Dynamic music and performance videos with professional audio syncing",
            features: ["Multi-angle coverage", "Audio enhancement", "Stage lighting optimization"],
            icon: "🎵"
        },
        {
            title: "Special Occasions",
            description: "Memorable videos for birthdays, anniversaries, graduations, and celebrations",
            features: ["Personal storytelling", "Guest messages", "Custom themes"],
            icon: "🎉"
        }
    ];

    const pricingPlans = [
        {
            name: "Highlight Package",
            price: "$300",
            duration: "3-5 minute video",
            features: [
                "Best moments compilation",
                "Background music sync",
                "Basic color correction",
                "1 format delivery",
                "3 revisions included"
            ]
        },
        {
            name: "Complete Event",
            price: "$800",
            duration: "15-30 minute video",
            features: [
                "Full event documentation",
                "Professional color grading",
                "Multi-camera editing",
                "Custom transitions",
                "Audio enhancement",
                "Multiple format delivery",
                "5 revisions included"
            ],
            popular: true
        },
        {
            name: "Cinematic Production",
            price: "$3000",
            duration: "Full production package",
            features: [
                "Cinematic storytelling",
                "Advanced color grading",
                "Custom motion graphics",
                "Professional audio mixing",
                "Drone footage integration",
                "Same-day highlights",
                "Unlimited revisions"
            ]
        }
    ];

    const faqs = [
        {
            question: "How long does event video editing typically take?",
            answer: "Highlight reels usually take 5-7 days, while full event videos can take 2-3 weeks depending on the length and complexity. We offer rush delivery for urgent requests."
        },
        {
            question: "Can you work with footage from multiple cameras?",
            answer: "Absolutely! We specialize in multi-camera editing and can sync footage from professional cameras, smartphones, and drone footage to create a comprehensive event video."
        },
        {
            question: "Do you provide music licensing for event videos?",
            answer: "Yes, we can provide royalty-free music that fits your event's mood. For specific licensed songs, we'll guide you through the licensing process or suggest similar alternatives."
        },
        {
            question: "What formats do you deliver the final video in?",
            answer: "We deliver in multiple formats including HD/4K MP4 for sharing, optimized versions for social media platforms, and high-quality files for archival purposes."
        },
        {
            question: "Can you create different versions for different audiences?",
            answer: "Yes! We can create a full-length version for close family and friends, shorter highlight reels for social media, and even teaser videos for immediate sharing."
        },
        {
            question: "Do you enhance audio quality in event videos?",
            answer: "Definitely! We clean up audio, enhance speech clarity, balance music levels, and can even add professional voice-overs or narration if needed."
        }
    ];

    const eventTypes = [
        { name: "Weddings", icon: "💒" },
        { name: "Corporate Events", icon: "🎯" },
        { name: "Concerts", icon: "🎤" },
        { name: "Conferences", icon: "🎪" },
        { name: "Birthdays", icon: "🎂" },
        { name: "Graduations", icon: "🎓" },
        { name: "Sports Events", icon: "⚽" },
        { name: "Festivals", icon: "🎭" }
    ];

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>Event Video Editing Services | Professional Event Videography | Foxbeep</title>
                <meta name="description" content="Professional event video editing services for weddings, corporate events, concerts, and special occasions. Expert editors creating cinematic memories starting at $300." />
                <meta name="keywords" content="event video editing, wedding video editing, corporate event videos, concert video editing, event videography, professional video editing, event documentation, celebration videos" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Event Video Editing Services | Professional Event Videography" />
                <meta property="og:description" content="Professional event video editing services for all occasions. Expert editors creating cinematic memories and professional event documentation starting at $300." />
                <meta property="og:image" content="https://foxbeep.com/images/event-editing.jpg" />
                <meta property="og:url" content="https://foxbeep.com/services/event-video-editing" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Event Video Editing Services | Professional Event Videography" />
                <meta name="twitter:description" content="Professional event video editing starting at $300. Expert editors for weddings, corporate events, and special occasions." />
                <meta name="twitter:image" content="https://foxbeep.com/images/event-editing.jpg" />
                
                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://foxbeep.com/services/event-video-editing" />
                
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
                <section className="bg-animated-pink text-white py-28">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Event Video Editing
                            <br />
                            <span className="text-yellow-300">Cinematic Memories</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            Professional event video editing services that transform your special moments 
                            into cinematic masterpieces you'll treasure forever.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <button className="cursor-pointer bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link href="/work">
                                <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-pink-600 transition">
                                    View Event Videos
                                </button>
                            </Link>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold">300+</div>
                                <div className="text-sm opacity-80">Events Edited</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">4.9★</div>
                                <div className="text-sm opacity-80">Client Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">7 Days</div>
                                <div className="text-sm opacity-80">Avg. Delivery</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="max-w-7xl mx-auto py-8 px-4 md:px-6 xl:px-8 py-20 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Event Video Services
                            </h2>
                            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                                We specialize in capturing and editing the essence of your special moments
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

                {/* Event Types Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Events We Cover
                            </h2>
                            <p className="text-2xl text-gray-600">
                                From intimate gatherings to grand celebrations, we edit it all
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {eventTypes.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition"
                                >
                                    <div className="text-3xl mb-3">{event.icon}</div>
                                    <h3 className="font-semibold text-gray-800">{event.name}</h3>
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
                                Event Editing Packages
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Flexible pricing options for every type of event and budget
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-8 ${
                                        plan.popular
                                            ? 'bg-pink-600 text-white transform scale-105'
                                            : 'bg-white border-2 border-gray-200'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4">
                                            <span className="bg-yellow-400 text-pink-600 px-3 py-1 rounded-full text-sm font-bold">
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
                                            plan.popular ? 'text-white' : 'text-pink-600'
                                        }`}>
                                            {plan.price}
                                        </div>
                                        <p className={`${plan.popular ? 'text-pink-100' : 'text-gray-600'}`}>
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
                                            ? 'bg-white text-pink-600 hover:bg-gray-100'
                                            : 'bg-pink-600 text-white hover:bg-pink-700'
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
                                Our Editing Process
                            </h2>
                            <p className="text-2xl text-gray-600">
                                From raw footage to cinematic masterpiece - here's how we work
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Footage Review</h3>
                                <p className="text-gray-600">We carefully review all footage and identify the best moments</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Story Structure</h3>
                                <p className="text-gray-600">We create a narrative flow that captures the event's essence</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Editing</h3>
                                <p className="text-gray-600">Color grading, audio enhancement, and seamless transitions</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Final Delivery</h3>
                                <p className="text-gray-600">Multiple formats optimized for sharing and archiving</p>
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
                                Everything you need to know about our event video editing services
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