import { useState, useEffect } from "react";
import { Search, Clock, Tag, User, Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import blogData from '@/blogdata.json';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    
    const postsPerPage = 6;
    const categories = ["All", ...new Set(blogData.blogPosts.map(post => post.category))];

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setPosts(blogData.blogPosts);
            setFilteredPosts(blogData.blogPosts);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        let filtered = posts;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Filter by category
        if (selectedCategory !== "All") {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        setFilteredPosts(filtered);
        setCurrentPage(1); // Reset to first page when filtering
    }, [searchTerm, selectedCategory, posts]);

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-0  py-16">
                    <div className="text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Our Blog
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl ">
                            Insights, tutorials, and updates from our team. Stay up to date with the latest trends in technology and development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-0 py-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center space-x-2">
                            <Filter size={20} className="text-gray-600" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Results count */}
                        <div className="text-gray-600">
                            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {currentPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`}>
                                <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex items-center text-gray-500 text-sm mb-3">
                                            <Calendar size={14} className="mr-1" />
                                            <span className="mr-4">{post.date}</span>
                                            <Clock size={14} className="mr-1" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                                    <User size={16} className="text-gray-600" />
                                                </div>
                                                <span className="text-sm text-gray-700 font-medium">Foxbeep Tech</span>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-1">
                                                {post.tags.slice(0, 2).map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {post.tags.length > 2 && (
                                                    <span className="text-gray-400 text-xs">
                                                        +{post.tags.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-500 mb-4">
                            <Search size={48} className="mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                            <p>Try adjusting your search terms or filters.</p>
                        </div>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All");
                            }}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2 mt-12">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={16} className="mr-1" />
                            Previous
                        </button>

                        <div className="flex space-x-1">
                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-3 py-2 rounded-lg ${
                                            currentPage === page
                                                ? "bg-blue-600 text-white"
                                                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                            <ChevronRight size={16} className="ml-1" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;