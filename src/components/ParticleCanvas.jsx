import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 70
const CONNECT_DIST = 130
const MOUSE_DIST = 160

const ParticleCanvas = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -999, y: -999 })
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      // Re-scatter particles on resize
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const pts = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.98, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139,92,246,0.55)'
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT_DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(139,92,246,${0.25 * (1 - d / CONNECT_DIST)})`
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        }

        // Connect to mouse
        const mdx = p.x - mx
        const mdy = p.y - my
        const md = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < MOUSE_DIST) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(167,139,250,${0.7 * (1 - md / MOUSE_DIST)})`
          ctx.lineWidth = 1.8
          ctx.stroke()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default ParticleCanvas
