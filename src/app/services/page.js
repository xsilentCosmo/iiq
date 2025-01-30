'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { company: "TechVision", title: "Research and Development", description: "Pioneering research and development for innovative solutions." },
  { company: "CodeCrafters", title: "Development", description: "Expertise in web and software development to meet your needs." },
  { company: "AutoGenix", title: "Automation", description: "Delivering automation solutions, electronics development, and services." },
  { company: "AdVantage", title: "Advertising", description: "Creative advertisement and marketing strategies for growth." },
  { company: "SalesBoost", title: "Sales", description: "Comprehensive product sales and marketing services to boost revenue." },
  { company: "InfraSpace", title: "Infrastructure", description: "Premium infrastructure, co-working spaces, and office solutions." },
  { company: "FranchisePro", title: "Franchisee", description: "Franchise services to expand your firm's reach and network." },
  { company: "MarketMinds", title: "Marketing", description: "Cutting-edge marketing and digital services to transform your brand." },
  { company: "ProjectFlow", title: "Project Management", description: "Reliable project management services to ensure seamless execution." },
  { company: "QualityFirst", title: "Quality Management", description: "Professional quality management solutions for excellence." },
  { company: "BizConsult", title: "Consultancy", description: "Tailored consultancy services to guide your business decisions." },
  { company: "FinGrowth", title: "Finance", description: "Comprehensive financial solutions for sustainable growth." },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Our <span className="text-[#91e0ed]">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1b2a36] border-2 border-[#91e0ed] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h4 className="text-lg font-semibold text-[#91e0ed]">{service.company}</h4>
              <h3 className="text-xl font-bold text-white mt-2">{service.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
