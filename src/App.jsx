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
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const PAGE_TITLES = {
  home: 'Soroush Bayanati — Frontend Developer',
  projects: 'Projects — Soroush Bayanati',
  'content-creation': 'Content Creation — Soroush Bayanati',
  about: 'About — Soroush Bayanati',
  contact: 'Contact — Soroush Bayanati',
}

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: 'blur(4px)',
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const lenisRef = useRef(null)

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Lenis smooth scroll synced to GSAP ticker
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

  // Update document title
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] ?? PAGE_TITLES.home
  }, [currentPage])

  return (
    <div className="min-h-screen bg-background-primary">
      <LoadingScreen isLoading={isLoading} />

      <CursorGlow />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
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

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
