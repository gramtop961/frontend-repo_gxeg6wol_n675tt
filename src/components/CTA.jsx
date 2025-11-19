import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-emerald-400/30 bg-slate-900/60 p-8 sm:p-12 shadow-[0_0_40px_rgba(16,185,129,0.25)] overflow-hidden">
          <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 text-emerald-300 mb-4">
                <ShieldCheck className="w-4 h-4" />
                SOC 2 Type II Compliant
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Start with a free security posture review
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Get a tailored roadmap to strengthen your controls, reduce risk, and align with frameworks like ISO 27001, NIST and CIS.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-slate-800/60 border border-white/10 rounded-2xl p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Full name" />
                <input type="email" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Work email" />
                <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 sm:col-span-2" placeholder="Company" />
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">
                <PhoneCall className="w-4 h-4" />
                Request consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-3 text-xs text-slate-400 text-center">We respond within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
