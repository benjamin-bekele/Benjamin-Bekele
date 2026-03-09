"use client"

import { useState, useEffect, useCallback } from "react"

interface TypingAnimationProps {
  texts: string[]
  className?: string
}

export function TypingAnimation({ texts, className }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = texts[textIndex]

    if (!isDeleting) {
      setDisplayText(current.substring(0, displayText.length + 1))
      if (displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 2500)
        return
      }
    } else {
      setDisplayText(current.substring(0, displayText.length - 1))
      if (displayText.length === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
        return
      }
    }
  }, [displayText, isDeleting, textIndex, texts])

  useEffect(() => {
    const speed = isDeleting ? 35 : 70
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-typing-cursor text-primary">|</span>
    </span>
  )
}
