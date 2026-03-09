"use client"

import { useEffect, useRef, useState } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      suppressHydrationWarning
      className={`mb-16 flex flex-col gap-3 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {subtitle && (
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <div className="mt-2 h-px w-12 bg-primary" />
    </div>
  )
}
