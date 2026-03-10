"use client";

import React from 'react';

interface AnimatedLogoProps {
  className?: string;
  onClick?: () => void;
}

export default function AnimatedLogo({ className = "", onClick }: AnimatedLogoProps) {
  return (
    <div onClick={onClick} className={`flex items-center gap-3 lg:gap-4 group cursor-pointer ${className}`}>
      {/* Logo Mark */}
      <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shrink-0 -translate-y-1">
        
        {/* The Orbit Animation Container - Now moving horizontally */}
        <div className="absolute inset-0 z-0 overflow-visible">
          <style>
            {`
              @keyframes dash-horizontal {
                0% { stroke-dashoffset: 250; }
                50% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -250; }
              }
              @keyframes fade-horizontal {
                0% { opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { opacity: 0; }
              }
              .animate-stroke-horizontal {
                stroke-dasharray: 250;
                animation: dash-horizontal 3.5s linear infinite;
              }
              .animate-fade-dot {
                animation: fade-horizontal 3.5s linear infinite;
              }
            `}
          </style>
          <div className="w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,180,255,0.6)] overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="orbitSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E1FF" />
                  <stop offset="50%" stopColor="#00A2FF" />
                  <stop offset="100%" stopColor="#00B4FF" />
                </linearGradient>
              </defs>
              
              {/* The right portion of the blue swoosh */}
              <path 
                d="M 50 82 C 60 76, 80 50, 88 28" 
                stroke="url(#orbitSwoosh)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
                className="animate-stroke-horizontal"
              />
              
              {/* Orbit Dot */}
              <circle cx="89" cy="23" r="4.5" fill="#00B4FF" className="animate-fade-dot" />

              {/* The Left portion of the Blue Swoosh overlapping the W */}
              <path 
                d="M 8 72 C 15 90, 35 90, 52 82" 
                stroke="url(#orbitSwoosh)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none"
                className="animate-stroke-horizontal"
              />
            </svg>
          </div>
        </div>

        {/* The W Letter (Static, centered) - Exactly matching the screenshot */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <svg viewBox="0 0 100 100" className="w-10 h-10 lg:w-[3.6rem] lg:h-[3.6rem] drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Right Shape of the W */}
            <path d="M 42 30 L 60 30 C 65 45, 70 60, 75 75 C 80 55, 95 35, 102 30 L 85 78 C 80 82, 75 82, 68 78 Z" fill="#ffffff" />
            
            {/* Left Shape of the W */}
            <path d="M 12 25 L 34 25 C 42 45, 48 65, 52 75 C 60 55, 70 40, 78 45 L 60 85 C 50 90, 40 85, 34 85 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Text Container */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center text-[1.25rem] lg:text-[1.7rem] font-semibold tracking-tight leading-none text-white" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
          <span>WEB</span>
          <span className="ml-[0.15em]">
            {/* Static Gradient ORBITZ */}
            <span className="bg-gradient-to-tr from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,180,255,0.4)]">ORBITZ</span>
          </span>
        </div>
        
        <div className="flex items-center justify-between gap-[3px] mt-1.5 px-[2px]">
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent opacity-70"></div>
          {/* TECHNOLOGIES in White */}
          <span className="text-[0.45rem] lg:text-[0.55rem] tracking-[0.45em] font-semibold leading-none ml-1.5 uppercase text-white drop-shadow-sm" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            TECHNOLOGIES
          </span>
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
