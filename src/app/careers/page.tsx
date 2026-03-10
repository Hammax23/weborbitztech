"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Toronto, Canada",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies.",
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Toronto, Canada",
    type: "Full-time",
    experience: "3+ years",
    description: "Create intuitive and visually stunning user experiences for web and mobile applications.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain CI/CD pipelines, automate infrastructure, and ensure system reliability.",
  },
  {
    id: 5,
    title: "AI/ML Engineer",
    department: "AI & Innovation",
    location: "Toronto, Canada",
    type: "Full-time",
    experience: "4+ years",
    description: "Develop machine learning models and AI solutions for enterprise business applications.",
  },
  {
    id: 6,
    title: "Project Manager",
    department: "Operations",
    location: "Toronto, Canada",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead cross-functional teams and deliver complex technology projects on time and budget.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with performance bonuses and equity options.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Learning & Development",
    description: "Continuous learning opportunities, certifications, and conference sponsorships.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Remote Flexibility",
    description: "Hybrid and fully remote options with flexible working hours to suit your lifestyle.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness programs.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Innovation Time",
    description: "Dedicated time for personal projects and exploring new technologies.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Team Events",
    description: "Regular team building activities, retreats, and social events.",
  },
];

const values = [
  {
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
  },
  {
    title: "Client Success",
    description: "Our clients' success is our success. We go above and beyond to deliver exceptional results.",
  },
  {
    title: "Continuous Growth",
    description: "We invest in our people and foster an environment of continuous learning and development.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives to achieve greatness.",
  },
];

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const heroRef = useRef<HTMLElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const departments = ["All", ...Array.from(new Set(jobOpenings.map((job) => job.department)))];
  const filteredJobs = filter === "All" ? jobOpenings : jobOpenings.filter((job) => job.department === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0d9488]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0d9488]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0d9488]/5 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="inline-block px-4 py-2 bg-[#0d9488]/20 border border-[#0d9488]/30 rounded-full text-[#0d9488] text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build the <span className="text-[#0d9488]">Future</span> with Us
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10">
              Join a team of passionate innovators, creative thinkers, and technology experts. 
              Together, we're transforming businesses and shaping the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#openings"
                className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0d9488]/30"
              >
                View Open Positions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#culture"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-white/5"
              >
                Our Culture
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { number: "100+", label: "Team Members" },
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Employee Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>


      {/* Open Positions Section */}
      <section id="openings" className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              Open <span className="text-[#0d9488]">Positions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Currently, we don't have any open positions available. Please keep visiting our website regularly to stay updated on new opportunities.
            </p>
          </div>

          {/* No Positions Available Message */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
              <div className="w-20 h-20 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-4">
                No Current Openings
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We currently don't have any open positions, but we're always growing! 
                Keep checking back regularly as new opportunities become available. 
                We'd love to have talented individuals like you join our team in the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@weborbitztech.ca"
                  className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Your Resume
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-[#0d9488] text-gray-700 hover:text-[#0d9488] px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 md:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-[#0d9488]">Join Us</span>?
            </h2>
            <p className="text-white/70 mb-10">
              Don't see a perfect match? We're always looking for talented individuals. 
              Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@weborbitztech.ca"
                className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0d9488]/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Your Resume
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-white/5"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
