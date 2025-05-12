import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import FAQSection from "../../components/services/faqSection";
import HeroSection from "../../components/video-service/hero";
import VideoMetrics from "../../components/video-service/matrics";
import TextHero from "../../components/video-service/textHero";
import TypesVideo from "../../components/video-service/types";
import HowWeMakeSection from "../../components/video-service/videoHighlight";
import VideoEditingWorkflow from "../../components/video-service/videoWorkflow";

export default function Home() {
  const faqItems = [
    {
      question: "How much does commercial video editing cost?",
      answer: "Pricing typically ranges from $500 for basic commercials to $5,000+ for premium branded content and high-end productions."
    },
    {
      question: "How long does it take to produce a commercial video?",
      answer: "Turnaround time is usually 1 to 3 weeks, depending on commercial length, complexity, and revision rounds."
    },
    {
      question: "What type of editing software do you use?",
      answer: "We use industry-standard professional tools like Adobe Premiere Pro, After Effects, DaVinci Resolve, and Cinema 4D."
    },
    {
      question: "Do you provide script development and storyboarding?",
      answer: "Yes, we offer comprehensive pre-production services including scriptwriting, storyboarding, and shot planning to ensure your commercial vision is fully realized."
    },
    {
      question: "Can you produce ads for specific platforms like TV, social media, or websites?",
      answer: "Absolutely! We create platform-specific advertisements optimized for each medium's unique requirements and audience engagement patterns."
    }
  ];

  const heroFeatures = [
    "Cinematic Production",
    "Brand-Focused Storytelling",
    "Advanced VFX & Animation"
  ];

  // Define all properties for TypesVideo including services with videoIds
  const videoTypesProps = {
    title: "Commercial & Ad Video Production",
    backgroundColor: "bg-black",
    textColor: "text-white",
    accentColor: "#0ea5e9",
    showCTA: true,
    ctaText: "Start Your Commercial Project",
    ctaLink: "#contact",
    services: [
      {
        title: "TV Commercials",
        icon: "Tv",
        color: "#0ea5e9",
        features: ["Broadcast-ready production", "Strategic storytelling", "High-impact visual branding"],
        videoId: "jYTZ9U_R_Y0"
      },
      {
        title: "Social Media Ads",
        icon: "Share2",
        color: "#8b5cf6",
        features: ["Platform-optimized formats", "Attention-grabbing openings", "Engagement-driven content"],
        videoId: "b5NQy0IqMIY"
      },
      {
        title: "Product Demonstrations",
        icon: "Package",
        color: "#ef4444",
        features: ["Feature highlighting", "Technical visualization", "Benefit-focused presentation"],
        videoId: "IhrBmx78ZO0"
      },
      {
        title: "Corporate Videos",
        icon: "Briefcase",
        color: "#22c55e",
        features: ["Brand identity reinforcement", "Professional presentation", "Mission-aligned messaging"],
        videoId: "nuTtFw6EvGM"
      },
      {
        title: "Motion Graphics Ads",
        icon: "LineChart",
        color: "#f59e0b",
        features: ["Dynamic data visualization", "Custom animations", "Modern design aesthetics"],
        videoId: "Aeb4SfWmkXU"
      }
    ]
  };

  return (
    <div>
      <HeroSection
        tagline="Craft. Convert. Captivate."
        subtitle="Commercial Video Production"
        description="We produce high-impact advertisements that convert viewers into customers, combining strategic messaging with cinematic quality for measurable results."
        videoSrc="/vdoEditing.mp4"
        buttonText="Elevate Your Brand"
        features={heroFeatures}
      />
      <BrandSlider />

      <TextHero
        tagline="Craft. Convert. Captivate."
        subtitle="Commercial & Ads Video Production"
        description="We create powerful commercial content that drives conversions and strengthens brand identity, crafted with strategic precision and creative excellence. Our team of industry professionals transforms your marketing vision into compelling advertisements that engage target audiences and deliver measurable results. From concept development to final delivery, we handle every aspect of commercial production with meticulous attention to your business objectives."
        imageSrc="https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Fvideo-editing-software.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fm=jpg&fp-x=0.6038&fp-y=0.2953&h=630&q=80&w=1200&s=e4cd9747c8ad6c7ca16107c212a79125"
        buttonText="Elevate Your Brand"
        location="Bhaktapur"
        companyName="FoxBeep"
      />
      <VideoMetrics
        title="The Commercial Video Advantage"
        tagline="Transform viewers into customers"
        stats={[
          { percentage: "93%", label: "BRAND AWARENESS" },
          { percentage: "80%", label: "PURCHASE INTENT" },
          { percentage: "64%", label: "CONVERSION RATE" }
        ]}
        description="In today's competitive market, high-quality commercial videos aren't optional—they're essential for brand differentiation and customer acquisition."
        benefits={[
          "Video ads increase purchase intent by 97%",
          "Commercials boost brand association by 139%",
          "Video marketing delivers 66% more qualified leads annually"
        ]}
        subtitle="Measurable ROI through visual storytelling"
        buttonText="Start Your Commercial Campaign"
        accentColor="black"
        backgroundColor="bg-gray-50"
        showCTA={true}
        ctaLink="#contact"
      />
      <HowWeMakeSection
        primaryText="Watch how we elevate"
        highlightedText="YOUR"
        secondaryText="brand"
        description="Our production team translates your brand message into powerful visual narratives that resonate with your target audience and drive business results."
        buttonText="See Our Process"
        videoSrc="/vdoEditing.mp4"
        posterImage="/commercial-thumbnail.jpg"
        accentColor="purple"
        backgroundColor="bg-black"
        headingColor="text-white"
        descriptionColor="text-gray-300"
        buttonBgColor="bg-white"
        buttonTextColor="text-black"
        showCTA={true}
        ctaLink="#process"
      />
      <VideoEditingWorkflow />
      <TypesVideo {...videoTypesProps} />
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