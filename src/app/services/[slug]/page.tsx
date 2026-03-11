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
    subtitle: "Websites & Web Applications",
    description: "From business websites to complex web applications — we handle frontend, backend, databases, and everything in between.",
    heroImage: "/services/web-dev.jpg",
    overview: "We build websites and web apps using modern frameworks like React, Next.js, and Node.js. Whether you need a company website, a customer portal, an admin dashboard, or a full SaaS product — we write clean, maintainable code that works reliably. No bloated templates, no unnecessary complexity.",
    features: [
      {
        title: "Business Websites",
        description: "Corporate sites, landing pages, and marketing websites. Mobile-responsive, fast-loading, SEO-friendly.",
        icon: "code"
      },
      {
        title: "Web Applications",
        description: "Dashboards, portals, booking systems, internal tools — any web-based software your business needs.",
        icon: "mobile"
      },
      {
        title: "API Development",
        description: "RESTful APIs and GraphQL services to connect your frontend, mobile apps, and third-party systems.",
        icon: "api"
      },
      {
        title: "Database Design",
        description: "PostgreSQL, MongoDB, MySQL — proper schema design, indexing, and query optimization.",
        icon: "speed"
      }
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "AWS"],
    process: [
      { step: "Requirements", description: "We discuss what you need, who will use it, and what problems it should solve." },
      { step: "Planning", description: "Technical approach, timeline, and milestones — you know what to expect." },
      { step: "Development", description: "We build in iterations. You see progress weekly, not after months." },
      { step: "Testing", description: "We test across browsers and devices. Bugs get fixed before launch." },
      { step: "Deployment", description: "We set up hosting, domains, SSL, and get your site live." },
      { step: "Handover", description: "Documentation, training if needed, and support for any issues." }
    ],
    stats: [
      { value: "200+", label: "Projects Completed" },
      { value: "8+", label: "Years in Business" },
      { value: "50+", label: "Active Clients" },
      { value: "4.9", label: "Client Rating" }
    ],
    caseStudies: [
      { title: "Real Estate Portal", industry: "Property", result: "Property listing and inquiry management system" },
      { title: "Patient Booking System", industry: "Healthcare", result: "Online appointment scheduling for clinics" },
      { title: "Inventory Dashboard", industry: "Retail", result: "Stock tracking and reporting for 5 warehouses" }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle: "iOS & Android Apps",
    description: "Native and cross-platform mobile apps for iOS and Android. We handle design, development, testing, and app store submission.",
    heroImage: "/services/mobile-dev.jpg",
    overview: "We build mobile apps using React Native, Flutter, or native Swift/Kotlin — depending on what makes sense for your project. Most clients choose cross-platform to save time and budget while still getting a quality app on both platforms. We also handle the app store submission process.",
    features: [
      {
        title: "iOS Apps",
        description: "iPhone and iPad apps built with Swift or cross-platform frameworks. App Store submission included.",
        icon: "apple"
      },
      {
        title: "Android Apps",
        description: "Apps for Android phones and tablets. We test on multiple devices to ensure compatibility.",
        icon: "android"
      },
      {
        title: "Cross-Platform",
        description: "One codebase for both iOS and Android using React Native or Flutter. Faster development, lower cost.",
        icon: "cross"
      },
      {
        title: "Backend & APIs",
        description: "Your app needs a server? We build that too — user auth, data storage, push notifications, payments.",
        icon: "store"
      }
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "PostgreSQL", "AWS"],
    process: [
      { step: "Concept", description: "We define what the app does, who uses it, and the core features for v1." },
      { step: "Design", description: "Wireframes first, then full UI designs. You approve before we code." },
      { step: "Development", description: "We build the app with regular builds for you to test on your phone." },
      { step: "Testing", description: "Bug fixing, performance testing, and testing on real devices." },
      { step: "Launch", description: "We handle App Store and Google Play submission and approval." },
      { step: "Updates", description: "Bug fixes, OS updates, and new features as needed." }
    ],
    stats: [
      { value: "80+", label: "Apps Built" },
      { value: "iOS+Android", label: "Both Platforms" },
      { value: "4.5+", label: "Avg Store Rating" },
      { value: "3-6 mo", label: "Typical Timeline" }
    ],
    caseStudies: [
      { title: "Service Booking App", industry: "Home Services", result: "Booking and payment for local service providers" },
      { title: "Delivery Tracking", industry: "Logistics", result: "Real-time tracking for drivers and customers" },
      { title: "Membership App", industry: "Fitness", result: "Class booking and member management for gyms" }
    ]
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    subtitle: "AWS, Azure & Cloud Infrastructure",
    description: "Cloud setup, migration, and management. We help you move to the cloud or optimize what you already have.",
    heroImage: "/services/cloud.jpg",
    overview: "We work with AWS, Google Cloud, and Azure. Whether you're moving from on-premise servers, setting up a new infrastructure, or trying to reduce your monthly cloud bill — we can help. We focus on practical solutions: reliable hosting, proper security, automated backups, and costs that make sense.",
    features: [
      {
        title: "Cloud Setup",
        description: "New cloud infrastructure from scratch — servers, databases, storage, networking, all configured properly.",
        icon: "migrate"
      },
      {
        title: "Migration",
        description: "Move your existing apps and data to the cloud. We plan it carefully to minimize downtime.",
        icon: "architecture"
      },
      {
        title: "Cost Optimization",
        description: "Already on cloud but bills are high? We audit your setup and find ways to reduce costs.",
        icon: "serverless"
      },
      {
        title: "DevOps Setup",
        description: "CI/CD pipelines, Docker, Kubernetes — automated deployments so your team ships faster.",
        icon: "multicloud"
      }
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux"],
    process: [
      { step: "Audit", description: "We look at your current setup (or requirements) and identify what needs to be done." },
      { step: "Planning", description: "Architecture design, cost estimates, and migration plan if applicable." },
      { step: "Setup", description: "We configure the infrastructure, security groups, databases, and monitoring." },
      { step: "Migration", description: "Data and application migration with testing at each step." },
      { step: "Testing", description: "Load testing, security checks, and failover testing." },
      { step: "Handover", description: "Documentation and training for your team to manage day-to-day." }
    ],
    stats: [
      { value: "AWS", label: "Certified Team" },
      { value: "50+", label: "Cloud Projects" },
      { value: "30-50%", label: "Typical Cost Savings" },
      { value: "99.9%", label: "Uptime Target" }
    ],
    caseStudies: [
      { title: "E-commerce Migration", industry: "Retail", result: "Moved from shared hosting to AWS with auto-scaling" },
      { title: "Startup Infrastructure", industry: "SaaS", result: "Full AWS setup with CI/CD for a new product" },
      { title: "Cost Reduction", industry: "Media", result: "Reduced monthly cloud bill from $8K to $3K" }
    ]
  },
  "ai-ml-solutions": {
    title: "AI/ML Solutions",
    subtitle: "AI Integration & Automation",
    description: "Practical AI solutions — chatbots, automation, data analysis, and integrating AI APIs into your existing systems.",
    heroImage: "/services/ai-ml.jpg",
    overview: "We help businesses use AI where it actually makes sense. This includes building chatbots, integrating OpenAI/GPT into your apps, automating repetitive tasks, and analyzing data to find useful patterns. We're not here to sell you on AI hype — we focus on practical applications that save time or improve your product.",
    features: [
      {
        title: "Chatbots & Assistants",
        description: "Customer support bots, internal helpdesk assistants, or product Q&A bots using GPT and similar models.",
        icon: "ml"
      },
      {
        title: "AI API Integration",
        description: "Add OpenAI, Claude, or other AI services to your existing software. Text generation, summarization, etc.",
        icon: "nlp"
      },
      {
        title: "Document Processing",
        description: "Extract data from invoices, forms, contracts. OCR + AI to automate manual data entry.",
        icon: "vision"
      },
      {
        title: "Data Analysis",
        description: "Make sense of your data — trends, predictions, anomaly detection. Dashboards you can actually use.",
        icon: "analytics"
      }
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "TensorFlow", "PostgreSQL", "Node.js", "AWS", "Pinecone"],
    process: [
      { step: "Problem Definition", description: "What are you trying to automate or improve? We define the actual use case." },
      { step: "Feasibility", description: "Is AI the right solution? Sometimes simpler approaches work better." },
      { step: "Prototype", description: "We build a quick proof-of-concept so you can see if it works for your needs." },
      { step: "Development", description: "Full implementation with proper error handling and edge cases." },
      { step: "Integration", description: "Connect it to your existing systems, databases, and workflows." },
      { step: "Monitoring", description: "Track usage, accuracy, and costs. Adjust as needed." }
    ],
    stats: [
      { value: "30+", label: "AI Projects" },
      { value: "GPT-4", label: "Latest Models" },
      { value: "2-8 wk", label: "Typical Timeline" },
      { value: "ROI Focus", label: "Practical Results" }
    ],
    caseStudies: [
      { title: "Support Chatbot", industry: "E-commerce", result: "Handles 60% of customer questions automatically" },
      { title: "Invoice Processing", industry: "Accounting", result: "Extracts data from PDFs, saves 20 hrs/week" },
      { title: "Content Generator", industry: "Marketing", result: "AI-assisted product descriptions for 5000+ SKUs" }
    ]
  },
  "devops-cicd": {
    title: "DevOps & CI/CD",
    subtitle: "Automated Deployments & Infrastructure",
    description: "Set up automated deployment pipelines, Docker containers, and proper infrastructure so your team can ship code faster.",
    heroImage: "/services/devops.jpg",
    overview: "We help development teams deploy code without manual headaches. This means setting up CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins), containerizing apps with Docker, and managing infrastructure with Terraform. The goal: push code, tests run automatically, and it deploys to staging/production without anyone SSH-ing into servers.",
    features: [
      {
        title: "CI/CD Pipelines",
        description: "Automated testing and deployment. Push to main branch, it goes live. No manual steps.",
        icon: "pipeline"
      },
      {
        title: "Docker & Containers",
        description: "Package your app properly so it runs the same everywhere — local, staging, production.",
        icon: "iac"
      },
      {
        title: "Infrastructure Setup",
        description: "Terraform, CloudFormation — your infrastructure defined in code, version controlled.",
        icon: "container"
      },
      {
        title: "Monitoring & Logs",
        description: "Know when things break before users tell you. Alerts, dashboards, log aggregation.",
        icon: "monitor"
      }
    ],
    technologies: ["GitHub Actions", "GitLab CI", "Docker", "Kubernetes", "Terraform", "AWS", "Datadog", "Grafana"],
    process: [
      { step: "Current State", description: "How do you deploy now? What's painful? What breaks often?" },
      { step: "Design", description: "We design the pipeline and infrastructure based on your actual needs." },
      { step: "Setup", description: "Configure CI/CD, containers, hosting, and monitoring tools." },
      { step: "Migration", description: "Move your existing apps to the new setup with minimal disruption." },
      { step: "Documentation", description: "Your team needs to understand it. We write clear docs." },
      { step: "Training", description: "We show your devs how to use and maintain the new setup." }
    ],
    stats: [
      { value: "Minutes", label: "Deploy Time" },
      { value: "Auto", label: "Rollbacks" },
      { value: "40+", label: "Teams Helped" },
      { value: "Zero", label: "Manual Deploys" }
    ],
    caseStudies: [
      { title: "Startup Pipeline", industry: "SaaS", result: "From FTP uploads to automated CI/CD in 2 weeks" },
      { title: "Docker Migration", industry: "Fintech", result: "Containerized 12 microservices, unified deployment" },
      { title: "Multi-Environment", industry: "Agency", result: "Staging, QA, Production — all automated" }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "App & Website Design",
    description: "User interface design for websites, mobile apps, and web applications. Figma designs your developers can actually build.",
    heroImage: "/services/design.jpg",
    overview: "We design interfaces that look good and work well. This means wireframes to figure out the structure, then full visual designs in Figma. We hand off organized files with proper components, spacing, and specs — not messy artboards that leave developers guessing. We can also redesign existing apps that need a refresh.",
    features: [
      {
        title: "Website Design",
        description: "Landing pages, corporate sites, and marketing websites. Clean layouts that communicate clearly.",
        icon: "research"
      },
      {
        title: "App Design",
        description: "Mobile and web app interfaces. Dashboard layouts, user flows, and all the screens you need.",
        icon: "strategy"
      },
      {
        title: "Wireframes & Prototypes",
        description: "Low-fidelity wireframes first, then interactive prototypes you can click through.",
        icon: "visual"
      },
      {
        title: "Design Systems",
        description: "Reusable components, color palettes, typography — keeps your product consistent as it grows.",
        icon: "prototype"
      }
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Principle", "Lottie", "Zeplin"],
    process: [
      { step: "Brief", description: "What does the app/site need to do? Who uses it? Any brand guidelines?" },
      { step: "Wireframes", description: "Rough layouts to nail down structure and flow before we polish visuals." },
      { step: "Visual Design", description: "Full designs with real content, proper spacing, and your brand style." },
      { step: "Prototype", description: "Clickable prototype so you can test the flow before development." },
      { step: "Revisions", description: "We refine based on your feedback. Usually 2-3 rounds." },
      { step: "Handoff", description: "Organized Figma file with components, specs, and assets for devs." }
    ],
    stats: [
      { value: "150+", label: "Projects Designed" },
      { value: "Figma", label: "Primary Tool" },
      { value: "1-4 wk", label: "Typical Timeline" },
      { value: "Dev-Ready", label: "Proper Handoff" }
    ],
    caseStudies: [
      { title: "SaaS Dashboard", industry: "B2B Software", result: "Complete UI for analytics platform, 40+ screens" },
      { title: "Mobile App Redesign", industry: "Fitness", result: "Modernized outdated app, improved usability" },
      { title: "E-commerce Website", industry: "Fashion", result: "Full website design with product pages and checkout" }
    ]
  },
  "ecommerce-solutions": {
    title: "E-commerce Solutions",
    subtitle: "Online Stores & Shopping Platforms",
    description: "Shopify stores, WooCommerce sites, or custom e-commerce platforms. We build online stores that work.",
    heroImage: "/services/ecommerce.jpg",
    overview: "We build online stores using Shopify, WooCommerce, or custom solutions depending on your needs and budget. This includes product catalog setup, payment integration (Stripe, PayPal, local gateways), shipping configuration, and the admin tools you need to manage orders. We also handle migrations if you're moving from an existing platform.",
    features: [
      {
        title: "Shopify Stores",
        description: "Custom Shopify themes, app integrations, and store setup. Good for most retail businesses.",
        icon: "custom"
      },
      {
        title: "WooCommerce",
        description: "WordPress-based stores with more flexibility. Good if you need custom functionality.",
        icon: "platform"
      },
      {
        title: "Custom E-commerce",
        description: "Built from scratch when Shopify/WooCommerce doesn't fit. Full control over everything.",
        icon: "payment"
      },
      {
        title: "Payment & Shipping",
        description: "Stripe, PayPal, local payment methods. Shipping rates, zones, and carrier integrations.",
        icon: "inventory"
      }
    ],
    technologies: ["Shopify", "WooCommerce", "Next.js", "Stripe", "PayPal", "Node.js", "PostgreSQL", "AWS"],
    process: [
      { step: "Requirements", description: "What are you selling? How many products? Any special requirements?" },
      { step: "Platform Choice", description: "We recommend Shopify, WooCommerce, or custom based on your needs." },
      { step: "Design", description: "Store design — homepage, product pages, cart, checkout." },
      { step: "Setup", description: "Products, categories, payments, shipping, taxes — all configured." },
      { step: "Testing", description: "Test orders, payment flows, edge cases before going live." },
      { step: "Launch", description: "Go live, monitor for issues, fix anything that comes up." }
    ],
    stats: [
      { value: "100+", label: "Stores Built" },
      { value: "Shopify", label: "Partner" },
      { value: "2-8 wk", label: "Typical Timeline" },
      { value: "All Sizes", label: "10 to 10K Products" }
    ],
    caseStudies: [
      { title: "Fashion Brand", industry: "Apparel", result: "Shopify store with 500+ products, custom theme" },
      { title: "Food Delivery", industry: "F&B", result: "WooCommerce with local delivery zones and time slots" },
      { title: "B2B Wholesale", industry: "Manufacturing", result: "Custom pricing tiers and bulk order system" }
    ]
  },
  "custom-software-development": {
    title: "Custom Software Development",
    subtitle: "Business Software & Internal Tools",
    description: "Custom software built for your specific workflow. When off-the-shelf tools don't fit, we build what you need.",
    heroImage: "/services/custom.jpg",
    overview: "Sometimes you need software that does exactly what your business requires — not a generic tool you have to work around. We build custom internal tools, admin panels, workflow automation systems, and business applications. You own the code, and it works the way your business works.",
    features: [
      {
        title: "Internal Tools",
        description: "Admin dashboards, reporting tools, data management systems for your team.",
        icon: "enterprise"
      },
      {
        title: "Workflow Automation",
        description: "Automate repetitive processes. Approvals, notifications, data sync between systems.",
        icon: "integration"
      },
      {
        title: "System Integration",
        description: "Connect your existing tools — CRM, accounting, inventory — so data flows automatically.",
        icon: "modernize"
      },
      {
        title: "Legacy Updates",
        description: "Old system still works but needs updating? We modernize without breaking what works.",
        icon: "saas"
      }
    ],
    technologies: ["Node.js", "Python", "React", "PostgreSQL", "MySQL", "Redis", "AWS", "Docker"],
    process: [
      { step: "Discovery", description: "We learn your current workflow. What works? What doesn't? What's manual?" },
      { step: "Scope", description: "Define exactly what the software needs to do. No scope creep." },
      { step: "Design", description: "Database structure, user interface, how it fits with existing systems." },
      { step: "Build", description: "Iterative development. You see progress and can give feedback regularly." },
      { step: "Test", description: "We test with real scenarios. You test before it goes live." },
      { step: "Deploy", description: "We handle hosting, training, and support for the first few months." }
    ],
    stats: [
      { value: "70+", label: "Custom Systems" },
      { value: "Your Code", label: "Full Ownership" },
      { value: "Long-term", label: "Maintainable" },
      { value: "1-6 mo", label: "Timeline Range" }
    ],
    caseStudies: [
      { title: "Order Management", industry: "Distribution", result: "Replaced spreadsheets with proper order tracking system" },
      { title: "HR Portal", industry: "Services", result: "Leave requests, timesheets, employee directory — all in one place" },
      { title: "Booking System", industry: "Healthcare", result: "Custom scheduling for multi-location clinic network" }
    ]
  },
  "seo-digital-marketing": {
    title: "SEO/Digital Marketing",
    subtitle: "SEO & Online Marketing",
    description: "Get found on Google. Technical SEO fixes, content that ranks, and marketing that brings real leads — not vanity metrics.",
    heroImage: "/services/seo.jpg",
    overview: "We help businesses show up when people search for what they offer. This includes fixing technical SEO issues, optimizing existing pages, creating content that targets relevant keywords, and running Google/Meta ads when paid traffic makes sense. We focus on results you can measure — rankings, traffic, leads — not just reports.",
    features: [
      {
        title: "Technical SEO",
        description: "Site speed, mobile-friendliness, crawl errors, structured data. The foundation stuff.",
        icon: "technical"
      },
      {
        title: "On-Page SEO",
        description: "Keyword research, meta tags, content optimization. Make your pages rank for the right terms.",
        icon: "content"
      },
      {
        title: "Content Strategy",
        description: "Blog posts, landing pages, and content that targets keywords your customers actually search.",
        icon: "ppc"
      },
      {
        title: "Google Ads",
        description: "Search and display campaigns. We manage the ads so you get leads, not wasted budget.",
        icon: "analytics"
      }
    ],
    technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Google Analytics", "Google Ads", "Screaming Frog", "Surfer", "WordPress"],
    process: [
      { step: "Audit", description: "We check your site for SEO issues and see where you stand vs competitors." },
      { step: "Quick Wins", description: "Fix obvious issues first — broken links, missing tags, slow pages." },
      { step: "Keyword Plan", description: "What should you rank for? We find keywords with traffic and intent." },
      { step: "Optimization", description: "Update existing pages, create new content, build authority." },
      { step: "Tracking", description: "Set up proper tracking so you know what's working." },
      { step: "Monthly Work", description: "Ongoing optimization, new content, link building, reporting." }
    ],
    stats: [
      { value: "50+", label: "SEO Clients" },
      { value: "Organic", label: "Focus Area" },
      { value: "3-6 mo", label: "Results Timeline" },
      { value: "Monthly", label: "Reporting" }
    ],
    caseStudies: [
      { title: "Local Business", industry: "Services", result: "Page 1 rankings for 15 local keywords in 4 months" },
      { title: "E-commerce SEO", industry: "Retail", result: "Organic traffic up 180% in 6 months" },
      { title: "B2B Lead Gen", industry: "Software", result: "Google Ads campaign generating leads at $45/lead" }
    ]
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    subtitle: "Ongoing Support & Maintenance",
    description: "Keep your website or app running. Bug fixes, updates, security patches, and someone to call when things break.",
    heroImage: "/services/support.jpg",
    overview: "You have a website or app that needs ongoing care — updates, bug fixes, security patches, small changes. We offer monthly retainer plans so you have developers available when you need them. No need to hire full-time staff for work that's only needed sometimes. We also take over projects built by other teams if you need new support.",
    features: [
      {
        title: "Bug Fixes",
        description: "Something broken? We fix it. Usually within 24-48 hours depending on complexity.",
        icon: "monitoring"
      },
      {
        title: "Updates & Patches",
        description: "Keep your CMS, plugins, and dependencies up to date. Security patches applied promptly.",
        icon: "security"
      },
      {
        title: "Small Changes",
        description: "Need to update content, add a feature, or tweak something? That's what we're here for.",
        icon: "performance"
      },
      {
        title: "Monitoring",
        description: "We set up alerts so we know when your site goes down — often before you do.",
        icon: "support"
      }
    ],
    technologies: ["WordPress", "React", "Node.js", "AWS", "Cloudflare", "UptimeRobot", "GitHub", "Slack"],
    process: [
      { step: "Handover", description: "You give us access. We review the codebase and document how things work." },
      { step: "Retainer Setup", description: "We agree on hours per month and priority levels for requests." },
      { step: "Request System", description: "You submit requests via email or Slack. We track everything." },
      { step: "Regular Work", description: "We handle updates, fixes, and improvements each month." },
      { step: "Reporting", description: "Monthly summary of what we did and any recommendations." },
      { step: "Availability", description: "Need something urgent? We're reachable. Response times defined upfront." }
    ],
    stats: [
      { value: "40+", label: "Active Clients" },
      { value: "< 24hr", label: "Response Time" },
      { value: "Monthly", label: "Retainer Plans" },
      { value: "No Lock-in", label: "Cancel Anytime" }
    ],
    caseStudies: [
      { title: "E-commerce Store", industry: "Retail", result: "Ongoing Shopify support, 10-15 requests/month" },
      { title: "Company Website", industry: "Professional Services", result: "WordPress maintenance and content updates" },
      { title: "Web App Takeover", industry: "SaaS", result: "Took over codebase from previous agency, ongoing development" }
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
          <Link href="/" className="text-[#00B4FF] hover:underline">
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
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#00B4FF]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-12">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>›</span>
            <span className="text-[#00B4FF]">{service.title}</span>
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
                className="inline-flex items-center gap-2 bg-[#00B4FF] hover:bg-[#0055FF] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
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
                  <div className="text-3xl sm:text-4xl font-bold text-[#00B4FF] mb-2">{stat.value}</div>
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
                <span key={index} className="px-4 py-2 bg-[#00B4FF]/10 text-[#00B4FF] rounded-full text-sm font-medium">
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
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#00B4FF]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00B4FF]/10 rounded-xl flex items-center justify-center text-[#00B4FF] group-hover:bg-[#00B4FF] group-hover:text-white transition-all duration-300 flex-shrink-0">
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
                    className="inline-flex items-center gap-2 text-[#00B4FF] font-medium hover:gap-3 transition-all duration-300"
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
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#00B4FF]/20" />
            
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
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#00B4FF] rounded-full items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Mobile Number */}
                  <div className="md:hidden flex-shrink-0 w-10 h-10 bg-[#00B4FF] rounded-full flex items-center justify-center text-white font-bold">
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
              className="inline-flex items-center gap-2 bg-[#00B4FF] hover:bg-[#0055FF] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
            >
              Let&apos;s Connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white font-medium hover:bg-white/10 hover:border-[#00B4FF]/50 transition-all duration-300"
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
                Real outcomes we&apos;ve delivered for businesses across services and industries.
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
                <div className="h-48 bg-gradient-to-br from-[#1a1a2e] to-[#00B4FF]/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#00B4FF] text-white text-xs font-medium rounded-full">
                    Case Study
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[#00B4FF] text-sm font-medium">{study.industry}</span>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mt-2 mb-3 group-hover:text-[#00B4FF] transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-[#00B4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium hover:border-[#00B4FF] hover:text-[#00B4FF] hover:shadow-md transition-all duration-300"
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
          <div className="bg-gradient-to-r from-[#00B4FF]/20 to-transparent rounded-3xl p-12 md:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready To Get Started?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Let&apos;s discuss how our {service.title.toLowerCase()} services can help transform your business and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#get-in-touch"
                  className="inline-flex items-center justify-center gap-2 bg-[#00B4FF] hover:bg-[#0055FF] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
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
