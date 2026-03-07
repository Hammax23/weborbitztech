"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  "Web Development",
  "Custom Software Development",
  "Mobile App Development",
  "Cloud Solutions",
  "AI/ML Solutions",
  "DevOps & CI/CD",
  "UI/UX Design",
  "E-commerce Solutions",
  "SEO/Digital Marketing",
  "Maintenance & Support",
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
      {/* Floating Contact Icons Animation - Top Right */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-24 hidden md:flex flex-col gap-4 items-end">
        {/* Email Icon - floating up and down */}
        <div className="animate-bounce" style={{ animationDuration: '2s' }}>
          <div className="w-14 h-14 bg-[#0d9488]/10 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
        </div>
        
        {/* Phone Icon - pulse effect */}
        <div className="animate-pulse mr-8">
          <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
        </div>
        
        {/* Chat Icon - floating with delay */}
        <div className="animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
          <div className="w-16 h-16 bg-[#0d9488]/10 rounded-full flex items-center justify-center mr-4">
            <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </div>
        </div>
        
        {/* Connection dots animation */}
        <div className="absolute top-12 right-16 flex gap-1">
          <div className="w-2 h-2 bg-[#0d9488] rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
          <div className="w-2 h-2 bg-[#0d9488] rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
          <div className="w-2 h-2 bg-[#0d9488] rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.6s' }} />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold leading-tight tracking-tight text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[#b45da3]">G</span>
          <span className="text-gray-900">et</span>
          <span className="text-[#0d9488]"> I</span>
          <span className="text-gray-900">n</span>
          <span className="text-[#e91e63]"> T</span>
          <span className="text-gray-900">ouch</span>
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
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors text-gray-900 bg-transparent"
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
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors text-gray-900 bg-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone Number*</label>
                <div className="flex items-center border-b border-gray-300">
                  <span className="text-gray-600 pr-2 flex items-center gap-2">
                    <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-6 h-4 object-cover rounded-sm" />
                    <span className="text-sm font-medium">+1</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(201) 555-0123"
                    className="flex-1 py-2 focus:outline-none text-gray-900 bg-transparent"
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
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors text-gray-900 bg-transparent"
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
                  className="w-full border-b border-gray-300 py-2 focus:border-[#0d9488] focus:outline-none transition-colors text-gray-900 bg-transparent"
                />
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
                  className="w-full border border-gray-300 rounded-md p-3 focus:border-[#0d9488] focus:outline-none transition-colors resize-none text-gray-900 bg-white"
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
                  className="w-full border border-gray-300 rounded-md p-3 focus:border-[#0d9488] focus:outline-none transition-colors bg-white appearance-none cursor-pointer text-gray-900"
                >
                  {hearAboutUs.map((option) => (
                    <option key={option} value={option === "Please Select" ? "" : option} className="text-gray-900 bg-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="mt-0.5">
                    <input
                      type="checkbox"
                      name="agreeToUpdates"
                      className="w-4 h-4 border-2 border-gray-300 rounded accent-[#0d9488] cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed">
                    I agree to receive email and SMS updates about my quote request.
                  </span>
                </label>
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
