import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ isLoading }) => {
  // Lock body scroll during loading
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-violet-950/40 via-transparent to-transparent" />

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Glow behind logo */}
              <div className="absolute inset-[-50%] rounded-full bg-primary/20 blur-3xl" />
              <span className="relative text-5xl sm:text-6xl font-bold font-mono">
                <span className="text-primary-light">&lt;</span>
                <span className="gradient-text">SB</span>
                <span className="text-primary-light">/&gt;</span>
              </span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative h-px bg-white/5 rounded-full overflow-hidden" style={{ width: '180px' }}>
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-fuchsia rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.2 }}
                />
              </div>
              <motion.p
                className="text-xs font-mono text-text-muted tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.3, repeat: Infinity }}
              >
                initializing...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
