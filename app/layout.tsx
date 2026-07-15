import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'ZETTA-AI — Contrata tu Primer AI Employee',
  description:
    'ZETTA-AI crea AI Employees autónomos que responden clientes, califican leads, agendan reuniones y automatizan trabajo repetitivo 24/7. Empieza una prueba gratuita de 14 días.',
  keywords: [
    'AI Employee',
    'automatización con IA',
    'atención al cliente IA',
    'calificación de leads',
    'agendamiento de citas',
    'WhatsApp IA',
    'automatización logística',
    'ZETTA-AI',
  ],
  authors: [{ name: 'ZETTA-AI' }],
  generator: 'v0.app',
  metadataBase: new URL('https://zetta-ai.org'),
  openGraph: {
    title: 'ZETTA-AI — Contrata tu Primer AI Employee',
    description:
      'AI Employees autónomos que responden clientes, califican leads y agendan reuniones 24/7.',
    url: 'https://zetta-ai.org',
    siteName: 'ZETTA-AI',
    type: 'website',
    images: [
      {
        url: 'https://zetta-ai.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZETTA-AI — Deja de Perder Clientes Mientras Duermes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZETTA-AI — Contrata tu Primer AI Employee',
    description:
      'AI Employees autónomos que responden clientes, califican leads y agendan reuniones 24/7.',
    images: ['https://zetta-ai.org/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050509',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
