import { lazy, Suspense, useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const ContentCreation = lazy(() => import('./pages/ContentCreation'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

gsap.registerPlugin(ScrollTrigger)

const PAGE_TITLES = {
  '/': 'Soroush Bayanati — Frontend Developer',
  '/projects': 'Projects — Soroush Bayanati',
  '/content-creation': 'Content Creation — Soroush Bayanati',
  '/about': 'About — Soroush Bayanati',
  '/contact': 'Contact — Soroush Bayanati',
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
  const [isLoading, setIsLoading] = useState(true)
  const lenisRef = useRef(null)
  const location = useLocation()

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Lenis smooth scroll — desktop only (touch devices use native scroll)
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

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

  // Scroll to top + refresh ScrollTrigger on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
    document.title = PAGE_TITLES[location.pathname] ?? PAGE_TITLES['/']
    setTimeout(() => ScrollTrigger.refresh(), 100)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-background-primary">
      <LoadingScreen isLoading={isLoading} />

      <CursorGlow />
      <Navigation />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Suspense fallback={null}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/content-creation" element={<ContentCreation />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  )
}

export default App
