"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Industry data with icons
const industries = [
  {
    id: 1,
    name: "Travel & Hospitality",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Public Sector",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Telecommunication",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94M14.05 6a5 5 0 0 1 4 3.94" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Retail & CPG",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Oil, Gas, and Energy",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Startups",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "E-commerce",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Banking & Fintech",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: 9,
    name: "Healthcare & Pharmaceuticals",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: 10,
    name: "Gaming",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <circle cx="15" cy="13" r="1" />
        <circle cx="18" cy="11" r="1" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#1a1a2e] mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Discover our Impact Across Industries
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
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

        {/* Let's Talk Business Button */}
        <div 
          className={`flex justify-center mt-12 sm:mt-16 md:mt-20 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0d9488]/30 active:scale-95"
          >
            Let&apos;s Talk Business
          </Link>
        </div>
      </div>
    </section>
  );
}
