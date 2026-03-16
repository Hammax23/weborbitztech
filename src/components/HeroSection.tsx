"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Desktop videos (original quality)
const videos = [
  "/cover1.mp4",
  "/cover2.mp4",
  "/cover3.mp4",
];

// Mobile videos (compressed 480p for instant loading)
const mobileVideos = [
  "/cover1-mobile.mp4",
  "/cover2-mobile.mp4",
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

// Check if mobile on client side
const getIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goToNextVideo = useCallback(() => {
    const maxVideos = isMobile ? mobileVideos.length : videos.length;
    const next = (currentVideo + 1) % maxVideos;
    
    // Prepare next video before transition
    const nextVideoEl = videoRefs.current[next];
    if (nextVideoEl) {
      nextVideoEl.currentTime = 0;
      nextVideoEl.play().catch(() => {});
    }
    
    // Smooth crossfade - update state after brief delay for video to start
    setTimeout(() => {
      setNextVideo(next);
      setCurrentVideo(next);
    }, 50);
  }, [currentVideo, isMobile]);

  // Handle video ended event - with fallback for desktop
  useEffect(() => {
    if (!isReady) return;
    
    const currentVideoEl = videoRefs.current[currentVideo];
    if (!currentVideoEl) return;
    
    let hasTransitioned = false;
    
    const triggerNextVideo = () => {
      if (hasTransitioned) return;
      hasTransitioned = true;
      goToNextVideo();
    };

    const handleEnded = () => {
      triggerNextVideo();
    };

    // Also use timeupdate as fallback for desktop (in case 'ended' doesn't fire)
    const handleTimeUpdate = () => {
      if (!hasTransitioned && currentVideoEl.duration && currentVideoEl.currentTime >= currentVideoEl.duration - 0.3) {
        triggerNextVideo();
      }
    };

    currentVideoEl.addEventListener('ended', handleEnded);
    
    // Add timeupdate fallback only for desktop
    if (!isMobile) {
      currentVideoEl.addEventListener('timeupdate', handleTimeUpdate);
    }
    
    return () => {
      currentVideoEl.removeEventListener('ended', handleEnded);
      if (!isMobile) {
        currentVideoEl.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [currentVideo, goToNextVideo, isReady, isMobile]);

  // Detect mobile device immediately
  useEffect(() => {
    const mobile = getIsMobile();
    setIsMobile(mobile);
    setIsReady(true);
    
    // Initialize videos loaded array
    const videoCount = mobile ? mobileVideos.length : videos.length;
    setVideosLoaded(new Array(videoCount).fill(false));
    
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload and auto-play videos
  useEffect(() => {
    if (!isReady) return;
    
    const videosToUse = isMobile ? mobileVideos : videos;
    
    // Preload all videos via link tags (high priority)
    videosToUse.forEach((src, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      if (index === 0) link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });

    // Setup video elements
    videosToUse.forEach((_, index) => {
      const videoEl = videoRefs.current[index];
      if (videoEl) {
        // Mark as loaded when ready
        const handleLoaded = () => {
          setVideosLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        };
        videoEl.addEventListener('loadeddata', handleLoaded);
        videoEl.addEventListener('canplaythrough', handleLoaded);
        
        // Load video
        videoEl.load();
      }
    });

    // Play first video
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.play().catch(() => {
        // Autoplay blocked - wait for user interaction
        const handleInteraction = () => {
          firstVideo.play().catch(() => {});
          document.removeEventListener('touchstart', handleInteraction);
          document.removeEventListener('click', handleInteraction);
        };
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('click', handleInteraction, { once: true });
      });
    }
  }, [isReady, isMobile]);

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
          videosLoaded[0] ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: 0 }}
      />

      {/* Video Backgrounds - Crossfade Effect */}
      {isReady && (isMobile ? mobileVideos : videos).map((src, index) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[index] = el; }}
          muted
          playsInline
          autoPlay={index === 0}
          loop={false}
          preload="auto"
          poster="/hero-poster.jpg"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            index === currentVideo
              ? "opacity-100 z-[2]"
              : "opacity-0 z-[1]"
          }`}
          style={{ 
            willChange: 'opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <source src={src} type="video/mp4" />
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
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openLetsTalkBusiness'))}
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 text-sm font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              BUILD YOUR PROJECT NOW
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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
