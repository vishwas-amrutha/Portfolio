export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: "Backend / Programming",
        skills: [
            "Python",
            "Java",
            "FastAPI",
            "Django",
            "Node.js",
            "REST APIs",
            "MS SQL Server",
            "MongoDB",
            "Session-based Authentication",
            "Rate Limiting",
            "Account Lockout Systems",
            "Session Binding",
            "Telegram Bot API",
        ],
    },
    {
        name: "Frontend / Web",
        skills: [
            "JavaScript / TypeScript",
            "Angular 16",
            "Next.js (SSR, SSG, Dynamic Routing)",
            "Chrome Extension (Manifest V3)",
            "HTML / CSS",
            "SEO Optimization",
            "Responsive Design",
        ],
    },
    {
        name: "CMS / Content Management",
        skills: [
            "Strapi CMS",
            "Content Types & Collections",
            "Media Management",
            "REST API Integration",
        ],
    },
    {
        name: "Analytics / Monitoring",
        skills: [
            "Google Analytics 4 (GA4)",
            "Web Traffic Analysis",
            "User Behavior Tracking",
            "Event Tracking",
        ],
    },
    {
        name: "Tools / Workflow",
        skills: [
            "Git",
            "Jira",
            "Agile / Scrum",
            "Admin UI Development",
            "SPA Routing",
            "Performance Optimization",
        ],
    },
    {
        name: "AI / APIs",
        skills: [
            "OpenAI API",
            "Groq API (Llama 3.3)",
            "AI-powered Classification",
            "Prompt Engineering",
        ],
    },
    {
        name: "DevOps / Deployment",
        skills: [
            "SSH / Linux (Ubuntu)",
            "AWS Amplify",
            "Railway",
            "CI/CD Basics",
        ],
    },
];
