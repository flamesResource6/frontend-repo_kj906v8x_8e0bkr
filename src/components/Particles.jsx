import { useEffect, useRef } from 'react'

export default function Particles({ count = 60, color = '#00FFA3' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frameId
    const DPR = window.devicePixelRatio || 1

    function resize() {
      canvas.width = canvas.clientWidth * DPR
      canvas.height = canvas.clientHeight * DPR
    }

    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1 + 0.2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * 0.6 + 0.2,
    }))

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = color
      particles.forEach(p => {
        p.x += p.vx * (p.z)
        p.y += p.vy * (p.z)
        if (p.x < -10) p.x = window.innerWidth + 10
        if (p.x > window.innerWidth + 10) p.x = -10
        if (p.y < -10) p.y = window.innerHeight + 10
        if (p.y > window.innerHeight + 10) p.y = -10
        ctx.globalAlpha = p.a
        ctx.beginPath()
        ctx.arc(p.x * DPR, p.y * DPR, p.r * p.z * DPR, 0, Math.PI * 2)
        ctx.fill()
      })
      frameId = requestAnimationFrame(draw)
    }

    function onResize() {
      resize()
    }

    resize()
    draw()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
    }
  }, [count, color])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
  )
}
