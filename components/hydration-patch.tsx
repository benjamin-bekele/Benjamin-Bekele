"use client"

import { useEffect } from "react"

export function HydrationPatch() {
  useEffect(() => {
    // Remove bis_skin_checked attributes added by browser extensions
    const removeBisSkinChecked = () => {
      const elements = document.querySelectorAll('[bis_skin_checked]')
      elements.forEach((el) => {
        el.removeAttribute('bis_skin_checked')
      })
    }

    // Run immediately
    removeBisSkinChecked()

    // Also observe for dynamically added attributes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
          const target = mutation.target as Element
          target.removeAttribute('bis_skin_checked')
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['bis_skin_checked'],
      subtree: true,
    })

    // Suppress console errors as fallback
    const original = console.error.bind(console)
    console.error = (...args: unknown[]) => {
      const msg = typeof args[0] === "string" ? args[0] : ""
      if (
        msg.includes("bis_skin_checked") ||
        (msg.includes("A tree hydrated") && String(args).includes("bis_skin_checked"))
      ) {
        return
      }
      original(...args)
    }

    return () => {
      observer.disconnect()
      console.error = original
    }
  }, [])

  return null
}
