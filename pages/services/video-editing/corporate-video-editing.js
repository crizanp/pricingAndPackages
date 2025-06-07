import TextHeroSection from "@/components/home/textHero";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function CorporateVideoEditing() {
    const [activeService, setActiveService] = useState(0);

    // Structured Data for Corporate Video Editing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Corporate Video Editing Services",
        "description": "Professional corporate video editing services for training videos, marketing content, company presentations, webinars, and executive communications. Enterprise-grade quality with fast turnaround.",
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
        "serviceType": "Corporate Video Editing",
        "areaServed": "Worldwide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89"
        },
        "priceRange": "$200 - $2500"
    };

    const services = [
        {
            title: "Training Videos",
            description: "Engaging educational content that improves employee learning and retention",
            features: ["Interactive elements", "Progress tracking", "Multi-language support", "SCORM compatibility"],
            icon: "🎓"
        },
        {
            title: "Marketing Videos",
            description: "Compelling promotional content that drives business growth and brand awareness",
            features: ["Brand storytelling", "Call-to-action optimization", "A/B test versions", "Analytics integration"],
            icon: "📈"
        },
        {
            title: "Executive Presentations",
            description: "Professional presentations that communicate leadership vision effectively",
            features: ["Teleprompter support", "Multi-camera editing", "Graphics integration", "Board-ready quality"],
            icon: "👔"
        },
        {
            title: "Product Demos",
            description: "Clear demonstrations that showcase your products' value and features",
            features: ["Screen recording", "Annotation overlays", "Feature highlighting", "Customer testimonials"],
            icon: "💻"
        },
        {
            title: "Company Culture",
            description: "Authentic content that showcases your workplace and attracts top talent",
            features: ["Employee interviews", "Behind-the-scenes", "Recruitment focus", "Social media ready"],
            icon: "🏢"
        },
        {
            title: "Webinar Content",
            description: "Post-event editing that maximizes the value of your webinar investment",
            features: ["Highlight reels", "Chapter markers", "Q&A extraction", "Multi-format output"],
            icon: "🌐"
        }
    ];

    const pricingPlans = [
        {
            name: "Startup",
            price: "$200",
            duration: "per video",
            features: [
                "Basic editing & cuts",
                "Corporate branding",
                "Background music",
                "Text overlays",
                "48-72h delivery",
                "2 revisions included"
            ]
        },
        {
            name: "Business Pro",
            price: "$800",
            duration: "5 videos/month",
            features: [
                "Advanced editing suite",
                "Motion graphics",
                "Color correction",
                "Multi-camera editing",
                "Custom animations",
                "Priority support",
                "5 revisions per video"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "$2500",
            duration: "unlimited/month",
            features: [
                "Premium editing suite",
                "Dedicated editor",
                "Brand style guide",
                "Rush delivery (24h)",
                "Analytics & reporting",
                "Account management",
                "Unlimited revisions"
            ]
        }
    ];

    const deliveryFormats = [
        { format: "4K Ultra HD", specs: "3840x2160", use: "Premium presentations" },
        { format: "Full HD", specs: "1920x1080", use: "Standard corporate" },
        { format: "HD Ready", specs: "1280x720", use: "Web & streaming" },
        { format: "Square", specs: "1080x1080", use: "Social media" },
        { format: "Vertical", specs: "1080x1920", use: "Mobile first" },
        { format: "Widescreen", specs: "2560x1440", use: "Executive displays" },
        { format: "Conference", specs: "1024x768", use: "Meeting rooms" },
        { format: "Web Optimized", specs: "854x480", use: "Fast streaming" }
    ];

    const faqs = [
        {
            question: "How do you ensure brand consistency across all corporate videos?",
            answer: "We create a comprehensive brand style guide that includes your color palette, fonts, logo usage, music preferences, and visual guidelines. This ensures every video maintains your corporate identity and professional standards."
        },
        {
            question: "Can you handle confidential or sensitive corporate content?",
            answer: "Absolutely. We sign NDAs for all corporate projects and have secure file transfer protocols. Our team is experienced in handling sensitive business information with complete confidentiality and professionalism."
        },
        {
            question: "What's the typical turnaround time for corporate video projects?",
            answer: "Standard projects are delivered within 3-5 business days. Complex multi-camera edits may take 7-10 days. We offer rush delivery options for urgent corporate communications or time-sensitive announcements."
        },
        {
            question: "Do you provide multiple format outputs for different use cases?",
            answer: "Yes! We deliver your videos in multiple formats optimized for different platforms - high-res for presentations, web-optimized for streaming, mobile-friendly versions, and archive-quality masters for future use."
        },
        {
            question: "Can you integrate our existing brand assets and templates?",
            answer: "Definitely. We work with your existing brand guidelines, PowerPoint templates, logo files, and corporate style guides to ensure seamless integration with your current marketing materials and brand identity."
        },
        {
            question: "How do you handle large corporate video projects with multiple stakeholders?",
            answer: "We assign a dedicated project manager for enterprise clients, provide shared review portals for stakeholder feedback, maintain detailed revision logs, and offer scheduled check-ins to ensure smooth project coordination."
        }
    ];

    const videoTypes = [
        { type: "Internal Communications", description: "CEO messages, company updates, policy announcements" },
        { type: "Sales & Marketing", description: "Product launches, case studies, customer success stories" },
        { type: "Training & Education", description: "Onboarding, compliance, skill development, safety training" },
        { type: "Event Coverage", description: "Conferences, trade shows, corporate events, award ceremonies" },
        { type: "Recruitment", description: "Company culture, employee testimonials, job descriptions" },
        { type: "Investor Relations", description: "Quarterly reports, annual meetings, financial presentations" }
    ];

    const industries = [
        { name: "Technology", icon: "💻", specialization: "Product demos, software tutorials" },
        { name: "Healthcare", icon: "🏥", specialization: "Medical training, patient education" },
        { name: "Finance", icon: "💰", specialization: "Compliance, investor communications" },
        { name: "Manufacturing", icon: "🏭", specialization: "Safety training, process documentation" },
        { name: "Education", icon: "🎓", specialization: "Online courses, faculty presentations" },
        { name: "Non-Profit", icon: "🤝", specialization: "Impact stories, fundraising campaigns" }
    ];

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>Corporate Video Editing Services | Professional Business Videos | Foxbeep</title>
                <meta name="description" content="Professional corporate video editing services for training videos, marketing content, executive presentations, and company communications. Enterprise-grade quality starting at $200." />
                <meta name="keywords" content="corporate video editing, business video production, training video editing, executive presentation videos, company video editing, professional video services, marketing video editing" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Corporate Video Editing Services | Professional Business Content" />
                <meta property="og:description" content="Transform your corporate content into professional videos that drive business results. Expert editing for all types of business communications." />
                <meta property="og:image" content="https://foxbeep.com/images/corporate-video-editing.jpg" />
                <meta property="og:url" content="https://foxbeep.com/services/corporate-video-editing" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Corporate Video Editing | Professional Business Videos" />
                <meta name="twitter:description" content="Enterprise-grade video editing services for corporate communications, training, and marketing content." />
                <meta name="twitter:image" content="https://foxbeep.com/images/corporate-video-editing.jpg" />
                
                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://foxbeep.com/services/corporate-video-editing" />
                
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
<section className="bg-animated-purple text-white py-28">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Corporate Video Editing
                            <br />
                            <span className="text-yellow-300">That Drives Results</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            Transform your corporate content into professional videos that engage employees, 
                            attract customers, and communicate your brand vision effectively.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <button className="cursor-pointer bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-300 transition">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link href="/work">
                                <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition">
                                    View Corporate Portfolio
                                </button>
                            </Link>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold">200+</div>
                                <div className="text-sm opacity-80">Corporate Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">1000+</div>
                                <div className="text-sm opacity-80">Videos Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">48h</div>
                                <div className="text-sm opacity-80">Standard Delivery</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="max-w-7xl mx-auto py-8 px-4 md:px-6 xl:px-8 py-20 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Corporate Video Solutions
                            </h2>
                            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                                Comprehensive video editing services tailored for business communications and corporate needs
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

                {/* Industries Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Industry Expertise
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Specialized knowledge across diverse business sectors and requirements
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition"
                                >
                                    <div className="text-3xl mb-3">{industry.icon}</div>
                                    <h3 className="font-bold text-gray-800 mb-2">{industry.name}</h3>
                                    <p className="text-sm text-gray-600">{industry.specialization}</p>
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
                                Corporate Content Types
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Professional editing for every aspect of your corporate communication strategy
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {videoTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-lg p-6 border border-purple-100"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{type.type}</h3>
                                    <p className="text-gray-600">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery Formats */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Multi-Format Delivery
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Optimized formats for every corporate use case and platform requirement
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {deliveryFormats.map((format, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition"
                                >
                                    <h3 className="font-bold text-gray-800 mb-2">{format.format}</h3>
                                    <p className="text-sm text-purple-600 mb-1">{format.specs}</p>
                                    <p className="text-xs text-gray-600">{format.use}</p>
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
                                Corporate Pricing Plans
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Scalable solutions designed for businesses from startups to enterprises
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-8 ${
                                        plan.popular
                                            ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white transform scale-105'
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
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                                Our Corporate Process
                            </h2>
                            <p className="text-2xl text-gray-600">
                                Streamlined workflow designed for professional corporate video production
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Brief & Assets</h3>
                                <p className="text-gray-600">Share your objectives, brand guidelines, and raw footage through secure channels</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Strategy & Planning</h3>
                                <p className="text-gray-600">We develop the editing approach aligned with your corporate communication goals</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Edit</h3>
                                <p className="text-gray-600">Expert editing with corporate branding, graphics, and professional polish</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Review & Deliver</h3>
                                <p className="text-gray-600">Stakeholder review process and delivery in all required formats</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-slate-900">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-2xl text-gray-300">
                                Common questions about corporate video editing services
                            </p>
                        </div>
                        
                        <div className="max-w-3xl mx-auto space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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