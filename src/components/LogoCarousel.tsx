"use client";

import { useEffect, useRef } from "react";

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const LogoItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 px-8 md:px-12 transition-all duration-300 select-none">
      {children}
    </div>
  );

  return (
    <section className="w-full bg-white py-6 md:py-8 overflow-hidden">
      {/* Logo Slider Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex items-center gap-6 md:gap-10 will-change-transform"
            style={{ width: "max-content" }}
          >
            {/* First set of logos - Canadian Companies */}
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">MapleLeaf Tech</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-bold text-blue-700">North</span>
                <span className="text-xl md:text-2xl font-light text-gray-500">Star</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-lg md:text-xl font-medium text-gray-700">GreenPath Solutions</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-bold tracking-wide text-gray-800">VANCOUVER<span className="text-cyan-500">DIGITAL</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">QC</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">QuebecCommerce</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-light text-gray-600">alpine</span>
                <span className="text-xl md:text-2xl font-bold text-blue-600">LABS</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-red-600 rounded-sm flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">+</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-800">CanadaCare Health</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-semibold text-gray-700">Toronto<span className="text-amber-500">Eats</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 22,22 2,22"/>
                </svg>
                <span className="text-lg md:text-xl font-medium text-gray-700">PeakView Media</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl tracking-widest font-light text-gray-600 uppercase">Montréal Studio</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">OC</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Ottawa Connect</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-bold text-teal-600">Frost<span className="font-light text-gray-500">byte</span></span>
            </LogoItem>

            {/* Duplicate set for seamless loop - Canadian Companies */}
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">MapleLeaf Tech</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-bold text-blue-700">North</span>
                <span className="text-xl md:text-2xl font-light text-gray-500">Star</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-lg md:text-xl font-medium text-gray-700">GreenPath Solutions</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-bold tracking-wide text-gray-800">VANCOUVER<span className="text-cyan-500">DIGITAL</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">QC</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">QuebecCommerce</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-light text-gray-600">alpine</span>
                <span className="text-xl md:text-2xl font-bold text-blue-600">LABS</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-red-600 rounded-sm flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">+</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-800">CanadaCare Health</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-semibold text-gray-700">Toronto<span className="text-amber-500">Eats</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 22,22 2,22"/>
                </svg>
                <span className="text-lg md:text-xl font-medium text-gray-700">PeakView Media</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl tracking-widest font-light text-gray-600 uppercase">Montréal Studio</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">OC</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Ottawa Connect</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-bold text-teal-600">Frost<span className="font-light text-gray-500">byte</span></span>
            </LogoItem>
          </div>
        </div>
      </div>
    </section>
  );
}
