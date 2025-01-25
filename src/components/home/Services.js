"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollSection = () => {
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("li > span", { transformOrigin: "0 50%" });
    gsap.set("li:not(:first-of-type) span", {
      opacity: 0.2,
      scale: 0.8,
      translateX: 25,
    });

    const tl = gsap
      .timeline()
      .to("li:not(:first-of-type) span", {
        opacity: 1,
        scale: 1,
        stagger: 0.5,
        translateX: 0,
      })
      .to(
        "li:not(:last-of-type) span",
        { opacity: 0.2, scale: 0.8, stagger: 0.5, translateX: 25 },
        0.2
      );

    ScrollTrigger.create({
      trigger: ".scroll-trigger",
      start: "center center",
      endTrigger: "li:last-of-type",
      end: "center center",
      pin: true,
      animation: tl,
      scrub: true,
    });
  }, []);

  return (
    <div>
      <div className="cols2 flex justify-around pl-5 min-h-screen py-60 bg-gradient-to-tr from-[#1b2a36] to-[#00375e]">
        {/* <h1 className="scroll-trigger flex-grow-0 self-start font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase leading-none">
          Services
        </h1> */}

        <h1 className="scroll-trigger flex-grow-0 self-start font-extrabold text-xl sm:text2xl md:text-3xl lg:text-4xl tracking-wide leading-none max-w-[30%] lg:max-w-[45%]">
          <span className="text-[#91e0ed] text-1xl sm:text-2xl md:text-4xl text-5xl">Explore</span> our wide <br/>range of <span className="text-[#91e0ed] text-1xl sm:text-2xl md:text-4xl text-5xl">Services</span>
        </h1>

        <ul className="list-none pl-0 flex-grow-0 self-start font-extrabold text-xl tracking-wider leading-snug">
          {services.map((service, index) => (
            <li key={index} className="scroll-snap-align-center pl-[0.2em]">
              <div className="flex items-start py-16">
                <span className="text-5xl mr-4">{service.logo}</span>
                <div className="flex flex-col max-w-sm">
                  <span className="font-bold text-2xl mb-1">
                    {service.title}
                  </span>
                  <span className="text-base font-normal text-gray-300">
                    {service.description}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollSection;
