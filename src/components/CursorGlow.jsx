import { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const glowRef = useRef(null)
  const dotRef = useRef(null)
  const posRef = useRef({ x: -300, y: -300 })
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      const { x, y } = posRef.current
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 175}px, ${y - 175}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Soft outer glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, transparent 70%)',
        }}
      />
      {/* Center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(139, 92, 246, 0.9)',
          boxShadow: '0 0 10px rgba(139,92,246,0.9), 0 0 20px rgba(139,92,246,0.5)',
        }}
      />
    </>
  )
}

export default CursorGlow
