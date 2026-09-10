"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Footer from "../components/Footer"; // Import your newly separated component

const projects = [
  {
    id: "01",
    title: "SmartMockAI",
    tech: ["MERN Stack", "OpenRouter AI", "Firebase", "Razorpay"],
    description:
      "A full-stack AI interview preparation platform enabling resume-based interview generation, AI-driven response evaluation, and personalized performance analytics.",
    image: "/projects/smartMock-AI.png",
    bgColor: "bg-zinc-300",
    link: "#",
  },
  {
    id: "02",
    title: "BiogenX",
    tech: ["Next.js", "React.js", "Tailwind CSS", "SEO"],
    description:
      "A production-ready pharmaceutical brand website focusing on responsive design, SEO optimization, and high-performance rendering architecture.",
    image: "/projects/biogenx.png",
    bgColor: "bg-zinc-500",
    link: "#",
  },
  {
    id: "03",
    title: "Piku Crochet",
    tech: ["React & TypeScript", "Node.js", "Cloudinary", "OAuth 2.0"],
    description:
      "A full-stack e-commerce system featuring a high-conversion storefront, dynamic cart/wishlist management, and a dedicated admin console.",
    image: "/projects/piku-crochet.png",
    bgColor: "bg-zinc-700",
    link: "#",
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

  const rightColumnProjects = [...projects].reverse();
  const totalProjects = projects.length;

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

          // ADDED: Fade out the close button when footer is visible
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
          
          // ADDED: Make sure close button is visible during projects
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

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-50 w-full min-h-screen bg-[#F4F4F2]"
    >
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Close projects panel"
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[100] bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#ff4103] transition-colors focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none"
      >
        Close [X]
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
                  <span className="text-[#ff4103] font-bold text-xl mb-4 block">
                    Project {project.id}
                  </span>
                  <h2 className="text-5xl xl:text-7xl font-black uppercase tracking-tighter text-zinc-900 mb-8 leading-[0.9]">
                    {project.title}
                  </h2>
                  <p className="text-xl text-zinc-600 font-medium leading-relaxed mb-12">
                    {project.description}
                  </p>
                  <div className="mb-12">
                    <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-4 py-2 bg-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link} 
                    aria-label={`View ${project.title} project`}
                    className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#ff4103] hover:text-zinc-900 transition-colors group focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none rounded-sm"
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

        {/* BOTTOM HALF: The Footer Component */}
        <div className="w-full h-screen shrink-0 relative z-30">
          <Footer />
        </div>
      </section>

      {/* MOBILE & IPAD VIEW */}
      <section aria-label="Mobile project gallery" className="flex xl:hidden flex-col w-full bg-[#F4F4F2]">
        <div className="w-full pt-28 px-6 md:px-12 pb-8 border-b-[1.5px] border-zinc-300">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 leading-[0.85]">
            Selected <br/> Works.
          </h2>
        </div>

        {projects.map((project, index) => (
          <article 
            key={`mobile-${project.id}`} 
            className="w-full flex flex-col mb-16 border-b-[1.5px] border-zinc-300 pb-16"
          >
            <div className={`w-full h-[50vh] md:h-[60vh] relative ${project.bgColor}`}>
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

            <div className="w-full px-6 md:px-12 mt-10">
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

        {/* Mobile footer naturally sits at the bottom */}
        <Footer />
      </section>
    </div>
  );
};

export default Projects;