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
  const serviceData = {
    title: "Web3 Development Services",
    description: "We build next-generation applications powering the decentralized internet with blockchain, crypto, and distributed technologies.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "65",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Web3 Architecture Design", description: "Future-proof infrastructure for decentralized systems." },
      { title: "Smart Contract Engineering", description: "Secure, efficient on-chain logic and protocols." },
      { title: "Token Design & Development", description: "Custom tokenomics and compliant digital assets." },
      { title: "Decentralized Identity", description: "Self-sovereign authentication and verification." },
      { title: "Web3 API Integration", description: "Connecting on-chain data with traditional systems." },
      { title: "Layer 2 Solutions", description: "Scaling implementations for throughput optimization." }
    ]
  };
  
  const industrySliderData = {
    title: "Web3 Solutions for Every Industry",
    subtitle: "FoxBeep creates effective decentralized systems across all Web3 domains.",
    industries: [
      { title: "Financial Services", description: "DeFi protocols and tokenized asset platforms." },
      { title: "Gaming & Entertainment", description: "Play-to-earn models and on-chain ownership." },
      { title: "Creator Economy", description: "Tokenized content and direct audience monetization." },
      { title: "Enterprise Solutions", description: "Private blockchains and business networks." },
      { title: "Social Networks", description: "Decentralized communities and content platforms." },
      { title: "Metaverse Implementations", description: "Virtual world infrastructure and economies." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Web3 Applications",
    description: "Our process ensures innovative, secure decentralized systems with optimal user experience.",
    processSteps: [
      { number: 1, title: "Web3 Strategy Development", description: "Defining blockchain use cases and decentralization goals." },
      { number: 2, title: "Token Economics Design", description: "Creating sustainable, incentive-aligned token models." },
      { number: 3, title: "Architecture Planning", description: "Balancing on-chain and off-chain components for efficiency." },
      { number: 4, title: "Smart Contract Development", description: "Building secure, tested blockchain functionality." },
      { number: 5, title: "Frontend Implementation", description: "Creating intuitive interfaces for Web3 interaction." },
      { number: 6, title: "Integration & Testing", description: "Connecting all components with rigorous security validation." },
      { number: 7, title: "Deployment & Optimization", description: "Launching with continued performance improvements." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does Web3 development cost?",
      answer: "Web3 project costs range from $50,000 for basic implementations to $300,000+ for comprehensive platforms with custom protocols and multi-chain functionality."
    },
    {
      question: "How long does it take to develop a Web3 application?",
      answer: "Typically 16 to 36 weeks, depending on complexity of token economics, protocol design, and security requirements."
    },
    {
      question: "How do you approach Web3 security?",
      answer: "We implement formal verification, multiple independent audits, economic attack simulations, and gradual deployment strategies to ensure maximum security."
    },
    {
      question: "Can you integrate our existing Web2 platform with Web3?",
      answer: "Yes, we specialize in hybrid architectures that bridge traditional applications with blockchain capabilities while maintaining familiar user experiences."
    },
    {
      question: "Which blockchains do you work with?",
      answer: "We're chain-agnostic and have experience across Ethereum, Solana, Polygon, Avalanche, Near, Cosmos ecosystem, and custom Layer 1 implementations."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Web3 Development Services Excel",
    benefits: [
      "Future-proof architecture that evolves with blockchain technology",
      "Security-first development methodology preventing costly exploits",
      "Tokenomics expertise ensuring sustainable economic models",
      "Web3 UX design that bridges the gap for mainstream users",
      "Regulatory awareness across global blockchain jurisdictions"
    ],
    techIcons: [
      { name: "Ethereum", isDark: true },
      { name: "Solidity", isDark: false },
      { name: "Rust", isDark: true },
      { name: "IPFS", isDark: false },
      { name: "Polkadot", isDark: true },
      { name: "The Graph", isDark: false },
      { name: "Chainlink", isDark: true },
      { name: "Filecoin", isDark: false },
      { name: "ZK-Rollups", isDark: true }
    ],
    ctaText: "Build Your Web3 Future"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "security",
        title: "Maximum Security",
        content: "Multi-layered security approach with formal verification and attack resistance."
      },
      {
        id: "tokenomics",
        title: "Economic Design",
        content: "Sustainable token models with proper incentive alignment."
      },
      {
        id: "scalability",
        title: "Scalable Solutions",
        content: "Layer 2 integrations and sharding-ready architecture for future growth."
      },
      {
        id: "interoperability",
        title: "Cross-Chain Capability",
        content: "Systems designed to operate across multiple blockchain ecosystems."
      },
      {
        id: "governance",
        title: "Decentralized Governance",
        content: "Progressive decentralization strategies for community ownership."
      },
      {
        id: "compliance",
        title: "Regulatory Foresight",
        content: "Development with awareness of evolving global blockchain regulations."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a Web3 development",
    highlightedText: "Team",
    buttonText: "Pioneer The Decentralized Future",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-violet-600",
    buttonGradientFrom: "from-violet-500",
    buttonGradientTo: "to-fuchsia-600",
    buttonHoverFrom: "from-violet-600",
    buttonHoverTo: "to-fuchsia-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="/images/pages/web3.jpeg"
          alt="Web3 Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "DeFi Protocol Development",
            description: "Custom financial protocols with secure lending, staking, and yield optimization mechanisms.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-violet-600"
          },
          {
            id: 2,
            title: "DAO & Governance Systems",
            description: "Decentralized organizational structures with transparent voting and incentive mechanisms.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-fuchsia-600"
          },
          {
            id: 3,
            title: "Metaverse Infrastructure",
            description: "Technical foundations for virtual worlds with ownership, identity, and economic systems.",
            image: "/images/purplebg-logo.png",
            accentColor: "bg-blue-600"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="violet"
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