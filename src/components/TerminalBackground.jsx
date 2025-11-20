import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CodeRain from './CodeRain'
import CyberNetwork from './CyberNetwork'

// Enhanced full-screen cyber terminal background
export default function TerminalBackground() {
  const containerRef = useRef(null)
  const lineCountRef = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const commands = [
      'sudo journalctl -f',
      'tail -n 50 /var/log/auth.log',
      'dmesg | tail -n 20',
      'ss -tulpn | grep LISTEN',
      'top -b -n1 | head -n 5',
      'ps aux --sort=-%cpu | head -n 10',
      'ip -br a',
      'ufw status verbose',
      'last -n 5',
      'sha256sum /etc/ssh/sshd_config',
      'grep -i "failed" /var/log/auth.log | tail -n 5',
      'systemctl status ssh',
      'cat /etc/os-release',
      'whoami && hostnamectl --static',
      'df -h | grep -v tmpfs',
      'free -h',
      'uname -a',
      'journalctl -u nginx --since "1 hour ago" | tail -n 5',
    ]

    let cmdIndex = 0
    let charIndex = 0
    let typing = true
    let currentLine = document.createElement('div')
    currentLine.className = 'whitespace-pre font-mono text-[11px] leading-5 text-neutral-300/80'
    const prompt = () => `root@host:${`/`}$ `

    const addLine = (text) => {
      const line = document.createElement('div')
      line.className = 'whitespace-pre font-mono text-[11px] leading-5 text-neutral-300/80'
      line.textContent = text
      el.appendChild(line)
      lineCountRef.current += 1
      if (lineCountRef.current > 200) {
        for (let i = 0; i < 40; i++) {
          if (el.firstChild) el.removeChild(el.firstChild)
        }
        lineCountRef.current -= 40
      }
      el.scrollTop = el.scrollHeight
    }

    const resetCurrentLine = () => {
      currentLine = document.createElement('div')
      currentLine.className = 'whitespace-pre font-mono text-[11px] leading-5 text-neutral-300/80'
      el.appendChild(currentLine)
    }

    resetCurrentLine()

    const tick = () => {
      if (typing) {
        const full = prompt() + commands[cmdIndex]
        const toShow = full.slice(0, charIndex)
        currentLine.textContent = toShow + (charIndex % 2 === 0 ? '▂' : ' ')
        charIndex += 1
        if (charIndex > full.length) {
          typing = false
          charIndex = 0
          currentLine.textContent = full
        }
      } else {
        const outLines = Math.floor(Math.random() * 3) + 1
        for (let i = 0; i < outLines; i++) {
          const fake = generateOutput(commands[cmdIndex])
          addLine(fake)
        }
        addLine('')
        cmdIndex = (cmdIndex + 1) % commands.length
        typing = true
        resetCurrentLine()
      }
    }

    const interval = setInterval(tick, 36)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Cyber layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:100%_3px]" />

      {/* Animated network scene */}
      <div className="absolute inset-0 opacity-70">
        <CyberNetwork />
      </div>

      {/* Terminal stream container */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={containerRef} className="h-full w-full overflow-y-auto px-4 sm:px-12 py-10 text-neutral-300/80" />
      </div>

      {/* Code rain subtle layer */}
      <div className="absolute inset-0 mix-blend-screen opacity-30">
        <CodeRain />
      </div>

      {/* vignette and slight blur */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.2, 0.15] }} transition={{ duration: 1.2 }} />
    </div>
  )
}

function generateOutput(cmd) {
  const now = new Date().toISOString().replace('T', ' ').slice(0, 19)
  const samples = [
    `${now} kernel: audit: type=1100 id=${Math.floor(Math.random()*9999)} res=success`,
    `${now} sshd[${1000 + Math.floor(Math.random()*8999)}]: Accepted publickey for admin from 10.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)} port ${2000+Math.floor(Math.random()*20000)} ssh2`,
    `${now} systemd[1]: Started ${cmd.split(' ')[0]} service`,
    `${now} nginx[${100 + Math.floor(Math.random()*900)}]: 200 GET /healthz 127.0.0.1`,
    `${now} CRON[${Math.floor(Math.random()*5000)}]: (root) CMD (run-parts /etc/cron.hourly)`,
    `${now} IDS: anomaly-score=${Math.floor(Math.random()*100)} src=203.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)} dst=10.0.0.${Math.floor(Math.random()*200)}`,
    `${now} CI/CD: build #${Math.floor(Math.random()*500)} passed in ${(20+Math.random()*200).toFixed(1)}s`,
  ]
  return samples[Math.floor(Math.random() * samples.length)]
}
