"use client"

import { Download } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const experience = [
  {
    role: "Founder & Lead Developer",
    company: "ICECOOL",
    period: "Dec 2025 - Present",
    description:
      "Leading product development, managing developing teams, and driving strategic decisions for the company's software portfolio.",
  },
  {
    role: "Independent Software Developer",
    company: "Self-Directed Projects",
    period: "2024 - Present",
    description:
      "Building full-stack and mobile products as startup-potential ventures — each project designed with real-world scalability, user impact, and product vision in mind rather than client work.",
  },
]

const education = [
  {
    degree: "Computer Science",
    school: "HOPE University",
    period: "2023 - Present",
    description:
      "Focused on computer science fundamentals, software architecture, algorithms, and modern development practices.",
  },
]

export function ResumeSection() {
  return (
    <section id="resume" className="bg-secondary px-6 py-24 lg:py-32">
      <div suppressHydrationWarning className="mx-auto max-w-6xl">
        <SectionHeading title="Experience" subtitle="Resume" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FadeIn direction="left">
              <div className="flex flex-col gap-2">
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Work Experience
                </h3>
                {experience.map((item, i) => (
                  <div
                    key={item.role}
                    className={`flex flex-col gap-3 py-8 ${i !== experience.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-serif text-lg text-foreground">
                        {item.role}
                      </h4>
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {item.company}
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <div className="flex flex-col gap-2">
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Education
                </h3>
                {education.map((item) => (
                  <div key={item.degree} className="flex flex-col gap-3 py-8">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-serif text-lg text-foreground">
                        {item.degree}
                      </h4>
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {item.school}
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                ))}

                <div className="mt-4">
                  <a
                    href="/BENJAMIN BEKELE.pdf"
                    download="BENJAMIN BEKELE.pdf"
                    className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
