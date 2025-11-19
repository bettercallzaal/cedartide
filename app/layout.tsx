import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cedartide Stone - Expert Construction & Renovation Solutions',
  description: 'Cedartide Stone is inspired by nature when creating the highest quality stonework and construction for homes, landscapes, and commercial spaces. Built to last with over 40 years of expertise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
