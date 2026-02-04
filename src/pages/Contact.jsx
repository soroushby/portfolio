import { useState, useEffect } from 'react'
import { Mail, Github, Linkedin, Youtube, MapPin, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:sorosh.bayanati@gmail.com?subject=${subject}&body=${body}`
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

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Contact Information */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '100ms' }}>
            <div className="modern-card !p-4 sm:!p-6">
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
            <div className="modern-card !p-4 sm:!p-6">
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors flex-shrink-0">
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
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
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="modern-card !p-4 sm:!p-6">
              <p className="code-comment text-sm mb-3">Message Form</p>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-text-primary mb-4 sm:mb-6">
                <span className="text-primary">sendMessage</span><span className="text-text-muted">()</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background-tertiary border border-primary/30 rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-sm sm:text-base"
                    placeholder="John Doe"
                  />
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
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background-tertiary border border-primary/30 rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
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
                    required
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background-tertiary border border-primary/30 rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or just say hi!"
                  />
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
