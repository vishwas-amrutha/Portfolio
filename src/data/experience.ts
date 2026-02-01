export interface Experience {
    company: string;
    companyFull: string;
    role: string;
    duration: string;
    description: string;
    type: "current" | "past";
}

export const experience: Experience[] = [
    {
        company: "IIB",
        companyFull: "Insurance Information Bureau of India",
        role: "Graduate Engineer Trainee",
        duration: "Aug 2025 - Present",
        description: "Building and maintaining B2B applications for Insurance companies across India. Leading development of enterprise level systems.",
        type: "current",
    },
];
