import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    className = "",
    onClick,
    type = "button",
    disabled = false,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl",
        secondary:
            "bg-secondary text-secondary-foreground hover:bg-accent",
        outline:
            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        // Use native anchor for hash links to enable smooth scrolling
        if (href.startsWith("#") || href.startsWith("/#")) {
            return (
                <a href={href} className={combinedStyles}>
                    {children}
                </a>
            );
        }
        // Use native anchor for PDF downloads
        if (href.endsWith(".pdf")) {
            return (
                <a href={href} download className={combinedStyles}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedStyles}
        >
            {children}
        </button>
    );
}
