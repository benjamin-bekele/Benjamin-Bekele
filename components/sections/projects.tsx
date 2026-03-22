"use client"

import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const projects = [
  {
    title: "ICECOOL — Open Learning Platform",
    description:
      "Scalable, free, open platform for personalized university learning. Built full-stack with structured courses, quizzes, flashcards, and collaborative features. Enables student-generated content and inter-university collaboration.",
    tags: ["Flutter", "PHP", "Supabase", "Firebase", "MySQL"],
    number: "01",
    github: "https://github.com/benjamin-bekele/icecool",
  },
  {
    title: "Juego — Arcade Management System",
    description:
      "Real-world system for managing arcade/game zone operations. Built session tracking, billing (daily/weekly), and analytics dashboard with admin control panel for real-time monitoring.",
    tags: ["React", "Node.js", "MySQL"],
    number: "02",
    github: "https://github.com/benjamin-bekele/juego",
  },
  {
    title: "Gebeta Digital Menu — NFC Ordering System",
    description:
      "NFC-based digital restaurant system with live order processing. Supports 11+ international languages, real-time WebSocket communication, and table-based order routing directly to the kitchen.",
    tags: ["React", "Tailwind CSS", "Node.js", "WebSockets", "PostgreSQL"],
    number: "03",
    github: "https://github.com/benjamin-bekele",
  },
  {
    title: "Ethio Exam — Exam Preparation Platform",
    description:
      "Platform providing 13+ years of university entrance exam materials. Structured large datasets for easy access with a focus on accessibility and usability.",
    tags: ["Flutter", "Supabase", "Markdown"],
    number: "04",
    github: "https://github.com/benjamin-bekele",
  },
  {
    title: "MicroLearning Platform",
    description:
      "Content-rich learning platform with 24+ subjects and 100–200 topics each. Scalable architecture for large educational datasets with integrated quizzes and structured notes.",
    tags: ["React", "Tailwind CSS", "Firebase", "Markdown"],
    number: "05",
    github: "https://github.com/benjamin-bekele",
  },
  {
    title: "Poker Hand Evaluator",
    description:
      "System to evaluate poker hands using Texas Hold'em rules. Built a logic engine to analyze hand strength in real time using rule-based evaluation and probability thinking.",
    tags: ["Flutter", "Dart", "Algorithms"],
    number: "06",
    github: "https://github.com/benjamin-bekele/poker-hand-evaluator",
  },
  {
    title: "Bible Creed — Trivia & Quiz Platform",
    description:
      "Interactive biblical quiz system with thematic and timed challenges. Dynamic quiz engine based on categories and themes, covering the full biblical dataset across books, testaments, and themes.",
    tags: ["Flutter", "Dart"],
    number: "07",
    github: "https://github.com/benjamin-bekele",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 lg:py-32">
      <div suppressHydrationWarning className="mx-auto max-w-6xl">
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
                    <div className="text-sm leading-relaxed text-muted-foreground lg:text-left">
                      {project.description}
                    </div>
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
