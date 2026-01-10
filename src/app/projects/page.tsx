import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore my portfolio of production projects including web development with Next.js, authentication systems, and security-focused backend solutions.",
};

export default function ProjectsPage() {
    return (
        <div className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="animate-fade-in">
                    <SectionHeading
                        title="Projects"
                        subtitle="A selection of production projects showcasing my experience in web development, backend systems, and security implementation."
                    />
                </div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`animate-fade-in delay-${(index + 1) * 100}`}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 animate-fade-in delay-300">
                    <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-semibold mb-4">
                            Want to see more?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            These projects represent a sample of my work. I have experience across
                            various domains and technologies. Feel free to reach out to discuss
                            other projects or potential collaborations.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                            Get in touch
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
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
