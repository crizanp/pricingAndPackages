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

export default function NFTMarketplaceDevelopment() {
  const serviceData = {
    title: "NFT Marketplace Development Services",
    description: "We build secure, scalable NFT marketplaces that connect creators with collectors in the digital asset economy.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "65",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Smart Contract Development", description: "Secure, audited contracts for minting and trading NFTs." },
      { title: "Marketplace Architecture", description: "Infrastructure for listing, bidding, and purchasing digital assets." },
      { title: "Wallet Integration", description: "Seamless connections to popular cryptocurrency wallets." },
      { title: "Royalty Management", description: "Automated systems for creator royalties on secondary sales." },
      { title: "Community Features", description: "Social engagement tools for collectors and creators." },
      { title: "Analytics Dashboard", description: "Comprehensive metrics for marketplace performance." }
    ]
  };
  
  const industrySliderData = {
    title: "NFT Marketplaces for Every Sector",
    subtitle: "FoxBeep creates effective digital platforms across all NFT domains.",
    industries: [
      { title: "Art Collectibles", description: "Platforms for digital art with provenance verification." },
      { title: "Gaming Assets", description: "Marketplaces for in-game items and characters." },
      { title: "Music & Entertainment", description: "Platforms for audio NFTs and media collectibles." },
      { title: "Real Estate NFTs", description: "Tokenized property and virtual land marketplaces." },
      { title: "Sports Memorabilia", description: "Digital platforms for athlete moments and collectibles." },
      { title: "Fashion & Luxury", description: "Marketplaces for designer digital wearables and authenticity." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build NFT Marketplaces",
    description: "Our process ensures secure, high-performance platforms with creator and collector focus.",
    processSteps: [
      { number: 1, title: "Blockchain Selection", description: "Choosing the optimal chain for your marketplace needs." },
      { number: 2, title: "User Experience Design", description: "Creating intuitive interfaces for both creators and collectors." },
      { number: 3, title: "Smart Contract Development", description: "Building secure, efficient tokenization contracts." },
      { number: 4, title: "Front-end Implementation", description: "Developing responsive, engaging marketplace interfaces." },
      { number: 5, title: "Backend Integration", description: "Connecting blockchain with traditional web architecture." },
      { number: 6, title: "Monetization Strategy", description: "Implementing fee structures and revenue models." },
      { number: 7, title: "Security Auditing", description: "Comprehensive testing of all smart contracts and systems." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does an NFT marketplace development cost?",
      answer: "Costs range from $25,000 for basic marketplaces to $150,000+ for comprehensive platforms with custom features and multi-chain support."
    },
    {
      question: "How long does it take to develop an NFT marketplace?",
      answer: "Typically 12 to 24 weeks, depending on complexity of features, blockchain integration, and security requirements."
    },
    {
      question: "Which blockchain should I use for my NFT marketplace?",
      answer: "We work with Ethereum, Polygon, Solana, Flow, and other chains based on your specific needs for cost, speed, and community."
    },
    {
      question: "Can you integrate with existing wallets and NFT standards?",
      answer: "Yes, we offer comprehensive integration with MetaMask, Coinbase Wallet, WalletConnect, and support ERC-721, ERC-1155, and other NFT standards."
    },
    {
      question: "How do you ensure marketplace security?",
      answer: "We implement rigorous smart contract auditing, secure API architecture, and partner with leading blockchain security firms to test all systems."
    }
  ];
  
  const benefitsData = {
    title: "Why Our NFT Marketplace Services Excel",
    benefits: [
      "Gas-optimized smart contracts for reduced transaction costs",
      "Blockchain-agnostic architecture for maximum flexibility",
      "Intuitive creator tools for minting and collection management",
      "Scalable infrastructure for high-volume trading periods",
      "Multi-platform support across desktop, mobile, and browser extensions"
    ],
    techIcons: [
      { name: "Ethereum", isDark: true },
      { name: "Solidity", isDark: false },
      { name: "React", isDark: true },
      { name: "IPFS", isDark: false },
      { name: "Polygon", isDark: true },
      { name: "Hardhat", isDark: false },
      { name: "Web3.js", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "OpenZeppelin", isDark: true }
    ],
    ctaText: "Launch Your NFT Marketplace"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "security",
        title: "Enterprise Security",
        content: "Audited smart contracts and secure transaction infrastructure."
      },
      {
        id: "scalability",
        title: "Scalable Architecture",
        content: "Systems designed to handle high-volume trading and minting activity."
      },
      {
        id: "monetization",
        title: "Revenue Generation",
        content: "Multiple fee models from minting to secondary market royalties."
      },
      {
        id: "analytics",
        title: "Market Insights",
        content: "Detailed analytics to understand collector behavior and asset performance."
      },
      {
        id: "interoperability",
        title: "Cross-Chain Support",
        content: "Solutions for connecting to multiple blockchain ecosystems."
      },
      {
        id: "mobile",
        title: "Mobile Experience",
        content: "Optimized marketplace interfaces for smartphones and tablets."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build an NFT marketplace development",
    highlightedText: "Team",
    buttonText: "Launch Your NFT Platform Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-600",
    buttonGradientFrom: "from-blue-500",
    buttonGradientTo: "to-purple-600",
    buttonHoverFrom: "from-blue-600",
    buttonHoverTo: "to-purple-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="relative w-full sm:h-screen max-h-screen overflow-hidden">
  <img
    src="https://5.imimg.com/data5/SELLER/Default/2024/12/477004869/EI/FS/EN/79533529/nft-marketplace-development-service-500x500.jpg"
    alt="NFT Marketplace Development"
    className="w-full h-full object-cover object-center"
  />
</div>


      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Art NFT Marketplaces",
            description: "Professional platforms for digital artists to mint, showcase and sell their work to collectors.",
            image: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6",
            accentColor: "bg-purple-500"
          },
          {
            id: 2,
            title: "Gaming Asset Exchanges",
            description: "Specialized marketplaces for in-game items, characters and virtual land ownership.",
            image: "https://images.unsplash.com/photo-1640079421264-61f50d5a7f64",
            accentColor: "bg-blue-600"
          },
          {
            id: 3,
            title: "Multi-Media NFT Hubs",
            description: "Feature-rich platforms for music, video, and interactive digital collectibles.",
            image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0",
            accentColor: "bg-green-500"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="blue"
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