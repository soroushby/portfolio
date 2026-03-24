import { useNavigate } from 'react-router-dom'
import { Github, Linkedin, Mail, Youtube, MapPin } from 'lucide-react'
import clsx from 'clsx'

const footerNav = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/content-creation', label: 'Content' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const footerSocials = [
  { href: 'https://github.com/soroushby', icon: Github, label: 'GitHub', color: 'hover:text-text-primary' },
  { href: 'https://www.linkedin.com/in/soroush-bayanati-3546723a5/', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { href: 'mailto:sorosh.bayanati@gmail.com', icon: Mail, label: 'Email', color: 'hover:text-primary-light', noBlank: true },
  { href: 'https://youtube.com/@soccerpodcast', icon: Youtube, label: 'YouTube', color: 'hover:text-red-400' },
]

const Footer = () => {
  const navigate = useNavigate()

  const handleNav = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="no-print relative overflow-hidden bg-background-primary">
      {/* Top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <button
              onClick={() => handleNav('/')}
              className="font-mono text-xl font-bold mb-4 block hover:opacity-80 transition-opacity"
            >
              <span className="text-primary-light">&lt;</span>
              <span className="text-text-primary">SB</span>
              <span className="text-primary-light">/&gt;</span>
            </button>
            <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-[210px]">
              Building fast, modern web apps with clean code and thoughtful UX.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono mb-2">
              <MapPin className="w-3 h-3 text-accent" />
              Vancouver, BC, Canada
            </div>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-xs font-mono text-green-400">Open to work</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className="text-sm text-text-secondary hover:text-primary-light transition-colors duration-200 font-mono flex items-center gap-1.5 group"
                  >
                    <span className="text-primary/40 group-hover:text-primary transition-colors">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-4">Connect</p>
            <ul className="space-y-3">
              {footerSocials.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.noBlank ? undefined : '_blank'}
                      rel={social.noBlank ? undefined : 'noopener noreferrer'}
                      className={clsx(
                        'flex items-center gap-2.5 text-sm text-text-secondary transition-colors duration-200',
                        social.color
                      )}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0 text-text-muted" />
                      <span className="font-mono">{social.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted font-mono">
            © 2026{' '}
            <span className="text-primary font-medium">Soroush Bayanati</span>
            {' '}· All rights reserved
          </p>
          <p className="text-[11px] text-text-muted/60 font-mono">
            Built with{' '}
            <span className="text-primary">React 19</span>
            {' '}·{' '}
            <span className="text-accent">Tailwind CSS</span>
            {' '}·{' '}
            <span className="text-fuchsia">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
