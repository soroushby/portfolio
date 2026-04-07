import { useEffect, useState } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'

const STEPS = ['Initializing', 'Loading assets', 'Preparing UI', 'Almost ready']

const LoadingScreen = ({ isLoading }) => {
  const [pct, setPct] = useState(0)
  const [stepIdx, setStepIdx] = useState(0)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading) return
    const controls = animate(0, 100, {
      duration: 1.2,
      delay: 0.2,
      ease: 'easeInOut',
      onUpdate: (v) => {
        const rounded = Math.round(v)
        setPct(rounded)
        setStepIdx(Math.min(Math.floor(rounded / 26), STEPS.length - 1))
      },
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
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 tech-grid opacity-20" />

          {/* Radial vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 75% 75% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Ambient orb — top-left */}
          <motion.div
            className="absolute w-[550px] h-[550px] rounded-full pointer-events-none -top-32 -left-32"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.13), transparent 65%)' }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Ambient orb — bottom-right */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-24 -right-24"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.09), transparent 65%)' }}
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          <div className="relative flex flex-col items-center gap-10">

            {/* ---- Logo + SVG rings ---- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative flex items-center justify-center"
              style={{ width: 200, height: 200 }}
            >
              {/* Soft glow behind logo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.20), transparent 60%)',
                  filter: 'blur(24px)',
                }}
              />

              {/* SVG spinner rings */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer arc — slow, forward */}
                <motion.circle
                  cx="100" cy="100" r="90"
                  stroke="url(#gradRing1)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="100 465"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '100px 100px' }}
                />
                {/* Middle arc — faster, reverse */}
                <motion.circle
                  cx="100" cy="100" r="74"
                  stroke="url(#gradRing2)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="64 401"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '100px 100px' }}
                />
                {/* Inner dots — very slow, forward */}
                <motion.circle
                  cx="100" cy="100" r="58"
                  stroke="rgba(232,121,249,0.28)"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeDasharray="5 23"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '100px 100px' }}
                />
                <defs>
                  <linearGradient id="gradRing1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#e879f9" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradRing2" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Logo text */}
              <div className="relative z-10">
                <span className="text-4xl font-bold font-mono select-none">
                  <span className="text-primary-light">&lt;</span>
                  <span className="gradient-text-animate">SB</span>
                  <span className="text-primary-light">/&gt;</span>
                </span>
              </div>
            </motion.div>

            {/* ---- Progress + status text ---- */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-3"
              style={{ width: 224 }}
            >
              {/* Status label + percentage */}
              <div className="flex items-center justify-between w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={stepIdx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.18 }}
                    className="text-[10px] font-mono tracking-[0.15em] uppercase"
                    style={{ color: 'rgba(139,92,246,0.75)' }}
                  >
                    {STEPS[stepIdx]}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[10px] font-mono text-primary-light tabular-nums">{pct}%</span>
              </div>

              {/* Progress bar track */}
              <div
                className="relative h-[3px] rounded-full w-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                {/* Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #22d3ee 100%)' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.2 }}
                />
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-y-0 w-16 rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)' }}
                  initial={{ left: '-15%' }}
                  animate={{ left: '120%' }}
                  transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.3 }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
