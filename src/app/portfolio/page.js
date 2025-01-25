'use client'
import CTASection from '@/components/CTASection';
import React from 'react';

function PortfolioPage() {
    return (
        <>
            <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
                <div className="max-w-screen-xl mx-auto px-6">
                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Our Ventures Portfolio</h1>
                        <p className="text-lg text-gray-300">
                            Discover the groundbreaking companies we’ve incubated, each contributing to a brighter future.
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                img: "/images/logos/cyber_secube.jpg",
                                name: "Cyber Secube",
                                description: "Cybersecurity training for a safer digital world.",
                            },
                            {
                                img: "/images/logos/qualidezk.png",
                                name: "Qualidezk",
                                description: "Elevating quality management systems.",
                            },
                            {
                                img: "/images/logos/logiquotient.png",
                                name: "LogiQuotient",
                                description: "Software development training for the next generation of developers.",
                            },
                            {
                                img: "/images/logos/quantquotient.png",
                                name: "QuantQuotient",
                                description: "Software development services delivering smart, scalable solutions.",
                            },
                            {
                                img: "/images/logos/pavan_media.png",
                                name: "Pavan Media",
                                description: "Innovative advertising solutions redefining industries.",
                            },
                            {
                                img: "/images/logos/gmacc.png",
                                name: "GMACC Academy",
                                description: "Empowering education with innovative learning.",
                            },
                            {
                                img: "/images/logos/iiq_digital.png",
                                name: "IIQ Digital",
                                description: "Leading the way in automation solutions to optimize business operations and drive efficiency.",
                            },
                        ].map((company, index) => (
                            <div
                                key={index}
                                className="relative group bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                            >
                                <img
                                    src={company.img}
                                    alt={company.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                                    <p className="text-gray-300 mt-2">{company.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTASection/>
        </>
    );
}

export default PortfolioPage;
