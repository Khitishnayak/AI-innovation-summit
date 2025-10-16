"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Placeholder images - replace with your actual images
  const images = [
    { id: 1, alt: "Project 1" },
    { id: 2, alt: "Project 2" },
    { id: 3, alt: "Project 3" },
    { id: 4, alt: "Project 4" },
    { id: 5, alt: "Project 5" },
    { id: 6, alt: "Project 6" },
    { id: 7, alt: "Project 7" },
    { id: 8, alt: "Project 8" },
  ];

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

      // Gallery grid animation
      if (gridRef.current) {
        const items = gridRef.current.children;
        
        gsap.from(items, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0,
          opacity: 0,
          rotation: 180,
          duration: 0.8,
          stagger: {
            amount: 1,
            from: "random",
          },
          ease: "back.out(1.7)",
        });

        // Hover effects
        Array.from(items).forEach((item) => {
          const element = item as HTMLElement;
          
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              scale: 1.1,
              zIndex: 10,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              scale: 1,
              zIndex: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }

      // Parallax effect
      gsap.to(gridRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Our Gallery
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-blue-500/80 flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm">
                Image {index + 1}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Add your images to the <code className="text-purple-400">public/</code> folder and update the image paths!
          </p>
        </div>
      </div>
    </section>
  );
}
