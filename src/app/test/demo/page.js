'use client'/* 
import './loco.css' */
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollSection = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Set up GSAP for animation
    gsap.set('li > span', { transformOrigin: '0 50%' });
    gsap.set('li:not(:first-of-type) span', { opacity: 0.2, scale: 0.8 });

    const tl = gsap.timeline()
      .to('li:not(:first-of-type) span', { opacity: 1, scale: 1, stagger: 0.5 })
      .to('li:not(:last-of-type) span', { opacity: 0.2, scale: 0.8, stagger: 0.5 }, 0);

    // Set up ScrollTrigger to pin the rotating list section
    ScrollTrigger.create({
      trigger: '.scroll-trigger', // Pin this section when h1 enters the viewport
      start: 'center center', // Start when h1 reaches the center
      endTrigger: 'li:last-of-type', // End when the last list item is in view
      end: 'center center', // End the trigger when the last item reaches the center
      pin: true, // Pin the section while it's in view
      animation: tl, // The animation we defined above
      scrub: true, // Synchronize the animation with scroll position
      //markers: true, // Enable markers for debugging
    });

  }, []);

  return (
    <div>
      <div className="cols2 flex pl-5 min-h-screen">
        <h1 className="scroll-trigger flex-grow-0 self-start font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase leading-none">
          Services
        </h1>
        
        <ul className="list-none pl-0 flex-grow-0 self-start font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase leading-none">
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Akapowl</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Jack</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Cassie</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Rodrigo</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Shaun</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Mitchel</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Craig</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">SHRUG</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Carl</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Jonathan</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Sahil</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Zach</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Blake</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">Diaco</span>
          </li>
          <li className="scroll-snap-align-center pl-[0.2em]">
            <span className="inline-block">DIPSCOM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollSection;
