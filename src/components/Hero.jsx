import Spline from '@splinetool/react-spline'
import { ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background glow grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.12),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.1),transparent_25%)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 mb-5 shadow-[0_0_25px_rgba(16,185,129,0.35)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-300">Enterprise-grade cybersecurity</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Secure your future with confidence
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            We protect modern organizations from evolving threats with proactive monitoring, incident response, and zero-trust architecture.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">
              Get a free security audit
            </a>
            <a href="#solutions" className="px-6 py-3 rounded-lg border border-white/15 text-white hover:bg-white/5 transition-colors">
              Explore solutions
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg text-slate-300/90">
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

        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/10" />
        </div>
      </div>
    </section>
  )
}
