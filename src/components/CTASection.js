'use client'
import { motion } from "framer-motion";
import Link from "next/link";

function CTASection() {
  return (
    <section className="relative bg-[url('https://img.freepik.com/premium-vector/modern-city-skyline-background_77417-791.jpg?semt=ais_hybrid')] bg-fixed bg-contain py-20 text-white text-center">
      {/* <div className="absolute inset-0 bg-black opacity-10 z-0"></div> */}
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5}}
      className="max-w-screen-xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-semibold text-blue-950 mb-4">
          Need More Guidance?
        </h2>
        <p className="text-[#1b2a36de] text-lg mb-6">
          Discover more resources or get in touch with our experts for
          personalized support.
        </p>
        <div className="flex justify-center gap-6">
          {/* Contact Us Button */}
          {/* <Link
              href="/contact" // Link to the Contact Page
              className="px-6 py-3 bg-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow-md hover:bg-[#6dc2d6] transition-all"
            >
              Contact Us
            </Link> */}
          <Link
            href="/contact" // Link to the Contact Page
            className="px-6 py-3 bg-[#1b2a36] text-[#91e0ed] font-semibold rounded-lg shadow-md hover:scale-95 duration-200 hover:bg-white hover:text-[#1b2a36] transition-transform"
          >
            Contact Us
          </Link>
          {/* Learn More Button */}
          <Link
            href="/resources" // Link to the Resources page or any other section
            className="px-6 py-3 border-2 border-[#1b2a36] text-[#1b2a36] font-semibold rounded-lg shadow-md hover:scale-95 duration-200 hover:text-[#91e0ed] hover:bg-[#1b2a36] transition-all"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CTASection;
