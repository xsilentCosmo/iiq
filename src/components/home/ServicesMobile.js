import React from 'react'

function ServicesMobile() {
  const services = [
    {
      logo: "🔬",
      title: "Research and Development",
      description:
        "Pioneering research and development for innovative solutions.",
    },
    {
      logo: "💻",
      title: "Development",
      description:
        "Expertise in web and software development to meet your needs.",
    },
    {
      logo: "🤖",
      title: "Automation",
      description:
        "Delivering automation solutions, electronics development, and services.",
    },
    {
      logo: "📢",
      title: "Advertising",
      description:
        "Creative advertisement and marketing strategies for growth.",
    },
    {
      logo: "📈",
      title: "Sales",
      description:
        "Comprehensive product sales and marketing services to boost revenue.",
    },
    {
      logo: "🏢",
      title: "Infrastructure",
      description:
        "Premium infrastructure, co-working spaces, and office solutions.",
    },
    {
      logo: "🌐",
      title: "Franchisee",
      description:
        "Franchise services to expand your firm's reach and network.",
    },
    {
      logo: "📊",
      title: "Marketing",
      description:
        "Cutting-edge marketing and digital services to transform your brand.",
    },
    {
      logo: "📋",
      title: "Project Management",
      description:
        "Reliable project management services to ensure seamless execution.",
    },
    {
      logo: "✔️",
      title: "Quality Management",
      description: "Professional quality management solutions for excellence.",
    },
    {
      logo: "💼",
      title: "Consultancy",
      description:
        "Tailored consultancy services to guide your business decisions.",
    },
    {
      logo: "💰",
      title: "Finance",
      description: "Comprehensive financial solutions for sustainable growth.",
    },
  ];
  
  return (
    <div className="justify-around pl-5 bg-gradient-to-tr from-[#1b2a36] to-[#00375e]">
      <div className="md:hidden flex flex-col items-start text-left py-16 px-6">
        <h1 className="text-3xl font-semibold mx-auto mb-12">
          <span className="text-[#91e0ed] text-4xl">Explore</span> our wide <br />
          range of <span className="text-[#91e0ed] text-4xl">Services</span>
        </h1>
        <ul className="w-full">
          {services.map((service, index) => (
            <li key={index} className="py-8">
              <div className="flex items-start mb-6">
                <span className="text-5xl mr-6">{service.logo}</span>
                <div className="flex flex-col">
                  <span className="font-bold text-xl mb-2">{service.title}</span>
                  <span className="text-sm text-gray-300">{service.description}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServicesMobile;
