"use client"

import { Code2, Rocket, Lightbulb, Target } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const highlights = [
  {
    icon: Code2,
    title: "Software Developer",
    description:
      "Crafting robust, scalable applications with clean architecture and modern technologies across mobile and web.",
  },
  {
    icon: Rocket,
    title: "Startup Founder",
    description:
      "Founded ICECOOL, building impactful software products that solve real-world problems and drive innovation.",
  },
  {
    icon: Lightbulb,
    title: "Creative Builder",
    description:
      "Passionate about transforming ideas into polished digital experiences with attention to every detail.",
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Committed to building technology that creates meaningful impact and pushes boundaries.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <FadeIn direction="left" className="flex-1">
            <div className="flex flex-col gap-6">
              <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
                I am a highly ambitious software Developer and startup founder
                building impactful software products.
              </p>
              <div className="h-px w-8 bg-primary" />
              <p className="text-base leading-relaxed text-muted-foreground">
                As the founder of ICECOOL, I lead the development of innovative
                solutions that address real-world challenges. With deep expertise
                in Flutter, mobile development, and full-stack engineering, I bring
                ideas to life through clean code and thoughtful design.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                My entrepreneurial spirit drives me to constantly explore new
                technologies and push the boundaries of software development. I
                believe in the power of technology to transform lives and
                industries.
              </p>
            </div>
          </FadeIn>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} direction="right">
                <div className="group flex flex-col gap-4 border-t border-border pt-6 transition-all duration-300 hover:border-primary">
                  <div className="flex h-10 w-10 items-center justify-center text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
