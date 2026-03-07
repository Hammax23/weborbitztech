"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileAccordion(null);
  };

  const toggleMobileAccordion = (menu: string) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* Main Navbar */}
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* Left Section - Logo */}
            <div className="flex items-center z-50">
              <div className="flex flex-col">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Systems Limited"
                    width={180}
                    height={60}
                    className="h-8 sm:h-10 lg:h-12 w-auto brightness-0 invert"
                  />
                </Link>
              </div>
            </div>

            {/* Center Section - Navigation Links (Desktop) */}
            <div className="flex-1 flex justify-center">
              <div className="hidden lg:flex items-center gap-8">
                {/* Services */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-white text-sm font-light hover:text-white/80 transition-colors py-2">
                    WHAT WE DO
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Industries */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("industries")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-white text-sm font-light hover:text-white/80 transition-colors py-2">
                    WHAT WE HELP
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Blog */}
                <Link href="#" className="text-white text-sm font-light hover:text-white/80 transition-colors py-2">
                  BLOG
                </Link>

                {/* About */}
                <Link href="#" className="text-white text-sm font-light hover:text-white/80 transition-colors py-2">
                  ABOUT
                </Link>
              </div>
            </div>

            {/* Right Section (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="#" className="text-white text-sm font-light hover:text-white/80 transition-colors">
                Careers
              </Link>

              {/* Let's Talk Business Button */}
              <button className="border border-white text-white px-6 py-2 text-sm font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                LET&apos;S TALK BUSINESS
              </button>

              {/* Search Icon */}
              <button className="text-white hover:text-white/80 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Globe Icon */}
              <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white z-50 p-2 -mr-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-40 lg:hidden transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto pt-20 pb-8 px-6">
          {/* Mobile Navigation Links */}
          <nav className="space-y-1">
            {/* WHAT WE DO Accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobileAccordion('services')}
                className="w-full flex items-center justify-between py-4 text-white text-lg font-light tracking-wide"
              >
                WHAT WE DO
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-300 ${mobileAccordion === 'services' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'services' ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
                <div className="pl-4 space-y-3">
                  <p className="text-orange-400 text-sm font-medium mb-2">Digital</p>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Digital Consulting & Strategy</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Digital Commerce</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Business Applications</Link>
                  <p className="text-orange-400 text-sm font-medium mt-4 mb-2">Data & Analytics</p>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Data Modernization</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Advanced Analytics</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Generative AI</Link>
                  <p className="text-orange-400 text-sm font-medium mt-4 mb-2">Cloud</p>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Cloud Operations & Migration</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Managed Services</Link>
                </div>
              </div>
            </div>

            {/* WHAT WE HELP Accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobileAccordion('industries')}
                className="w-full flex items-center justify-between py-4 text-white text-lg font-light tracking-wide"
              >
                WHAT WE HELP
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-300 ${mobileAccordion === 'industries' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'industries' ? 'max-h-[400px] pb-4' : 'max-h-0'}`}>
                <div className="pl-4 space-y-3">
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Banking & Financial Services</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Insurance</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Healthcare</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Retail & E-commerce</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Manufacturing</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Telecommunications</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Energy & Utilities</Link>
                  <Link href="#" onClick={toggleMobileMenu} className="block text-white/70 text-sm hover:text-orange-400 transition-colors">Government</Link>
                </div>
              </div>
            </div>

            {/* Simple Links */}
            <Link 
              href="#" 
              onClick={toggleMobileMenu}
              className="block py-4 text-white text-lg font-light tracking-wide border-b border-white/10 hover:text-orange-400 transition-colors"
            >
              BLOG
            </Link>

            <Link 
              href="#" 
              onClick={toggleMobileMenu}
              className="block py-4 text-white text-lg font-light tracking-wide border-b border-white/10 hover:text-orange-400 transition-colors"
            >
              ABOUT
            </Link>

            <Link 
              href="#" 
              onClick={toggleMobileMenu}
              className="block py-4 text-white text-lg font-light tracking-wide border-b border-white/10 hover:text-orange-400 transition-colors"
            >
              CAREERS
            </Link>
          </nav>

          {/* Mobile CTA Button */}
          <div className="mt-8">
            <button 
              onClick={toggleMobileMenu}
              className="w-full border border-white text-white py-4 text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              LET&apos;S TALK BUSINESS
            </button>
          </div>

          {/* Mobile Footer Section */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              {/* Search */}
              <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm">Search</span>
              </button>

              {/* Language */}
              <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-sm">EN</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Dropdown Menus */}
      {/* Services Mega Menu */}
      {activeDropdown === "services" && (
        <div
          className="fixed top-[72px] left-0 right-0 z-40 bg-white shadow-lg"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Featured */}
              <div className="col-span-3 border-r border-gray-200 pr-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WHAT WE DO</h3>
                <div className="mb-4">
                  <Image
                    src="/logo.png"
                    alt="Services"
                    width={200}
                    height={120}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Why data standards matter & why they&apos;re important
                </p>
                <Link href="#" className="text-orange-500 text-sm font-medium hover:text-orange-600 flex items-center gap-1">
                  LEARN MORE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Middle Columns */}
              <div className="col-span-5 grid grid-cols-3 gap-6">
                {/* Digital */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-3">Digital</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Digital Consulting & Strategy <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Digital Commerce <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Business Applications <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>

                {/* Data & Analytics */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-3">Data & Analytics</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Data Modernization <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Advanced Analytics <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Connected Intelligence <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Data Management <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Generative AI <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>

                {/* Cloud */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-3">Cloud</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Cloud Operations & Migration <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Cloud Application Development & Integration <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Managed Services <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>
              </div>

              {/* Right Columns */}
              <div className="col-span-4 grid grid-cols-2 gap-6">
                {/* Column 1 */}
                <div>
                  <Link href="#" className="text-gray-900 font-semibold hover:text-orange-500 block mb-4">Digital Infrastructure Services</Link>
                  <Link href="#" className="text-gray-900 font-semibold hover:text-orange-500 block mb-4">Security</Link>
                  <Link href="#" className="text-gray-900 font-semibold hover:text-orange-500 block">Emerging Technologies</Link>
                </div>

                {/* Column 2 - Business Process Services */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-3">Business Process Services</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Contact Center <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Digital Marketing <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Finance & Accounting <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Staff Augmentation <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Legal Process Outsourcing <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-600 text-sm hover:text-orange-500 flex items-center gap-1">Recruitment Process Outsourcing <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Industries Mega Menu */}
      {activeDropdown === "industries" && (
        <div
          className="fixed top-[72px] left-0 right-0 z-40 bg-white shadow-lg"
          onMouseEnter={() => handleMouseEnter("industries")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-3 border-r border-gray-200 pr-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WHAT WE HELP</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Transforming industries with innovative solutions
                </p>
                <Link href="#" className="text-orange-500 text-sm font-medium hover:text-orange-600 flex items-center gap-1">
                  VIEW ALL
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-4 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Banking & Financial Services <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Insurance <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Healthcare <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Retail & E-commerce <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Manufacturing <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Telecommunications <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Energy & Utilities <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Government <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Education <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Travel & Hospitality <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Media & Entertainment <span className="text-orange-500">→</span></Link></li>
                    <li><Link href="#" className="text-gray-700 text-sm hover:text-orange-500 flex items-center gap-1">Logistics <span className="text-orange-500">→</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  );
}
