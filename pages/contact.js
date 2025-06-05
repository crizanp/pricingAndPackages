import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar/ServerNavbar';
import TextHeroSection from '@/components/home/textHero';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: '',
        budget: '',
        timeline: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Add your form submission logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                projectType: '',
                budget: '',
                timeline: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Foxbeep - Professional Software Development Services",
        "description": "Get in touch with Foxbeep for custom software development, web development, mobile apps, and digital solutions. Free consultation available.",
        "url": "https://foxbeep.com/contact",
        "mainEntity": {
            "@type": "Organization",
            "name": "Foxbeep",
            "url": "https://foxbeep.com",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+977-9810570201",
                    "contactType": "Customer Service",
                    "availableLanguage": ["English", "Nepali"]
                },
                {
                    "@type": "ContactPoint",
                    "email": "info@foxbeep.com",
                    "contactType": "Customer Service"
                }
            ],
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "Nepal",
                "addressLocality": "Bhaktapur"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.7172",
                "longitude": "85.3240"
            }
        }
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I contact Foxbeep for a project consultation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Foxbeep through our contact form, email us at info@foxbeep.com, or call us at +977-9810570201. We offer free initial consultations for all projects."
                }
            },
            {
                "@type": "Question",
                "name": "What information should I include when contacting Foxbeep?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Please include your project requirements, timeline, budget range, and any specific technologies or features you need. This helps us provide you with the most accurate proposal."
                }
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Essential Meta Tags */}
                <title>Contact Foxbeep - Professional Software Development & Digital Solutions</title>
                <meta name="description" content="Contact Foxbeep for custom software development, web development, mobile apps & digital marketing. Free consultation. 1,300+ projects delivered. Get started today!" />
                <meta name="keywords" content="contact foxbeep, software development consultation, web development quote, mobile app development, digital marketing services, custom software solutions Nepal" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Contact Foxbeep - Get Your Custom Software Solution Today" />
                <meta property="og:description" content="Ready to start your project? Contact Foxbeep for professional software development, web development, and digital solutions. Free consultation available." />
                <meta property="og:image" content="https://foxbeep.com/contact-og-image.png" />
                <meta property="og:url" content="https://foxbeep.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Foxbeep" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Foxbeep - Professional Software Development" />
                <meta name="twitter:description" content="Get in touch for custom software development, web development, and digital solutions. Free consultation available." />
                <meta name="twitter:image" content="https://foxbeep.com/contact-og-image.png" />

                {/* Technical Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />

                {/* Local Business Meta Tags */}
                <meta name="geo.region" content="NP" />
                <meta name="geo.placename" content="Bhaktapur, Nepal" />
                <meta name="geo.position" content="27.7172;85.3240" />
                <meta name="ICBM" content="27.7172, 85.3240" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://foxbeep.com/contact" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
                />

                {/* Preconnect for Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://maps.googleapis.com" />
            </Head>

            <Navbar />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500 opacity-20 pointer-events-none z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                            {/* Left Column (Heading) */}
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                    Got an idea for
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-black">
                                        your project?
                                    </span>
                                </h1>
                            </div>

                            {/* Right Column (Description) */}
                            <div>
                                <p className="text-xl md:text-xl text-gray-600 leading-relaxed">
                                    We'd love to learn more about you and what we can design and build together.
                                    Let's turn your vision into reality with our expert development team.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>



                {/* Contact Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* Contact Form */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Project</h2>
                                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Phone*
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                                                placeholder="+977-XXXXXXXXXX"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Project Type
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                                            >
                                                <option value="">Select project type</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="mobile-app">Mobile App</option>
                                                <option value="custom-software">Custom Software</option>
                                                <option value="e-commerce">E-commerce</option>
                                                <option value="digital-marketing">Digital Marketing</option>
                                                <option value="video-editing">Video Editing</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div>
                                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Timeline
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="asap">ASAP</option>
                                            <option value="1-month">Within 1 month</option>
                                            <option value="3-months">Within 3 months</option>
                                            <option value="6-months">Within 6 months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Message*
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900 resize-none"
                                            placeholder="Tell us about your project, goals, and any specific requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending Message...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>

                                    {submitStatus === 'success' && (
                                        <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                                            <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                            <p className="text-red-800 font-medium">Something went wrong. Please try again or contact us directly.</p>
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* Contact Information & Map */}
                            <div className="space-y-8">

                                {/* Contact Info Cards */}
                                <div className="grid gap-6">
                                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Email Us</h3>
                                                <a href="mailto:info@foxbeep.com" className="text-black hover:text-blue-700 transition duration-200">
                                                    info@foxbeep.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Call Us</h3>
                                                <a href="tel:+977-9810570201" className="text-black hover:text-green-700 transition duration-200">
                                                    +977-9810570201
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Visit Us</h3>
                                                <p className="text-black">Bhaktapur, Nepal</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Schedule Meeting Button */}
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">Schedule a Free Consultation</h3>
                                    <p className="mb-4 opacity-90">Book a 30-minute call to discuss your project requirements.</p>
                                    <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition duration-200 w-full">
                                        Schedule Meeting
                                    </button>
                                </div>

                                {/* Map */}
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                    <div className="h-64 bg-gray-200 relative">
                                        {/* Replace with actual Google Maps embed */}
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.55808884846!2d85.24216073749999!3d27.70897085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sBhaktapur%2C%20Nepal!5e0!3m2!1sen!2sus!4v1635787772862!5m2!1sen!2sus"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Foxbeep Location - Bhaktapur, Nepal"
                                        ></iframe>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span className="font-medium">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span className="font-medium">Closed</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-green-50 rounded-xl">
                                        <p className="text-green-800 text-sm">
                                            <span className="font-medium">Available 24/7</span> for urgent support requests
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-400">Quick answers to common questions about our services</p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "How long does it take to get a project quote?",
                                    answer: "We typically provide detailed project quotes within 24-48 hours after our initial consultation."
                                },
                                {
                                    question: "Do you offer ongoing support after project completion?",
                                    answer: "Yes, we provide comprehensive support packages including maintenance, updates, and technical assistance."
                                },
                                {
                                    question: "Can you work with existing teams or systems?",
                                    answer: "Absolutely! We have experience integrating with existing workflows, teams, and technical infrastructures."
                                },
                                {
                                    question: "What technologies do you specialize in?",
                                    answer: "We work with modern technologies including React, Node.js, Python, mobile development, cloud services, and more."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
                                    <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                                    <p className="text-gray-300">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <TextHeroSection />
            </main>
        </>
    );
}