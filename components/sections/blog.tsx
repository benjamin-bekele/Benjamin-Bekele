"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"
import { posts } from "@/lib/blog-data"

export function BlogSection() {
  return (
    <section id="blog" className="px-6 py-24 lg:py-32">
      <div suppressHydrationWarning className="mx-auto max-w-6xl">
        <SectionHeading title="Latest Writing" subtitle="Blog" />

        <div className="flex flex-col">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 80}>
              <Link href={`/blog/${post.slug}`}>
                <article className="group flex cursor-pointer flex-col gap-4 border-t border-border py-10 transition-all duration-300 hover:bg-secondary/30 lg:flex-row lg:items-start lg:gap-12 lg:px-6">
                  <div className="flex shrink-0 items-center gap-4 text-xs text-muted-foreground lg:w-40 lg:flex-col lg:items-start lg:gap-1">
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-primary md:text-2xl">
                        {post.title}
                      </h3>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                    </div>
                    <div className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </div>
                    <span className="w-fit border border-border px-2 py-0.5 text-xs text-muted-foreground">
                      {post.category}
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
