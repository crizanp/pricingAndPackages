import Head from "next/head";
import { handleHashScroll, useSmoothScroll } from "@/hook/scrolling";
import BrandSlider from "../../components/home/companySponsered";
import TextHeroSection from "../../components/home/textHero";
import FAQSection from "../../components/services/faqSection";
import HeroSection from "../../components/video-service/hero";
import VideoMetrics from "../../components/video-service/matrics";
import TextHero from "../../components/video-service/textHero";
import TypesVideo from "../../components/video-service/types";
import HowWeMakeSection from "../../components/video-service/videoHighlight";
import VideoEditingWorkflow from "../../components/video-service/videoWorkflow";

export default function VideoEditingServices() {
  useSmoothScroll();
  handleHashScroll();
  
  // Structured Data for Video Editing Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Video Editing Services",
    "description": "Expert video editing services for YouTube, social media, corporate videos, commercials, events, and educational content. Professional video editors with 4.9★ rating creating engaging, high-quality video content for all platforms.",
    "provider": {
      "@type": "Organization",
      "name": "Foxbeep",
      "url": "https://foxbeep.com",
      "logo": "https://foxbeep.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhaktapur",
        "addressRegion": "Bagmati Province",
        "addressCountry": "Nepal"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+977-9810570201",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://facebook.com/foxbeep",
        "https://twitter.com/foxbeep",
        "https://linkedin.com/company/foxbeep"
      ]
    },
    "serviceType": "Video Editing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Editing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "YouTube Video Editing",
            "description": "Professional YouTube video editing including courses, shorts, podcasts, and explanatory videos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Video Editing",
            "description": "Brand promos, training videos, testimonials, and event highlights for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Video Editing",
            "description": "Instagram Reels, TikTok content, shorts, and viral video packages optimized for each platform"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & Advertisement Editing",
            "description": "Product commercials, brand storytelling, and conversion-focused video ads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Video Editing",
            "description": "Wedding videos, corporate events, concerts, festivals, and conference highlights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Video Editing",
            "description": "E-learning content, tutorials, whiteboard animations, and training materials"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "priceRange": "$100 - $1,500+"
  };

  // FAQ structured data for Video Editing
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does professional video editing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional video editing costs range from $100 for simple edits to $1,500+ for advanced, high-end production with custom effects and animations. Pricing depends on video length, complexity, and platform requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to edit a video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Video editing turnaround time is usually 2 to 10 days, depending on video length, complexity, and the specific platform requirements. Rush delivery options are available for urgent projects."
        }
      },
      {
        "@type": "Question",
        "name": "What video editing software do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use professional video editing tools including Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and After Effects for advanced visual effects and motion graphics to ensure broadcast-quality results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you optimize videos for different platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we tailor videos for each platform's specific requirements, including YouTube, Instagram, TikTok, LinkedIn, Facebook, and commercial broadcast standards with proper aspect ratios and specifications."
        }
      },
      {
        "@type": "Question",
        "name": "Can you edit videos for specific industries or styles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We customize every video project to match your brand, industry requirements, target audience, and specific content style preferences for maximum engagement and effectiveness."
        }
      }
    ]
  };

  // VideoObject structured data for featured videos
  const videoObjectStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Professional Video Editing Services Showcase",
    "description": "See how our professional video editing transforms raw footage into engaging content for YouTube, social media, corporate, and commercial use.",
    "thumbnailUrl": "https://foxbeep.com/images/video-editing-thumbnail.jpg",
    "uploadDate": "2025-01-01",
    "duration": "PT2M30S",
    "contentUrl": "https://foxbeep.com/vdoEditing.mp4",
    "embedUrl": "https://foxbeep.com/embed/video-editing-showcase",
    "publisher": {
      "@type": "Organization",
      "name": "Foxbeep",
      "logo": {
        "@type": "ImageObject",
        "url": "https://foxbeep.com/logo.png"
      }
    }
  };

  // Creating section IDs for consistent linking
  const contactSectionId = "contact";
  const processSectionId = "process";
  
  const faqItems = [
    {
      question: "How much does professional video editing cost?",
      answer: "Professional video editing costs range from $100 for simple edits to $1,500+ for advanced, high-end production with custom effects and animations. The price depends on video length, complexity, number of revisions, and platform-specific requirements. We provide transparent pricing upfront with no hidden fees, and offer package deals for bulk projects."
    },
    {
      question: "How long does it take to edit a video?",
      answer: "Video editing turnaround time is usually 2 to 10 days, depending on video length, complexity, and the specific platform requirements. Simple social media edits can be completed in 2-3 days, while complex corporate videos or commercials may take 7-10 days. We offer rush delivery options for urgent projects."
    },
    {
      question: "What type of video editing software do you use?",
      answer: "We use industry-standard professional video editing tools including Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve for color grading, and After Effects for advanced visual effects and motion graphics. This ensures broadcast-quality results and compatibility with all delivery formats."
    },
    {
      question: "Do you optimize videos for different social media platforms?",
      answer: "Yes, we tailor videos for each platform's specific requirements and best practices. This includes proper aspect ratios, duration limits, and engagement optimization for YouTube, Instagram Reels, TikTok, LinkedIn, Facebook, Twitter, and commercial broadcast standards."
    },
    {
      question: "Can you edit videos for specific industries or niches?",
      answer: "Absolutely! We have experience editing videos for various industries including education, healthcare, real estate, finance, technology, entertainment, and more. We customize every project to match your brand guidelines, industry requirements, target audience, and specific content style preferences."
    },
    {
      question: "What's included in your video editing service?",
      answer: "Our comprehensive video editing service includes video cutting and trimming, color correction and grading, audio enhancement and noise reduction, motion graphics and titles, visual effects, music and sound design, platform optimization, and up to 3 rounds of revisions. Final delivery includes multiple formats as needed."
    },
    {
      question: "Do you provide raw footage organization and backup?",
      answer: "Yes, we organize all raw footage systematically and maintain secure backups of your project files for 90 days after delivery. We can also provide project files in native editing formats if you need to make future changes or have internal editing capabilities."
    },
    {
      question: "Can you work with footage shot on different cameras and devices?",
      answer: "Absolutely! We work with footage from professional cameras, smartphones, drones, action cameras, and any other recording devices. We handle various formats including 4K, 8K, HDR, and different frame rates, ensuring consistent quality across all sources in the final edit."
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
    title: "YouTube Video Editing Services",
    id: "youtube-video-editing", 
    backgroundColor: "bg-black",
    textColor: "text-white",
    accentColor: "#0ea5e9",
    showCTA: false,
    ctaText: "Start Your YouTube Project",
    ctaLink: `#${contactSectionId}`, 
    services: [
      {
        title: "Educational & Course Editing",
        icon: "BookOpen",
        color: "#0ea5e9",
        features: ["Interactive learning elements", "Chapter markers & knowledge checks", "Engagement-optimized pacing"],
        videoId: "jYTZ9U_R_Y0"
      },
      {
        title: "Faceless Channel Content (AI)",
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
        title: "Interview & Podcast Editing",
        icon: "Mic",
        color: "#22c55e",
        features: ["Multi-camera switching", "Audio enhancement & noise reduction", "Visual highlight segments"],
        videoId: "nuTtFw6EvGM"
      },
      {
        title: "Explanatory & Tutorial Videos",
        icon: "BookOpen",  
        color: "#f59e0b",
        features: ["Complex concept visualization", "Step-by-step visual breakdowns", "Annotation & emphasis techniques"],
        videoId: "Aeb4SfWmkXU"
      }
    ]
  };

  const videoCorporateTypesProps = {
    title: "Corporate Video Editing Services",
    id: "corporate-video-editing",
    backgroundColor: "bg-white",
    textColor: "text-black", 
    accentColor: "#0f172a", 
    showCTA: false,
    ctaText: "Get a Quote for Corporate Video",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Brand Promotional Videos",
        icon: "TrendingUp",
        color: "#1d4ed8",
        features: ["On-brand visuals & colors", "Impactful motion design", "Professional voiceovers"],
        videoId: "C_u6W1HzZyI" 
      },
      {
        title: "Internal Communication Videos",
        icon: "Briefcase",
        color: "#16a34a",
        features: ["Clear messaging visuals", "Subtitles & infographics", "Confidentiality ensured"],
        videoId: "E_PShG0JHcE"
      },
      {
        title: "Training & Onboarding Videos",
        icon: "BookOpen",
        color: "#0ea5e9",
        features: ["Step-by-step visuals", "Voice-guided walkthroughs", "Consistent style for series"],
        videoId: "XsYfA4k0KNI"
      },
      {
        title: "Client Testimonial Videos",
        icon: "User",
        color: "#f97316",
        features: ["Cinematic interviews", "B-roll integration", "Story-driven editing"],
        videoId: "VYYlzW1UXVg"
      },
      {
        title: "Event Highlight Videos",
        icon: "Calendar",
        color: "#7c3aed",
        features: ["Multi-camera edits", "Branded lower-thirds", "Dynamic transitions & music"],
        videoId: "XMGL4_gDGhY"
      }
    ]
  };

  const videoEventTypesProps = {
    title: "Event Video Editing Services",
    id: "event-video-editing",
    backgroundColor: "bg-black",
    textColor: "text-white",
    accentColor: "#e11d48",
    showCTA: false,
    ctaText: "Start Your Event Project",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Wedding Video Editing",
        icon: "Heart",
        color: "#f43f5e",
        features: ["Cinematic storytelling", "Emotional music syncing", "Highlight & full-length edits"],
        videoId: "qP9Zfjxzy4U"
      },
      {
        title: "Corporate Event Videos",
        icon: "Briefcase",
        color: "#0ea5e9",
        features: ["Key moments montage", "Speaker highlights", "On-brand transitions & graphics"],
        videoId: "koZ1zMHfYf4"
      },
      {
        title: "Concert & Performance Videos",
        icon: "Music",
        color: "#a855f7",
        features: ["Multi-angle cuts", "Rhythmic syncing", "Crowd & artist shots"],
        videoId: "XxWltvG7i_4"
      },
      {
        title: "Festival Video Editing",
        icon: "Sun",
        color: "#facc15",
        features: ["Vibrant transitions", "On-location audio syncing", "Energy-packed pacing"],
        videoId: "b5NQy0IqMIY"
      },
      {
        title: "Conference & Seminar Videos",
        icon: "Presentation",
        color: "#10b981",
        features: ["Slide-syncing", "Speaker close-ups", "Segmented by topic"],
        videoId: "dQw4w9WgXcQ"
      }
    ]
  };

  const videoWhiteboardTypesProps = {
    title: "Educational & Whiteboard Video Editing",
    id: "whiteboard-video-editing",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "#0ea5e9",
    showCTA: false,
    ctaText: "Start Your Educational Project",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Startup Explainer Videos",
        icon: "Rocket",
        color: "#0ea5e9",
        features: ["Script-to-animation flow", "Simple, engaging visuals", "Call-to-action integration"],
        videoId: "J4kYFa7-6nQ"
      },
      {
        title: "Product Demo Videos",
        icon: "Cube",
        color: "#6366f1",
        features: ["Step-by-step feature showcase", "Visual metaphors", "Consistent product branding"],
        videoId: "4QUptm-SBXM"
      },
      {
        title: "Educational Lesson Videos",
        icon: "BookOpen",
        color: "#10b981",
        features: ["Topic breakdowns", "Hand-drawn style animations", "Narration sync"],
        videoId: "eRRLuH7d7gI"
      },
      {
        title: "Business Presentation Videos",
        icon: "Briefcase",
        color: "#f59e0b",
        features: ["Data visualization", "Voiceover & animation coordination", "Process explanations"],
        videoId: "L-_a4jzVj1k"
      },
      {
        title: "Social Media Educational Content",
        icon: "Share2",
        color: "#ef4444",
        features: ["Short & catchy scripts", "Hook-focused intros", "Platform-optimized formats"],
        videoId: "Wcyy_lP7avA"
      }
    ]
  };
  
  const videoAdsCommercialProps = {
    title: "Commercial & Advertisement Video Editing",
    id: "ads-and-commercial",
    backgroundColor: "bg-white",
    textColor: "text-black",
    accentColor: "#ec4899", 
    showCTA: false,
    ctaText: "Start Your Commercial Project",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Product Commercial Videos",
        icon: "ShoppingBag",
        color: "#ec4899", 
        features: ["Product highlighting techniques", "Feature showcase sequences", "Benefit-driven storytelling"],
        videoId: "RX6XeJ2XVqo"
      },
      {
        title: "Brand Storytelling Videos",
        icon: "Award",
        color: "#8b5cf6", 
        features: ["Emotional narrative building", "Brand value visualization", "Identity-consistent aesthetics"],
        videoId: "VTdSO1pqHwc"
      },
      {
        title: "Social Media Advertisement Videos",
        icon: "Megaphone",
        color: "#0ea5e9", 
        features: ["Platform-optimized formats", "Scroll-stopping openers", "CTA-driven editing"],
        videoId: "xPZ2Nm3O4jE"
      },
      {
        title: "Conversion-Focused Marketing Videos",
        icon: "TrendingUp",
        color: "#22c55e", 
        features: ["Sales funnel optimization", "Viewer decision prompts", "Trust-building segments"],
        videoId: "nuTtFw6EvGM"
      },
      {
        title: "TV & OTT Commercial Videos",
        icon: "Film",
        color: "#f59e0b",
        features: ["Broadcast-quality production", "15/30/60 second formats", "Multi-platform deliverables"],
        videoId: "Aeb4SfWmkXU"
      }
    ]
  };

  const videoSocialMediaProps = {
    title: "Social Media Video Editing Services",
    id: "social-media-video-editing",
    backgroundColor: "bg-black",
    textColor: "text-white",
    accentColor: "#8b5cf6", 
    showCTA: false,
    ctaText: "Start Your Social Media Project",
    ctaLink: `#${contactSectionId}`,
    services: [
      {
        title: "Instagram Reels & Stories Editing",
        icon: "Smartphone",
        color: "#E1306C", 
        features: ["Vertical format optimization", "Engaging overlay effects", "Trend-aligned editing style"],
        videoId: "IhrBmx78ZO0"
      },
      {
        title: "TikTok Content Editing",
        icon: "TrendingUp",
        color: "#25F4EE", 
        features: ["Hook-focused opening sequences", "Platform-specific transitions", "Sound-synced editing"],
        videoId: "b5NQy0IqMIY"
      },
      {
        title: "Short-Form Content Creation",
        icon: "Clock",
        color: "#FF0000",
        features: ["Attention-optimized pacing", "Rapid visual storytelling", "Engaging caption integration"],
        videoId: "xPZ2Nm3O4jE"
      },
      {
        title: "Social Media Ad Videos",
        icon: "Video",
        color: "#4267B2", 
        features: ["Scroll-stopping openers", "CTA-optimized structure", "Platform-specific aspect ratios"],
        videoId: "nuTtFw6EvGM"
      },
      {
        title: "Viral Content Video Packages",
        icon: "Film",
        color: "#1DA1F2", 
        features: ["Shareability-focused editing", "Multi-platform optimization", "Trend-ready formatting"],
        videoId: "Aeb4SfWmkXU"
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Professional Video Editing Services | YouTube, Social Media, Corporate | Expert Video Editors | Foxbeep</title>
        <meta name="description" content="Professional video editing services for YouTube, social media, corporate videos, commercials, and events. Expert video editors with 4.9★ rating creating engaging, high-quality content for all platforms and industries." />
        <meta name="keywords" content="video editing services, professional video editor, YouTube video editing, social media video editing, corporate video editing, commercial video editing, event video editing, video production, video post-production, Adobe Premiere Pro editing, Final Cut Pro editing, video marketing, content creation" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Video Editing Services | YouTube, Social Media, Corporate | Foxbeep" />
        <meta property="og:description" content="Expert video editing services with 4.9★ rating. Specializing in YouTube, social media, corporate, and commercial video editing for maximum engagement." />
        <meta property="og:image" content="https://foxbeep.com/images/video-editing-services.png" />
        <meta property="og:url" content="https://foxbeep.com/services/video-editing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Foxbeep Video Editing Services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:video" content="https://foxbeep.com/vdoEditing.mp4" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Video Editing Services | YouTube & Social Media" />
        <meta name="twitter:description" content="Professional video editing services with 4.9★ rating. YouTube, social media, corporate video editing by expert editors." />
        <meta name="twitter:image" content="https://foxbeep.com/images/video-editing-services.png" />
        <meta name="twitter:site" content="@foxbeep" />
        <meta name="twitter:player" content="https://foxbeep.com/vdoEditing.mp4" />
        
        {/* Technical Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service-type" content="Video Editing Services" />
        <meta name="expertise" content="YouTube Editing, Social Media Videos, Corporate Videos, Commercials, Event Videos" />
        <meta name="rating" content="4.9/5 based on 127 reviews" />
        <meta name="specialization" content="Professional Video Editing, Video Post-Production, Motion Graphics, Color Grading" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="NP-03" />
        <meta name="geo.placename" content="Bhaktapur" />
        <meta name="geo.country" content="Nepal" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Video-Specific Meta Tags */}
        <meta name="video-platforms" content="YouTube, Instagram, TikTok, Facebook, LinkedIn, Twitter, TV, OTT" />
        <meta name="video-services" content="Video Editing, Color Grading, Motion Graphics, Sound Design, Visual Effects" />
        <meta name="editing-software" content="Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, After Effects" />
        
        {/* Technology Meta Tags */}
        <meta name="technologies" content="Adobe Creative Suite, Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve, Pro Tools" />
        <meta name="video-formats" content="4K, 8K, HDR, MP4, MOV, AVI, ProRes, H.264, H.265" />
        <meta name="features" content="Color Correction, Motion Graphics, Audio Enhancement, Visual Effects, Multi-Camera Editing" />
        
        {/* Industry Meta Tags */}
        <meta name="industries" content="Education, Healthcare, Real Estate, Finance, Technology, Entertainment, Marketing, E-commerce, Gaming" />
        <meta name="video-types" content="Promotional, Educational, Training, Testimonial, Event, Product Demo, Explainer, Social Media" />
        <meta name="turnaround-time" content="2-10 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://foxbeep.com/services/video-editing" />
        
        {/* Alternate URLs for Different Languages */}
        <link rel="alternate" hrefLang="en" href="https://foxbeep.com/services/video-editing" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectStructuredData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://youtube.com" />
        <link rel="preconnect" href="https://vimeo.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//youtube.com" />
        <link rel="dns-prefetch" href="//vimeo.com" />
        <link rel="dns-prefetch" href="//adobe.com" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Foxbeep" />
        <meta name="publisher" content="Foxbeep" />
        <meta name="copyright" content="© 2025 Foxbeep. All rights reserved." />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Business Information */}
        <meta name="contact" content="+977-9810570201" />
        <meta name="email" content="info@foxbeep.com" />
        <meta name="address" content="Bhaktapur, Nepal" />
        
        {/* Price Range for Rich Snippets */}
        <meta name="price-range" content="$100 - $1,500+" />
        <meta name="currency" content="USD" />
        
        {/* Video Editing Specific Meta Tags */}
        <meta name="editing-time" content="2-10 days" />
        <meta name="video-quality" content="4K, 8K, HDR, Broadcast Quality" />
        <meta name="support" content="Color Grading, Motion Graphics, Audio Enhancement, Visual Effects, Multi-Platform Optimization" />
        <meta name="target-audience" content="Content Creators, Businesses, Marketing Agencies, Educational Institutions, Event Organizers" />
        
        {/* Social Media Optimization */}
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
        <meta name="pinterest-rich-pin" content="true" />
        
        {/* Additional Rich Snippets */}
        <meta name="availability" content="InStock" />
        <meta name="condition" content="New" />
        <meta name="category" content="Video Production Services" />
      </Head>
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
        imageSrc="/images/pages/videoediting.jpg"
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
    </>
  );
  
}