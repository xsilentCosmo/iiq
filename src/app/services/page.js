'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    { id: "research-development", company: "QuibitQ Labs", title: "Research & Development", description: "Innovative research solutions.", logo: "/image/logos/quibitq.png" },
    { id: "development", company: "Quantum Quotient", title: "Development", description: "Expert software solutions.", logo: "/images/logos/quantquotient.png" },
    { id: "automation", company: "IIQ Digital", title: "Automation", description: "AI-driven automation services.", logo: "/images/logos/iiq_digital.png" },
    { id: "advertising", company: "Pavan Media Tech", title: "Advertising", description: "Creative marketing strategies.", logo: "/images/logos/pavan_media.png" },
    { id: "sales", company: "SalesBoost", title: "Sales", description: "Revenue-boosting sales solutions.", logo: "/logos/salesboost.png" },
    { id: "infrastructure", company: "IIQ Space", title: "Infrastructure", description: "Premium co-working spaces.", logo: "/images/logos/iiqspace.png" },
    { id: "franchise", company: "FranchisePro", title: "Franchise", description: "Expand your brand with us.", logo: "/logos/franchisepro.png" },
    { id: "marketing", company: "Quantum Leads", title: "Marketing", description: "Data-driven brand transformation.", logo: "/logos/quantumleads.png" },
    { id: "project-management", company: "Project Mate", title: "Project Management", description: "Efficient & reliable execution.", logo: "/logos/projectmate.png" },
    { id: "quality-management", company: "QualiDezk", title: "Quality Management", description: "Ensuring excellence in quality.", logo: "/images/logos/qualidezk.png" },
    { id: "consultancy", company: "PacketLab", title: "Consultancy", description: "Expert business advisory.", logo: "/logos/packetlab.png" },
    { id: "finance", company: "FinGrowth", title: "Finance", description: "Smart financial strategies.", logo: "/logos/fingrowth.png" },
];

const Services = () => {
    return (
        <section className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
            <div className="text-center relative mb-20 py-28 rounded-md bg-fixed bg-cover bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-corporate-website-blue-abstract-background-image_2176185.jpg')]">
                <h2 className="text-4xl font-extrabold text-white mb-16 tracking-wide uppercase">
                    Our <span className="text-[#91e0ed]">Services</span>
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#102f47] to-transparent"></div>
            </div>
            <div className="py-24 max-w-screen-xl mx-auto px-6 text-center">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {services.map((service, i) => (
                        <Link key={i} href={`/services/${service.id}`} className="cursor-pointer">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ scale: 1.08 }}
                                className="relative group p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#1b2a36] to-[#00375e] border border-[#91e0ed]/40 hover:border-[#91e0ed] transition-all duration-300"
                            >
                                {/* Floating Logo Container */}
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <img src={service.logo} alt={service.company} className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white group-hover:text-[#91e0ed] transition-all duration-300">
                                    {service.title}
                                </h3>
                                <h4 className="text-sm font-medium text-[#91e0ed] group-hover:text-white transition-all duration-300">
                                    {service.company}
                                </h4>
                                <p className="text-gray-300 text-sm mt-2 group-hover:text-gray-100 transition-all duration-300">
                                    {service.description}
                                </p>

                                {/* Floating Glow Effect */}
                                <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 bg-[#91e0ed]/40 blur-md transition-all duration-500"></div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
