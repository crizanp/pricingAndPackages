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

export default function AndroidAppDevelopment() {
  const serviceData = {
    title: "Android App Development Services",
    description: "We build powerful, feature-rich Android applications that reach the widest audience possible.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "72",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Native Android Development", description: "Kotlin and Java apps for optimal performance." },
      { title: "Material Design UI/UX", description: "Beautiful interfaces following Google's design language." },
      { title: "Biometric Authentication", description: "Fingerprint, face recognition, and secure login systems." },
      { title: "Cloud Backend Integration", description: "Firebase, AWS, and GCP connectivity solutions." },
      { title: "Wearable Extensions", description: "Companion applications for Android Wear devices." },
      { title: "Play Store Optimization", description: "Strategic submission and marketing for visibility." }
    ]
  };
  
  const industrySliderData = {
    title: "Android Applications for Every Industry",
    subtitle: "FoxBeep creates effective mobile solutions across all business sectors.",
    industries: [
      { title: "E-commerce", description: "Shopping apps with Google Pay integration." },
      { title: "Finance & Banking", description: "Secure transaction and account management." },
      { title: "Health & Fitness", description: "Google Fit integration and activity tracking." },
      { title: "Entertainment", description: "Media streaming and interactive content." },
      { title: "Business & Productivity", description: "Enterprise tools and workflow solutions." },
      { title: "Social Networking", description: "Community platforms with real-time features." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Android Applications",
    description: "Our process ensures high-quality, scalable, and user-centric mobile experiences.",
    processSteps: [
      { number: 1, title: "Discovery & Requirements", description: "Understanding business goals and user needs." },
      { number: 2, title: "UI/UX Design", description: "Creating Material Design compliant interfaces." },
      { number: 3, title: "Architecture Planning", description: "Establishing solid technical foundation and APIs." },
      { number: 4, title: "Native Development", description: "Kotlin/Java coding with clean architecture principles." },
      { number: 5, title: "Quality Assurance", description: "Extensive testing across multiple Android devices." },
      { number: 6, title: "Play Store Submission", description: "Managing the approval process and guidelines." },
      { number: 7, title: "Maintenance & Updates", description: "Ongoing support and Android version compatibility." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does an Android app cost to develop?",
      answer: "Costs range from $12,000 for basic apps to $120,000+ for comprehensive applications with complex features."
    },
    {
      question: "How long does it take to develop an Android app?",
      answer: "Typically 8 to 16 weeks, depending on complexity and feature set."
    },
    {
      question: "Do you ensure compatibility across different Android devices?",
      answer: "Yes, we test on multiple screen sizes, resolutions, and Android OS versions for broad compatibility."
    },
    {
      question: "Can you update our existing Android application?",
      answer: "Yes, we can modernize legacy apps, add new features, or completely rebuild with current technologies."
    },
    {
      question: "Do you handle Google Play Store submission and approval?",
      answer: "Yes, we manage the entire submission process, including store listing optimization and compliance."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Android Development Services Excel",
    benefits: [
      "Kotlin expertise for maximum performance and security",
      "Material Design optimizations for intuitive user experiences",
      "Multi-device compatibility across the fragmented Android ecosystem",
      "Performance optimization for various hardware specifications",
      "Rigorous quality testing on all popular Android versions"
    ],
    techIcons: [
      { name: "Kotlin", isDark: true },
      { name: "Java", isDark: false },
      { name: "Android Studio", isDark: true },
      { name: "Firebase", isDark: false },
      { name: "Room", isDark: true },
      { name: "Jetpack", isDark: false },
      { name: "Retrofit", isDark: true },
      { name: "Gradle", isDark: false },
      { name: "Dagger", isDark: true }
    ],
    ctaText: "Build Your Android Application"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "performance",
        title: "Native Performance",
        content: "Pure Kotlin code for optimal speed and efficiency."
      },
      {
        id: "design",
        title: "Material Design Excellence",
        content: "Beautiful interfaces that follow Google's design system."
      },
      {
        id: "compatibility",
        title: "Maximum Device Compatibility",
        content: "Apps that work seamlessly across thousands of device types."
      },
      {
        id: "analytics",
        title: "User Behavior Insights",
        content: "Data analytics to improve app engagement and retention."
      },
      {
        id: "security",
        title: "Enhanced Security",
        content: "Latest Android security features and data protection."
      },
      {
        id: "updates",
        title: "Future-Proof Development",
        content: "Forward-compatible code for upcoming Android versions."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build an Android app development",
    highlightedText: "Team",
    buttonText: "Create Your Android App Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-green-600",
    buttonGradientFrom: "from-green-500",
    buttonGradientTo: "to-green-600",
    buttonHoverFrom: "from-green-600",
    buttonHoverTo: "to-green-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="https://wayspire.in/wp-content/uploads/2022/11/Android-App-Development-1.jpg"
          alt="Android App Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Consumer Android Apps",
            description: "Engaging mobile applications that connect brands with their customers through exceptional experiences.",
            image: "https://cdn.dribbble.com/users/2461751/screenshots/11431532/media/5da2dc04ccf1eaaa65b70d893b7c8be6.png",
            accentColor: "bg-green-500"
          },
          {
            id: 2,
            title: "Enterprise Android Solutions",
            description: "Secure, scalable business applications that streamline operations and boost productivity.",
            image: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/enterprise-mobile-app-development.webp",
            accentColor: "bg-teal-500"
          },
          {
            id: 3,
            title: "Google Ecosystem Apps",
            description: "Integrated experiences across smartphones, tablets, wearables, and Android TV.",
            image: "https://storage.googleapis.com/gweb-cloudblog-publish/images/android_nCqnBL0.max-2000x2000.jpg",
            accentColor: "bg-green-700"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="green"
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