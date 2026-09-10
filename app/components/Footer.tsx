"use client";

import React, { useState, useEffect } from 'react';

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/anish-chand-577717270",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.369 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    url: "https://github.com/anish-chand-001",
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  },
];

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full min-h-screen bg-black text-white flex flex-col justify-between px-6 py-12 md:px-16 xl:px-24 xl:py-16 relative overflow-hidden">
      
      {/* =========================
          TOP SECTION: STATUS BAR
      ========================= */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full uppercase tracking-widest text-xs md:text-sm font-bold text-zinc-500 gap-6">
        <div className="flex items-center gap-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>
        
        {/* The clock is now visible on mobile, beautifully stacked */}
        <div className="flex items-center gap-3 border border-zinc-800 rounded-full px-4 py-2 md:border-none md:p-0">
          {/* Location Pin Icon */}
          <svg 
            className="w-3.5 h-3.5 text-[#ff4103]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <title>Location</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          
          <span className="whitespace-nowrap">Noida, Delhi NCR</span>
          <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
          <span className="text-white min-w-[65px]">{time}</span>
        </div>
      </div>

      {/* =========================
          MIDDLE SECTION: HUGE CTA
      ========================= */}
      <div className="flex-1 flex flex-col justify-center w-full py-20 md:py-0">
        <a 
          href="mailto:anishchand.data@gmail.com"
          aria-label="Send email to anishchand.data@gmail.com"
          className="group relative inline-block w-fit focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none rounded-sm"
        >
          <p className="text-zinc-500 text-base md:text-2xl xl:text-3xl font-medium tracking-wide mb-4 md:mb-6 transition-colors group-hover:text-[#ff4103]">
            Got a project in mind? Let's build it.
          </p>
          
         
          <h2 className="text-[11.5vw] md:text-[9vw] xl:text-[7.5vw] font-black tracking-tighter leading-[0.85] text-zinc-400 group-hover:text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            
            
            anishchand<span className="text-[#ff4103] xl:text-zinc-400 xl:group-hover:text-white transition-colors">.data</span>
            
            <br />
            <span className="flex items-center gap-3 md:gap-8">
              @gmail.com
              
            
              <svg 
                className="shrink-0 w-[10vw] h-[10vw] md:w-[7vw] md:h-[7vw] xl:w-[5vw] xl:h-[5vw] text-[#ff4103] opacity-100 xl:opacity-0 xl:-translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                role="img"
                aria-hidden="true"
              >
                <title>Arrow</title>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </h2>
        </a>
      </div>

     {/* =========================
          BOTTOM SECTION: LINKS
      ========================= */}
      <nav aria-label="Footer links" className="w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-10 border-t border-zinc-800 pt-8">
        
        <p className="text-zinc-600 text-[10px] md:text-sm font-bold uppercase tracking-widest pb-2 md:pb-0">
          © 2026 Anish Chand. All rights reserved.
        </p>
        
        {/* Action & Icon Container */}
        <div className="flex flex-wrap items-center gap-3 md:gap-6">
          
          {/* ADDED: Download Resume Pill Button */}
          <a 
            href="/Anish_Chand_Resume.pdf" // Make sure to put your PDF in the Next.js 'public' folder!
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume (PDF)"
            className="group flex items-center gap-3 rounded-full border border-zinc-800 bg-black px-6 py-3.5 md:px-8 md:py-4 transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] hover:bg-white hover:border-white focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-300 transition-colors duration-500 group-hover:text-black">
              Resume
            </span>
            {/* Download Arrow Icon */}
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 transition-colors duration-500 group-hover:text-[#ff4103]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <title>Download</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          {/* Social Icons */}
          {socials.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.name} profile`}
              className="group flex items-center rounded-full border border-zinc-800 bg-black p-3.5 md:p-5 transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] hover:border-zinc-600 hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none"
            >
              <span className="text-zinc-500 transition-colors duration-500 group-hover:text-white">
                {link.icon}
              </span>
              
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-widest text-white transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:max-w-xs group-hover:pl-3 md:group-hover:pl-4">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </nav>
      
    </footer>
  );
};

export default Footer;