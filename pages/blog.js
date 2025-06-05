import { useState, useEffect } from "react";
import { Search, Clock, User, Calendar } from "lucide-react";

import blogData from '@/blogdata.json';
import Image from "next/image";
import Link from "next/link";


const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(blogData.blogPosts.map(post => post.category))];

    useEffect(() => {
        setPosts(blogData.blogPosts);
    }, []);

    // Filter posts based on search and category
    const filteredPosts = posts.filter(post => {
        const matchesSearch = searchTerm === "" ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
                        Blog
                    </h1>
                    <p className="text-gray-600 text-lg md:text-lg">
                        Tips, tutorials, and insights about web development
                    </p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Results count */}
                <p className="text-gray-600 text-sm mt-4">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
            </div>

            {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {filteredPosts.length > 0 ? (
                    <div className="space-y-4">
                        {filteredPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`}  key={post.id}>

                            <article key={post.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full sm:w-32 h-32 object-cover rounded"
                                    />

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded w-fit mb-2 sm:mb-0">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center text-gray-500 text-xs gap-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                                    <img src="/favicon-32x32.png" size={12} />
                                                </div>
                                                <span className="text-xs text-gray-700">Foxbeep Tech</span>
                                            </div>

                                            <div className="flex gap-1">
                                                {post.tags.slice(0, 3).map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <Search size={48} className="mx-auto mb-4 text-gray-400" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                        <p className="text-gray-600 mb-4">Try different search terms or categories.</p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All");
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;