// components/PackageDetailPage.js
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, PlusCircle, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const PackageDetailPage = ({ packageData }) => {
  const [activeTab, setActiveTab] = useState('description');
  
  if (!packageData) {
    return <div className="flex justify-center items-center h-96">Loading package details...</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={packageData.image || '/placeholder.jpg'}
              alt={packageData.title}
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Title and Basic Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800">{packageData.title}</h1>
            <p className="text-xl text-gray-600 mt-2">{packageData.subtitle}</p>
            <div className="mt-6 text-2xl font-bold text-red-500">{packageData.price}</div>
            
            <p className="mt-4 text-gray-700">{packageData.description}</p>
          </div>
        </div>
      </div>
      
      {/* Main Content Area - Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Tabs Content */}
        <div className="lg:col-span-2">
          {/* Tabs Navigation */}
          <div className="bg-white rounded-t-lg overflow-hidden border border-b-0">
            <div className="flex overflow-x-auto">
              <button 
                onClick={() => setActiveTab('description')}
                className={`py-4 px-6 font-medium text-sm md:text-base whitespace-nowrap ${activeTab === 'description' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600 hover:text-red-500'}`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('faq')}
                className={`py-4 px-6 font-medium text-sm md:text-base whitespace-nowrap ${activeTab === 'faq' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600 hover:text-red-500'}`}
              >
                FAQ
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white p-6 rounded-b-lg shadow-md">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">
                  If you own a WordPress website (information/e-commerce) and you want to edit/update/maintain the website, then this website maintenance contract package is for you.
                </p>
                <p className="text-gray-700 mt-4">
                  If the website was made by us, then you can directly place the order. Choose the appropriate hours required for your website maintenance schedule. If the website is not developed by us, then please consult with us before placing the order in order to check your website status.
                </p>
                <p className="text-gray-700 mt-4">
                  You need to send your website details within the next 3 to 4 hours after placing the order as a reply to the order confirmation email. Website maintenance contract starts from the date of receiving the payment.
                </p>
                
                <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Website Maintenance Contract and Terms & Fees:</h2>
                <p className="text-gray-700">
                  The fee shall be paid in advance for a 6 or 12 months contract. For each package, there are certain hours reserved for website updates. For e-commerce websites, you can roughly consider reserving one hour for 6 product updates. For information updates, we can update nearly 5 pages (projects/news)/one blog submission, or two new page creations (approx. A4 size) in a 1-hour duration. You will get a monthly invoice for any additional works performed outside the weekly/monthly chosen hours. Weekly/Biweekly/Monthly reserved hours cannot be carried forwarded.
                </p>
                
                <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">How many update requests per month for each package:</h3>
                {/* Add more content as needed */}
              </div>
            )}
            
            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-6">
                {packageData.faqs ? (
                  packageData.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start">
                        <HelpCircle className="w-5 h-5 text-red-500 mt-1 mr-3 shrink-0" />
                        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      </div>
                      <p className="mt-2 text-gray-700 ml-8">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700">No FAQs available for this package.</p>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Right Column - Pricing Options */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-pink-500 mb-6">Choose website type</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <input
                type="radio"
                id="info-website"
                name="website-type"
                className="h-4 w-4 text-red-500 border-gray-300 rounded-full focus:ring-red-500"
                defaultChecked
              />
              <label htmlFor="info-website" className="ml-3 text-gray-700">
                Information Website
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="ecom-website"
                name="website-type"
                className="h-4 w-4 text-red-500 border-gray-300 rounded-full focus:ring-red-500"
              />
              <label htmlFor="ecom-website" className="ml-3 text-gray-700">
                Ecommerce type
              </label>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-pink-500 mb-6">Choose update frequency</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <input
                type="radio"
                id="monthly"
                name="update-frequency"
                className="h-4 w-4 text-red-500 border-gray-300 rounded-full focus:ring-red-500"
                defaultChecked
              />
              <label htmlFor="monthly" className="ml-3 text-gray-700">
                Monthly 1 update - 1 hour each
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="biweekly"
                name="update-frequency"
                className="h-4 w-4 text-red-500 border-gray-300 rounded-full focus:ring-red-500"
              />
              <label htmlFor="biweekly" className="ml-3 text-gray-700">
                Biweekly 1 update - 2 hours each
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="weekly"
                name="update-frequency"
                className="h-4 w-4 text-red-500 border-gray-300 rounded-full focus:ring-red-500"
              />
              <label htmlFor="weekly" className="ml-3 text-gray-700">
                Weekly 1 update - 2 hours each
              </label>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-pink-500 mb-6">Choose contract duration</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <input
                type="radio"
                id="6months"
                name="contract-duration"
                className="h-4 w-4 text-red-500 border-gray-300 rounded-full focus:ring-red-500"
                defaultChecked
              />
              <label htmlFor="6months" className="ml-3 text-gray-700">
                6 months contract
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="12months"
                name="contract-duration"
                className="h-4 w-4 text-red-500 border-gray-300 rounded-full focus:ring-red-500"
              />
              <label htmlFor="12months" className="ml-3 text-gray-700">
                12 months contract
              </label>
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              min="1"
              defaultValue="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;