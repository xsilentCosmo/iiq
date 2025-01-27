import Header from "@/components/layout/Navbar";
import Image from "next/image";
import HomePage from "@/pages/Home";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VisionMission from "@/components/home/VisionMission";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import Services from "@/components/home/Services";
import ConsultingServices from "@/components/home/Consulting";
import CTASection from "@/components/CTASection";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/home/Gallery";
import Portfolio from "@/components/home/portfolio";
import ServicesSection from "@/components/home/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Portfolio/>
      <WhatWeOffer />
      <VisionMission />
      <ServicesSection/>
      <ConsultingServices />
      <CTASection />
      <Gallery/>
    </div>
  );
}
