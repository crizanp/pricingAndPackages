import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { packagesData as data } from '../dummyContent.js'; // Using your existing data file

export default function RedesignedPricingPage() {
  const { categories, packages } = data;
  
  const [activeCategory, setActiveCategory] = useState(null);
  const [displayedPackages, setDisplayedPackages] = useState(packages);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Refs for scrolling menu
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  // Scroll handlers for desktop menu
  const scrollMenu = (direction) => {
    if (menuRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? menuRef.current.scrollLeft - scrollAmount 
        : menuRef.current.scrollLeft + scrollAmount;
      
      menuRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };
  
  // Monitor scroll position for arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        setScrollPosition(menuRef.current.scrollLeft);
      }
    };
    
    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener('scroll', handleScroll);
      return () => menuElement.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Filter packages when category changes
  useEffect(() => {
    if (activeCategory === null) {
      setDisplayedPackages(packages);
    } else {
      // Find category
      const category = categories.find(cat => cat.id === activeCategory);

      if (category) {
        if (category.hasSubcategories) {
          // Get all packages from all subcategories
          const subCategoryIds = category.subcategories.map(sub => sub.id);
          setDisplayedPackages(packages.filter(pkg => subCategoryIds.includes(pkg.categoryId)));
        } else {
          // Direct category
          setDisplayedPackages(packages.filter(pkg => pkg.categoryId === activeCategory));
        }
      }
    }
  }, [activeCategory, categories, packages]);
  
  // Check if menu has more content to scroll
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = menuRef.current && scrollPosition < menuRef.current.scrollWidth - menuRef.current.clientWidth - 10;

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo-like Design Text */}
      <header className="border-b border-gray-200 py-4 top-0 bg-white z-10">
        <div className="container mx-auto px-4  max-w-7xl">
          
          
          {/* Horizontal Scrollable Menu - Desktop */}
          <div className="relative mt-6 hidden md:block">
            {canScrollLeft && (
              <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1 z-10"
                onClick={() => scrollMenu('left')}
              >
                <ChevronLeft size={20} />
              </button>
            )}
            
            <div 
              ref={menuRef}
              className="flex overflow-x-auto py-2 hide-scrollbar whitespace-nowrap"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <button 
                className={`px-6 py-2 mx-2 whitespace-nowrap text-lg ${activeCategory === null ? 'font-bold border-b-2 border-black' : 'font-medium'}`}
                onClick={() => setActiveCategory(null)}
              >
                All Packages
              </button>
              
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={`px-6 py-2 mx-2 whitespace-nowrap text-lg ${activeCategory === category.id ? 'font-bold border-b-2 border-black' : 'font-medium'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {canScrollRight && (
              <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1 z-10"
                onClick={() => scrollMenu('right')}
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
          
          {/* Mobile Menu - Two Row Scrollable */}
          <div className="mt-4 md:hidden">
            <div 
              ref={mobileMenuRef}
              className="grid grid-cols-2 gap-2 overflow-x-auto hide-scrollbar"
            >
              <div 
                className={`px-4 py-2 text-center whitespace-nowrap ${activeCategory === null ? 'font-bold border-b-2 border-black' : 'font-medium'}`}
                onClick={() => setActiveCategory(null)}
              >
                All Packages
              </div>
              
              {categories.map(category => (
                <div 
                  key={category.id}
                  className={`px-4 py-2 text-center whitespace-nowrap ${activeCategory === category.id ? 'font-bold border-b-2 border-black' : 'font-medium'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                
                <p className="text-2xl font-bold mb-6">{pkg.price}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features && pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {/* If no features available in your data, display something generic */}
                  {(!pkg.features || pkg.features.length === 0) && (
                    <>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Professional Design</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Quick Turnaround</span>
                      </li>
                    </>
                  )}
                </ul>
                
                <button 
                  className="w-full py-3 border-2 border-black rounded-lg font-bold hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* No packages found message */}
        {displayedPackages.length === 0 && (
          <div className="p-12 border border-gray-200 rounded-lg text-center max-w-lg mx-auto">
            <p className="text-xl">No packages found for this category.</p>
            <button 
              className="mt-6 border-2 border-black py-3 px-6 rounded-lg font-bold hover:bg-black hover:text-white transition-colors"
              onClick={() => setActiveCategory(null)}
            >
              View All Packages
            </button>
          </div>
        )}
      </div>
    </div>
  );
}