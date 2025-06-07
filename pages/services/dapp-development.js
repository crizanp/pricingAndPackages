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

export default function DappDevelopment() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "dApp Development Services",
    "description": "Professional decentralized application (dApp) development services including smart contract development, Web3 frontend integration, blockchain consulting, and enterprise blockchain solutions. Expert blockchain developers with 4.9★ rating and proven track record.",
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
    "serviceType": "Decentralized Application Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "dApp Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Contract Development",
            "description": "Secure, audited smart contracts for decentralized applications with gas optimization and formal verification"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web3 Frontend Integration",
            "description": "User-friendly interfaces connecting traditional web applications to blockchain networks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DeFi Platform Development",
            "description": "Decentralized finance applications for lending, staking, yield farming, and financial services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DAO Development",
            "description": "Decentralized autonomous organization frameworks with governance and voting mechanisms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NFT Marketplace Development",
            "description": "Complete NFT trading platforms with minting, buying, selling, and auction functionalities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blockchain Consulting",
            "description": "Strategic blockchain implementation consulting for enterprise and startup projects"
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
    "priceRange": "$30,000 - $200,000+"
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does dApp development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "dApp development costs range from $30,000 for basic decentralized applications to $200,000+ for complex DeFi platforms with advanced features. Factors affecting cost include smart contract complexity, blockchain selection, security auditing requirements, and multi-chain compatibility."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a dApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "dApp development typically takes 12 to 28 weeks, depending on complexity of smart contracts, blockchain integration requirements, security auditing processes, and frontend development scope."
        }
      },
      {
        "@type": "Question",
        "name": "Which blockchain is best for my dApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend Ethereum for maximum compatibility, Polygon for lower costs, Solana for high performance, or Binance Smart Chain for specific use cases. The choice depends on your scalability needs, transaction costs, and target audience."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure dApp security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement comprehensive security measures including smart contract auditing, formal verification, penetration testing, multi-signature wallets, and partner with leading blockchain security firms for independent audits."
        }
      }
    ]
  };

  const serviceData = {
    title: "dApp Development Services",
    description: "We build secure, scalable decentralized applications that leverage blockchain technology to create innovative solutions for modern businesses and transform traditional industries.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "65",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included in Our dApp Development Services?",
    services: [
      { 
        title: "Smart Contract Development", 
        description: "Secure, gas-optimized smart contracts with comprehensive testing, formal verification, and professional auditing for maximum security." 
      },
      { 
        title: "Web3 Frontend Integration", 
        description: "Intuitive user interfaces that seamlessly connect traditional web applications to blockchain networks with wallet integration." 
      },
      { 
        title: "Blockchain Architecture Design", 
        description: "Scalable system architecture balancing on-chain and off-chain components for optimal performance and cost efficiency." 
      },
      { 
        title: "DeFi Protocol Development", 
        description: "Complete decentralized finance solutions including lending protocols, yield farming, staking platforms, and liquidity pools." 
      },
      { 
        title: "NFT & Tokenization Solutions", 
        description: "Non-fungible token marketplaces, minting platforms, and asset tokenization systems with complete marketplace functionality." 
      },
      { 
        title: "Security Auditing & Testing", 
        description: "Comprehensive security assessments, smart contract audits, and penetration testing to ensure bulletproof security." 
      }
    ]
  };
  
  const industrySliderData = {
    title: "dApp Solutions for Every Industry Vertical",
    subtitle: "Foxbeep creates innovative decentralized applications that transform traditional business models across diverse industry sectors with blockchain technology.",
    industries: [
      { 
        title: "DeFi & Financial Services", 
        description: "Decentralized lending platforms, yield optimization protocols, automated market makers, and innovative financial instruments." 
      },
      { 
        title: "Supply Chain & Logistics", 
        description: "Transparent tracking systems, provenance verification, authenticity certificates, and supply chain optimization solutions." 
      },
      { 
        title: "Gaming & Entertainment", 
        description: "Play-to-earn games, NFT marketplaces, virtual world platforms, and blockchain-based entertainment ecosystems." 
      },
      { 
        title: "Healthcare & Medical", 
        description: "Secure patient data management, medical record verification, pharmaceutical supply chain, and telemedicine platforms." 
      },
      { 
        title: "Real Estate & Property", 
        description: "Property tokenization platforms, fractional ownership systems, real estate investment protocols, and smart rental contracts." 
      },
      { 
        title: "Energy & Sustainability", 
        description: "Carbon credit trading, renewable energy certificates, peer-to-peer energy trading, and green finance solutions." 
      }
    ]
  };
  
  const devProcessData = {
    title: "Our Proven dApp Development Process",
    description: "We follow a comprehensive blockchain development methodology that ensures secure, scalable, and user-friendly decentralized applications that deliver real business value.",
    processSteps: [
      { 
        number: 1, 
        title: "Blockchain Strategy & Planning", 
        description: "Comprehensive analysis of your use case, blockchain selection, tokenomics design, and technical architecture planning for optimal results." 
      },
      { 
        number: 2, 
        title: "Smart Contract Architecture", 
        description: "Designing secure, gas-efficient smart contract systems with proper access controls, upgrade mechanisms, and governance structures." 
      },
      { 
        number: 3, 
        title: "Prototype Development", 
        description: "Building functional prototypes to validate concepts, test user flows, and refine technical specifications before full development." 
      },
      { 
        number: 4, 
        title: "Core Development Phase", 
        description: "Full-scale development of smart contracts, Web3 frontend, backend infrastructure, and blockchain integration components." 
      },
      { 
        number: 5, 
        title: "Security Auditing", 
        description: "Comprehensive security testing including automated analysis, manual code review, and third-party security audits for maximum protection." 
      },
      { 
        number: 6, 
        title: "Testnet Deployment", 
        description: "Thorough testing on blockchain testnets, performance optimization, bug fixes, and user acceptance testing with real scenarios." 
      },
      { 
        number: 7, 
        title: "Mainnet Launch & Support", 
        description: "Production deployment, monitoring setup, user onboarding support, and ongoing maintenance for long-term success." 
      }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does dApp development cost?",
      answer: "dApp development costs range from $30,000 for basic decentralized applications to $200,000+ for complex DeFi platforms with advanced features. Factors affecting cost include smart contract complexity, blockchain selection (Ethereum, Polygon, Solana), security auditing requirements, frontend development scope, multi-chain compatibility, and ongoing maintenance needs. We provide detailed quotes based on your specific blockchain requirements and business objectives."
    },
    {
      question: "How long does it take to develop a dApp?",
      answer: "dApp development typically takes 12 to 28 weeks, depending on complexity of smart contracts, blockchain integration requirements, security auditing processes, and frontend development scope. Simple dApps may be completed in 12-16 weeks, while complex DeFi platforms or enterprise blockchain solutions can take 20-28 weeks or longer. Timeline factors include smart contract auditing, testnet deployment, and security optimization."
    },
    {
      question: "Which blockchain platform is best for my dApp?",
      answer: "We recommend blockchain platforms based on your specific requirements: Ethereum for maximum compatibility and developer ecosystem, Polygon for lower transaction costs, Solana for high-performance applications, Binance Smart Chain for specific DeFi use cases, or Algorand for enterprise solutions. The choice depends on your scalability needs, transaction costs, security requirements, and target audience."
    },
    {
      question: "How do you ensure dApp security and smart contract safety?",
      answer: "We implement comprehensive security measures including rigorous smart contract auditing, formal verification processes, automated security testing, manual code reviews, multi-signature wallet integration, and partnerships with leading blockchain security firms for independent audits. We follow industry best practices for secure development and conduct thorough penetration testing."
    },
    {
      question: "Can you integrate dApps with existing business systems?",
      answer: "Yes, we specialize in hybrid blockchain architectures that seamlessly connect decentralized applications with traditional enterprise systems through secure API layers, oracle integration, and custom middleware solutions. We ensure smooth data flow between blockchain networks and existing business infrastructure while maintaining security and compliance."
    },
    {
      question: "Do you provide ongoing support and maintenance for dApps?",
      answer: "We offer comprehensive post-launch support including smart contract monitoring, security updates, performance optimization, bug fixes, feature enhancements, and blockchain network upgrades. Our maintenance packages ensure your dApp remains secure, efficient, and compatible with evolving blockchain ecosystems."
    },
    {
      question: "What types of dApps do you develop?",
      answer: "We develop various types of decentralized applications including DeFi protocols (lending, staking, DEX), NFT marketplaces, DAO governance systems, supply chain solutions, gaming platforms, social networks, identity management systems, and enterprise blockchain applications tailored to specific industry requirements."
    },
    {
      question: "How do you handle dApp scalability and performance optimization?",
      answer: "We implement Layer 2 scaling solutions, optimize smart contract gas usage, utilize IPFS for decentralized storage, implement efficient caching strategies, and design hybrid architectures that balance on-chain and off-chain components. We also integrate with cross-chain bridges and implement state channel solutions for improved performance."
    }
  ];
  
  const benefitsData = {
    title: "Why Our dApp Development Services Lead the Industry",
    benefits: [
      "Gas-optimized smart contracts that minimize transaction costs while maximizing functionality and security",
      "Scalable blockchain architecture designed to handle millions of users and high transaction volumes",
      "Intuitive Web3 UX/UI that makes blockchain interaction simple and accessible for mainstream users",
      "Multi-chain compatibility ensuring maximum reach and accessibility across blockchain ecosystems",
      "Enterprise-grade security with formal verification, auditing, and continuous monitoring systems"
    ],
    techIcons: [
      { name: "Ethereum", isDark: true },
      { name: "Solidity", isDark: false },
      { name: "React", isDark: true },
      { name: "Web3.js", isDark: false },
      { name: "IPFS", isDark: true },
      { name: "Polygon", isDark: false },
      { name: "Hardhat", isDark: true },
      { name: "The Graph", isDark: false },
      { name: "Chainlink", isDark: true }
    ],
    ctaText: "Start Your dApp Development Project"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for dApp Development?",
    features: [
      {
        id: "security",
        title: "Bulletproof Security",
        content: "Comprehensive smart contract auditing, formal verification, multi-signature implementations, and partnerships with leading blockchain security firms."
      },
      {
        id: "ux",
        title: "User-Centric Web3 Design",
        content: "Intuitive interfaces that abstract blockchain complexity, making decentralized applications accessible to mainstream users without technical knowledge."
      },
      {
        id: "scalability",
        title: "Scalable Architecture",
        content: "Layer 2 solutions, cross-chain compatibility, and hybrid architectures designed to handle enterprise-scale user bases and transaction volumes."
      },
      {
        id: "interoperability",
        title: "Multi-Chain Expertise",
        content: "Deep expertise across Ethereum, Polygon, Solana, Binance Smart Chain, and emerging blockchain platforms for maximum flexibility."
      },
      {
        id: "compliance",
        title: "Regulatory Compliance",
        content: "Development with consideration for evolving DeFi regulations, KYC/AML integration, and compliance frameworks for institutional adoption."
      },
      {
        id: "integration",
        title: "Enterprise Integration",
        content: "Seamless connections between blockchain networks and traditional business systems through secure APIs and middleware solutions."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a dApp Development",
    highlightedText: "Team",
    buttonText: "Start Your Web3 Journey Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-indigo-600",
    buttonGradientFrom: "from-indigo-500",
    buttonGradientTo: "to-blue-600",
    buttonHoverFrom: "from-indigo-600",
    buttonHoverTo: "to-blue-700"
  };
  
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>dApp Development Services | Decentralized Application Development | Smart Contract Development | Foxbeep</title>
        <meta name="description" content="Professional dApp development services including smart contract development, Web3 frontend integration, DeFi platforms, NFT marketplaces, and blockchain consulting. 4.9★ rated blockchain developers with proven expertise in Ethereum, Solana, and Polygon." />
        <meta name="keywords" content="dapp development, decentralized application development, smart contract development, web3 development, blockchain development, defi development, nft marketplace development, dao development, ethereum development, solana development, polygon development, blockchain consulting, smart contract auditing" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="dApp Development Services | Decentralized Application Development | Foxbeep" />
        <meta property="og:description" content="Professional dApp development with smart contracts, Web3 integration, and blockchain consulting. 4.9★ rated developers building secure decentralized applications." />
        <meta property="og:image" content="https://foxbeep.com/images/dapp-development-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/dapp-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep dApp Development Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="dApp Development Services | Smart Contract & Web3 Development" />
        <meta name="twitter:description" content="Professional dApp development with smart contracts and Web3 integration. 4.9★ rated blockchain developers." />
        <meta name="twitter:image" content="https://foxbeep.com/images/dapp-development-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="dApp Development" />
        <meta name="expertise" content="Ethereum, Solidity, Web3.js, React, Smart Contracts, DeFi, NFT, DAO" />
        <meta name="rating" content="4.9/5 based on 65 reviews" />
        <meta name="blockchain-platforms" content="Ethereum, Polygon, Solana, Binance Smart Chain, Algorand" />
        <meta name="specialization" content="Smart Contracts, DeFi, NFT Marketplaces, DAO Development, Web3 Integration" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Industry-Specific Meta Tags */}
        <meta name="industries" content="DeFi, Gaming, Supply Chain, Healthcare, Real Estate, Energy, Financial Services" />
        <meta name="solutions" content="Smart Contracts, Web3 Frontend, DeFi Protocols, NFT Platforms, Blockchain Integration" />
        
        {/* Blockchain-Specific Meta Tags */}
        <meta name="blockchain-networks" content="Ethereum, Polygon, Solana, BSC, Avalanche, Fantom" />
        <meta name="smart-contract-languages" content="Solidity, Rust, Move, Vyper" />
        <meta name="defi-services" content="Lending, Staking, Yield Farming, DEX, Liquidity Pools" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/dapp-development" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/dapp-development" />
        
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
        <link rel="dns-prefetch" href="//polygon.technology" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#6366F1" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$30,000 - $200,000+" />
        <meta name="currency" content="USD" />
        
        {/* dApp Development Meta Tags */}
        <meta name="development-time" content="12-28 weeks" />
        <meta name="technologies" content="Ethereum, Solidity, React, Web3.js, IPFS, Polygon" />
        <meta name="security" content="Smart Contract Auditing, Formal Verification Available" />
        <meta name="support" content="24/7 Blockchain Support Available" />
      </Head>

      <main itemScope itemType="https://schema.org/Service">
        {/* Service Banner Section */}
        <header>
          <section aria-label="dApp Development Services Hero" itemProp="description">
            <ServiceBanner {...serviceData} />
          </section>
        </header>

        {/* Full-screen showcase image */}
        <section aria-label="dApp Development Showcase">
          <div className="w-full relative sm:h-screen">
            <img
              src="/images/pages/dapp.jpeg"
              alt="dApp Development Services - Decentralized Application Development and Smart Contract Solutions"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section aria-label="dApp Development Services Included" itemProp="hasOfferCatalog">
          <ServicesGrid {...servicesGridData} />
        </section>

        {/* Benefits Section */}
        <section aria-label="dApp Development Benefits and Technologies">
          <BenefitsSection {...benefitsData} />
        </section>

        {/* Featured dApp Services Slider */}
        <section aria-label="Featured dApp Development Services">
          <ServiceCardSlider
            cards={[
              {
                id: 1,
                title: "DeFi Platforms",
                description: "Secure decentralized finance applications for lending, staking, yield optimization, and automated market making with transparent operations.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-indigo-500"
              },
              {
                id: 2,
                title: "NFT Marketplaces",
                description: "Complete NFT trading platforms with minting, buying, selling, auction functionalities, and royalty management systems.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-blue-600"
              },
              {
                id: 3,
                title: "DAO Governance Systems",
                description: "Decentralized autonomous organization frameworks with voting mechanisms, proposal systems, and treasury management.",
                image: "/images/purplebg-logo.png",
                accentColor: "bg-teal-500"
              }
            ]}
            autoplay={true}
            autoplaySpeed={5000}
            darkMode={true}
            accentColor="indigo"
          />
        </section>

        {/* Development Process Section */}
        <section aria-label="dApp Development Process">
          <DevProcess {...devProcessData} />
        </section>

        {/* Unique Features Section */}
        <section aria-label="Why Choose Foxbeep for dApp Development">
          <UniqueFeatures {...uniqueFeaturesData} />
        </section>

        {/* Team Building CTA Section */}
        <section aria-label="Build dApp Development Team">
          <TeamBanner {...teamBannerData} />
        </section>

        {/* Industry Solutions Section */}
        <section aria-label="dApp Solutions for Various Industries" itemProp="areaServed">
          <IndustrySlider {...industrySliderData} />
        </section>

        {/* FAQ Section */}
        <section aria-label="dApp Development FAQ" itemScope itemType="https://schema.org/FAQPage">
          <FAQSection
            title="Frequently Asked Questions About dApp Development"
            subtitle="Get answers to common questions about our decentralized application development services, blockchain platforms, smart contracts, and development process"
            faqItems={faqItems}
            backgroundColor="bg-white"
            textColor="text-gray-700"
            questionSize="text-2xl"
          />
        </section>

        {/* Call to Action Section */}
        <section aria-label="Get Started with dApp Development">
          <TextHeroSection />
        </section>
      </main>
    </>
  );
}