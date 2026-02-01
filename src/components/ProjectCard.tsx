import { SkillBadge } from "./SkillBadge";

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    highlights: string[];
    category: string;
    demoUrl?: string;
    githubUrl?: string;
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
                <div className="flex flex-wrap gap-2">
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
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg text-base font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            View on GitHub
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
