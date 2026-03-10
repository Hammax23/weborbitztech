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
            {/* First set of logos */}
            <LogoItem>
              <span className="text-xl md:text-2xl font-light text-gray-700 tracking-wide">recurate</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span className="text-xl md:text-2xl font-medium text-gray-700">Kallidus</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-green-600 text-xl">◆</span>
                <span className="text-lg md:text-xl font-medium text-gray-700">HoneyBricks</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-light tracking-[0.2em] text-gray-600 uppercase">Weatherbys</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">iD</span>
                </div>
                <span className="text-xl md:text-2xl font-medium text-gray-700">inDrive</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex flex-col items-center leading-none">
                <span className="text-lg md:text-xl font-serif italic text-amber-600">Sacred</span>
                <span className="text-xl md:text-2xl font-bold text-indigo-900 -mt-1">TAILS</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex flex-col items-center leading-none">
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-6 bg-blue-900"></div>
                  <div className="w-1.5 h-6 bg-blue-900"></div>
                  <div className="w-1.5 h-6 bg-green-600"></div>
                </div>
                <span className="text-sm md:text-base font-bold text-blue-900 tracking-wider mt-1">NISHAT</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-light text-gray-700">Alef</span>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-cyan-500 text-2xl font-light">آ</span>
                </div>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex flex-col items-center leading-none">
                <span className="text-lg md:text-xl text-gray-700 font-light">الغرير</span>
                <span className="text-[10px] text-gray-500 tracking-wider">AL GHURAIR</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-bold text-orange-600">TELENOR</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 border-2 border-blue-600 rounded"></div>
                <span className="text-xl md:text-2xl font-medium text-gray-700">Engro</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-light text-red-600">Jazz</span>
            </LogoItem>

            {/* Duplicate set for seamless loop */}
            <LogoItem>
              <span className="text-xl md:text-2xl font-light text-gray-700 tracking-wide">recurate</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span className="text-xl md:text-2xl font-medium text-gray-700">Kallidus</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-green-600 text-xl">◆</span>
                <span className="text-lg md:text-xl font-medium text-gray-700">HoneyBricks</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-light tracking-[0.2em] text-gray-600 uppercase">Weatherbys</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">iD</span>
                </div>
                <span className="text-xl md:text-2xl font-medium text-gray-700">inDrive</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex flex-col items-center leading-none">
                <span className="text-lg md:text-xl font-serif italic text-amber-600">Sacred</span>
                <span className="text-xl md:text-2xl font-bold text-indigo-900 -mt-1">TAILS</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex flex-col items-center leading-none">
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-6 bg-blue-900"></div>
                  <div className="w-1.5 h-6 bg-blue-900"></div>
                  <div className="w-1.5 h-6 bg-green-600"></div>
                </div>
                <span className="text-sm md:text-base font-bold text-blue-900 tracking-wider mt-1">NISHAT</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-light text-gray-700">Alef</span>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-cyan-500 text-2xl font-light">آ</span>
                </div>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex flex-col items-center leading-none">
                <span className="text-lg md:text-xl text-gray-700 font-light">الغرير</span>
                <span className="text-[10px] text-gray-500 tracking-wider">AL GHURAIR</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-bold text-orange-600">TELENOR</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 border-2 border-blue-600 rounded"></div>
                <span className="text-xl md:text-2xl font-medium text-gray-700">Engro</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-light text-red-600">Jazz</span>
            </LogoItem>
          </div>
        </div>
      </div>
    </section>
  );
}
