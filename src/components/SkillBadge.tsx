interface SkillBadgeProps {
    skill: string;
    variant?: "default" | "primary";
}

export function SkillBadge({ skill, variant = "default" }: SkillBadgeProps) {
    const variants = {
        default:
            "bg-secondary text-secondary-foreground border border-border",
        primary:
            "bg-primary/10 text-primary border border-primary/20",
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${variants[variant]}`}
        >
            {skill}
        </span>
    );
}
