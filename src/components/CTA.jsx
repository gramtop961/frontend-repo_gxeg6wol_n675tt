import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/20 bg-black/70 p-8 sm:p-12 shadow-[0_0_40px_rgba(255,255,255,0.08)] overflow-hidden">
          <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/20 px-3 py-1 text-neutral-200 mb-4">
                <ShieldCheck className="w-4 h-4" />
                Clearance-ready operations
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Start with a security posture review
              </h3>
              <p className="mt-3 text-neutral-300 max-w-xl">
                Get a tailored roadmap aligned to ISO 27001, NIST CSF, and CIS controls.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-black/60 border border-white/10 rounded-2xl p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="px-4 py-3 rounded-lg bg-black/70 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Full name" />
                <input type="email" className="px-4 py-3 rounded-lg bg-black/70 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Work email" />
                <input className="px-4 py-3 rounded-lg bg-black/70 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30 sm:col-span-2" placeholder="Company" />
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                <PhoneCall className="w-4 h-4" />
                Request consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-3 text-xs text-neutral-400 text-center">We respond within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
