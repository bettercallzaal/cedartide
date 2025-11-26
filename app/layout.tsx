import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cedartide.vercel.app'),
  title: {
    default: 'Cedartide Stone - Expert Construction & Renovation Solutions',
    template: '%s | Cedartide Stone'
  },
  description: 'Cedartide Stone is inspired by nature when creating the highest quality stonework and construction for homes, landscapes, and commercial spaces. Built to last with over 40 years of expertise.',
  keywords: ['stonework', 'construction', 'renovation', 'granite', 'masonry', 'Connecticut', 'stone contractor', 'custom stonework'],
  authors: [{ name: 'Kevin Jepeal' }],
  creator: 'Cedartide Stone',
  publisher: 'Cedartide Stone',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cedartide.vercel.app',
    title: 'Cedartide Stone - Expert Construction & Renovation Solutions',
    description: 'Professional stonework and construction services. Inspired by nature, built to last with over 40 years of expertise.',
    siteName: 'Cedartide Stone',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cedartide Stone - Expert Construction & Renovation Solutions',
    description: 'Professional stonework and construction services. Inspired by nature, built to last with over 40 years of expertise.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
