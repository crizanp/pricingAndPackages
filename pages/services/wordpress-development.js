import TextHeroSection from "../components/home/textHero";
import BenefitsSection from "../components/services/BenefitsSection";
import FAQSection from "../components/services/faqSection";
import DevProcess from "../components/services/ProcessStep";
import ServiceCardSlider from "../components/services/ServiceCardSlider";
import ServicesGrid from "../components/services/ServicesGrid";
import TeamBanner from "../components/services/shortQuickBanner";
import IndustrySlider from "../components/services/sliderService";
import UniqueFeatures from "../components/services/UniqueFeatures";
import MVPServicesBanner from "../components/services/upperHero";

export default function Wordpress() {
  const serviceData = {
    title: "WordPress Development Services",
    description: "We builds custom WordPress solutions that enhance engagement, brand identity, and conversions while delivering smooth, scalable, and secure web experiences.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "52",
    reviewLabel: "REVIEWS"
  };
  const servicesGridData = {
    title: "Whats Included?",
    services: [
      {
        title: "Custom WordPress Development",
        description: "Get tailor-made WordPress solutions aligned with your business goals."
      },
      {
        title: "Theme Design & Development",
        description: "Design visually stunning and responsive themes optimized for performance."
      },
      {
        title: "Plugin Development",
        description: "Extend functionality with custom plugins built to fit your specific needs."
      },
      {
        title: "WooCommerce Development",
        description: "Launch powerful eCommerce stores with seamless WooCommerce integration."
      },
      {
        title: "WordPress Migration",
        description: "Migrate your existing website to WordPress without losing data or SEO."
      },
      {
        title: "Maintenance & Support",
        description: "Ensure your WordPress site stays secure, updated, and bug-free with ongoing support."
      }
    ]
  };
  const benefitsData = {
    title: "Key benefits of our WordPress development services",
    benefits: [
      "Quick turnaround times to get your website to market faster.",
      "Cost-effective solutions while delivering a high-quality website.",
      "Scalable sites to help grow your business.",
      "User-centric and design first approach.",
      "Experienced WordPress developers and designers."
    ],
    techIcons: [
      { name: "WordPress", isDark: true },
      { name: "PHP", isDark: false },
      { name: "jQuery", isDark: true },
      { name: "HTML5", isDark: false },
      { name: "CSS3", isDark: true },
      { name: "MySQL", isDark: false },
      { name: "WooCommerce", isDark: true },
      { name: "Elementor", isDark: false },
      { name: "ACF", isDark: true }
    ],
    ctaText: "Let's Discuss"
  };
  return (
    <div>
      <MVPServicesBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative h-screen">
        <img
          src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?semt=ais_hybrid&w=740"
          alt="WordPress Development"
          className="w-full h-full object-cover"
        />

        {/* Optional overlay text
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Custom WordPress Solutions
            </h2>
            <p className="text-lg md:text-xl">
              Enterprise-grade WordPress development for businesses that demand excellence.
            </p>
          </div>
        </div> */}
      </div>
      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Custom WordPress Themes",
            description: "Responsive themes tailored to your brand with clean, optimized code.",
            image: "https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-32.jpg",
            accentColor: "bg-purple-500"
          },
          {
            id: 2,
            title: "Plugin Development",
            description: "Custom plugins to extend functionality and fit your business needs.",
            image: "https://embed-ssl.wistia.com/deliveries/558fe5180e0e8fc922d31c23ef84d240.jpg",
            accentColor: "bg-blue-500"
          },
          {
            id: 3,
            title: "WooCommerce Solutions",
            description: "Custom e-commerce stores with seamless shopping experiences.",
            image: "https://mobrilz.com/assets/img/woocommerce.png",
            accentColor: "bg-pink-500"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="purple"
      />

      <DevProcess />
      <UniqueFeatures />
      <TeamBanner />
      <IndustrySlider />
      <FAQSection />
      <TextHeroSection />

    </div>
  );
}