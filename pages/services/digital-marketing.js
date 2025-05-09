import { Percent, TrendingUp, Users } from "lucide-react";
import HeroSection from "../components/digital-marketing/hero";
import MarketingBanner from "../components/digital-marketing/IntegratedMarketing";
import DigitalMarketingProcess from "../components/digital-marketing/marketingProcess";
import SpecificMarketingBanner from "../components/digital-marketing/specificMarketing";
import DigitalMarketingShowcase from "../components/digital-marketing/whyYouNeed";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DigitalMarketingShowcase />
      <DigitalMarketingProcess />
      <MarketingBanner />
      
   {/* Dark theme banner variant */}
<SpecificMarketingBanner 
  backgroundColor="bg-blue-800"  // Darkened gray
  borderColor="border-gray-700"
  textColor="text-white"
  headingColor="text-white"
  paragraphColor="text-gray-300"
  graphicBgColor="bg-blue-900"
  graphicDotsColor="bg-blue-500"
  graphicLinesColor="bg-blue-400"
  graphicPathColor="rgba(96, 165, 250, 0.6)"
  imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/rocket-open-laptop-green-background-startup-concept-digital-illustration-ai-PhotoRoom-1.webp"
  title="Custom SEO Solutions"
  content="Our search engine optimization services are tailored to your specific industry and business goals. We implement proven strategies that increase your visibility in search results and drive qualified traffic to your website. With a focus on both on-page and off-page techniques, we ensure your digital presence is optimized for maximum performance."
/>

{/* Branded theme banner variant */}
<SpecificMarketingBanner 
  backgroundColor="bg-indigo-800"  // Darkened indigo
  borderColor="border-indigo-700"
  textColor="text-white"
  headingColor="text-yellow-300"
  paragraphColor="text-indigo-100"
  graphicBgColor="bg-indigo-900"
  graphicDotsColor="bg-yellow-400"
  graphicLinesColor="bg-indigo-400"
  graphicPathColor="rgba(252, 211, 77, 0.5)"
  imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/Group-236-1.webp"
  title="Social Media Marketing"
  content="Leverage the power of social media platforms to connect with your audience and build brand awareness. Our team creates engaging content strategies that resonate with your target demographic, fostering community growth and increasing engagement. From content creation to paid advertising, we manage every aspect of your social media presence."
/>

<SpecificMarketingBanner 
  backgroundColor="bg-green-800"  // Darkened green
  borderColor="border-green-700"
  textColor="text-white"
  headingColor="text-yellow-200"
  paragraphColor="text-green-100"
  graphicBgColor="bg-green-900"
  graphicDotsColor="bg-yellow-300"
  graphicLinesColor="bg-green-400"
  graphicPathColor="rgba(132, 204, 22, 0.5)"
  imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/data-dashboard-icon-isometric-illustration-2-PhotoRoom-1-1.webp"
  title="Performance Marketing"
  content="We have made successful strides in enabling brands to accelerate growth through highly effective campaigns driven by expertise and insights. Whether it be Google Ads, Instagram Ads or Facebook Ads, we help you devise strategies that drive quality leads and deliver results. By identifying your key performance indicators (KPIs), we grab the attention of your target audience and maximize your ROI with top digital marketing services in India."
/>

<SpecificMarketingBanner 
  backgroundColor="bg-purple-800"  // Darkened purple
  borderColor="border-purple-700"
  textColor="text-white"
  headingColor="text-yellow-300"
  paragraphColor="text-purple-100"
  graphicBgColor="bg-purple-900"
  graphicDotsColor="bg-yellow-400"
  graphicLinesColor="bg-purple-300"
  graphicPathColor="rgba(192, 132, 252, 0.5)"
  imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/mobile-phone-with-light-bulb-screen-concept-ideas-creativity-yellow-background-ai-1-PhotoRoom-1-e1697783704755.png"
  title="Digital Branding"
  content="How does your audience perceive your brand right now? How should it be perceived? We help you define and reshape your brand’s perception through strategic branding efforts. With a successful track record, SRV Media has assisted businesses of all sizes in strengthening their digital identity, ensuring long-term success and market relevance."
/>

<SpecificMarketingBanner 
  backgroundColor="bg-red-800"  // Darkened red
  borderColor="border-red-700"
  textColor="text-white"
  headingColor="text-yellow-300"
  paragraphColor="text-red-100"
  graphicBgColor="bg-red-900"
  graphicDotsColor="bg-yellow-400"
  graphicLinesColor="bg-red-300"
  graphicPathColor="rgba(248, 113, 113, 0.5)"
  imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/pr.webp"
  title="Public Relations"
  content="Amplify your brand’s reputation and connect with the right audience through our comprehensive PR services. As a leading digital marketing company in India, our team ensures your voice reaches top media outlets like TOI, Business Standard, Zee5, and more. We craft the right messaging and get your stories featured where they matter most."
/>

<SpecificMarketingBanner 
  backgroundColor="bg-gray-700"  // Darkened orange
  borderColor="border-orange-600"
  textColor="text-white"
  headingColor="text-yellow-200"
  paragraphColor="text-orange-100"
  graphicBgColor="bg-orange-800"
  graphicDotsColor="bg-yellow-300"
  graphicLinesColor="bg-orange-300"
  graphicPathColor="rgba(251, 191, 36, 0.5)"
  imageSrc="https://www.srvmedia.com/wp-content/uploads/2023/10/Content-Marketing.webp"
  title="Content Marketing"
  content="From compelling blog posts to high-converting landing pages, we create content that clicks and converts. Our SEO-driven, user-focused strategies ensure that your message resonates with your target audience. With a keen understanding of keyword intent and storytelling, we help brands build trust and drive results through powerful content."
/>


      
    </div>
  );
}