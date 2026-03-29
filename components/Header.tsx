'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.includes(path)) return true
    return false
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Fines & Offences', href: '/dashboard/fines' },
    { label: 'Drink Driving', href: '/dashboard/drink-driving' },
    { label: 'Drug Detection', href: '/dashboard/drug-detection' },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="content-wrap flex h-full items-center justify-between">
        <Link href="/" className="text-navy transition hover:text-teal">
          <span className="font-display text-lg font-bold tracking-wide">Interactive Dashboard</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 text-sm font-semibold transition ${
                isActive(link.href) ? 'text-navy' : 'text-text-muted hover:text-navy'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="w-16"></div>
      </div>
    </header>
  )
}
