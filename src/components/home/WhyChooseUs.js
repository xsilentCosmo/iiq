'use client'
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { RiUserCommunityFill } from "react-icons/ri";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    return (
        <section className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white py-16 min-h-screen flex items-center">
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <motion.h2 className="text-4xl font-bold text-white mb-6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}>
                    Why Choose <span className="text-[#91e0ed]">Integral IQ?</span>
                </motion.h2>
                <motion.p className="text-base text-gray-200 mb-16"
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}>
                    At Integral IQ, we provide an all-in-one ecosystem for startups, offering guidance, resources, and opportunities to thrive.
                </motion.p>
                <div className="grid md:grid-cols-3 gap-12">

                    <motion.div className="text-center transform hover:scale-105 transition-transform duration-300"
                        initial={{ x: -50 }} whileInView={{ x: 0 }} viewport={{ amount: 0.1 }} transition={{ duration: .3 }} >
                        <div className="w-20 h-20 mx-auto mb-6 text-[#91e0ed] flex items-center justify-center p-4 rounded-full border-2 border-[#91e0ed]">
                            <FaChalkboardTeacher size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Expert Mentorship
                        </h3>
                        <p className="text-gray-200 text-base text-balance">
                            Learn from industry leaders and startup experts to transform your ideas into reality.
                        </p>
                    </motion.div>
                    {/* Feature 2 */}
                    <motion.div
                        initial={{ y: 50 }} whileInView={{ y: 0 }} viewport={{ amount: 0.1 }} transition={{ duration: .3 }}
                        className="text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="w-20 h-20 mx-auto mb-6 text-[#91e0ed] flex items-center justify-center p-4 rounded-full border-2 border-[#91e0ed]">
                            <GrResources size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Access to Resources
                        </h3>
                        <p className="text-gray-200 text-base  text-balanc text-balance">
                            Get access to coworking spaces, funding networks, and tech resources to boost growth.
                        </p>
                    </motion.div>
                    {/* Feature 3 */}
                    <motion.div
                        initial={{ x: 50 }} whileInView={{ x: 0 }} viewport={{ amount: 0.1 }} transition={{ duration: .3 }}
                        className="text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="w-20 h-20 mx-auto mb-6 text-[#91e0ed] flex items-center justify-center p-4 rounded-full border-2 border-[#91e0ed]">
                            <RiUserCommunityFill size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Startup Community
                        </h3>
                        <p className="text-gray-200 text-base text-balance">
                            Join a vibrant community of like-minded entrepreneurs and foster collaborations.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
