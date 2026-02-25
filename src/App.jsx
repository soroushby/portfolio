import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContentCreation from './pages/ContentCreation'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'

gsap.registerPlugin(ScrollTrigger)

const pageVariants = {
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(4px)',
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const lenisRef = useRef(null)

  // Lenis smooth scroll — wired to GSAP ticker so ScrollTrigger stays in sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tickerFn = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(tickerFn)
    }
  }, [])

  // Scroll to top + refresh ScrollTrigger on page change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
    setTimeout(() => ScrollTrigger.refresh(), 100)
  }, [currentPage])

  useEffect(() => {
    setIsLoaded(true)
    const titles = {
      home: 'Soroush Bayanati - Frontend Developer',
      projects: 'Projects - Soroush Bayanati',
      'content-creation': 'Content Creation - Soroush Bayanati',
      about: 'About - Soroush Bayanati',
      contact: 'Contact - Soroush Bayanati',
    }
    document.title = titles[currentPage] || 'Soroush Bayanati - Frontend Developer'
  }, [currentPage])

  return (
    <div className="min-h-screen bg-background-primary">
      <CursorGlow />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
            {currentPage === 'projects' && <Projects />}
            {currentPage === 'content-creation' && <ContentCreation />}
            {currentPage === 'about' && <About />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      <ScrollToTop />

      <footer className="no-print bg-background-secondary border-t border-primary/20 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-text-secondary text-sm">
          <p className="mb-2">© 2026 Soroush Bayanati. <span className="text-primary font-semibold">All rights reserved.</span></p>
          <p className="text-xs">Built with <span className="text-primary font-semibold">React</span> and <span className="text-primary-light font-semibold">Tailwind CSS</span> in Vancouver, BC</p>
        </div>
      </footer>
    </div>
  )
}

export default App
