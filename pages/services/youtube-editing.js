import HeroSection from "../components/video-service/hero";
import VideoMatrics from "../components/video-service/matrics";
import TextHero from "../components/video-service/textHero";
import HowWeMakeSection from "../components/video-service/videoHighlight";

export default function Home() {
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
        accentColor="#4ecdc4"
        videoSrc="/vdoEditing.mp4"
        buttonText="See Our Process"
      />
    </div>
  );
}