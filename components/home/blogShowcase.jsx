import { useState } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Cross-Platform App Development Frameworks",
    category: "App Development",
    date: "23 Apr, 2025",
    image: "https://resources.cubix.co/wp-content/uploads/2025/04/Top-10-CrossPlatform-App-Development-Frameworks.webp",
    excerpt: "Discover the most powerful frameworks for building apps that work seamlessly across multiple platforms.",
  },
  {
    id: 2,
    title: "20 Best Examples of Blockchain Technology",
    category: "Blockchain",
    date: "22 Apr, 2025",
    image: "https://resources.cubix.co/wp-content/uploads/2025/04/20_best_examples_of_blockchain_technology.webp",
    excerpt: "Explore real-world applications of blockchain beyond cryptocurrency that are changing industries.",
  },
  {
    id: 3,
    title: "Automotive Industry: Car Computer Programming Software",
    category: "Software Development",
    date: "18 Apr, 2025",
    image: "https://resources.cubix.co/wp-content/uploads/2025/04/How-will-Car-Computer-Programming-Software-Transform-the-Automotive-Industry_.webp",
    excerpt: "An inside look at the software powering modern vehicles and how it's revolutionizing transportation.",
  },
  {
    id: 4,
    title: "Machine Learning for Beginners: A Practical Guide",
    category: "AI & ML",
    date: "15 Apr, 2025",
    image: "https://resources.cubix.co/wp-content/uploads/2025/04/best_crm_software_examples_in_real_life_for_business_growth.webp",
    excerpt: "Start your journey into machine learning with this comprehensive introduction to key concepts.",
  },
  {
    id: 5,
    title: "The Future of Cloud Computing: Trends to Watch",
    category: "Cloud",
    date: "12 Apr, 2025",
    image: "https://resources.cubix.co/wp-content/uploads/2025/04/10-Best-Software-for-Retailer-to-Thrive-in-the-E-commerce-Industry.webp",
    excerpt: "Insights into emerging cloud technologies that will shape enterprise infrastructure in the coming years.",
  },
];

const BlogCard = ({ post, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col bg-white  ${
        featured ? "md:col-span-2 md:row-span-1" : ""
      } ${isHovered ? "shadow-xl scale-[1.01]" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-64 md:h-52 lg:h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <img
          src={post.image}
          alt={post.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <Tag size={12} className="mr-1" />
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-gray-500 text-xs mb-2">
          <Clock size={14} className="mr-1" />
          <span>{post.date}</span>
        </div>
        <h2 className={`text-gray-900 mb-2 font-semibold leading-snug ${featured ? "text-2xl md:text-3xl" : "text-xl sm:text-2xl"}`}>
          {post.title}
        </h2>
        {featured && <p className="text-gray-600 mb-4 text-base md:text-lg">{post.excerpt}</p>}
      </div>
    </div>
  );
};

export default function BlogShowcase() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "App Development", "Blockchain", "Software Development", "AI & ML", "Cloud", "Design"];

  const filteredPosts =
    activeTab === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeTab);

  return (
    <div
    className="w-full bg-white py-3 sm:py-4 md:py-6  overflow-hidden px-4 sm:px-6 md:px-8 text-black"
>
    <div className="max-w-7xl mx-auto  py-12 ">
      <div className="mb-16 space-y-4 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Our Blog</h1>
        <div className="flex ">
          <button className="text-base flex items-center group text-black border border-black/20 px-4 py-2 rounded-full hover:bg-black/5 transition-all">
            View More
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${
              activeTab === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            featured={index === 0 && filteredPosts.length >= 3}
          />
        ))}
      </div>
    </div></div>
  );
}
