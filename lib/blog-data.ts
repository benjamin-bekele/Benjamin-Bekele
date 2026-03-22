export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: "building-scalable-flutter-apps",
    title: "Building Scalable Flutter Apps: Architecture Patterns",
    excerpt:
      "Exploring clean architecture, BLoC pattern, and state management strategies for building maintainable Flutter applications at scale.",
    date: "2026-02-10",
    category: "Flutter",
    readTime: "8 min read",
    content: `
Flutter is one of the most powerful cross-platform frameworks available today, but as your app grows, architecture becomes everything. After building several production Flutter apps — including ICECOOL, which serves 1800+ users — here's what I've learned about keeping things scalable.

## Why Architecture Matters

When you start a Flutter project, it's tempting to throw everything into widgets. It works fine for small apps. But once you have 20+ screens, real-time data, and a team, spaghetti code becomes a real problem. A clear architecture separates concerns, makes testing easier, and lets you move fast without breaking things.

## Clean Architecture in Flutter

Clean Architecture divides your app into three layers:

- **Presentation** — Widgets, pages, and state management (BLoC/Cubit)
- **Domain** — Business logic, use cases, and entity models
- **Data** — Repositories, data sources (remote/local), and DTOs

Each layer only depends on the one below it. Your UI never talks directly to your API.

\`\`\`
lib/
  features/
    auth/
      data/
        datasources/
        repositories/
        models/
      domain/
        entities/
        repositories/ (abstract)
        usecases/
      presentation/
        bloc/
        pages/
        widgets/
\`\`\`

## BLoC Pattern

BLoC (Business Logic Component) is my go-to for state management in complex apps. It separates events, states, and logic cleanly.

\`\`\`dart
// Event
abstract class AuthEvent {}
class LoginRequested extends AuthEvent {
  final String email, password;
  LoginRequested(this.email, this.password);
}

// State
abstract class AuthState {}
class AuthLoading extends AuthState {}
class AuthSuccess extends AuthState {}
class AuthFailure extends AuthState {
  final String message;
  AuthFailure(this.message);
}

// BLoC
class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final LoginUseCase loginUseCase;

  AuthBloc(this.loginUseCase) : super(AuthInitial()) {
    on<LoginRequested>((event, emit) async {
      emit(AuthLoading());
      final result = await loginUseCase(event.email, event.password);
      result.fold(
        (failure) => emit(AuthFailure(failure.message)),
        (_) => emit(AuthSuccess()),
      );
    });
  }
}
\`\`\`

## Dependency Injection

Use \`get_it\` for service locator pattern. Register all your dependencies at startup and inject them where needed — no more passing things down through constructors.

\`\`\`dart
final sl = GetIt.instance;

void setupDependencies() {
  sl.registerLazySingleton(() => AuthBloc(sl()));
  sl.registerLazySingleton(() => LoginUseCase(sl()));
  sl.registerLazySingleton<AuthRepository>(() => AuthRepositoryImpl(sl()));
  sl.registerLazySingleton<AuthRemoteDataSource>(() => AuthRemoteDataSourceImpl());
}
\`\`\`

## Key Takeaways

- Start with feature-first folder structure, not layer-first
- Use BLoC for complex state, Cubit for simpler cases
- Keep your domain layer pure Dart — no Flutter imports
- Write use cases even if they feel like boilerplate; they pay off later
- Use freezed for immutable models and union types

Architecture is an investment. The upfront cost is worth it when your app is still maintainable six months later.
    `,
  },
  {
    slug: "from-idea-to-startup-icecool-journey",
    title: "From Idea to Startup: The ICECOOL Journey",
    excerpt:
      "Lessons learned from founding a tech startup, managing product development, and navigating the challenges of entrepreneurship.",
    date: "2026-01-22",
    category: "Startup",
    readTime: "12 min read",
    content: `
Starting ICECOOL was one of the most challenging and rewarding things I've done. What began as a frustration with how scattered and inaccessible university learning materials were turned into a full platform serving students across Ethiopia. Here's the honest story.

## The Problem

University students in Ethiopia — and honestly, everywhere — struggle with fragmented learning resources. Notes are scattered across WhatsApp groups, Telegram channels, and random PDFs. There's no structured, free, open platform that organizes university-level content by department, course, and topic.

I felt this pain personally. I'd spend more time hunting for materials than actually studying. That's when the idea clicked: what if there was one place where students could find everything, contribute to it, and learn collaboratively?

## Building the MVP

The first version of ICECOOL was rough. I built it solo using Flutter for the frontend and PHP/MySQL for the backend. The goal was simple: structured courses, organized by department, with quizzes and flashcards.

The hardest part wasn't the code — it was the content. I had to manually structure course outlines, reach out to students to contribute materials, and figure out what "useful" actually meant for the target audience.

\`\`\`
v1 Feature Set:
- Course catalog by department
- Structured topics with notes
- Basic quiz engine
- User accounts
\`\`\`

## What I Got Wrong

**Trying to do everything at once.** I wanted quizzes, flashcards, collaboration, real-time features, and a beautiful UI all in v1. That's a trap. I should have shipped a simpler version faster and iterated.

**Underestimating content.** The platform is only as good as its content. Technical infrastructure is the easy part. Getting quality, organized educational content is the real challenge.

**Not talking to users early enough.** I built for weeks before showing it to anyone. When I finally did, I got feedback that changed several core decisions. Ship early, learn fast.

## What Worked

**Open contribution model.** Allowing students to volunteer course outlines and learning resources created a community around the platform. People felt ownership.

**Focus on free access.** Making everything free removed the biggest barrier to adoption. Students don't have money to spend on learning tools — they have time and knowledge to contribute.

**Cross-platform from day one.** Building with Flutter meant iOS, Android, and web from a single codebase. That reach mattered.

## Current State

ICECOOL now has 200+ users, structured content across multiple departments, and a growing contributor community. We're working on real-time collaboration features and expanding to more universities.

## Lessons for Other Student Founders

1. **Solve a problem you personally have** — you'll stay motivated when it gets hard
2. **Ship ugly, learn fast** — perfection is the enemy of progress
3. **Community is the product** — technology is just the enabler
4. **Find co-contributors early** — solo founding is lonely and slow
5. **Document everything** — decisions, failures, pivots. You'll thank yourself later

The journey from idea to a product people actually use is messy, non-linear, and worth every bit of it.
    `,
  },
  {
    slug: "fullstack-nextjs-supabase",
    title: "Full-Stack Development with Next.js and Supabase",
    excerpt:
      "A comprehensive guide to building production-ready web applications using Next.js for the frontend and Supabase for backend services.",
    date: "2026-01-05",
    category: "Web Dev",
    readTime: "10 min read",
    content: `
Next.js and Supabase have become my go-to stack for building web applications fast without sacrificing quality. Together they cover everything from auth to real-time data to file storage — and you can go from zero to production in a weekend.

## Why This Stack

- **Next.js** gives you server components, API routes, file-based routing, and great DX
- **Supabase** gives you a Postgres database, auth, storage, real-time subscriptions, and auto-generated APIs
- Both have generous free tiers and scale well

## Project Setup

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
npm install @supabase/supabase-js @supabase/ssr
\`\`\`

Create a Supabase project at supabase.com, then add your keys to \`.env.local\`:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

## Supabase Client Setup

\`\`\`typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
\`\`\`

\`\`\`typescript
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}
\`\`\`

## Authentication

Supabase handles auth out of the box. Here's a simple sign-in form using server actions:

\`\`\`typescript
// app/login/actions.ts
'use server'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })
  if (error) redirect('/login?error=' + error.message)
  redirect('/dashboard')
}
\`\`\`

## Data Fetching in Server Components

One of the best parts of this stack — fetch data directly in server components, no API layer needed:

\`\`\`typescript
// app/dashboard/page.tsx
import { createClient } from '@/lib/supabase/server'

export default async function Dashboard() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      {posts?.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
\`\`\`

## Real-Time Subscriptions

Supabase makes real-time trivially easy:

\`\`\`typescript
const supabase = createClient()

useEffect(() => {
  const channel = supabase
    .channel('posts')
    .on('postgres_changes', 
      { event: 'INSERT', schema: 'public', table: 'posts' },
      (payload) => setPosts(prev => [payload.new, ...prev])
    )
    .subscribe()

  return () => supabase.removeChannel(channel)
}, [])
\`\`\`

## Row Level Security

Always enable RLS on your tables. This is what makes Supabase safe to use with the anon key on the client:

\`\`\`sql
-- Users can only read their own data
CREATE POLICY "Users can view own posts"
ON posts FOR SELECT
USING (auth.uid() = user_id);

-- Users can only insert their own data
CREATE POLICY "Users can insert own posts"
ON posts FOR INSERT
WITH CHECK (auth.uid() = user_id);
\`\`\`

## Deployment

Push to GitHub, connect to Vercel, add your environment variables, and you're live. The whole thing takes about 5 minutes.

This stack removes so much boilerplate that used to slow down web development. You spend your time on product, not infrastructure.
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
