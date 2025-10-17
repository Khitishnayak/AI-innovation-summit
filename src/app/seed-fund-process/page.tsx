"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaCheckCircle, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "Step 1",
    title: "Issue of Investment Letter",
    description: "Investment letter issued to the potential startup",
    icon: "📝",
    color: "purple",
  },
  {
    step: "Step 2",
    title: "Initial Communication",
    description: "3 calls and 3 emails to startup for further details and documentation",
    icon: "📞",
    color: "blue",
  },
  {
    step: "Step 3",
    title: "One-to-One Meeting",
    description: "After the event, detailed legal and technical analysis of the startup in a one-to-one meeting",
    icon: "🤝",
    color: "pink",
  },
  {
    step: "Step 4",
    title: "Comprehensive Analysis",
    description: "After legal compliance is satisfactory, business viability and commercial feasibility analysis",
    icon: "📊",
    color: "cyan",
  },
  {
    step: "Step 5",
    title: "Seed Fund Deployment",
    description: "After all analysis, seed fund is provided to startup for prototyping, patent rights, pilot testing, and commercialization process begins",
    icon: "💰",
    color: "green",
  },
];

export default function SeedFundProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Steps animation
      if (stepsRef.current) {
        const stepCards = stepsRef.current.children;
        gsap.from(stepCards, {
          scrollTrigger: {
            trigger: stepsRef.current,
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
          bg: "bg-purple-500/20",
        };
      case "blue":
        return {
          border: "neon-border-blue",
          gradient: "from-blue-500/20 to-blue-600/20",
          text: "text-blue-400",
          bg: "bg-blue-500/20",
        };
      case "pink":
        return {
          border: "neon-border-pink",
          gradient: "from-pink-500/20 to-pink-600/20",
          text: "text-pink-400",
          bg: "bg-pink-500/20",
        };
      case "cyan":
        return {
          border: "neon-border-cyan",
          gradient: "from-cyan-500/20 to-cyan-600/20",
          text: "text-cyan-400",
          bg: "bg-cyan-500/20",
        };
      case "green":
        return {
          border: "neon-border-purple",
          gradient: "from-green-500/20 to-green-600/20",
          text: "text-green-400",
          bg: "bg-green-500/20",
        };
      default:
        return {
          border: "neon-border-purple",
          gradient: "from-purple-500/20 to-purple-600/20",
          text: "text-purple-400",
          bg: "bg-purple-500/20",
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
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/20 rounded-full filter blur-3xl"></div>

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
            <FaMoneyBillWave className="text-5xl text-green-400" />
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-purple-400 to-blue-400"
            >
              Seed Fund Process
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Complete step-by-step process to avail ₹45L seed funding for your startup
          </p>
        </div>

        {/* Overview Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative p-8 rounded-3xl glass-card-dark neon-border-purple overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-green-500/10"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                Process Overview
              </h2>
              <p className="text-gray-300 text-lg">
                The seed fund process consists of <span className="text-purple-400 font-semibold">5 comprehensive steps</span> designed to ensure thorough evaluation and successful deployment of funds. From initial letter issuance to final commercialization, each step is crucial for building a sustainable startup.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Timeline */}
        <div ref={stepsRef} className="max-w-5xl mx-auto mb-16 space-y-6">
          {steps.map((item, index) => {
            const colors = getColorClasses(item.color);
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent hidden md:block"></div>
                )}

                <div
                  className={`relative p-8 rounded-3xl glass-card-dark ${colors.border} overflow-hidden group`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}`}></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon and Step Number */}
                      <div className="flex md:flex-col items-center md:items-start gap-4">
                        <div className="text-6xl">{item.icon}</div>
                        <div className={`px-4 py-2 rounded-full ${colors.bg} border ${colors.text} border-current`}>
                          <span className="font-bold text-sm">{item.step}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-2xl md:text-3xl font-bold ${colors.text} mb-3`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow for non-last items */}
                      {!isLast && (
                        <div className="hidden md:flex items-center">
                          <FaArrowRight className={`${colors.text} text-2xl`} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative p-8 rounded-3xl glass-card-dark neon-border-green overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                💡 Key Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Comprehensive Evaluation</h4>
                    <p className="text-gray-400">Legal, technical, and commercial feasibility analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Multiple Touchpoints</h4>
                    <p className="text-gray-400">Regular communication through calls and emails</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dedicated Support</h4>
                    <p className="text-gray-400">Funding for prototyping, patents, and pilot testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Commercialization Path</h4>
                    <p className="text-gray-400">Complete support from prototype to market launch</p>
                  </div>
                </div>
              </div>
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
              href="/rulebook"
              className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
            >
              View Rulebook
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
