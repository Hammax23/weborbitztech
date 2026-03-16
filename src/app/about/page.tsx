"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologyImpact from "@/components/TechnologyImpact";

export default function AboutPage() {
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
              <span className="text-white">About</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                About Us
              </h1>
              <p className="text-white/70 mb-6 leading-relaxed">
                We build software that works. No fluff, no buzzwords — just clean code and real results for businesses ready to grow.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="inline-block bg-[#262b3f]/10 text-[#262b3f] text-sm font-semibold px-4 py-2 rounded-full mb-4">What We Do</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
                We solve problems with code
              </h2>
              <p className="text-gray-600 mb-4">
                Whether you need a web app, mobile solution, or custom software — we handle everything from planning to launch. Our team writes maintainable code, meets deadlines, and stays in touch throughout the project.
              </p>
              <p className="text-gray-600">
                We work with startups launching their first product and established companies modernizing their systems. The goal is always the same: ship quality software that actually gets used.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <span className="inline-block bg-[#262b3f]/10 text-[#262b3f] text-sm font-semibold px-4 py-2 rounded-full mb-4">How We Work</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">Straightforward process</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">We listen to what you need and figure out the best way to build it.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Planning</h3>
                <p className="text-gray-600 text-sm">Clear scope, realistic timeline, no surprises. You know what you're getting.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Development</h3>
                <p className="text-gray-600 text-sm">Regular updates, working demos, and quick feedback loops throughout.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-transparent hover:border-[#262b3f]/20 transition-all">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Delivery</h3>
                <p className="text-gray-600 text-sm">Launch, handoff, and ongoing support if you need it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Impact Section */}
        <TechnologyImpact />

        {/* CTA Section */}
        <section id="contact" className="py-10 bg-[#1a1a2e]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-to-r from-[#262b3f]/20 to-transparent rounded-2xl p-6 md:p-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Ready To Work Together?
                </h2>
                <p className="text-white/70 text-sm">
                  Let&apos;s discuss how we can help transform your business.
                </p>
              </div>
              <Link
                href="/#get-in-touch"
                className="inline-flex items-center justify-center gap-2 bg-[#262b3f] hover:bg-[#0055FF] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
