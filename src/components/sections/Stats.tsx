"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

function StatCard({ value, label, index }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        scale: 0.5,
        rotation: -15,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
      });

      // Number counter animation
      const numericValue = parseInt(value.replace(/\D/g, ""));
      if (!isNaN(numericValue) && numericValue > 0) {
        // Store the prefix (like ₹) and suffix (like L)
        const prefix = value.match(/^[^\d]*/)?.[0] || "";
        const suffix = value.match(/[^\d]*$/)?.[0] || "";
        
        gsap.to(valueRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
          textContent: numericValue,
          duration: 2,
          delay: index * 0.1 + 0.5,
          snap: { textContent: 1 },
          ease: "power1.out",
          onUpdate: function () {
            if (valueRef.current) {
              const currentValue = Math.ceil(
                parseFloat(valueRef.current.textContent || "0")
              );
              valueRef.current.textContent = prefix + currentValue + suffix;
            }
          },
        });
      }

      // Hover animation
      const card = cardRef.current;
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.1,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    return () => ctx.revert();
  }, [value, index]);

  return (
    <div
      ref={cardRef}
      className="text-center p-8 rounded-2xl glass-card-dark cursor-pointer relative overflow-hidden group neon-border-purple"
    >
      {/* Holographic shimmer effect on hover */}
      <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <h3
        ref={valueRef}
        className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 relative z-10"
      >
        {value}
      </h3>
      <p className="text-gray-400 text-lg relative z-10 neon-text-purple">{label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const stats = [
    { value: "₹45L", label: "Seed Funding" },
    { value: "14", label: "Days Hackathon" },
    { value: "7", label: "Innovation Tracks" },
    { value: "3", label: "Prototype Evaluations" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(descRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Event Highlights
          </h2>
          <p
            ref={descRef}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A transformative initiative merging AI, Green Technology, and Entrepreneurship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
