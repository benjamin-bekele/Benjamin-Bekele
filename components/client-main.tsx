"use client"

import type { ReactNode } from "react"

export function ClientMain({ children }: { children: ReactNode }) {
  return <main suppressHydrationWarning>{children}</main>
}
