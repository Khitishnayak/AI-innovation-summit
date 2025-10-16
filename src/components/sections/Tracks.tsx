"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaRoad,
  FaChargingStation,
  FaGamepad,
  FaCar,
  FaBatteryFull,
  FaTrafficLight,
  FaParking,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  {
    icon: FaRoad,
    title: "Road Safety on Indian Roads",
    description:
      "AI-powered systems to minimize accidents and improve driving behavior through predictive analytics and real-time monitoring.",
    keywords: ["Accident Prevention", "Driver Behavior", "Smart Alerts"],
  },
  {
    icon: FaChargingStation,
    title: "Charging Stations Infrastructure",
    description:
      "Smart optimization and expansion of EV charging networks using AI for demand prediction and efficient resource allocation.",
    keywords: ["Network Optimization", "Smart Grid", "Demand Forecasting"],
  },
  {
    icon: FaGamepad,
    title: "Gaming Solutions for Road Safety",
    description:
      "Gamified solutions to promote safer road practices through interactive learning and behavioral training.",
    keywords: ["Gamification", "Behavioral Training", "Interactive Learning"],
  },
  {
    icon: FaCar,
    title: "Simulation Solutions for EV-2W",
    description:
      "Intelligent simulators for electric two-wheeler driving experiences with realistic physics and AI-driven scenarios.",
    keywords: ["Virtual Training", "Physics Engine", "AI Scenarios"],
  },
  {
    icon: FaBatteryFull,
    title: "Battery Swapping Stations",
    description:
      "Efficient AI-driven battery swapping frameworks for two-wheelers with automated management and optimization.",
    keywords: ["Automation", "Resource Management", "Quick Swap"],
  },
  {
    icon: FaTrafficLight,
    title: "Traffic Management Systems",
    description:
      "Predictive AI models for congestion control and optimized routing on Indian roads using real-time data analysis.",
    keywords: ["Congestion Control", "Route Optimization", "Real-time Analytics"],
  },
  {
    icon: FaParking,
    title: "Smart Parking Solutions",
    description:
      "Smart parking management at EV charging stations for 2/3/4 wheelers with automated space allocation.",
    keywords: ["Space Management", "Automated Allocation", "Multi-vehicle Support"],
  },
];

export default function Tracks() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Cards stagger animation
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
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });

        // Hover effects
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;

          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -10,
              scale: 1.03,
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
      id="tracks"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f680_1px,transparent_1px),linear-gradient(to_bottom,#3b82f680_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Innovation Tracks
        </h2>
        <p className="text-center text-gray-400 text-lg mb-4 max-w-3xl mx-auto">
          Seven cutting-edge problem statements focusing on Green Technology and Electric Vehicle revolution
        </p>
        <p className="text-center text-purple-400 font-semibold mb-16">
          Theme: Empowering the Green Revolution through AI
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`relative p-4 sm:p-6 rounded-2xl glass-card-dark cursor-pointer group overflow-hidden ${
                index % 3 === 0 ? 'neon-border-purple' : index % 3 === 1 ? 'neon-border-blue' : 'neon-border-pink'
              }`}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              
              {/* Iridescent shimmer on hover */}
              <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <track.icon className="text-2xl sm:text-3xl text-white" />
                </div>

                {/* Track number */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs sm:text-sm">
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 pr-8">
                  {track.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {track.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {track.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/30">
            <p className="text-lg text-white font-semibold mb-2">
              🌱 Interdisciplinary Collaboration Encouraged
            </p>
            <p className="text-gray-400 mb-4">
              Teams from multiple departments earn bonus points. Focus on AI-driven solutions for sustainable and eco-friendly mobility.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400">
                ♻️ Carbon Reduction
              </span>
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400">
                🔋 Renewable Energy
              </span>
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400">
                🚗 Smart Mobility
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
