import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Public Enforcement Dashboard',
  description: 'Explore Australian road enforcement trends through data-driven insights',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-navy">
        {children}
      </body>
    </html>
  )
}
