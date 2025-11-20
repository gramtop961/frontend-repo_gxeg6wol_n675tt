import { useEffect, useRef } from 'react'

// Subtle code rain layer with performance-friendly canvas
export default function CodeRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const cols = Math.floor(width / 16)
    const yPos = Array(cols).fill(0)

    let raf
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.35)'
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = 'rgba(200,200,200,0.5)'
      ctx.font = '12px monospace'

      yPos.forEach((y, i) => {
        const text = String.fromCharCode(33 + Math.random() * 94)
        const x = i * 16
        ctx.fillText(text, x, y)
        if (y > 100 + Math.random() * 10000) yPos[i] = 0
        else yPos[i] = y + 16
      })

      raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', onResize)
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
