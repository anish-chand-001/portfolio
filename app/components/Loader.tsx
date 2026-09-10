"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const greetings = [
  "Hello",
  "I'm Anish Chand.",
  "Developer.",
  "Designer.",
  "Thinker.",
];

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !greetingRef.current) return;

    const greeting = greetingRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const bars = gsap.utils.toArray(".loader-bar");

      gsap.set(greeting, { opacity: 0, y: 20 });

      greetings.forEach((text) => {
        tl.call(() => {
          if (greeting) greeting.textContent = text;
        })
          .to(greeting, { opacity: 1, y: 0, duration: 0.25, ease: "power3.out" })
          .to({}, { duration: 0.35 })
          .to(greeting, { opacity: 0, y: -20, duration: 0.4, ease: "power3.in" });
      });

      tl.to(bars, {
        yPercent: 100,
        duration: 1.2,
        stagger: { each: 0.08, from: "start" },
        ease: "power4.inOut",
      });

      tl.set(loaderRef.current, { display: "none" });
    
      tl.call(() => {
        document.cookie = "hasVisited=true; path=/"; 
      });

    }, loaderRef);

    return () => ctx.revert(); 
  }, []); 

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex pointer-events-none"
    >
      <div
        ref={greetingRef}
        className="absolute inset-0 z-10 flex items-center justify-center text-[#001621]
        text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight panchang text-center px-4"
      />

      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`loader-bar h-full flex-1 bg-[#ff4103] outline outline-[1px] outline-[#ff4103] ${
            index > 5 ? "hidden md:block" : "block"
          }`}
        />
      ))}
    </div>
  );
}