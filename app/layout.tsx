import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { HydrationPatch } from '@/components/hydration-patch'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Benjamin Bekele — Software Developer & Startup Founder',
  description: 'Flutter Developer, Founder of ICECOOL, Software Developer & Entrepreneur. Building impactful software products that matter.',
  keywords: ['Benjamin Bekele', 'Flutter Developer', 'ICECOOL', 'Software Engineer', 'Startup Founder', 'Entrepreneur'],
  authors: [{ name: 'Benjamin Bekele' }],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Benjamin Bekele — Software Developer & Startup Founder',
    description: 'Flutter Developer, Founder of ICECOOL, Software Developer & Entrepreneur.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FDFAF6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeBisAttributes() {
                  document.querySelectorAll('[bis_skin_checked]').forEach(function(el) {
                    el.removeAttribute('bis_skin_checked');
                  });
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeBisAttributes);
                } else {
                  removeBisAttributes();
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <HydrationPatch />
          <div suppressHydrationWarning>{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
