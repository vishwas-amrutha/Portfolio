"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://formspree.io/f/xbddrzyr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("sent");
                setFormData({ name: "", email: "", message: "" });
                // Reset status after 3 seconds
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                />
            </div>

            {/* Email Field */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                    placeholder="your.email@example.com"
                />
            </div>

            {/* Message Field */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none transition-all duration-200 text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Your message..."
                />
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                disabled={status === "sending"}
            >
                {status === "sending" ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Sending...
                    </span>
                ) : status === "sent" ? (
                    <span className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Message Sent!
                    </span>
                ) : (
                    "Send Message"
                )}
            </Button>

            {/* Error Message */}
            {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}
