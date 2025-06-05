import React from 'react';
import Link from 'next/link';
import { ChevronRight, Building2, Code, Heart, GraduationCap, ShoppingCart, UtensilsCrossed, Plane, Shirt, Users, Truck, Factory, Scale, Wheat } from 'lucide-react';
import TextHeroSection from '@/components/home/textHero';

const industries = [
  { name: 'Automotive', href: '/industries/automotive', icon: Building2, description: 'Advanced solutions for automotive manufacturing and services' },
  { name: 'B2B Software', href: '/industries/b2b-software', icon: Code, description: 'Enterprise software solutions for business transformation' },
  { name: 'Healthcare', href: '/industries/healthcare', icon: Heart, description: 'Digital health solutions improving patient care and outcomes' },
  { name: 'Education', href: '/industries/education', icon: GraduationCap, description: 'Educational technology platforms and learning management systems' },
  { name: 'Ecommerce', href: '/industries/ecommerce', icon: ShoppingCart, description: 'Complete online retail solutions and marketplace platforms' },
  { name: 'Food', href: '/industries/food', icon: UtensilsCrossed, description: 'Food service technology and restaurant management systems' },
  { name: 'Travel', href: '/industries/travel', icon: Plane, description: 'Travel booking platforms and hospitality management solutions' },
  { name: 'Fashion and Apparel', href: '/industries/fashion-apparel', icon: Shirt, description: 'Fashion retail technology and inventory management systems' },
  { name: 'CRM Development', href: '/industries/crm-development', icon: Users, description: 'Custom CRM solutions for enhanced customer relationship management' },
  { name: 'Logistics', href: '/industries/logistics', icon: Truck, description: 'Supply chain optimization and logistics management platforms' },
  { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory, description: 'Industrial automation and manufacturing process optimization' },
  { name: 'Legal', href: '/industries/legal', icon: Scale, description: 'Legal technology solutions and case management systems' },
  { name: 'Agriculture', href: '/industries/agriculture', icon: Wheat, description: 'Agricultural technology and farm management solutions' },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              We deliver tailored solutions across diverse industries, combining deep sector expertise 
              with cutting-edge technology to drive innovation and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <Link
                key={industry.name}
                href={industry.href}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

     

      {/* Stats Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="mt-2 text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">13</div>
              <div className="mt-2 text-gray-400">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">98%</div>
              <div className="mt-2 text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      <TextHeroSection/>
    </div>
  );
}