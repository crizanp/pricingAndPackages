import React, { useState } from 'react';
import { ChevronRight, Monitor, Video, TrendingUp, Blocks, Smartphone, Brain, Globe, Code, ShoppingCart, Building, GraduationCap, Heart, Newspaper, Factory, Play, Target, Instagram, Search, Send, Mail, Users, Cpu, Database, ArrowRight } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';

const servicesData = [
  {
    title: 'Website Development',
    icon: Monitor,
    color: 'blue',
    description: 'Custom web solutions tailored to your business needs',
    items: [
      { name: 'WordPress Development', href: '/services/wordpress-development', icon: Globe },
      { name: 'Ecommerce Development', href: '/services/ecommerce-development', icon: ShoppingCart },
      { name: 'Business Website', href: '/services/business-website', icon: Building },
      { name: 'Educational Website', href: '/services/educational-website', icon: GraduationCap },
      { name: 'Healthcare Website', href: '/services/healthcare-website', icon: Heart },
      { name: 'News and Media Website', href: '/services/news-media-website', icon: Newspaper },
      { name: 'Manufacturing Website', href: '/services/manufacturing-website', icon: Factory },
    ]
  },
  {
    title: 'Video Editing',
    icon: Video,
    color: 'purple',
    description: 'Professional video editing for all your content needs',
    items: [
      { name: 'YouTube Video Editing', href: '/services/video-editing#youtube-video-editing', icon: Play },
      { name: 'Ads & Commercial Editing', href: '/services/video-editing#ads-and-commercial', icon: Target },
      { name: 'Social Media Video Editing', href: '/services/video-editing#social-media-video-editing', icon: Instagram },
      { name: 'Corporate Video Editing', href: '/services/video-editing#corporate-video-editing', icon: Building },
      { name: 'Event Video Editing', href: '/services/video-editing#event-video-editing', icon: Video },
      { name: 'Whiteboard Animation', href: '/services/video-editing#whiteboard-video-editing', icon: Monitor }
    ]
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    color: 'green',
    description: 'Comprehensive digital marketing strategies to grow your business',
    items: [
      { name: 'Facebook Ads', href: '/services/digital-marketing#facebook-ads', icon: Target },
      { name: 'Instagram Marketing', href: '/services/digital-marketing#instagram-marketing', icon: Instagram },
      { name: 'Google & YouTube Ads', href: '/services/digital-marketing#google-youtube-ads', icon: Search },
      { name: 'SEO', href: '/services/digital-marketing#seo', icon: TrendingUp },
      { name: 'Telegram Promotion', href: '/services/digital-marketing#telegram-promotion', icon: Send },
      { name: 'Social Media Management', href: '/services/digital-marketing#social-media-management', icon: Users },
      { name: 'Email Marketing', href: '/services/digital-marketing#email-marketing', icon: Mail }
    ]
  },
  {
    title: 'Blockchain Development',
    icon: Blocks,
    color: 'orange',
    description: 'Cutting-edge blockchain solutions for the future',
    items: [
      { name: 'NFT Marketplace Development', href: '/services/nft-marketplace-development', icon: Blocks },
      { name: 'DApp Development', href: '/services/dapp-development', icon: Code },
      { name: 'Web3 Development', href: '/services/web3-development', icon: Globe },
      { name: 'Telegram Mini Apps', href: '/services/telegram-mini-apps-development', icon: Send },
    ]
  },
  {
    title: 'Mobile Application',
    icon: Smartphone,
    color: 'indigo',
    description: 'Native and cross-platform mobile app development',
    items: [
      { name: 'iOS App Development', href: '/services/ios-app-development', icon: Smartphone },
      { name: 'Android App Development', href: '/services/android-app-development', icon: Smartphone },
    ]
  },
  {
    title: 'AI and Big Data',
    icon: Brain,
    color: 'pink',
    description: 'Intelligent solutions powered by AI and data analytics',
    items: [
      { name: 'AI Development', href: '/services/ai-development', icon: Brain },
      { name: 'Big Data Development', href: '/services/big-data-development', icon: Database },
    ]
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    hover: 'hover:bg-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-600'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    hover: 'hover:bg-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-600'
  },
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-600',
    hover: 'hover:bg-green-100',
    border: 'border-green-200',
    text: 'text-green-600'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    hover: 'hover:bg-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-600'
  },
  indigo: {
    bg: 'bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    hover: 'hover:bg-indigo-100',
    border: 'border-indigo-200',
    text: 'text-indigo-600'
  },
  pink: {
    bg: 'bg-pink-50',
    icon: 'bg-pink-100 text-pink-600',
    hover: 'hover:bg-pink-100',
    border: 'border-pink-200',
    text: 'text-pink-600'
  }
};

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  const MainIcon = service.icon;
  const colors = colorClasses[service.color];

  return (
    <div className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${colors.border} hover:shadow-lg`}>
      <div 
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors.icon} transition-colors`}>
              <MainIcon className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-3 text-sm text-gray-500">
                {service.items.length} services available
              </div>
            </div>
          </div>
          <ChevronRight 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isExpanded ? 'rotate-90' : ''
            }`} 
          />
        </div>
      </div>
      
      {isExpanded && (
        <div className={`${colors.bg} border-t ${colors.border}`}>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.items.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${colors.hover}`}
                  >
                    <ItemIcon className={`w-4 h-4 ${colors.text}`} />
                    <span className="text-sm font-medium text-gray-900 flex-1">
                      {item.name}
                    </span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
<div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              What We Offer
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                         Explore our comprehensive range of services designed to help your business thrive in the digital landscape.

            </p>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isExpanded={expandedService === index}
              onToggle={() => toggleService(index)}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">500+</div>
              <div className="mt-2 text-blue-100 text-sm lg:text-base">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">50+</div>
              <div className="mt-2 text-blue-100 text-sm lg:text-base">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">6</div>
              <div className="mt-2 text-blue-100 text-sm lg:text-base">Service Categories</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
              <div className="mt-2 text-blue-100 text-sm lg:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      <TextHeroSection/>
    </div>
  );
}