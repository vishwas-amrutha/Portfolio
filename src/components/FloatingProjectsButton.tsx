"use client";

import { useState, useEffect } from "react";

export function FloatingProjectsButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            const projectsSection = document.getElementById("projects");

            if (aboutSection && projectsSection) {
                const aboutTop = aboutSection.offsetTop;
                const projectsTop = projectsSection.offsetTop;
                const scrollY = window.scrollY + 200; // offset for better UX

                // Show button when in About section (between about and projects)
                setIsVisible(scrollY >= aboutTop && scrollY < projectsTop - 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="#projects"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in font-medium"
        >
            View Projects
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </a>
    );
}
