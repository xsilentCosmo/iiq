'use client'
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Portfolio() {
    const scrollRef = useRef(null);

    // Infinite scroll effect
    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            const scrollSpeed = 1; // Adjust scroll speed here
            let scrollAmount = 0;

            const autoScroll = () => {
                scrollAmount += scrollSpeed;
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0; // Reset to start for infinite scroll
                }
                scrollContainer.scrollLeft = scrollAmount;
                requestAnimationFrame(autoScroll);
            };

            const cloneItems = () => {
                const items = [...scrollContainer.children];
                items.forEach((item) => {
                    const clone = item.cloneNode(true);
                    scrollContainer.appendChild(clone);
                });
            };

            // Clone items to enable seamless infinite scrolling
            cloneItems();
            autoScroll();
        }
    }, []);

    return (
        <section className="py-16 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <motion.h2 
                    initial={{scale:0}}
                    whileInView={{scale:1}}
                    transition={{duration:0.3}}
                     className="text-3xl font-semibold mb-3">Our Incubated Ventures</motion.h2>
                    <motion.p
                    initial={{y:50}}
                    whileInView={{y:0}}
                    className="text-md text-gray-300">
                        Discover the forward-thinking companies we’ve nurtured to shape a brighter future.
                    </motion.p>
                </div>

                {/* Portfolio Row */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-hidden whitespace-nowrap hide-scrollbar relative"
                >
                    {/* Portfolio Item */}
                    {[
                        { img: "/images/logos/cyber_secube.jpg", name: "Cyber Secube" },
                        { img: "/images/logos/qualidezk.png", name: "Qualidezk" },
                        { img: "/images/logos/logiquotient.png", name: "LogiQuotient" },
                        { img: "/images/logos/quantquotient.png", name: "QuantQuotient" },
                        { img: "/images/logos/pavan_media.png", name: "Pavan Media" },
                        { img: "/images/logos/gmacc.png", name: "GMACC Academy" },
                        { img: "/images/logos/iiq_digital.png", name: "IIQ Digital" },
                    ].map((company, index) => (
                        <div
                            key={index}
                            className="min-w-[200px] max-w-[200px] group bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                        >
                            <img
                                src={company.img}
                                alt={company.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Button to Portfolio Page */}
                <div className="mt-12 text-center">
                    <Link
                        href="/portfolio"
                        className="px-4 py-3 bg-gradient-to-r from-[#6dc2d6] to-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow hover:from-[#91e0ed] hover:to-[#6dc2d6] transition-all"
                    >
                        View All Companies
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
