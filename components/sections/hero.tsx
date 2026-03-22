"use client"

import Image from "next/image"
import { ArrowDown, Download, Mail } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pt-24 pb-20"
    >
      <div suppressHydrationWarning className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* Left column - text */}
        <div className="flex max-w-2xl flex-col gap-8 lg:flex-1">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary animate-fade-up">
              Software Developer & Entrepreneur
            </p>
            <h1 className="text-balance font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground animate-fade-up md:text-7xl lg:text-8xl" style={{ animationDelay: "100ms" }}>
              Benjamin
              <br />
              <span className="italic text-primary">Bekele</span>
            </h1>
            <div className="h-7 text-lg text-muted-foreground animate-fade-up md:text-xl" style={{ animationDelay: "200ms" }} suppressHydrationWarning>
              <TypingAnimation
                texts={[
                  "Flutter Developer",
                  "Founder of ICECOOL",
                  "Software Developer",
                  "Startup Entrepreneur",
                  "Building the Future",
                ]}
              />
            </div>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground animate-fade-up" style={{ animationDelay: "300ms" }}>
            Building impactful software products that solve real-world problems.
            Passionate about clean code, thoughtful design, and technology that
            makes a difference.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary"
            >
              <span>View Work</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>Get in Touch</span>
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right column - image */}
        <div className="animate-fade-up lg:flex-shrink-0" style={{ animationDelay: "300ms" }}>
          <div className="relative">
            <div className="relative h-80 w-72 overflow-hidden md:h-[420px] md:w-[340px]">
              <Image
                src="/images/Profile.jpg"
                alt="Benjamin Bekele - Software Developer and Startup Founder"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-full w-full border border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
