"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Tech stack logos
const techStacks = [
  { id: 1, name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: 3, name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { id: 4, name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { id: 5, name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: 6, name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 7, name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { id: 8, name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { id: 9, name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { id: 10, name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { id: 11, name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { id: 12, name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { id: 13, name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: 14, name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { id: 15, name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { id: 16, name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { id: 17, name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { id: 18, name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { id: 19, name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { id: 20, name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
];

const serviceCards = [
  {
    title: "Generative AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    gradient: "from-cyan-500/30 to-blue-600/30",
  },
  {
    title: "Dynamics 365 ERP",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    gradient: "from-gray-500/30 to-slate-600/30",
  },
  {
    title: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop",
    gradient: "from-purple-500/30 to-indigo-600/30",
  },
  {
    title: "Staff Augmentation",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    gradient: "from-teal-500/30 to-cyan-600/30",
  },
  {
    title: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    gradient: "from-blue-500/30 to-indigo-600/30",
  },
  {
    title: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    gradient: "from-emerald-500/30 to-teal-600/30",
  },
  {
    title: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    gradient: "from-red-500/30 to-orange-600/30",
  },
  {
    title: "DevOps Services",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    gradient: "from-violet-500/30 to-purple-600/30",
  },
];

export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const techScrollRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for infinite scroll
  const duplicatedStacks = [...techStacks, ...techStacks];

  // Responsive cards per view - 6 cards (2 rows × 3 cols) on desktop, 4 on mobile
  const cardsPerView = isMobile ? 4 : 6;
  const totalSlides = Math.ceil(serviceCards.length / cardsPerView);

  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setSlideDirection(index > currentIndex ? "right" : "left");
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const visibleCards = serviceCards.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        }
      });
    }, { threshold: 0.2 });

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (textRef.current) textObserver.observe(textRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    return () => {
      sectionObserver.disconnect();
      textObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  // Auto-scroll effect for tech stack
  useEffect(() => {
    if (!isVisible) return;

    const scrollContainer = techScrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    
    const animate = () => {
      scrollPosition += scrollSpeed;
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-gradient-to-br from-[#e8f4f8] via-[#f0f0f0] to-[#e8f0f4] pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-28 md:pb-12 lg:pt-36 lg:pb-16 transition-all duration-1000 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Our Services Heading - Static */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold leading-tight tracking-tight text-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
          {/* O - Blue metallic gradient */}
          <span className="bg-gradient-to-tr from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,180,255,0.2)]">
            O
          </span>
          <span className="text-[#1a1a2e]">ur</span>
          <span className="text-[#1a1a2e]">&nbsp;</span>
          {/* S - Blue metallic gradient */}
          <span className="bg-gradient-to-tr from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,180,255,0.2)]">
            S
          </span>
          <span className="text-[#1a1a2e]">ervic</span>
          {/* e - Blue metallic gradient */}
          <span className="bg-gradient-to-tr from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,180,255,0.2)]">
            e
          </span>
          <span className="text-[#1a1a2e]">s</span>
          </h2>
        </div>

        {/* Content Layout - Text and Cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          {/* Left Side - Text Content */}
          <div 
            ref={textRef}
            className={`lg:col-span-5 transform transition-all duration-1000 delay-300 ${
              textVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-16"
            }`}
          >
            {/* Professional Enterprise Text */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-tight text-[#1a1a2e]">
                Transforming Modern Businesses
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-[1.5rem] text-gray-600 leading-relaxed">
                Through{" "}
                <span 
                  className="font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Innovation
                </span>
                ,{" "}
                <span 
                  className="font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Technology
                </span>
                , and{" "}
                <span 
                  className="font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Scalable Digital Solutions
                </span>
              </p>
            </div>

            {/* GET IN TOUCH Button */}
            <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center lg:justify-start">
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 text-[#0d9488] hover:text-[#0f766e] font-semibold text-sm sm:text-base tracking-wider transition-colors group"
              >
                <span className="border-b-2 border-[#0d9488] pb-1">GET IN TOUCH</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Service Cards Carousel */}
          <div 
            ref={cardsRef}
            className={`lg:col-span-7 relative transform transition-all duration-1000 delay-500 ${
              cardsVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-16"
            }`}
          >
            {/* Cards Grid - 2 cols mobile, 3 cols desktop */}
            <div 
              className={`grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 transition-all duration-500 ease-out ${
                isAnimating 
                  ? `opacity-0 ${slideDirection === "right" ? "-translate-x-8" : "translate-x-8"}` 
                  : "opacity-100 translate-x-0"
              }`}
            >
              {visibleCards.map((card, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[200px] group cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] shadow-lg"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} group-hover:opacity-50 transition-opacity duration-300`} />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  {/* Title */}
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex items-start">
                    <h4 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-tight drop-shadow-lg">
                      {card.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-between mt-6">
              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      index === currentIndex 
                        ? "bg-orange-500 w-6" 
                        : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 active:scale-95 transition-all duration-300 group"
                  aria-label="Previous services"
                >
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-0.5 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 active:scale-95 transition-all duration-300 group"
                  aria-label="Next services"
                >
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-0.5 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <div 
            className={`relative transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#e8f4f8] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#e8f4f8] to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div
              ref={techScrollRef}
              className="flex gap-12 sm:gap-16 md:gap-20 overflow-x-hidden pt-2"
            >
              {duplicatedStacks.map((tech, index) => (
                <div
                  key={`${tech.id}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative flex items-center justify-center">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
