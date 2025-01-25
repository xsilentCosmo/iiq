import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { RiUserCommunityFill } from "react-icons/ri";

const MidSections = () => {
  return (
    <div>
      {/* Mission & Vision Section */}
      {/* <section className="bg-[#00375e] text-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto text-center px-6 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Mission & Vision</h2>
        <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
          Our mission is to empower entrepreneurs by providing the tools, mentorship, and resources they need to build innovative, scalable businesses that will make a lasting impact.
        </p>
        <div className="flex justify-center gap-12">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#91e0ed] mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h4v8h12v-8h4L12 2z" /></svg>
            <p className="font-semibold text-xl">Innovation</p>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#91e0ed] mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h4v8h12v-8h4L12 2z" /></svg>
            <p className="font-semibold text-xl">Support</p>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#91e0ed] mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h4v8h12v-8h4L12 2z" /></svg>
            <p className="font-semibold text-xl">Growth</p>
          </div>
        </div>
      </div>
    </section> */}

<section className="bg-[#00375e] text-white py-16">
  <div className="max-w-screen-xl mx-auto px-6 text-center">
    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
      Why Choose <span className="text-[#91e0ed]">Integral IQ?</span>
    </h2>
    <p className="text-lg lg:text-xl text-gray-200 mb-12">
      At Integral IQ, we provide an all-in-one ecosystem for startups, offering guidance, resources, and opportunities to thrive.
    </p>
    <div className="grid md:grid-cols-3 gap-12">
      {/* Feature 1 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-[#91e0ed] flex items-center justify-center">
          <FaChalkboardTeacher size={50} />
        </div>
        <h3 className="text-xl font-bold text-white">Expert Mentorship</h3>
        <p className="text-gray-200 mt-2">
          Learn from industry leaders and startup experts to transform your ideas into reality.
        </p>
      </div>
      {/* Feature 2 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-[#91e0ed] flex items-center justify-center">
          <GrResources size={50} />
        </div>
        <h3 className="text-xl font-bold text-white">Access to Resources</h3>
        <p className="text-gray-200 mt-2">
          Get access to coworking spaces, funding networks, and tech resources to boost growth.
        </p>
      </div>
      {/* Feature 3 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-[#91e0ed] flex items-center justify-center">
          <RiUserCommunityFill size={50} />
        </div>
        <h3 className="text-xl font-bold text-white">Startup Community</h3>
        <p className="text-gray-200 mt-2">
          Join a vibrant community of like-minded entrepreneurs and foster collaborations.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Business Development Support Section */}
      <section className="bg-[#00375e] text-white py-16">
        <div className="container mx-auto text-center px-6 lg:px-16">
          <h2 className="text-4xl font-bold mb-6 text-[#91e0ed]">
            Business Development Support
          </h2>
          <p className="text-lg lg:text-xl mb-12">
            Our business development support services help startups grow and succeed by offering guidance, resources, and connections.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-[#91e0ed] text-[#00375e] p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Guidance from Experts</h3>
              <p className="text-lg">
                Receive expert guidance from experienced entrepreneurs, mentors, and industry leaders.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#91e0ed] text-[#00375e] p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Financial Assistance</h3>
              <p className="text-lg">
                We connect startups with angel investors, venture capitalists, and grant providers to help secure funding.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#91e0ed] text-[#00375e] p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Infrastructure & Resources</h3>
              <p className="text-lg">
                Access affordable co-working spaces, offices, meeting rooms, and advanced facilities to scale your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#00375e] text-white py-16 min-h-screen flex items-center">
        <div className="container mx-auto text-center px-6 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            Integral IQ offers a wide range of services to help your startup succeed, from training programs to co-working spaces and networking opportunities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-[#91e0ed] text-[#00375e] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Co-working Spaces</h3>
              <p>Fully-equipped spaces designed for innovation and collaboration. Build your business in a community of like-minded entrepreneurs.</p>
              <button className="mt-4 text-[#00375e] font-semibold hover:text-[#91e0ed]">Learn More</button>
            </div>
            <div className="bg-[#00375e] text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Workshops & Training</h3>
              <p>Attend workshops and training sessions to hone your business, technical, and leadership skills.</p>
              <button className="mt-4 text-[#91e0ed] font-semibold hover:text-white">Learn More</button>
            </div>
            <div className="bg-[#91e0ed] text-[#00375e] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Networking Opportunities</h3>
              <p>Expand your network by connecting with investors, mentors, and peers from various industries.</p>
              <button className="mt-4 text-[#00375e] font-semibold hover:text-[#91e0ed]">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-[#091b27] text-white py-16 min-h-screen flex items-center">
        <div className="container mx-auto text-center px-6 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            Have questions? Get in touch with us and we'll help you get started on your journey to success.
          </p>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="p-4 rounded-md border border-gray-300 w-full mb-4" />
            <input type="email" placeholder="Your Email" className="p-4 rounded-md border border-gray-300 w-full mb-4" />
            <textarea placeholder="Your Message" className="p-4 rounded-md border border-gray-300 w-full mb-4" rows="6"></textarea>
            <button type="submit" className="px-8 py-4 bg-[#91e0ed] text-[#00375e] hover:bg-[#80d3e1] rounded-full text-lg font-semibold transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MidSections;
