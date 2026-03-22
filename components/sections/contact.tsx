import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight, Phone } from "lucide-react"
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
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div suppressHydrationWarning className="mx-auto max-w-6xl">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="flex flex-col gap-8">
              <div className="font-serif text-2xl leading-relaxed text-foreground text-center">
                I am always open to new opportunities, collaborations, and
                interesting projects.
              </div>
              <div className="text-base leading-relaxed text-muted-foreground text-center">
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
        </div>
      </div>
    </section>
  )
}
