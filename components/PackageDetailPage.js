import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, HelpCircle, Info, Star, Clock, Tag, FileText } from 'lucide-react';
import Link from 'next/link';

const PackageDetailPage = ({ packageData }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [additionalServicesIndices, setAdditionalServicesIndices] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Initialize selected options when package data changes
  useEffect(() => {
    if (packageData && packageData.pricing) {
      const initialOptions = {};
      const additionalIndices = [];
      
      packageData.pricing.forEach((category, index) => {
        const categoryTitle = category.title.toLowerCase();
        
        // Any category with "additional" in the title will use checkboxes
        if (categoryTitle.includes('additional')) {
          additionalIndices.push(index);
          initialOptions[index] = []; // Initialize as empty array for checkboxes
        } else {
          // Default selection for radio button categories is the first option
          initialOptions[index] = 0; // Initialize with first option selected for radio buttons
        }
      });
      
      setSelectedOptions(initialOptions);
      setAdditionalServicesIndices(additionalIndices);
    }
  }, [packageData]);

  const handleRadioChange = (categoryIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [categoryIndex]: optionIndex
    }));
  };

  const toggleAdditionalService = (categoryIndex, optionIndex) => {
    const currentSelections = [...(selectedOptions[categoryIndex] || [])];
    let updatedSelections;
    
    if (currentSelections.includes(optionIndex)) {
      // Remove option if already selected
      updatedSelections = currentSelections.filter(index => index !== optionIndex);
    } else {
      // Add option if not selected
      updatedSelections = [...currentSelections, optionIndex];
    }
    
    setSelectedOptions(prev => ({
      ...prev,
      [categoryIndex]: updatedSelections
    }));
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value) || 1);
  };

  const calculateTotal = () => {
    if (!packageData || !packageData.pricing) return "N/A";

    let total = 0;

    // Process all pricing categories
    packageData.pricing.forEach((category, categoryIndex) => {
      if (additionalServicesIndices.includes(categoryIndex)) {
        // For additional services (checkbox categories)
        const selectedServiceIndices = selectedOptions[categoryIndex] || [];
        selectedServiceIndices.forEach(optionIndex => {
          const option = category.options[optionIndex];
          if (option && option.price) {
            const priceValue = extractPriceValue(option.price);
            total += priceValue;
          }
        });
      } else {
        // For radio button categories
        const selectedOptionIndex = selectedOptions[categoryIndex] !== undefined ? selectedOptions[categoryIndex] : 0;
        const option = category.options[selectedOptionIndex];
        if (option && option.price) {
          const priceValue = extractPriceValue(option.price);
          total += priceValue;
        }
      }
    });

    // Multiply by quantity
    total *= quantity;

    // Format the total with currency
    return `${total.toFixed(2)} USD`;
  };

  // Helper function to extract price value from price string
  const extractPriceValue = (priceString) => {
    if (!priceString) return 0;
    
    // Handle percentage discounts
    if (priceString.includes('-') && priceString.includes('%')) {
      // For now, we'll ignore percentage discounts in this simplified version
      return 0;
    }
    
    // Extract numeric value, handling both "+100 USD" and "399 USD" formats
    const numericMatch = priceString.match(/-?\+?(\d+(?:\.\d+)?)/);
    if (numericMatch && numericMatch[1]) {
      const value = parseFloat(numericMatch[1]);
      return priceString.includes('+') ? value : value;
    }
    
    return 0;
  };
  
  if (!packageData) {
    return <div className="flex justify-center items-center h-96">Loading package details...</div>;
  }
  
  return (
    <div className="container mx-auto max-w-7xl px-2 py-4">
      {/* Header Section - Hero Style */}
      <div className="relative bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg overflow-hidden mb-4 shadow-md">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-48 md:h-64">
          <Image
            src={packageData.image || '/placeholder.jpg'}
            alt={packageData.title}
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-75"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">{packageData.title}</h1>
            <p className="text-2xl md:text-xl mt-1 text-gray-100">{packageData.subtitle}</p>
            <div className="flex items-center mt-2">
              <span className="inline-flex bg-black text-white px-3 py-1 rounded-full text-base font-bold">
                {packageData.price}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Area - Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column - Tabs Content */}
        <div className="lg:col-span-2">          
          {/* Tabs Navigation */}
          <div className="bg-white rounded-t-lg overflow-hidden shadow-sm">
            <div className="flex overflow-x-auto">
              <button 
                onClick={() => setActiveTab('description')}
                className={`py-4 px-6 font-medium text-sm md:text-base whitespace-nowrap cursor-pointer transition-colors duration-300 ${activeTab === 'description' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('faq')}
                className={`py-4 px-6 font-medium text-sm md:text-base whitespace-nowrap cursor-pointer transition-colors duration-300 ${activeTab === 'faq' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                FAQ
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white p-4 rounded-b-lg shadow-md mb-4">
            {/* Description Tab with Custom Styling */}
            {activeTab === 'description' && (
              <div className="description-content">
                <style jsx global>{`
                  .description-content h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                  }
                  .description-content h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #000;
                    margin-bottom: 0.5rem;
                    margin-top: 1rem;
                    line-height: 1.3;
                  }
                  .description-content p {
                    margin-bottom: 1rem;
                    color: #4b5563;
                    line-height: 1.5;
                  }
                  .description-content ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 0.75rem;
                  }
                  .description-content li {
                    color: #4b5563;
                    margin-bottom: 0.25rem;
                    line-height: 1.5;
                  }
                  .description-content strong {
                    color: #6d28d9;
                    font-weight: 600;
                  }
                  .description-content a {
                    color: #7c3aed;
                    text-decoration: underline;
                  }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: packageData.longDescription }} />
              </div>
            )}
            
            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-4">
                {packageData.faqs && packageData.faqs.length > 0 ? (
                  packageData.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start">
                        <HelpCircle className="w-4 h-4 text-purple-600 mt-1 mr-2 shrink-0" />
                        <h3 className="text-base font-semibold text-gray-800">{faq.question}</h3>
                      </div>
                      <p className="mt-1 text-gray-700 ml-6">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700">No FAQs available for this package.</p>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Right Column - Features and Pricing Options */}
        <div className="space-y-4">
          {/* Features Card */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-bold text-gray-800">Key Features</h2>
            </div>
            
            <ul className="space-y-2">
              {packageData.features && packageData.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-purple-100 p-0.5 rounded-full mt-1 mr-2 shrink-0">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Pricing Options Card */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              Customize Your Package
            </h2>
            
            {packageData.pricing && packageData.pricing.map((pricingCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-3">
                <h3 className="text-base font-medium text-gray-800 mb-2 border-b pb-1">{pricingCategory.title}</h3>
                
                <div className="py-3">
                  {pricingCategory.options && pricingCategory.options.map((option, optionIndex) => {
                    const isAdditionalService = additionalServicesIndices.includes(categoryIndex);
                    const isSelected = isAdditionalService 
                      ? (selectedOptions[categoryIndex] || []).includes(optionIndex)
                      : selectedOptions[categoryIndex] === optionIndex;
                    
                    return (
                      <div 
                        key={optionIndex} 
                        className="flex items-center bg-gray-50 p-2 hover:bg-purple-50 transition-colors duration-200"
                      >
                        {isAdditionalService ? (
                          // Checkboxes for Additional Services
                          <input
                            type="checkbox"
                            id={`option-${categoryIndex}-${optionIndex}`}
                            checked={isSelected}
                            onChange={() => toggleAdditionalService(categoryIndex, optionIndex)}
                            className="h-4 w-4 text-purple-600 border-gray-300 cursor-pointer rounded focus:ring-purple-500"
                          />
                        ) : (
                          // Radio buttons for other categories
                          <input
                            type="radio"
                            id={`option-${categoryIndex}-${optionIndex}`}
                            name={`category-${categoryIndex}`}
                            checked={isSelected}
                            onChange={() => handleRadioChange(categoryIndex, optionIndex)}
                            className="h-4 w-4 text-purple-600 border-gray-300 cursor-pointer rounded-full focus:ring-purple-500"
                          />
                        )}
                        <label 
                          htmlFor={`option-${categoryIndex}-${optionIndex}`} 
                          className="ml-2 flex justify-between w-full text-gray-700 text-sm"
                        >
                          <span>{option.name}</span>
                          <span className={`font-medium ${
                            option.price.includes('+') 
                              ? 'text-green-600' 
                              : option.price.includes('-') 
                                ? 'text-blue-600' 
                                : 'text-purple-600'
                          }`}>
                            {option.price}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {/* Quantity, Total and Get Quotation Elements */}
            <div className="mt-6 py-4 border-t border-b border-gray-200">
              {/* Quantity Field */}
              <div className="flex flex-col items-center justify-center mb-4">
                <label htmlFor="quantity" className="block text-lg font-bold text-gray-800 mb-2">QUANTITY</label>
                <div className="relative w-1/2">
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-full px-4 py-2 text-center text-xl font-bold border-2 border-purple-400 rounded-lg focus:ring-purple-600 focus:border-purple-600"
                  />
                </div>
              </div>
              
              {/* Total Price */}
              <div className="flex justify-center items-center mb-6">
                <div className="text-center">
                  <div className="text-gray-700 font-medium mb-1">TOTAL PRICE</div>
                  <div className="text-2xl font-bold text-purple-600">{calculateTotal()}</div>
                </div>
              </div>
              
              {/* Get Quotation Button */}
              <div className="flex justify-center">
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg">
                  <FileText className="w-4 h-4 mr-2" />
                  GET QUOTATION
                </button>
              </div>
            </div>
          </div>
          
          {/* Support Info */}
          <div className="bg-gray-100 rounded-lg p-3 shadow-sm border border-gray-200">
            <div className="flex items-start">
              <Info className="w-4 h-4 text-purple-600 mt-1 mr-2 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-800 text-sm">Need Help?</h3>
                <p className="text-xs text-gray-700 mt-0.5">Have questions about this package? Contact our support team for assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;