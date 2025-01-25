'use client'
import Loader from '@/components/layout/Loader';
import Link from 'next/link';
import React, { useState } from 'react';

function BlogPage() {
    const [loading, setLoading] = useState(false);

    const handleLoadMore = () => {
        setLoading(true);
        // Simulate an async action (like fetching more blog posts)
        setTimeout(() => {
            // After loading is complete, reset the loading state
            setLoading(false);
        }, 2000); // 2 seconds delay for the loading animation
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Our Latest Blog Posts</h1>
                    <p className="text-lg text-gray-300">
                        Stay updated with the latest insights, trends, and stories from our industry.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            img: "https://assets.weforum.org/article/image/eqPZko_4V9ulaFLoZHDxwP-GOr7O1ldb0d9yoTg7qMg.jpg",
                            title: "The Future of Cybersecurity: Emerging Trends",
                            excerpt: "Explore the new trends in cybersecurity and how businesses can stay secure in a rapidly changing digital world.",
                            date: "January 10, 2025",
                            link: "/blog/future-of-cybersecurity"
                        },
                        {
                            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-HSVduldwa6puZCXEn1W2uRNJVTLQEb-oQ&s",
                            title: "How AI is Shaping the Future of Business",
                            excerpt: "Artificial intelligence is revolutionizing industries. Discover the impact of AI on business strategies and operations.",
                            date: "January 5, 2025",
                            link: "/blog/ai-in-business"
                        },
                        {
                            img: "https://acropolium.com/img/articles/build-scalable-web-app-from-scratch/img02.jpg",
                            title: "Building Scalable Software for Startups",
                            excerpt: "Learn best practices for building scalable software solutions that grow with your startup’s needs and demands.",
                            date: "December 28, 2024",
                            link: "/blog/scalable-software-for-startups"
                        },
                        {
                            img: "https://smesouthafrica.co.za/wp-content/uploads/2024/02/Untitled-design-6.png",
                            title: "Effective Marketing Strategies for Small Businesses",
                            excerpt: "Marketing doesn’t have to be expensive. Here are creative and cost-effective marketing strategies for small businesses.",
                            date: "December 20, 2024",
                            link: "/blog/marketing-strategies-for-small-businesses"
                        },
                        {
                            img: "https://cdn-chkij.nitrocdn.com/PvHwcyBkfPOahtKQqMidXquYeYSSTUka/assets/images/optimized/rev-a2ad5cc/beslick.com/wp-content/uploads/2024/10/AdobeStock_490297706-scaled.jpeg",
                            title: "Automating Your Workflow for Maximum Productivity",
                            excerpt: "Discover how automation tools can help streamline your workflows, saving time and increasing productivity.",
                            date: "December 15, 2024",
                            link: "/blog/automating-workflow"
                        },
                        {
                            img: "https://heconomist.ch/wordpress_9/wp-content/uploads/2024/12/networking-construya-su-red-profesional-en-mexico.jpeg",
                            title: "The Power of Networking for Entrepreneurs",
                            excerpt: "Networking is a crucial skill for entrepreneurs. Learn how to build meaningful connections and grow your business.",
                            date: "December 10, 2024",
                            link: "/blog/power-of-networking"
                        },
                    ].map((post, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
                                <p className="text-gray-300 mt-2">{post.excerpt}</p>
                                <div className="mt-4 text-gray-500 text-sm">{post.date}</div>
                                <Link href={post.link} className="text-[#91e0ed] mt-2 inline-block">Read more</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination (optional) */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        className={`py-2 px-6 rounded-lg transition-colors duration-300 font-semibold text-[#00375e] ${loading ? 'bg-transparent cursor-not-allowed' : 'bg-[#91e0ed] hover:bg-[#78c1d4]'}`}
                        disabled={loading}
                        >
                        {loading ? (
                            <Loader/>
                        ) : (
                            'Load More'
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BlogPage;
