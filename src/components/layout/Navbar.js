'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 py-1 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src="/logo.png" width={180} height={50} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services'].map((item, index) => (
              <Link
                key={index}
                href={`${item === 'Home' ? '/' : item.toLowerCase()}`}
                className="text-gray-100 hover:text-[#91e0ed] font-medium transition"
              >
                {item}
              </Link>
            ))}

            {/* Training Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="#"
                className="text-gray-100 hover:text-[#91e0ed] font-medium transition"
              >
                Training
              </Link>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden z-50">
                  <Link
                    href="#"
                    className="block text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium"
                  >
                    Training Calendar
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium"
                  >
                    Training Programs
                  </Link>
                </div>
              )}
            </div>

            {['Blog', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
                className="text-gray-100 hover:text-[#91e0ed] font-medium transition"
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

          {/* Mobile Navigation with Sliding Animation */}
          <div
            className={`fixed top-14 left-0 right-0 bg-transparent backdrop-blur-md flex flex-col items-start justify-start z-50 px-4 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {['Home', 'About', 'Services'].map((item, index) => (
              <Link
                key={index}
                href={`${item === 'Home' ? '/' : item.toLowerCase()}`}
                className="text-gray-100 hover:text-[#91e0ed] font-medium text-lg py-3 w-full text-left border-b border-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Training Dropdown */}
            <div
              className="relative w-full border-b border-gray-600"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <button
                className="text-gray-100 hover:text-[#91e0ed] font-medium text-lg py-3 w-full text-left"
                onClick={(e) => e.preventDefault()}
              >
                Training
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden z-50">
                  <Link
                    href="#"
                    className="block text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium"
                  >
                    Training Calendar
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium"
                  >
                    Training Programs
                  </Link>
                </div>
              )}
            </div>

            {['Blog', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
                className="text-gray-100 hover:text-[#91e0ed] font-medium text-lg py-3 w-full text-left border-b border-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
