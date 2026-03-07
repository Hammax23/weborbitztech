"use client";

import { useState } from "react";

const regions = [
  "Select Region",
  "North America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Africa",
  "South America",
];

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

const jobOptions = [
  "Please Select",
  "Yes",
  "No",
];

export default function LetsTalkBusiness() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "+1",
    phoneNumber: "",
    companyName: "",
    companyUrl: "",
    services: [] as string[],
    projectDetails: "",
    hearAbout: "",
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Side Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#0d9488] hover:bg-[#0f766e] text-white py-6 px-3 rounded-l-lg shadow-lg transition-all duration-300 hover:px-4 group"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="text-sm font-semibold tracking-wider whitespace-nowrap">
          Let&apos;s Talk Business
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-lg bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Let&apos;s Talk Business</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="h-[calc(100%-80px)] overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent outline-none transition-all text-gray-900 bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent outline-none transition-all text-gray-900 bg-white"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg bg-gray-50">
                  <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-6 h-4 object-cover rounded-sm" />
                  <span className="text-sm font-medium text-gray-900">+1</span>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="(201) 555-0123"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent outline-none transition-all text-gray-900 bg-white"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent outline-none transition-all text-gray-900 bg-white"
              />
            </div>

            {/* Company URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company URL
              </label>
              <input
                type="url"
                value={formData.companyUrl}
                onChange={(e) => setFormData({ ...formData, companyUrl: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent outline-none transition-all text-gray-900 bg-white"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Services you are looking for<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                        formData.services.includes(service)
                          ? "bg-[#0d9488] border-[#0d9488]"
                          : "border-gray-300 group-hover:border-[#0d9488]"
                      }`}
                    >
                      {formData.services.includes(service) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Details<span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent outline-none transition-all resize-none text-gray-900 bg-white"
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                value={formData.hearAbout || ""}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent outline-none transition-all bg-white cursor-pointer text-gray-900"
              >
                <option value="" className="text-gray-900 bg-white">Please Select</option>
                <option value="Google Search" className="text-gray-900 bg-white">Google Search</option>
                <option value="Social Media" className="text-gray-900 bg-white">Social Media</option>
                <option value="Referral" className="text-gray-900 bg-white">Referral</option>
                <option value="Event/Conference" className="text-gray-900 bg-white">Event/Conference</option>
                <option value="Advertisement" className="text-gray-900 bg-white">Advertisement</option>
                <option value="Other" className="text-gray-900 bg-white">Other</option>
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
              className="w-full py-4 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
