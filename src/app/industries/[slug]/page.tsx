"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Industries Data
const industriesData: { [key: string]: IndustryData } = {
  "healthcare": {
    title: "Healthcare & Pharmaceuticals",
    subtitle: "Driving Healthcare Innovation with Scalable Solutions",
    description: "In today's evolving healthcare landscape, providers need technology solutions that are flexible, scalable, and capable of meeting the demands of modern healthcare. We empower healthcare organizations to deliver exceptional care by integrating innovative technology that enhances operational efficiency, streamlines processes, and improves patient outcomes.",
    heroStats: [
      { value: "50+", label: "Healthcare Projects" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "HIPAA", label: "Compliant" },
      { value: "24/7", label: "Support" }
    ],
    challenges: [
      { title: "Access to Care", description: "Extend reach through telehealth and remote patient monitoring solutions, making healthcare accessible anytime, anywhere." },
      { title: "Patient Experience", description: "Deliver intuitive, user-centered digital health experiences that patients expect and trust." },
      { title: "Cost Reduction", description: "Drive operational efficiency and reduce costs by optimizing workflows with AI-driven insights and automation." },
      { title: "Digital Transformation", description: "Embrace the future of healthcare with cloud integration, health information systems, and hospital information systems." },
      { title: "Patient Engagement", description: "Keep patients connected and engaged with mHealth applications and patient-centric tools that foster trust." },
      { title: "Compliance", description: "Ensure data protection with cybersecurity in healthcare and HIPAA/GDPR-compliant systems." }
    ],
    services: [
      { title: "Health Experience Platform", description: "An integrated solution tailored for healthcare providers to drive smarter patient acquisition, increase retention, and improve patient experience through seamless, multi-channel communication." },
      { title: "Telehealth & Telemedicine", description: "Deliver quality care remotely with virtual care models that ensure secure, compliant interactions, expanding access to treatment for patients wherever they are." },
      { title: "Healthcare Software Development", description: "Customized healthcare software solutions designed to integrate with your existing workflows, meeting your unique organizational needs and enhancing operational efficiency." },
      { title: "Patient Management Systems", description: "Comprehensive solutions for the management of EHR and EMR, appointments, and patient communication, making it easier to deliver timely, personalized care." },
      { title: "AI-Driven Analytics", description: "Leverage AI in healthcare for actionable insights from patient data, enabling informed decision-making and driving improved patient outcomes." },
      { title: "Cloud Healthcare Solutions", description: "Secure, scalable cloud services designed for healthcare, streamlining medical operations, enhancing patient data management, and ensuring regulatory compliance." }
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Azure", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "HL7 FHIR"]
  },
  "finance-banking": {
    title: "Finance & Banking",
    subtitle: "Secure & Scalable Financial Technology Solutions",
    description: "The financial services industry demands precision, security, and innovation. We deliver cutting-edge fintech solutions that help banks, insurance companies, and financial institutions modernize their operations, enhance customer experiences, and maintain regulatory compliance.",
    heroStats: [
      { value: "100+", label: "Fintech Projects" },
      { value: "PCI DSS", label: "Compliant" },
      { value: "$500M+", label: "Transactions Processed" },
      { value: "99.99%", label: "Uptime" }
    ],
    challenges: [
      { title: "Digital Banking", description: "Transform traditional banking with mobile-first digital experiences that meet modern customer expectations." },
      { title: "Security & Compliance", description: "Implement robust security measures and maintain compliance with PCI DSS, SOX, and other regulations." },
      { title: "Real-time Processing", description: "Enable instant transactions and real-time data processing for seamless financial operations." },
      { title: "Risk Management", description: "Leverage AI and analytics for fraud detection, risk assessment, and predictive modeling." },
      { title: "Customer Experience", description: "Create personalized, omnichannel experiences that drive customer loyalty and engagement." },
      { title: "Legacy Modernization", description: "Migrate legacy systems to modern, cloud-native architectures without disrupting operations." }
    ],
    services: [
      { title: "Digital Banking Platforms", description: "End-to-end digital banking solutions including mobile banking apps, online portals, and omnichannel customer experiences." },
      { title: "Payment Solutions", description: "Secure payment processing systems, payment gateways, and digital wallet integrations for seamless transactions." },
      { title: "Risk & Compliance Systems", description: "Automated compliance monitoring, KYC/AML solutions, and regulatory reporting platforms." },
      { title: "Trading Platforms", description: "High-performance trading systems with real-time market data, analytics, and algorithmic trading capabilities." },
      { title: "Insurance Technology", description: "Claims management, policy administration, and customer portal solutions for insurance providers." },
      { title: "Blockchain & DeFi", description: "Decentralized finance solutions, smart contracts, and blockchain-based financial applications." }
    ],
    technologies: ["Java", "Python", "React", "Angular", "AWS", "Azure", "Kafka", "Redis", "PostgreSQL", "Blockchain"]
  },
  "ecommerce-retail": {
    title: "E-commerce & Retail",
    subtitle: "Transform Retail with Seamless Digital Experiences",
    description: "The retail landscape is evolving rapidly. We help retailers and e-commerce businesses create compelling shopping experiences, optimize operations, and drive growth through innovative technology solutions that connect with customers across all channels.",
    heroStats: [
      { value: "200+", label: "E-commerce Projects" },
      { value: "$1B+", label: "GMV Processed" },
      { value: "35%", label: "Avg. Conversion Lift" },
      { value: "99.9%", label: "Uptime" }
    ],
    challenges: [
      { title: "Omnichannel Experience", description: "Deliver consistent, seamless shopping experiences across web, mobile, and physical stores." },
      { title: "Personalization", description: "Use AI-driven recommendations and personalized content to increase conversions and customer loyalty." },
      { title: "Inventory Management", description: "Optimize inventory across channels with real-time visibility and demand forecasting." },
      { title: "Customer Engagement", description: "Build lasting relationships through loyalty programs, targeted marketing, and exceptional service." },
      { title: "Scalability", description: "Handle traffic spikes during peak seasons without compromising performance or user experience." },
      { title: "Analytics & Insights", description: "Leverage data analytics to understand customer behavior and make informed business decisions." }
    ],
    services: [
      { title: "E-commerce Platforms", description: "Custom e-commerce solutions on Shopify, Magento, WooCommerce, or headless commerce architectures." },
      { title: "Mobile Commerce", description: "Native and cross-platform mobile shopping apps with seamless checkout and payment integration." },
      { title: "POS & Retail Systems", description: "Modern point-of-sale solutions that integrate with your e-commerce and inventory systems." },
      { title: "Marketplace Development", description: "Multi-vendor marketplace platforms with seller management, commission handling, and analytics." },
      { title: "Inventory & Order Management", description: "Real-time inventory tracking, order fulfillment automation, and supply chain optimization." },
      { title: "Customer Analytics", description: "Advanced analytics platforms for customer insights, behavior analysis, and predictive modeling." }
    ],
    technologies: ["Shopify", "Magento", "React", "Next.js", "Node.js", "AWS", "Stripe", "Elasticsearch", "Redis", "GraphQL"]
  },
  "education": {
    title: "Education & E-learning",
    subtitle: "Transforming Education Through Technology",
    description: "Education is undergoing a digital revolution. We help educational institutions, EdTech startups, and corporate training programs create engaging learning experiences that empower students and educators with innovative technology solutions.",
    heroStats: [
      { value: "100+", label: "EdTech Projects" },
      { value: "5M+", label: "Students Reached" },
      { value: "50+", label: "Institutions Served" },
      { value: "40%", label: "Engagement Increase" }
    ],
    challenges: [
      { title: "Remote Learning", description: "Enable effective distance learning with virtual classrooms, video conferencing, and collaboration tools." },
      { title: "Student Engagement", description: "Create interactive, gamified learning experiences that keep students motivated and engaged." },
      { title: "Accessibility", description: "Ensure learning platforms are accessible to all students, including those with disabilities." },
      { title: "Assessment & Analytics", description: "Track student progress with comprehensive analytics and adaptive assessment tools." },
      { title: "Content Management", description: "Manage and deliver educational content efficiently across multiple formats and devices." },
      { title: "Administrative Efficiency", description: "Streamline administrative tasks with automated systems for enrollment, scheduling, and reporting." }
    ],
    services: [
      { title: "Learning Management Systems", description: "Custom LMS platforms with course management, progress tracking, and certification capabilities." },
      { title: "Virtual Classroom Solutions", description: "Interactive virtual learning environments with video, whiteboarding, and real-time collaboration." },
      { title: "Student Information Systems", description: "Comprehensive SIS platforms for enrollment, grades, attendance, and student records management." },
      { title: "Mobile Learning Apps", description: "Native mobile applications for on-the-go learning with offline access and push notifications." },
      { title: "Assessment Platforms", description: "Online testing and assessment tools with proctoring, analytics, and adaptive questioning." },
      { title: "Corporate Training Solutions", description: "Enterprise learning platforms for employee training, compliance, and skill development." }
    ],
    technologies: ["React", "React Native", "Node.js", "Python", "AWS", "WebRTC", "MongoDB", "PostgreSQL", "Canvas API", "SCORM"]
  },
  "real-estate": {
    title: "Real Estate & Property",
    subtitle: "Digital Solutions for Modern Real Estate",
    description: "The real estate industry is embracing digital transformation. We help real estate companies, property managers, and proptech startups leverage technology to streamline operations, enhance customer experiences, and drive growth in a competitive market.",
    heroStats: [
      { value: "75+", label: "PropTech Projects" },
      { value: "$2B+", label: "Properties Managed" },
      { value: "30%", label: "Efficiency Gain" },
      { value: "24/7", label: "Support" }
    ],
    challenges: [
      { title: "Property Discovery", description: "Help buyers and renters find their perfect property with intelligent search and recommendations." },
      { title: "Virtual Experiences", description: "Enable remote property viewing with 3D tours, VR experiences, and high-quality visuals." },
      { title: "Transaction Management", description: "Streamline the buying, selling, and leasing process with digital document management and e-signatures." },
      { title: "Property Management", description: "Automate maintenance requests, rent collection, and tenant communications." },
      { title: "Market Intelligence", description: "Provide accurate property valuations and market insights with AI-powered analytics." },
      { title: "Lead Management", description: "Convert more leads with CRM systems designed specifically for real estate professionals." }
    ],
    services: [
      { title: "Property Listing Platforms", description: "MLS-integrated platforms with advanced search, filters, and property comparison features." },
      { title: "Property Management Software", description: "Comprehensive solutions for lease management, maintenance tracking, and tenant portals." },
      { title: "Virtual Tour Solutions", description: "3D virtual tours, VR experiences, and interactive floor plans for remote property viewing." },
      { title: "Real Estate CRM", description: "Lead management, pipeline tracking, and automated follow-up systems for agents and brokers." },
      { title: "Transaction Platforms", description: "Digital closing platforms with document management, e-signatures, and compliance tracking." },
      { title: "Investment Analytics", description: "ROI calculators, market analysis tools, and investment portfolio management platforms." }
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Three.js", "MongoDB", "PostgreSQL", "Mapbox", "DocuSign API", "Twilio"]
  },
  "logistics": {
    title: "Logistics & Transportation",
    subtitle: "Intelligent Solutions for Supply Chain Excellence",
    description: "The logistics industry demands efficiency, visibility, and reliability. We deliver technology solutions that optimize supply chain operations, improve fleet management, and provide real-time visibility across your entire logistics network.",
    heroStats: [
      { value: "80+", label: "Logistics Projects" },
      { value: "1M+", label: "Shipments Tracked" },
      { value: "25%", label: "Cost Reduction" },
      { value: "99.9%", label: "Accuracy" }
    ],
    challenges: [
      { title: "Real-time Visibility", description: "Track shipments, vehicles, and inventory in real-time across your entire supply chain network." },
      { title: "Route Optimization", description: "Reduce fuel costs and delivery times with AI-powered route planning and optimization." },
      { title: "Warehouse Efficiency", description: "Optimize warehouse operations with automation, robotics integration, and smart inventory management." },
      { title: "Last-mile Delivery", description: "Improve customer satisfaction with efficient last-mile delivery solutions and tracking." },
      { title: "Compliance", description: "Maintain compliance with transportation regulations, customs requirements, and safety standards." },
      { title: "Predictive Analytics", description: "Anticipate demand, prevent disruptions, and optimize capacity with predictive analytics." }
    ],
    services: [
      { title: "Fleet Management Systems", description: "GPS tracking, driver management, maintenance scheduling, and fuel monitoring solutions." },
      { title: "Warehouse Management", description: "WMS platforms with inventory tracking, pick-pack-ship automation, and barcode/RFID integration." },
      { title: "Transportation Management", description: "TMS solutions for carrier management, freight optimization, and shipment tracking." },
      { title: "Route Optimization", description: "AI-powered routing algorithms that minimize costs while meeting delivery windows." },
      { title: "Supply Chain Visibility", description: "End-to-end visibility platforms that track goods from origin to destination." },
      { title: "Delivery Apps", description: "Customer-facing and driver apps for order tracking, proof of delivery, and communication." }
    ],
    technologies: ["React", "React Native", "Node.js", "Python", "AWS", "IoT", "GPS APIs", "PostgreSQL", "Redis", "Machine Learning"]
  },
  "entertainment-media": {
    title: "Entertainment & Media",
    subtitle: "Engaging Digital Experiences for Modern Audiences",
    description: "The entertainment and media industry is being transformed by digital technology. We help media companies, streaming platforms, and content creators deliver engaging experiences that captivate audiences and drive content monetization.",
    heroStats: [
      { value: "60+", label: "Media Projects" },
      { value: "10M+", label: "Users Served" },
      { value: "4K/HDR", label: "Streaming Quality" },
      { value: "99.99%", label: "Uptime" }
    ],
    challenges: [
      { title: "Content Delivery", description: "Deliver high-quality video and audio content to global audiences with minimal latency." },
      { title: "User Engagement", description: "Keep audiences engaged with personalized recommendations and interactive features." },
      { title: "Monetization", description: "Implement effective monetization strategies including subscriptions, ads, and pay-per-view." },
      { title: "Content Protection", description: "Protect valuable content with DRM, watermarking, and anti-piracy measures." },
      { title: "Multi-platform Support", description: "Reach audiences across web, mobile, smart TVs, and gaming consoles." },
      { title: "Live Streaming", description: "Enable real-time live streaming for events, sports, and interactive broadcasts." }
    ],
    services: [
      { title: "OTT Streaming Platforms", description: "End-to-end video streaming solutions with adaptive bitrate, offline viewing, and multi-device support." },
      { title: "Content Management Systems", description: "Media asset management, metadata tagging, and content workflow automation." },
      { title: "Live Streaming Solutions", description: "Low-latency live streaming infrastructure for events, sports, and interactive broadcasts." },
      { title: "Recommendation Engines", description: "AI-powered content discovery and personalized recommendations to increase engagement." },
      { title: "Ad Tech Solutions", description: "Programmatic advertising, ad insertion, and campaign management platforms." },
      { title: "Gaming Platforms", description: "Online gaming platforms, social features, and in-game economy management." }
    ],
    technologies: ["React", "Node.js", "Python", "AWS MediaServices", "CDN", "HLS/DASH", "FFmpeg", "Redis", "Elasticsearch", "Machine Learning"]
  },
  "manufacturing": {
    title: "Manufacturing & Industry",
    subtitle: "Smart Manufacturing for the Digital Age",
    description: "Industry 4.0 is transforming manufacturing. We help manufacturers leverage IoT, AI, and automation to optimize production, improve quality, and drive operational excellence across their facilities.",
    heroStats: [
      { value: "50+", label: "Manufacturing Projects" },
      { value: "30%", label: "Productivity Gain" },
      { value: "50%", label: "Downtime Reduction" },
      { value: "IoT", label: "Enabled" }
    ],
    challenges: [
      { title: "Production Optimization", description: "Maximize throughput and minimize waste with data-driven production planning and scheduling." },
      { title: "Quality Control", description: "Implement automated quality inspection using computer vision and machine learning." },
      { title: "Predictive Maintenance", description: "Prevent equipment failures and reduce downtime with IoT sensors and predictive analytics." },
      { title: "Supply Chain Integration", description: "Connect manufacturing with suppliers and customers for seamless end-to-end visibility." },
      { title: "Worker Safety", description: "Enhance workplace safety with monitoring systems, alerts, and compliance tracking." },
      { title: "Energy Efficiency", description: "Optimize energy consumption and reduce environmental impact with smart monitoring." }
    ],
    services: [
      { title: "MES & ERP Systems", description: "Manufacturing execution systems and ERP integration for end-to-end production management." },
      { title: "IoT & Sensor Integration", description: "Connect machines and equipment with IoT sensors for real-time monitoring and data collection." },
      { title: "Predictive Maintenance", description: "AI-powered maintenance scheduling based on equipment condition and usage patterns." },
      { title: "Quality Management", description: "Automated inspection, defect detection, and quality analytics platforms." },
      { title: "Production Planning", description: "Advanced planning and scheduling systems that optimize resource utilization." },
      { title: "Digital Twin Solutions", description: "Virtual replicas of production systems for simulation, optimization, and training." }
    ],
    technologies: ["Python", "Node.js", "React", "AWS IoT", "Azure IoT", "MQTT", "TimescaleDB", "TensorFlow", "Computer Vision", "Edge Computing"]
  },
  "hospitality-travel": {
    title: "Hospitality & Travel",
    subtitle: "Elevating Guest Experiences Through Technology",
    description: "The hospitality and travel industry thrives on exceptional experiences. We help hotels, restaurants, airlines, and travel companies leverage technology to delight guests, streamline operations, and drive revenue growth.",
    heroStats: [
      { value: "70+", label: "Hospitality Projects" },
      { value: "5M+", label: "Bookings Processed" },
      { value: "40%", label: "Revenue Increase" },
      { value: "4.8★", label: "Avg. Guest Rating" }
    ],
    challenges: [
      { title: "Seamless Booking", description: "Provide frictionless booking experiences across web, mobile, and third-party channels." },
      { title: "Guest Experience", description: "Personalize every touchpoint of the guest journey from booking to check-out." },
      { title: "Revenue Management", description: "Optimize pricing and inventory with dynamic revenue management strategies." },
      { title: "Operational Efficiency", description: "Streamline housekeeping, maintenance, and staff management operations." },
      { title: "Loyalty & Engagement", description: "Build lasting relationships with loyalty programs and personalized marketing." },
      { title: "Multi-property Management", description: "Manage multiple properties, brands, or locations from a centralized platform." }
    ],
    services: [
      { title: "Booking & Reservation Systems", description: "Central reservation systems with real-time availability, rate management, and channel integration." },
      { title: "Property Management Systems", description: "Comprehensive PMS solutions for front desk, housekeeping, and guest services." },
      { title: "Guest Experience Platforms", description: "Mobile apps and digital concierge services for personalized guest experiences." },
      { title: "Revenue Management", description: "AI-powered pricing optimization and demand forecasting solutions." },
      { title: "Restaurant & POS Systems", description: "Table management, ordering, and payment solutions for food service operations." },
      { title: "Travel Booking Platforms", description: "OTA and travel agency platforms with flights, hotels, and package booking capabilities." }
    ],
    technologies: ["React", "React Native", "Node.js", "Python", "AWS", "GDS Integration", "Stripe", "PostgreSQL", "Redis", "Machine Learning"]
  },
  "telecommunications": {
    title: "Telecommunications",
    subtitle: "Next-Generation Connectivity Solutions",
    description: "The telecommunications industry is at the forefront of digital innovation. We help telecom operators and service providers modernize their infrastructure, enhance customer experiences, and capitalize on emerging technologies like 5G and IoT.",
    heroStats: [
      { value: "40+", label: "Telecom Projects" },
      { value: "100M+", label: "Subscribers Served" },
      { value: "5G", label: "Ready Solutions" },
      { value: "99.999%", label: "Network Uptime" }
    ],
    challenges: [
      { title: "Network Modernization", description: "Upgrade legacy infrastructure to support 5G, IoT, and next-generation services." },
      { title: "Customer Experience", description: "Reduce churn and increase satisfaction with personalized digital experiences." },
      { title: "Billing & Revenue", description: "Implement flexible billing systems that support new business models and pricing strategies." },
      { title: "Network Operations", description: "Optimize network performance with AI-driven monitoring and predictive maintenance." },
      { title: "Digital Services", description: "Launch new digital services and value-added offerings to drive revenue growth." },
      { title: "Regulatory Compliance", description: "Maintain compliance with telecommunications regulations and data protection laws." }
    ],
    services: [
      { title: "BSS/OSS Solutions", description: "Business and operations support systems for billing, CRM, and service fulfillment." },
      { title: "Customer Self-Service", description: "Digital portals and mobile apps for account management, billing, and support." },
      { title: "Network Management", description: "NOC tools, network monitoring, and performance optimization platforms." },
      { title: "5G & IoT Platforms", description: "Solutions for 5G network slicing, edge computing, and IoT device management." },
      { title: "Revenue Assurance", description: "Fraud detection, revenue leakage prevention, and billing accuracy systems." },
      { title: "Field Service Management", description: "Workforce management, dispatch optimization, and mobile technician apps." }
    ],
    technologies: ["Java", "Python", "React", "Angular", "AWS", "Kubernetes", "Kafka", "Elasticsearch", "5G APIs", "Network Protocols"]
  }
};

interface IndustryData {
  title: string;
  subtitle: string;
  description: string;
  heroStats: { value: string; label: string }[];
  challenges: { title: string; description: string }[];
  services: { title: string; description: string }[];
  technologies: string[];
}

const allIndustries = [
  { slug: "healthcare", name: "Healthcare & Pharmaceuticals" },
  { slug: "finance-banking", name: "Finance & Banking" },
  { slug: "ecommerce-retail", name: "E-commerce & Retail" },
  { slug: "education", name: "Education & E-learning" },
  { slug: "real-estate", name: "Real Estate & Property" },
  { slug: "logistics", name: "Logistics & Transportation" },
  { slug: "entertainment-media", name: "Entertainment & Media" },
  { slug: "manufacturing", name: "Manufacturing & Industry" },
  { slug: "hospitality-travel", name: "Hospitality & Travel" },
  { slug: "telecommunications", name: "Telecommunications" }
];

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industriesData[slug];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!industry) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">Industry Not Found</h1>
            <Link href="/industries" className="text-[#0d9488] hover:underline">
              View All Industries
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-[#1a1a2e] pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]" />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#0d9488]/10 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-sm mb-12">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              <span>›</span>
              <span className="text-[#0d9488]">{industry.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {industry.title}
                </h1>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  {industry.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
                >
                  Transform Your Business
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {industry.heroStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-2">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subtitle Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6">
                {industry.subtitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {industry.description}
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
                How We Address Your Challenges
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges facing your industry and deliver targeted solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#0d9488]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center text-[#0d9488] mb-6 group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{challenge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
                  Our Services for {industry.title.split(' ')[0]}
                </h2>
                <p className="text-gray-600 max-w-xl">
                  Purpose-built solutions designed to address your industry's unique needs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#0d9488]/30 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#0d9488] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#0d9488] font-medium hover:gap-3 transition-all duration-300"
                  >
                    Get in Touch
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-[#1a1a2e]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Technologies We Use
                </h2>
                <p className="text-white/60 max-w-xl">
                  Equipped with the latest tools, our teams deliver impactful solutions for your industry.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
              >
                Let's Connect
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {industry.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white font-medium hover:bg-white/10 hover:border-[#0d9488]/50 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Industries */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-6 text-center">Explore Other Industries</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allIndustries
                .filter((ind) => ind.slug !== slug)
                .map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium hover:border-[#0d9488] hover:text-[#0d9488] hover:shadow-md transition-all duration-300"
                  >
                    {ind.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#1a1a2e]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#0d9488]/20 to-transparent rounded-3xl p-12 md:p-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready To Get Started?
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  Let's discuss how our expertise in {industry.title.toLowerCase()} can help transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#get-in-touch"
                    className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
                  >
                    Talk To Our Experts
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
