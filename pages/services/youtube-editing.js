import TextHeroSection from "../components/home/textHero";
import FAQSection from "../components/services/faqSection";
import HeroSection from "../components/video-service/hero";
import VideoMatrics from "../components/video-service/matrics";
import TextHero from "../components/video-service/textHero";
import TypesVideo from "../components/video-service/types";
import HowWeMakeSection from "../components/video-service/videoHighlight";
import VideoEditingWorkflow from "../components/video-service/videoWorkflow";

export default function Home() {
  const faqItems = [
    {
      question: "How much does YouTube video editing cost?",
      answer: "Pricing typically ranges from $100 for simple edits to $1,000+ for advanced, high-end production."
    },
    {
      question: "How long does it take to edit a YouTube video?",
      answer: "Turnaround time is usually 2 to 7 days, depending on video length and complexity."
    },
    {
      question: "What type of editing software do you use?",
      answer: "We use professional tools like Adobe Premiere Pro, Final Cut Pro, and After Effects."
    },
    {
      question: "Do you offer thumbnail design and SEO optimization?",
      answer: "Yes, we can design custom thumbnails and optimize video titles, descriptions, and tags for better reach."
    },
    {
      question: "Can you edit videos for a specific niche or style?",
      answer: "Absolutely! We tailor our edits to match your brand, niche, and content style preferences."
    }
  ];
  
  return (
    <div>
      <HeroSection 
        tagline="Edit. Inspire. Deliver."
        subtitle="Professional Video Editing" 
        description="We create amazing visual experiences that captivate your audience, crafted with precision and creativity for maximum impact."
        videoSrc="/vdoEditing.mp4"
        buttonText="Transform Your Footage"
      />
      <TextHero
        tagline="Edit. Inspire. Deliver."
        subtitle="Youtube Video Editing"
        description="We create amazing visual experiences that captivate your audience, crafted with precision and creativity for maximum impact. Our team of expert editors transforms raw footage into compelling stories that engage and inspire. From color grading to motion graphics, we handle every aspect of post-production with meticulous attention to detail."
        imageSrc="https://d9pfvpeevxz0y.cloudfront.net/blog/wp-content/uploads/2021/06/061121_iMovie-1200x673.jpg"
        buttonText="Transform Your Footage"
        location="Bhaktapur"
        companyName="FoxBeep"
      />
      <VideoMatrics
        accentColor="gray" // Purple color
        buttonText="Get Started Today"
        />
        <HowWeMakeSection
        accentColor="#ed90ed"
        videoSrc="/vdoEditing.mp4"
        buttonText="See Our Process"
      />
      <VideoEditingWorkflow/>
      <TypesVideo/>
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