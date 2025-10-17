"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaCheckCircle, FaClipboardList } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    phase: "Phase 1 Evaluation",
    date: "29 October 2025",
    icon: "📊",
    color: "purple",
    requirements: [
      "Startup must have the PPT ready",
      "Basic model of the solution must be presented",
      "Clear problem statement understanding",
      "Initial solution approach documentation",
    ],
  },
  {
    phase: "Phase 2 Evaluation",
    date: "4 November 2025",
    icon: "🔧",
    color: "blue",
    requirements: [
      "Startup must have the detailed model ready",
      "Solution must align with the judgment criteria (Scalability, Innovation, Merchantibility, Economic Value, Technicality)",
      "Detailed report about the functioning of the model solution",
      "Technical architecture and implementation plan",
    ],
  },
  {
    phase: "Phase 3 Evaluation",
    date: "11 November 2025",
    icon: "🚀",
    color: "pink",
    requirements: [
      "Startup must have developed Prototype/MVP/Live Application",
      "Live demonstration to illustrate the solution",
      "Detailed report regarding the cost of prototype",
      "Registration process documentation",
      "Business model and go-to-market strategy",
    ],
  },
];

export default function Rulebook() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const phasesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Phases animation
      if (phasesRef.current) {
        const phaseCards = phasesRef.current.children;
        gsap.from(phaseCards, {
          scrollTrigger: {
            trigger: phasesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return {
          border: "neon-border-purple",
          gradient: "from-purple-500/20 to-purple-600/20",
          text: "text-purple-400",
        };
      case "blue":
        return {
          border: "neon-border-blue",
          gradient: "from-blue-500/20 to-blue-600/20",
          text: "text-blue-400",
        };
      case "pink":
        return {
          border: "neon-border-pink",
          gradient: "from-pink-500/20 to-pink-600/20",
          text: "text-pink-400",
        };
      default:
        return {
          border: "neon-border-purple",
          gradient: "from-purple-500/20 to-purple-600/20",
          text: "text-purple-400",
        };
    }
  };

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
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaClipboardList className="text-5xl text-purple-400" />
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
            >
              Rulebook
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Official guidelines and evaluation phases for The Great LPU&apos;s Ideathon 2025
          </p>
        </div>

        {/* Evaluation Timeline */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative p-8 rounded-3xl glass-card-dark neon-border-purple overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                Evaluation Timeline
              </h2>
              <p className="text-gray-300 text-lg">
                The ideathon consists of <span className="text-purple-400 font-semibold">three evaluation phases</span> spread across <span className="text-purple-400 font-semibold">14 days</span>. Each phase builds upon the previous one, taking your solution from concept to working prototype.
              </p>
            </div>
          </div>
        </div>

        {/* Phase Cards */}
        <div ref={phasesRef} className="space-y-8 max-w-5xl mx-auto mb-16">
          {phases.map((phase, index) => {
            const colors = getColorClasses(phase.color);
            return (
              <div
                key={index}
                className={`relative p-8 rounded-3xl glass-card-dark ${colors.border} overflow-hidden group`}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}`}></div>

                <div className="relative z-10">
                  {/* Phase Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="text-6xl">{phase.icon}</div>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>
                          {phase.phase}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">📅 {phase.date}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-white/10 border ${colors.text} border-current`}>
                      <span className="font-semibold">Prototype {index + 1}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-lg mb-4">Requirements:</h4>
                    {phase.requirements.map((req, reqIndex) => (
                      <div
                        key={reqIndex}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                      >
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <p className="text-gray-300 leading-relaxed">{req}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notes */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative p-8 rounded-3xl glass-card-dark neon-border-blue overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                📌 Important Guidelines
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>All submissions must adhere to the judgment criteria: <strong className="text-white">Scalability, Innovation, Merchantibility, Economic Value, and Technicality</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Teams must be present for all three evaluation phases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Solutions must address one of the seven innovation tracks related to <strong className="text-white">Green Revolution and AI</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Final prototype must be a working MVP or live application ready for demonstration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>Interdisciplinary teams receive bonus points during evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/judgment-criteria"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Judgment Criteria
            </Link>
            <Link
              href="/"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
