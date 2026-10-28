import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold text-white">Arunraja N</a>
        <ul className="hidden gap-7 md:flex">
          {navLinks.map(([label, href]) => (
            <li key={href}><a href={href} className="text-sm text-mute transition-colors hover:text-white">{label}</a></li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-md p-2 text-slate-200 hover:bg-panel md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 pb-4 md:hidden">
          {navLinks.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-3 text-slate-200">{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
