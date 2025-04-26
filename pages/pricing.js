// pages/pricing.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PackageCard from './components/PackageCard';
import data from '../dummyContent.json';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PricingPage() {
  const { categories, packages } = data;
  const router = useRouter();
  const { categoryId, subcategoryId } = router.query;
  
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  useEffect(() => {
    if (subcategoryId) {
      const subCatId = parseInt(subcategoryId);
      setActiveSubcategory(subCatId);
      setFilteredPackages(packages.filter(pkg => pkg.categoryId === subCatId));
      
      // Find parent category
      for (const category of categories) {
        if (category.hasSubcategories) {
          const found = category.subcategories.find(sub => sub.id === subCatId);
          if (found) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    } else if (categoryId) {
      const catId = parseInt(categoryId);
      setActiveCategory(catId);
      setActiveSubcategory(null);
      
      // Find category
      const category = categories.find(cat => cat.id === catId);
      
      if (category) {
        if (category.hasSubcategories) {
          // Get all packages from all subcategories
          const subCategoryIds = category.subcategories.map(sub => sub.id);
          setFilteredPackages(packages.filter(pkg => subCategoryIds.includes(pkg.categoryId)));
        } else {
          // Direct category
          setFilteredPackages(packages.filter(pkg => pkg.categoryId === catId));
        }
      }
    } else {
      // No filter, show all packages
      setFilteredPackages(packages);
      setActiveCategory(null);
      setActiveSubcategory(null);
    }
  }, [categoryId, subcategoryId, categories, packages]);
  
  // Find active category/subcategory names
  const getActiveCategoryName = () => {
    if (activeCategory) {
      const category = categories.find(cat => cat.id === activeCategory);
      return category ? category.name : 'All Categories';
    }
    return 'All Categories';
  };
  
  const getActiveSubcategoryName = () => {
    if (activeSubcategory && activeCategory) {
      const category = categories.find(cat => cat.id === activeCategory);
      if (category && category.hasSubcategories) {
        const subcategory = category.subcategories.find(sub => sub.id === activeSubcategory);
        return subcategory ? subcategory.name : '';
      }
    }
    return '';
  };

  return (
    <>
      <Head>
        <title>Design Packages & Pricing</title>
        <meta name="description" content="Choose from our range of design packages and pricing options" />
      </Head>

      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - takes 1/4 of screen on medium screens and above */}
          <div className="md:col-span-1">
            <Sidebar categories={categories} />
          </div>

          {/* Package Cards - takes 3/4 of screen on medium screens and above */}
          <div className="md:col-span-3">
            

            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    title={pkg.title}
                    subtitle={pkg.subtitle}
                    price={pkg.price}
                    image={pkg.image}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-xl text-gray-600">No packages found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}