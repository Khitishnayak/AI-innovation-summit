"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  // Macbease event booking link
  const [macbeaseUrl] = useState("https://tinyurl.com/MacbeaseTheGreatLPUIdeathon");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Logo animation
      gsap.from(logoRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      // Hover effect
      if (logoRef.current) {
        const logo = logoRef.current;
        logo.addEventListener("mouseenter", () => {
          gsap.to(logo, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        logo.addEventListener("mouseleave", () => {
          gsap.to(logo, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3
          ref={titleRef}
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-400"
        >
          Ticket Booking Platform
        </h3>

        <div className="flex justify-center">
          <a
            ref={logoRef}
            href={macbeaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group block"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 rounded-2xl"></div>

            <div className="relative z-10 flex items-center justify-center min-w-[200px]">
              <Image
                src="/images/partners/Macbease_White-01.png"
                alt="Macbease - Ticket Booking Platform"
                width={200}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </a>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Powered by Macbease - Your Trusted Ticket Booking Platform
          <br />
          <span className="text-xs text-gray-600 mt-2 inline-block">Click to visit Macbease</span>
        </p>
      </div>
    </section>
  );
}
