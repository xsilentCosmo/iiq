"use client"; // marks the file as client-side

import { motion } from "framer-motion";
import { FaLightbulb, FaChartLine, FaHandshake, FaGlobe, FaSeedling, FaTools, FaPeopleArrows } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Vision Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="text-[#91e0ed]">Vision</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <motion.div
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <FaLightbulb className="text-4xl text-[#91e0ed]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#91e0ed]">Empowering Entrepreneurs</h3>
                    <p className="text-base">
                      Providing entrepreneurs with resources, expert guidance, and robust networks to achieve success.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <FaChartLine className="text-4xl text-[#91e0ed]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#91e0ed]">Economic Development</h3>
                    <p className="text-base">
                      Boosting local economies by generating jobs, attracting investors, and fostering sustainable businesses.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <FaHandshake className="text-4xl text-[#91e0ed]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#91e0ed]">Collaborative Ecosystems</h3>
                    <p className="text-base">
                      Nurturing innovation through collaboration among startups, mentors, and industry experts.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/vision.jpg"
                alt="Vision Illustration"
                className="w-full max-w-md mx-auto rounded-md"
              />
            </motion.div>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <motion.h2
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="text-[#91e0ed]">Mission</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/mission.jpg"
                alt="Mission Illustration"
                className="w-full max-w-md mx-auto rounded-md"
              />
            </motion.div>

            <div className="flex flex-col space-y-8">
              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: .2 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <FaGlobe className="text-4xl text-[#91e0ed]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#91e0ed]">Supporting Entrepreneurs</h3>
                    <p className="text-base">
                      Fostering creativity, risk-taking, and innovation in a structured and supportive environment.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: .4 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <FaSeedling className="text-4xl text-[#91e0ed]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#91e0ed]">Promoting Sustainability</h3>
                    <p className="text-base">
                      Encouraging eco-friendly practices while addressing global challenges like renewable energy.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: .6 }} // Even longer duration for the third element
                viewport={{ amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <FaTools className="text-4xl text-[#91e0ed]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#91e0ed]">Providing Resources</h3>
                    <p className="text-base">
                      Offering funding, advanced facilities, and expert networks to address scalability and competition challenges.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: .8 }} // Even longer duration for the fourth element
                viewport={{ amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <FaPeopleArrows className="text-4xl text-[#91e0ed]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#91e0ed]">Encouraging Collaboration</h3>
                    <p className="text-base">
                      Building ecosystems of entrepreneurs, investors, and institutions for partnerships and shared knowledge.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
