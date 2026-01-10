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
        id: "auth-security-system",
        title: "Authentication & Security System",
        category: "Backend / Security",
        description:
            "Designed and implemented a comprehensive authentication and security system, migrating from centralized login to in-application authentication. The system includes multiple layers of security mechanisms to prevent unauthorized access and automated attacks.",
        techStack: [
            "Angular 16",
            "FastAPI",
            "MS SQL Server",
            "reCAPTCHA v3",
            "Session Management",
        ],
        highlights: [
            "Migrated authentication from centralized login to in-application login architecture",
            "Implemented session-based authentication using FastAPI with session binding via IP and request metadata",
            "Designed MS SQL tables for session binding, rate limiting, and account lockouts",
            "Built rate limiting on login, OTP verification, and API requests",
            "Implemented two-tier account lockout: temporary lock after failures, 24-hour lock on continued violations",
            "Developed admin interface to securely monitor and unlock user accounts",
            "Integrated Google reCAPTCHA v3 to prevent automated attacks",
            "Followed Scrum methodology with Jira tracking and peer code reviews",
        ],
    },
];
