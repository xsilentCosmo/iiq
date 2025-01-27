'use client'
import { PiRocketDuotone } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineModelTraining } from "react-icons/md";
import { motion } from "framer-motion";

function WhatWeOffer() {
  return (
    <section className="py-16 bg-gradient-to-tr from-[#1b2a36] to-[#00375e] text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-semibold text-white mb-10">
          What <span className="text-[#91e0ed]">We Offer</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Incubation",
              description:
                "We provide a comprehensive incubation program to help early-stage startups refine their business models and grow sustainably.",
              icon: <PiRocketDuotone size={40} />,
            },
            {
              title: "Funding",
              description:
                "Access to a variety of funding sources to propel your startup’s growth and achieve your milestones.",
              icon: <GiMoneyStack size={40} />,
            },
            {
              title: "Training",
              description:
                "Gain critical skills and insights through our tailored training programs designed to foster entrepreneurial success.",
              icon: <MdOutlineModelTraining size={40} />,
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="text-center transform hover:scale-105 transition-transform duration-300 bg-gradient-to-tl from-[#1b2a36] to-[#00375e] rounded-lg shadow-md p-6"
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              {/* Icon Animation */}
              <motion.div
                className="w-16 h-16 mx-auto mb-4 text-[#91e0ed] flex items-center justify-center p-3 rounded-full border-2 border-[#91e0ed]"
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                initial={{ y: -30, opacity: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              {/* Title Animation */}
              <motion.h3
                className="text-xl font-semibold text-white mb-2"
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                initial={{ x: -50, opacity: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.3 * i, duration: 0.6 }}
              >
                {service.title}
              </motion.h3>

              {/* Description Animation */}
              <motion.p
                className="text-gray-200 text-sm text-left leading-relaxed mb-3"
                whileInView={{
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.4 * i, duration: 0.5 }}
              >
                {service.description}
              </motion.p>

              {/* Button Animation */}
              <motion.button
                className="px-4 py-2 bg-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow hover:bg-[#6dc2d6] transition-all"
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                initial={{ opacity: 0, scale: .50, }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
