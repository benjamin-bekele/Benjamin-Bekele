"use client"

import { useState } from "react"
import { Mail, Send, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const socials = [
  {
    name: "GitHub",
    handle: "benjamin-bekele",
    href: "https://github.com/benjamin-bekele",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "benjaminmenedo",
    href: "https://linkedin.com/in/benjaminmenedo",
    icon: Linkedin,
  },
  {
    name: "Telegram",
    handle: "@benjamin_bekele",
    href: "https://t.me/benjamin_bekele",
    icon: MessageCircle,
  },
  {
    name: "Email",
    handle: "benjaminmenedo@gmail.com",
    href: "mailto:benjaminmenedo@gmail.com",
    icon: Mail,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:mr.benjaminbekele@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="flex flex-col gap-8">
              <p className="font-serif text-2xl leading-relaxed text-foreground">
                I am always open to new opportunities, collaborations, and
                interesting projects.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Whether you have a question, a proposal, or just want to say
                hello, feel free to reach out. I would love to hear from you.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-border py-4 transition-colors hover:border-primary"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" strokeWidth={1.5} />
                      <span className="text-sm text-foreground">{social.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{social.handle}</span>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="group mt-4 inline-flex w-fit items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
