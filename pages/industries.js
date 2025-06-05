import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, Building2, Code, Heart, GraduationCap, ShoppingCart, UtensilsCrossed, Plane, Shirt, Users, Truck, Factory, Scale, Wheat } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';

const industries = [
  { 
    name: 'Automotive', 
    href: '/industries/automotive', 
    icon: Building2, 
    description: 'Software for automotive manufacturing, dealerships, and fleet tracking.',
    slug: 'automotive',
    keywords: 'automotive software, car dealership management, vehicle tracking systems'
  },
  { 
    name: 'B2B Software', 
    href: '/industries/b2b-software', 
    icon: Code, 
    description: 'Enterprise tools for automation, workflows, and digital ops.',
    slug: 'b2b-software',
    keywords: 'enterprise software, B2B solutions, business automation, workflow management'
  },
  { 
    name: 'Healthcare', 
    href: '/industries/healthcare', 
    icon: Heart, 
    description: 'HIPAA-compliant apps for care, telehealth, and records.',
    slug: 'healthcare',
    keywords: 'healthcare software, medical applications, telemedicine platforms, patient management'
  },
  { 
    name: 'Education', 
    href: '/industries/education', 
    icon: GraduationCap, 
    description: 'LMS, e-learning platforms, and EdTech solutions.',
    slug: 'education',
    keywords: 'educational technology, LMS development, e-learning platforms, online education'
  },
  { 
    name: 'Ecommerce', 
    href: '/industries/ecommerce', 
    icon: ShoppingCart, 
    description: 'Online stores, marketplaces, and payment integration.',
    slug: 'ecommerce',
    keywords: 'ecommerce development, online store, marketplace platform, payment integration'
  },
  { 
    name: 'Food & Restaurant', 
    href: '/industries/food', 
    icon: UtensilsCrossed, 
    description: 'Apps for restaurants, delivery, and order systems.',
    slug: 'food-restaurant',
    keywords: 'restaurant management, food delivery apps, POS systems, online ordering'
  },
  { 
    name: 'Travel & Hospitality', 
    href: '/industries/travel', 
    icon: Plane, 
    description: 'Booking, hotel, and hospitality management software.',
    slug: 'travel-hospitality',
    keywords: 'travel booking system, hotel management, hospitality software, tourism platforms'
  },
  { 
    name: 'Fashion & Apparel', 
    href: '/industries/fashion-apparel', 
    icon: Shirt, 
    description: 'Retail tech and inventory systems for fashion brands.',
    slug: 'fashion-apparel',
    keywords: 'fashion ecommerce, apparel management, retail technology, inventory systems'
  },
  { 
    name: 'CRM Development', 
    href: '/industries/crm-development', 
    icon: Users, 
    description: 'Custom CRMs for sales, leads, and client management.',
    slug: 'crm-development',
    keywords: 'CRM development, customer management, sales automation, lead management'
  },
  { 
    name: 'Logistics & Supply Chain', 
    href: '/industries/logistics', 
    icon: Truck, 
    description: 'Logistics, warehouse, and supply chain platforms.',
    slug: 'logistics-supply-chain',
    keywords: 'logistics software, supply chain management, warehouse systems, fleet tracking'
  },
  { 
    name: 'Manufacturing', 
    href: '/industries/manufacturing', 
    icon: Factory, 
    description: 'Automation and production management software.',
    slug: 'manufacturing',
    keywords: 'manufacturing software, industrial automation, production management, MES systems'
  },
  { 
    name: 'Legal & Law Firms', 
    href: '/industries/legal', 
    icon: Scale, 
    description: 'Case and practice management for law firms.',
    slug: 'legal-law-firms',
    keywords: 'legal software, case management, law practice management, legal technology'
  },
  { 
    name: 'Agriculture & Farming', 
    href: '/industries/agriculture', 
    icon: Wheat, 
    description: 'Farm management and precision agriculture tools.',
    slug: 'agriculture-farming',
    keywords: 'agriculture software, farm management, precision farming, agtech solutions'
  },
];


export default function IndustriesPage() {
  // Generate structured data for industries
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries We Serve - Foxbeep",
    "description": "Professional software development and digital solutions across 15+ industries including healthcare, education, ecommerce, automotive, and more.",
    "url": "https://foxbeep.com/industries",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Industries Served",
      "itemListElement": industries.map((industry, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": industry.name,
          "description": industry.description,
          "url": `https://foxbeep.com${industry.href}`
        }
      }))
    },
    "provider": {
      "@type": "Organization",
      "name": "Foxbeep",
      "url": "https://foxbeep.com",
      "logo": "https://foxbeep.com/logo.png"
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
        "name": "Industries",
        "item": "https://foxbeep.com/industries"
      }
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep",
    "url": "https://foxbeep.com",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional software development company serving 15+ industries with custom digital solutions",
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nepal"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+977-9810570201",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://facebook.com/foxbeep",
      "https://twitter.com/foxbeep",
      "https://linkedin.com/company/foxbeep"
    ]
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Industries We Serve | Custom Software Solutions Across 15+ Sectors | Foxbeep</title>
        <meta name="description" content="Professional software development and digital solutions across healthcare, education, ecommerce, automotive, manufacturing, and 8+ other industries. 500+ projects completed with industry expertise." />
        <meta name="keywords" content="industry software solutions, healthcare software, education technology, ecommerce development, automotive software, manufacturing systems, CRM development, logistics software, legal technology, agriculture software" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Industries We Serve | Custom Software Solutions Across 15+ Sectors" />
        <meta property="og:description" content="Expert software development across healthcare, education, ecommerce, automotive, and 9+ other industries. Custom solutions tailored to your industry needs." />
        <meta property="og:image" content="https://foxbeep.com/industries-og-image.png" />
        <meta property="og:url" content="https://foxbeep.com/industries" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | Custom Software Solutions" />
        <meta name="twitter:description" content="Expert software development across 15+ industries including healthcare, education, ecommerce, and more." />
        <meta name="twitter:image" content="https://foxbeep.com/industries-og-image.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/industries" />
        
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
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
        
        {/* Geo Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="geo.placename" content="Kathmandu" />
        
        {/* Industry-specific tags */}
        <meta name="industry" content="Information Technology" />
        <meta name="coverage" content="Worldwide" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-gray-400" aria-hidden="true" />
              </li>
              <li>
                <span className="text-gray-900 font-medium" aria-current="page">
                  Industries
                </span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Header Section */}
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Industries We Serve
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                We deliver tailored digital solutions across diverse industries, combining deep sector expertise
                with cutting-edge technology to drive innovation and accelerate business growth.
              </p>
              <div className="mt-8 flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">15+</span>
                  <span>Industries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">500+</span>
                  <span>Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">5+</span>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Industries Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section aria-labelledby="industries-heading">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <article key={industry.name} className="group">
                    <Link
                      href={industry.href}
                      className="block relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-200 hover:border-purple-300 h-full"
                      aria-label={`Learn more about our ${industry.name} solutions`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                            <IconComponent className="w-6 h-6 text-purple-600" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                            {industry.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-5 h-5 text-purple-600" aria-hidden="true" />
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        </main>

        {/* Stats Section */}
        <section className="bg-gray-900" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 id="stats-heading" className="text-2xl font-bold text-white text-center mb-12">
              Proven Track Record Across Industries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-lg">Projects Completed</div>
                <div className="text-gray-500 text-sm mt-1">Across all industries</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400 text-lg">Industries Served</div>
                <div className="text-gray-500 text-sm mt-1">Specialized expertise</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400 text-lg">Client Satisfaction</div>
                <div className="text-gray-500 text-sm mt-1">Consistent quality delivery</div>
              </div>
            </div>
          </div>
        </section>

        <TextHeroSection />
      </div>
    </>
  );
}