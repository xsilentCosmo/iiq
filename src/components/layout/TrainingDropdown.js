'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const courseCategories = {
  Electrical: ['Basic Wiring', 'Circuit Design', 'Power Systems'],
  Marketing: ['Digital Marketing', 'SEO Basics', 'Brand Strategy'],
  Cybersecurity: ['Network Security', 'Ethical Hacking', 'Risk Management'],
};

function TrainingDropdown() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHoveredCategory(hoveredCategory)}
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <span className="text-gray-100 hover:text-[#91e0ed] font-medium xl:text-lg transition cursor-pointer">
        Training
      </span>
      <div className="absolute right-0 top-full w-fit bg-gray-800 rounded-md shadow-lg overflow-hidden z-50 flex">
        {/* Categories */}
        <div className="w-1/2 bg-gray-900 p-2">
          {Object.keys(courseCategories).map((category) => (
            <div
              key={category}
              className="text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium cursor-pointer"
              onMouseEnter={() => setHoveredCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        {/* Courses List */}
        <div className="w-1/2 bg-gray-700 p-2">
          {hoveredCategory &&
            courseCategories[hoveredCategory].map((course) => (
              <Link
                key={course}
                href="#"
                className="block text-gray-300 hover:bg-[#00375e] py-2 px-4 font-medium"
              >
                {course}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingDropdown;