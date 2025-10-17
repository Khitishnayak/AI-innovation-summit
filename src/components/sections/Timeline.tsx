"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    date: "27th-28th October 2025",
    title: "Internal Hackathon Begins",
    description: "Teams initiate development of Prototype 1. Ideation and initial implementation phase.",
    type: "hackathon",
  },
  {
    date: "28th October 2025",
    title: "AI Innovation Summit - Day 1",
    description: "Inauguration & AI Talk Show with distinguished guests. Interactive Q&A with students. Official Launch of The Great LPU's Hackathon 2025.",
    type: "summit",
  },
  {
    date: "29th October 2025",
    title: "Prototype 1 Evaluation",
    description: "First prototype evaluation. Top 10 teams interact with guests during Mentorship & Investment Dialogue. Faculty Meet and Project Display.",
    type: "evaluation",
  },
  {
    date: "4th November 2025",
    title: "Prototype 2 Evaluation",
    description: "Second milestone evaluation showcasing improved prototypes with enhanced features and functionality.",
    type: "evaluation",
  },
  {
    date: "11 Nov 2025",
    title: "Final Evaluation",
    description: "Prototype 3 evaluation and final presentations. Winner announcement and ₹45L funding award ceremony.",
    type: "evaluation",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Timeline items animation
      if (timelineRef.current) {
        const items = timelineRef.current.children;

        gsap.from(items, {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: (index) => (index % 2 === 0 ? -100 : 100),
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Hover effects
        Array.from(items).forEach((item) => {
          const element = item as HTMLElement;

          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "summit":
        return "from-purple-500 to-pink-500";
      case "evaluation":
        return "from-blue-500 to-cyan-500";
      case "final":
        return "from-green-500 to-emerald-500";
      default:
        return "from-purple-500 to-blue-500";
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "summit":
        return "🎤 Summit";
      case "evaluation":
        return "📊 Evaluation";
      case "final":
        return "🏆 Final";
      default:
        return "💻 Hackathon";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f780_1px,transparent_1px),linear-gradient(to_bottom,#a855f780_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Event Timeline
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          A 14-day journey from ideation to innovation with three comprehensive prototype evaluations
        </p>

        <div ref={timelineRef} className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {timeline.map((event, index) => (
            <div
              key={index}
              className={`relative p-4 sm:p-6 md:p-8 rounded-2xl glass-card-dark cursor-pointer group ${
                index % 4 === 0 ? 'neon-border-purple' : 
                index % 4 === 1 ? 'neon-border-blue' : 
                index % 4 === 2 ? 'neon-border-pink' : 
                'neon-border-cyan'
              }`}
            >
              {/* Gradient indicator */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${getTypeColor(
                  event.type
                )} rounded-l-2xl`}
              ></div>

              <div className="ml-2 sm:ml-4">
                {/* Badge */}
                <div className="inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-300">
                  {getTypeBadge(event.type)}
                </div>

                {/* Date */}
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  {event.date}
                </p>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r ${getTypeColor(
                    event.type
                  )}`}
                >
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{event.description}</p>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(
                  event.type
                )} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30">
            <p className="text-lg text-white font-semibold mb-2">
              📅 Mark Your Calendar
            </p>
            <p className="text-gray-400">
              Complete timeline spans from 27th October to 11th November 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
