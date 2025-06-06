import React, { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Send, User, Mail, MessageSquare } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function FoxbeepTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "Director of Technology, InnovateTech Solutions",
      quote: "Foxbeep managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.",
      initials: "RS",
      rating: 5,
      company: "InnovateTech Solutions"
    },
    {
      name: "Priya Thapa",
      position: "Senior Product Manager, Digital Ventures",
      quote: "Foxbeep transformed our approach to digital solutions. Their innovative thinking and technical expertise brought our most challenging projects to life. The team's dedication to excellence is truly remarkable.",
      initials: "PT",
      rating: 5,
      company: "Digital Ventures"
    },
    {
      name: "Michael Johnson",
      position: "CTO, GlobalStream Solutions",
      quote: "Working with Foxbeep was a game-changer. Their team doesn't just develop solutions; they reimagine possibilities and deliver beyond expectations. Highly recommend their services.",
      initials: "MJ",
      rating: 5,
      company: "GlobalStream Solutions"
    },
    {
      name: "Sita Poudel",
      position: "Founder, EcoTech Innovations",
      quote: "Foxbeep's development approach is revolutionary. They don't just build applications; they create digital experiences that truly make a difference for our business and customers.",
      initials: "SP",
      rating: 5,
      company: "EcoTech Innovations"
    },
    {
      name: "David Thompson",
      position: "VP of Engineering, CloudTech Inc",
      quote: "The professionalism and technical expertise of Foxbeep's team exceeded our expectations. They delivered a robust solution that has significantly improved our operational efficiency.",
      initials: "DT",
      rating: 5,
      company: "CloudTech Inc"
    },
    {
      name: "Kamala Adhikari",
      position: "Chief Innovation Officer, NextGen Systems",
      quote: "Foxbeep understands the unique challenges of modern businesses. Their solutions are not just technically sound but also strategically aligned with our long-term goals.",
      initials: "KA",
      rating: 5,
      company: "NextGen Systems"
    }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFeedbackForm(prev => ({
      ...prev,
      rating
    }));
  };

  const handleFeedbackSubmit = async () => {
    if (!feedbackForm.name || !feedbackForm.email || !feedbackForm.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFeedbackForm({
        name: '',
        email: '',
        company: '',
        message: '',
        rating: 5
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <>
      {/* SEO Meta Tags (would be in document head in real implementation) */}
      <Head>
        <title>Client Testimonials - Foxbeep | Software Development Reviews</title>
        <meta name="description" content="Read authentic client testimonials and reviews for Foxbeep's software development services. 98% client satisfaction rate with 84+ successful projects delivered." />
        <meta name="keywords" content="Foxbeep testimonials, client reviews, software development feedback, app development reviews, digital solutions testimonials" />
        <meta property="og:title" content="Client Testimonials - Foxbeep Software Development" />
        <meta property="og:description" content="Discover why clients love working with Foxbeep. Read real testimonials from satisfied customers." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://foxbeep.com/testimonials" />
      </Head>

      <div>
        <nav className="max-w-7xl mx-auto px-4 py-4" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <a href="/" className="text-gray-500 hover:text-black" itemProp="item">
                                <span itemProp="name">Home</span>
                            </a>
                            <meta itemProp="position" content="1" />
                        </li>
                        <li className="text-gray-400">/</li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span className="text-black font-medium" itemProp="name">Testimonial</span>
                            <meta itemProp="position" content="2" />
                        </li>
                    </ol>
                </nav>
        {/* Header Section with Schema Markup */}
        <header className="flex flex-col lg:flex-row justify-between items-center w-full py-16 px-4 text-black max-w-7xl mx-auto">
          <div className="w-full lg:w-3/4 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6">
              Client Testimonials & Reviews
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black">
              Discover why our clients choose Foxbeep for their software development needs. Read authentic testimonials from satisfied customers.
            </p>
          </div>

          <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
            <div className="flex flex-col items-center lg:items-end">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 mr-2 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold">4.9 Clutch Rating</span>
                  <div className="flex" role="img" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-base">50+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-black text-white min-h-screen">
          {/* Hero Banner */}
          <section className="flex flex-col items-center w-full py-24 px-4 bg-black text-white max-w-7xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              Our clients simply love <span className="text-purple-400">what we do</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
            </p>

            <a href="#feedback" className="mt-6 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Give Feedback
            </a>
          </section>



          {/* All Testimonial Cards */}
          <section className="max-w-7xl mx-auto px-4 w-full py-16" aria-label="Client testimonials">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <blockquote className="text-2xl font-medium mb-8 text-gray-100">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-500 mr-4 flex items-center justify-center text-gray-900 font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-lg">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex" role="img" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Featured Testimonial Carousel */}
            <section className="mt-16 bg-gray-900 rounded-3xl p-8 border border-gray-800" aria-label="Featured testimonial">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Quote className="text-purple-400 w-12 h-12 mb-4" aria-hidden="true" />
                  <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500 mr-4 flex items-center justify-center text-gray-900 font-bold text-xl">
                      {testimonials[currentTestimonial].initials}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-400 text-xl">
                        {testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-gray-500">
                        {testimonials[currentTestimonial].company}
                      </p>
                      <div className="flex mt-2" role="img" aria-label={`${testimonials[currentTestimonial].rating} star rating`}>
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 flex flex-col justify-center">
                  <div className="flex flex-col space-y-4">
                    <h5 className="text-xl font-bold text-white">Browse Reviews</h5>
                    <div className="flex space-x-4">
                      <button
                        onClick={handlePrevTestimonial}
                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextTestimonial}
                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                        aria-label="Next testimonial"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </div>
                    <span className="text-gray-400">
                      {currentTestimonial + 1} / {testimonials.length}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16" aria-label="Company statistics">
              <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-400">
                <h3 className="text-5xl font-bold text-purple-400 mb-2">98%</h3>
                <p className="text-gray-300">Client Satisfaction Rate</p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-400">
                <h3 className="text-5xl font-bold text-purple-400 mb-2">84+</h3>
                <p className="text-gray-300">Successful Projects</p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-400">
                <h3 className="text-5xl font-bold text-purple-400 mb-2">90%</h3>
                <p className="text-gray-300">Client Retention Rate</p>
              </div>
            </section>

            {/* Feedback Form Section */}
            <section className="mt-16 bg-gray-900 rounded-3xl p-8 border border-gray-800" aria-label="Give us feedback" id='feedback'>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Share Your Experience</h3>
                  <p className="text-gray-300 text-lg">
                    We'd love to hear about your experience working with Foxbeep. Your feedback helps us improve our services.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-800 border border-green-600 rounded-lg text-green-100">
                    Thank you for your feedback! We appreciate you taking the time to share your experience.
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={feedbackForm.name}
                        onChange={handleFeedbackChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="inline w-4 h-4 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedbackForm.email}
                        onChange={handleFeedbackChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={feedbackForm.company}
                      onChange={handleFeedbackChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Rating *
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className="focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${star <= feedbackForm.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-600'
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Your Feedback *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={feedbackForm.message}
                      onChange={handleFeedbackChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-vertical"
                      placeholder="Tell us about your experience working with Foxbeep..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleFeedbackSubmit}
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Feedback
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>

      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Foxbeep",
          "url": "https://foxbeep.com",
          "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewBody": testimonial.quote,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": 5
            }
          })),
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.9,
            "reviewCount": testimonials.length
          }
        })
      }} />
    </>
  );
}