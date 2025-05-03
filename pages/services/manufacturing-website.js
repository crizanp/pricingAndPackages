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

export default function ManufacturingWebsite() {
  const serviceData = {
    title: "Manufacturing Website Development Services",
    description: "We build robust, conversion-focused websites that showcase your manufacturing capabilities and generate qualified leads.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "70",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Product Catalog Integration", description: "Showcase your manufacturing capabilities and product lines." },
      { title: "RFQ & Quote Systems", description: "Custom forms for detailed product specifications and inquiries." },
      { title: "Industrial Design Showcase", description: "High-quality visual presentation of manufacturing processes." },
      { title: "Distributor/Dealer Portals", description: "Secure areas for partners and distribution networks." },
      { title: "CAD File Downloads", description: "Technical specifications and engineering resources." },
      { title: "Supply Chain Integration", description: "Connectivity with procurement and inventory systems." }
    ]
  };
  
  const industrySliderData = {
    title: "Manufacturing Websites for Every Sector",
    subtitle: "FoxBeep creates effective digital platforms across all manufacturing domains.",
    industries: [
      { title: "Industrial Equipment", description: "Showcasing heavy machinery and industrial solutions." },
      { title: "Automotive Manufacturing", description: "Parts, components, and vehicle assembly." },
      { title: "Electronics Manufacturing", description: "Precision components and electronic assemblies." },
      { title: "Aerospace & Defense", description: "Specialized manufacturing for aviation and defense." },
      { title: "Consumer Products", description: "High-volume consumer goods manufacturing." },
      { title: "Custom Fabrication", description: "Custom metal, plastic, and composite materials." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build Manufacturing Websites",
    description: "Our process ensures functional, lead-generating platforms that highlight your manufacturing expertise.",
    processSteps: [
      { number: 1, title: "Manufacturing Capability Assessment", description: "Understanding production capacities and specializations." },
      { number: 2, title: "Industrial Audience Analysis", description: "Identifying key B2B customer segments and procurement needs." },
      { number: 3, title: "Technical Content Planning", description: "Structuring product specifications and industrial applications." },
      { number: 4, title: "Industrial UX Design", description: "Creating intuitive interfaces for technical decision-makers." },
      { number: 5, title: "Enterprise Integration", description: "Connecting with ERP, CRM, and supply chain systems." },
      { number: 6, title: "Lead Generation Implementation", description: "Developing pathways for qualified industrial inquiries." },
      { number: 7, title: "Technical SEO Optimization", description: "Maximizing visibility for industrial search terms." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does a manufacturing website cost?",
      answer: "Costs range from $12,000 for basic manufacturing sites to $60,000+ for comprehensive platforms with product configurators and ERP integration."
    },
    {
      question: "How long does it take to develop a manufacturing website?",
      answer: "Typically 8 to 16 weeks, depending on complexity of product catalog and technical requirements."
    },
    {
      question: "Can you integrate with our ERP system?",
      answer: "Yes, we can integrate with popular manufacturing ERP systems like SAP, Oracle, Epicor, and others for real-time inventory and ordering capabilities."
    },
    {
      question: "How do you handle technical product specifications?",
      answer: "We create structured databases for specifications, with filterable search and parametric comparison tools for engineers and procurement teams."
    },
    {
      question: "Do you provide industrial photography services?",
      answer: "Yes, we offer industrial photography and videography services to showcase your manufacturing processes and facilities."
    }
  ];
  
  const benefitsData = {
    title: "Why Our Manufacturing Website Services Excel",
    benefits: [
      "Intuitive interfaces for complex technical products",
      "Optimized for engineers and procurement professionals",
      "Seamless integration with manufacturing systems",
      "Industrial SEO strategy for B2B lead generation",
      "Robust security for proprietary product information"
    ],
    techIcons: [
      { name: "SAP", isDark: true },
      { name: "Epicor", isDark: false },
      { name: "Oracle", isDark: true },
      { name: "SolidWorks", isDark: false },
      { name: "AutoCAD", isDark: true },
      { name: "Salesforce", isDark: false },
      { name: "PHP", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "MongoDB", isDark: true }
    ],
    ctaText: "Showcase Your Manufacturing"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "technical",
        title: "Technical Expertise",
        content: "Deep understanding of manufacturing specifications and requirements."
      },
      {
        id: "integration",
        title: "ERP Integration",
        content: "Seamless connection with manufacturing and supply chain systems."
      },
      {
        id: "visualization",
        title: "Industrial Visualization",
        content: "Advanced 3D product rendering and process visualization."
      },
      {
        id: "b2b",
        title: "B2B Lead Generation",
        content: "Specialized conversion funnels for industrial procurement."
      },
      {
        id: "configurators",
        title: "Product Configurators",
        content: "Interactive tools for customizing manufacturing solutions."
      },
      {
        id: "global",
        title: "Global Capabilities",
        content: "Multi-language support for international manufacturing operations."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a manufacturing website development",
    highlightedText: "Team",
    buttonText: "Transform Your Industrial Presence",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-blue-800",
    buttonGradientFrom: "from-blue-700",
    buttonGradientTo: "to-blue-800",
    buttonHoverFrom: "from-blue-800",
    buttonHoverTo: "to-blue-900"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative h-screen">
        <img
          src="https://inter-web.co/wp-content/uploads/2021/10/website-development.jpg"
          alt="Manufacturing Facility"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Industrial Equipment Websites",
            description: "Technical product showcases with detailed specifications for industrial machinery and equipment.",
            image: "https://www.thomasnet.com/wp-content/uploads/2019/07/manufacturing-websites-2.jpg",
            accentColor: "bg-blue-700"
          },
          {
            id: 2,
            title: "Parts Manufacturing Platforms",
            description: "Comprehensive catalogs with parametric search for manufactured components and parts.",
            image: "https://www.digitalsilk.com/wp-content/uploads/2022/07/manufacturing-website-design-company-hero-image.jpg",
            accentColor: "bg-gray-700"
          },
          {
            id: 3,
            title: "Custom Fabrication Sites",
            description: "Interactive platforms showcasing custom manufacturing capabilities and materials expertise.",
            image: "https://www.wsijaxfl.com/wp-content/uploads/2020/06/manufacturing-website-design-example-1.jpg",
            accentColor: "bg-indigo-600"
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