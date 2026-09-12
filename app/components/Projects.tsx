

"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Footer from "./Footer"; // Assuming relative path is fixed

const projects = [
  {
    id: "01",
    title: "SmartMockAI",
    tech: ["MERN Stack", "OpenRouter AI", "Firebase", "Razorpay"],
    description:
      "A full-stack AI interview preparation platform enabling resume-based interview generation, AI-driven response evaluation, and personalized performance analytics.",
    image: "/projects/smartMock-AI.png",
    bgColor: "bg-zinc-300",
    link: "https://smartmockai-4phv.onrender.com",
  },
  {
    id: "02",
    title: "BiogenX",
    tech: ["Next.js", "React.js", "Tailwind CSS", "SEO"],
    description:
      "A production-ready pharmaceutical brand website focusing on responsive design, SEO optimization, and high-performance rendering architecture.",
    image: "/projects/biogenx.png",
    bgColor: "bg-zinc-500",
    link: "https://biogenx.in",
  },
  {
    id: "03",
    title: "Piku Crochet",
    tech: ["React & TypeScript", "Node.js", "Cloudinary", "OAuth 2.0"],
    description:
      "A full-stack e-commerce system featuring a high-conversion storefront, dynamic cart/wishlist management, and a dedicated admin console.",
    image: "/projects/piku-crochet.png",
    bgColor: "bg-zinc-700",
    link: "https://pikucrochet.vercel.app",
  },
];

interface ProjectsProps {
  onClose: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopMasterRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const mobileFooterRef = useRef<HTMLDivElement>(null);

  const rightColumnProjects = [...projects].reverse();
  const totalProjects = projects.length;

  // 1. DESKTOP ANIMATION LOGIC
  useEffect(() => {
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const container = containerRef.current;
    const desktopMaster = desktopMasterRef.current;

    if (!leftCol || !rightCol || !container || !desktopMaster) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      let projectProgress = { value: 0 };
      let footerProgress = { value: 0 };
      const maxIndex = totalProjects - 1;

      gsap.set(leftCol, { yPercent: 0 });
      gsap.set(rightCol, { yPercent: -(maxIndex * 100) });

      const updateColumns = (val: number) => {
        gsap.to(leftCol, {
          yPercent: -val * (maxIndex * 100),
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(rightCol, {
          yPercent: -(maxIndex * 100) + val * (maxIndex * 100),
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY * 0.0008;

        if (footerProgress.value > 0 || (projectProgress.value >= 0.99 && delta > 0)) {
          footerProgress.value = Math.min(Math.max(footerProgress.value + delta, 0), 1);
          
          gsap.to(desktopMaster, {
            y: `-${footerProgress.value * 100}vh`,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
          });

          gsap.to(closeBtnRef.current, {
            opacity: footerProgress.value > 0.05 ? 0 : 1,
            pointerEvents: footerProgress.value > 0.05 ? "none" : "auto",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });

        } else {
          projectProgress.value = Math.min(Math.max(projectProgress.value + delta, 0), 1);
          updateColumns(projectProgress.value);
          
          gsap.to(closeBtnRef.current, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
            overwrite: "auto",
          });
        }
      };

      container.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    });

    return () => mm.revert();
  }, [totalProjects]);

  // 2. MOBILE & IPAD CLOSE BUTTON FADE LOGIC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (window.innerWidth < 1280 && closeBtnRef.current) {
            gsap.to(closeBtnRef.current, {
              opacity: entry.isIntersecting ? 0 : 1,
              pointerEvents: entry.isIntersecting ? "none" : "auto",
              duration: 0.3,
              overwrite: "auto",
            });
          }
        });
      },
      { root: null, threshold: 0.15 }
    );

    if (mobileFooterRef.current) {
      observer.observe(mobileFooterRef.current);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => observer.disconnect();
  }, []);

  // 3. THE EXIT ANIMATION CHOREOGRAPHY
  // const handleAnimatedClose = () => {
  //   if (!containerRef.current) return;

  //   // Lock interactions so the user can't break the animation by clicking/scrolling
  //   containerRef.current.style.pointerEvents = "none";

  //   const tl = gsap.timeline({
  //     onComplete: onClose, // Fires the actual unmount only after animation finishes
  //   });

  //   if (window.innerWidth >= 1280) {
  //     // --- DESKTOP OUTRO ---
  //     const maxIndex = projects.length - 1;

  //     // Drop footer if it was pulled up
  //     tl.to(desktopMasterRef.current, { y: 0, duration: 0.8, ease: "power3.inOut" }, 0);
      
  //     // Reverse columns to original positions
  //     tl.to(leftColRef.current, { yPercent: 0, duration: 1.2, ease: "power3.inOut" }, 0);
  //     tl.to(rightColRef.current, { yPercent: -(maxIndex * 100), duration: 1.2, ease: "power3.inOut" }, 0);
      
  //     // Fade container to reveal Hero
  //     tl.to(containerRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0.7);

  //   } else {
  //     // --- MOBILE OUTRO ---
  //     // Slide header up
  //     tl.to(".mobile-header", { y: -50, opacity: 0, duration: 0.5, ease: "power3.in" }, 0);
      
  //     // Slide images out to the left
  //     tl.to(".mobile-image", { x: "-100vw", opacity: 0, stagger: 0.05, duration: 0.8, ease: "power3.inOut" }, 0);
      
  //     // Slide details out to the right
  //     tl.to(".mobile-details", { x: "100vw", opacity: 0, stagger: 0.05, duration: 0.8, ease: "power3.inOut" }, 0);
      
  //     // Slide footer down
  //     tl.to(mobileFooterRef.current, { y: 100, opacity: 0, duration: 0.5, ease: "power3.in" }, 0);
      
  //     // Fade container to reveal Hero
  //     tl.to(containerRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0.5);
  //   }
  // };

 // 3. THE EXIT ANIMATION CHOREOGRAPHY
  const handleAnimatedClose = () => {
    if (!containerRef.current || !closeBtnRef.current) return;

    // Lock interactions so the user can't break the animation by clicking/scrolling
    containerRef.current.style.pointerEvents = "none";

    const tl = gsap.timeline({
      onComplete: onClose, // Fires the actual unmount only after animation finishes
    });

    // ==========================================
    // FIXED: ISOLATED TACTILE MOBILE MICRO-ANIMATION
    // ==========================================
    
    // 1. Target the whole button for the background and press effect
    tl.to(closeBtnRef.current, { 
      backgroundColor: "#ff4103", 
      scale: 0.95, // Slightly softer scale for the wider pill shape
      duration: 0.15,
      ease: "power2.out" 
    }, 0); 

    // 2. Target ONLY the SVG icon for the rotation
    const icon = closeBtnRef.current.querySelector("svg");
    if (icon) {
      tl.to(icon, {
        rotation: 90,
        duration: 0.15,
        ease: "power2.out"
      }, 0);
    }

    if (window.innerWidth >= 1280) {
      // --- DESKTOP OUTRO ---
      const maxIndex = projects.length - 1;

      tl.to(desktopMasterRef.current, { y: 0, duration: 0.8, ease: "power3.inOut" }, 0.15);
      tl.to(leftColRef.current, { yPercent: 0, duration: 1.2, ease: "power3.inOut" }, 0.15);
      tl.to(rightColRef.current, { yPercent: -(maxIndex * 100), duration: 1.2, ease: "power3.inOut" }, 0.15);
      tl.to(containerRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0.85);

    } else {
      // --- MOBILE OUTRO ---
      tl.to(".mobile-header", { y: -50, opacity: 0, duration: 0.5, ease: "power3.in" }, 0.15);
      tl.to(".mobile-image", { x: "-100vw", opacity: 0, stagger: 0.05, duration: 0.8, ease: "power3.inOut" }, 0.15);
      tl.to(".mobile-details", { x: "100vw", opacity: 0, stagger: 0.05, duration: 0.8, ease: "power3.inOut" }, 0.15);
      
      if (mobileFooterRef.current) {
        tl.to(mobileFooterRef.current, { y: 100, opacity: 0, duration: 0.5, ease: "power3.in" }, 0.15);
      }
      
      tl.to(containerRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0.65);
    }
  };
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-50 w-full min-h-screen bg-[#F4F4F2] overflow-x-hidden"
    >
      <button
        ref={closeBtnRef}
        onClick={handleAnimatedClose}
        aria-label="Close projects panel"
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[100] flex items-center gap-3 bg-black text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-500 hover:bg-[#ff4103] group focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none"
      >
        <svg 
          className="w-4 h-4 transition-transform duration-500 group-hover:rotate-90" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-[2px]">
          Close
        </span>
      </button>
      
      {/* DESKTOP VIEW */}
      <section aria-label="Desktop project gallery" className="hidden xl:flex flex-col w-full h-[200vh] overflow-hidden" ref={desktopMasterRef}>
        <div className="w-full h-screen shrink-0 flex">
          
          <div ref={leftColRef} className="w-[45%] h-full flex flex-col will-change-transform z-10">
            {projects.map((project) => (
              <div key={`left-${project.id}`} className={`w-full h-screen relative shrink-0 ${project.bgColor} flex items-center justify-center`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={project.id === "01"}
                  sizes="45vw"
                  className="object-cover grayscale contrast-[1.15] brightness-90 transition-all duration-700 ease-in-out hover:grayscale-0 hover:brightness-100 hover:contrast-100"
                />
                <div className="absolute top-8 left-8 z-20 flex items-center gap-4 pointer-events-none">
                  <span className="text-white text-sm font-bold tracking-widest uppercase mix-blend-difference">
                    N&deg; {project.id}
                  </span>
                  <div className="w-8 h-[1px] bg-white mix-blend-difference"></div>
                </div>
              </div>
            ))}
          </div>

          <div ref={rightColRef} className="w-[55%] h-full flex flex-col will-change-transform z-20 bg-[#F4F4F2]">
            {rightColumnProjects.map((project) => (
              <div key={`right-${project.id}`} className="w-full h-screen shrink-0 flex flex-col justify-center px-12 xl:px-24 border-b-[1px] border-zinc-200">
                <div className="max-w-xl">
                  <span className="text-[#ff4103] font-bold text-2xl mb-4 block">
                    Project {project.id}
                  </span>
                  <h2 className="text-5xl xl:text-7xl font-black uppercase tracking-tighter text-zinc-900 mb-8 leading-[0.9]">
                    {project.title}
                  </h2>
                  <p className="text-xl text-zinc-600 font-medium leading-relaxed mb-12">
                    {project.description}
                  </p>
                  <div className="mb-12">
                    <h3 className="text-xl stardom font-bold tracking-widest uppercase text-zinc-400 mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-4 py-2 bg-zinc-200 text-zinc-700 text-sm font-bold uppercase tracking-widest rounded-full ">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link} 
                    aria-label={`View ${project.title} project`}
                    className="inline-flex items-center gap-3 text-md  font-bold tracking-widest uppercase text-[#ff4103] hover:text-zinc-900 transition-colors group focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none rounded-sm"
                  >
                    View Project
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-screen shrink-0 relative z-30">
          <Footer />
        </div>
      </section>

      {/* MOBILE & IPAD VIEW */}
      <section aria-label="Mobile project gallery" className="flex xl:hidden flex-col w-full bg-[#F4F4F2]">
        {/* ADDED: .mobile-header target class */}
        <div className="mobile-header w-full pt-28 px-6 md:px-12 pb-8 border-b-[1.5px] border-zinc-300">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 leading-[0.85]">
            Selected <br/> Works.
          </h2>
        </div>

        {projects.map((project, index) => (
          <article 
            key={`mobile-${project.id}`} 
            className="w-full flex flex-col mb-16 border-b-[1.5px] border-zinc-300 pb-16 overflow-hidden"
          >
            {/* ADDED: .mobile-image target class */}
            <div className={`mobile-image w-full h-[50vh] md:h-[60vh] relative ${project.bgColor}`}>
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3 pointer-events-none">
                <span className="text-white text-xs font-bold tracking-widest uppercase mix-blend-difference">
                  N&deg; {project.id}
                </span>
                <div className="w-6 h-[1px] bg-white mix-blend-difference"></div>
              </div>
            </div>

            {/* ADDED: .mobile-details target class */}
            <div className="mobile-details w-full px-6 md:px-12 mt-10">
              <span className="text-[#ff4103] font-bold text-sm tracking-widest uppercase mb-4 block">
                Project {project.id}
              </span>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 mb-6 leading-[0.9]">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed mb-10 max-w-xl">
                {project.description}
              </p>
              <div className="w-full max-w-xl">
                <h4 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4 border-b border-zinc-200 pb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-zinc-200 text-zinc-700 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  aria-label={`View ${project.title} project`}
                  className="w-full flex items-center justify-between px-6 py-4 md:py-6 bg-zinc-900 text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#ff4103] transition-colors focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none"
                >
                  View Project
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </article>
        ))}

        <div ref={mobileFooterRef} className="w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Projects;