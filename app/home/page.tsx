
"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import FloatingBadge from "../components/FloatingBadge"; // Adjust this path if needed!

const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});

const premiumEasing: [number, number, number, number] = [0.76, 0, 0.24, 1];

const skillsData = [
  {
    id: "frontend",
    num: "01",
    title: "Frontend",
    items: [
      "React & Next.js",
      "JavaScript & TypeScript",
      "Tailwind CSS",
      "GSAP & Framer Motion",
    ],
  },
  {
    id: "backend",
    num: "02",
    title: "Backend",
    items: [
      "Node.js & Express",
      "RESTful APIs",
      "MongoDB & PostgreSQL",
      "Authentication & Authorization",
    ],
  },
  {
    id: "ai",
    num: "03",
    title: "AI Engineering",
    items: [
      "LLM Applications",
      "RAG & Vector Search",
      "LangChain & LangGraph",
      "AI Agents & Tool Calling",
    ],
  },
  {
    id: "devops",
    num: "04",
    title: "DevOps & Tools",
    items: [
      "Git & GitHub",
      "Docker & Docker Compose",
      "CI/CD",
      "Vercel & Cloud Deployment",
    ],
  },
];

const Homepage = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>("frontend");
  const [showProjects, setShowProjects] = useState(false);

  const toggleSkill = (id: string) => {
    setActiveSkill(activeSkill === id ? null : id);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F4F4F2] text-[#111111] overflow-hidden selection:bg-[#ff4103] selection:text-white">
      {/* =========================
          THE PROJECTS LAYER (z-0)
      ========================= */}
      <AnimatePresence>
        {showProjects && (
          <motion.div
            key="projects-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-20 overflow-y-auto bg-[#F4F4F2]"
          >
            <Projects onClose={() => setShowProjects(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================
          THE HERO CURTAINS (z-10)
      ========================= */}
      <AnimatePresence>
        {!showProjects && (
          <motion.div
            key="hero-layer"
            className="relative z-10 flex flex-col lg:flex-row lg:portrait:flex-col w-full min-h-screen"
          >
            {/* LEFT SIDE: HERO IMAGE */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 1.2, ease: premiumEasing }}
              className="w-full lg:w-[45%] lg:portrait:w-full h-[75vh] lg:h-screen lg:portrait:h-[75vh] relative bg-zinc-200 shrink-0"
            >
              <Image
                src="/images/portfolio-img.png"
                alt="Anish Chand - Full Stack Engineer"
                width={1200}
                height={1200}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-full object-cover object-top grayscale-[20%] contrast-125"
              />
            </motion.div>

            {/* RIGHT SIDE: TYPOGRAPHY & SKILLS */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 1.2, ease: premiumEasing }}
              className="w-full lg:w-[55%] lg:portrait:w-full flex flex-col justify-center items-center lg:items-start pl-8 pr-6 pt-12 pb-36 md:pl-12 md:pr-10 lg:portrait:pt-16 lg:pb-0 lg:portrait:pb-36 lg:pl-16 lg:pr-32 xl:pl-24 xl:pr-48 lg:h-screen lg:portrait:h-auto lg:overflow-hidden lg:portrait:overflow-visible bg-[#F4F4F2]"
            >
              <div className="w-full max-w-xl lg:max-w-2xl">
                <section aria-label="Introduction" className="mb-8 xl:mb-12 2xl:mb-20">
                  <h1 className="text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-4 2xl:mb-6 stardom">
                    Anish <br />
                    <span className="text-[#ff4103]">Chand.</span>
                  </h1>
                  <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-zinc-600 font-medium leading-snug 2xl:leading-relaxed">
                    Engineer of high-performance web applications, blending
                    scalable backend architectures with immersive frontend
                    experiences.
                  </p>
                </section>

                <section aria-label="Skills" className="w-full">
                  {skillsData.map((skill) => (
                    <div
                      key={skill.id}
                      className="border-t-[1.5px] border-zinc-300"
                    >
                      <button
                        onClick={() => toggleSkill(skill.id)}
                        aria-expanded={activeSkill === skill.id}
                        aria-label={`${skill.title} skills — ${activeSkill === skill.id ? "collapse" : "expand"}`}
                        className="w-full flex items-center justify-between py-3 lg:py-4 xl:py-5 2xl:py-6 group focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none rounded-sm"
                      >
                        <div className="flex items-baseline gap-4 2xl:gap-6">
                          <span
                            className={`text-xs xl:text-sm font-bold transition-colors ${activeSkill === skill.id ? "text-[#ff4103]" : "text-zinc-400"}`}
                          >
                            {skill.num}
                          </span>
                          <span className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold tracking-tight uppercase text-zinc-900 group-hover:text-[#ff4103] transition-colors panchang">
                            {skill.title}
                          </span>
                        </div>

                        <span
                          className="text-2xl xl:text-3xl text-zinc-900 font-light relative w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <motion.span
                            animate={{
                              rotate: activeSkill === skill.id ? 180 : 0,
                              opacity: activeSkill === skill.id ? 0 : 1,
                            }}
                            className="absolute"
                          >
                            +
                          </motion.span>
                          <motion.span
                            animate={{
                              rotate: activeSkill === skill.id ? 0 : -180,
                              opacity: activeSkill === skill.id ? 1 : 0,
                            }}
                            className="absolute"
                          >
                            −
                          </motion.span>
                        </span>
                      </button>

                      <AnimatePresence>
                        {activeSkill === skill.id && (
                          <motion.div
                            key={`skill-content-${skill.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-wrap gap-x-4 2xl:gap-x-8 gap-y-2 2xl:gap-y-3 pb-4 2xl:pb-8 pt-1 2xl:pt-2">
                              {skill.items.map((item, index) => (
                                <span
                                  key={index}
                                  className="text-zinc-500 font-medium text-xs xl:text-sm 2xl:text-[0.9rem] uppercase tracking-wide"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  <div className="border-t-[1.5px] border-zinc-300"></div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================
          THE FLOATING BADGE
      ========================= */}
      <AnimatePresence>
        {!showProjects && (
          <motion.div
            key="floating-badge-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <FloatingBadge onClick={() => setShowProjects(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Homepage;