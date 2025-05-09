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

export default function IOSAppDevelopment() {
  const serviceData = {
    title: "iOS App Development Services",
    description: "We build high-performance, user-friendly iOS applications that deliver exceptional mobile experiences.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "72",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Native iOS Development", description: "Pure Swift and SwiftUI apps for optimal performance." },
      { title: "Responsive UI/UX Design", description: "Beautiful interfaces that work across all Apple devices." },
      { title: "Secure Authentication", description: "FaceID, TouchID, and encrypted user verification." },
      { title: "Cloud Integration", description: "iCloud, Firebase, and AWS connectivity solutions." },
      { title: "Apple Watch Extensions", description: "Companion applications for wearable experiences." },
      { title: "App Store Optimization", description: "Strategic submission and marketing for visibility." }
    ]
  };
  
  const industrySliderData = {
    title: "iOS Applications for Every Industry",
    subtitle: "FoxBeep creates effective mobile solutions across all business sectors.",
    industries: [
      { title: "E-commerce", description: "Shopping apps with Apple Pay integration." },
      { title: "Finance & Banking", description: "Secure transaction and account management." },
      { title: "Health & Fitness", description: "HealthKit integration and activity tracking." },
      { title: "Entertainment", description: "Media streaming and interactive content." },
      { title: "Business & Productivity", description: "Enterprise tools and workflow solutions." },
      { title: "Social Networking", description: "Community platforms with real-time features." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build iOS Applications",
    description: "Our process ensures high-quality, scalable, and user-centric mobile experiences.",
    processSteps: [
      { number: 1, title: "Discovery & Requirements", description: "Understanding business goals and user needs." },
      { number: 2, title: "UI/UX Design", description: "Creating Apple Human Interface guideline-compliant designs." },
      { number: 3, title: "Architecture Planning", description: "Establishing solid technical foundation and APIs." },
      { number: 4, title: "Native Development", description: "Swift coding with clean architecture principles." },
      { number: 5, title: "Quality Assurance", description: "Extensive testing across all Apple devices." },
      { number: 6, title: "App Store Submission", description: "Managing the approval process and guidelines." },
      { number: 7, title: "Maintenance & Updates", description: "Ongoing support and iOS version compatibility." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does an iOS app cost to develop?",
      answer: "Costs range from $15,000 for basic apps to $150,000+ for comprehensive applications with complex features."
    },
    {
      question: "How long does it take to develop an iOS app?",
      answer: "Typically 8 to 16 weeks, depending on complexity and feature set."
    },
    {
      question: "Do you provide both iPhone and iPad versions of the app?",
      answer: "Yes, we develop universal apps that work seamlessly across all iOS devices with adaptive layouts."
    },
    {
      question: "Can you update our existing iOS application?",
      answer: "Yes, we can modernize legacy apps, add new features, or completely rebuild with current technologies."
    },
    {
      question: "Do you handle App Store submission and approval?",
      answer: "Yes, we manage the entire submission process, including store listing optimization and compliance."
    }
  ];
  
  const benefitsData = {
    title: "Why Our iOS Development Services Excel",
    benefits: [
      "Swift expertise for maximum performance and security",
      "Apple platform-specific optimizations and features",
      "Seamless multi-device experience across the Apple ecosystem",
      "Intuitive interfaces following Apple Human Interface Guidelines",
      "Rigorous quality testing on all current iOS versions"
    ],
    techIcons: [
      { name: "Swift", isDark: true },
      { name: "SwiftUI", isDark: false },
      { name: "Xcode", isDark: true },
      { name: "Firebase", isDark: false },
      { name: "CoreData", isDark: true },
      { name: "ARKit", isDark: false },
      { name: "CloudKit", isDark: true },
      { name: "CocoaPods", isDark: false },
      { name: "Alamofire", isDark: true }
    ],
    ctaText: "Build Your iOS Application"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "performance",
        title: "Native Performance",
        content: "Pure Swift code for optimal speed and efficiency."
      },
      {
        id: "design",
        title: "Apple Design Excellence",
        content: "Beautiful interfaces that follow platform conventions."
      },
      {
        id: "ecosystem",
        title: "Full Ecosystem Integration",
        content: "Seamless connection with other Apple devices and services."
      },
      {
        id: "analytics",
        title: "User Behavior Insights",
        content: "Data analytics to improve app engagement and retention."
      },
      {
        id: "security",
        title: "Enhanced Security",
        content: "Latest iOS security features and data protection."
      },
      {
        id: "updates",
        title: "Future-Proof Development",
        content: "Forward-compatible code for upcoming iOS versions."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build an iOS app development",
    highlightedText: "Team",
    buttonText: "Create Your iOS App Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-600",
    buttonGradientFrom: "from-blue-500",
    buttonGradientTo: "to-blue-600",
    buttonHoverFrom: "from-blue-600",
    buttonHoverTo: "to-blue-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative h-screen">
        <img
          src="https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2F10_Best_i_OS_Development_Tools_bdf3e41836.png&w=4500&q=90"
          alt="iOS App Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Consumer iOS Apps",
            description: "Engaging mobile applications that connect brands with their customers through exceptional experiences.",
            image: "https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815613b39.jpg",
            accentColor: "bg-blue-500"
          },
          {
            id: 2,
            title: "Enterprise iOS Solutions",
            description: "Secure, scalable business applications that streamline operations and boost productivity.",
            image: "https://www.apptunix.com/blog/wp-content/uploads/sites/3/2020/04/enterprise-app-development.jpg",
            accentColor: "bg-teal-500"
          },
          {
            id: 3,
            title: "Apple Ecosystem Apps",
            description: "Integrated experiences across iPhone, iPad, Apple Watch, and Apple TV.",
            image: "https://developer.apple.com/news/images/og/apple-platform-og.jpg",
            accentColor: "bg-indigo-500"
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