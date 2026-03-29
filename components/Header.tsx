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
    <header className="fixed top-0 left-0 right-0 bg-navy text-white z-50 h-16 flex items-center">
      <div className="w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-teal transition">
          <div className="w-6 h-6 rounded-full bg-teal"></div>
          <span>Road Safety</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition relative pb-1 ${
                isActive(link.href) ? 'text-white' : 'text-grey-dark hover:text-white'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Right side empty for balance */}
        <div className="w-24"></div>
      </div>
    </header>
  )
}
