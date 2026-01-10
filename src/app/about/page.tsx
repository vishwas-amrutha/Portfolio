import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about my experience building production-ready systems with frontend and backend ownership, security-conscious development, and scalable architecture.",
};

export default function AboutPage() {
    return (
        <div className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="animate-fade-in">
                    <SectionHeading
                        title="About Me"
                        subtitle="Full Stack Developer with experience building production-ready systems"
                    />
                </div>

                {/* Professional Summary */}
                <section className="mb-16 animate-fade-in delay-100">
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                            Professional Summary
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I am a Full Stack Developer with a focus on building{" "}
                                <span className="text-foreground font-medium">
                                    production-ready applications
                                </span>{" "}
                                that are secure, scalable, and maintainable. My experience spans
                                across both frontend and backend development, giving me complete
                                ownership over the entire application lifecycle.
                            </p>
                            <p>
                                With expertise in modern frameworks like{" "}
                                <span className="text-foreground font-medium">Next.js</span> and{" "}
                                <span className="text-foreground font-medium">Angular</span>, along
                                with backend technologies like{" "}
                                <span className="text-foreground font-medium">FastAPI</span> and{" "}
                                <span className="text-foreground font-medium">MS SQL Server</span>,
                                I deliver end-to-end solutions that meet business requirements while
                                following industry best practices.
                            </p>
                            <p>
                                Security is at the core of my development philosophy. I have designed
                                and implemented comprehensive authentication systems, rate limiting
                                mechanisms, and account lockout features to protect applications from
                                unauthorized access and automated attacks.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="animate-fade-in delay-200">
                    <h3 className="text-2xl font-bold mb-8">
                        <span className="gradient-text">Skills & Technologies</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => (
                            <div
                                key={category.name}
                                className={`bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ${index === skillCategories.length - 1 && skillCategories.length % 2 !== 0
                                    ? "md:col-span-2"
                                    : ""
                                    }`}
                            >
                                <h4 className="text-lg font-semibold mb-4 text-primary">
                                    {category.name}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="mt-16 animate-fade-in delay-300">
                    <h3 className="text-2xl font-bold mb-8">
                        <span className="gradient-text">Core Values</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Security First</h4>
                            <p className="text-muted-foreground text-sm">
                                Every feature is built with security considerations from the ground up
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Clean Code</h4>
                            <p className="text-muted-foreground text-sm">
                                Writing maintainable, well-documented code that teams can build upon
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Continuous Growth</h4>
                            <p className="text-muted-foreground text-sm">
                                Always learning new technologies and improving existing skills
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
