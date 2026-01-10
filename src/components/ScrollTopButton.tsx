"use client";

import { useState, useEffect } from "react";

export function ScrollTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById("projects");

            if (projectsSection) {
                const projectsTop = projectsSection.offsetTop;
                const scrollY = window.scrollY + window.innerHeight / 2;

                // Show button when scrolled past the start of projects section
                setIsVisible(scrollY >= projectsTop);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", window.location.pathname);
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-secondary text-foreground rounded-full shadow-lg hover:shadow-2xl hover:bg-accent border border-border transition-all duration-300 animate-fade-in hover:-translate-y-1 hover:scale-110 active:scale-95 hover:ring-2 hover:ring-primary/20"
            aria-label="Scroll to top"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </button>
    );
}
