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

export default function NewsMediaWebsite() {
  const serviceData = {
    title: "News Media Website Development Services",
    description: "We build dynamic, high-performance news platforms that deliver breaking stories and engage modern audiences.",
    rating: "4.9",
    platform: "ON CLUTCH",
    reviewCount: "65",
    reviewLabel: "REVIEWS"
  };

  const servicesGridData = {
    title: "What's Included?",
    services: [
      { title: "Content Management Systems", description: "Powerful publishing tools for fast-paced newsrooms." },
      { title: "Breaking News Architecture", description: "Infrastructure for real-time updates and alerts." },
      { title: "Multimedia Integration", description: "Video, audio, and interactive content capabilities." },
      { title: "Subscription Systems", description: "Flexible paywalls and membership models." },
      { title: "Comment & Community Tools", description: "Moderated engagement features for reader interaction." },
      { title: "Analytics Dashboard", description: "Comprehensive metrics for content performance." }
    ]
  };
  
  const industrySliderData = {
    title: "News Media Websites for Every Sector",
    subtitle: "FoxBeep creates effective digital platforms across all news media domains.",
    industries: [
      { title: "Daily News Publications", description: "High-traffic sites with breaking news capabilities." },
      { title: "Magazine & Feature Content", description: "Rich multimedia presentation for longform journalism." },
      { title: "Broadcast Media Extensions", description: "Digital platforms for TV and radio outlets." },
      { title: "Industry Newsletters", description: "Specialized B2B news and analysis sites." },
      { title: "Local News Outlets", description: "Community-focused platforms with regional relevance." },
      { title: "Opinion & Analysis Platforms", description: "Sites showcasing editorial perspectives and commentary." }
    ]
  };
  
  const devProcessData = {
    title: "How We Build News Media Websites",
    description: "Our process ensures engaging, high-performance news platforms with editorial control.",
    processSteps: [
      { number: 1, title: "Editorial Needs Assessment", description: "Understanding content workflow and publishing requirements." },
      { number: 2, title: "Audience Analysis", description: "Identifying reader demographics and engagement patterns." },
      { number: 3, title: "Content Architecture", description: "Structuring information hierarchy and categorization." },
      { number: 4, title: "Publishing Interface Design", description: "Creating intuitive dashboards for journalists and editors." },
      { number: 5, title: "Performance Optimization", description: "Building for speed and high-volume traffic handling." },
      { number: 6, title: "Monetization Integration", description: "Implementing advertising, subscription and sponsored content systems." },
      { number: 7, title: "Newsroom Training", description: "Empowering editorial teams with digital publishing skills." }
    ]
  };
  
  const faqItems = [
    {
      question: "How much does a news media website cost?",
      answer: "Costs range from $15,000 for basic news sites to $75,000+ for comprehensive publishing platforms with custom features."
    },
    {
      question: "How long does it take to develop a news media website?",
      answer: "Typically 10 to 20 weeks, depending on complexity of publishing tools and traffic requirements."
    },
    {
      question: "Which CMS platforms do you recommend for news websites?",
      answer: "We work with WordPress, Drupal, or build custom solutions with headless CMS architecture based on your specific editorial workflow."
    },
    {
      question: "Can you migrate content from our existing news platform?",
      answer: "Yes, we offer comprehensive content migration services with preservation of archives, metadata, and SEO value."
    },
    {
      question: "How do you handle high traffic spikes during breaking news?",
      answer: "We implement elastic cloud infrastructure that automatically scales during traffic surges to maintain performance."
    }
  ];
  
  const benefitsData = {
    title: "Why Our News Media Website Services Excel",
    benefits: [
      "Lightning-fast page load speeds for reduced bounce rates",
      "SEO-optimized architecture for maximum visibility",
      "Flexible content publishing workflows for editorial teams",
      "Scalable infrastructure for traffic spikes during breaking news",
      "Multi-platform delivery across desktop, mobile, and apps"
    ],
    techIcons: [
      { name: "WordPress", isDark: true },
      { name: "Drupal", isDark: false },
      { name: "React", isDark: true },
      { name: "GraphQL", isDark: false },
      { name: "AWS", isDark: true },
      { name: "Cloudflare", isDark: false },
      { name: "Elasticsearch", isDark: true },
      { name: "Node.js", isDark: false },
      { name: "Redis", isDark: true }
    ],
    ctaText: "Launch Your News Platform"
  };
  
  const uniqueFeaturesData = {
    title: "Why Choose Foxbeep?",
    features: [
      {
        id: "speed",
        title: "Performance Optimization",
        content: "Lightning-fast loading times even during high-traffic breaking news events."
      },
      {
        id: "workflow",
        title: "Editorial Workflow",
        content: "Streamlined publishing processes designed specifically for newsrooms."
      },
      {
        id: "monetization",
        title: "Revenue Generation",
        content: "Multiple monetization options from advertising to subscriptions."
      },
      {
        id: "analytics",
        title: "Audience Insights",
        content: "Detailed analytics to understand reader behavior and content performance."
      },
      {
        id: "distribution",
        title: "Multi-Channel Distribution",
        content: "Seamless content sharing across social media and news aggregators."
      },
      {
        id: "mobile",
        title: "Mobile News Experience",
        content: "Optimized reading experiences on smartphones and tablets."
      }
    ]
  };
  
  const teamBannerData = {
    title: "Build a news media website development",
    highlightedText: "Team",
    buttonText: "Transform Your Newsroom Now",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-red-600",
    buttonGradientFrom: "from-red-500",
    buttonGradientTo: "to-red-600",
    buttonHoverFrom: "from-red-600",
    buttonHoverTo: "to-red-700"
  };
  
  return (
    <div>
      <ServiceBanner {...serviceData} />

      {/* Full-screen image section below the banner */}
      <div className="w-full relative sm:h-screen">
        <img
          src="https://dxlm84u5gf2hs.cloudfront.net/wp-content/uploads/2018/01/Fotolia_104752853_S.jpg"
          alt="News Media Website Development"
          className="w-full h-full object-cover"
        />
      </div>

      <ServicesGrid {...servicesGridData} />
      <BenefitsSection {...benefitsData} />
      <ServiceCardSlider
        cards={[
          {
            id: 1,
            title: "Digital News Publications",
            description: "Professional news platforms with breaking news capabilities and multimedia content delivery.",
            image: "https://www.webdesignerdepot.com/cdn-origin/uploads/2019/07/nyt.jpg",
            accentColor: "bg-red-500"
          },
          {
            id: 2,
            title: "Subscriber Platforms",
            description: "Membership-based news sites with premium content and exclusive features.",
            image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idvJrPILs6W4/v0/1200x-1.jpg",
            accentColor: "bg-gray-800"
          },
          {
            id: 3,
            title: "Multimedia News Hubs",
            description: "Feature-rich platforms for video, podcasts, and interactive journalism.",
            image: "https://www.wired.com/wp-content/uploads/2016/02/vox-media-2-1200x630.jpg",
            accentColor: "bg-blue-600"
          }
        ]}
        autoplay={true}
        autoplaySpeed={5000}
        darkMode={true}
        accentColor="red"
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