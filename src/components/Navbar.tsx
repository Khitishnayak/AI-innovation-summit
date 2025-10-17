"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Timeline", href: "#timeline" },
    { name: "Tracks", href: "#tracks" },
    { name: "Criteria", href: "/judgment-criteria", external: true },
    { name: "Rulebook", href: "/rulebook", external: true },
    { name: "Seed Fund", href: "/seed-fund-process", external: true },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    // Initial navbar animation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Navbar background change on scroll
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(20px)",
            duration: 0.3,
          });
        } else {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)",
            duration: 0.3,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.from(mobileMenuRef.current.children, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      }
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm sm:text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-300 hover:to-emerald-300 transition-all duration-300 truncate max-w-[180px] sm:max-w-none"
          >
            <span className="hidden sm:inline">THE GREAT LPU&apos;S</span>
            <span className="hidden sm:inline"> IDEATHON 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 flex-1 justify-center">
            {navItems.map((item, index) => (
              item.external ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group text-sm lg:text-base whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group text-sm lg:text-base whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
                        <a
              href="https://tinyurl.com/MacbeaseTheGreatLPUIdeathon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white relative w-10 h-10 flex items-center justify-center bg-green-600/20 rounded-lg border border-green-500/30 hover:bg-green-600/30 transition-all"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-6 h-0.5 bg-white shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute w-6 h-0.5 bg-white shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute w-6 h-0.5 bg-white shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            ref={mobileMenuRef} 
            className="md:hidden py-4 px-3 bg-black border-t border-green-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          >
            <div className="space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                item.external ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left py-3 px-4 text-white font-medium hover:bg-green-600/30 rounded-lg transition-all border border-green-500/20 hover:border-green-500 bg-green-900/10"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 px-4 text-white font-medium hover:bg-green-600/30 rounded-lg transition-all border border-green-500/20 hover:border-green-500 bg-green-900/10"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <a
                href="https://tinyurl.com/MacbeaseTheGreatLPUIdeathon"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 mt-3 rounded-full font-bold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 text-center shadow-lg shadow-green-500/50"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
