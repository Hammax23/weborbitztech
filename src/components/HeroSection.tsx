"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const videos = [
  "/cover1.mp4",
  "/cover2.mp4",
  "/cover3.mp4",
];

const slides = [
  {
    heading: "Engineering\nDigital\nExcellence",
    subtext: "Enterprise-grade software solutions that scale with your ambitions. Trusted by Fortune 500 companies worldwide.",
  },
  {
    heading: "Accelerate\nYour Digital\nTransformation",
    subtext: "From strategy to execution, we deliver end-to-end technology solutions that drive measurable business outcomes.",
  },
  {
    heading: "Innovation\nMeets\nExecution",
    subtext: "Cutting-edge AI, Cloud, and DevOps expertise combined with 10+ years of enterprise delivery excellence.",
  },
  {
    heading: "Your Vision\nOur\nExpertise",
    subtext: "Partner with a team that has successfully delivered 500+ projects across Healthcare, Finance, and Technology sectors.",
  },
];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goToNextVideo = useCallback(() => {
    setIsTransitioning(true);
    const next = (currentVideo + 1) % videos.length;
    setNextVideo(next);
    
    // Start transition
    setTimeout(() => {
      setCurrentVideo(next);
      setNextVideo((next + 1) % videos.length);
      setIsTransitioning(false);
      
      // Play the new current video
      const nextVideoEl = videoRefs.current[next];
      if (nextVideoEl) {
        nextVideoEl.currentTime = 0;
        nextVideoEl.play().catch(() => {});
      }
    }, 700); // Transition duration
  }, [currentVideo]);

  // Handle video ended event
  useEffect(() => {
    const currentVideoEl = videoRefs.current[currentVideo];
    
    const handleEnded = () => {
      goToNextVideo();
    };

    if (currentVideoEl) {
      currentVideoEl.addEventListener('ended', handleEnded);
      return () => {
        currentVideoEl.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentVideo, goToNextVideo]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play first video and preload others
  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      // Add event listeners for video loading
      firstVideo.addEventListener('loadeddata', () => setVideoLoaded(true));
      firstVideo.addEventListener('canplay', () => setVideoLoaded(true));
      
      // Force play with user interaction simulation for mobile
      const playVideo = () => {
        firstVideo.play().catch((e) => {
          console.log('Video autoplay prevented:', e);
          // If autoplay fails, still show the video frame
          firstVideo.load();
        });
      };
      
      playVideo();
      
      // Also try to play on first user interaction (for strict mobile browsers)
      const handleInteraction = () => {
        playVideo();
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
      document.addEventListener('touchstart', handleInteraction, { once: true });
      document.addEventListener('click', handleInteraction, { once: true });
    }

    // Preload other videos only on desktop
    if (!isMobile) {
      videos.forEach((src, index) => {
        if (index > 0) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'video';
          link.href = src;
          document.head.appendChild(link);
        }
      });
    }
  }, [isMobile]);

  // Text slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fallback Background for Mobile / Video Loading */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-opacity duration-500 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: 0 }}
      />

      {/* Video Backgrounds */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[index] = el; }}
          muted
          playsInline
          autoPlay={index === 0}
          loop={isMobile}
          preload={index === 0 ? "auto" : (isMobile ? "none" : "metadata")}
          poster="/hero-poster.jpg"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            isMobile 
              ? index === 0 ? 'translate-x-0 z-[1]' : 'hidden'
              : index === currentVideo
                ? isTransitioning
                  ? "-translate-x-full"
                  : "translate-x-0 z-[1]"
                : index === nextVideo && isTransitioning
                ? "translate-x-0 z-[2]"
                : "translate-x-full z-0"
          }`}
          style={{ 
            WebkitTransform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <source src={isMobile ? "/cover1.mp4" : src} type="video/mp4" />
        </video>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[3]" />

      {/* Content */}
      <div className="relative z-[10] h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              {slides[currentSlide].heading.split("\n").map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p className="text-white/90 text-lg md:text-xl font-light mb-8 max-w-lg">
              {slides[currentSlide].subtext}
            </p>

            {/* CTA Button */}
            <button className="border border-white text-white px-8 py-3 text-sm font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Accessibility Icon (Bottom Left) */}
      <button className="absolute left-4 md:left-6 bottom-6 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
