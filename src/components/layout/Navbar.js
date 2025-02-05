'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const trainingCategories = [
  {
    category: 'Cybersecurity',
    host: 'Cyber SecQube',
    courses: [
      'BCA in Cyber Physical Systems',
      'BCA in Cyber Security',
      'BCA in Digital Forensics',
      'BCA in Block Chain & Cryptography'
    ],
  },
  {
    category: 'Electronics',
    host: 'Hybridonics',
    courses: [
      'BCA in Embedded',
      'BCA in Digital Electronics',
      'BCA in AR/VR',
      'BCA in IOT'
    ],
  },
  {
    category: 'Data Science',
    host: 'DataZ',
    courses: [
      'BCA in Data Science',
      'BCA in Big Data',
      'BCA in Data Base and SQL'
    ],
  },
  {
    category: 'Software Development',
    host: 'LogiQuotient',
    courses: [
      'BCA in Software Engg',
      'BCA in Web Design',
      'BCA in App Developer',
      'BCA in Game Dev',
      'BCA in Software Testing',
      'BCA in Cloud Computing',
      'BCA in Quantum Computing',
      'BCA in Virtualisation and Containerisation',
      'BCA in HCI',
      'BCA in Green Computing',
      'BCA in Digital Twins'
    ],
  },
  {
    category: 'Marketing',
    host: 'QuantumLeads',
    courses: [
      'BCA in e Com Techs',
      'BCA in Digital Marketing'
    ],
  },
  {
    category: 'AI & Robotics',
    host: 'Foxer Dynamics',
    courses: [
      'BCA in AI/ML',
      'BCA in Ethical AI',
      'BCA in Robotics & Automation',
      'BCA in NLP',
      'BCA in Edge Computing'
    ],
  },
  {
    category: 'Project Management',
    host: 'Project mate',
    courses: [
      'BCA in MIS'
    ],
  },
  {
    category: 'Engineering',
    host: 'Integral Power',
    courses: [
      'BCA in EV Engg',
      'BCA in RE Engg',
      'BCA in Autonomous Systems'
    ],
  },
  {
    category: 'Networking',
    host: 'PacketLab',
    courses: [
      'BCA in Hardware',
      'BCA in N/W'
    ],
  },
];



function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-screen-xl md:max-w-[90%] mx-auto px-6 py-1 md:py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src="/logo.png" width={180} height={50} alt="logo" className="xl:w-52" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services'].map((item, index) => (
              <Link
                key={index}
                href={`${item === 'Home' ? '/' : item.toLowerCase()}`}
                className="text-gray-100 hover:text-[#91e0ed] font-medium xl:text-lg transition"
              >
                {item}
              </Link>
            ))}

            {/* Training Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => {
                setIsDropdownOpen(false);
                setActiveCategory(null);
              }}
            >
              <button className="text-gray-100 hover:text-[#91e0ed] font-medium xl:text-lg transition">
                Training
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 top-full flex bg-gradient-to-br from-[#1b2a36] to-[#00375e] rounded-md shadow-lg overflow-hidden z-50 p-4">
                  {/* Course List (Now Positioned to the Left) */}
                  {activeCategory && (
                    <div className="w-72 bg-slate-800 p-4 rounded-l-md max-h-[80vh] overflow-y-scroll">
                      <h3 className="text-[#91e0ed] font-semibold mb-4">{activeCategory.host}</h3> {/* Host name */}
                      {activeCategory.courses.map((course, idx) => (
                        <Link
                          key={idx}
                          href={`/training/${activeCategory.category.toLowerCase().replace(/\s+/g, '-')}/${course.toLowerCase().replace(/\s+/g, '-')}`}  // Course URL
                          className="block border-t border-b border-cyan-700 text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium"
                        >
                          {course}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Categories */}
                  <div className="w-56 pl-3">
                    {trainingCategories.map((category, index) => (
                      <button
                        key={index}
                        className="block border-b border-cyan-700 text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium w-full text-left"
                        onMouseEnter={() => setActiveCategory(category)}
                      >
                        <Link
                          href={`/training/${category.category.toLowerCase()}`}  // Category URL
                          className="w-full"
                        >
                          {category.category}
                        </Link>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog and Contact */}
            {['Blog', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-gray-100 hover:text-[#91e0ed] font-medium xl:text-lg transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-100 hover:text-[#91e0ed] focus:outline-none"
            aria-label="Open Menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;