"use client"

import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const skillCategories = [
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 92 },
      { name: "Firebase", level: 88 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 83 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "PHP", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Python", level: 78 },
      { name: "Bootstrap", level: 80 },
      { name: "Problem Solving", level: 95 },
      { name: "Git & DevOps", level: 82 },
    ],
  },
]

const allTech = [
  "Flutter", "Dart", "Firebase", "Supabase", "SQL", "PHP",
  "JavaScript", "Node.js", "Express.js", "Next.js", "React.js",
  "Tailwind CSS", "Bootstrap", "Python", "Git", "REST APIs", "UI/UX", "Agile",
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & Expertise" subtitle="What I Know" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 100}>
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-col gap-5">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200} className="mt-20">
          <div className="border-t border-border pt-12">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Technologies
            </p>
            <div className="flex flex-wrap gap-3">
              {allTech.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-px w-full bg-border">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
