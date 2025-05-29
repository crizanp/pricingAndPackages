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
  const industrySliderData = {
    title: "Serving a variety of industries with WordPress",
    subtitle: "FoxBeep provides industry-leading WordPress solutions that transform how businesses operate and engage with customers.",
    industries: [
      {
        title: "Finance",
        description: "Secure WordPress sites for banks, financial advisors, and investment firms.",
      },
      {
        title: "Healthcare",
        description: "HIPAA-compliant WordPress solutions for medical practices and healthcare providers.",
      },
      {
        title: "Media",
        description: "Fast WordPress sites for content publishers, news outlets, and entertainment brands.",
      },
      {
        title: "Telecom",
        description: "Custom WordPress portals for telecom service providers and customer support.",
      },
      {
        title: "Retail",
        description: "WooCommerce and WordPress solutions for online stores and retail businesses.",
      },
      {
        title: "Education",
        description: "Learning management systems built on WordPress for schools and online courses.",
      }
    ]
  };
  const devProcessData = {
    title: "Our WordPress Development Process",
    description: "We follow a systematic approach to deliver high-quality WordPress websites that are secure, optimized, and tailored to your specific business requirements.",
    processSteps: [
      {
        number: 1,
        title: "Discovery & Planning",
        description: "Explore your business needs and goals to establish a clear roadmap for your WordPress website that aligns with your brand identity and target audience."
      },
      {
        number: 2,
        title: "Design & Wireframing",
        description: "Create intuitive user interfaces and responsive layouts that enhance user experience across all devices while maintaining your brand aesthetics."
      },
      {
        number: 3,
        title: "Core Development",
        description: "Build the foundation of your website with clean, optimized code following WordPress best practices for performance and future scalability."
      },
      {
        number: 4,
        title: "Plugin Integration",
        description: "Select and implement the right WordPress plugins to extend functionality while ensuring compatibility and maintaining optimal site performance."
      },
      {
        number: 5,
        title: "Content Implementation",
        description: "Structure and integrate your content with SEO best practices to maximize visibility and engage your target audience effectively."
      },
      {
        number: 6,
        title: "Quality Assurance",
        description: "Conduct comprehensive testing across browsers and devices to identify and resolve any issues, ensuring a flawless user experience."
      },
      {
        number: 7,
        title: "Launch & Training",
        description: "Deploy your website with proper configurations and provide training sessions so you can confidently manage your WordPress site."
      }
    ]
  };
  const faqItems = [
    {
      question: "How much does web development cost?",
      answer: "Web development costs vary widely based on project complexity, features required, and design needs. Simple informational websites may range from $3,000-$10,000, while e-commerce sites or web applications with custom functionality can cost $10,000-$50,000+. Enterprise solutions typically start at $50,000 and can exceed $200,000."
    },
    {
      question: "How long does the development process take?",
      answer: "The timeline for web development typically ranges from 4-16 weeks depending on complexity. Simple websites may be completed in 4-8 weeks, while complex web applications can take 12-16 weeks or longer. Factors affecting timeline include project scope, features required, client feedback cycles, and testing needs."
    },
    {
      question: "Why choose Foxbeep?",
      answer: "Clients choose Foxbeep for our proven track record of delivering high-quality web solutions. We offer expert development teams, transparent communication, competitive pricing, and ongoing support. Our client-centered approach ensures your project meets business objectives while providing exceptional user experiences."
    },
    {
      question: "What technologies do you use?",
      answer: "We utilize modern web technologies including React, Angular, Vue.js for frontend development, and Node.js, Python, PHP for backend solutions. Our database expertise includes MongoDB, PostgreSQL, and MySQL. We also implement responsive design, progressive web apps (PWAs), and serverless architectures when appropriate."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance services include security updates, performance optimization, content updates, technical support, and regular backups."
    }
  ]
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

  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep for WordPress Development",
    features: [
      {
        id: "customization",
        title: "Custom WordPress Solutions",
        content: "We build highly customized WordPress themes and plugins tailored to your specific business needs, ensuring a unique digital presence."
      },
      {
        id: "security",
        title: "Robust Security Practices",
        content: "Our WordPress development incorporates best-in-class security measures, including regular updates, malware scanning, and secure authentication to protect your website and user data."
      },
      {
        id: "userInterface",
        title: "User-Friendly Dashboard",
        content: "We design intuitive and easy-to-navigate admin interfaces, making content management seamless even for non-technical users."
      },
      {
        id: "performance",
        title: "Optimized Performance",
        content: "Our websites are built for speed and efficiency, using clean code, optimized images, and caching strategies to ensure fast load times and excellent SEO performance."
      },
      {
        id: "integration",
        title: "Third-Party Integration",
        content: "We integrate essential tools like payment gateways, CRMs, and marketing platforms, extending WordPress functionality to meet your business goals."
      },
      {
        id: "maintenance",
        title: "Ongoing Support & Maintenance",
        content: "Get peace of mind with our post-launch support plans, including backups, plugin updates, uptime monitoring, and issue resolution."
      }
    ]
  };
  const teamBannerData = {
    title: "Build a WordPress development",
    highlightedText: "Team",
    buttonText: "Start Your Project",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-purple-600",
    buttonGradientFrom: "from-purple-500",
    buttonGradientTo: "to-purple-600",
    buttonHoverFrom: "from-purple-600",
    buttonHoverTo: "to-purple-700"
  };
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="/images/pages/cms-wp.jpg"
          alt="WordPress Development"
          className="w-full h-full object-cover"
        />
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