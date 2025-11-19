import Spline from '@splinetool/react-spline'
import { ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Monochrome government vibe grid + glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.04),transparent_25%)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 mb-5 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <ShieldCheck className="w-4 h-4 text-neutral-200" />
            <span className="text-xs text-neutral-300 uppercase tracking-wider">Government-grade security</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Mission-critical protection.
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-xl">
            Hardened controls, continuous monitoring, and rapid response aligned to NIST and zero-trust principles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
              Request clearance
            </a>
            <a href="#solutions" className="px-6 py-3 rounded-lg border border-white/15 text-white hover:bg-white/5 transition-colors">
              Explore capabilities
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg text-neutral-300/90">
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Threat monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">15 min</div>
              <div className="text-sm">Avg. response</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.99%</div>
              <div className="text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-black/60">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        </div>
      </div>
    </section>
  )
}
