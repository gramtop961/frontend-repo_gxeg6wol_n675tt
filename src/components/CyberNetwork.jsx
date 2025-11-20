import { useMemo } from 'react'
import { motion } from 'framer-motion'

// Animated cyber network: central computer, incoming/outgoing packets, and attacker nodes
export default function CyberNetwork() {
  const packets = useMemo(() => Array.from({ length: 10 }).map((_, i) => ({
    id: `p-${i}`,
    from: i % 2 === 0 ? '#path-left' : '#path-right',
    dur: 6 + (i % 5),
    delay: (i % 7) * 0.6,
    color: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#60a5fa' : '#a78bfa',
  })), [])

  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 800 600" className="w-full h-full">
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
            <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="800" height="600" fill="url(#grid)" />
        <rect x="0" y="0" width="800" height="600" fill="url(#glow)" />

        {/* Central computer */}
        <g filter="url(#blur0)">
          <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <rect x="320" y="210" rx="12" width="160" height="110" fill="rgba(17,17,17,0.9)" stroke="rgba(255,255,255,0.2)" />
            <rect x="330" y="220" width="140" height="70" fill="#0a0a0a" stroke="rgba(255,255,255,0.1)" />
            {/* Code flicker */}
            <motion.text x="338" y="242" fontSize="12" fill="#a3a3a3" fontFamily="monospace" initial={{ opacity: 0.6 }} animate={{ opacity: [0.6, 1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              sudo tail -f /var/log/auth.log
            </motion.text>
            <motion.text x="338" y="260" fontSize="12" fill="#cbd5e1" fontFamily="monospace" animate={{ opacity: [0.4, 0.9, 0.5, 1] }} transition={{ duration: 2.6, repeat: Infinity }}>
              npm run build && systemctl restart api
            </motion.text>
            <motion.text x="338" y="278" fontSize="12" fill="#86efac" fontFamily="monospace" animate={{ opacity: [0.3, 0.8, 0.6, 1] }} transition={{ duration: 3, repeat: Infinity }}>
              ufw allow 443/tcp — rate limited
            </motion.text>
            <rect x="360" y="328" width="80" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
            <rect x="375" y="338" width="50" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
          </motion.g>
        </g>

        {/* Attacker nodes */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <circle cx="120" cy="160" r="26" fill="rgba(153,27,27,0.25)" stroke="rgba(239,68,68,0.5)" />
          <circle cx="120" cy="160" r="40" fill="none" stroke="rgba(239,68,68,0.2)">
            <animate attributeName="r" values="38;44;38" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="120" y="165" textAnchor="middle" fontSize="10" fill="#fecaca" fontFamily="monospace">attacker</text>

          <circle cx="680" cy="140" r="26" fill="rgba(153,27,27,0.25)" stroke="rgba(239,68,68,0.5)" />
          <circle cx="680" cy="140" r="40" fill="none" stroke="rgba(239,68,68,0.2)">
            <animate attributeName="r" values="38;44;38" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="680" y="145" textAnchor="middle" fontSize="10" fill="#fecaca" fontFamily="monospace">attacker</text>
        </motion.g>

        {/* Packet paths */}
        <path id="path-left" d="M 140 160 C 200 220, 260 240, 320 260" fill="none" stroke="rgba(59,130,246,0.25)" />
        <path id="path-right" d="M 680 140 C 620 220, 560 240, 480 260" fill="none" stroke="rgba(59,130,246,0.25)" />
        <path id="path-out-1" d="M 400 320 C 420 380, 520 420, 620 440" fill="none" stroke="rgba(34,197,94,0.25)" />
        <path id="path-out-2" d="M 400 320 C 360 380, 260 420, 160 460" fill="none" stroke="rgba(34,197,94,0.25)" />

        {/* Malicious probes moving inward */}
        {packets.map((p, idx) => (
          <g key={p.id}>
            <circle r="5" fill={idx % 2 === 0 ? 'rgba(239,68,68,0.9)' : p.color}>
              <animateMotion dur={`${p.dur}s`} begin={`${p.delay}s`} repeatCount="indefinite">
                <mpath href={p.from} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* Outgoing clean traffic */}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`out-${i}`}>
            <circle r="4" fill={i % 2 ? '#22c55e' : '#60a5fa'}>
              <animateMotion dur={`${5 + (i % 3)}s`} begin={`${i * 0.8}s`} repeatCount="indefinite">
                <mpath href={i % 2 ? '#path-out-1' : '#path-out-2'} />
              </animateMotion>
            </circle>
          </g>
        ))}
      </svg>
    </div>
  )
}
