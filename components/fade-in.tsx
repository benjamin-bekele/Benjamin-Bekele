"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [mounted])

  const animations: Record<string, string> = {
    up: "animate-fade-up",
    down: "animate-fade-up",
    left: "animate-slide-left",
    right: "animate-slide-right",
  }

  return (
    <div
      ref={ref}
      suppressHydrationWarning
      className={`${visible ? animations[direction] : "opacity-0"} ${className}`}
      style={visible ? { animationDelay: `${delay}ms`, animationFillMode: "both" } : undefined}
    >
      {children}
    </div>
  )
}
