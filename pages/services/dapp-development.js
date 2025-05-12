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
  const serviceData = {
    title: "dApp Development Services",
    description: "We build secure, user-friendly decentralized applications that leverage blockchain technology for real-world solutions.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "65",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Smart Contract Development", description: "Secure, audited contracts for your business logic." },
      { title: "Web3 Frontend Integration", description: "Intuitive interfaces connecting users to blockchain." },
      { title: "Wallet & Identity Solutions", description: "Seamless authentication and transaction signing." },
      { title: "Tokenomics Design", description: "Strategic token utility and economic models." },
      { title: "DAO Structure Implementation", description: "Decentralized governance and voting mechanisms." },
      { title: "dApp Analytics", description: "On-chain and off-chain metrics for performance." }
    ]
  };
  
  const industrySliderData = {
    title: "dApps for Every Industry",
    subtitle: "FoxBeep creates effective decentralized solutions across all business domains.",
    industries: [
      { title: "DeFi Applications", description: "Lending, borrowing, and yield optimization platforms." },
      { title: "Supply Chain Solutions", description: "Transparent tracking and verification systems." },
      { title: "Gaming & Metaverse", description: "Interactive experiences with digital asset ownership." },
      { title: "Social Networks", description: "Censorship-resistant platforms with user ownership." },
      { title: "Healthcare Systems", description: "Secure, private patient data management." },
      { title: "Real Estate Services", description: "Property tokenization and fractional ownership." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build dApps",
    description: "Our process ensures secure, user-friendly decentralized applications that solve real business challenges.",
    processSteps: [
      { number: 1, title: "Use Case Evaluation", description: "Determining optimal blockchain implementation for your needs." },
      { number: 2, title: "Architecture Design", description: "Balancing on-chain and off-chain components for efficiency." },
      { number: 3, title: "Smart Contract Development", description: "Writing secure, gas-optimized business logic." },
      { number: 4, title: "Web3 Frontend Creation", description: "Building intuitive interfaces for blockchain interaction." },
      { number: 5, title: "Backend Integration", description: "Connecting traditional servers with decentralized networks." },
      { number: 6, title: "Security Auditing", description: "Comprehensive testing of all smart contracts and systems." },
      { number: 7, title: "Deployment & Monitoring", description: "Launch support and ongoing performance optimization." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does dApp development cost?",
      answer: "Costs range from $30,000 for basic dApps to $200,000+ for complex decentralized platforms with custom features and multi-chain support."
    },
    {
      question: "How long does it take to develop a dApp?",
      answer: "Typically 12 to 28 weeks, depending on complexity of features, blockchain integration, and security requirements."
    },
    {
      question: "Which blockchain is best for my dApp?",
      answer: "We work with Ethereum, Polygon, Solana, Algorand, and other chains based on your specific needs for scalability, cost, and community."
    },
    {
      question: "How do you ensure dApp security?",
      answer: "We implement rigorous smart contract auditing, follow best practices for secure development, and partner with third-party security firms for objective testing."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Yes, we build hybrid architectures that connect your traditional IT infrastructure with blockchain networks through secure API layers."
    }
  ];
  
  const benefitsData = {
    title: "Why Our dApp Development Services Excel",
    benefits: [
      "Optimized smart contracts for minimal gas consumption",
      "Scalable architecture that grows with user adoption",
      "Intuitive UX that hides blockchain complexity from users",
      "Cross-chain compatibility for maximum accessibility",
      "Enterprise-grade security with formal verification"
    ],
    techIcons: [
      { name: "Ethereum", isDark: true },
      { name: "Solidity", isDark: false },
      { name: "React", isDark: true },
      { name: "IPFS", isDark: false },
      { name: "The Graph", isDark: true },
      { name: "Hardhat", isDark: false },
      { name: "Web3.js", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "Truffle", isDark: true }
    ],
    ctaText: "Start Your dApp Project"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "security",
        title: "Bulletproof Security",
        content: "Rigorous smart contract auditing and defensive programming practices."
      },
      {
        id: "ux",
        title: "User-Centric Design",
        content: "Interfaces that make blockchain interaction simple for everyday users."
      },
      {
        id: "scalability",
        title: "Scalable Architecture",
        content: "Systems designed to handle growing user bases and transaction volumes."
      },
      {
        id: "interoperability",
        title: "Cross-Chain Solutions",
        content: "Applications that can operate across multiple blockchain ecosystems."
      },
      {
        id: "compliance",
        title: "Regulatory Awareness",
        content: "Development with consideration for evolving blockchain regulations."
      },
      {
        id: "integration",
        title: "Enterprise Integration",
        content: "Seamless connections between blockchain and traditional business systems."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a dApp development",
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
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
          alt="dApp Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "DeFi Platforms",
            description: "Secure financial applications for lending, staking, and yield optimization with transparent operations.",
            image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d",
            accentColor: "bg-indigo-500"
          },
          {
            id: 2,
            title: "DAO Governance Systems",
            description: "Decentralized autonomous organization frameworks with voting and proposal mechanisms.",
            image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28",
            accentColor: "bg-blue-600"
          },
          {
            id: 3,
            title: "Enterprise Blockchain Solutions",
            description: "Private and consortium blockchain applications for business process optimization.",
            image: "https://images.unsplash.com/photo-1561451213-d5c9f0951fcc",
            accentColor: "bg-teal-500"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="indigo"
      />

      <DevProcess {...devProcessData} />
      <UniqueFeatures {...uniqueFeaturesData} />
      <TeamBanner {...teamBannerData} />
      <IndustrySlider {...industrySliderData} />
      <FAQSection
        title="Frequently Asked Questions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-3xl"
      />     
      <TextHeroSection />
    </div>
  );
}