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
    { title: 'Icon 7', description: 'Description for Icon 7' },
    { title: 'Icon 8', description: 'Description for Icon 8' },
    { title: 'Icon 9', description: 'Description for Icon 9' },
    { title: 'Icon 10', description: 'Description for Icon 10' },
    { title: 'Icon 11', description: 'Description for Icon 11' },
    { title: 'Icon 12', description: 'Description for Icon 12' },
  ];

  // Debounce timeout reference
  const debounceTimeoutRef = useRef(null);

  // Scroll snapping to fully align the section in view
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Handle mouse wheel events
  useEffect(() => {
    const handleWheel = (event) => {
      if (!isSectionVisible) return;

      clearTimeout(debounceTimeoutRef.current); // Clear previous timeout

      // Start a new debounce timeout
      debounceTimeoutRef.current = setTimeout(() => {
        if (
          (scrollIndex === 0 && event.deltaY < 0) ||
          (scrollIndex === dummyData.length - 1 && event.deltaY > 0)
        ) {
          document.body.style.overflow = 'auto'; // Allow page scrolling
        } else {
          event.preventDefault(); // Prevent default scrolling
          document.body.style.overflow = 'hidden'; // Disable page scrolling

          // Determine the new scroll index
          if (event.deltaY > 0 && scrollIndex < dummyData.length - 1) {
            // Scroll down
            setScrollIndex((prevIndex) => Math.min(prevIndex + 1, dummyData.length - 1));
          } else if (event.deltaY < 0 && scrollIndex > 0) {
            // Scroll up
            setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
          }
        }
      }, 100); // Adjust debounce delay (100ms is usually sufficient)
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('wheel', handleWheel);
      }
      document.body.style.overflow = 'auto'; // Reset page scrolling
    };
  }, [isSectionVisible, scrollIndex, dummyData.length]);

  // Sync the container scroll position with scrollIndex
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemHeight = container.querySelector('.item')?.offsetHeight || 0;
      const scrollPosition = scrollIndex * itemHeight;

      container.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollIndex]);

  // Track section visibility and manage page scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          scrollToSection(); // Ensure the section is fully visible
        } else {
          document.body.style.overflow = 'auto'; // Enable page scrolling
        }
      },
      { threshold: 0.7 } // Trigger when 70% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.body.style.overflow = 'auto'; // Reset page scrolling
    };
  }, [scrollIndex]);

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
