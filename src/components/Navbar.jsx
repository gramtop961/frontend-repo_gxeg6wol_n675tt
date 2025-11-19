import { useState } from 'react'
import { Menu, Shield, X, Lock, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <header className="relative z-30">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-white font-semibold tracking-tight">SentinelSec</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-slate-300 hover:text-white text-sm">Contact</a>
          <a href="#cta" className="inline-flex items-center gap-2 bg-emerald-500 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors">
            <Lock className="w-4 h-4" />
            Get Protected
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg border border-white/10 text-slate-200">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute right-4 top-4">
            <button className="p-2 rounded-lg border border-white/10 text-slate-200" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-20 mx-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-slate-200 text-lg" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 inline-flex items-center gap-2 bg-emerald-500 text-slate-900 font-semibold px-4 py-3 rounded-lg w-full justify-center">
              <PhoneCall className="w-4 h-4" />
              Talk to an expert
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
