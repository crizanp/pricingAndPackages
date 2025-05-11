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

export default function BusinessWebsite() {
  const serviceData = {
    title: "Business Website Development Services",
    description: "We build professional websites that establish your brand, attract customers, and drive business growth.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "62",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Custom Website Design", description: "Unique designs that reflect your brand identity." },
      { title: "Responsive Web Development", description: "Sites that work perfectly on all devices." },
      { title: "CMS Implementation", description: "Easy-to-use content management systems." },
      { title: "SEO Optimization", description: "Built to rank well in search engines." },
      { title: "Analytics Integration", description: "Track performance with powerful insights." },
      { title: "Maintenance & Support", description: "Keeping your site secure, fast, and updated." }
    ]
  };
  
  const industrySliderData = {
    title: "Websites for Every Industry",
    subtitle: "FoxBeep creates effective business websites across all sectors.",
    industries: [
      { title: "Professional Services", description: "Showcase expertise with trust-building elements." },
      { title: "Healthcare", description: "Patient-friendly sites with appointment booking." },
      { title: "Real Estate", description: "Property listings with search and filtering." },
      { title: "Finance & Banking", description: "Secure sites with calculators and resources." },
      { title: "Manufacturing", description: "Highlight capabilities and product catalogs." },
      { title: "Hospitality", description: "Booking systems and virtual tours." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Business Websites",
    description: "Our process ensures professional, functional, and brand-aligned websites.",
    processSteps: [
      { number: 1, title: "Discovery & Strategy", description: "Understanding your goals, audience, and competition." },
      { number: 2, title: "Information Architecture", description: "Planning site structure for optimal user experience." },
      { number: 3, title: "UX/UI Design", description: "Creating wireframes and visual designs." },
      { number: 4, title: "Content Development", description: "Crafting compelling messaging and visuals." },
      { number: 5, title: "Core Development", description: "Building a fast, secure, and responsive website." },
      { number: 6, title: "Testing & QA", description: "Ensuring everything works perfectly." },
      { number: 7, title: "Launch & Training", description: "Going live and learning to manage your site." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does business website development cost?",
      answer: "Prices range from $3,000 for basic sites to $25,000+ for complex business platforms."
    },
    {
      question: "How long does it take to build a business website?",
      answer: "Usually 4 to 12 weeks, depending on complexity and requirements."
    },
    {
      question: "Which CMS do you recommend for business websites?",
      answer: "We recommend WordPress, Drupal, or custom solutions—based on your specific needs."
    },
    {
      question: "Do you provide SEO services with website development?",
      answer: "Yes, we build sites with SEO best practices and can provide ongoing optimization."
    },
    {
      question: "Can you update or redesign my existing business website?",
      answer: "Absolutely! We can modernize your existing site or create a completely new one."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Business Website Services Excel",
    benefits: [
      "Clear messaging that converts visitors",
      "Professional design that builds trust",
      "Fast loading and responsive on all devices",
      "Built for search engines from the ground up",
      "Scalable architecture that grows with your business"
    ],
    techIcons: [
      { name: "WordPress", isDark: true },
      { name: "Drupal", isDark: false },
      { name: "React", isDark: true },
      { name: "Google Analytics", isDark: false },
      { name: "Cloudflare", isDark: true },
      { name: "AWS", isDark: false },
      { name: "PHP", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "MongoDB", isDark: true }
    ],
    ctaText: "Start Your Project"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "branding",
        title: "Brand-Aligned Design",
        content: "Websites that perfectly represent your company's values and identity."
      },
      {
        id: "performance",
        title: "Performance Optimized",
        content: "Lightning-fast load times for better user experience and SEO."
      },
      {
        id: "accessibility",
        title: "Accessibility Focused",
        content: "Inclusive design that reaches all potential customers."
      },
      {
        id: "conversion",
        title: "Conversion Optimized",
        content: "Strategic layouts and CTAs that drive business goals."
      },
      {
        id: "security",
        title: "Enterprise-Grade Security",
        content: "Protection against threats with regular updates and monitoring."
      },
      {
        id: "seo",
        title: "Built for Search",
        content: "Technical SEO implementation for better visibility."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a business website development",
    highlightedText: "Team",
    buttonText: "Get Started Now",
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
      <div className="w-full relative sm:h-screen">
        <img
          src="https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
          alt="Business Website Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Corporate Websites",
            description: "Professional company websites that establish credibility and showcase your services.",
            image: "/api/placeholder/600/400",
            accentColor: "bg-blue-500"
          },
          {
            id: 2,
            title: "Small Business Sites",
            description: "Cost-effective websites that help local businesses attract customers and grow.",
            image: "/api/placeholder/600/400",
            accentColor: "bg-green-500"
          },
          {
            id: 3,
            title: "Service Portfolios",
            description: "Showcase your work and expertise with elegant, conversion-optimized websites.",
            image: "/api/placeholder/600/400",
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