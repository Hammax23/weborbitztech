"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  "Remote IT Resources",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AR/VR",
  "Gaming",
  "Cyber Security",
  "Other IT Services",
];

const regions = [
  "Select Region",
  "North America",
  "South America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Africa",
];

const hearAboutUs = [
  "Please Select",
  "Google Search",
  "Social Media",
  "Referral",
  "Event/Conference",
  "Advertisement",
  "Other",
];

export default function GetInTouch() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyUrl: "",
    region: "",
    projectDetails: "",
    hearAbout: "",
  });

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, services: selectedServices });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f9fa] py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Decorative Circle - Top Right */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-20 hidden md:block">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-[#0d9488] relative">
          <div className="absolute -top-1 right-4 w-4 h-4 bg-[#0d9488] rounded-full" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold italic text-[#0d9488] mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone Number*</label>
                <div className="flex items-center border-b border-gray-300">
                  <span className="text-gray-600 pr-2 flex items-center gap-1">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-sm">+1</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(201) 555-0123"
                    className="flex-1 py-2 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Company Name*</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Company URL */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Company URL</label>
                <input
                  type="url"
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Region*</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors bg-transparent appearance-none cursor-pointer"
                  required
                >
                  {regions.map((region) => (
                    <option key={region} value={region === "Select Region" ? "" : region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services Checkboxes */}
              <div>
                <label className="block text-xs text-gray-500 mb-3">Services you are looking for*</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                          selectedServices.includes(service)
                            ? "bg-[#0d9488] border-[#0d9488]"
                            : "border-gray-300 group-hover:border-[#0d9488]"
                        }`}
                      >
                        {selectedServices.includes(service) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="hidden"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Project Details*</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md p-3 focus:border-[#0d9488] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* How did you hear about us */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">How did you hear about us?</label>
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:border-[#0d9488] focus:outline-none transition-colors bg-transparent appearance-none cursor-pointer"
                >
                  {hearAboutUs.map((option) => (
                    <option key={option} value={option === "Please Select" ? "" : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Info Cards */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Global Presence Card */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="text-[#0d9488] mt-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium italic text-[#0d9488]">
                  Global Presence
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We&apos;re across 5 continents, explore our office nearest to you.
              </p>
              <Link
                href="/locations"
                className="inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-medium py-2 px-5 rounded-md transition-colors duration-300"
              >
                Learn more
              </Link>
            </div>

            {/* Global Leaders Card */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="text-[#0d9488] mt-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium italic text-[#0d9488]">
                  Global Leaders
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our capability and competencies are backed by diverse Global leadership.
              </p>
              <Link
                href="/leadership"
                className="inline-block bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-medium py-2 px-5 rounded-md transition-colors duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
