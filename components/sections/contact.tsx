"use client"

import { useState } from "react"
import { Mail, Send, Github, Linkedin, MessageCircle, ArrowUpRight, Phone } from "lucide-react"
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
    handle: "benjamin-menedo",
    href: "https://linkedin.com/in/benjamin-menedo",
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
    handle: "Benjaminmenedo@gmail.com",
    href: "mailto:Benjaminmenedo@gmail.com",
    icon: Mail,
  },
  {
    name: "Phone",
    handle: "+251 992 742 907",
    href: "tel:+251992742907",
    icon: Phone,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setStatus("sent")
      setFormData({ name: "", email: "", message: "" })
    } else {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div suppressHydrationWarning className="mx-auto max-w-6xl">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="flex flex-col gap-8">
              <div className="font-serif text-2xl leading-relaxed text-foreground">
                I am always open to new opportunities, collaborations, and
                interesting projects.
              </div>
              <div className="text-base leading-relaxed text-muted-foreground">
                Whether you have a question, a proposal, or just want to say
                hello, feel free to reach out. I would love to hear from you.
              </div>
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
              {status === "sent" && (
                <p className="text-sm text-green-500">Message sent! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-4 inline-flex w-fit items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
