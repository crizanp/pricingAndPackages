import { useState, useEffect } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

import blogData from '@/blogdata.json';

const BlogCard = ({ post, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block col-span-full">
        <div
          className={`group rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 bg-white cursor-pointer ${
            isHovered ? "border-gray-300 shadow-2xl" : "shadow-lg"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col md:flex-row h-full min-h-[400px]">
            {/* Image Section */}
            <div className="relative overflow-hidden md:w-1/2 h-64 md:h-auto">
              <img
                src={post.image}
                alt={post.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 flex items-center">
                  <Tag size={14} className="mr-2" />
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Clock size={16} className="mr-2" />
                <span>{post.date}</span>
                <span className="mx-3">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight hover:text-gray-700 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                {post.author && (
                  <div className="text-sm text-gray-500">
                    By <span className="font-medium text-gray-700">{post.author}</span>
                  </div>
                )}
                <div className={`flex items-center text-gray-600 transition-transform duration-300 ${
                  isHovered ? "translate-x-2" : ""
                }`}>
                  <span className="text-sm font-medium mr-2">Read More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div
        className={`group rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 h-full flex flex-col bg-white cursor-pointer ${
          isHovered ? "border-gray-300 shadow-xl" : "shadow-md"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-48 sm:h-64 md:h-52 lg:h-48">
          <img
            src={post.image}
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 flex items-center">
              <Tag size={12} className="mr-1" />
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center text-gray-500 text-xs mb-2">
            <Clock size={14} className="mr-1" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="text-gray-900 mb-2 font-semibold leading-snug hover:text-gray-700 transition-colors text-xl sm:text-2xl">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-3 text-sm leading-relaxed flex-grow">
            {post.excerpt}
          </p>
          {post.author && (
            <div className="text-xs text-gray-500 mt-auto">
              By <span className="font-medium text-gray-700">{post.author}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default function BlogShowcase() {
  const [activeTab, setActiveTab] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);
  
  useEffect(() => {
    setBlogPosts(blogData.blogPosts);
  }, []);

  const categories = ["All", "App Development", "Blockchain", "Software Development", "AI & ML", "Cloud", "Design"];

  const filteredPosts =
    activeTab === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeTab);

  return (
    <div className="w-full bg-white py-3 sm:py-4 md:py-6 overflow-hidden px-4 sm:px-6 md:px-8 text-black">
      <div className="max-w-7xl mx-auto py-12">
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Our Blog</h1>
          <div className="flex">
            <Link 
              href="/blog"
              className="text-base flex items-center group text-gray-800 border border-gray-300 px-6 py-3 rounded-full hover:border-gray-400 hover:shadow-md transition-all"
            >
              View More
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${
                activeTab === category
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 4).map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              featured={index === 0}
            />
          ))}
        </div>

        {filteredPosts.slice(0, 4).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}