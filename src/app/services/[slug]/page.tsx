"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Services Data
const servicesData: { [key: string]: ServiceData } = {
  "web-development": {
    title: "Web Development",
    subtitle: "Enterprise-Grade Web Solutions",
    description: "We build scalable, secure, and high-performance web applications that drive business growth and deliver exceptional user experiences.",
    heroImage: "/services/web-dev.jpg",
    overview: "Our web development team specializes in creating custom web solutions that are tailored to your business needs. From complex enterprise applications to sleek corporate websites, we leverage cutting-edge technologies to deliver solutions that scale with your growth.",
    features: [
      {
        title: "Custom Web Applications",
        description: "Tailored solutions built from the ground up to meet your specific business requirements and workflows.",
        icon: "code"
      },
      {
        title: "Progressive Web Apps",
        description: "Fast, reliable, and engaging web experiences that work seamlessly across all devices and platforms.",
        icon: "mobile"
      },
      {
        title: "API Development & Integration",
        description: "Robust RESTful and GraphQL APIs that connect your systems and enable seamless data flow.",
        icon: "api"
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast load times and smooth interactions through advanced optimization techniques.",
        icon: "speed"
      }
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "AWS"],
    process: [
      { step: "Discovery", description: "Understanding your business goals, target audience, and technical requirements." },
      { step: "Planning", description: "Creating detailed project roadmap, architecture design, and technology selection." },
      { step: "Development", description: "Agile development with regular sprints, code reviews, and continuous integration." },
      { step: "Testing", description: "Comprehensive QA testing including unit, integration, and user acceptance testing." },
      { step: "Deployment", description: "Seamless deployment to production with zero downtime and monitoring setup." },
      { step: "Support", description: "Ongoing maintenance, updates, and 24/7 technical support." }
    ],
    stats: [
      { value: "500+", label: "Projects Delivered" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "50%", label: "Faster Load Times" },
      { value: "24/7", label: "Support Available" }
    ],
    caseStudies: [
      { title: "E-commerce Platform", industry: "Retail", result: "300% increase in online sales" },
      { title: "Healthcare Portal", industry: "Healthcare", result: "50% reduction in patient wait times" },
      { title: "Financial Dashboard", industry: "Finance", result: "Real-time analytics for 1M+ transactions" }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Excellence",
    description: "Create powerful mobile experiences that engage users and drive business results across iOS and Android platforms.",
    heroImage: "/services/mobile-dev.jpg",
    overview: "Our mobile development expertise spans native iOS and Android development as well as cross-platform solutions. We create intuitive, high-performance mobile applications that users love and businesses rely on.",
    features: [
      {
        title: "Native iOS Development",
        description: "Premium iOS applications built with Swift, optimized for Apple's ecosystem and design guidelines.",
        icon: "apple"
      },
      {
        title: "Native Android Development",
        description: "Robust Android apps using Kotlin, designed for the diverse Android device landscape.",
        icon: "android"
      },
      {
        title: "Cross-Platform Development",
        description: "Cost-effective solutions using React Native and Flutter for simultaneous iOS and Android deployment.",
        icon: "cross"
      },
      {
        title: "App Store Optimization",
        description: "Strategic optimization to maximize visibility and downloads on App Store and Google Play.",
        icon: "store"
      }
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "AWS Amplify", "GraphQL", "REST APIs"],
    process: [
      { step: "Strategy", description: "Defining app objectives, target users, and key features for maximum impact." },
      { step: "UX/UI Design", description: "Creating intuitive interfaces and seamless user journeys." },
      { step: "Development", description: "Building robust, scalable mobile applications with clean architecture." },
      { step: "Testing", description: "Rigorous testing across devices, OS versions, and network conditions." },
      { step: "Launch", description: "App store submission, approval management, and launch strategy." },
      { step: "Growth", description: "Analytics-driven improvements and feature updates based on user feedback." }
    ],
    stats: [
      { value: "200+", label: "Apps Launched" },
      { value: "4.8★", label: "Average Rating" },
      { value: "10M+", label: "Total Downloads" },
      { value: "40%", label: "Cost Savings" }
    ],
    caseStudies: [
      { title: "Fitness Tracking App", industry: "Health & Wellness", result: "1M+ active users in first year" },
      { title: "Banking Mobile App", industry: "Finance", result: "4.9★ rating with 500K downloads" },
      { title: "Food Delivery Platform", industry: "Food & Beverage", result: "200% increase in order volume" }
    ]
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    subtitle: "Scalable Cloud Infrastructure",
    description: "Transform your business with enterprise cloud solutions that provide scalability, security, and cost efficiency.",
    heroImage: "/services/cloud.jpg",
    overview: "We help organizations leverage the full potential of cloud computing. From migration strategies to cloud-native development, our solutions ensure optimal performance, security, and cost management across AWS, Azure, and Google Cloud platforms.",
    features: [
      {
        title: "Cloud Migration",
        description: "Seamless migration of existing applications and data to cloud infrastructure with minimal disruption.",
        icon: "migrate"
      },
      {
        title: "Cloud Architecture",
        description: "Designing scalable, resilient, and cost-optimized cloud architectures for your specific needs.",
        icon: "architecture"
      },
      {
        title: "Serverless Solutions",
        description: "Event-driven architectures that automatically scale and reduce operational overhead.",
        icon: "serverless"
      },
      {
        title: "Multi-Cloud Strategy",
        description: "Leveraging multiple cloud providers for redundancy, compliance, and optimal performance.",
        icon: "multicloud"
      }
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CloudFormation", "Lambda"],
    process: [
      { step: "Assessment", description: "Evaluating current infrastructure and defining cloud readiness." },
      { step: "Strategy", description: "Developing comprehensive cloud adoption and migration strategy." },
      { step: "Architecture", description: "Designing secure, scalable, and cost-effective cloud architecture." },
      { step: "Migration", description: "Executing migration with minimal downtime and data integrity." },
      { step: "Optimization", description: "Continuous monitoring and optimization for performance and cost." },
      { step: "Management", description: "24/7 cloud management, security, and compliance monitoring." }
    ],
    stats: [
      { value: "60%", label: "Cost Reduction" },
      { value: "99.99%", label: "Availability" },
      { value: "100+", label: "Cloud Projects" },
      { value: "3x", label: "Faster Deployment" }
    ],
    caseStudies: [
      { title: "Enterprise Migration", industry: "Manufacturing", result: "60% reduction in infrastructure costs" },
      { title: "Serverless Platform", industry: "Media", result: "Auto-scaling for 10M+ daily users" },
      { title: "Multi-Cloud Setup", industry: "Finance", result: "99.999% uptime achieved" }
    ]
  },
  "ai-ml-solutions": {
    title: "AI/ML Solutions",
    subtitle: "Intelligent Business Solutions",
    description: "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.",
    heroImage: "/services/ai-ml.jpg",
    overview: "Our AI and ML solutions transform raw data into actionable intelligence. From predictive analytics to natural language processing, we build intelligent systems that learn, adapt, and deliver measurable business value.",
    features: [
      {
        title: "Machine Learning Models",
        description: "Custom ML models for prediction, classification, and pattern recognition tailored to your data.",
        icon: "ml"
      },
      {
        title: "Natural Language Processing",
        description: "Text analysis, chatbots, and language understanding for enhanced customer interactions.",
        icon: "nlp"
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis for quality control, security, and automated inspections.",
        icon: "vision"
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven forecasting for demand planning, risk assessment, and strategic decisions.",
        icon: "analytics"
      }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "AWS SageMaker", "Azure ML", "Scikit-learn", "Pandas"],
    process: [
      { step: "Data Analysis", description: "Assessing data quality, availability, and potential for AI/ML applications." },
      { step: "Model Design", description: "Selecting appropriate algorithms and designing model architecture." },
      { step: "Training", description: "Training models with your data using best practices and optimization." },
      { step: "Validation", description: "Rigorous testing and validation to ensure accuracy and reliability." },
      { step: "Deployment", description: "Integrating models into production systems with monitoring." },
      { step: "Refinement", description: "Continuous learning and model improvement based on new data." }
    ],
    stats: [
      { value: "85%", label: "Accuracy Rate" },
      { value: "50+", label: "AI Projects" },
      { value: "40%", label: "Process Automation" },
      { value: "3x", label: "ROI Increase" }
    ],
    caseStudies: [
      { title: "Fraud Detection System", industry: "Banking", result: "95% fraud detection accuracy" },
      { title: "Demand Forecasting", industry: "Retail", result: "30% reduction in inventory costs" },
      { title: "Customer Service Bot", industry: "Telecom", result: "60% reduction in support tickets" }
    ]
  },
  "devops-cicd": {
    title: "DevOps & CI/CD",
    subtitle: "Accelerate Your Delivery Pipeline",
    description: "Streamline your development workflow with automated pipelines, infrastructure as code, and continuous delivery practices.",
    heroImage: "/services/devops.jpg",
    overview: "Our DevOps services bridge the gap between development and operations, enabling faster releases, improved reliability, and reduced costs. We implement industry-leading practices and tools to automate your entire software delivery lifecycle.",
    features: [
      {
        title: "CI/CD Pipeline Setup",
        description: "Automated build, test, and deployment pipelines for faster and safer releases.",
        icon: "pipeline"
      },
      {
        title: "Infrastructure as Code",
        description: "Version-controlled infrastructure using Terraform, CloudFormation, and Ansible.",
        icon: "iac"
      },
      {
        title: "Container Orchestration",
        description: "Docker and Kubernetes solutions for scalable, portable application deployment.",
        icon: "container"
      },
      {
        title: "Monitoring & Observability",
        description: "Comprehensive monitoring, logging, and alerting for proactive issue detection.",
        icon: "monitor"
      }
    ],
    technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus"],
    process: [
      { step: "Assessment", description: "Evaluating current development practices and identifying improvement areas." },
      { step: "Strategy", description: "Defining DevOps roadmap aligned with business objectives." },
      { step: "Implementation", description: "Setting up tools, pipelines, and automated workflows." },
      { step: "Integration", description: "Integrating with existing systems and training teams." },
      { step: "Optimization", description: "Continuous improvement of processes and pipeline efficiency." },
      { step: "Support", description: "Ongoing support, updates, and best practice guidance." }
    ],
    stats: [
      { value: "10x", label: "Faster Deployments" },
      { value: "70%", label: "Less Downtime" },
      { value: "50%", label: "Cost Reduction" },
      { value: "24/7", label: "Monitoring" }
    ],
    caseStudies: [
      { title: "CI/CD Transformation", industry: "SaaS", result: "From monthly to daily deployments" },
      { title: "Kubernetes Migration", industry: "E-commerce", result: "80% improvement in scalability" },
      { title: "DevOps Culture", industry: "Enterprise", result: "50% faster time-to-market" }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "Human-Centered Design Excellence",
    description: "Create intuitive, engaging, and visually stunning digital experiences that delight users and drive conversions.",
    heroImage: "/services/design.jpg",
    overview: "Our design team combines creativity with data-driven insights to create user experiences that are both beautiful and functional. From research to implementation, we ensure every interaction is meaningful and aligned with your brand.",
    features: [
      {
        title: "User Research",
        description: "Deep understanding of user needs, behaviors, and pain points through comprehensive research.",
        icon: "research"
      },
      {
        title: "UX Strategy",
        description: "Strategic design thinking that aligns user needs with business goals.",
        icon: "strategy"
      },
      {
        title: "Visual Design",
        description: "Stunning visual interfaces that reflect your brand and engage users.",
        icon: "visual"
      },
      {
        title: "Prototyping & Testing",
        description: "Interactive prototypes and usability testing for validated design decisions.",
        icon: "prototype"
      }
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Maze", "Hotjar", "UserTesting"],
    process: [
      { step: "Research", description: "User interviews, surveys, and competitive analysis." },
      { step: "Define", description: "Personas, user journeys, and design requirements." },
      { step: "Ideate", description: "Wireframing and exploring multiple design solutions." },
      { step: "Design", description: "High-fidelity visual design and design system creation." },
      { step: "Test", description: "Usability testing and iterating based on feedback." },
      { step: "Handoff", description: "Developer-ready specifications and design documentation." }
    ],
    stats: [
      { value: "200+", label: "Projects Designed" },
      { value: "40%", label: "Conversion Increase" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "50%", label: "Reduced Bounce Rate" }
    ],
    caseStudies: [
      { title: "Banking App Redesign", industry: "Finance", result: "60% increase in user engagement" },
      { title: "E-commerce UX", industry: "Retail", result: "45% higher conversion rate" },
      { title: "SaaS Dashboard", industry: "Technology", result: "70% reduction in support queries" }
    ]
  },
  "ecommerce-solutions": {
    title: "E-commerce Solutions",
    subtitle: "Powerful Online Retail Platforms",
    description: "Build high-converting e-commerce experiences that scale with your business and delight your customers.",
    heroImage: "/services/ecommerce.jpg",
    overview: "We create comprehensive e-commerce solutions that drive sales and customer loyalty. From custom platforms to Shopify and WooCommerce implementations, we deliver online stores that convert visitors into customers.",
    features: [
      {
        title: "Custom E-commerce Platforms",
        description: "Tailored solutions built for unique business requirements and complex catalogs.",
        icon: "custom"
      },
      {
        title: "Platform Implementation",
        description: "Expert Shopify, WooCommerce, and Magento setup and customization.",
        icon: "platform"
      },
      {
        title: "Payment Integration",
        description: "Secure payment gateways with multiple payment options and currencies.",
        icon: "payment"
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking and automated stock management systems.",
        icon: "inventory"
      }
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Next.js Commerce", "Medusa", "Saleor"],
    process: [
      { step: "Discovery", description: "Understanding your products, customers, and business model." },
      { step: "Strategy", description: "E-commerce strategy and platform selection." },
      { step: "Design", description: "Conversion-focused UX and brand-aligned visual design." },
      { step: "Development", description: "Building your store with all required features and integrations." },
      { step: "Launch", description: "Testing, migration, and successful store launch." },
      { step: "Growth", description: "Ongoing optimization, marketing support, and scaling." }
    ],
    stats: [
      { value: "150+", label: "Stores Launched" },
      { value: "$50M+", label: "Revenue Generated" },
      { value: "35%", label: "Average AOV Increase" },
      { value: "99.9%", label: "Uptime" }
    ],
    caseStudies: [
      { title: "Fashion E-commerce", industry: "Retail", result: "400% growth in online revenue" },
      { title: "B2B Platform", industry: "Manufacturing", result: "Automated 10,000+ orders/month" },
      { title: "Subscription Commerce", industry: "Food & Beverage", result: "85% customer retention rate" }
    ]
  },
  "custom-software-development": {
    title: "Custom Software Development",
    subtitle: "Tailored Enterprise Solutions",
    description: "Build bespoke software solutions that perfectly fit your business processes and give you a competitive edge.",
    heroImage: "/services/custom.jpg",
    overview: "When off-the-shelf solutions fall short, our custom software development services deliver exactly what your business needs. We build scalable, secure, and maintainable software that evolves with your organization.",
    features: [
      {
        title: "Enterprise Applications",
        description: "Large-scale systems for complex business operations and workflows.",
        icon: "enterprise"
      },
      {
        title: "System Integration",
        description: "Connecting disparate systems for unified data flow and operations.",
        icon: "integration"
      },
      {
        title: "Legacy Modernization",
        description: "Updating outdated systems to modern architectures without disruption.",
        icon: "modernize"
      },
      {
        title: "SaaS Development",
        description: "Multi-tenant software-as-a-service platforms built for scale.",
        icon: "saas"
      }
    ],
    technologies: ["Java", "C#", ".NET", "Python", "Node.js", "React", "Angular", "PostgreSQL", "Oracle"],
    process: [
      { step: "Analysis", description: "Deep dive into business processes and requirements." },
      { step: "Architecture", description: "Designing scalable and maintainable software architecture." },
      { step: "Development", description: "Agile development with regular demos and feedback." },
      { step: "Quality Assurance", description: "Comprehensive testing and quality control." },
      { step: "Deployment", description: "Phased rollout with training and change management." },
      { step: "Evolution", description: "Continuous improvement and feature development." }
    ],
    stats: [
      { value: "300+", label: "Custom Solutions" },
      { value: "15+", label: "Years Experience" },
      { value: "98%", label: "On-Time Delivery" },
      { value: "100%", label: "Code Ownership" }
    ],
    caseStudies: [
      { title: "ERP System", industry: "Manufacturing", result: "50% improvement in operational efficiency" },
      { title: "CRM Platform", industry: "Insurance", result: "360° customer view for 1M+ customers" },
      { title: "Logistics Platform", industry: "Supply Chain", result: "Real-time tracking for 50K shipments" }
    ]
  },
  "seo-digital-marketing": {
    title: "SEO/Digital Marketing",
    subtitle: "Data-Driven Growth Strategies",
    description: "Maximize your online visibility and drive qualified traffic with comprehensive digital marketing solutions.",
    heroImage: "/services/seo.jpg",
    overview: "Our digital marketing team combines technical SEO expertise with creative content strategies to improve your search rankings, drive organic traffic, and convert visitors into customers. We use data-driven approaches for measurable results.",
    features: [
      {
        title: "Technical SEO",
        description: "Site optimization for search engine crawlability, speed, and indexation.",
        icon: "technical"
      },
      {
        title: "Content Strategy",
        description: "Keyword research and content planning that drives organic traffic.",
        icon: "content"
      },
      {
        title: "Performance Marketing",
        description: "PPC campaigns across Google, social media, and display networks.",
        icon: "ppc"
      },
      {
        title: "Analytics & Reporting",
        description: "Comprehensive tracking and insights for data-driven decisions.",
        icon: "analytics"
      }
    ],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "Hotjar"],
    process: [
      { step: "Audit", description: "Comprehensive analysis of current digital presence and competitors." },
      { step: "Strategy", description: "Custom digital marketing strategy aligned with business goals." },
      { step: "Implementation", description: "Executing SEO, content, and paid campaigns." },
      { step: "Optimization", description: "Continuous testing and optimization for better results." },
      { step: "Reporting", description: "Regular performance reports and actionable insights." },
      { step: "Scaling", description: "Expanding successful strategies for continued growth." }
    ],
    stats: [
      { value: "500%", label: "Average Traffic Growth" },
      { value: "Top 10", label: "Rankings Achieved" },
      { value: "3x", label: "Lead Generation" },
      { value: "150+", label: "Clients Served" }
    ],
    caseStudies: [
      { title: "E-commerce SEO", industry: "Retail", result: "From page 5 to #1 for key terms" },
      { title: "Lead Generation", industry: "B2B Services", result: "400% increase in qualified leads" },
      { title: "Brand Awareness", industry: "Startup", result: "10M impressions in 6 months" }
    ]
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    subtitle: "24/7 Technical Excellence",
    description: "Keep your applications running smoothly with proactive maintenance, monitoring, and dedicated support services.",
    heroImage: "/services/support.jpg",
    overview: "Our maintenance and support services ensure your applications remain secure, performant, and up-to-date. From 24/7 monitoring to emergency response, we provide comprehensive support that lets you focus on your business.",
    features: [
      {
        title: "24/7 Monitoring",
        description: "Round-the-clock system monitoring with instant alerts and response.",
        icon: "monitoring"
      },
      {
        title: "Security Updates",
        description: "Regular security patches and vulnerability assessments.",
        icon: "security"
      },
      {
        title: "Performance Tuning",
        description: "Continuous optimization for speed and efficiency.",
        icon: "performance"
      },
      {
        title: "Dedicated Support",
        description: "Expert support team with guaranteed response times.",
        icon: "support"
      }
    ],
    technologies: ["Datadog", "New Relic", "PagerDuty", "Jira", "Zendesk", "Slack", "AWS CloudWatch", "Grafana"],
    process: [
      { step: "Onboarding", description: "Understanding your systems and establishing baselines." },
      { step: "Monitoring Setup", description: "Implementing comprehensive monitoring and alerting." },
      { step: "Documentation", description: "Creating runbooks and standard operating procedures." },
      { step: "Proactive Care", description: "Regular maintenance, updates, and health checks." },
      { step: "Incident Response", description: "Rapid response and resolution for any issues." },
      { step: "Continuous Improvement", description: "Regular reviews and recommendations for improvements." }
    ],
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "<15min", label: "Response Time" },
      { value: "24/7", label: "Availability" },
      { value: "95%", label: "First-Call Resolution" }
    ],
    caseStudies: [
      { title: "E-commerce Support", industry: "Retail", result: "Zero downtime during peak seasons" },
      { title: "Healthcare Platform", industry: "Healthcare", result: "HIPAA-compliant 24/7 operations" },
      { title: "Financial Systems", industry: "Finance", result: "99.999% uptime for critical systems" }
    ]
  }
};

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  overview: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  technologies: string[];
  process: {
    step: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  caseStudies: {
    title: string;
    industry: string;
    result: string;
  }[];
}

const allServices = [
  { slug: "web-development", name: "Web Development" },
  { slug: "mobile-app-development", name: "Mobile App Development" },
  { slug: "cloud-solutions", name: "Cloud Solutions" },
  { slug: "ai-ml-solutions", name: "AI/ML Solutions" },
  { slug: "devops-cicd", name: "DevOps & CI/CD" },
  { slug: "ui-ux-design", name: "UI/UX Design" },
  { slug: "ecommerce-solutions", name: "E-commerce Solutions" },
  { slug: "custom-software-development", name: "Custom Software Development" },
  { slug: "seo-digital-marketing", name: "SEO/Digital Marketing" },
  { slug: "maintenance-support", name: "Maintenance & Support" },
];

// Icon component
const FeatureIcon = ({ type }: { type: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    code: <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
    mobile: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />,
    api: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />,
    speed: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    default: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  };

  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      {icons[type] || icons.default}
    </svg>
  );
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!service) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">Service Not Found</h1>
          <Link href="/" className="text-[#0d9488] hover:underline">
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Devsinc Style */}
      <section className="relative bg-[#1a1a2e] pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#0d9488]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-12">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>›</span>
            <span className="text-[#0d9488]">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Build Your Project Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Right - Stats Grid */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {service.stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Devsinc Style */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6">
              {service.subtitle}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {service.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-[#0d9488]/10 text-[#0d9488] rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Devsinc Style (Vertical List with CTAs) */}
      <section id="features" className="py-20 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address your specific challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#0d9488]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center text-[#0d9488] group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Style */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful delivery and exceeds expectations.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#0d9488]/20" />
            
            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 inline-block">
                      <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{step.step}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Number Circle */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0d9488] rounded-full items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Mobile Number */}
                  <div className="md:hidden flex-shrink-0 w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Empty Space */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Devsinc Style */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Tech Stack
              </h2>
              <p className="text-white/60 max-w-xl">
                Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {service.technologies.map((tech, index) => (
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

      {/* Case Studies - Devsinc Style */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
                Stories of Our Transformations
              </h2>
              <p className="text-gray-600 max-w-xl">
                Real outcomes we've delivered for businesses across services and industries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.caseStudies.map((study, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#1a1a2e] to-[#0d9488]/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#0d9488] text-white text-xs font-medium rounded-full">
                    Case Study
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[#0d9488] text-sm font-medium">{study.industry}</span>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mt-2 mb-3 group-hover:text-[#0d9488] transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>{study.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-6 text-center">Explore Other Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allServices
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium hover:border-[#0d9488] hover:text-[#0d9488] hover:shadow-md transition-all duration-300"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Devsinc Style */}
      <section id="contact" className="py-20 bg-[#1a1a2e]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#0d9488]/20 to-transparent rounded-3xl p-12 md:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready To Get Started?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Let's discuss how our {service.title.toLowerCase()} services can help transform your business and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#get-in-touch"
                  className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
                >
                  Transform Your Digital Presence
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
