import { useEffect, useRef, useState } from 'react'

const CursorGlow = () => {
  const glowRef = useRef(null)
  const dotRef = useRef(null)
  const posRef = useRef({ x: -500, y: -500 })
  const rafRef = useRef(null)
  const [isMouse, setIsMouse] = useState(false)

  useEffect(() => {
    // Only show on precise pointer (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return
    setIsMouse(true)

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      const { x, y } = posRef.current
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!isMouse) return null

  return (
    <>
      {/* Outer glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(6, 182, 212, 0.02) 40%, transparent 70%)',
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'rgba(139, 92, 246, 0.95)',
          boxShadow: '0 0 8px rgba(139,92,246,0.9), 0 0 16px rgba(139,92,246,0.4)',
        }}
      />
    </>
  )
}

export default CursorGlow
