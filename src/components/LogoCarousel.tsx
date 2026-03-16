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
                  <span className="text-white text-xs font-bold">🍁</span>
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">Maple Harvest Foods</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-bold text-emerald-700">True</span>
                <span className="text-xl md:text-2xl font-light text-gray-500">North Realty</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🛒</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">ShopBC Online</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-bold tracking-wide text-gray-800">PRAIRIE<span className="text-amber-600">FARMS</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">🏠</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Calgary Homes</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-light text-gray-600">fresh</span>
                <span className="text-xl md:text-2xl font-bold text-green-600">MARKET</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📦</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-800">CanadaCart</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-semibold text-gray-700">Ontario<span className="text-red-500">Bites</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-teal-600 rounded flex items-center justify-center">
                  <span className="text-white text-[10px]">🏢</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Edmonton Properties</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl tracking-wide font-medium text-gray-600">WEST<span className="text-blue-600">COAST</span> Eats</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">VR</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Vancouver Realtors</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-bold text-orange-600">Quick<span className="font-light text-gray-500">Shop</span></span>
            </LogoItem>

            {/* Duplicate set for seamless loop - Canadian Companies */}
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🍁</span>
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">Maple Harvest Foods</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-bold text-emerald-700">True</span>
                <span className="text-xl md:text-2xl font-light text-gray-500">North Realty</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🛒</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">ShopBC Online</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-bold tracking-wide text-gray-800">PRAIRIE<span className="text-amber-600">FARMS</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">🏠</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Calgary Homes</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-light text-gray-600">fresh</span>
                <span className="text-xl md:text-2xl font-bold text-green-600">MARKET</span>
              </div>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📦</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-800">CanadaCart</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl font-semibold text-gray-700">Ontario<span className="text-red-500">Bites</span></span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-teal-600 rounded flex items-center justify-center">
                  <span className="text-white text-[10px]">🏢</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Edmonton Properties</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-lg md:text-xl tracking-wide font-medium text-gray-600">WEST<span className="text-blue-600">COAST</span> Eats</span>
            </LogoItem>
            <LogoItem>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">VR</span>
                </div>
                <span className="text-lg md:text-xl font-medium text-gray-700">Vancouver Realtors</span>
              </div>
            </LogoItem>
            <LogoItem>
              <span className="text-xl md:text-2xl font-bold text-orange-600">Quick<span className="font-light text-gray-500">Shop</span></span>
            </LogoItem>
          </div>
        </div>
      </div>
    </section>
  );
}
