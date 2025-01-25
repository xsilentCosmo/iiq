import About from '@/components/About'
import ConsultingServices from '@/components/home/Consulting'
import ContactPage from '@/components/Contact'
import CTASection from '@/components/CTASection'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import MidSections from '@/components/MidSections'
import Services from '@/components/home/Services'
import VisionMission from '@/components/home/VisionMission'
import WhatWeOffer from '@/components/home/WhatWeOffer'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

function HomePage() {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'var(--cursor-color)'
                }}
                outerStyle={{
                    border: '3px solid var(--cursor-color)'
                }}
            />
            
            
            {/* <MidSections/> */}
            <Footer/>
            {/* <About /> */}
        </div>
    )
}

export default HomePage