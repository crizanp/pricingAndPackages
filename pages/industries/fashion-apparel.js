import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import { EdtechServices } from "../../components/industry/eduTech";
import { Hero } from "../../components/industry/hero";
import { TextHighlight } from "../../components/industry/textHero";
import FAQSection from "../../components/services/faqSection";

const FashionApparel = () => {
  // This data would typically come from props, CMS, or API
  const heroContent = {
    title: "Transforming Fashion & Apparel Through Digital Innovation",
    subtitle: "Revolutionizing how brands design, showcase, sell, and deliver fashion products in an increasingly digital and sustainable world.",
    buttonText: "Let's connect",
    buttonLink: "#contact",
    backgroundImage: "https://10pearls.com/wp-content/uploads/2025/01/fashion-apparel-Hero-Image.png",
    imageAlt: "Digital fashion technology showcase"
  };

  const textHeroContent = {
    headingText: "TECHNOLOGY IS REDEFINING FASHION & APPAREL BY ACCELERATING",
    highlightWord: "ACCELERATING",
    descriptionText: "Technology is redefining fashion and apparel by accelerating innovation across the entire value chain, from digital design and virtual try-on to sustainable production and personalized shopping experiences. As emerging technologies transform customer expectations, {brandName} helps fashion brands enhance customer engagement and operational efficiency through integrated, intelligent digital fashion ecosystems.",
    brandName: "10Pearls",
    highlightColor: "bg-pink-300"
  };

  const fashionTechContent1 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal fashion and apparel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Digital Commerce Solutions",
      "AR/VR Fashion Experiences",
      "Supply Chain Optimization",
      "Customer Engagement Platforms"
    ],
    featuredService: "Digital Commerce Solutions",
    featuredServiceDescription: "We develop comprehensive fashion e-commerce platforms that deliver immersive, personalized shopping experiences. Our solutions optimize the entire customer journey from discovery to purchase while providing powerful merchandising and management tools for fashion brands.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/digital-commerce-solutions.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "Fashion E-commerce Platforms",
        description: "We create visually stunning, high-performance e-commerce solutions specifically designed for fashion brands. Our platforms feature rich product visualization, intuitive navigation, personalized recommendations, and seamless checkout experiences that drive conversion rates."
      },
      {
        title: "Omnichannel Retail Integration",
        description: "Our omnichannel solutions unify the shopping experience across online, mobile, and physical retail environments. These systems synchronize inventory, customer data, and transactions in real-time, enabling features like click-and-collect, endless aisle, and seamless returns across channels."
      },
      {
        title: "Fashion Merchandising Tools",
        description: "We develop advanced merchandising systems that optimize product assortment, pricing, and promotion strategies. Our tools include visual merchandising features, A/B testing capabilities, and AI-powered analytics that help fashion brands maximize revenue and margin."
      }
    ]
  };

  const fashionTechContent2 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal fashion and apparel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Digital Commerce Solutions",
      "AR/VR Fashion Experiences",
      "Supply Chain Optimization",
      "Customer Engagement Platforms"
    ],
    featuredService: "AR/VR Fashion Experiences",
    featuredServiceDescription: "We create immersive augmented and virtual reality solutions that transform how consumers discover, experience, and interact with fashion products. Our AR/VR technologies bridge the gap between digital and physical retail while reducing returns and enhancing customer confidence.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/ar-vr-fashion-experiences.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "Virtual Try-On Solutions",
        description: "Our advanced virtual try-on applications use AR technology and computer vision to let customers realistically visualize how clothing, accessories, and footwear will look on them. These solutions increase conversion rates and reduce returns by helping customers make more confident purchase decisions."
      },
      {
        title: "3D Product Visualization",
        description: "We develop 3D visualization tools that transform traditional product photography into interactive, engaging experiences. Our solutions allow customers to examine products from every angle, zoom in on details, and customize colors and features before purchasing."
      },
      {
        title: "Virtual Fashion Showrooms",
        description: "Our virtual showroom platforms enable fashion brands to create immersive digital environments for presenting collections to buyers, influencers, and consumers. These solutions reduce sample production costs while expanding global reach beyond traditional physical events."
      }
    ]
  };

  const fashionTechContent3 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal fashion and apparel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Digital Commerce Solutions",
      "AR/VR Fashion Experiences",
      "Supply Chain Optimization",
      "Customer Engagement Platforms"
    ],
    featuredService: "Supply Chain Optimization",
    featuredServiceDescription: "We develop intelligent supply chain solutions that enhance transparency, sustainability, and efficiency across the fashion value chain. Our technologies optimize inventory management, production planning, and logistics while providing real-time visibility into the entire product lifecycle.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/supply-chain-optimization.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "Fashion Inventory Management",
        description: "Our inventory management solutions provide real-time visibility across all channels and locations while optimizing stock levels based on demand forecasts, seasonality, and trend data. These systems reduce carrying costs and markdowns while minimizing stockouts of popular items."
      },
      {
        title: "Sustainable Supply Chain Tracking",
        description: "We create blockchain-based platforms that track and verify the sustainability credentials of fashion products from raw materials to finished goods. These solutions enable transparent communication of ethical and environmental practices to increasingly conscious consumers."
      },
      {
        title: "Predictive Analytics for Fashion",
        description: "Our predictive analytics tools leverage AI and machine learning to forecast trends, optimize production quantities, and reduce waste. These solutions analyze historical sales data, social media trends, and external factors to guide more precise merchandising decisions."
      }
    ]
  };

  const fashionTechContent4 = {
    mainHeading: "Foxbeep services we offer",
    introText: "We have a unique approach to developing your ideal fashion and apparel solutions. Our key focus areas are:",
    companyName: "10Pearls",
    servicesList: [
      "Digital Commerce Solutions",
      "AR/VR Fashion Experiences",
      "Supply Chain Optimization",
      "Customer Engagement Platforms"
    ],
    featuredService: "Customer Engagement Platforms",
    featuredServiceDescription: "We build comprehensive customer engagement solutions that foster deeper connections between fashion brands and their audiences. Our platforms deliver personalized experiences, loyalty programs, and community features that transform one-time purchasers into brand advocates.",
    featuredServiceImage: "https://10pearls.com/wp-content/uploads/2024/12/customer-engagement-platforms.jpg",
    highlightColor: "bg-pink-300",
    featureDetails: [
      {
        title: "Fashion Personalization Engines",
        description: "Our AI-powered personalization systems analyze customer preferences, purchase history, browsing behavior, and style profiles to deliver highly relevant product recommendations, content, and offers. These solutions increase engagement and conversion while enhancing customer satisfaction."
      },
      {
        title: "Fashion Loyalty & Community",
        description: "We develop innovative loyalty platforms and brand communities that reward engagement beyond purchases. Our solutions include gamified experiences, user-generated content features, virtual styling communities, and exclusive digital experiences that deepen emotional connections with fashion brands."
      },
      {
        title: "Clienteling & Styling Applications",
        description: "Our clienteling solutions empower fashion associates with customer insights, purchase history, and styling tools that deliver premium personalized service across channels. These applications blend human expertise with digital capabilities to create high-touch shopping experiences at scale."
      }
    ]
  };

  const faqItems = [
    {
      question: "What types of fashion technology solutions do you offer?",
      answer: "We provide comprehensive fashion technology services including e-commerce platforms, mobile shopping apps, AR/VR try-on experiences, virtual showrooms, supply chain management systems, clienteling solutions, and customer engagement platforms. Our goal is to transform how fashion products are designed, marketed, sold, and experienced."
    },
    {
      question: "How can AR/VR technology benefit my fashion brand?",
      answer: "Augmented and virtual reality technologies enable virtual try-on experiences, 3D product visualization, interactive showrooms, and immersive brand storytelling. These solutions reduce return rates by 30-40%, increase conversion rates, expand global reach without physical limitations, and create memorable brand experiences that drive engagement."
    },
    {
      question: "Can you develop custom e-commerce platforms for fashion brands?",
      answer: "Absolutely. We develop tailored e-commerce solutions for fashion retailers and brands with features specifically designed for apparel, accessories, and footwear. Our platforms include advanced visual merchandising tools, size recommendation engines, outfit builders, and integrated inventory management across channels."
    },
    {
      question: "How do you leverage AI in fashion applications?",
      answer: "We implement AI for trend forecasting, visual search, personalized recommendations, virtual styling, demand prediction, dynamic pricing, and customer segmentation. Our AI solutions help fashion brands anticipate market shifts, reduce overproduction, and deliver highly relevant experiences to each customer."
    },
    {
      question: "What solutions do you offer for sustainable fashion?",
      answer: "We develop blockchain-based traceability platforms, carbon footprint calculators, circular fashion marketplaces, and sustainable material libraries. These technologies enable transparent communication of sustainability credentials, support ethical sourcing, and help brands implement circular business models."
    },
    {
      question: "How do you approach personalization in fashion platforms?",
      answer: "We create fashion-specific personalization engines that consider style preferences, body type, occasion needs, color affinities, and brand affinities. Our solutions deliver personalized product recommendations, content, styling advice, and promotions that make customers feel understood and valued."
    },
    {
      question: "Can you help optimize our fashion supply chain?",
      answer: "Yes, we build comprehensive supply chain management platforms featuring real-time inventory visibility, demand forecasting, production planning, supplier collaboration tools, and logistics optimization. Our solutions help fashion brands reduce lead times, minimize excess inventory, and increase supply chain transparency."
    },
    {
      question: "What analytics capabilities do your fashion solutions include?",
      answer: "Our platforms provide advanced analytics for merchandising performance, customer behavior, trend identification, pricing optimization, and marketing effectiveness. We develop customized dashboards and reporting tools that transform complex fashion retail data into actionable business insights."
    },
    {
      question: "Do you support post-launch maintenance and updates?",
      answer: "Yes, we offer ongoing support, platform optimization, feature enhancements, security updates, and technology modernization. Our managed services ensure your fashion technology solutions remain secure, scalable, and aligned with evolving industry trends and consumer expectations."
    },
    {
      question: "Why choose 10Pearls for fashion technology development?",
      answer: "10Pearls combines deep fashion industry expertise with technical excellence in emerging technologies. We understand the unique requirements of fashion e-commerce, prioritize visually stunning and intuitive experiences, and deliver scalable solutions that advance digital transformation while strengthening brand identity."
    }
  ];

  return (
    <div>
      <Hero {...heroContent} />
      <TextHighlight {...textHeroContent} />
      <BrandSlider />
      <div className="max-w-7xl mx-auto px-4 xl:px-0 my-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl relative inline-block mb-6">
          <span className="bg-pink-300 absolute -bottom-1 left-0 w-full h-4 -z-10 rounded-sm"></span>
          Foxbeep services
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-gray-900">Foxbeep</span>, we take a unique approach to building impactful fashion and apparel solutions. Our core focus areas include:
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Digital Commerce Solutions",
            "Supply Chain Optimization",
            "AR/VR Fashion Experiences",
            "Customer Engagement Platforms",
          ].map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3 text-pink-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15H5v-3.414l8.293-8.293a1 1 0 011.414 0zM7 13h.586L14 6.586 13.414 6 7 12.414V13z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </div>

      <EdtechServices {...fashionTechContent1} />
      <EdtechServices {...fashionTechContent2} />
      <EdtechServices {...fashionTechContent3} />
      <EdtechServices {...fashionTechContent4} />
      <FAQSection
        title="Frequently Asked Questions"
        faqItems={faqItems}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        questionSize="text-2xl"
      />
      <TextHeroSection />
      {/* Rest of the page content would go here */}
    </div>
  );
};

export default FashionApparel;