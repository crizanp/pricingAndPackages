import { handleHashScroll, useSmoothScroll } from "@/hook/scrolling";
import BrandSlider from "../components/home/companySponsered";
import TextHeroSection from "../components/home/textHero";
import FAQSection from "../components/services/faqSection";
import HeroSection from "../components/video-service/hero";
import VideoMetrics from "../components/video-service/matrics";
import TextHero from "../components/video-service/textHero";
import TypesVideo from "../components/video-service/types";
import HowWeMakeSection from "../components/video-service/videoHighlight";
import VideoEditingWorkflow from "../components/video-service/videoWorkflow";

export default function Home() {
  useSmoothScroll();
  handleHashScroll();
  // Creating a contact section id for consistent linking
  const contactSectionId = "contact";
  const processSectionId = "process";
  
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

  const heroFeatures = [
    "Professional Editing",
    "4K & 8K Support",
    "Visual Effects",
    "Color Grading",
    "Sound Design"
  ];

  // Define all properties for TypesVideo including services with videoIds
  const videoYoutubeTypesProps = {
    title: "YouTube Video Editing",
    id: "youtube-video-editing", 
    backgroundColor: "bg-black",
    textColor: "text-white",
    accentColor: "#0ea5e9",
    showCTA: false,
    ctaText: "Start Your Video Project",
    ctaLink: `#${contactSectionId}`, 
    services: [
      {
        title: "Courses Editing / E-Learning",
        icon: "BookOpen",
        color: "#0ea5e9",
        features: ["Interactive learning elements", "Chapter markers & knowledge checks", "Engagement-optimized pacing"],
        videoId: "jYTZ9U_R_Y0"
      },
      {
        title: "Faceless Channels (AI)",
        icon: "Video",
        color: "#8b5cf6",
        features: ["AI voice synthesis & narration", "Dynamic motion graphics", "Data-driven content creation"],
        videoId: "b5NQy0IqMIY"
      },
      {
        title: "YouTube Shorts Editing",
        icon: "Film",
        color: "#ef4444",
        features: ["Vertical format optimization", "Hook-focused opening sequences", "Trending effects & transitions"],
        videoId: "IhrBmx78ZO0"
      },
      {
        title: "Interviews/Podcasts",
        icon: "Mic",
        color: "#22c55e",
        features: ["Multi-camera switching", "Audio enhancement & noise reduction", "Visual highlight segments"],
        videoId: "nuTtFw6EvGM"
      },
      {
        title: "Explanatory Videos",
        icon: "BookOpen",
        color: "#f59e0b",
        features: ["Complex concept visualization", "Step-by-step visual breakdowns", "Annotation & emphasis techniques"],
        videoId: "Aeb4SfWmkXU"
      }
    ]
  };
  const videoCorporateTypesProps = {
    title: "Corporate Video Editing",
    id: "corporate-video-editing",
    backgroundColor: "bg-white",
    textColor: "text-black",
    accentColor: "#0f172a", 
    showCTA: false,
    ctaText: "Get a Quote for Your Corporate Video",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Brand Promos",
        icon: "TrendingUp",
        color: "#1d4ed8",
        features: ["On-brand visuals & colors", "Impactful motion design", "Professional voiceovers"],
        videoId: "C_u6W1HzZyI" 
      },
      {
        title: "Internal Communications",
        icon: "Briefcase",
        color: "#16a34a",
        features: ["Clear messaging visuals", "Subtitles & infographics", "Confidentiality ensured"],
        videoId: "E_PShG0JHcE"
      },
      {
        title: "Training & Onboarding",
        icon: "BookOpen",
        color: "#0ea5e9",
        features: ["Step-by-step visuals", "Voice-guided walkthroughs", "Consistent style for series"],
        videoId: "XsYfA4k0KNI"
      },
      {
        title: "Client Testimonials",
        icon: "User",
        color: "#f97316",
        features: ["Cinematic interviews", "B-roll integration", "Story-driven editing"],
        videoId: "VYYlzW1UXVg"
      },
      {
        title: "Event Highlights",
        icon: "Calendar",
        color: "#7c3aed",
        features: ["Multi-camera edits", "Branded lower-thirds", "Dynamic transitions & music"],
        videoId: "XMGL4_gDGhY"
      }
    ]
  };
  const videoEventTypesProps = {
    title: "Event Video Editing",
    id: "event-video-editing",
    backgroundColor: "bg-black",
    textColor: "text-white",
    accentColor: "#e11d48", // A vibrant rose/red tone for emotional impact
    showCTA: false,
    ctaText: "Start Your Event Project",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Weddings",
        icon: "Heart",
        color: "#f43f5e",
        features: ["Cinematic storytelling", "Emotional music syncing", "Highlight & full-length edits"],
        videoId: "qP9Zfjxzy4U"
      },
      {
        title: "Corporate Events",
        icon: "Briefcase",
        color: "#0ea5e9",
        features: ["Key moments montage", "Speaker highlights", "On-brand transitions & graphics"],
        videoId: "koZ1zMHfYf4"
      },
      {
        title: "Concerts & Performances",
        icon: "Music",
        color: "#a855f7",
        features: ["Multi-angle cuts", "Rhythmic syncing", "Crowd & artist shots"],
        videoId: "XxWltvG7i_4"
      },
      {
        title: "Festivals",
        icon: "Sun",
        color: "#facc15",
        features: ["Vibrant transitions", "On-location audio syncing", "Energy-packed pacing"],
        videoId: "b5NQy0IqMIY"
      },
      {
        title: "Conferences & Seminars",
        icon: "Presentation",
        color: "#10b981",
        features: ["Slide-syncing", "Speaker close-ups", "Segmented by topic"],
        videoId: "dQw4w9WgXcQ"
      }
    ]
  };
  const videoWhiteboardTypesProps = {
    title: "Whiteboard Video Editing",
    id: "whiteboard-video-editing",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "#0ea5e9", // Calm blue for clarity and trust
    showCTA: false,
    ctaText: "Start Your Whiteboard Project",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Startup Explainers",
        icon: "Rocket",
        color: "#0ea5e9",
        features: ["Script-to-animation flow", "Simple, engaging visuals", "Call-to-action integration"],
        videoId: "J4kYFa7-6nQ"
      },
      {
        title: "Product Demos",
        icon: "Cube",
        color: "#6366f1",
        features: ["Step-by-step feature showcase", "Visual metaphors", "Consistent product branding"],
        videoId: "4QUptm-SBXM"
      },
      {
        title: "Educational Lessons",
        icon: "BookOpen",
        color: "#10b981",
        features: ["Topic breakdowns", "Hand-drawn style animations", "Narration sync"],
        videoId: "eRRLuH7d7gI"
      },
      {
        title: "Business Presentations",
        icon: "Briefcase",
        color: "#f59e0b",
        features: ["Data visualization", "Voiceover & animation coordination", "Explains services or processes"],
        videoId: "L-_a4jzVj1k"
      },
      {
        title: "Social Media Snippets",
        icon: "Share2",
        color: "#ef4444",
        features: ["Short & catchy scripts", "Hook-focused intros", "Platform-optimized formats"],
        videoId: "Wcyy_lP7avA"
      }
    ]
  };
  
  const videoAdsCommercialProps = {
    title: "Ads & Commercial",
    id: "ads-and-commercial",
    backgroundColor: "bg-white",
    textColor: "text-black",
    accentColor: "#ec4899", 
    showCTA: false,
    ctaText: "Start Your Ad Project",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Product Commercials",
        icon: "ShoppingBag",
        color: "#ec4899", 
        features: ["Product highlighting techniques", "Feature showcase sequences", "Benefit-driven storytelling"],
        videoId: "RX6XeJ2XVqo"
      },
      {
        title: "Brand Storytelling",
        icon: "Award",
        color: "#8b5cf6", 
        features: ["Emotional narrative building", "Brand value visualization", "Identity-consistent aesthetics"],
        videoId: "VTdSO1pqHwc"
      },
      {
        title: "Social Media Ads",
        icon: "Megaphone",
        color: "#0ea5e9", 
        features: ["Platform-optimized formats", "Scroll-stopping openers", "CTA-driven editing"],
        videoId: "xPZ2Nm3O4jE"
      },
      {
        title: "Conversion-Focused Videos",
        icon: "TrendingUp",
        color: "#22c55e", 
        features: ["Sales funnel optimization", "Viewer decision prompts", "Trust-building segments"],
        videoId: "nuTtFw6EvGM"
      },
      {
        title: "TV & OTT Commercials",
        icon: "Film",
        color: "#f59e0b",
        features: ["Broadcast-quality production", "15/30/60 second formats", "Multi-platform deliverables"],
        videoId: "Aeb4SfWmkXU"
      }
    ]
  };
  const videoSocialMediaProps = {
    title : "Social Media Video Editing",
    id: "social-media-video-editing",
    backgroundColor : "bg-black",
    textColor : "text-white",
    accentColor : "#8b5cf6", 
    showCTA : false,
    ctaText : "Start Your Social Media Project",
    ctaLink : `#${contactSectionId}`,
    services : [
      {
        title: "Instagram Reels/Stories",
        icon: "Smartphone",
        color: "#E1306C", 
        features: ["Vertical format optimization", "Engaging overlay effects", "Trend-aligned editing style"],
        videoId: "IhrBmx78ZO0"
      },
      {
        title: "TikTok Content",
        icon: "TrendingUp",
        color: "#25F4EE", 
        features: ["Hook-focused opening sequences", "Platform-specific transitions", "Sound-synced editing"],
        videoId: "b5NQy0IqMIY"
      },
      {
        title: "Short-Form Content",
        icon: "Clock",
        color: "#FF0000",
        features: ["Attention-optimized pacing", "Rapid visual storytelling", "Engaging caption integration"],
        videoId: "xPZ2Nm3O4jE"
      },
      {
        title: "Social Media Ads",
        icon: "Video",
        color: "#4267B2", 
        features: ["Scroll-stopping openers", "CTA-optimized structure", "Platform-specific aspect ratios"],
        videoId: "nuTtFw6EvGM"
      },
      {
        title: "Viral Content Packages",
        icon: "Film",
        color: "#1DA1F2", 
        features: ["Shareability-focused editing", "Multi-platform optimization", "Trend-ready formatting"],
        videoId: "Aeb4SfWmkXU"
      }
    ]
  };
  return (
    <div>
      <HeroSection
        tagline="Edit. Inspire. Deliver."
        subtitle="Professional Video Editing"
        description="We create amazing visual experiences that captivate your audience across all platforms, crafted with precision and creativity for maximum impact."
        videoSrc="/vdoEditing.mp4"
        buttonText="Transform Your Footage"
        features={heroFeatures}
      />
      <BrandSlider />
      <TextHero
        tagline="Edit. Inspire. Deliver."
        subtitle="Professional Video Editing"
        description="We create amazing visual experiences that captivate your audience, crafted with precision and creativity for maximum impact. Our team of expert editors transforms raw footage into compelling stories that engage and inspire. From color grading to motion graphics, we handle every aspect of post-production with meticulous attention to detail for all platforms including YouTube, Instagram, TikTok, corporate presentations, and commercial video."
        imageSrc="https://d9pfvpeevxz0y.cloudfront.net/blog/wp-content/uploads/2021/06/061121_iMovie-1200x673.jpg"
        buttonText="Transform Your Footage"
        location="Bhaktapur"
        companyName="FoxBeep"
      />
      <VideoMetrics
        title="Why Professional Video is Essential"
        tagline="Capture attention in seconds"
        stats={[
          { percentage: "85%", label: "HIGHER CONVERSION" },
          { percentage: "70%", label: "RETENTION RATE" },
          { percentage: "40%", label: "CLICK-THROUGH" }
        ]}
        description="Well-edited videos are now the primary way users consume content online. Without professional video, your digital and marketing presence is incomplete."
        benefits={[
          "Professional videos increase time on site by 88%",
          "Viewers retain 95% of a message when watching quality video",
          "Professional video content generates 1200% more shares than amateur content"
        ]}
        subtitle="The professional video advantage is undeniable"
        buttonText="Start Your Video Journey"
        accentColor="black"
        backgroundColor="bg-gray-50"
        showCTA={true}
        ctaLink={`#${contactSectionId}`}
      />
      <HowWeMakeSection
        primaryText="Watch how we transform"
        highlightedText="YOUR"
        secondaryText="vision"
        description="Our team of professional editors takes your raw footage and turns it into captivating content that resonates with your audience, whether for social media, corporate use, or broadcast."
        buttonText="See Our Process"
        videoSrc="/vdoEditing.mp4"
        posterImage="/thumbnail.jpg"
        accentColor="purple"
        backgroundColor="bg-black"
        headingColor="text-white"
        descriptionColor="text-gray-300"
        buttonBgColor="bg-white"
        buttonTextColor="text-black"
        showCTA={true}
        ctaLink={`#${processSectionId}`}
      />
      <div id={processSectionId}>
        <VideoEditingWorkflow />
      </div>
      <TypesVideo {...videoYoutubeTypesProps} />
      <TypesVideo {...videoAdsCommercialProps} />
      <TypesVideo {...videoSocialMediaProps} />
      <TypesVideo {...videoCorporateTypesProps} />
      <TypesVideo {...videoEventTypesProps} />
      <TypesVideo {...videoWhiteboardTypesProps} />
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