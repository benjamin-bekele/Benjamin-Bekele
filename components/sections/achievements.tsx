"use client"

import { useEffect, useRef, useState } from "react"
import { FadeIn } from "@/components/fade-in"

const achievements = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 1800, suffix: "+", label: "Users Served" },
  { value: 7, suffix: "+", label: "Real-world Platforms" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-24 lg:py-32">
      <div suppressHydrationWarning className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="border-t border-b border-border py-16">
            <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
              {achievements.map((item, i) => (
                <FadeIn key={item.label} delay={i * 100}>
                  <div className="flex flex-col gap-2 text-center">
                    <div className="font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
                      <CountUp target={item.value} suffix={item.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
