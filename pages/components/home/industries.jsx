import { useState } from 'react';
import { ChevronRight, Car, BarChart4, Building2, Utensils, GraduationCap, Heart } from 'lucide-react';
import SoftwareTeamBanner from './SoftwareTeamBanner';

export default function IndustriesWeServe() {
  const [activeIndustry, setActiveIndustry] = useState('');
  
  const industries = [
    {
      id: 'automotive',
      name: 'Automotive',
      icon: <Car />,
      description: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.'
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: <BarChart4 />,
      description: 'Get scalable solutions that improve the efficiency and security of your financial services.'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: <Building2 />,
      description: 'Our real estate solutions streamline operations, simplifying property management and sales.'
    },
    {
      id: 'hospitality',
      name: 'Hospitality',
      icon: <Utensils />,
      description: 'Get user-friendly solutions that enhance guest experiences and boost customer satisfaction.'
    },
    {
      id: 'education',
      name: 'Education',
      icon: <GraduationCap />,
      description: 'Revolutionize ed-tech with solutions that boost student engagement and simplify learning.'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: <Heart />,
      description: 'Our solutions enhance healthcare by streamlining processes and improving patient care.'
    }
  ];

  return (
    <div className="w-full bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-white">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl ">
            With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Industry Cards */}
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className={`group p-8 rounded-xl transition-all duration-300 cursor-pointer border border-gray-800 hover:border-purple-500 ${
                activeIndustry === industry.id ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500' : 'bg-gray-900 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800'
              }`}
              onClick={() => setActiveIndustry(industry.id)}
            >
              {/* Icon and Arrow Container */}
              <div className="flex justify-between items-center mb-6">
                <div className={`p-3 rounded-full ${
                  activeIndustry === industry.id ? 'bg-purple-500 text-white' : 'bg-gray-800 text-purple-400 group-hover:bg-purple-500 group-hover:text-white'
                } transition-colors duration-300`}>
                  {industry.icon}
                </div>
                <ChevronRight className={`transition-transform duration-300 ${
                  activeIndustry === industry.id ? 'text-purple-400 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-purple-400'
                }`} />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white">{industry.name}</h3>
              
              {/* Description */}
              <p className="text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Button
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Explore Our Industry Solutions
          </button>
        </div> */}
      </div>
      <SoftwareTeamBanner/>

    </div>
  );
}