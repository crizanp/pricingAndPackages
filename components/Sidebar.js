import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Menu, X, Search, Layers } from 'lucide-react';

const Sidebar = ({ categories = [], activeCategory, activeSubcategory }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Check viewport width on mount and resize
    useEffect(() => {
        const checkViewport = () => {
            setIsMobile(window.innerWidth < 768);
            setIsOpen(window.innerWidth >= 768);
        };
        checkViewport();
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

    // Auto-expand categories with subcategories
    useEffect(() => {
        if (categories.length > 0) {
            const expanded = {};
            categories.forEach(category => {
                if (category.hasSubcategories) {
                    expanded[category.id] = true;
                }
            });
            setExpandedCategories(expanded);
        }
    }, [categories]);

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    // Filter categories based on search term
    const filteredCategories = categories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (category.subcategories && category.subcategories.some(sub => 
            sub.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    );

    return (
        <>
            {/* Mobile toggle button - fixed at the bottom */}
            <div className="md:hidden fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-purple-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-purple-700 transition"
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
                className={`bg-white rounded-2xl shadow-xl border border-purple-100 transition-all duration-300 ease-in-out
                    ${isMobile
                        ? `fixed bottom-0 left-0 right-0 z-40 max-h-[80vh] overflow-y-auto
                           ${isOpen ? 'translate-y-0' : 'translate-y-full'}`
                        : 'sticky top-4'}`
                }
            >
                <div className="p-6">
                    {/* Header section */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <Layers className="text-purple-600 mr-2" size={24} />
                            <h2 className="text-xl font-bold text-gray-800">Categories</h2>
                        </div>
                        {isMobile && (<button onClick={() => setIsOpen(false)} aria-label="Close menu">
                                <X size={24} className="text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Decorative divider */}
                    <div className="mb-6">
                        <div className="h-0.5 bg-purple-500 w-32"></div>
                    </div>

                    {/* Search box */}
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="text-gray-400" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search categories..."
                            className="w-full pl-10 p-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button 
                                onClick={() => setSearchTerm('')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <X className="text-gray-400 hover:text-gray-600" size={20} />
                            </button>
                        )}
                    </div>

                    {/* Categories list with animation */}
                    <div className="space-y-0 overflow-y-auto max-h-[60vh] pr-2 hide-scrollbar">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category) => (
                                <div key={category.id} className="border-b border-purple-100 last:border-b-0">
                                    {/* Main Category */}
                                    <div className="py-3 flex items-center justify-between group">
                                        <Link
                                            href={`/category/${category.id}`}
                                            className={`${activeCategory === category.id 
                                                ? 'text-purple-600 font-semibold' 
                                                : 'text-gray-700 group-hover:text-purple-500'} 
                                                flex-grow transition duration-300 flex items-center`}
                                            onClick={(e) => {
                                                if (isMobile && category.hasSubcategories) {
                                                    e.preventDefault();
                                                    toggleCategory(category.id);
                                                }
                                            }}
                                        >
                                            <span className="mr-2">{category.name}</span>
                                            {category.hasSubcategories && (
                                                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                                                    {category.subcategories.length}
                                                </span>
                                            )}
                                        </Link>

                                        {category.hasSubcategories && (
                                            <button
                                                onClick={() => toggleCategory(category.id)}
                                                className="p-1 text-gray-500 hover:text-purple-500 focus:outline-none"
                                                aria-label={expandedCategories[category.id] 
                                                    ? "Collapse category" 
                                                    : "Expand category"}
                                            >
                                                {expandedCategories[category.id] 
                                                    ? <ChevronUp size={16} /> 
                                                    : <ChevronDown size={16} />}
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
                                                    className={`py-3 pl-6 border-t border-purple-50 
                                                        ${activeSubcategory === subcategory.id 
                                                            ? 'bg-purple-50' 
                                                            : 'hover:bg-purple-50/50'} transition`}
                                                >
                                                    <Link
                                                        href={`/subcategory/${subcategory.id}`}
                                                        className={`${activeSubcategory === subcategory.id 
                                                            ? 'text-purple-600 font-medium' 
                                                            : 'text-gray-600 hover:text-purple-500'} 
                                                            transition duration-300 block`}
                                                        onClick={() => isMobile && setIsOpen(false)}
                                                    >
                                                        {subcategory.name}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-4">
                                No categories found
                            </div>
                        )}
                    </div>

                    {/* Mobile-only action buttons */}
                    {isMobile && (
                        <div className="mt-6 flex space-x-2">
                            <button
                                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md 
                                    hover:bg-purple-700 transition duration-300 flex items-center justify-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Apply Filters
                            </button>
                            <button
                                className="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-md 
                                    hover:bg-gray-200 transition duration-300 flex items-center justify-center"
                                onClick={() => {
                                    setSearchTerm('');
                                    setIsOpen(false);
                                }}
                            >
                                Reset
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;