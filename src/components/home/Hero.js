'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#00375e] to-[#91e0ed] text-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
        {/* Right Column - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Empower Your <br/> Success with <br/><span className="text-[#91e0ed]">integral iQ</span>
            <span className="text-3xl md:text-4xl lg:text-5xl">
              <Typewriter
                words={[' Incubator', " LMS"]}
                loop={true}
                typeSpeed={80}
                deleteSpeed={60}

                cursor={true}
              />
            </span>
          </h1>
          {/* <h2 className="text-3xl lg:text-4xl font-semibold mb-6">

            Business


          </h2> */}

          <p className="md:text-lg lg:text-xl mb-8">
            We incubate innovative startups and help them scale with advanced technologies, mentorship, and a thriving community.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href={'/contact'} className="px-8 py-4 bg-[#91e0ed] text-[#00375e] hover:bg-[#d8f2f7] hover:scale-110 rounded-full md:text-lg font-semibold transition">
              Get Registered
            </Link>
            <button className="ml-4 px-8 py-4 bg-white text-[#00375e] hover:bg-[#d9f7fb] hover:translate-x-5 rounded-full md:text-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Left Column */}

        <motion.div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <img
            src="/hero.png"
            alt="Hero Animation"
            className="w-full sm:w-full md:w-full lg:max-w-full max-w-lg"
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;