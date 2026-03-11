"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Technology",
  "Development",
  "Cloud",
  "AI & ML",
  "Business",
  "Design"
];

const featuredPost = {
  slug: "future-of-enterprise-ai-2024",
  title: "The Future of Enterprise AI: Trends Shaping 2024 and Beyond",
  excerpt: "Explore how artificial intelligence is revolutionizing enterprise operations, from intelligent automation to predictive analytics. Learn what industry leaders are doing to stay ahead.",
  category: "AI & ML",
  author: {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    avatar: "/team/avatar1.jpg"
  },
  date: "March 10, 2024",
  readTime: "8 min read",
  image: "/blog/ai-future.jpg"
};

const blogPosts = [
  {
    slug: "microservices-architecture-guide",
    title: "Complete Guide to Microservices Architecture in 2024",
    excerpt: "Learn how to design, implement, and scale microservices architecture for enterprise applications.",
    category: "Development",
    author: { name: "Michael Chen", role: "Solutions Architect" },
    date: "March 8, 2024",
    readTime: "12 min read",
    image: "/blog/microservices.jpg"
  },
  {
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies: A CTO&apos;s Perspective",
    excerpt: "Strategic approaches to migrating legacy systems to cloud infrastructure without disrupting operations.",
    category: "Cloud",
    author: { name: "David Williams", role: "Cloud Architect" },
    date: "March 5, 2024",
    readTime: "10 min read",
    image: "/blog/cloud.jpg"
  },
  {
    slug: "devops-best-practices",
    title: "DevOps Best Practices for Enterprise Teams",
    excerpt: "Implementing CI/CD pipelines, infrastructure as code, and automated testing at scale.",
    category: "Development",
    author: { name: "Emily Rodriguez", role: "DevOps Lead" },
    date: "March 3, 2024",
    readTime: "9 min read",
    image: "/blog/devops.jpg"
  },
  {
    slug: "cybersecurity-trends",
    title: "Cybersecurity in the Age of AI: New Challenges and Solutions",
    excerpt: "How AI is both a threat and a solution in modern cybersecurity landscapes.",
    category: "Technology",
    author: { name: "James Park", role: "Security Specialist" },
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "/blog/security.jpg"
  },
  {
    slug: "ux-design-enterprise",
    title: "UX Design Principles for Enterprise Applications",
    excerpt: "Creating intuitive and efficient user experiences for complex business software.",
    category: "Design",
    author: { name: "Lisa Thompson", role: "UX Director" },
    date: "February 25, 2024",
    readTime: "6 min read",
    image: "/blog/ux.jpg"
  },
  {
    slug: "digital-transformation-roi",
    title: "Measuring Digital Transformation ROI: A Framework",
    excerpt: "Quantifying the business impact of digital initiatives with actionable metrics.",
    category: "Business",
    author: { name: "Robert Martinez", role: "Business Analyst" },
    date: "February 22, 2024",
    readTime: "8 min read",
    image: "/blog/roi.jpg"
  },
  {
    slug: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    excerpt: "Deep dive into memoization, code splitting, and rendering optimization strategies.",
    category: "Development",
    author: { name: "Anna Kim", role: "Frontend Lead" },
    date: "February 20, 2024",
    readTime: "11 min read",
    image: "/blog/react.jpg"
  },
  {
    slug: "kubernetes-production",
    title: "Running Kubernetes in Production: Lessons Learned",
    excerpt: "Real-world insights from managing large-scale Kubernetes clusters.",
    category: "Cloud",
    author: { name: "Chris Anderson", role: "Platform Engineer" },
    date: "February 18, 2024",
    readTime: "10 min read",
    image: "/blog/kubernetes.jpg"
  },
  {
    slug: "machine-learning-deployment",
    title: "From Model to Production: ML Deployment Best Practices",
    excerpt: "Bridging the gap between data science experiments and production ML systems.",
    category: "AI & ML",
    author: { name: "Dr. Priya Sharma", role: "ML Engineer" },
    date: "February 15, 2024",
    readTime: "9 min read",
    image: "/blog/ml.jpg"
  }
];

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
          
          {/* Animated Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B4FF]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-32 pb-16 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Blog</span>
              </div>

              <span className="inline-block px-4 py-2 bg-[#00B4FF]/20 border border-[#00B4FF]/30 rounded-full text-[#00E1FF] text-sm font-medium mb-6">
                Insights & Resources
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Tech <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Insights</span> & Articles
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
                Expert perspectives on technology, innovation, and digital transformation from our team of industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-30">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00B4FF] focus:ring-2 focus:ring-[#00B4FF]/20 transition-all"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#0055FF] via-[#00B4FF] to-[#00E1FF] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-[#00B4FF]/10 hover:text-[#0055FF]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto min-h-[400px] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/30 to-[#00E1FF]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/80">
                        <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                        </svg>
                        <span className="text-lg font-medium">Featured Article</span>
                      </div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-[#0055FF] to-[#00B4FF] text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-[#00B4FF]/10 text-[#0055FF] text-sm font-medium rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#0055FF] transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0055FF] to-[#00B4FF] flex items-center justify-center text-white font-semibold">
                        {featuredPost.author.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#1a1a2e]">{featuredPost.author.name}</div>
                        <div className="text-sm text-gray-500">{featuredPost.author.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00B4FF]/30 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/20 to-[#00E1FF]/10 group-hover:opacity-70 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/40">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0055FF] text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#0055FF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0055FF] to-[#00B4FF] flex items-center justify-center text-white text-xs font-semibold">
                          {post.author.name.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-600">{post.author.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-[#00B4FF]/20 border border-[#00B4FF]/30 rounded-full text-[#00E1FF] text-sm font-medium mb-6">
                Stay Updated
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Subscribe to Our <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Newsletter</span>
              </h2>
              
              <p className="text-white/70 mb-8">
                Get the latest insights, articles, and industry updates delivered directly to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00B4FF] focus:ring-2 focus:ring-[#00B4FF]/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#0055FF] via-[#00B4FF] to-[#00E1FF] text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
