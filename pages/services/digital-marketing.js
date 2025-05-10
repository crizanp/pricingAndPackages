import { Percent, TrendingUp, Users } from "lucide-react";
import HeroSection from "../components/digital-marketing/hero";
import MarketingBanner from "../components/digital-marketing/IntegratedMarketing";
import DigitalMarketingProcess from "../components/digital-marketing/marketingProcess";
import SpecificMarketingBanner from "../components/digital-marketing/specificMarketing";
import DigitalMarketingShowcase from "../components/digital-marketing/whyYouNeed";
import FAQSection from "../components/services/faqSection";
import TextHeroSection from "../components/home/textHero";

export default function Home() {
  const faqItems = [
    {
      question: "How much does professional video editing cost?",
      answer: "Pricing typically ranges from $100 for simple edits to $1,500+ for advanced, high-end production with custom effects and animations."
    },
    {
      question: "How long does it take to edit a video?",
      answer: "Turnaround time is usually 2 to 10 days, depending on video length, complexity, and the specific platform requirements."
    },
    {
      question: "What type of editing software do you use?",
      answer: "We use professional tools like Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and After Effects for advanced visual effects and motion graphics."
    },
    {
      question: "Do you optimize videos for different platforms?",
      answer: "Yes, we tailor videos for each platform's specific requirements, including YouTube, Instagram, TikTok, LinkedIn, and commercial broadcast standards."
    },
    {
      question: "Can you edit videos for a specific niche or style?",
      answer: "Absolutely! We customize every project to match your brand, niche, target audience, and content style preferences."
    }
  ];
  return (
    <div>
      
      <HeroSection />
      <DigitalMarketingShowcase />
      <DigitalMarketingProcess />
      <MarketingBanner />
      <SpecificMarketingBanner
        backgroundColor="bg-white"
        id="telegram-promotion"
        borderColor="border-gray-700"
        textColor="text-black"
        headingColor="text-black"
        paragraphColor="text-gray-800"
        accentColor="text-cyan-600"
        ctaButtonColor="bg-cyan-600"
        graphicBgColor="bg-cyan-900"
        graphicDotsColor="bg-cyan-500"
        graphicLinesColor="bg-cyan-400"
        graphicPathColor="rgba(34, 211, 238, 0.6)"
        imageSrc="https://img.freepik.com/free-psd/social-media-logo-design_23-2151296976.jpg?t=st=1746773866~exp=1746777466~hmac=cf77cc2b6f9d50ae1e7c0e9178b03eec771806304ad53e7ddb441698c11edeb7&w=826"
        imageAlt="Telegram promotion illustration"
        showGraphic={true}
        title="Targeted Telegram Promotion"
        content="Leverage the power of Telegram to build communities and drive engagement. Our Telegram marketing solutions help you grow authentic groups, engage members, and spread your message through targeted campaigns, influencer promotions, and AMA sessions."
        showFeatures={true}
        features={[
          "Telegram Group Growth",
          "KOL & Influencer Promotions",
          "Targeted Airdrop Campaigns",
          "AMAs & Community Engagement"
        ]}
        featureIconColor="text-cyan-600"
      />
      <SpecificMarketingBanner
        backgroundColor="bg-gray-700"
        borderColor="border-gray-300"
        id="facebook-ads"
        textColor="text-white"
        headingColor="text-yellow-200"
        paragraphColor="text-orange-100"
        accentColor="text-yellow-200"
        ctaButtonColor="bg-yellow-300"
        ctaTextColor="text-gray-900"
        graphicBgColor="bg-indigo-900"
        graphicDotsColor="bg-yellow-400"
        graphicLinesColor="bg-indigo-400"
        graphicPathColor="rgba(252, 211, 77, 0.5)"
        imageSrc="https://static.vecteezy.com/system/resources/previews/027/224/008/non_2x/facebook-3d-logo-free-png.png"
        imageAlt="Facebook Ads illustration"
        showGraphic={true}
        title="Facebook Ads"
        content="Maximize your brand reach and drive sales with our expertly crafted Facebook advertising campaigns. From audience targeting to ad design and performance optimization, we handle everything to ensure your ads convert and deliver measurable ROI."
        showFeatures={true}
        features={[
          "Targeted Ad Campaigns",
          "Creative Ad Design",
          "Conversion Tracking",
          "A/B Testing & Optimization"
        ]}
        featureIconColor="text-yellow-400"
        featureTextColor="text-indigo-100"
      />

      <SpecificMarketingBanner
        backgroundColor="bg-white"
        borderColor="border-gray-700"
        id="instagram-marketing"
        textColor="text-black"
        headingColor="text-black"
        paragraphColor="text-gray-800"
        accentColor="text-pink-500"
        ctaButtonColor="bg-pink-500"
        graphicBgColor="bg-pink-900"
        graphicDotsColor="bg-pink-400"
        graphicLinesColor="bg-pink-300"
        graphicPathColor="rgba(244, 114, 182, 0.6)"
        imageSrc="https://static.wixstatic.com/media/7bdab5_388e4220f89f4bd3b258ac0297360e68~mv2.png/v1/crop/x_487,y_144,w_2024,h_1962/fill/w_414,h_384,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3D_rounded_square_with_glossy_Instagram_logo-_2__edited.png"
        imageAlt="Instagram Marketing illustration"
        showGraphic={true}
        title="Engaging Instagram Marketing"
        content="Boost your brand’s visual impact with tailored Instagram marketing campaigns. We help you grow your followers, engage your audience with creative content, and convert views into loyal customers using the power of Instagram."
        showFeatures={true}
        features={[
          "Content Calendar & Reels",
          "Influencer Collaborations",
          "Targeted Ad Campaigns",
          "Audience Engagement Strategies"
        ]}
        featureIconColor="text-pink-500"
      />
      <SpecificMarketingBanner
        backgroundColor="bg-gray-700"
        borderColor="border-gray-300"
        id="google-youtube-ads"
        textColor="text-white"
        headingColor="text-yellow-200"
        paragraphColor="text-orange-100"
        accentColor="text-yellow-200"
        ctaButtonColor="bg-yellow-300"
        ctaTextColor="text-gray-900"
        graphicBgColor="bg-orange-800"
        graphicDotsColor="bg-yellow-300"
        graphicLinesColor="bg-orange-300"
        graphicPathColor="rgba(251, 191, 36, 0.5)"
        imageSrc="https://cdn3d.iconscout.com/3d/free/thumb/free-google-ads-3d-icon-download-in-png-blend-fbx-gltf-file-formats--seo-advertising-marketing-advertisement-logos-and-brands-pack-icons-9325305.png"
        imageAlt="Google and YouTube Ads illustration"
        showGraphic={true}
        title="Powerful Google & YouTube Ads"
        content="Reach customers where they search and watch. Our Google Search and YouTube video ad campaigns are optimized to bring high intent traffic and increase brand visibility. Get discovered at the right moment with the right message."
        showFeatures={true}
        features={[
          "Google Search & Display Ads",
          "YouTube Video Ad Campaigns",
          "Advanced Keyword Targeting",
          "Performance Reporting"
        ]}
        featureIconColor="text-red-600"
      />


      {/* Dark theme banner variant */}
      <SpecificMarketingBanner
        backgroundColor="bg-white"
        borderColor="border-gray-700"
        id="seo"
        textColor="text-black"
        headingColor="text-black"
        paragraphColor="text-gray-800"
        accentColor="text-blue-600"
        ctaButtonColor="bg-blue-600"
        graphicBgColor="bg-blue-900"
        graphicDotsColor="bg-blue-500"
        graphicLinesColor="bg-blue-400"
        graphicPathColor="rgba(96, 165, 250, 0.6)"
        imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/rocket-open-laptop-green-background-startup-concept-digital-illustration-ai-PhotoRoom-1.webp"
        imageAlt="SEO optimization illustration"
        showGraphic={true}
        title="Custom SEO Solutions"
        content="Our search engine optimization services are tailored to your specific industry and business goals. We implement proven strategies that increase your visibility in search results and drive qualified traffic to your website. With a focus on both on-page and off-page techniques, we ensure your digital presence is optimized for maximum performance."
        showFeatures={true}
        features={[
          "Keyword Research & Analysis",
          "On-Page SEO Optimization",
          "Link Building Strategies",
          "Technical SEO Audits"
        ]}
        featureIconColor="text-blue-600"
      />

      {/* Social Media Marketing Banner */}
      <SpecificMarketingBanner
        backgroundColor="bg-gray-700"
        borderColor="border-gray-300"
        id="social-media-marketing"
        textColor="text-white"
        headingColor="text-yellow-200"
        paragraphColor="text-orange-100"
        accentColor="text-yellow-200"
        ctaButtonColor="bg-yellow-300"
        ctaTextColor="text-gray-900"
        graphicBgColor="bg-indigo-900"
        graphicDotsColor="bg-yellow-400"
        graphicLinesColor="bg-indigo-400"
        graphicPathColor="rgba(252, 211, 77, 0.5)"
        imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/Group-236-1.webp"
        imageAlt="Social media marketing illustration"
        showGraphic={true}
        title="Social Media Marketing"
        content="Leverage the power of social media platforms to connect with your audience and build brand awareness. Our team creates engaging content strategies that resonate with your target demographic, fostering community growth and increasing engagement. From content creation to paid advertising, we manage every aspect of your social media presence."
        showFeatures={true}
        features={[
          "Platform-Specific Strategies",
          "Content Creation & Curation",
          "Community Management",
          "Paid Social Campaigns"
        ]}
        featureIconColor="text-yellow-400"
        featureTextColor="text-indigo-100"
      />

      {/* Performance Marketing Banner */}
      <SpecificMarketingBanner
        backgroundColor="bg-white"
        borderColor="border-gray-700"
        id="performance-marketing"

        textColor="text-black"
        headingColor="text-black"
        paragraphColor="text-gray-800"
        accentColor="text-blue-600"
        ctaButtonColor="bg-blue-600"
        graphicBgColor="bg-blue-900"
        graphicDotsColor="bg-blue-500"
        graphicLinesColor="bg-blue-400"
        graphicPathColor="rgba(96, 165, 250, 0.6)"
        imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/data-dashboard-icon-isometric-illustration-2-PhotoRoom-1-1.webp"
        imageAlt="Performance marketing dashboard"
        showGraphic={true}
        title="Performance Marketing"
        content="We have made successful strides in enabling brands to accelerate growth through highly effective campaigns driven by expertise and insights. Whether it be Google Ads, Instagram Ads or Facebook Ads, we help you devise strategies that drive quality leads and deliver results."
        showFeatures={true}
        features={[
          "Conversion Rate Optimization",
          "Google & Meta Advertising",
          "Campaign Analytics & Reporting",
          "ROI-Focused Strategies"
        ]}
        featureIconColor="text-black"
        featureTextColor="text-black"
        showBadge={true}
        badgeText="High ROI"
        badgeColor="bg-green-700"
        badgeBorderColor="border-black"
        badgeTextColor="text-black"
      />

      {/* Digital Branding Banner */}
      <SpecificMarketingBanner
        backgroundColor="bg-gray-700"
        borderColor="border-gray-300"
        id="branding"

        textColor="text-white"
        headingColor="text-yellow-200"
        paragraphColor="text-orange-100"
        accentColor="text-yellow-200"
        ctaButtonColor="bg-yellow-300"
        ctaTextColor="text-gray-900"
        graphicBgColor="bg-purple-900"
        graphicDotsColor="bg-yellow-400"
        graphicLinesColor="bg-purple-300"
        graphicPathColor="rgba(192, 132, 252, 0.5)"
        imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/mobile-phone-with-light-bulb-screen-concept-ideas-creativity-yellow-background-ai-1-PhotoRoom-1-e1697783704755.png"
        imageAlt="Digital branding concept"
        showGraphic={true}
        title="Digital Branding"
        content="How does your audience perceive your brand right now? How should it be perceived? We help you define and reshape your brand's perception through strategic branding efforts. With a successful track record, SRV Media has assisted businesses of all sizes in strengthening their digital identity."
        showFeatures={true}
        features={[
          "Brand Identity Development",
          "Visual Design Systems",
          "Brand Voice & Messaging",
          "Brand Positioning Strategy"
        ]}
        featureIconColor="text-yellow-400"
        featureTextColor="text-purple-100"
      />

      {/* Public Relations Banner */}
      <SpecificMarketingBanner
        backgroundColor="bg-white"
        borderColor="border-gray-700"
        id="public-relation"

        textColor="text-black"
        headingColor="text-black"
        paragraphColor="text-gray-800"
        accentColor="text-blue-600"
        ctaButtonColor="bg-blue-600"
        graphicBgColor="bg-blue-900"
        graphicDotsColor="bg-blue-500"
        graphicLinesColor="bg-blue-400"
        graphicPathColor="rgba(96, 165, 250, 0.6)"
        imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/pr.webp"
        imageAlt="Public relations illustration"
        showGraphic={true}
        showStars={true}
        title="Public Relations"
        content="Amplify your brand's reputation and connect with the right audience through our comprehensive PR services. As a leading digital marketing company in India, our team ensures your voice reaches top media outlets like TOI, Business Standard, Zee5, and more."
        showFeatures={true}
        features={[
          "Press Release Distribution",
          "Media Relations",
          "Crisis Management",
          "Reputation Monitoring"
        ]}
        featureIconColor="text-black"
        featureTextColor="text-black"
      />

      {/* Content Marketing Banner */}
      <SpecificMarketingBanner
        backgroundColor="bg-gray-700"
        borderColor="border-gray-300"
        id="content-marketing"

        textColor="text-white"
        headingColor="text-yellow-200"
        paragraphColor="text-orange-100"
        accentColor="text-yellow-200"
        ctaButtonColor="bg-yellow-300"
        ctaTextColor="text-gray-900"
        graphicBgColor="bg-orange-800"
        graphicDotsColor="bg-yellow-300"
        graphicLinesColor="bg-orange-300"
        graphicPathColor="rgba(251, 191, 36, 0.5)"
        imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/Content-Marketing.webp"
        imageAlt="Content marketing illustration"
        showGraphic={true}
        showPattern={true}
        patternColor="text-orange-200"
        title="Content Marketing"
        content="From compelling blog posts to high-converting landing pages, we create content that clicks and converts. Our SEO-driven, user-focused strategies ensure that your message resonates with your target audience. With a keen understanding of keyword intent and storytelling."
        showFeatures={true}
        features={[
          "SEO-Optimized Blog Content",
          "Landing Page Copywriting",
          "Email Marketing Campaigns",
          "Video Script Development"
        ]}
        featureIconColor="text-yellow-300"
        featureTextColor="text-orange-100"
      />
      <SpecificMarketingBanner
        backgroundColor="bg-white"
        borderColor="border-gray-700"
        id="email-marketing"

        textColor="text-black"
        headingColor="text-black"
        paragraphColor="text-gray-800"
        accentColor="text-emerald-600"
        ctaButtonColor="bg-emerald-600"
        graphicBgColor="bg-emerald-900"
        graphicDotsColor="bg-emerald-500"
        graphicLinesColor="bg-emerald-400"
        graphicPathColor="rgba(52, 211, 153, 0.6)"
        imageSrc="https://cdn3d.iconscout.com/3d/premium/thumb/email-marketing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--promotion-advertising-digital-pack-business-icons-5914503.png"
        imageAlt="Email marketing illustration"
        showGraphic={true}
        title="Strategic Email Marketing"
        content="Convert leads into loyal customers with high-impact email marketing campaigns. From crafting persuasive content to automating sequences, we ensure your emails stand out in the inbox and drive action with precision targeting and performance analytics."
        showFeatures={true}
        features={[
          "Custom Email Campaigns",
          "Automated Drip Sequences",
          "List Segmentation & Targeting",
          "Performance Tracking & Optimization"
        ]}
        featureIconColor="text-emerald-600"
      />

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