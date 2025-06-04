import { useState, useEffect } from "react";
import { ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";

import blogData from '@/blogdata.json';

export default function BlogShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateSection, setAnimateSection] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);

  // Animation on scroll - matching Success Stories
  useEffect(() => {
    const handleScroll = () => {
      setAnimateSection(true);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger animation after component mounts
    setTimeout(() => setAnimateSection(true), 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Handle different possible JSON structures
    let posts = [];
    
    if (Array.isArray(blogData)) {
      posts = blogData;
    } else if (blogData && Array.isArray(blogData.posts)) {
      posts = blogData.posts;
    } else if (blogData && Array.isArray(blogData.blogPosts)) {
      posts = blogData.blogPosts;
    } else if (blogData && blogData.data && Array.isArray(blogData.data)) {
      posts = blogData.data;
    }
    
    setBlogPosts(posts);
  }, []);

  return (
    <div className="w-full bg-white py-16 md:py-32 overflow-hidden px-4 sm:px-6 md:px-8 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight leading-tight">
              Our Blog
              <span className="block text-lg md:text-xl font-normal text-gray-600 mt-4">
                Insights and ideas.
              </span>
            </h2>
          </div>
          <div className="flex items-center justify-center h-full">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group flex items-center text-xl font-medium text-black transition-colors border-b-2 border-transparent pb-1 cursor-not-allowed pointer-events-none"
            >
              View all posts
              <ArrowRight className="ml-2 h-6 w-6 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <div className="space-y-16 md:space-y-32">
            {Array.isArray(blogPosts) && blogPosts.slice(0, 4).filter((_, index) => index % 2 === 0).map((post, idx) => (
              <div
                key={post.id}
                className={`group relative overflow-hidden transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden rounded-2xl h-64 md:h-96 mb-8">
                  <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-full object-cover transform transition-transform duration-700 ${hoveredCard === post.id ? 'scale-105' : 'scale-100'}`}
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <span className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 z-20">
                    <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-black text-sm font-medium rounded-full border border-gray-200">
                      <Tag size={14} className="mr-2" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-2">
                  <div className="mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-3">•</span>
                      <span>By {post.author}</span>
                    </div>
                  </div>

                  <a
                    href={`/blog/${post.id}`}
                    className="block mb-4"
                  >
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 border-b-2 border-transparent group-hover:border-black inline-block">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-lg md:text-xl text-gray-700 mb-8">{post.excerpt}</p>

                  <a
                    href={`/blog/${post.id}`}
                    className="flex items-center text-lg font-semibold text-black transition-colors duration-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span className="mr-2">Read article</span>
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-16 md:space-y-32 mt-0 md:mt-32">
            {Array.isArray(blogPosts) && blogPosts.slice(0, 4).filter((_, index) => index % 2 !== 0).map((post, idx) => (
              <div
                key={post.id}
                className={`group relative overflow-hidden transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden rounded-2xl h-64 md:h-96 mb-8">
                  <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-full object-cover transform transition-transform duration-700 ${hoveredCard === post.id ? 'scale-105' : 'scale-100'}`}
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <span className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 z-20">
                    <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-black text-sm font-medium rounded-full border border-gray-200">
                      <Tag size={14} className="mr-2" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-2">
                  <div className="mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-3">•</span>
                      <span>By {post.author}</span>
                    </div>
                  </div>

                  <a
                    href={`/blog/${post.id}`}
                    className="block mb-4"
                  >
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 border-b-2 border-transparent group-hover:border-black inline-block">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-lg md:text-xl text-gray-700 mb-8">{post.excerpt}</p>

                  <a
                    href={`/blog/${post.id}`}
                    className="flex items-center text-lg font-semibold text-black transition-colors duration-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span className="mr-2">Read article</span>
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!Array.isArray(blogPosts) || blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts available.</p>
          </div>
        )}
      </div>
    </div>
  );
}