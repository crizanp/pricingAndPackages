import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const Sidebar = ({ categories = [], activeCategory, activeSubcategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    // Check viewport width on mount and resize
    useEffect(() => {
        const checkViewport = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initialize
        checkViewport();
        
        // Add resize listener
        window.addEventListener('resize', checkViewport);
        
        // Clean up
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    // Initialize expanded state based on active category
    useEffect(() => {
        if (activeCategory) {
            setExpandedCategories(prev => ({
                ...prev,
                [activeCategory]: true
            }));
        }
    }, [activeCategory]);

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    // Simplified description function
    const getHeaderDescription = () => {
        return 'Browse our product categories and find the perfect design package for your needs.';
    };

    return (
        <>
            {/* Mobile toggle button - fixed at the bottom */}
            <div className="md:hidden fixed bottom-4 right-4 z-50">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-purple-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                    aria-label={isOpen ? "Close categories menu" : "Open categories menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Overlay for mobile */}
            {isOpen && isMobile && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar container with conditional positioning */}
            <div 
                className={`bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out
                ${isMobile 
                    ? `fixed bottom-0 left-0 right-0 z-40 max-h-[80vh] overflow-y-auto
                       ${isOpen ? 'translate-y-0' : 'translate-y-full'}`
                    : 'sticky top-4'}`
                }
            >
                <div className="p-6">
                    {/* Header section */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-extrabold text-gray-800">Product categories</h2>
                        {isMobile && (
                            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                                <X size={24} className="text-gray-600" />
                            </button>
                        )}
                    </div>
                    
                    {/* Decorative divider */}
                    <div className="mb-6">
                        <div className="h-0.5 bg-purple-500 w-32"></div>
                        <div className="h-0.5 bg-purple-300 w-48 my-1"></div>
                        <div className="h-0.5 bg-purple-500 w-full"></div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                        {getHeaderDescription()}
                    </p>
                    
                    {/* Search box (mobile only) */}
                    {isMobile && (
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search categories..."
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    )}
                    
                    {/* Categories list with animation */}
                    <div className="space-y-0">
                        {categories.map((category) => (
                            <div key={category.id} className="border-b border-gray-200">
                                {/* Main Category */}
                                <div className="py-3 flex items-center justify-between">
                                    <Link
                                        href={`/category/${category.id}`}
                                        className={`${activeCategory === category.id ? 'text-purple-500 font-medium' : 'text-gray-700'} 
                                                  hover:text-purple-500 transition duration-300 flex-grow`}
                                        onClick={(e) => {
                                            if (isMobile && category.hasSubcategories) {
                                                e.preventDefault();
                                                toggleCategory(category.id);
                                            }
                                        }}
                                    >
                                        {category.name}
                                    </Link>
                                    
                                    {category.hasSubcategories && (
                                        <button 
                                            onClick={() => toggleCategory(category.id)}
                                            className="p-1 text-gray-500 hover:text-purple-500 focus:outline-none"
                                            aria-label={expandedCategories[category.id] ? "Collapse category" : "Expand category"}
                                        >
                                            {expandedCategories[category.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </button>
                                    )}
                                </div>
                                
                                {/* Subcategories with smooth animation */}
                                {category.hasSubcategories && category.subcategories && (
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out
                                            ${expandedCategories[category.id] ? 'max-h-96' : 'max-h-0'}`}
                                    >
                                        {category.subcategories.map((subcategory) => (
                                            <div 
                                                key={subcategory.id} 
                                                className="py-3 pl-6 border-t border-gray-100"
                                            >
                                                <Link
                                                    href={`/subcategory/${subcategory.id}`}
                                                    className={`${activeSubcategory === subcategory.id ? 'text-purple-500 font-medium' : 'text-gray-500'} 
                                                              hover:text-purple-500 transition duration-300 block`}
                                                    onClick={() => isMobile && setIsOpen(false)}
                                                >
                                                    {subcategory.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    {/* Mobile-only action buttons */}
                    {isMobile && (
                        <div className="mt-6 flex space-x-2">
                            <button 
                                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Apply
                            </button>
                            <button 
                                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;