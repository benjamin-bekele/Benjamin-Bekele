import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getPostBySlug, posts } from "@/lib/blog-data"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

function renderContent(content: string) {
  const lines = content.trim().split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3)
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} className="my-6 overflow-x-auto rounded-lg bg-secondary p-4 text-sm">
          <code className="text-foreground">{codeLines.join("\n")}</code>
        </pre>
      )
      i++
      continue
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-10 mb-4 font-serif text-2xl text-foreground">
          {line.slice(3)}
        </h2>
      )
      i++
      continue
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={i} className="my-4 list-disc pl-6 space-y-1 text-muted-foreground">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
          ))}
        </ul>
      )
      continue
    }

    // Numbered list
    if (/^\d+\. /.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""))
        i++
      }
      elements.push(
        <ol key={i} className="my-4 list-decimal pl-6 space-y-1 text-muted-foreground">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
          ))}
        </ol>
      )
      continue
    }

    // Empty line
    if (line.trim() === "") {
      i++
      continue
    }

    // Paragraph
    elements.push(
      <p
        key={i}
        className="my-4 leading-relaxed text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: parseBold(line) }}
      />
    )
    i++
  }

  return elements
}

function parseBold(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong class='text-foreground font-medium'>$1</strong>")
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/#blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="border border-border px-2 py-0.5">{post.category}</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          {post.title}
        </h1>

        <time className="mt-3 block text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground border-l-2 border-border pl-4 italic">
          {post.excerpt}
        </p>

        <div className="mt-10 border-t border-border pt-10">
          {renderContent(post.content)}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </div>
    </main>
  )
}
