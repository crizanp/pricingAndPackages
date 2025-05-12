import React, { useState } from 'react';
import { 
  Rocket, 
  Brain, 
  Globe, 
  Users, 
  Award, 
  BookOpen, 
  Zap, 
  Clock, 
  Target 
} from 'lucide-react';

export default function FoxbeepUniversityPage() {
  const [activeProgram, setActiveProgram] = useState(null);

  const internshipPrograms = [
    {
      title: "Tech Innovators Internship",
      description: "Dive into cutting-edge technology projects that push the boundaries of innovation. Work alongside our top engineers and develop solutions that shape the future.",
      icon: <Rocket className="w-16 h-16 text-orange-500" />,
      skills: ["AI/ML", "Cloud Computing", "Blockchain", "IoT"]
    },
    {
      title: "Design & Experience Program",
      description: "Transform user experiences through creative design thinking. Craft intuitive interfaces and user-centric solutions that revolutionize digital interactions.",
      icon: <Brain className="w-16 h-16 text-purple-500" />,
      skills: ["UX/UI Design", "Interaction Design", "Prototyping", "User Research"]
    },
    {
      title: "Global Impact Internship",
      description: "Collaborate on international projects that address real-world challenges. Work with our global teams and make a meaningful difference through technology.",
      icon: <Globe className="w-16 h-16 text-blue-500" />,
      skills: ["Cross-Cultural Collaboration", "Social Innovation", "Global Tech Solutions"]
    }
  ];

  const learningJourney = [
    {
      step: "01",
      title: "Application & Assessment",
      description: "Submit your unique profile. We'll evaluate your potential through a comprehensive skills assessment and innovative problem-solving challenge."
    },
    {
      step: "02",
      title: "Tailored Learning Path",
      description: "Get matched with a personalized internship program that aligns with your strengths, interests, and career aspirations."
    },
    {
      step: "03",
      title: "Immersive Experience",
      description: "Engage in real-world projects, receive mentorship from industry leaders, and transform your potential into breakthrough innovations."
    }
  ];

  const internshipPerks = [
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Mentorship",
      description: "Direct guidance from industry experts and senior innovators."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Recognition",
      description: "Opportunities to showcase your work and gain industry recognition."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-red-600" />,
      title: "Continuous Learning",
      description: "Access to world-class training resources and workshops."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Innovation Challenges",
      description: "Participate in cutting-edge tech challenges and hackathons."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 text-left">
        <h1 className="text-7xl font-black mb-6 tracking-tight text-black">
          FOXBEEP UNIVERSITY
        </h1>
        <p className="text-2xl max-w-4xl mb-12 text-gray-800">
          Unleash your potential. Transform ideas into groundbreaking innovations. Your journey of technological excellence starts here.
        </p>
        <div className="flex justify-left space-x-6">
          <button className="bg-black text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors">
            Apply Now
          </button>
          <button className="border-2 border-black text-black px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Internship Programs */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-16 text-left">
            INTERNSHIP PROGRAMS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <div 
                key={index}
                className={`
                  p-8 text-left transition-all duration-300 border-2
                  ${activeProgram === index 
                    ? 'bg-gray-100 border-black' 
                    : 'hover:bg-gray-100 border-transparent hover:border-black'
                  }
                `}
                onClick={() => setActiveProgram(activeProgram === index ? null : index)}
              >
                <div className="flex justify-left mb-6">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="mb-4 text-gray-700">{program.description}</p>
                <div className="flex flex-wrap justify-left gap-2">
                  {program.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Journey */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-16 text-left">
            YOUR LEARNING JOURNEY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {learningJourney.map((stage, index) => (
              <div 
                key={index}
                className="text-left transform transition-transform hover:scale-105 duration-300"
              >
                <div className="text-6xl font-black text-gray-200 mb-4">{stage.step}</div>
                <h3 className="text-3xl font-bold mb-4">{stage.title}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Internship Perks */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-16 text-left">
            INTERNSHIP ADVANTAGES
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {internshipPerks.map((perk, index) => (
              <div 
                key={index}
                className="text-left group"
              >
                <div className="flex justify-left mb-6">
                  {perk.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-700 transition-colors">
                  {perk.title}
                </h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-24 bg-black text-white">
        <h2 className="text-5xl font-black mb-8">
          YOUR FUTURE STARTS NOW
        </h2>
        <p className="text-2xl max-w-4xl mx-auto  mb-12">
          Break barriers, challenge conventions, and become a tech innovator. Foxbeep University is your launchpad to an extraordinary career.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-white text-black px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-200 transition-colors">
            START YOUR APPLICATION
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white/20 transition-colors">
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}