"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated background elements
      gsap.to(bg1Ref.current, {
        x: 100,
        y: -100,
        rotation: 45,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(bg2Ref.current, {
        x: -100,
        y: 100,
        rotation: -45,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Main content animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        scale: 0.8,
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          buttonsRef.current?.children || [],
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.4"
        )
        .from(
          scrollRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.8,
          },
          "-=0.3"
        );

      // Scroll indicator animation
      const scrollDot = scrollRef.current?.querySelector(".scroll-dot");
      if (scrollDot) {
        gsap.to(scrollDot, {
          y: 10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        opacity: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bg1Ref}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"
        ></div>
        <div
          ref={bg2Ref}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl"
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
          >
            THE GREAT LPU&apos;s IDEATHON          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering the Green Revolution through AI
          </p>
          
          <p className="text-lg md:text-xl text-purple-400 mb-8 font-semibold">
              27th October - 11th November
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <a
              href="https://macbease.com/app/event/68f0739826b6d191febb6d98"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base px-4">
            <div className="px-3 sm:px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 whitespace-nowrap">
              💰 ₹45L Funding
            </div>
            <div className="px-3 sm:px-4 py-2 bg-blue-900/30 rounded-full border border-blue-500/30 whitespace-nowrap">
              🎓 Course Exemption
            </div>
            <div className="px-3 sm:px-4 py-2 bg-green-900/30 rounded-full border border-green-500/30 whitespace-nowrap">
              🚀 Incubation
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="scroll-dot w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
