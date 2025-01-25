'use client';
import React, { useState, useEffect, useRef } from 'react';

function SecuritySection() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const dummyData = [
    { title: 'Icon 1', description: 'Description for Icon 1' },
    { title: 'Icon 2', description: 'Description for Icon 2' },
    { title: 'Icon 3', description: 'Description for Icon 3' },
    { title: 'Icon 4', description: 'Description for Icon 4' },
    { title: 'Icon 5', description: 'Description for Icon 5' },
    { title: 'Icon 6', description: 'Description for Icon 6' },
  ];

  // Handle mouse wheel events
  useEffect(() => {
    const handleWheel = (event) => {
      if (isSectionVisible) {
        if (event.deltaY > 0 && scrollIndex < dummyData.length - 1) {
          // Scroll down
          setScrollIndex((prevIndex) => Math.min(prevIndex + 1, dummyData.length - 1));
        } else if (event.deltaY < 0 && scrollIndex > 0) {
          // Scroll up
          setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isSectionVisible, scrollIndex, dummyData.length]);

  // Sync the container scroll position with scrollIndex
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemHeight = container.querySelector('.item')?.offsetHeight || 0;
      const scrollPosition = scrollIndex * itemHeight;

      // Smoothly scroll to the new position
      container.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollIndex]);

  // Track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-100 h-screen" // Full screen height
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">
            Security that delivers tangible business value
          </h2>
        </div>

        {/* Right Column with Scrollable Content */}
        <div
          ref={containerRef}
          className="w-full md:w-1/2 overflow-hidden"
          style={{ height: '300px' }} // Set fixed height for scroll area
        >
          {/* Icon-Title-Description Column */}
          <div className="flex flex-col space-y-10">
            {dummyData.map((item, index) => (
              <div
                key={index}
                className={`item flex items-start space-x-6 p-4 ${
                  index === scrollIndex ? 'bg-blue-100' : ''
                }`} // Highlight the current item
                style={{ height: '100px' }} // Adjust height for each item
              >
                {/* Left Side: Icons */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>

                {/* Right Side: Titles & Descriptions */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
