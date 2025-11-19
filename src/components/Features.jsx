import { Shield, Bug, Lock, Network, Cpu, Scan } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Managed SOC',
    desc: 'Round-the-clock monitoring, correlation, and response by certified analysts.',
  },
  {
    icon: Bug,
    title: 'Threat Hunting',
    desc: 'Proactive detection and containment of advanced persistent threats.',
  },
  {
    icon: Lock,
    title: 'Zero Trust',
    desc: 'Identity-first security architecture and least-privilege enforcement.',
  },
  {
    icon: Network,
    title: 'Network Security',
    desc: 'Next-gen firewalls, microsegmentation, and east-west visibility.',
  },
  {
    icon: Cpu,
    title: 'Cloud Security',
    desc: 'CSPM, CIEM and Kubernetes hardening for AWS, Azure and GCP.',
  },
  {
    icon: Scan,
    title: 'Vulnerability Mgmt',
    desc: 'Continuous scanning, prioritization, and auto ticketing workflows.',
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">
          Comprehensive protection, built for scale
        </h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">
          From endpoints to cloud, we harden your attack surface and respond in minutes, not hours.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-emerald-400/30 transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                <Icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
