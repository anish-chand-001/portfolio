"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  {
    id: "frontend",
    num: "01",
    title: "Frontend",
    items: ["React & Next.js", "Tailwind CSS", "GSAP & Framer Motion", "UI/UX Architecture"]
  },
  {
    id: "backend",
    num: "02",
    title: "Backend",
    items: ["Node.js & Express", "MongoDB (MERN)", "RESTful APIs", "System Architecture"]
  },
  {
    id: "ai",
    num: "03",
    title: "AI Integration",
    items: ["LLM Implementations", "Prompt Engineering", "AI Photography", "Automated Workflows"]
  },
  {
    id: "devops",
    num: "04",
    title: "DevOps",
    items: ["Vercel & Render", "Git & GitHub", "CI/CD Pipelines", "Cloud Database"]
  }
];

const Homepage = () => {
  const [activeSkill, setActiveSkill] = useState("frontend");

  const toggleSkill = (id) => {
    setActiveSkill(activeSkill === id ? null : id);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#F4F4F2] text-[#111111] overflow-hidden selection:bg-[#ff4103] selection:text-white">
      
      {/* =========================
          LEFT SIDE: HERO IMAGE
      ========================= */}
      <div className="w-full lg:w-[45%] h-[60vh] lg:h-screen relative bg-zinc-200 shrink-0">            
        <Image 
          src="/images/portfolio-img.png" 
          alt="Anish Chand - Full Stack Engineer"
          width={1200} 
          height={1200}
          className="w-full h-full object-cover object-top grayscale-[20%] contrast-125"
        />
      </div>
      
      {/* =========================
          RIGHT SIDE: TYPOGRAPHY & SKILLS
          THE FIX: Added 'items-center lg:items-start' to center the block on iPad/Mobile
      ========================= */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start px-6 py-16 md:px-16 lg:px-24 lg:h-screen overflow-y-auto no-scrollbar">
        
        {/* 
          INNER WRAPPER: 
          This holds the text and accordion together as one solid block.
          When 'items-center' acts on this, it perfectly centers the whole block.
        */}
        <div className="w-full max-w-xl lg:max-w-2xl">
          
          {/* Editorial Introduction */}
          <div className="mb-16 lg:mb-24">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
              Anish <br/> 
              <span className="text-[#ff4103]">Chand.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed max-w-md">
              Engineer of high-performance web applications, blending scalable backend architectures with immersive frontend experiences.
            </p>
          </div>

          {/* Award-Style Accordion */}
          <div className="w-full">
            {skillsData.map((skill) => (
              <div key={skill.id} className="border-t-[1.5px] border-zinc-300">
                
                <button 
                  onClick={() => toggleSkill(skill.id)}
                  className="w-full flex items-center justify-between py-6 group"
                >
                  <div className="flex items-baseline gap-6">
                    <span className={`text-sm font-bold transition-colors ${activeSkill === skill.id ? 'text-[#ff4103]' : 'text-zinc-400'}`}>
                      {skill.num}
                    </span>
                    <span className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-zinc-900 group-hover:text-[#ff4103] transition-colors panchang">
                      {skill.title}
                    </span>
                  </div>
                  
                  <span className="text-3xl text-zinc-900 font-light relative w-6 h-6 flex items-center justify-center">
                    <motion.span animate={{ rotate: activeSkill === skill.id ? 180 : 0, opacity: activeSkill === skill.id ? 0 : 1 }} className="absolute">+</motion.span>
                    <motion.span animate={{ rotate: activeSkill === skill.id ? 0 : -180, opacity: activeSkill === skill.id ? 1 : 0 }} className="absolute">−</motion.span>
                  </span>
                </button>

                <AnimatePresence>
                  {activeSkill === skill.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-x-8 gap-y-3 pb-8 pt-2">
                        {skill.items.map((item, index) => (
                          <span key={index} className="text-zinc-500 font-medium text-lg uppercase tracking-wide text-[0.9rem]">
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
          </div>

        </div>
      </div>
    </div>
  )
}

export default Homepage