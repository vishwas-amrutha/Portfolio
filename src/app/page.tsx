import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { FloatingProjectsButton } from "@/components/FloatingProjectsButton";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Floating button for About section */}
      <FloatingProjectsButton />
      {/* Scroll to top button for Projects section */}
      <ScrollTopButton />
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Profile Photo */}
          <div className="animate-fade-in mb-8 mt-4 sm:mt-6 md:mt-8">
            <div className="relative inline-block">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur opacity-75 animate-pulse-glow" />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/profile.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="animate-fade-in delay-100 mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Vishwas Amrutha
            </h2>
          </div>

          {/* Location */}
          <div className="animate-fade-in delay-100 mb-4">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Hyderabad, India
            </span>
          </div>

          {/* Main heading */}
          <div className="animate-fade-in delay-200">
            <p className="text-primary font-medium mb-4 tracking-wide">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Full Stack Developer</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in delay-200">
            Building production-ready applications with{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">backend systems</span>,{" "}
            <span className="text-foreground font-medium">security</span>, and{" "}
            <span className="text-foreground font-medium">scalability</span> at the core.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <Button href="#projects" variant="primary" size="lg">
              <span className="flex items-center gap-2">
                View Projects
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Me
            </Button>
            <Button href="/Amrutha_Vishwas_Resume.pdf" variant="outline" size="lg">
              <span className="flex items-center gap-2">
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download My Resume
              </span>
            </Button>
          </div>

          {/* Scroll indicator - consistent spacing */}
          <a href="#about" className="mt-10 mb-8 animate-bounce block cursor-pointer">
            <svg
              className="w-6 h-6 text-muted-foreground mx-auto hover:text-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Me"
            subtitle="Full Stack Developer with experience building production-ready systems"
          />

          {/* Professional Summary */}
          <div className="mb-16">
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
          </div>

          {/* Skills Section */}
          <div className="mb-16">
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Projects"
            subtitle="A selection of production projects showcasing my experience in web development, backend systems, and security implementation."
          />

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
