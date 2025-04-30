import BrandSlider from "./components/home/companySponsered";
import DevelopmentProcess from "./components/home/developmentProccess";
import HeroSection from "./components/home/hero";
import IndustriesWeServe from "./components/home/industries";
import CompanyMetrics from "./components/home/Matrics";
import SuccessStories from "./components/home/successStories";
import TechShowcase from "./components/home/TechStack";

// pages/index.js or app/page.js (depending on your setup)
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BrandSlider/>
      <CompanyMetrics/>
      <IndustriesWeServe/>
      <SuccessStories/>
      <TechShowcase/>
      <DevelopmentProcess/>

    </div>
  );
}
