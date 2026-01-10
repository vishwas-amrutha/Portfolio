"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header ref={menuRef} className="fixed top-0 left-0 right-0 z-50 glass">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isHashLink = link.href.includes("#");
                            const LinkComponent = isHashLink ? "a" : Link;

                            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                                if (isHashLink) {
                                    const [path, hash] = link.href.split("#");
                                    if (pathname === path) {
                                        e.preventDefault();
                                        const element = document.getElementById(hash);
                                        if (element) {
                                            element.scrollIntoView({ behavior: "smooth" });
                                            window.history.pushState(null, "", `#${hash}`);
                                        }
                                    }
                                }
                            };

                            return (
                                <LinkComponent
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleClick}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        }`}
                                >
                                    {link.label}
                                </LinkComponent>
                            );
                        })}
                        <div className="ml-4">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
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
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const isHashLink = link.href.includes("#");
                                const LinkComponent = isHashLink ? "a" : Link;

                                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                                    setIsMenuOpen(false);
                                    if (isHashLink) {
                                        const [path, hash] = link.href.split("#");
                                        if (pathname === path) {
                                            e.preventDefault();
                                            const element = document.getElementById(hash);
                                            if (element) {
                                                // Small delay to allow menu to close first if needed
                                                setTimeout(() => {
                                                    element.scrollIntoView({ behavior: "smooth" });
                                                    window.history.pushState(null, "", `#${hash}`);
                                                }, 100);
                                            }
                                        }
                                    }
                                };

                                return (
                                    <LinkComponent
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleClick}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                            }`}
                                    >
                                        {link.label}
                                    </LinkComponent>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
