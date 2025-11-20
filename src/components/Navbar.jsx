import { useState } from 'react'
import { Menu, X, Lock, PhoneCall, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'

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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <nav className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <motion.div
            className="p-2 rounded-xl bg-white/5 border border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Monitor className="w-6 h-6 text-neutral-200" />
          </motion.div>
          <span className="text-white font-semibold tracking-tight">SentinelSec</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="relative text-sm text-neutral-300 hover:text-white transition-colors">
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-neutral-300 hover:text-white text-sm">Contact</a>
          <motion.a
            href="#cta"
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -1 }}
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            <Lock className="w-4 h-4" />
            Get Protected
          </motion.a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg border border-white/10 text-neutral-200 bg-black/40">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute right-4 top-4">
            <button className="p-2 rounded-lg border border-white/10 text-neutral-200" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-20 mx-4 rounded-2xl border border-white/10 bg-black/70 p-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-neutral-200 text-lg" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-3 rounded-lg w-full justify-center">
              <PhoneCall className="w-4 h-4" />
              Talk to an expert
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
