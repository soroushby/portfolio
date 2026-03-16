import { useState, useEffect, useRef } from 'react'
import { Mail, Github, Linkedin, Youtube, MapPin, MessageSquare } from 'lucide-react'
import { animate, stagger } from 'motion'
import soccerPodcastLogo from '../assets/soccer-podcast-logo.jpg'
import persianRedArmyLogo from '../assets/persian-red-army-logo.jpg'
import footCourtLogo from '../assets/footcurt logo remake.jpg'
import catalanIranLogo from '../assets/catalan iran logo.png'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const cardsRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)

    // Motion stagger animation for contact cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.contact-card')
      animate(
        cards,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.5, delay: stagger(0.1), easing: [0.25, 0.46, 0.45, 0.94] }
      )
    }
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen bg-background-secondary tech-grid">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 sm:space-x-3 glass border-2 border-primary/30 rounded-lg px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="font-semibold font-mono text-primary text-sm sm:text-base">contact.init()</span>
          </div>
          <p className="code-comment text-sm mb-3">Get In Touch</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-text-primary mb-4">
            <span className="text-primary">collaborate</span><span className="text-text-muted">.</span>together<span className="text-text-muted">()</span>
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-mono">
            <span className="text-primary">// </span>Currently available for full-time positions and interesting projects.<br/>
            <span className="text-primary">// </span>Feel free to reach out!
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="modern-card contact-card !p-4 sm:!p-6 opacity-0">
              <p className="code-comment text-sm mb-3">Contact Details</p>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-text-primary mb-4 sm:mb-6">
                <span className="text-primary">info</span><span className="text-text-muted">: {'{'}</span>
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 border-2 border-primary/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">Email</h3>
                    <a
                      href="mailto:sorosh.bayanati@gmail.com"
                      className="text-primary hover:text-primary-light transition-colors text-sm sm:text-base break-all"
                    >
                      sorosh.bayanati@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 border-2 border-accent/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">Location</h3>
                    <p className="text-text-secondary text-sm sm:text-base">Vancouver, BC, Canada</p>
                  </div>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-mono text-text-muted mt-4">{'}'}</p>
            </div>

            {/* Social Links */}
            <div className="modern-card contact-card !p-4 sm:!p-6 opacity-0">
              <p className="code-comment text-sm mb-3">Social Networks</p>
              <h2 className="text-lg sm:text-xl font-bold font-mono text-text-primary mb-4 sm:mb-6">
                <span className="text-primary">socials</span><span className="text-text-muted">: [</span>
              </h2>

              <div className="space-y-3 sm:space-y-4 pl-2 sm:pl-4">
                <a
                  href="https://github.com/soroushby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-text-primary text-sm sm:text-base">GitHub</p>
                    <p className="text-xs sm:text-sm text-text-secondary truncate">github.com/soroushby</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/soroush-bayanati-3546723a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-text-primary text-sm sm:text-base">LinkedIn</p>
                    <p className="text-xs sm:text-sm text-text-secondary truncate">linkedin.com/in/soroush-bayanati</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@soccerpodcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <img src={soccerPodcastLogo} alt="Soccer Podcast" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold font-mono text-text-primary text-sm sm:text-base">SoccerPodcast</p>
                    <p className="text-xs sm:text-sm text-text-secondary">@soccerpodcast</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@footcourtxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <img src={footCourtLogo} alt="FootCourt XI" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold font-mono text-text-primary text-sm sm:text-base">FootcourtXI</p>
                    <p className="text-xs sm:text-sm text-text-secondary">@footcourtxi</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@persianredarmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <img src={persianRedArmyLogo} alt="Persian Red Army" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold font-mono text-text-primary text-sm sm:text-base">PersianRedArmy</p>
                    <p className="text-xs sm:text-sm text-text-secondary">@persianredarmy</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@catalaniran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <img src={catalanIranLogo} alt="Catalan Iran" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold font-mono text-text-primary text-sm sm:text-base">Catalaniran</p>
                    <p className="text-xs sm:text-sm text-text-secondary">@catalaniran</p>
                  </div>
                </a>
              </div>
              <p className="text-lg sm:text-xl font-mono text-text-muted mt-4">]</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="modern-card contact-card !p-4 sm:!p-6 opacity-0">
              <p className="code-comment text-sm mb-3">Message Form</p>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-text-primary mb-4 sm:mb-6">
                <span className="text-primary">sendMessage</span><span className="text-text-muted">()</span>
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-text-primary font-semibold text-lg font-mono">Message sent!</p>
                  <p className="text-text-secondary text-sm text-center">Your email client should have opened. I'll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary text-sm hover:underline font-mono"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background-tertiary border rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-sm sm:text-base ${errors.name ? 'border-red-500' : 'border-primary/30'}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background-tertiary border rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-primary/30'}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background-tertiary border rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none text-sm sm:text-base ${errors.message ? 'border-red-500' : 'border-primary/30'}`}
                    placeholder="Tell me about your project or just say hi!"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all shadow-glow-md hover:shadow-glow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-xs sm:text-sm text-text-muted text-center">
                  This form will open your default email client
                </p>
              </form>
              )}
            </div>

            {/* Quick Email Link */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-text-secondary mb-3 sm:mb-4 text-sm sm:text-base">Or email me directly at:</p>
              <a
                href="mailto:sorosh.bayanati@gmail.com"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-light text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all shadow-glow-md hover:shadow-glow-lg text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate">sorosh.bayanati@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
