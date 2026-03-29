import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Public Enforcement Dashboard
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-teal-light transition">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-teal-light transition">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  )
}
