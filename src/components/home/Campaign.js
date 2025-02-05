'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const carouselImages = [
  '/images/ads/Ad 001.jpeg',
  '/images/ads/Ad 002.png',
  '/images/ads/Ad 003.jpeg',
  '/images/ads/Ad 004.jpeg',
  '/images/ads/Ad 005.jpeg',
  '/images/ads/Ad 006.jpeg',
  '/images/ads/Ad 007.jpg',
  '/images/ads/Ad 008.jpeg',
  '/images/ads/Ad 009.jpg',
  '/images/ads/Ad 010.png',
  '/images/ads/Ad 011.png',
  '/images/ads/Ad 012.jpg',
  '/images/ads/Ad 013.png',
  '/images/ads/Ad 014.png',
  '/images/ads/Ad 015.png',
  '/images/ads/Ad 016.png',
  '/images/ads/Ad 017.jpg',
];

export default function CampaignSection() {
  return (
    <section className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Ongoing <span className="text-[#91e0ed]">Campaigns</span></h2>
        <p className="md:text-lg text-gray-300 mb-6">Explore our ongoing campaigns below.</p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation]}
          effect="coverflow"
          spaceBetween={10}
          slidesPerView={1.5}
          centeredSlides={true}
          coverflowEffect={{
            rotate: -360,
            stretch: 0,
            depth: 95,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh]"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index} className="relative flex items-center justify-center h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Campaign ${index + 1}`}
                  width={400}  // Ensuring consistent width
                  height={300}  // Adjusting for desktop
                  className="rounded-md shadow-lg w-full h-full object-fill"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* View All Campaigns Button */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="px-4 py-3 bg-gradient-to-r from-[#6dc2d6] to-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow hover:from-[#91e0ed] hover:to-[#6dc2d6] transition-all"
        >
          View All Campaigns
        </Link>
      </div>
    </section>
  );
}
