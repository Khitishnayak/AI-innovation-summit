"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRocket, FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: FaTrophy,
    title: "₹45L Seed Funding",
    description:
      "Grand prize to transform your AI prototype into a startup reality.",
  },
  {
    icon: FaTrophy,
    title: "Edu-Revolution Benefits",
    description:
      "Course exemption, grade revision, and consideration as major capstone project under degree curriculum.",
  },
  {
    icon: FaUsers,
    title: "Industry Mentorship",
    description:
      "Direct guidance from CTO of Microsoft for Startups and CEO of SMG Electric Scooters during mentorship dialogues.",
  },
  {
    icon: FaLightbulb,
    title: "Startup Incubation",
    description:
      "Dedicated workspace, copyright assistance, and patent support for original innovations with full university backing.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Card animations with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: (index) => (index % 2 === 0 ? -10 : 10),
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        });

        // Hover animations
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -15,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
          >
            Rewards & Recognition
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Unprecedented opportunities for aspiring innovators to transform ideas into reality
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl glass-card-dark cursor-pointer group relative overflow-hidden ${
                index % 4 === 0 ? 'neon-border-purple' : 
                index % 4 === 1 ? 'neon-border-blue' : 
                index % 4 === 2 ? 'neon-border-pink' : 
                'neon-border-cyan'
              }`}
            >
              {/* Iridescent shimmer on hover */}
              <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <feature.icon className="text-6xl text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
