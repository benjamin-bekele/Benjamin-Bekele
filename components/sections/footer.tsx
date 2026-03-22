"use client"

import { Github, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/benjamin-bekele",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/benjamin-menedo",
    icon: Linkedin,
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/benjamin_bekele",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/benjamin_bekele",
    icon: Instagram,
  },
  {
    name: "Telegram",
    href: "https://t.me/benjamin_bekele",
    icon: MessageCircle,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div suppressHydrationWarning className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-lg text-foreground">
              Benjamin Bekele
            </span>
            <div className="text-sm text-muted-foreground">
              Software Developer & Startup Founder
            </div>
          </div>

          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="text-xs text-muted-foreground">
            {`Designed & Built by Benjamin Bekele`}
          </div>
          <div className="font-mono text-xs text-muted-foreground/60">
            {`\u00A9 ${new Date().getFullYear()} All rights reserved.`}
          </div>
        </div>
      </div>
    </footer>
  )
}
