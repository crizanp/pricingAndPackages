// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = ({ categories }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Product categories</h2>
      <div className="h-1 w-32 bg-red-500 mb-6"></div>
      
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="pb-2">
            {/* Main Category */}
            <div className="border-b border-gray-200 pb-2">
              <Link 
                href={`/category/${category.id}`} 
                className="text-gray-700 font-medium hover:text-red-500 transition duration-300"
              >
                {category.name}
              </Link>
            </div>
            
            {/* Subcategories (if any) with left indentation */}
            {category.hasSubcategories && (
              <div className="pl-6 mt-2 space-y-2">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.id} className="pb-2">
                    <Link 
                      href={`/subcategory/${subcategory.id}`}
                      className="text-gray-500 hover:text-red-500 transition duration-300 text-sm"
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
    </div>
  );
};

export default Sidebar;