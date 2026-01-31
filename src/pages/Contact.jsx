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
    <div className="pt-24 pb-20 px-6 min-h-screen bg-background-secondary tech-grid">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 glass border-2 border-primary/30 rounded-lg px-6 py-3 mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
            <span className="font-semibold font-mono text-primary">contact.init()</span>
          </div>
          <p className="code-comment text-sm mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-text-primary mb-4">
            <span className="text-primary">collaborate</span><span className="text-text-muted">.</span>together<span className="text-text-muted">()</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-mono text-sm">
            <span className="text-primary">// </span>Currently available for full-time positions and interesting projects.<br/>
            <span className="text-primary">// </span>Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '100ms' }}>
            <div className="modern-card">
              <p className="code-comment text-sm mb-3">Contact Details</p>
              <h2 className="text-2xl font-bold font-mono text-text-primary mb-6">
                <span className="text-primary">info</span><span className="text-text-muted">: {'{'}</span>
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 border-2 border-primary/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Email</h3>
                    <a
                      href="mailto:sorosh.bayanati@gmail.com"
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      sorosh.bayanati@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 border-2 border-accent/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Location</h3>
                    <p className="text-text-secondary">Vancouver, BC, Canada</p>
                  </div>
                </div>
              </div>
              <p className="text-xl font-mono text-text-muted mt-4">{'}'}</p>
            </div>

            {/* Social Links */}
            <div className="modern-card">
              <p className="code-comment text-sm mb-3">Social Networks</p>
              <h2 className="text-xl font-bold font-mono text-text-primary mb-6">
                <span className="text-primary">socials</span><span className="text-text-muted">: [</span>
              </h2>

              <div className="space-y-4 pl-4">
                <a
                  href="https://github.com/soroushby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Github className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">GitHub</p>
                    <p className="text-sm text-text-secondary">github.com/soroushby</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/soroush-bayanati-3546723a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">LinkedIn</p>
                    <p className="text-sm text-text-secondary">linkedin.com/in/soroush-bayanati-3546723a5</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@soccerpodcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors">
                    <Youtube className="w-5 h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold font-mono text-text-primary">SoccerPodcast</p>
                    <p className="text-sm text-text-secondary">@soccerpodcast</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@footcourtxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors">
                    <Youtube className="w-5 h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold font-mono text-text-primary">FootcourtXI</p>
                    <p className="text-sm text-text-secondary">@footcourtxi</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@persianredarmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors">
                    <Youtube className="w-5 h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold font-mono text-text-primary">PersianRedArmy</p>
                    <p className="text-sm text-text-secondary">@persianredarmy</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@catalaniran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glass border border-primary/20 rounded-lg hover:border-red-400/50 hover:shadow-glow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-background-tertiary border-2 border-primary/30 rounded-lg flex items-center justify-center group-hover:border-red-400/50 transition-colors">
                    <Youtube className="w-5 h-5 text-text-secondary group-hover:text-red-400 transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold font-mono text-text-primary">Catalaniran</p>
                    <p className="text-sm text-text-secondary">@catalaniran</p>
                  </div>
                </a>
              </div>
              <p className="text-xl font-mono text-text-muted mt-4">]</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="modern-card">
              <p className="code-comment text-sm mb-3">Message Form</p>
              <h2 className="text-2xl font-bold font-mono text-text-primary mb-6">
                <span className="text-primary">sendMessage</span><span className="text-text-muted">()</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 bg-background-tertiary border border-primary/30 rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
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
                    className="w-full px-4 py-3 bg-background-tertiary border border-primary/30 rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
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
                    rows="6"
                    className="w-full px-4 py-3 bg-background-tertiary border border-primary/30 rounded-lg text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-glow-md hover:shadow-glow-lg flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-text-muted text-center">
                  This form will open your default email client
                </p>
              </form>
            </div>

            {/* Quick Email Link */}
            <div className="mt-6 text-center">
              <p className="text-text-secondary mb-4">Or email me directly at:</p>
              <a
                href="mailto:sorosh.bayanati@gmail.com"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-glow-md hover:shadow-glow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>sorosh.bayanati@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
