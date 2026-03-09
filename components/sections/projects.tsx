"use client"

import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const projects = [
  {
    title: "ICECOOL Mobile App",
    description:
      "A feature-rich mobile application for the ICECOOL startup, delivering seamless user experiences with Flutter and Firebase integration.",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    number: "01",
    github: "https://github.com/benjamin-bekele/icecool",
  },
  {
    title: "Poker Hand Evaluator",
    description:
      "An intelligent app that evaluates poker hands in real-time, featuring advanced algorithms and a sleek, intuitive interface.",
    tags: ["Flutter", "Dart", "Algorithms", "UI/UX"],
    number: "02",
    github: "https://github.com/benjamin-bekele/poker-hand-evaluator",
  },
  {
    title: "Juego Game Zone SaaS",
    description:
      "A comprehensive SaaS platform for gaming zones with booking management, analytics dashboard, and payment integration.",
    tags: ["Next.js", "React", "Node.js", "Supabase"],
    number: "03",
    github: "https://github.com/benjamin-bekele/juego",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio website with smooth animations, editorial design, and responsive layouts across all devices.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    number: "04",
    github: "https://github.com/benjamin-bekele/personal-website",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Selected Work" subtitle="Projects" />

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer flex-col gap-6 border-t border-border py-10 transition-all duration-500 hover:bg-secondary/50 lg:flex-row lg:items-start lg:gap-12 lg:px-6"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {project.number}
                </span>
                <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                  <div className="flex-1">
                    <h3 className="flex items-center gap-3 font-serif text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
                      {project.title}
                      <ArrowUpRight className="h-5 w-5 -translate-y-1 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </h3>
                  </div>
                  <div className="flex max-w-sm flex-col gap-4 lg:text-right">
                    <p className="text-sm leading-relaxed text-muted-foreground lg:text-left">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 lg:justify-start">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
