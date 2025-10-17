"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlus, FaMinus } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemRef.current, {
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, [index]);

  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        gsap.to(answerRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(answerRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={itemRef}
      className="border border-white/10 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left group"
      >
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
          {question}
        </h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <FaMinus className="text-purple-400 text-xl transition-transform duration-300 rotate-180" />
          ) : (
            <FaPlus className="text-purple-400 text-xl transition-transform duration-300" />
          )}
        </div>
      </button>
      <div
        ref={answerRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const faqs = [
    {
      question: "Who can participate in The Great LPU's Hackathon?",
      answer:
        "All LPU students from any department can participate. Teams can be formed from the same department or different departments. Interdisciplinary teams receive bonus points!",
    },
    {
      question: "What is the prize for winning the hackathon?",
      answer:
        "The winning team will receive up to ₹45L seed funding to support prototype development and potential startup incubation. This is a significant opportunity to transform your idea into a real business.",
    },
    {
      question: "What are the Edu-Revolution Benefits?",
      answer:
        "Winners and top performers can receive course exemption, grade revision, and their project may be considered as a Major Capstone or Major Project under the degree curriculum. This helps balance innovation with academic requirements.",
    },
    {
      question: "How many prototype evaluations are there?",
      answer:
        "There are three prototype evaluations: Prototype 1 on 29th October, Prototype 2 on 4th November, and Prototype 3 (Final) on 11th November 2025. Each evaluation helps teams iterate and improve.",
    },
    {
      question: "Will we get mentorship from the industry experts?",
      answer:
        "Yes! The top 10 teams will have direct interaction with Mr. Vivek Sridhar (CTO – Microsoft for Startups) and Mr. Saurav Mittal (CEO – SMG Electric Scooters) during the Mentorship & Investment Dialogue on 29th October.",
    },
    {
      question: "What support does the university provide?",
      answer:
        "LPU provides dedicated on-campus workspace for project development, copyright and patent assistance for original innovations, and startup incubation and mentorship for winning teams. Full support from ideation to market launch!",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
