'use client'
import { useState } from 'react';
import { FaHandsHelping, FaDollarSign, FaBuilding, FaUsers, FaChalkboardTeacher, FaBullhorn, FaChartLine, FaCogs } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa6';

function AboutUs() {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <section className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white py-20">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-32">
                {/* About Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        At IntegraliQ, we are passionate about transforming innovative ideas into successful, scalable businesses.
                        As a leading business incubation firm, we provide the resources, mentorship, and network entrepreneurs need to turn their visions into reality.
                    </p>
                </div>

                {/* Who We Are Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-semibold text-center text-white mb-12">Who We Are</h3>
                    <p className="text-lg text-gray-300">
                        Founded in 2020, IntegraliQ is dedicated to fostering innovation and supporting startups across diverse industries. Our team comprises experienced mentors, industry experts, and strategic advisors committed to your success. With a hands-on approach and a deep understanding of startup challenges, we are here to help you turn your idea into a thriving business.
                    </p>
                </div>

                {/* Our Mission Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-semibold text-center text-white mb-12">Our Mission</h3>
                    <p className="text-lg text-gray-300">
                        Our mission is to empower entrepreneurs by providing them with the tools, mentorship, and support they need to succeed. We strive to help businesses grow from the ground up, creating lasting value and sustainable impact. Through personalized guidance and a wealth of resources, we aim to be the cornerstone for the next generation of game-changing startups.
                    </p>
                </div>

                {/* Our Vision Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-semibold text-center text-white mb-12">Our Vision</h3>
                    <p className="text-lg text-gray-300">
                        Our vision is to be the leading global business incubator, recognized for transforming innovative ideas into successful, scalable companies. We aim to foster a thriving ecosystem where entrepreneurs can thrive, innovate, and collaborate with like-minded professionals and organizations. By helping startups reach their full potential, we believe we can change industries and contribute to global economic growth.
                    </p>
                </div>

                {/* What We Do Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-semibold text-center text-white mb-12">What We Do</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl p-8 bg-[#00375e] rounded-lg text-center space-y-6">
                            <FaHandsHelping className="text-4xl text-[#91e0ed]" />
                            <h4 className="text-2xl font-semibold text-white">Mentorship Programs</h4>
                            <p className="text-lg text-gray-300">
                                Access guidance from industry leaders to refine your business strategies and accelerate your growth.
                            </p>
                        </div>

                        <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl p-8 bg-[#00375e] rounded-lg text-center space-y-6">
                            <FaDollarSign className="text-4xl text-[#91e0ed]" />
                            <h4 className="text-2xl font-semibold text-white">Funding Support</h4>
                            <p className="text-lg text-gray-300">
                                We help you secure investments and connect with venture capitalists to turn your idea into a scalable business.
                            </p>
                        </div>

                        <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl p-8 bg-[#00375e] rounded-lg text-center space-y-6">
                            <FaBuilding className="text-4xl text-[#91e0ed]" />
                            <h4 className="text-2xl font-semibold text-white">Workspace Solutions</h4>
                            <p className="text-lg text-gray-300">
                                Access state-of-the-art facilities and collaborative environments to foster creativity and innovation.
                            </p>
                        </div>

                        <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl p-8 bg-[#00375e] rounded-lg text-center space-y-6">
                            <FaUsers className="text-4xl text-[#91e0ed]" />
                            <h4 className="text-2xl font-semibold text-white">Networking Opportunities</h4>
                            <p className="text-lg text-gray-300">
                                Gain exclusive access to a global network of investors, industry experts, and like-minded entrepreneurs.
                            </p>
                        </div>

                        <div className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl p-8 bg-[#00375e] rounded-lg text-center space-y-6">
                            <FaChalkboardTeacher className="text-4xl text-[#91e0ed]" />
                            <h4 className="text-2xl font-semibold text-white">Workshops & Training</h4>
                            <p className="text-lg text-gray-300">
                                Participate in skill-building workshops and training sessions designed for entrepreneurs at every stage.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-[#00375e] py-20 rounded-lg shadow-lg text-white">
    <h3 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h3>
    
    <div className="max-w-screen-xl mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Proven Success */}
            <div className="flex flex-col items-center bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all">
                <FaBullhorn className="text-5xl mb-6 text-[#91e0ed]" />
                <h4 className="text-xl font-semibold text-[#91e0ed] mb-4">Proven Success</h4>
                <p className="text-lg text-gray-300">
                    Our track record speaks for itself. We’ve helped launch numerous successful startups across various industries, driving growth and innovation at every stage.
                </p>
            </div>

            {/* Hands-On Support */}
            <div className="flex flex-col items-center bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all">
                <FaHandsHelping className="text-5xl mb-6 text-[#91e0ed]" />
                <h4 className="text-xl font-semibold text-[#91e0ed] mb-4">Hands-On Support</h4>
                <p className="text-lg text-gray-300">
                    We offer personalized, hands-on mentorship and support to guide you every step of the way. Whether it's refining your business plan or scaling your operations, we’re with you.
                </p>
            </div>

            {/* Vast Network */}
            <div className="flex flex-col items-center bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all">
                <FaUsers className="text-5xl mb-6 text-[#91e0ed]" />
                <h4 className="text-xl font-semibold text-[#91e0ed] mb-4">Vast Network</h4>
                <p className="text-lg text-gray-300">
                    Tap into an exclusive network of investors, partners, and experts. With our connections, you gain access to a global ecosystem of opportunities.
                </p>
            </div>
            
            {/* Industry Expertise */}
            <div className="flex flex-col items-center bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all">
                <FaChartLine className="text-5xl mb-6 text-[#91e0ed]" />
                <h4 className="text-xl font-semibold text-[#91e0ed] mb-4">Industry Expertise</h4>
                <p className="text-lg text-gray-300">
                    Our team consists of seasoned industry experts who bring invaluable insights and practical knowledge to help you navigate challenges and seize opportunities.
                </p>
            </div>

            {/* Tailored Solutions */}
            <div className="flex flex-col items-center bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all">
                <FaCogs className="text-5xl mb-6 text-[#91e0ed]" />
                <h4 className="text-xl font-semibold text-[#91e0ed] mb-4">Tailored Solutions</h4>
                <p className="text-lg text-gray-300">
                    We don’t believe in one-size-fits-all solutions. Our approach is customized to your unique needs, ensuring that your business receives the right support for its growth stage.
                </p>
            </div>

            {/* Entrepreneur-Centered Focus */}
            <div className="flex flex-col items-center bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all">
                <FaRocket className="text-5xl mb-6 text-[#91e0ed]" />
                <h4 className="text-xl font-semibold text-[#91e0ed] mb-4">Entrepreneur-Centered Focus</h4>
                <p className="text-lg text-gray-300">
                    We understand the journey of an entrepreneur. Our services and mentorship are designed to empower you, focusing on your growth and development every step of the way.
                </p>
            </div>
        </div>
        
        {/* Testimonials */}
        
    </div>
</div>


                {/* Call to Action: Contact Form */}
                <div className="text-center mt-16">
                    <button
                        onClick={() => setContactOpen(!contactOpen)}
                        className="inline-block px-8 py-3 bg-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow-md hover:bg-[#6dc2d6] transition-all"
                    >
                        Get In Touch
                    </button>
                    {contactOpen && (
                        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                            <h4 className="text-2xl font-semibold text-[#00375e] mb-4">Contact Us</h4>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded-md border border-gray-300"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        className="w-full p-3 rounded-md border border-gray-300"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="w-full p-3 rounded-md border border-gray-300"
                                        rows="4"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg hover:bg-[#6dc2d6]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
