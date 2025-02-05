'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCode, FiTrendingUp, FiSettings, FiMonitor, FiShoppingCart, FiLayers, FiBriefcase, FiTarget, FiClipboard, FiCheckCircle, FiUserCheck, FiDollarSign } from 'react-icons/fi';

const services = [
    { id: "research-development", company: "QuibitQ Labs", title: "Research & Development", description: "Innovative research solutions.", icon: <FiTrendingUp /> },
    { id: "development", company: "Quantum Quotient", title: "Development", description: "Expert software solutions.", icon: <FiCode /> },
    { id: "automation", company: "iiQ Digital", title: "Automation", description: "AI-driven automation services.", icon: <FiSettings /> },
    { id: "Branding", company: "Pavan Media Tech", title: "Advertising", description: "Creative marketing strategies.", icon: <FiMonitor /> },
    { id: "sales", company: "Sales Institute", title: "Sales", description: "Revenue-boosting sales solutions.", icon: <FiShoppingCart /> },
    { id: "infrastructure", company: "iiQ Space", title: "Infrastructure", description: "Premium co-working spaces.", icon: <FiLayers /> },
    { id: "franchise", company: "FranchisePro", title: "Franchise", description: "Expand your brand with us.", icon: <FiBriefcase /> },
    { id: "marketing", company: "QuantumLeads", title: "Marketing", description: "Data-driven brand transformation.", icon: <FiTarget /> },
    { id: "project-management", company: "Project Mate", title: "Project Management", description: "Efficient & reliable execution.", icon: <FiClipboard /> },
    { id: "quality-management", company: "QualiDezk", title: "Quality Management", description: "Ensuring excellence in quality.", icon: <FiCheckCircle /> },
    { id: "Networking", company: "PacketLab", title: "Networking", description: "Expert business advisory.", icon: <FiUserCheck /> },
    { id: "finance", company: "GMAcc", title: "Finance", description: "Smart financial strategies.", icon: <FiDollarSign /> },
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <Link key={i} href={`/services/${service.id}`} className="cursor-pointer hover:-rotate-3 transition-all duration-200">
                            <motion.div
                                initial={{ y: 50 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative group p-6 py-10 rounded-xl shadow-lg bg-gradient-to-br from-[#1b2a36] to-[#00375e] border border-[#91e0ed]/40 hover:border-[#91e0ed] transition-all duration-300"
                            >
                                {/* Floating Icon (Instead of Logo) */}
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md shadow-md group-hover:shadow-xl transition-all duration-300 text-[#91e0ed] text-3xl">
                                    {service.icon}
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
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
