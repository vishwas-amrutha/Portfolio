export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: "Backend / Programming",
        skills: [
            "Java",
            "Python (FastAPI)",
            "REST APIs",
            "MS SQL Server",
            "Session-based Authentication",
            "Rate Limiting",
            "Account Lockout Systems",
            "Session Binding",
        ],
    },
    {
        name: "Frontend / Web",
        skills: [
            "JavaScript / TypeScript",
            "Angular 16",
            "Next.js (SSR, SSG, Dynamic Routing)",
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
];
