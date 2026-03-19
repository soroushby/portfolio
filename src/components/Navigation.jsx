import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { MoonIcon as Moon, SunIcon as Sun } from '@phosphor-icons/react'
import clsx from 'clsx'
import { useTheme } from '../contexts/ThemeContext'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'content-creation', label: 'Content' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className={clsx(
        'no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden',
        isScrolled
          ? 'bg-background-primary/90 backdrop-blur-xl border-b border-primary/10 shadow-nav'
          : 'bg-transparent'
      )}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left z-10 pointer-events-none"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 40%, #22d3ee 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="group flex items-center flex-shrink-0"
            aria-label="Go to home"
            whileHover={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))' }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xl font-bold font-mono tracking-tight">
              <span className="text-primary-light group-hover:text-accent transition-colors duration-300">&lt;</span>
              <span className="text-text-primary">SB</span>
              <span className="text-primary-light group-hover:text-accent transition-colors duration-300">/&gt;</span>
            </span>
          </motion.button>

          {/* Desktop Nav pills */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center p-1 bg-background-card/60 border border-primary/10 rounded-xl gap-0.5 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={clsx(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    currentPage === item.id
                      ? 'text-text-primary font-semibold'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Theme toggle + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-200"
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} weight="regular" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} weight="regular" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden border-t border-primary/10"
            >
              <div className="py-3 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045 }}
                    className={clsx(
                      'w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                      currentPage === item.id
                        ? 'bg-primary/15 text-primary-light border border-primary/25'
                        : 'text-text-secondary hover:text-text-primary hover:bg-primary/8'
                    )}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
