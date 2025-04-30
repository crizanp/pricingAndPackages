// pages/pricing.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PackageCard from './components/PackageCard';
import { packagesData as data } from '../dummyContent.js';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './components/Navbar';

export default function PricingPage() {
  const { categories, packages } = data;
  const router = useRouter();
  const { categoryId, subcategoryId } = router.query;

  const [filtepurplePackages, setFiltepurplePackages] = useState(packages);
  const [displayedPackages, setDisplayedPackages] = useState(packages);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    if (subcategoryId) {
      const subCatId = parseInt(subcategoryId);
      setActiveSubcategory(subCatId);
      setFiltepurplePackages(packages.filter(pkg => pkg.categoryId === subCatId));

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
          setFiltepurplePackages(packages.filter(pkg => subCategoryIds.includes(pkg.categoryId)));
        } else {
          // Direct category
          setFiltepurplePackages(packages.filter(pkg => pkg.categoryId === catId));
        }
      }
    } else {
      // No filter, show all packages
      setFiltepurplePackages(packages);
      setActiveCategory(null);
      setActiveSubcategory(null);
    }
  }, [categoryId, subcategoryId, categories, packages]);

  // Apply sorting whenever filtepurplePackages or sortBy changes
  useEffect(() => {
    let sorted = [...filtepurplePackages];

    switch (sortBy) {
      case 'price-low-high':
        sorted = sorted.sort((a, b) => {
          // Extract numeric price values (assuming price format is "From: XXX.XX AED")
          const priceA = parseFloat(a.price.match(/\d+(\.\d+)?/)[0]);
          const priceB = parseFloat(b.price.match(/\d+(\.\d+)?/)[0]);
          return priceA - priceB;
        });
        break;
      case 'price-high-low':
        sorted = sorted.sort((a, b) => {
          // Extract numeric price values
          const priceA = parseFloat(a.price.match(/\d+(\.\d+)?/)[0]);
          const priceB = parseFloat(b.price.match(/\d+(\.\d+)?/)[0]);
          return priceB - priceA;
        });
        break;
      case 'latest':
        // Assuming higher IDs are newer packages
        sorted = sorted.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        // Assuming lower IDs are older packages
        sorted = sorted.sort((a, b) => a.id - b.id);
        break;
      default:
        // Default sorting (by id)
        sorted = sorted.sort((a, b) => a.id - b.id);
    }

    setDisplayedPackages(sorted);
  }, [filtepurplePackages, sortBy]);

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

  const getHeaderTitle = () => {
    if (activeSubcategory) {
      return getActiveSubcategoryName();
    } else if (activeCategory) {
      return getActiveCategoryName();
    }
    return 'All Design Packages';
  };

  const getHeaderDescription = () => {
    const categoryName = getActiveCategoryName();
    const subcategoryName = getActiveSubcategoryName();

    if (activeSubcategory) {
      return `Choose a ${categoryName} - ${subcategoryName} package and place the order online. Your ${categoryName} will be ready within the time frame you choose!`;
    } else if (activeCategory) {
      return `Choose a ${categoryName} package and place the order online. Your ${categoryName} will be ready within the time frame you choose!`;
    } else {
      return 'Choose a design package and place the order online. Your design will be ready within the time frame you choose! We will email you the final design.';
    }
  };


  return (
    <>
      <Head>
        <title>Design Packages & Pricing</title>
        <meta name="description" content="Choose from our range of design packages and pricing options" />
      </Head>

      <div className="container mx-auto pt-4 pb-10 px-4"> 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - takes 1/4 of screen on medium screens and above */}
          <div className="md:col-span-1">
            <Sidebar categories={categories} />
          </div>

          {/* Package Cards - takes 3/4 of screen on medium screens and above */}
          <div className="md:col-span-3">
            {/* Category Header and Description */}
            <div className="bg-white p-6 mb-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-extrabold text-center justify-between  text-gray-800 mb-3">
                {getHeaderTitle()}
              </h1>


              {/* Filter/Sort Options */}
              <div className="flex flex-wrap items-center justify-between border-t border-gray-200 pt-4">
                <div className="text-gray-600 font-medium">
                  {displayedPackages.length} packages found
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <label htmlFor="sort-by" className="mr-2 text-gray-600">Sort by:</label>
                  <select
                    id="sort-by"
                    className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
            </div>

            {displayedPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPackages.map((pkg) => (
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