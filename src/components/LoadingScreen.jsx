import { useEffect, useState } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'

const LoadingScreen = ({ isLoading }) => {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    if (!isLoading) return
    const controls = animate(0, 100, {
      duration: 1.2,
      delay: 0.2,
      ease: 'easeInOut',
      onUpdate: (v) => setPct(Math.round(v)),
    })
    return controls.stop
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-primary overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background grid + radial */}
          <div className="absolute inset-0 tech-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-radial from-violet-950/50 via-transparent to-transparent" />

          {/* Ambient orbs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.18), transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12), transparent 70%)', right: '20%', top: '20%' }}
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo with rotating orbital ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Outer ambient glow */}
              <div className="absolute inset-[-50%] rounded-full blur-3xl" style={{ background: 'rgba(139, 92, 246, 0.12)' }} />

              {/* Rotating conic ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #a855f7, #22d3ee, #e879f9, #7c3aed)',
                  filter: 'blur(2px)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner mask */}
              <div className="absolute -inset-2 rounded-full bg-background-primary" />

              {/* Logo text */}
              <div className="relative px-7 py-4">
                <span className="text-5xl sm:text-6xl font-bold font-mono">
                  <span className="text-primary-light">&lt;</span>
                  <span className="gradient-text-animate">SB</span>
                  <span className="text-primary-light">/&gt;</span>
                </span>
              </div>
            </motion.div>

            {/* Progress bar + counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col items-center gap-2.5 w-52"
            >
              <div className="relative h-[2px] rounded-full overflow-hidden w-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-fuchsia rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.2 }}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-mono text-text-muted tracking-widest">initializing</span>
                <span className="text-[10px] font-mono text-primary">{pct}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
