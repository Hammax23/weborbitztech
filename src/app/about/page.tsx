"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Expert Professionals" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "50+", label: "Countries Served" }
];

const values = [
  {
    icon: "innovation",
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
  },
  {
    icon: "excellence",
    title: "Excellence in Delivery",
    description: "Every project receives our full commitment to quality, ensuring exceptional results that exceed expectations."
  },
  {
    icon: "partnership",
    title: "True Partnership",
    description: "We work alongside our clients as strategic partners, invested in their long-term success and growth."
  },
  {
    icon: "integrity",
    title: "Integrity Always",
    description: "Transparency, honesty, and ethical practices are the foundation of everything we do."
  }
];

const timeline = [
  {
    year: "2009",
    title: "The Beginning",
    description: "Founded with a vision to transform businesses through technology innovation."
  },
  {
    year: "2012",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across North America, Europe, and Asia."
  },
  {
    year: "2016",
    title: "Cloud Leadership",
    description: "Became a certified partner for AWS, Azure, and Google Cloud platforms."
  },
  {
    year: "2019",
    title: "AI & Innovation Lab",
    description: "Launched our dedicated AI research lab to drive next-generation solutions."
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Recognized as a top technology partner by leading industry analysts."
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Serving Fortune 500 companies with 500+ professionals worldwide."
  }
];

const leadership = [
  {
    name: "Alexander Mitchell",
    role: "Chief Executive Officer",
    bio: "20+ years leading digital transformation initiatives for Fortune 500 companies.",
    linkedin: "#"
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Former Google engineer with expertise in AI, cloud architecture, and scalable systems.",
    linkedin: "#"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Operating Officer",
    bio: "Operations expert who has scaled technology teams across 3 continents.",
    linkedin: "#"
  },
  {
    name: "Jennifer Williams",
    role: "Chief Product Officer",
    bio: "Product visionary with a track record of launching successful enterprise platforms.",
    linkedin: "#"
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    bio: "Engineering leader passionate about building high-performing technical teams.",
    linkedin: "#"
  },
  {
    name: "Emily Thompson",
    role: "VP of Client Success",
    bio: "Dedicated to ensuring every client achieves measurable business outcomes.",
    linkedin: "#"
  }
];

const certifications = [
  "AWS Advanced Partner",
  "Microsoft Gold Partner",
  "Google Cloud Partner",
  "ISO 27001 Certified",
  "SOC 2 Type II",
  "CMMI Level 5"
];

const ValueIcon = ({ type }: { type: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    innovation: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    ),
    excellence: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    ),
    partnership: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
    integrity: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    )
  };

  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      {icons[type]}
    </svg>
  );
};

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
          
          {/* Animated Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B4FF]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E1FF]/5 rounded-full blur-3xl" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">About</span>
              </div>

              <span className="inline-block px-4 py-2 bg-[#00B4FF]/20 border border-[#00B4FF]/30 rounded-full text-[#00E1FF] text-sm font-medium mb-6">
                Our Story
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Engineering the <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Future</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10">
                We are a global technology company dedicated to transforming businesses through innovative software solutions, strategic consulting, and world-class engineering talent.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-[#00B4FF]/10 rounded-full text-[#00B4FF] text-sm font-medium mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">
                  Empowering Businesses Through <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Technology</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Our mission is to be the trusted technology partner that enables organizations to thrive in the digital age. We combine deep technical expertise with strategic thinking to deliver solutions that drive real business value.
                </p>
                <p className="text-gray-600 text-lg">
                  From startups to Fortune 500 enterprises, we help our clients navigate complexity, accelerate innovation, and achieve sustainable competitive advantages through technology.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/30 to-[#00E1FF]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-32 h-32 mx-auto text-white/20 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      <span className="text-white/40 text-xl font-medium">Innovation at Scale</span>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00B4FF]/20 rounded-2xl blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0055FF]/20 rounded-2xl blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#00B4FF]/10 rounded-full text-[#00B4FF] text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
                What Drives <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Us</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our core values shape every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0055FF] to-[#00B4FF] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ValueIcon type={value.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#00B4FF]/10 rounded-full text-[#00B4FF] text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
                15 Years of <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Growth</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0055FF] via-[#00B4FF] to-[#00E1FF] hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 inline-block">
                        <span className="text-3xl font-bold bg-gradient-to-r from-[#0055FF] to-[#00B4FF] text-transparent bg-clip-text">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-[#1a1a2e] mt-2 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 bg-gradient-to-r from-[#0055FF] to-[#00B4FF] rounded-full ring-4 ring-white shadow-lg z-10" />
                    
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#00B4FF]/10 rounded-full text-[#00B4FF] text-sm font-medium mb-4">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
                Meet Our <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Team</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Experienced leaders driving innovation and excellence across our global operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Avatar placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/30 to-[#00E1FF]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0055FF] to-[#00B4FF] flex items-center justify-center text-white text-3xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1a1a2e] mb-1">{member.name}</h3>
                    <p className="text-[#00B4FF] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center gap-2 text-[#0055FF] hover:text-[#00B4FF] transition-colors text-sm font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Certifications & Partnerships</h3>
              <p className="text-gray-600">Recognized by industry leaders for our excellence</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work <span className="bg-gradient-to-r from-[#0055FF] via-[#00E1FF] to-[#0055FF] text-transparent bg-clip-text">Together</span>?
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Let&apos;s discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#get-in-touch"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0055FF] via-[#00B4FF] to-[#00E1FF] hover:opacity-90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#00B4FF]/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get in Touch
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-white/5"
                >
                  Join Our Team
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
