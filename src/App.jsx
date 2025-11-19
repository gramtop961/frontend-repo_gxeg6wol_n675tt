import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import TerminalBackground from './components/TerminalBackground'

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      {/* Government-grade monochrome terminal ambience */}
      <TerminalBackground />

      {/* Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} SentinelSec. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
