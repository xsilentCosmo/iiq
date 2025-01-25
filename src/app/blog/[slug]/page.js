// /src/app/blog/[slug]/page.js

import React from 'react';
import PostContent from './PostContent'; // Client-side component for the post content

// Mock data for posts
const posts = [
    {
        slug: "future-of-cybersecurity",
        title: "The Future of Cybersecurity: Emerging Trends",
        content: `In an increasingly digital world, cybersecurity is more important than ever. 
            As businesses move towards digital solutions, cyber threats evolve in parallel. 
            Emerging technologies such as AI and machine learning are being utilized to detect 
            and mitigate these threats. This post explores the trends to watch in the cybersecurity 
            landscape.`,
        date: "January 10, 2025",
        author: {
            name: "Jane Doe",
            avatar: "/images/jane-doe.jpg", // Placeholder for avatar image
            bio: "Cybersecurity expert and technology enthusiast. Writing to make the digital world safer.",
        },
        relatedPosts: [
            { slug: "ai-in-business", title: "How AI is Shaping the Future of Business" },
            { slug: "cloud-security", title: "Cloud Security: Best Practices for 2025" },
        ],
    },
    {
        slug: "ai-in-business",
        title: "How AI is Shaping the Future of Business",
        content: `Artificial intelligence (AI) is revolutionizing industries worldwide. 
            From automating mundane tasks to enhancing decision-making processes, AI is 
            playing a critical role in shaping modern business strategies. This post looks 
            at how AI is influencing different sectors and its potential to drive business growth.`,
        date: "January 5, 2025",
        author: {
            name: "John Smith",
            avatar: "/images/john-smith.jpg", // Placeholder for avatar image
            bio: "AI researcher and business consultant, helping organizations leverage AI technologies.",
        },
        relatedPosts: [
            { slug: "future-of-cybersecurity", title: "The Future of Cybersecurity: Emerging Trends" },
            { slug: "blockchain-for-business", title: "Blockchain for Business: Transforming the Future" },
        ],
    },
];

// `generateStaticParams` for static paths (optional)
export async function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

// Page Component
export default async function BlogPostPage({ params }) {
    const { slug } = params;

    // Find the relevant post
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        return (
            <div className="py-20 text-center text-white">
                <h1 className="text-2xl font-bold">Post not found!</h1>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Blog Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <p className="text-lg text-gray-300">{post.date}</p>
                    <div className="flex justify-center mt-4">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <p className="font-semibold">{post.author.name}</p>
                            <p className="text-sm text-gray-400">{post.author.bio}</p>
                        </div>
                    </div>
                </div>

                {/* Blog Content - using PostContent */}
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6">
                        <PostContent content={post.content} />
                    </div>
                </div>

                {/* Related Posts */}
                <div className="mt-12">
                    <h2 className="text-2xl text-center font-bold text-gray-300">Related Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                        {post.relatedPosts.map((relatedPost) => (
                            <div key={relatedPost.slug} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl">
                                <a href={`/blog/${relatedPost.slug}`} className="text-xl font-semibold text-white">
                                    {relatedPost.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Share (Mocked Links) */}
                {/* <div className="mt-12 text-center">
                    <p className="text-gray-400">Share this post:</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href={`https://twitter.com/intent/tweet?url=`} target="_blank" className="text-blue-500">
                            Twitter
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=`} target="_blank" className="text-blue-700">
                            Facebook
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
