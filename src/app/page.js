'use client'
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VisionMission from "@/components/home/VisionMission";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import ServicesSection from "@/components/home/Services";
import ServicesMobile from "@/components/home/ServicesMobile";
import ConsultingServices from "@/components/home/Consulting";
import CTASection from "@/components/CTASection";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/home/Gallery";
import Portfolio from "@/components/home/portfolio";
import CampaignSection from "@/components/home/Campaign";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <CampaignSection />
      <Portfolio />
      <WhatWeOffer />
      <VisionMission />

      {isMobile ? <ServicesMobile /> : <ServicesSection />}

      <ConsultingServices />
      <CTASection />
      <Gallery />
      <Footer />
    </div>
  );
}
