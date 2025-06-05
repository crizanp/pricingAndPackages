import React, { useState } from 'react';
import Head from 'next/head';
import { ChevronRight, Monitor, Video, TrendingUp, Blocks, Smartphone, Brain, Globe, Code, ShoppingCart, Building, GraduationCap, Heart, Newspaper, Factory, Play, Target, Instagram, Search, Send, Mail, Users, Cpu, Database, ArrowRight } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';
import Link from 'next/link';

const servicesData = [
  {
    title: 'Website Development',
    icon: Monitor,
    color: 'blue',
    description: 'Custom web solutions tailored to your business needs with modern technologies and responsive design',
    slug: 'website-development',
    items: [
      { name: 'WordPress Development', href: '/services/wordpress-development', icon: Globe, description: 'Custom WordPress websites with themes and plugins' },
      { name: 'Ecommerce Development', href: '/services/ecommerce-development', icon: ShoppingCart, description: 'Online stores with secure payment integration' },
      { name: 'Business Website', href: '/services/business-website', icon: Building, description: 'Professional corporate websites for businesses' },
      { name: 'Educational Website', href: '/services/educational-website', icon: GraduationCap, description: 'Learning management systems and educational platforms' },
      { name: 'Healthcare Website', href: '/services/healthcare-website', icon: Heart, description: 'HIPAA compliant healthcare and medical websites' },
      { name: 'News and Media Website', href: '/services/news-media-website', icon: Newspaper, description: 'Content management systems for news and media' },
      { name: 'Manufacturing Website', href: '/services/manufacturing-website', icon: Factory, description: 'Industrial and manufacturing company websites' },
    ]
  },
  {
    title: 'Video Editing',
    icon: Video,
    color: 'purple',
    description: 'Professional video editing services for marketing, social media, and corporate content',
    slug: 'video-editing',
    items: [
      { name: 'YouTube Video Editing', href: '/services/video-editing#youtube-video-editing', icon: Play, description: 'Engaging YouTube content editing and optimization' },
      { name: 'Ads & Commercial Editing', href: '/services/video-editing#ads-and-commercial', icon: Target, description: 'High-converting advertisement and commercial videos' },
      { name: 'Social Media Video Editing', href: '/services/video-editing#social-media-video-editing', icon: Instagram, description: 'Short-form content for Instagram, TikTok, and Facebook' },
      { name: 'Corporate Video Editing', href: '/services/video-editing#corporate-video-editing', icon: Building, description: 'Professional corporate presentations and training videos' },
      { name: 'Event Video Editing', href: '/services/video-editing#event-video-editing', icon: Video, description: 'Wedding, conference, and event video production' },
      { name: 'Whiteboard Animation', href: '/services/video-editing#whiteboard-video-editing', icon: Monitor, description: 'Animated explainer videos and educational content' }
    ]
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    color: 'green',
    description: 'Comprehensive digital marketing strategies to grow your online presence and drive conversions',
    slug: 'digital-marketing',
    items: [
      { name: 'Facebook Ads', href: '/services/digital-marketing#facebook-ads', icon: Target, description: 'Targeted Facebook advertising campaigns for lead generation' },
      { name: 'Instagram Marketing', href: '/services/digital-marketing#instagram-marketing', icon: Instagram, description: 'Instagram growth strategies and content marketing' },
      { name: 'Google & YouTube Ads', href: '/services/digital-marketing#google-youtube-ads', icon: Search, description: 'PPC campaigns on Google and YouTube platforms' },
      { name: 'SEO', href: '/services/digital-marketing#seo', icon: TrendingUp, description: 'Search engine optimization for better rankings' },
      { name: 'Telegram Promotion', href: '/services/digital-marketing#telegram-promotion', icon: Send, description: 'Telegram channel growth and marketing automation' },
      { name: 'Social Media Management', href: '/services/digital-marketing#social-media-management', icon: Users, description: 'Complete social media management and strategy' },
      { name: 'Email Marketing', href: '/services/digital-marketing#email-marketing', icon: Mail, description: 'Email campaigns and marketing automation' }
    ]
  },
  {
    title: 'Blockchain Development',
    icon: Blocks,
    color: 'orange',
    description: 'Cutting-edge blockchain solutions including DApps, NFT marketplaces, and Web3 development',
    slug: 'blockchain-development',
    items: [
      { name: 'NFT Marketplace Development', href: '/services/nft-marketplace-development', icon: Blocks, description: 'Custom NFT marketplaces on various blockchains' },
      { name: 'DApp Development', href: '/services/dapp-development', icon: Code, description: 'Decentralized applications on Ethereum and other chains' },
      { name: 'Web3 Development', href: '/services/web3-development', icon: Globe, description: 'Web3 integration and blockchain-based web applications' },
      { name: 'Telegram Mini Apps', href: '/services/telegram-mini-apps-development', icon: Send, description: 'Blockchain-powered Telegram mini applications' },
    ]
  },
  {
    title: 'Mobile Application',
    icon: Smartphone,
    color: 'indigo',
    description: 'Native and cross-platform mobile app development for iOS and Android platforms',
    slug: 'mobile-application',
    items: [
      { name: 'iOS App Development', href: '/services/ios-app-development', icon: Smartphone, description: 'Native iOS applications with Swift and Objective-C' },
      { name: 'Android App Development', href: '/services/android-app-development', icon: Smartphone, description: 'Native Android apps with Kotlin and Java' },
    ]
  },
  {
    title: 'AI and Big Data',
    icon: Brain,
    color: 'pink',
    description: 'Intelligent solutions powered by artificial intelligence, machine learning, and big data analytics',
    slug: 'ai-big-data',
    items: [
      { name: 'AI Development', href: '/services/ai-development', icon: Brain, description: 'Custom AI solutions and machine learning models' },
      { name: 'Big Data Development', href: '/services/big-data-development', icon: Database, description: 'Big data processing and analytics solutions' },
    ]
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    hover: 'hover:bg-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-600'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    hover: 'hover:bg-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-600'
  },
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-600',
    hover: 'hover:bg-green-100',
    border: 'border-green-200',
    text: 'text-green-600'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    hover: 'hover:bg-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-600'
  },
  indigo: {
    bg: 'bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    hover: 'hover:bg-indigo-100',
    border: 'border-indigo-200',
    text: 'text-indigo-600'
  },
  pink: {
    bg: 'bg-pink-50',
    icon: 'bg-pink-100 text-pink-600',
    hover: 'hover:bg-pink-100',
    border: 'border-pink-200',
    text: 'text-pink-600'
  }
};

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  const MainIcon = service.icon;
  const colors = colorClasses[service.color];

  return (
    <article className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${colors.border} hover:shadow-lg`}>
      <header 
        className="p-6 cursor-pointer"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isExpanded}
        aria-controls={`service-${service.slug}-content`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors.icon} transition-colors`}>
              <MainIcon className="w-7 h-7" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-3 text-sm text-gray-500">
                {service.items.length} services available
              </div>
            </div>
          </div>
          <ChevronRight 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isExpanded ? 'rotate-90' : ''
            }`}
            aria-hidden="true"
          />
        </div>
      </header>
      
      {isExpanded && (
        <div 
          className={`${colors.bg} border-t ${colors.border}`}
          id={`service-${service.slug}-content`}
          role="region"
          aria-label={`${service.title} services`}
        >
          <div className="p-6">
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="navigation" aria-label={`${service.title} service links`}>
              {service.items.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${colors.hover} group`}
                    title={item.description}
                  >
                    <ItemIcon className={`w-4 h-4 ${colors.text}`} aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-900 flex-1">
                      {item.name}
                    </span>
                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </article>
  );
};

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Generate structured data for services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Digital Services by Foxbeep",
    "provider": {
      "@type": "Organization",
      "name": "Foxbeep",
      "url": "https://foxbeep.com",
      "logo": "https://foxbeep.com/logo.png"
    },
    "serviceType": "Digital Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services Catalog",
      "itemListElement": servicesData.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://foxbeep.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://foxbeep.com/services"
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Professional Digital Services | Web Development, Video Editing & Marketing | Foxbeep</title>
        <meta name="description" content="Comprehensive digital services including website development, video editing, digital marketing, blockchain development, mobile apps, and AI solutions. 500+ projects completed with expert team." />
        <meta name="keywords" content="website development, video editing services, digital marketing, blockchain development, mobile app development, AI development, WordPress development, ecommerce development, SEO services, social media marketing" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Digital Services | Web Development & Marketing" />
        <meta property="og:description" content="Expert digital services including website development, video editing, digital marketing, and blockchain solutions. 500+ projects completed worldwide." />
        <meta property="og:image" content="https://foxbeep.com/og-image.png" />
        <meta property="og:url" content="https://foxbeep.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Digital Services | Foxbeep" />
        <meta name="twitter:description" content="Expert digital services including website development, video editing, digital marketing, and blockchain solutions." />
        <meta name="twitter:image" content="https://foxbeep.com/og-image.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-gray-400" aria-hidden="true" />
              </li>
              <li>
                <span className="text-gray-900 font-medium" aria-current="page">
                  Services
                </span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                What We Offer
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                Explore our comprehensive range of professional digital services designed to help your business thrive in the digital landscape. From custom website development to advanced AI solutions.
              </p>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">Our Digital Services</h2>
            <div className="space-y-6">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  isExpanded={expandedService === index}
                  onToggle={() => toggleService(index)}
                />
              ))}
            </div>
          </section>
        </main>

        {/* Stats Section */}
        <section className="bg-black text-white" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">500+</div>
                <div className="mt-2 text-blue-100 text-sm lg:text-base">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">50+</div>
                <div className="mt-2 text-blue-100 text-sm lg:text-base">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">6</div>
                <div className="mt-2 text-blue-100 text-sm lg:text-base">Service Categories</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="mt-2 text-blue-100 text-sm lg:text-base">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        <TextHeroSection/>
      </div>
    </>
  );
}