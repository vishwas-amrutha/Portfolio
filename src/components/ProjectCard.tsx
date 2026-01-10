import { SkillBadge } from "./SkillBadge";

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    highlights: string[];
    category: string;
    demoUrl?: string;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">
            {/* Category Badge */}
            <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                </span>
            </div>

            {/* Title with Link */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 border border-gray-300 rounded-lg text-base font-medium hover:bg-gray-300 transition-all shadow-md hover:shadow-lg"
                    >
                        <img
                            src="/iib-logo.png"
                            alt="IIB"
                            className="w-7 h-7 object-contain"
                        />
                        Visit Website
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <SkillBadge key={tech} skill={tech} variant="primary" />
                    ))}
                </div>
            </div>

            {/* Key Highlights */}
            <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Key Highlights
                </h4>
                <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                            <svg
                                className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
