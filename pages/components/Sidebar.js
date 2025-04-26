// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = ({ categories, activeCategory, activeSubcategory }) => {
    // Simplified description function that doesn't rely on category/subcategory names
    const getHeaderDescription = () => {
        return 'Browse our product categories and find the perfect design package for your needs.';
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-extrabold mb-6 text-gray-800">Product categories</h2>
            <div className="mb-6">
                <div className="h-0.5 bg-red-500 w-32 "></div>
                <div className="h-0.25 bg-red-500 w-48 my-1"></div>
                <div className="h-0.5 bg-red-500 w-full "></div>
            </div>
            <p className="text-gray-600 mb-6">
                {getHeaderDescription()}
            </p>
            <div className="space-y-0">
                {categories.map((category) => (
                    <React.Fragment key={category.id}>
                        {/* Main Category */}
                        <div className="border-b border-gray-200 py-3">
                            <Link
                                href={`/category/${category.id}`}
                                className={`${activeCategory === category.id ? 'text-red-500 font-medium' : 'text-gray-700'} hover:text-red-500 transition duration-300`}
                            >
                                {category.name}
                            </Link>
                        </div>

                        {/* Subcategories (if any) with left indentation */}
                        {category.hasSubcategories && (
                            <>
                                {category.subcategories.map((subcategory) => (
                                    <div key={subcategory.id} className="border-b border-gray-200 py-3 pl-6">
                                        <Link
                                            href={`/subcategory/${subcategory.id}`}
                                            className={`${activeSubcategory === subcategory.id ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition duration-300`}
                                        >
                                            {subcategory.name}
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;