"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Industry data with icons
const industries = [
  {
    id: 1,
    name: "Healthcare",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Finance & Banking",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "E-commerce & Retail",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM9 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Education & E-learning",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path d="M12 14v7" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Real Estate",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Logistics & Transportation",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3h5v5M4 20L20.2 3.8M21 16v5h-5M15 15l5.1 5.1M4 4l5 5" />
        <circle cx="8.5" cy="8.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Entertainment & Media",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 8h20M6 4v4M10 4v4M14 4v4M18 4v4" />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Manufacturing",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M4 7V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" />
        <path d="M2 15h10M9 18l3-3-3-3" />
      </svg>
    ),
  },
  {
    id: 9,
    name: "Hospitality & Travel",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M2 14h20M4 10h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    id: 10,
    name: "Telecommunications",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01M5.636 13.636a9 9 0 0 1 12.728 0M2.05 10.636a13.5 13.5 0 0 1 19.9 0" />
      </svg>
    ),
  },
];

export default function IndustriesImpact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Split industries into left and right columns
  const leftColumn = industries.filter((_, index) => index % 2 === 0);
  const rightColumn = industries.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const IndustryItem = ({ 
    industry, 
    index, 
    isLeft 
  }: { 
    industry: typeof industries[0]; 
    index: number; 
    isLeft: boolean;
  }) => (
    <div
      className={`group flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHoveredItem(industry.id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="flex items-center gap-4">
        <span className={`text-gray-700 transition-colors duration-300 ${
          hoveredItem === industry.id ? "text-[#0d9488]" : ""
        }`}>
          {industry.icon}
        </span>
        <span className={`text-base sm:text-lg font-medium text-gray-800 transition-colors duration-300 ${
          hoveredItem === industry.id ? "text-[#0d9488]" : ""
        }`}>
          {industry.name}
        </span>
      </div>
      
      {/* Arrow indicator on hover */}
      <div className={`transition-all duration-300 ${
        hoveredItem === industry.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
      }`}>
        <svg 
          className="w-5 h-5 text-[#0d9488]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <h2 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#1a1a2e] mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Transforming Industries, Empowering Growth
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32">
          {/* Left Column */}
          <div>
            {leftColumn.map((industry, index) => (
              <IndustryItem 
                key={industry.id} 
                industry={industry} 
                index={index} 
                isLeft={true}
              />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumn.map((industry, index) => (
              <IndustryItem 
                key={industry.id} 
                industry={industry} 
                index={index + leftColumn.length} 
                isLeft={false}
              />
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className={`mt-16 sm:mt-20 md:mt-24 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-6 text-center">
            TRUSTED BY
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Google */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            
            {/* AWS */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
              <svg className="w-12 h-8 sm:w-14 sm:h-9" viewBox="0 0 60 36">
                <path fill="#252F3E" d="M14.09 15.09c0 .58.06 1.05.17 1.39.12.34.28.71.49 1.1.08.13.11.25.11.35 0 .15-.1.31-.3.46l-.97.65c-.14.1-.28.14-.41.14-.16 0-.32-.08-.48-.23-.22-.24-.41-.5-.56-.75-.15-.26-.31-.55-.47-.88-1.2 1.41-2.7 2.12-4.5 2.12-1.29 0-2.31-.37-3.06-1.1-.75-.74-1.13-1.72-1.13-2.95 0-1.31.46-2.37 1.39-3.18.93-.81 2.16-1.22 3.72-1.22.52 0 1.05.04 1.61.12.56.08 1.13.2 1.73.35v-1.13c0-1.17-.24-1.99-.73-2.46-.49-.48-1.32-.71-2.5-.71-.54 0-1.09.07-1.66.2-.57.13-1.12.31-1.66.53-.25.11-.43.17-.55.2-.11.03-.2.05-.26.05-.23 0-.34-.17-.34-.5v-.76c0-.26.03-.46.1-.58.07-.13.2-.25.41-.37.54-.28 1.18-.51 1.93-.69.75-.19 1.55-.28 2.39-.28 1.82 0 3.15.41 3.99 1.24.83.83 1.25 2.08 1.25 3.78v4.98h.03zm-6.2 2.31c.5 0 1.02-.09 1.57-.27.55-.18 1.03-.52 1.45-1 .25-.31.43-.65.55-1.03.11-.38.17-.84.17-1.39v-.67c-.44-.12-.9-.22-1.39-.29-.49-.07-1-.11-1.5-.11-.98 0-1.71.19-2.19.58-.48.39-.71 .94-.71 1.67 0 .68.17 1.19.52 1.54.34.35.84.53 1.51.53l.02-.56zm12.24 1.66c-.29 0-.49-.05-.61-.15-.12-.1-.22-.31-.31-.59l-3.48-11.46c-.09-.29-.13-.48-.13-.57 0-.23.11-.35.34-.35h1.18c.31 0 .52.05.64.15.12.1.21.31.3.59l2.49 9.81 2.31-9.81c.08-.29.17-.49.29-.59.12-.1.34-.15.65-.15h.96c.31 0 .53.05.65.15.12.1.22.31.29.59l2.34 9.93 2.56-9.93c.09-.29.19-.49.3-.59.12-.1.33-.15.63-.15h1.12c.23 0 .35.11.35.35 0 .07-.01.14-.03.22-.02.08-.05.19-.11.34l-3.56 11.46c-.09.29-.19.49-.31.59-.12.1-.32.15-.6.15h-1.04c-.31 0-.52-.05-.64-.16-.12-.1-.22-.31-.29-.59l-2.3-9.56-2.28 9.55c-.08.29-.17.49-.29.59-.12.11-.34.16-.65.16h-1.04l.02.01zm19.58.38c-.78 0-1.57-.09-2.33-.27-.77-.18-1.36-.38-1.77-.59-.25-.13-.42-.28-.49-.41-.07-.13-.11-.28-.11-.42v-.79c0-.33.13-.5.37-.5.1 0 .2.02.3.05.1.04.25.1.42.17.57.25 1.18.45 1.85.58.68.14 1.34.21 2.02.21.95 0 1.68-.17 2.19-.5.51-.33.77-.82.77-1.45 0-.43-.14-.78-.42-1.05-.28-.28-.81-.53-1.57-.76l-2.26-.7c-1.13-.35-1.97-.88-2.49-1.57-.52-.69-.79-1.46-.79-2.28 0-.66.14-1.24.43-1.74.29-.5.68-.94 1.18-1.3.5-.36 1.06-.63 1.72-.82.66-.18 1.36-.27 2.09-.27.36 0 .73.02 1.12.06.39.04.75.1 1.13.17.37.08.72.16 1.05.26.33.1.59.2.79.3.27.14.47.28.58.42.11.14.16.32.16.55v.73c0 .33-.13.5-.37.5-.13 0-.34-.06-.62-.19-1.05-.48-2.22-.71-3.52-.71-.86 0-1.54.13-2.02.41-.48.27-.73.68-.73 1.26 0 .43.15.79.46 1.08.31.29.88.57 1.71.83l2.22.7c1.12.36 1.93.86 2.44 1.5.5.64.75 1.38.75 2.19 0 .68-.14 1.29-.41 1.83-.28.54-.66 1.01-1.15 1.4-.49.4-1.08.69-1.77.9-.72.21-1.47.32-2.28.32l-.03-.02z"/>
                <path fill="#F90" d="M43.7 25.38c-4.37 3.24-10.7 4.97-16.15 4.97-7.64 0-14.52-2.83-19.72-7.53-.41-.37-.04-.88.45-.59 5.62 3.27 12.57 5.24 19.75 5.24 4.84 0 10.17-1 15.06-3.08.74-.32 1.36.48.61 1l.01-.01z"/>
                <path fill="#F90" d="M45.57 23.26c-.56-.71-3.69-.34-5.1-.17-.43.05-.5-.32-.11-.59 2.5-1.76 6.6-1.25 7.08-.66.48.59-.13 4.7-2.47 6.66-.36.3-.7.14-.55-.26.53-1.32 1.7-4.27 1.14-4.98h.01z"/>
              </svg>
            </div>
            
            {/* Atlassian */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="atlassianGradient1" x1="99.68%" y1="15.8%" x2="39.6%" y2="97.01%">
                    <stop offset="0%" stopColor="#0052CC"/>
                    <stop offset="92%" stopColor="#2684FF"/>
                  </linearGradient>
                </defs>
                <path fill="url(#atlassianGradient1)" d="M7.127 11.118c-.198-.296-.542-.296-.74 0L1.86 19.74c-.148.247-.05.542.247.592h6.24c.198 0 .395-.148.493-.345.69-1.383.345-4.893-1.714-8.868z"/>
                <path fill="#2684FF" d="M11.11 3.41c-2.106 3.876-2.353 8.09-.543 11.472l3.383 6.537c.098.198.296.345.493.345h6.24c.296-.05.395-.345.247-.592L12.097 3.41c-.198-.346-.79-.346-.987 0z"/>
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Certified & verified technology partner
          </p>
        </div>

      </div>
    </section>
  );
}
