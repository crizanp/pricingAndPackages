'use client'; // only if you're using Next.js 13+ with app router

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Car,
  BarChart4,
  Building2,
  Utensils,
  GraduationCap,
  Heart
} from 'lucide-react';
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
    <div className="w-full bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto sm:mx-0">
            We help businesses in various industries solve real problems with smart, customized solutions built from experience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {industries.map((industry) => (
            <Link href={`/industries/${industry.id}`} key={industry.id}>
              <div
                className={`group p-5 sm:p-6 md:p-8 rounded-xl transition-all duration-300 cursor-pointer border border-gray-800 hover:border-white ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-br from-gray-900 to-gray-900 border-white'
                    : 'bg-gray-900 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800'
                }`}
                onMouseEnter={() => setActiveIndustry(industry.id)}
                onMouseLeave={() => setActiveIndustry('')}
              >
                {/* Icon and Arrow */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <div
                    className={`p-2 sm:p-3 rounded-full ${
                      activeIndustry === industry.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-800 text-purple-400 group-hover:bg-purple-500 group-hover:text-white'
                    } transition-colors duration-300`}
                  >
                    {industry.icon}
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                      activeIndustry === industry.id
                        ? 'text-white translate-x-1'
                        : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-white'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{industry.name}</h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Link href="/industries">
            <button className="px-6 cursor-pointer sm:px-8 py-3 sm:py-4 bg-white hover:from-blue-600 hover:to-purple-700 text-black rounded-full font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-sm sm:text-base">
              Explore Our Industry Solutions
            </button>
          </Link>
        </div>
      </div>

      {/* Banner Component */}
      <div className="mt-16 sm:mt-20">
        <SoftwareTeamBanner />
      </div>
    </div>
  );
}
