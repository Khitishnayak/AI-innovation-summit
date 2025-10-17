"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const criteria = [
  {
    title: "SCALABILITY",
    description: "Ability of the solution to grow and handle increased demand efficiently across different markets and user bases.",
    icon: "📈",
  },
  {
    title: "INNOVATION",
    description: "Originality and creativity of the solution in addressing the problem with novel approaches and unique perspectives.",
    icon: "💡",
  },
  {
    title: "MERCHANTIBILITY",
    description: "Market viability and the potential to attract customers, demonstrating clear product-market fit.",
    icon: "🛒",
  },
  {
    title: "ECONOMIC VALUE",
    description: "Financial sustainability, revenue potential, and overall economic impact of the proposed solution.",
    icon: "💰",
  },
  {
    title: "TECHNICALITY",
    description: "Technical feasibility, implementation quality, and robustness of the technology stack used.",
    icon: "⚙️",
  },
];

const problemStatements = [
  "Road Safety on Indian Roads – AI-powered systems to minimize accidents and improve driving behavior",
  "Charging Stations Infrastructure – Smart optimization and expansion of EV charging networks",
  "Gaming Solutions for Road Safety Promotion – Gamified solutions to promote safer road practices",
  "Simulation Solutions for Driving EV-2W – Intelligent simulators for electric two-wheeler driving experiences",
  "Battery Swapping Stations for Two-Wheelers – Efficient AI-driven battery swapping frameworks",
  "Traffic Management on Indian Roads – Predictive AI models for congestion control and optimized routing",
  "Parking Solutions at Charging Stations (2/3/4 Wheelers) – Smart parking management at EV hubs",
];

const cseDomains = [
  { name: "Artificial Intelligence & Machine Learning", icon: "🤖" },
  { name: "Computer Vision & Image Processing", icon: "👁️" },
  { name: "Internet of Things (IoT) & Sensors", icon: "🌐" },
  { name: "Data Analytics & Predictive Modeling", icon: "�" },
  { name: "Mobile Application Development", icon: "📱" },
  { name: "Game Development & Gamification", icon: "🎮" },
  { name: "Cloud Computing & Edge Computing", icon: "☁️" },
  { name: "Simulation & Virtual Reality", icon: "🥽" },
  { name: "Geographic Information Systems (GIS)", icon: "�️" },
  { name: "Network & Communication Systems", icon: "📡" },
];

export default function JudgmentCriteria() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const domainsRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards animation
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
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        });
      }

      // Theme animation
      gsap.from(themeRef.current, {
        scrollTrigger: {
          trigger: themeRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Domains animation
      if (domainsRef.current) {
        const domains = domainsRef.current.children;
        gsap.from(domains, {
          scrollTrigger: {
            trigger: domainsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      }

      // Note animation
      gsap.from(noteRef.current, {
        scrollTrigger: {
          trigger: noteRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 relative overflow-hidden"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Judgment Criteria
        </h1>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Each prototype will be evaluated based on the following five key criteria
        </p>

        {/* Criteria Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {criteria.map((item, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-3xl glass-card-dark overflow-hidden group ${
                index % 3 === 0
                  ? "neon-border-purple"
                  : index % 3 === 1
                  ? "neon-border-blue"
                  : "neon-border-pink"
              }`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Theme Section */}
        <div ref={themeRef} className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            🎯 Project Theme
          </h2>
          <div className="relative p-8 rounded-3xl glass-card-dark neon-border-blue overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                Empowering the Green Revolution through AI
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Choose from the following innovation tracks focused on sustainable transportation and AI-powered solutions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problemStatements.map((statement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {statement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CSE Domains Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            💻 Relevant CSE Domains & Technologies
          </h2>
          <p className="text-center text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            Leverage these computer science domains to build innovative solutions for EV and road safety challenges
          </p>
          
          <div ref={domainsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cseDomains.map((domain, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl glass-card-dark overflow-hidden group text-center ${
                  index % 4 === 0
                    ? "neon-border-purple"
                    : index % 4 === 1
                    ? "neon-border-blue"
                    : index % 4 === 2
                    ? "neon-border-pink"
                    : "neon-border-cyan"
                }`}
              >
                <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{domain.icon}</div>
                  <p className="text-white text-sm font-semibold leading-tight">{domain.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div
          ref={noteRef}
          className="max-w-4xl mx-auto relative p-8 rounded-3xl glass-card-dark neon-border-purple overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <FaCheckCircle className="text-green-400 text-3xl" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Eligibility & Award</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                The teams (startups) fulfilling these criteria will be <span className="text-purple-400 font-semibold">eligible for the final round</span>.
              </p>
              
              <div className="p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30">
                <p className="text-lg leading-relaxed mb-4">
                  The <span className="text-yellow-400 font-bold">best startup from the final round</span> will be awarded with:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span><strong className="text-white">Letter of Intent (LOI)</strong> for investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span><strong className="text-white">Official Physical Meeting</strong> at Delhi office within 30 days of LOI issuance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
