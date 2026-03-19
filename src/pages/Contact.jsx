import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Youtube, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react'
import clsx from 'clsx'
import soccerPodcastLogo from '../assets/soccer-podcast-logo.jpg'
import persianRedArmyLogo from '../assets/persian-red-army-logo.jpg'
import footCourtLogo from '../assets/footcurt logo remake.jpg'
import catalanIranLogo from '../assets/catalan iran logo.png'

const socials = [
  {
    href: 'https://github.com/soroushby',
    icon: Github,
    label: 'GitHub',
    sub: 'github.com/soroushby',
    hover: 'hover:border-primary/30 hover:text-text-primary',
    iconColor: 'text-text-primary',
  },
  {
    href: 'https://www.linkedin.com/in/soroush-bayanati-3546723a5/',
    icon: Linkedin,
    label: 'LinkedIn',
    sub: 'soroush-bayanati',
    hover: 'hover:border-blue-400/40 hover:text-blue-400',
    iconColor: 'text-blue-400',
  },
]

const youtubeChannels = [
  { href: 'https://youtube.com/@soccerpodcast', logo: soccerPodcastLogo, name: 'SoccerPodcast', sub: '@soccerpodcast' },
  { href: 'https://youtube.com/@footcourtxi', logo: footCourtLogo, name: 'FootcourtXI', sub: '@footcourtxi' },
  { href: 'https://youtube.com/@persianredarmy', logo: persianRedArmyLogo, name: 'PersianRedArmy', sub: '@persianredarmy' },
  { href: 'https://youtube.com/@catalaniran', logo: catalanIranLogo, name: 'Catalaniran', sub: '@catalaniran' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required.'
    if (!formData.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email.'
    }
    if (!formData.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:sorosh.bayanati@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const inputCls = (hasError) => clsx(
    'w-full px-4 py-3 bg-background-tertiary border rounded-xl text-text-primary placeholder-text-muted/50 focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all outline-none text-sm font-sans',
    hasError ? 'border-red-500/60' : 'border-primary/20 hover:border-primary/40'
  )

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 min-h-screen bg-background-secondary tech-grid">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 glass border border-accent/25 px-5 py-2.5 rounded-full mb-5">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-accent">contact.init()</span>
          </div>
          <p className="section-label mb-3">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-text-primary mb-4">
            <span className="gradient-text">collaborate</span>
            <span className="text-text-muted">.together()</span>
          </h1>
          <p className="text-text-secondary font-mono text-sm max-w-lg mx-auto">
            <span className="text-primary/60">// </span>
            Currently available for full-time positions and interesting projects.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ---- Left: Info + Socials ---- */}
          <div className="space-y-5">
            {/* Contact info */}
            <motion.div variants={itemVariants} className="modern-card">
              <p className="section-label mb-3">Contact Details</p>
              <h2 className="text-xl font-bold font-mono text-text-primary mb-5">
                <span className="text-primary">info</span>
                <span className="text-text-muted">: &#123;</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Email</p>
                    <a href="mailto:sorosh.bayanati@gmail.com" className="text-primary hover:text-primary-light transition-colors text-sm font-medium break-all">
                      sorosh.bayanati@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Location</p>
                    <p className="text-sm text-text-secondary">Vancouver, BC, Canada</p>
                  </div>
                </div>
              </div>

              <p className="font-mono text-text-muted mt-5">&#125;</p>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="modern-card">
              <p className="section-label mb-3">Social Networks</p>
              <h2 className="text-lg font-bold font-mono text-text-primary mb-4">
                <span className="text-primary">socials</span>
                <span className="text-text-muted">: [</span>
              </h2>

              <div className="space-y-2.5 pl-2">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        'flex items-center gap-3 p-3.5 glass border border-primary/15 rounded-xl transition-all duration-200 group',
                        social.hover
                      )}
                    >
                      <div className="w-9 h-9 bg-background-tertiary border border-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                        <Icon className={clsx('w-4 h-4', social.iconColor)} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-text-primary text-sm">{social.label}</p>
                        <p className="text-xs text-text-muted truncate">{social.sub}</p>
                      </div>
                    </a>
                  )
                })}

                {/* YouTube channels */}
                <div className="pt-1">
                  <p className="text-xs font-mono text-text-muted mb-2 pl-1">// YouTube channels</p>
                  <div className="space-y-2">
                    {youtubeChannels.map((channel) => (
                      <a
                        key={channel.sub}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 glass border border-primary/10 rounded-xl hover:border-red-400/30 hover:text-red-400 transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary/20 flex-shrink-0">
                          <img src={channel.logo} alt={channel.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold font-mono text-text-primary text-xs">{channel.name}</p>
                          <p className="text-[10px] text-text-muted">{channel.sub}</p>
                        </div>
                        <Youtube className="w-3.5 h-3.5 text-red-400/60 group-hover:text-red-400 transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-mono text-text-muted mt-4">]</p>
            </motion.div>
          </div>

          {/* ---- Right: Contact form ---- */}
          <motion.div variants={itemVariants} className="modern-card h-fit">
            <p className="section-label mb-3">Message Form</p>
            <h2 className="text-xl font-bold font-mono text-text-primary mb-6">
              <span className="text-primary">sendMessage</span>
              <span className="text-text-muted">()</span>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-text-primary font-bold text-lg font-mono">Message sent!</h3>
                <p className="text-text-secondary text-sm max-w-xs">
                  Your email client should have opened. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary text-sm hover:text-primary-light transition-colors font-mono underline underline-offset-4"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputCls(!!errors.name)}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputCls(!!errors.email)}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or just say hi!"
                    className={clsx(inputCls(!!errors.message), 'resize-none')}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="w-full modern-btn justify-center text-base py-3.5"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>

                <p className="text-xs text-text-muted text-center font-mono">
                  Opens your default email client
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Direct email CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-text-muted text-sm mb-3">Or reach me directly</p>
          <a
            href="mailto:sorosh.bayanati@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 hover:bg-accent/20 hover:border-accent/50 text-accent font-semibold rounded-xl transition-all duration-200 hover:shadow-glow-cyan text-sm"
          >
            <Mail className="w-4 h-4" />
            sorosh.bayanati@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
