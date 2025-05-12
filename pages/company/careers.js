import React, { useState } from 'react';
import { Car, Shield, GraduationCap, Briefcase, Gift, Clock, Globe, Rocket } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';

export default function CareersPage() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  const hiringProcess = [
    {
      title: "Application",
      description: "Submit your online application through our website. Our Talent Acquisition team will assess your skills and experience.",
      step: "01"
    },
    {
      title: "Interview",
      description: "A face-to-face interview will follow so that we can familiarize ourselves with your expertise and experience in the field.",
      step: "02"
    },
    {
      title: "Decision & Offer",
      description: "Congratulations! You have been selected. Sign the agreement and begin the on-boarding process with us.",
      step: "03"
    }
  ];

  const perks = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Vehicle",
      description: "The company's maintained car."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Insurance",
      description: "We ensure all your healthcare needs, including maternity coverage."
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
      title: "Training",
      description: "We have mentors to guide and support you along with training programs to polish your skills."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-yellow-600" />,
      title: "Retirement Planning",
      description: "We plan your retirement through EOBI and gratuity funds."
    },
    {
      icon: <Gift className="w-12 h-12 text-red-600" />,
      title: "Bonuses",
      description: "Pay rise, promotions, and top opportunities for professional development."
    },
    {
      icon: <Clock className="w-12 h-12 text-teal-600" />,
      title: "Comprehensive Leaves",
      description: "Sick, casual, annual, parental, marriage, and hajj leaves."
    }
  ];

  const industries = [
    {
      title: "Automotive",
      description: "Improve vehicle management and enhance customer satisfaction with custom solutions.",
      icon: <Car className="w-16 h-16" />
    },
    {
      title: "Finance",
      description: "Get scalable solutions that improve the efficiency and security of financial services.",
      icon: <Briefcase className="w-16 h-16" />
    },
    {
      title: "Real Estate",
      description: "Streamline operations, simplifying property management and sales.",
      icon: <Globe className="w-16 h-16" />
    },
    {
      title: "Hospitality",
      description: "Create user-friendly solutions that enhance guest experiences and boost customer satisfaction.",
      icon: <Rocket className="w-16 h-16" />
    },
    {
      title: "Education",
      description: "Revolutionize ed-tech with solutions that boost student engagement and simplify learning.",
      icon: <GraduationCap className="w-16 h-16" />
    },
    {
      title: "Healthcare",
      description: "Enhance healthcare by streamlining processes and improving patient care.",
      icon: <Shield className="w-16 h-16" />
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="text-left">
          <h1 className="text-7xl font-black mb-6 tracking-tight">
            YOUR DREAM CAREER BEGINS HERE
          </h1>
          <p className="text-2xl max-w-4xl  mb-12">
            We are on a mission to bring some of the best minds out there to join us in revolutionizing the world of innovation. Come join us!
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-16 text-left">OUR HIRING PROCESS</h2>
          <p className="text-xl text-left mb-16 max-w-4xl ">
            Cubix makes hiring easier by breaking down the steps to working with us. Our process evaluates candidates for technical knowledge, IQ, communication skills, and ability to work in a team environment.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {hiringProcess.map((process, index) => (
              <div 
                key={index}
                className="text-left transform transition-transform hover:scale-105 duration-300"
              >
                <div className="text-6xl font-black text-gray-200 mb-4">{process.step}</div>
                <h3 className="text-3xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks & Benefits */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-16 text-left">OUR PERKS</h2>
          <p className="text-xl text-left mb-16 max-w-4xl ">
            Let us help you build your ideal work-life balance with our amazing perks.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div 
                key={index}
                className="text-left group"
              >
                <div className="flex justify-left mb-6">
                  {perk.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {perk.title}
                </h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-16 text-left">INDUSTRIES WE TRANSFORM</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`
                  text-left p-8 transition-all duration-300 cursor-pointer
                  ${activeIndustry === index 
                    ? 'bg-gray-900 text-white' 
                    : 'hover:bg-gray-900 hover:text-white'
                  }
                `}
                onClick={() => setActiveIndustry(activeIndustry === index ? null : index)}
              >
                <div className="flex justify-left mb-6 opacity-70">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TextHeroSection/>
    </div>
  );
}