import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'content-creation', label: 'Content Creation' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-primary/95 backdrop-blur-md border-b border-primary/30 shadow-glow-sm'
          : 'bg-background-primary/80 backdrop-blur-sm border-b border-primary/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold text-primary hover:text-primary-light transition-colors neon-glow"
          >
            <span className="text-primary-light">&lt;</span>
            SB
            <span className="text-primary-light">/&gt;</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  currentPage === item.id
                    ? 'bg-primary/20 text-primary-light border border-primary/30'
                    : 'text-text-secondary hover:text-primary-light hover:bg-primary/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 text-left font-medium transition-all duration-200 rounded-lg ${
                    currentPage === item.id
                      ? 'bg-primary/20 text-primary-light border border-primary/30'
                      : 'text-text-secondary hover:text-primary-light hover:bg-primary/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
