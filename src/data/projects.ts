import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
    {
        id: "company-website",
        title: "IIB Website",
        category: "Web Development",
        description:
            "Developed an official production website using Next.js with a headless CMS architecture. The project focused on creating a scalable, SEO-optimized platform with comprehensive analytics integration for tracking user behavior and business metrics.",
        techStack: [
            "Next.js",
            "Strapi CMS",
            "REST APIs",
            "SEO",
            "Google Analytics 4",
        ],
        highlights: [
            "Integrated Strapi CMS using REST APIs with populate[] queries for flexible content management",
            "Built reusable UI components and CMS schemas for scalable content updates",
            "Implemented comprehensive SEO: dynamic meta tags, Open Graph tags, sitemap generation",
            "Configured server-side rendering for optimal search engine indexing",
            "Integrated GA4 to track page views, route changes, and user behavior",
            "Collaborated with designers and senior engineers to deliver business-aligned features",
        ],
        demoUrl: "https://iib.gov.in/",
    },
    {
        id: "ipran",
        title: "iPRAN - Insurance Industry Application",
        category: "Full Stack / Enterprise",
        description:
            "iPRAN is an industry-level real-time application used by all general insurance insurers in India. Led complete UI redesign, implemented comprehensive authentication and security systems, and integrated SMTP mail triggers for automated notifications.",
        techStack: [
            "Angular 16",
            "FastAPI",
            "MS SQL Server",
            "reCAPTCHA v3",
            "SMTP Mail Integration",
            "Session Management",
        ],
        highlights: [
            "Delivered complete UI redesign, transforming the application with a modern, user-friendly interface",
            "Migrated authentication from centralized login to in-application login architecture",
            "Implemented session-based authentication using FastAPI with session binding via IP and request metadata",
            "Integrated SMTP mail triggers for automated email notifications and alerts",
            "Designed MS SQL tables for session binding, rate limiting, and account lockouts",
            "Built rate limiting on login, OTP verification, and API requests",
            "Implemented two-tier account lockout: temporary lock after failures, 24-hour lock on continued violations",
            "Developed admin interface to securely monitor and unlock user accounts",
            "Integrated Google reCAPTCHA v3 to prevent automated attacks",
            "Followed Scrum methodology with Jira tracking and peer code reviews",
        ],
    },
    {
        id: "missed-call-explainer-bot",
        title: "Missed Call Explainer Bot",
        category: "Telegram Bot / AI",
        description:
            "A Telegram bot that explains unknown missed calls in India using rule-based logic with AI fallback. Features intelligent classification of spam, promotional, banking, delivery, and personal calls with risk assessment and actionable recommendations.",
        techStack: [
            "Node.js",
            "Telegram Bot API",
            "OpenAI API",
            "Rule-based Classification",
        ],
        highlights: [
            "Built rule-based classification engine with priority-based pattern matching for 140/160 prefixes, keywords, and number formats",
            "Implemented STD code detection with city mapping for 12+ major Indian cities (Delhi, Mumbai, Kolkata, etc.)",
            "Integrated OpenAI API as intelligent fallback for ambiguous or unclassified cases",
            "Designed risk assessment system (Low/Medium/High) with clear action recommendations",
            "Created educational context for each classification to help users understand call types",
        ],
        githubUrl: "https://github.com/vishwas-amrutha/missed-call-explainer-bot",
    },
    {
        id: "meeting-mate",
        title: "MeetingMate",
        category: "Chrome Extension / AI",
        description:
            "A Chrome Extension that transforms raw meeting notes into actionable outputs using AI. Features role-based output generation, adjustable tone settings, and one-click copy functionality for summaries, action items, emails, and status updates.",
        techStack: [
            "JavaScript",
            "Chrome Extension Manifest V3",
            "Groq API",
            "Llama 3.3 70B",
            "HTML/CSS",
        ],
        highlights: [
            "Built Chrome Extension with Manifest V3 for modern browser compatibility",
            "Integrated Groq API with Llama 3.3 70B for fast, high-quality AI processing",
            "Implemented role-based perspectives (Developer, Manager, Analyst) for tailored outputs",
            "Created multiple output formats: meeting summary, action items, follow-up email, Slack/Teams message, manager status update",
            "Designed privacy-first architecture with no backend server, no data storage, and local API key storage",
            "Added adjustable tone settings (Formal, Neutral, Friendly) for different contexts",
        ],
        githubUrl: "https://github.com/vishwas-amrutha/MeetingMate---Extension",
    },
    {
        id: "fire-api",
        title: "Fire API - Validation Processing System",
        category: "Backend / Performance",
        description:
            "Fire API is a validation processing system built with Django. Optimized the caching mechanism on UAT server to dramatically reduce validation time from 30 minutes to just 77 seconds for 1,500 records — a ~96% performance improvement.",
        techStack: [
            "Django",
            "Cron Jobs",
            "Caching Optimization",
            "Validation Processing",
            "Performance Tuning",
        ],
        highlights: [
            "Identified performance bottlenecks in the validation processing workflow on UAT server",
            "Redesigned and optimized the caching mechanism for efficient data retrieval",
            "Reduced validation time from 30 minutes to 77 seconds for 1,500 records (~96% improvement)",
            "Implemented cron jobs for scheduled validation tasks and automated processing",
            "Implemented efficient data processing strategies to minimize redundant operations",
            "Improved overall system throughput and user experience on UAT environment",
        ],
    },
];
