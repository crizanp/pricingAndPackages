
import TextHeroSection from "../components/home/textHero";
import BenefitsSection from "../components/services/BenefitsSection";
import FAQSection from "../components/services/faqSection";
import DevProcess from "../components/services/ProcessStep";
import ServiceCardSlider from "../components/services/ServiceCardSlider";
import ServicesGrid from "../components/services/ServicesGrid";
import TeamBanner from "../components/services/shortQuickBanner";
import IndustrySlider from "../components/services/sliderService";
import UniqueFeatures from "../components/services/UniqueFeatures";
import ServiceBanner from "../components/services/upperHero";

export default function TelegramMiniAppsDevelopment() {
  const serviceData = {
    title: "Telegram Mini Apps Development Services",
    description: "We build powerful, engaging Mini Apps that unlock new business opportunities within Telegram's 900+ million user ecosystem.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "65",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Custom Mini App Development", description: "Tailored applications for your specific business needs." },
      { title: "Telegram Bot Integration", description: "Seamless connection between bots and Mini Apps." },
      { title: "Payment Processing", description: "Integration with Telegram Payments and cryptocurrency options." },
      { title: "UI/UX Design for Mini Apps", description: "Platform-optimized interfaces with Telegram design language." },
      { title: "Backend Development", description: "Secure, scalable infrastructure for your Mini App." },
      { title: "Analytics Integration", description: "User behavior tracking and performance metrics." }
    ]
  };
  
  const industrySliderData = {
    title: "Telegram Mini Apps for Every Industry",
    subtitle: "FoxBeep creates effective Mini Apps across all business domains.",
    industries: [
      { title: "E-commerce & Retail", description: "In-app stores with seamless checkout experiences." },
      { title: "Finance & Crypto", description: "Payment systems, wallets, and trading platforms." },
      { title: "Games & Entertainment", description: "Interactive experiences within the messenger." },
      { title: "Service Booking", description: "Appointment scheduling and reservation systems." },
      { title: "Community Management", description: "Tools for group admins and community leaders." },
      { title: "Education & Training", description: "Learning platforms and knowledge-sharing systems." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Telegram Mini Apps",
    description: "Our process ensures engaging, high-performance applications that leverage Telegram's unique capabilities.",
    processSteps: [
      { number: 1, title: "Platform Research", description: "Understanding your audience within the Telegram ecosystem." },
      { number: 2, title: "Feature Planning", description: "Identifying key functionality that drives user engagement." },
      { number: 3, title: "UI/UX Design", description: "Creating intuitive interfaces following Telegram design guidelines." },
      { number: 4, title: "Frontend Development", description: "Building responsive WebApp interfaces with optimal performance." },
      { number: 5, title: "Backend Integration", description: "Connecting to secure APIs and data sources." },
      { number: 6, title: "Bot Integration", description: "Seamless connection between chatbots and Mini Apps." },
      { number: 7, title: "Testing & Optimization", description: "Performance tuning for Telegram's environment." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does Telegram Mini App development cost?",
      answer: "Costs range from $8,000 for basic Mini Apps to $45,000+ for feature-rich applications with complex backend integrations."
    },
    {
      question: "How long does it take to develop a Telegram Mini App?",
      answer: "Typically 4 to 12 weeks, depending on complexity of features, integrations, and backend requirements."
    },
    {
      question: "Can Mini Apps integrate with external systems?",
      answer: "Yes, Mini Apps can connect to external APIs, databases, payment processors, and other business systems to provide comprehensive functionality."
    },
    {
      question: "How do users discover my Mini App?",
      answer: "Mini Apps can be shared via direct links, launched from bot conversations, promoted in Telegram channels/groups, or discovered through the official Mini Apps directory."
    },
    {
      question: "Can my Mini App process payments?",
      answer: "Yes, Mini Apps support native Telegram Payments, cryptocurrency transactions, and integration with third-party payment processors."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Telegram Mini Apps Services Excel",
    benefits: [
      "Instant access to Telegram's 900+ million active users",
      "No app store approval process or downloads required",
      "Native integration with Telegram's messaging ecosystem",
      "Cross-platform functionality without multiple codebases",
      "Seamless user authentication via Telegram Login"
    ],
    techIcons: [
      { name: "JavaScript", isDark: true },
      { name: "React", isDark: false },
      { name: "Node.js", isDark: true },
      { name: "TelegramWebApps API", isDark: false },
      { name: "TonConnect", isDark: true },
      { name: "WebView", isDark: false },
      { name: "MongoDB", isDark: true },
      { name: "Firebase", isDark: false },
      { name: "TonKeeper", isDark: true }
    ],
    ctaText: "Launch Your Telegram Mini App"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "experience",
        title: "Platform Expertise",
        content: "Deep understanding of Telegram Mini Apps API capabilities and limitations."
      },
      {
        id: "performance",
        title: "Optimized Performance",
        content: "Lightweight apps that load quickly in Telegram's WebView environment."
      },
      {
        id: "design",
        title: "Telegram-Native Design",
        content: "Interfaces that follow platform guidelines for seamless user experience."
      },
      {
        id: "integration",
        title: "Bot Synergy",
        content: "Powerful combinations of conversational bots with visual Mini Apps."
      },
      {
        id: "payments",
        title: "Monetization Options",
        content: "Multiple revenue models from direct sales to subscriptions."
      },
      {
        id: "security",
        title: "Data Protection",
        content: "Secure handling of user information and transaction data."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a Telegram Mini Apps development",
    highlightedText: "Team",
    buttonText: "Engage 900M+ Telegram Users Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-500",
    buttonGradientFrom: "from-blue-400",
    buttonGradientTo: "to-blue-600",
    buttonHoverFrom: "from-blue-500",
    buttonHoverTo: "to-blue-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1611746869696-b0fcc16b3a3c"
          alt="Telegram Mini Apps Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "E-Commerce Mini Apps",
            description: "In-chat shopping experiences with product catalogs, carts, and seamless checkout.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
            accentColor: "bg-blue-500"
          },
          {
            id: 2,
            title: "Crypto & Finance Solutions",
            description: "Wallets, payment systems, and trading interfaces within the Telegram environment.",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
            accentColor: "bg-cyan-600"
          },
          {
            id: 3,
            title: "Service Booking Apps",
            description: "Appointment scheduling, reservations, and bookings directly through Telegram.",
            image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
            accentColor: "bg-teal-500"
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