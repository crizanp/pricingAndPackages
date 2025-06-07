import TextHeroSection from "@/components/home/textHero";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function SocialMediaVideoEditing() {
    const [activeService, setActiveService] = useState(0);

    // Structupruple Data for Social Media Video Editing
    const structuprupleData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Social Media Video Editing Services",
        "description": "Professional social media video editing services for Instagram, TikTok, YouTube, Facebook, and LinkedIn. Expert editors specializing in viral content creation and platform optimization.",
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
        "serviceType": "Social Media Video Editing",
        "areaServed": "Worldwide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156"
        },
        "priceRange": "$50 - $800"
    };

    const services = [
        {
            title: "Instagram Reels",
            description: "Vertical videos optimized for maximum engagement and viral potential",
            features: ["Trending transitions", "Music sync", "Text animations", "Hashtag optimization"],
            icon: "📱"
        },
        {
            title: "TikTok Videos",
            description: "Fast-paced, attention-grabbing content that follows platform trends",
            features: ["Trend integration", "Quick cuts", "Effect overlays", "Sound synchronization"],
            icon: "🎵"
        },
        {
            title: "YouTube Shorts",
            description: "Engaging short-form content optimized for YouTube's algorithm",
            features: ["Hook creation", "Retention editing", "End screen optimization", "Thumbnail suggestions"],
            icon: "▶️"
        },
        {
            title: "LinkedIn Videos",
            description: "Professional content that builds authority and drives business engagement",
            features: ["Professional tone", "Subtitles included", "Brand consistency", "CTA integration"],
            icon: "💼"
        },
        {
            title: "Facebook Content",
            description: "Multi-format videos optimized for Facebook's diverse audience",
            features: ["Auto-captions", "Square/landscape formats", "Story variations", "Engagement hooks"],
            icon: "👥"
        },
        {
            title: "Twitter/X Videos",
            description: "Concise, impactful videos that drive conversations and shares",
            features: ["Quick messaging", "GIF alternatives", "Thread integration", "Viral optimization"],
            icon: "🐦"
        }
    ];

    const pricingPlans = [
        {
            name: "Starter Pack",
            price: "$50",
            duration: "5 videos",
            features: [
                "Basic editing & cuts",
                "Text overlays",
                "Background music",
                "1 platform optimization",
                "24-48h delivery",
                "2 revisions included"
            ]
        },
        {
            name: "Creator Pro",
            price: "$200",
            duration: "15 videos",
            features: [
                "Advanced transitions",
                "Motion graphics",
                "Color correction",
                "Multi-platform formats",
                "Trending audio integration",
                "Custom thumbnails",
                "5 revisions included"
            ],
            popular: true
        },
        {
            name: "Brand Authority",
            price: "$800",
            duration: "50 videos/month",
            features: [
                "Premium editing suite",
                "Brand asset integration",
                "Advanced animations",
                "A/B test variations",
                "Analytics optimization",
                "Priority support",
                "Unlimited revisions"
            ]
        }
    ];

    const platforms = [
        { name: "Instagram", icon: "📷", specs: "1080x1920 (9:16)" },
        { name: "TikTok", icon: "🎵", specs: "1080x1920 (9:16)" },
        { name: "YouTube Shorts", icon: "▶️", specs: "1080x1920 (9:16)" },
        { name: "Facebook", icon: "👥", specs: "1080x1080 (1:1)" },
        { name: "LinkedIn", icon: "💼", specs: "1200x1200 (1:1)" },
        { name: "Twitter/X", icon: "🐦", specs: "1280x720 (16:9)" },
        { name: "Pinterest", icon: "📌", specs: "1000x1500 (2:3)" },
        { name: "Snapchat", icon: "👻", specs: "1080x1920 (9:16)" }
    ];

    const faqs = [
        {
            question: "What makes social media video editing different from regular editing?",
            answer: "Social media editing focuses on quick hooks, platform-specific formats, trending elements, and optimizing for short attention spans. We understand each platform's algorithm and user behavior patterns."
        },
        {
            question: "How quickly can you deliver social media videos?",
            answer: "Standard delivery is 24-48 hours for basic edits, and 3-5 days for complex projects. We also offer same-day rush delivery for trending content that needs immediate posting."
        },
        {
            question: "Do you stay updated with the latest social media trends?",
            answer: "Absolutely! Our team monitors trending sounds, effects, transitions, and formats across all platforms daily. We incorporate current trends to maximize your content's viral potential."
        },
        {
            question: "Can you optimize videos for multiple platforms simultaneously?",
            answer: "Yes! We create multiple format versions from your source material - vertical for TikTok/Instagram, square for Facebook, horizontal for YouTube, ensuring optimal performance on each platform."
        },
        {
            question: "Do you add captions and subtitles to social media videos?",
            answer: "Yes, we include captions for accessibility and engagement. Studies show that 80% of social media videos are watched without sound, so captions are essential for maximum reach."
        },
        {
            question: "Can you help with content strategy and posting schedules?",
            answer: "While we focus on editing, we provide insights on optimal posting times, hashtag suggestions, and content performance tips based on current platform algorithms and best practices."
        }
    ];

    const videoTypes = [
        { type: "Lifestyle Content", description: "Day-in-the-life, behind-the-scenes, personal branding" },
        { type: "Product Showcases", description: "Unboxing, reviews, demonstrations, before/after" },
        { type: "Educational Content", description: "Tutorials, tips, how-tos, quick lessons" },
        { type: "Entertainment", description: "Comedy skits, challenges, reactions, memes" },
        { type: "Business Content", description: "Company culture, testimonials, announcements" },
        { type: "Event Coverage", description: "Live events, conferences, celebrations, highlights" }
    ];

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>Social Media Video Editing Services | Instagram, TikTok, YouTube | Foxbeep</title>
                <meta name="description" content="Professional social media video editing services for Instagram Reels, TikTok, YouTube Shorts, and more. Expert editors who understand viral content creation. Starting at $50." />
                <meta name="keywords" content="social media video editing, Instagram Reels editing, TikTok video editing, YouTube Shorts, Facebook video editing, LinkedIn video content, viral video editing, social media content creation" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Social Media Video Editing Services | Viral Content Creation" />
                <meta property="og:description" content="Professional social media video editing for all platforms. Create viral content with expert editors who understand trends and algorithms." />
                <meta property="og:image" content="https://foxbeep.com/images/social-media-editing.jpg" />
                <meta property="og:url" content="https://foxbeep.com/services/social-media-video-editing" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Social Media Video Editing | Viral Content Creation" />
                <meta name="twitter:description" content="Transform your content into viral social media videos. Expert editing for Instagram, TikTok, YouTube and more." />
                <meta name="twitter:image" content="https://foxbeep.com/images/social-media-editing.jpg" />
                
                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://foxbeep.com/services/social-media-video-editing" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="author" content="Foxbeep" />
                <meta name="geo.region" content="NP-03" />
                <meta name="geo.placename" content="Bhaktapur" />
                <meta name="geo.position" content="27.6728;85.4298" />
                <meta name="ICBM" content="27.6728, 85.4298" />
                
                {/* Structupruple Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuprupleData) }}
                />
            </Head>

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
<section className="bg-animated-purple text-white py-28">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Social Media Video Editing
                            <br />
                            <span className="text-yellow-300">That Goes Viral</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            Transform your content into scroll-stopping videos optimized for Instagram, 
                            TikTok, YouTube, and every major social platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <button className="cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                                    Start Creating
                                </button>
                            </Link>
                            <Link href="/work">
                                <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition">
                                    View Viral Examples
                                </button>
                            </Link>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold">500+</div>
                                <div className="text-sm opacity-80">Videos Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">10M+</div>
                                <div className="text-sm opacity-80">Total Views</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">24h</div>
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
                                Platform-Specific Editing
                            </h2>
                            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                                We create content optimized for each platform's unique algorithm and audience behavior
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border-2 hover:border-purple-200"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-600 flex items-center">
                                                <span className="text-purple-500 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Specifications */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Platform Optimization
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Perfect formats and specifications for every major social platform
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {platforms.map((platform, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition"
                                >
                                    <div className="text-3xl mb-3">{platform.icon}</div>
                                    <h3 className="font-bold text-gray-800 mb-2">{platform.name}</h3>
                                    <p className="text-sm text-gray-600">{platform.specs}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Types Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Content Types We Edit
                            </h2>
                            <p className="text-2xl text-gray-600">
                                From lifestyle vlogs to business content, we handle every type of social media video
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {videoTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-lg p-6 border border-purple-100"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{type.type}</h3>
                                    <p className="text-gray-600">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Creator-Friendly Pricing
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Affordable packages designed for content creators and businesses of all sizes
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-8 ${
                                        plan.popular
                                            ? 'bg-gradient-to-br from-purple-600 to-purple-600 text-white transform scale-105'
                                            : 'bg-white border-2 border-gray-200'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4">
                                            <span className="bg-yellow-400 text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
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
                                            plan.popular ? 'text-white' : 'text-purple-600'
                                        }`}>
                                            {plan.price}
                                        </div>
                                        <p className={`${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                                            {plan.duration}
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-center ${
                                                plan.popular ? 'text-white' : 'text-gray-600'
                                            }`}>
                                                <span className={`mr-3 ${
                                                    plan.popular ? 'text-yellow-400' : 'text-purple-500'
                                                }`}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-3 rounded-lg font-semibold transition ${
                                        plan.popular
                                            ? 'bg-white text-purple-600 hover:bg-gray-100'
                                            : 'bg-purple-600 text-white hover:bg-purple-700'
                                    }`}>
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Our Process
                            </h2>
                            <p className="text-2xl text-gray-600">
                                From raw footage to viral content in just a few simple steps
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Upload Content</h3>
                                <p className="text-gray-600">Send us your raw footage, voice recordings, or content ideas</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Platform Strategy</h3>
                                <p className="text-gray-600">We optimize for your target platforms and incorporate trending elements</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Edit</h3>
                                <p className="text-gray-600">Professional editing with effects, music, and platform-specific optimization</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Multi-Format Delivery</h3>
                                <p className="text-gray-600">Receive optimized versions for all your chosen social platforms</p>
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
                                Everything you need to know about social media video editing
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