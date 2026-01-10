interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeading({
    title,
    subtitle,
    centered = false,
}: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${centered ? "text-center" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
                <p className={`text-lg text-muted-foreground max-w-2xl ${centered ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
