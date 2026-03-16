"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-[#1a1a2e] pt-28 pb-16 overflow-hidden">
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span className="text-white">Careers</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Join Our Team
              </h1>
              <p className="text-white/70 leading-relaxed">
                We're looking for people who want to build great software and grow with us. If that sounds like you, let's talk.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <span className="inline-block bg-[#262b3f]/10 text-[#262b3f] text-sm font-semibold px-4 py-2 rounded-full mb-4">Open Positions</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">Current Openings</h2>
            </div>

            {/* No Positions Message */}
            <div className="max-w-2xl">
              <div className="bg-[#f8f9fa] rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
                  No open positions right now
                </h3>
                <p className="text-gray-600 mb-6">
                  We don't have any roles open at the moment, but we're always interested in meeting talented people. Drop us your resume and we'll reach out when something comes up.
                </p>
                <a
                  href="mailto:careers@weborbitztech.ca"
                  className="inline-flex items-center gap-2 bg-[#262b3f] hover:bg-[#0055FF] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300"
                >
                  Send Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <span className="inline-block bg-[#262b3f]/10 text-[#262b3f] text-sm font-semibold px-4 py-2 rounded-full mb-4">Why Us</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">What you get</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Real projects</h3>
                <p className="text-gray-600 text-sm">Work on actual client projects, not internal tools nobody uses.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Remote-friendly</h3>
                <p className="text-gray-600 text-sm">Work from home or our office. We care about output, not hours at a desk.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">No micromanaging</h3>
                <p className="text-gray-600 text-sm">We hire adults and treat them like adults. You own your work.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Growth</h3>
                <p className="text-gray-600 text-sm">Learn new tech, take on bigger projects, and grow your skills.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 bg-[#1a1a2e]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-to-r from-[#262b3f]/20 to-transparent rounded-2xl p-6 md:p-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Interested?
                </h2>
                <p className="text-white/70 text-sm">
                  Send us your resume. We'll get back to you if there's a fit.
                </p>
              </div>
              <a
                href="mailto:careers@weborbitztech.ca"
                className="inline-flex items-center justify-center gap-2 bg-[#262b3f] hover:bg-[#0055FF] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
