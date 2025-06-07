import Head from "next/head";
import TextHeroSection from "../../components/home/textHero";
import BenefitsSection from "../../components/services/BenefitsSection";
import FAQSection from "../../components/services/faqSection";
import DevProcess from "../../components/services/ProcessStep";
import ServiceCardSlider from "../../components/services/ServiceCardSlider";
import ServicesGrid from "../../components/services/ServicesGrid";
import TeamBanner from "../../components/services/shortQuickBanner";
import IndustrySlider from "../../components/services/sliderService";
import UniqueFeatures from "../../components/services/UniqueFeatures";
import ServiceBanner from "../../components/services/upperHero";

export default function Web3Development() {
  // Structured Data for Web3 Development Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web3 Development Services",
    "description": "Professional Web3 development services including blockchain apps, crypto websites, smart contracts, and decentralized applications. Expert Web3 developers with 4.9★ rating creating secure, modern blockchain solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Foxbeep",
      "url": "https://foxbeep.com",
      "logo": "https://foxbeep.com/logo.png",
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
    },
    "serviceType": "Web3 Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web3 Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blockchain App Development",
            "description": "Build secure blockchain applications for your business with modern technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Contract Development",
            "description": "Create secure smart contracts that automatically handle transactions and agreements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crypto Website Development",
            "description": "Build professional cryptocurrency and blockchain websites with modern features"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NFT Platform Development",
            "description": "Create NFT marketplaces and platforms for buying, selling, and trading digital assets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DeFi Application Development",
            "description": "Build decentralized finance apps for lending, trading, and managing crypto assets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web3 Integration Services",
            "description": "Connect your existing website or app with blockchain and crypto features"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "65",
      "bestRating": "5"
    },
    "priceRange": "$50,000 - $300,000+"
  };

  // FAQ structured data for Web3 development
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does Web3 development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web3 development costs range from $50,000 for basic blockchain apps to $300,000+ for complex platforms with custom features. Price depends on the type of blockchain, smart contracts needed, and special features you want."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a Web3 application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Web3 projects take 4 to 9 months to complete. Simple blockchain apps can be done in 4-5 months, while complex platforms with multiple features may take 6-9 months."
        }
      },
      {
        "@type": "Question",
        "name": "What is Web3 development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web3 development is building websites and apps that work with blockchain technology. This includes crypto websites, smart contracts, NFT platforms, and decentralized apps that give users more control over their data."
        }
      },
      {
        "@type": "Question",
        "name": "Is Web3 secure for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when built properly, Web3 applications are very secure. We use multiple security checks, code audits, and proven blockchain technologies to keep your business and users safe."
        }
      },
      {
        "@type": "Question",
        "name": "Which blockchain platforms do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with all major blockchain platforms including Ethereum, Solana, Polygon, Binance Smart Chain, and others. We choose the best blockchain for your specific business needs and budget."
        }
      }
    ]
  };

  const serviceData = {
    title: "Web3 Development Services",
    description: "We build modern blockchain apps and crypto websites that help your business succeed in the new digital economy.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "65",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What You Get With Our Web3 Development",
    services: [
      { 
        title: "Blockchain App Development", 
        description: "We build secure blockchain applications that work smoothly and help your business grow in the crypto world." 
      },
      { 
        title: "Smart Contract Creation", 
        description: "Create automatic contracts that handle payments and agreements safely without needing middlemen." 
      },
      { 
        title: "Crypto Website Design", 
        description: "Build professional cryptocurrency websites with trading features, wallets, and user-friendly design." 
      },
      { 
        title: "NFT Platform Development", 
        description: "Create platforms where people can buy, sell, and trade digital art and collectibles easily." 
      },
      { 
        title: "DeFi App Development", 
        description: "Build financial apps for lending, borrowing, and earning interest on crypto without traditional banks." 
      },
      { 
        title: "Web3 Integration Help", 
        description: "Add blockchain features to your existing website or app to accept crypto payments and more." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "Web3 Solutions for Every Type of Business",
    subtitle: "Foxbeep creates blockchain and crypto solutions for all kinds of businesses and industries.",
    industries: [
      { 
        title: "Financial Services & Banking", 
        description: "Build secure crypto trading platforms, digital wallets, and blockchain banking solutions." 
      },
      { 
        title: "Gaming & Entertainment", 
        description: "Create play-to-earn games, NFT marketplaces, and virtual worlds where players truly own their items." 
      },
      { 
        title: "Art & Creative Industries", 
        description: "Build NFT platforms for artists, musicians, and creators to sell their work directly to fans." 
      },
      { 
        title: "Real Estate & Property", 
        description: "Use blockchain for property records, fractional ownership, and secure real estate transactions." 
      },
      { 
        title: "Supply Chain & Logistics", 
        description: "Track products from source to customer using blockchain for complete transparency and trust." 
      },
      { 
        title: "Healthcare & Medical", 
        description: "Secure patient data management and drug tracking using blockchain technology for better healthcare." 
      }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Your Web3 Application",
    description: "We follow a clear, step-by-step process to create secure and successful blockchain applications for your business.",
    processSteps: [
      { 
        number: 1, 
        title: "Understanding Your Web3 Goals", 
        description: "We learn about your business and figure out how blockchain technology can help you succeed." 
      },
      { 
        number: 2, 
        title: "Planning Your Blockchain Strategy", 
        description: "We choose the right blockchain platform and plan the best approach for your specific needs." 
      },
      { 
        number: 3, 
        title: "Designing Your App Structure", 
        description: "We create wireframes and plan how your blockchain app will work and look for users." 
      },
      { 
        number: 4, 
        title: "Building Smart Contracts", 
        description: "We write and test secure smart contracts that handle your business logic automatically." 
      },
      { 
        number: 5, 
        title: "Creating User Interface", 
        description: "We build easy-to-use interfaces that make blockchain technology simple for your users." 
      },
      { 
        number: 6, 
        title: "Testing & Security Checks", 
        description: "We thoroughly test everything and run security audits to make sure your app is completely safe." 
      },
      { 
        number: 7, 
        title: "Launch & Ongoing Support", 
        description: "We launch your Web3 app and provide ongoing support to keep it running perfectly." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does Web3 development cost?",
      answer: "Web3 development costs range from $50,000 for basic blockchain apps to $300,000+ for complex platforms with custom smart contracts and advanced features. The price depends on which blockchain you choose, the complexity of your smart contracts, and special features you need. We provide clear pricing upfront with no hidden costs."
    },
    {
      question: "How long does it take to build a Web3 application?",
      answer: "Most Web3 projects take 4 to 9 months to complete. Simple blockchain apps can be finished in 4-5 months, while complex platforms with multiple smart contracts and advanced features may take 6-9 months. We give you a clear timeline before starting work."
    },
    {
      question: "What exactly is Web3 development?",
      answer: "Web3 development is building websites and apps that work with blockchain technology. This includes crypto websites, smart contracts, NFT platforms, and decentralized apps that give users more control over their data and digital assets. It's the next generation of internet applications."
    },
    {
      question: "Is Web3 technology secure for my business?",
      answer: "Yes, when built properly, Web3 applications are very secure. We use multiple security layers, conduct thorough code audits, run security tests, and follow best practices to protect your business and users. Blockchain technology itself is designed to be highly secure."
    },
    {
      question: "Which blockchain platforms do you work with?",
      answer: "We work with all major blockchain platforms including Ethereum, Solana, Polygon, Binance Smart Chain, Avalanche, and others. We're not limited to one blockchain - we choose the best platform for your specific business needs, budget, and technical requirements."
    },
    {
      question: "Can you add Web3 features to my existing website?",
      answer: "Absolutely! We can add blockchain features to your existing website or app. This includes crypto payment processing, NFT integration, wallet connections, and other Web3 features without rebuilding your entire platform."
    },
    {
      question: "Do you provide training on how to use Web3 applications?",
      answer: "Yes, we provide complete training for you and your team on how to manage and use your Web3 application. We make sure you understand how to handle crypto transactions, manage smart contracts, and use all the features we build for you."
    },
    {
      question: "What ongoing support do you provide for Web3 projects?",
      answer: "We offer comprehensive ongoing support including smart contract monitoring, security updates, performance optimization, bug fixes, and technical support. We also help with blockchain upgrades and adding new features as your business grows."
    }
  ];
  
  const benefitsData = {
    title: "Why Choose Our Web3 Development Services",
    benefits: [
      "Future-ready blockchain solutions that keep your business ahead of the competition",
      "Bank-level security with multiple safety checks and code audits to protect your users",
      "Easy-to-use interfaces that make blockchain technology simple for everyone",
      "Lower transaction costs and faster payments compared to traditional banking systems",
      "Complete ownership and control over your digital assets and business data"
    ],
    techIcons: [
      { name: "Ethereum", isDark: true },
      { name: "Solidity", isDark: false },
      { name: "React", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "Web3.js", isDark: true },
      { name: "Solana", isDark: false },
      { name: "Polygon", isDark: true },
      { name: "IPFS", isDark: false },
      { name: "MetaMask", isDark: true }
    ],
    ctaText: "Start Your Web3 Project"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for Web3 Development?",
    features: [
      {
        id: "security",
        title: "Maximum Security",
        content: "We use the strongest security measures with multiple code reviews, security audits, and testing to keep your blockchain app completely safe from hackers and attacks."
      },
      {
        id: "simplicity",
        title: "Easy to Use Design",
        content: "We create simple, user-friendly interfaces that make blockchain technology easy to use, even for people who are new to crypto and Web3."
      },
      {
        id: "scalability",
        title: "Built to Grow",
        content: "Your Web3 application is built to handle growth, with the ability to process more transactions and add new features as your business expands."
      },
      {
        id: "integration",
        title: "Works with Everything",
        content: "We build Web3 apps that work smoothly with your existing business systems, websites, and apps without causing any disruption."
      },
      {
        id: "compliance",
        title: "Legal & Compliant",
        content: "We stay up-to-date with crypto regulations and build your Web3 application to comply with legal requirements in your country."
      },
      {
        id: "support",
        title: "Always Here to Help",
        content: "Get ongoing support with regular updates, security monitoring, and technical help whenever you need it to keep your Web3 app running perfectly."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build Your Web3 Development",
    highlightedText: "Team",
    buttonText: "Start Your Blockchain Project",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-violet-600",
    buttonGradientFrom: "from-violet-500",
    buttonGradientTo: "to-fuchsia-600",
    buttonHoverFrom: "from-violet-600",
    buttonHoverTo: "to-fuchsia-700"
  };
  
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Web3 Development Services | Blockchain App Development | Smart Contracts | Crypto Websites | Foxbeep</title>
        <meta name="description" content="Professional Web3 development services including blockchain apps, smart contracts, crypto websites, and NFT platforms. 4.9★ rated Web3 developers creating secure, modern blockchain solutions for businesses." />
        <meta name="keywords" content="web3 development, blockchain development, smart contracts, crypto website development, NFT platform development, DeFi development, blockchain app development, web3 developers, cryptocurrency development, decentralized app development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Web3 Development Services | Blockchain App Development | Foxbeep" />
        <meta property="og:description" content="Expert Web3 development with blockchain apps, smart contracts, and crypto websites. 4.9★ rated developers creating secure, modern Web3 solutions." />
        <meta property="og:image" content="https://foxbeep.com/images/web3-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/web3-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Web3 Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web3 Development Services | Blockchain App Development" />
        <meta name="twitter:description" content="Professional Web3 development services with blockchain apps and smart contracts. 4.9★ rated developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/web3-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Web3 Development" />
        <meta name="expertise" content="Blockchain Apps, Smart Contracts, Crypto Websites, NFT Platforms, DeFi" />
        <meta name="rating" content="4.9/5 based on 65 reviews" />
        <meta name="specialization" content="Web3 Applications, Blockchain Development, Smart Contract Development" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Web3-Specific Meta Tags */}
        <meta name="blockchain-platforms" content="Ethereum, Solana, Polygon, Binance Smart Chain, Avalanche" />
        <meta name="web3-services" content="Smart Contracts, DeFi, NFT Platforms, Crypto Websites, Blockchain Apps" />
        <meta name="development-tools" content="Solidity, Web3.js, React, Node.js, IPFS, MetaMask" />
        
        {/* Technology Meta Tags */}
        <meta name="technologies" content="Ethereum, Solidity, React, Node.js, Web3.js, Solana, Polygon, IPFS" />
        <meta name="features" content="Smart Contracts, DeFi Integration, NFT Support, Crypto Payments, Decentralized Storage" />
        <meta name="security" content="Multi-layer Security, Code Audits, Penetration Testing, Smart Contract Verification" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/web3-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/web3-development" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
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
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//ethereum.org" />
        <link rel="dns-prefetch" href="//solana.com" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#7C3AED" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$50,000 - $300,000+" />
        <meta name="currency" content="USD" />
        
        {/* Web3 Development Meta Tags */}
        <meta name="development-time" content="4-9 months" />
        <meta name="platforms" content="Ethereum, Solana, Polygon, BSC, Avalanche" />
        <meta name="support" content="Smart Contract Audits, Security Testing, Ongoing Maintenance, Technical Support" />
        <meta name="target-audience" content="Crypto Startups, Financial Services, Gaming, NFT Projects, DeFi Platforms" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="Web3 Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen Web3 showcase image */}
        <section aria-label="Web3 Development Services Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/web3.jpeg"
              alt="Web3 Development Services - Blockchain App Development and Smart Contract Programming"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="Web3 Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="Web3 Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured Web3 Services Slider */}
        <section aria-label="Featured Web3 Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "Smart Contract Development",
                description: "Create secure, automated contracts that handle payments and agreements without needing banks or middlemen.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-violet-600"
              },
              {
                id: 2,
                title: "NFT Platform Creation",
                description: "Build complete NFT marketplaces where people can buy, sell, and trade digital art and collectibles easily.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-fuchsia-600"
              },
              {
                id: 3,
                title: "DeFi Application Development",
                description: "Create financial apps for lending, borrowing, and earning money with crypto without traditional banks.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-600"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="violet"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="Web3 Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for Web3 Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build Web3 Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Web3 Industry Solutions Section */}
        <section aria-label="Web3 Solutions for Every Business" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="Web3 Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Common Questions About Web3 Development"
            subtitle="Get clear answers about our Web3 development services, blockchain technology, pricing, and how Web3 can help your business succeed"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />     
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with Web3 Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}