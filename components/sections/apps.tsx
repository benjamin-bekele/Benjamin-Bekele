"use client"

import { Smartphone, Star, Download } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const apps = [
  {
    name: "ICECOOL App",
    description:
      "An open-source mobile application for the ICECOOL startup. A comprehensive platform with seamless user experience and real-time features.",
    platform: "iOS & Android",
    rating: "4.8",
    downloads: "1K+",
    technologies: ["Flutter", "Firebase", "Dart"],
  },
  {
    name: "Poker Evaluator",
    description:
      "A smart poker hand evaluation app that instantly analyzes your hand and provides winning probabilities with an elegant interface.",
    platform: "Android",
    rating: "4.6",
    downloads: "500+",
    technologies: ["Flutter", "Dart", "Algorithms"],
  },
  {
    name: "Juego Game Zone",
    description:
      "A SaaS management platform for gaming centers, featuring booking systems, analytics, and an integrated payment flow.",
    platform: "Web App",
    rating: "4.7",
    downloads: "200+",
    technologies: ["Next.js", "Node.js", "Supabase"],
  },
]

export function AppsSection() {
  return (
    <section id="apps" className="bg-secondary px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Apps I Built" subtitle="Showcase" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {apps.map((app, i) => (
            <FadeIn key={app.name} delay={i * 120}>
              <div className="group flex h-full flex-col bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-48 items-center justify-center bg-muted">
                  <div className="flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <Smartphone className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-serif text-xl text-foreground">
                    {app.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-primary" />
                      {app.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3 text-primary" />
                      {app.downloads}
                    </span>
                    <span className="border border-border px-2 py-0.5 text-muted-foreground">
                      {app.platform}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {app.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
