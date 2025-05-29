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

export default function ECommerce() {
  const serviceData = {
    title: "eCommerce Development Services",
    description: "We create powerful online stores that boost sales, delight customers, and run smoothly across all devices.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "58",
    reviewLabel: "REVIEWS"
  }
  ;

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Custom eCommerce Development", description: "We build stores that fit your brand and goals." },
      { title: "Responsive Shopping Experiences", description: "Mobile-ready designs that work great everywhere." },
      { title: "Payment Gateway Integration", description: "Safe, easy payments with many options." },
      { title: "Inventory Management Systems", description: "Track and manage your stock with ease." },
      { title: "Platform Migration", description: "Move your store to a better platform, stress-free." },
      { title: "Maintenance & Support", description: "We keep your store fast, safe, and updated." }
    ]
  }
  ;
  const industrySliderData = {
    title: "eCommerce for Every Industry",
    subtitle: "FoxBeep powers eCommerce for brands across all sectors.",
    industries: [
      { title: "Fashion & Apparel", description: "Stylish stores with wishlists and smooth checkouts." },
      { title: "Electronics", description: "Showcase specs, comparisons, and smart features." },
      { title: "Food & Beverages", description: "Easy ordering with delivery and stock control." },
      { title: "Health & Beauty", description: "Personalized shops with smart suggestions." },
      { title: "Home & Furniture", description: "Visual tools like AR for better product views." },
      { title: "Subscription Services", description: "Recurring billing with customer dashboards." }
    ]
  }
  ;
  const devProcessData = {
    title: "How We Build eCommerce Stores",
    description: "Our process ensures secure, fast, and tailored online stores.",
    processSteps: [
      { number: 1, title: "Discovery & Strategy", description: "We plan your store based on goals and audience." },
      { number: 2, title: "UX/UI Design", description: "Clean, modern designs that drive sales." },
      { number: 3, title: "Platform Selection", description: "Pick the right platform for your business." },
      { number: 4, title: "Core Development", description: "We build fast, secure, and scalable stores." },
      { number: 5, title: "Payment & Shipping Setup", description: "Add safe payment and smooth shipping." },
      { number: 6, title: "Quality Assurance", description: "We test everything to make sure it works." },
      { number: 7, title: "Launch & Training", description: "Go live and learn to run your store with ease." }
    ]
  }
  
  const faqItems = [
    {
      question: "How much does eCommerce development cost?",
      answer: "Prices range from $5,000 for basic stores to over $50,000 for large, custom platforms."
    },
    {
      question: "How long does it take to build an eCommerce website?",
      answer: "Usually 6 to 20 weeks, depending on features and complexity."
    },
    {
      question: "Which eCommerce platform do you recommend?",
      answer: "We recommend Shopify, WooCommerce, or Magento—based on your needs."
    },
    {
      question: "Do you provide ongoing maintenance for eCommerce sites?",
      answer: "Yes, we keep your store updated, fast, and secure with full support."
    },
    {
      question: "Can you integrate my existing systems with a new eCommerce store?",
      answer: "Yes! We connect your store with tools like ERP, CRM, and inventory systems."
    }
  ]
  
  const benefitsData = {
    title: "Why Our eCommerce Services Work",
    benefits: [
      "More sales through smarter design",
      "Great on mobile and desktop",
      "Built to grow with your business",
      "Safe and secure checkout",
      "Fast loading and smooth performance"
    ],
    techIcons: [
      { name: "Shopify", isDark: true },
      { name: "WooCommerce", isDark: false },
      { name: "Magento", isDark: true },
      { name: "Stripe", isDark: false },
      { name: "PayPal", isDark: true },
      { name: "BigCommerce", isDark: false },
      { name: "React", isDark: true },
      { name: "MySQL", isDark: false },
      { name: "AWS", isDark: true }
    ],
    ctaText: "Let's Discuss"
  }
  

  const uniqueFeaturesData = {
    title: "Why Pick Foxbeep?",
    features: [
      {
        id: "conversion",
        title: "Designed to Convert",
        content: "We help shoppers buy easily and quickly."
      },
      {
        id: "security",
        title: "Top-Notch Security",
        content: "We keep your store and customers safe from threats."
      },
      {
        id: "scalability",
        title: "Built to Grow",
        content: "Your store can scale with more users, products, and markets."
      },
      {
        id: "performance",
        title: "Fast & Smooth",
        content: "Quick loading times for better user experience."
      },
      {
        id: "integration",
        title: "All-in-One Tools",
        content: "Connect your store to payments, shipping, marketing, and more."
      },
      {
        id: "analytics",
        title: "Smart Insights",
        content: "Track everything so you can keep improving."
      }
    ]
  }
  
  const teamBannerData = {
    title: "Build an eCommerce development",
    highlightedText: "Team",
    buttonText: "Start Your Project",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-600",
    buttonGradientFrom: "from-blue-500",
    buttonGradientTo: "to-blue-600",
    buttonHoverFrom: "from-blue-600",
    buttonHoverTo: "to-blue-700"
  }
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="/images/pages/ecom-dev.jpg"
          alt="eCommerce Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Custom eCommerce Stores",
            description: "Tailor-made online stores with unique user experiences designed to maximize conversions.",
            image: "https://assets-global.website-files.com/62b24ad131ccc0ac5d001739/6538e8b77a7a51b2d43e5ca6_ECommerce.webp",
            accentColor: "bg-blue-500"
          },
          {
            id: 2,
            title: "B2B eCommerce Platforms",
            description: "Specialized wholesale portals with bulk ordering, account management, and custom pricing.",
            image: "https://www.hexafair.com/blog/wp-content/uploads/2020/12/Untitled-design-1.jpg",
            accentColor: "bg-green-500"
          },
          {
            id: 3,
            title: "Marketplace Development",
            description: "Multi-vendor platforms that connect buyers and sellers in a unified shopping ecosystem.",
            image: "https://www.peppercontent.io/blog/wp-content/uploads/2021/11/Marketplace-business-model-examples-types-revenue-model.jpg",
            accentColor: "bg-orange-500"
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