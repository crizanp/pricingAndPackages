import BlogShowcase from "./components/home/blogShowcase";
import BrandSlider from "./components/home/companySponsered";
import DevelopmentProcess from "./components/home/developmentProccess";
import HeroSection from "./components/home/hero";
import IndustriesWeServe from "./components/home/industries";
import CompanyMetrics from "./components/home/Matrics";
import MediaProductionGallery from "./components/home/mediaGalleryShowcase";
import SuccessStories from "./components/home/successStories";
import TechShowcase from "./components/home/TechStack";
import TextHeroSection from "./components/home/textHero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandSlider />
      <CompanyMetrics />
      <IndustriesWeServe />
      <SuccessStories />
      <DevelopmentProcess />
      <TechShowcase />
      <MediaProductionGallery />
      <BlogShowcase />
      <TextHeroSection/>
    </div>
  );
}
