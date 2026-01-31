import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContentCreation from './pages/ContentCreation'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Update document title based on current page
    const titles = {
      home: 'Soroush Bayanati - Frontend Developer',
      projects: 'Projects - Soroush Bayanati',
      'content-creation': 'Content Creation - Soroush Bayanati',
      about: 'About - Soroush Bayanati',
      contact: 'Contact - Soroush Bayanati'
    }
    document.title = titles[currentPage] || 'Soroush Bayanati - Frontend Developer'
  }, [currentPage])

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page Content */}
      <main className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'content-creation' && <ContentCreation />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer */}
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
