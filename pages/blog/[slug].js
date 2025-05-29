import { useState, useEffect } from "react";
import { ArrowLeft, Clock, Tag, User, Share2, BookOpen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import blogData from '@/blogdata.json';

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for router to be ready and slug to be available
        if (!router.isReady || !slug) return;
        
        // Simulate fetching blog post by slug
        const foundPost = blogData.blogPosts.find(p => p.slug === slug);
        if (foundPost) {
            setPost(foundPost);
            // Get related posts from same category
            const related = blogData.blogPosts
                .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
                .slice(0, 2);
            setRelatedPosts(related);
        }
        setLoading(false);
    }, [router.isReady, slug]);

    const formatContent = (content) => {
        // Simple markdown-like formatting
        return content
            .split('\n\n')
            .map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                    return (
                        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            {paragraph.replace('## ', '')}
                        </h2>
                    );
                } else if (paragraph.startsWith('### ')) {
                    return (
                        <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                            {paragraph.replace('### ', '')}
                        </h3>
                    );
                } else if (paragraph.startsWith('- ')) {
                    const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                    return (
                        <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                            {listItems.map((item, i) => (
                                <li key={i}>{item.replace('- ', '')}</li>
                            ))}
                        </ul>
                    );
                } else {
                    return (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4">
                            {paragraph}
                        </p>
                    );
                }
            });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link href="/">
                        <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                            Back to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                {/* Darker overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
            </div>

            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-0 py-6">
                    {/* <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </button> */}

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center">
                                <Tag size={14} className="mr-1" />
                                {post.category}
                            </span>
                            <span className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                {post.date}
                            </span>
                            <span className="flex items-center">
                                <BookOpen size={14} className="mr-1" />
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                    <User size={20} className="text-gray-600" />
                                </div>
                                <div>
                                    {/* <p className="font-medium text-gray-900">{post.author}</p> */}
                                    <p className="font-medium text-gray-900">Foxbeep Tech</p>
                                    <p className="text-sm text-gray-500">Author</p>
                                </div>
                            </div>

                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <Share2 size={20} />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-lg max-w-none">
                    <div className="text-lg leading-relaxed">
                        {formatContent(post.content)}
                    </div>
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <h4 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <div
                                    key={relatedPost.id}
                                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
                                                {relatedPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-gray-500 text-sm mb-2">
                                            <Clock size={14} className="mr-1" />
                                            <span>{relatedPost.date}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;