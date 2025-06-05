import Head from 'next/head';
import Navbar from '../components/Navbar/ServerNavbar'; // Import your server navbar
import BlogShowcase from "../components/home/blogShowcase";
import BrandSlider from "../components/home/companySponsered";
import DevelopmentProcess from "../components/home/developmentProccess";
import HeroSection from "../components/home/hero";
import IndustriesWeServe from "../components/home/industries";
import CompanyMetrics from "../components/home/Matrics";
import MediaProductionGallery from "../components/home/mediaGalleryShowcase";
import SuccessStories from "../components/home/successStories";
import TechShowcase from "../components/home/TechStack";
import TextHeroSection from "../components/home/textHero";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foxbeep",
    "url": "https://foxbeep.com",
    "logo": "https://foxbeep.com/logo.png",
    "description": "Professional software development, video editing, and digital marketing services. 1,300+ projects delivered with 350+ skilled team members.",
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
    ],
    "offers": {
      "@type": "Offer",
      "name": "Software Development Services",
      "description": "Custom software development, mobile apps, web development, and digital solutions"
    }
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Professional Software Development & Digital Solutions | Foxbeep</title>
        <meta name="description" content="Expert software development, video editing & digital marketing services. 1,300+ projects delivered, 350+ skilled developers. Get your custom solution today." />
        <meta name="keywords" content="software development, web development, mobile app development, video editing, digital marketing, custom software solutions" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Software Development & Digital Solutions" />
        <meta property="og:description" content="Expert software development, video editing & digital marketing services. 1,300+ projects delivered, 350+ skilled developers." />
        <meta property="og:image" content="https://foxbeep.com/og-image.png" />
        <meta property="og:url" content="https://foxbeep.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Software Development & Digital Solutions" />
        <meta name="twitter:description" content="Expert software development, video editing & digital marketing services. 1,300+ projects delivered." />
        <meta name="twitter:image" content="https://foxbeep.com/og-image.png" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Add the Navbar component */}
      <Navbar />

      <main>
        {/* Add semantic HTML structure */}
        <section aria-label="Hero Section">
          <HeroSection />
        </section>
        
        <section aria-label="Brand Partners">
          <BrandSlider />
        </section>
        
        <section aria-label="Company Metrics">
          <CompanyMetrics />
        </section>
        
        <section aria-label="Industries We Serve">
          <IndustriesWeServe />
        </section>
        
        <section aria-label="Success Stories">
          <SuccessStories />
        </section>
        
        <section aria-label="Development Process">
          <DevelopmentProcess />
        </section>
        
        <section aria-label="Technology Stack">
          <TechShowcase />
        </section>
        
        <section aria-label="Media Production Gallery">
          <MediaProductionGallery />
        </section>
        
        <section aria-label="Blog Showcase">
          <BlogShowcase />
        </section>
        
        <section aria-label="Call to Action">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}