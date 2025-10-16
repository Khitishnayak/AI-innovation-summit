"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const speakers = [
  {
    name: "Mr. Vivek Sridhar",
    title: "CTO – Microsoft for Startups",
    subtitle: "AI Advisor, Investor & Founder",
    description:
      "Seasoned technophile and Open Source contributor with 18+ years of experience. Previously Developer Advocate at DigitalOcean, Co-Founder at NoodleNext Technology, and Software Developer at IBM Rational.",
    expertise: ["AI & Cloud Computing", "Startup Mentorship", "Open Source", "DevOps"],
    achievements: "Published 3 papers in international forums and mentored numerous global startups",
    image: "/images/speakers/viveksridhar.jpeg",
    linkedin: "https://www.linkedin.com/in/vivsridh/",
  },
  {
    name: "Mr. Saurav Mittal",
    title: "CEO",
    subtitle: "Investor & Entrepreneur",
    description:
      "Visionary leader transforming urban transportation with a mission to reduce global CO2 footprint. Making high-tech electric scooters accessible to masses, paving way for sustainable future.",
    expertise: ["Green Technology", "EV Innovation", "Sustainable Mobility", "Entrepreneurship"],
    achievements: "A Top Business Leader in EV Sector",
    image: "/images/speakers/souravmittal.jpeg",
    // linkedin: "#",
  },
];

export default function Speakers() {
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
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Speaker cards animation
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
          rotation: (index) => (index === 0 ? -10 : 10),
          duration: 1,
          stagger: 0.3,
          ease: "back.out(1.7)",
        });

        // Hover effects
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;

          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -20,
              scale: 1.02,
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
      id="speakers"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Distinguished Guests
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Learn from industry leaders shaping the future of AI and Green Technology
        </p>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl glass-card-dark cursor-pointer group overflow-hidden ${
                index === 0 ? 'neon-border-blue' : 'neon-border-pink'
              }`}
            >
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              
              {/* Iridescent shimmer on hover */}
              <div className="absolute inset-0 iridescent-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Speaker Photo */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-500 transition-all duration-300">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                  {speaker.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-1 text-center text-sm sm:text-base">
                  {speaker.title}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 text-center">
                  {speaker.subtitle}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6 text-center text-sm sm:text-base">
                  {speaker.description}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {speaker.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-xs sm:text-sm italic text-center">
                    {speaker.achievements}
                  </p>
                </div>

                {/* Social links placeholder */}
                {speaker.linkedin && (
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <FaLinkedin className="text-blue-400 text-xl" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">
            🎤 AI Talk Show & Interactive Q&A Session
          </p>
          <p className="text-purple-400 font-semibold">
            28th October 2025 | Official Launch of The Great LPU&apos;s Hackathon
          </p>
        </div>
      </div>
    </section>
  );
}
