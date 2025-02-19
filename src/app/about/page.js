'use client'
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaDollarSign,
  FaBuilding,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { PiRocketDuotone } from "react-icons/pi";

function AboutUs() {
  const services = [
    {
      icon: <FaHandsHelping className="text-5xl text-[#91e0ed] mx-auto" />,
      title: "Mentorship Programs",
      description:
        "Access guidance from industry leaders to refine your business strategies and accelerate your growth.",
    },
    {
      icon: <FaDollarSign className="text-5xl text-[#91e0ed] mx-auto" />,
      title: "Funding Support",
      description:
        "We help you secure investments and connect with venture capitalists to turn your idea into a scalable business.",
    },
    {
      icon: <FaBuilding className="text-5xl text-[#91e0ed] mx-auto" />,
      title: "Workspace Solutions",
      description:
        "Access state-of-the-art facilities and collaborative environments to foster creativity and innovation.",
    },
    {
      icon: <FaUsers className="text-5xl text-[#91e0ed] mx-auto" />,
      title: "Networking Opportunities",
      description:
        "Gain exclusive access to a global network of investors, industry experts, and like-minded entrepreneurs.",
    },
    {
      icon: <FaChalkboardTeacher className="text-5xl text-[#91e0ed] mx-auto" />,
      title: "Workshops & Training",
      description:
        "Participate in skill-building workshops and training sessions designed for entrepreneurs at every stage.",
    },
    {
      icon: <PiRocketDuotone className="text-5xl text-[#91e0ed] mx-auto" />,
      title: "Growth Acceleration",
      description:
        "Custom strategies to scale effectively and launch your business to new heights with our tailored solutions.",
    },
  ];

  return (
    <>
      <section
        className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white pb-20">
        {/* About Section Header */}
        <div className="text-center mb-20 py-28 rounded-md bg-fixed bg-cover bg-[url('https://png.pngtree.com/background/20230417/original/pngtree-business-office-blue-technology-light-background-picture-image_2446614.jpg')]">
          <motion.h2
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="text-4xl font-bold text-white my-5">
            Welcome to <span className="text-[#91e0ed]">IntegraliQ</span>
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-lg text-gray-300 mb-4">
            Transforming innovative ideas into scalable, successful businesses
            through mentorship, resources, and a powerful network.
          </motion.p>
          {/* <p className="text-lg text-gray-300 mb-4">
            At IntegraliQ, we are passionate about transforming innovative ideas
            into successful, scalable businesses. As a leading business
            incubation firm, we provide the resources, mentorship, and network
            entrepreneurs need to turn their visions into reality.
          </p> */}
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-32">
          {/* Who We Are Section */}
          <div className="mb-16 mt-6 flex">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              className="w-1/2">
              <img
                className="h-80 aspect-video w-full object-cover rounded-md"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg"
              />
            </motion.div>
            <div className="w-1/2 pl-8">
              <motion.h3
                initial={{ y: -70, opacity: 0 }}
                whileInView={{ y: 0, opacity:1 }}
                className="text-3xl font-semibold text-cente text-white mb-6 mt-3">
                Who <span className="text-[#91e0ed]">We Are</span>
              </motion.h3>
              <motion.p 
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              className="text-lg text-gray-300">
                Founded in 2020, IntegraliQ is dedicated to fostering innovation
                and supporting startups across diverse industries. Our team
                comprises experienced mentors, industry experts, and strategic
                advisors committed to your success. With a hands-on approach and a
                deep understanding of startup challenges, we are here to help you
                turn your idea into a thriving business.
              </motion.p>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="my-16">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              What <span className="text-[#91e0ed]">We Do</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  key={index}
                  className="border-2 border-[#91e0ed] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-8 rounded-lg text-center space-y-6"
                >
                  {service.icon}
                  <h4 className="text-xl font-semibold text-white">
                    {service.title}
                  </h4>
                  <p className="text-base text-gray-300 text-balance">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Mission Section */}
          <section className="mt-40">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              className="flex gap-16 mb-16 border-l-2 border-cyan-500 p-6 rounded-2xl">
              <div className="w-7/12">
                <div className="">
                  <h3 className="text-3xl font-semibold text-center text-white mb-8">
                    Our <span className="text-[#91e0ed]">Vision</span>
                  </h3>
                  <p className="text-lg text-gray-300">
                    Our vision is to be the leading global business incubator,
                    recognized for transforming innovative ideas into successful,
                    scalable companies. We aim to foster a thriving ecosystem where
                    entrepreneurs can thrive, innovate, and collaborate with
                    like-minded professionals and organizations. By helping startups
                    reach their full potential, we believe we can change industries
                    and contribute to global economic growth.
                  </p>
                </div>
              </div>

              <div className="my-2 w-5/12">
                <img
                  className="h-64 rounded-r-2xl"
                  src="https://img.freepik.com/premium-photo/business-development-success-growing-annual-revenue-growth-concept-businessman-pointing-graph-corporate-future-growth-plan_20693-971.jpg?w=360"
                />
              </div>
            </motion.div>

            {/* Our Vision Section */}
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: -50 }}
              className="flex gap-16 border-r-2 border-cyan-500 p-6 rounded-2xl mt-16">
              <div className="my-2 w-5/12">
                <img
                  className="rounded-l-2xl"
                  src="https://www.turkey-payroll.com/wp-content/uploads/2023/09/bpo-turkey.jpeg"
                />
              </div>
              <div className="w-7/12">
                <h3 className="text-3xl font-semibold text-center text-white mb-6">
                  Our <span className="text-[#91e0ed]">Mission</span>
                </h3>
                <p className="text-lg text-gray-300">
                  Our mission is to empower entrepreneurs by providing them with
                  the tools, mentorship, and support they need to succeed. We
                  strive to help businesses grow from the ground up, creating
                  lasting value and sustainable impact. Through personalized
                  guidance and a wealth of resources, we aim to be the cornerstone
                  for the next generation of game-changing startups.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Call to Action: Contact Form */}
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default AboutUs;
