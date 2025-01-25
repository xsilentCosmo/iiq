import React from 'react';

function Services() {
  const services = [
    {
      title: "Research and Development",
      description: "Pioneering research and development for innovative solutions.",
    },
    {
      title: "Development",
      description: "Expertise in web and software development to meet your needs.",
    },
    {
      title: "Automation",
      description:
        "Delivering automation solutions, electronics development, and services.",
    },
    {
      title: "Advertising",
      description: "Creative advertisement and marketing strategies for growth.",
    },
    {
      title: "Sales",
      description: "Comprehensive product sales and marketing services to boost revenue.",
    },
    {
      title: "Infrastructure",
      description: "Premium infrastructure, co-working spaces, and office solutions.",
    },
    {
      title: "Franchisee",
      description: "Franchise services to expand your firm's reach and network.",
    },
    {
      title: "Marketing",
      description: "Cutting-edge marketing and digital services to transform your brand.",
    },
    {
      title: "Project Management",
      description:
        "Reliable project management services to ensure seamless execution.",
    },
    {
      title: "Quality Management",
      description: "Professional quality management solutions for excellence.",
    },
    {
      title: "Consultancy",
      description: "Tailored consultancy services to guide your business decisions.",
    },
    {
      title: "Finance",
      description: "Comprehensive financial solutions for sustainable growth.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          Our <span className="text-[#91e0ed]">Services</span>
        </h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#91e0ed]"></div>

          {/* Split Services */}
          <div className="grid grid-cols-1 md:ml-7 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Side Services */}
            <div className="flex flex-col gap-12">
              {services.slice(0, 6).map((service, i) => (
                <div
                  key={i}
                  className={`flex items-center text-sm md:gap-6`}
                >
                {/* <div
                  key={i}
                  className={`flex items-center md:gap-6 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}
                > */}
                  {/* Connector Circle */}
                  <div className="flex-shrink-0 w-10 h-10 bg-[#91e0ed] rounded-full flex items-center justify-center text-[#1b2a36] font-bold text-lg">
                    {i + 1}
                  </div>

                  {/* Content */}
                  <div className="text-left max-w-md">
                    <h3 className="text-lg font-semibold mb-2 text-[#91e0ed]">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Services */}
            <div className="flex flex-col gap-12">
              {services.slice(6).map((service, i) => (
                <div
                  key={i + 6}
                  className={`flex items-center md:gap-6`}
                >
                  {/* Connector Circle */}
                  <div className="flex-shrink-0 w-10 h-10 bg-[#91e0ed] rounded-full flex items-center justify-center text-[#1b2a36] font-bold text-lg">
                    {i + 7}
                  </div>

                  {/* Content */}
                  <div className="text-left max-w-md">
                    <h3 className="text-lg font-semibold mb-2 text-[#91e0ed]">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
