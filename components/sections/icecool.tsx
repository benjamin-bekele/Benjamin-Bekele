"use client"

import Image from "next/image"
import { BookOpen, Users, Shield, Flame, Award, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const pillars = [
  {
    icon: BookOpen,
    title: "Open Source First",
    description:
      "All contents are open-source. Anyone can contribute, improve, and translate. Built on transparency and collaboration.",
  },
  {
    icon: GraduationCap,
    title: "University-Structured",
    description:
      "Courses aligned with official Ethiopian university curricula and learning outcomes. Standardized syllabi, modules, and resources.",
  },
  {
    icon: Users,
    title: "Student-Powered",
    description:
      "Students as co-creators of knowledge. Content written by students, reviewed by volunteer professors, refined through collaboration.",
  },
  {
    icon: Shield,
    title: "Academic Integrity",
    description:
      "Strong peer review process, proper citation, and ethical contribution. Quality education through rigorous standards.",
  },
]

const symbolism = [
  { icon: Shield, label: "Protection of Knowledge" },
  { icon: BookOpen, label: "Open Knowledge" },
  { icon: Flame, label: "Enlightenment" },
  { icon: Award, label: "Achievement & Merit" },
]

export function IcecoolSection() {
  return (
    <section id="icecool" className="bg-secondary px-6 py-24 lg:py-32">
      <div suppressHydrationWarning className="mx-auto max-w-6xl">
        <SectionHeading 
          title="ICECOOL" 
          subtitle="Nonprofit Academic Movement" 
        />

        <FadeIn>
          <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="flex flex-col gap-4 lg:flex-1">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                  <Image
                    src="/images/IC.png"
                    alt="ICECOOL Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-foreground">ICECOOL</h3>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Interconnected Curriculum-based Education for 
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Collaboration & Open Online Learning
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex-1">
              <div className="mb-4 text-base leading-relaxed text-muted-foreground">
                ICECOOL is a nonprofit, inter-university educational platform 
                created to unify, improve, and democratize university education in Ethiopia 
                through collaboration.
              </div>
              <div className="text-base leading-relaxed text-muted-foreground">
                At its core, ICECOOL brings together students and universities to build 
                high-quality, curriculum-aligned courses based on official university learning 
                outcomes and syllabi. Instead of fragmented notes and unequal access, ICECOOL 
                creates a shared academic commons where knowledge is refined collectively and 
                shared freely.
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-16 rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">What ICECOOL Does</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-3">
                <span className="text-primary">📚</span>
                <div className="text-sm text-muted-foreground">Provides clean, structured university-level courses</div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">🏛️</span>
                <div className="text-sm text-muted-foreground">Aligns content with official curricula</div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">🤝</span>
                <div className="text-sm text-muted-foreground">Enables inter-university collaboration</div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">🧑</span>
                <div className="text-sm text-muted-foreground">Empowers students as co-creators of knowledge</div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">🎮</span>
                <div className="text-sm text-muted-foreground">Enhances learning through Q&A, quizzes, and games</div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">🔓</span>
                <div className="text-sm text-muted-foreground">Keeps all content open and free</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mb-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 100 + 200}>
              <div className="group flex h-full flex-col gap-5 bg-secondary p-8 transition-all duration-300 hover:bg-card">
                <pillar.icon
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {pillar.title}
                </h3>
                <div className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600}>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Mission</h3>
              <div className="text-sm leading-relaxed text-muted-foreground">
                To build a nonprofit, inter-university educational platform that 
                provides high-quality, curriculum-aligned university courses, collaboratively 
                created by students and academics, and freely accessible to all.
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Vision</h3>
              <div className="text-sm leading-relaxed text-muted-foreground">
                A future where universities collaborate instead of operating in isolation, 
                students learn from shared refined resources, and quality education is 
                accessible regardless of location or income.
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={700}>
          <div className="mb-16 rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-xl font-semibold text-foreground">Logo Symbolism</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {symbolism.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-3 text-center">
                  <item.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={800}>
          <div className="rounded-lg border border-primary/20 bg-card p-8 text-center">
            <div className="mb-4 text-lg font-semibold text-foreground">
              Participating Universities
            </div>
            <div className="text-sm text-muted-foreground">
              Hope University • Saint Mary University • Admas University • Commerce College • 
              Regional Universities (Hawassa, Jimma, Mekelle, and more)
            </div>
            <div className="mt-6 text-base font-medium italic text-primary">
              "Knowledge grows when shared. Education improves when unified. Students succeed when empowered."
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
