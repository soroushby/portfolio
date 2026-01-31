import { useState, useEffect } from 'react'
import { Code2, Rocket, Users, Briefcase, ArrowRight, Github, Linkedin, Mail, Youtube } from 'lucide-react'

const Home = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const primarySkills = [
    {
      name: 'React',
      icon: '⚛️',
      description: 'Building modern, component-based UIs'
    },
    {
      name: 'Next.js',
      icon: '▲',
      description: 'Full-stack React framework with SSR'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      description: 'Type-safe JavaScript development'
    }
  ]

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Briefcase },
    { label: 'Projects Delivered', value: '15+', icon: Code2 },
    { label: 'YouTube Subscribers', value: '40K+', icon: Users },
    { label: 'Lines of Code', value: '100K+', icon: Rocket }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background-primary tech-grid relative">
        <div className={`max-w-6xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {/* Main Heading */}
              <div>
                <p className="font-mono text-sm text-text-secondary mb-2">
                  <span className="text-primary">const</span> developer = {'{'}
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 pl-4">
                  Hi, I'm{' '}
                  <span className="text-primary font-mono neon-glow">Soroush</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-text-primary pl-4 font-mono">
                  role: <span className="text-primary-light">"Frontend Developer"</span>,
                  <br />
                  stack: <span className="text-primary-light">["React", "Next.js"]</span>
                </h2>
                <p className="font-mono text-sm text-text-secondary mt-2">{'}'}</p>
              </div>

              {/* Description */}
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                Building modern, performant web applications with clean code and thoughtful UX.
                Based in Vancouver, BC, with a passion for creating digital experiences that matter.
              </p>

              {/* Currently Learning Badge */}
              <div className="inline-block bg-background-secondary border border-primary/30 rounded-lg px-4 py-3 shadow-glow-sm">
                <p className="text-xs text-text-secondary mb-1">Currently learning</p>
                <p className="text-sm text-primary-light font-semibold">
                  React 19 | Next.js 15 | Advanced TypeScript
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="group modern-btn flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="modern-btn-outline"
                >
                  Get in Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/soroushby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-primary-light transition-colors rounded-lg hover:bg-primary/10"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/soroush-bayanati-3546723a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-primary-light transition-colors rounded-lg hover:bg-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:sorosh.bayanati@gmail.com"
                  className="p-2 text-text-secondary hover:text-primary-light transition-colors rounded-lg hover:bg-primary/10"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@soccerpodcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              {/* Card */}
              <div className="relative modern-card shadow-glow-lg border-animate">
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-primary/20">
                  <span className="text-sm font-mono font-semibold text-primary">$ system --status</span>
                  <div className="flex items-center space-x-2">
                    <div className="status-dot"></div>
                    <span className="text-xs font-mono font-semibold text-green-400">ONLINE</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={index}
                        className="glass p-4 rounded-lg border border-primary/20 hover:border-primary/50 hover:shadow-glow-md transition-all duration-300 group cursor-pointer"
                      >
                        <Icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-2xl font-bold font-mono text-primary mb-1 neon-glow">{stat.value}</p>
                        <p className="text-xs text-text-secondary font-mono">{stat.label}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-text-secondary mb-3 font-semibold">Current Location</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Vancouver, BC</p>
                      <p className="text-xs text-text-muted">Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Skills Section */}
      <section className="py-20 px-6 bg-background-secondary tech-grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="code-comment text-sm mb-3">Primary Tech Stack</p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary mb-4">
              tech.skills<span className="text-text-muted">()</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-mono text-sm">
              <span className="text-primary">// </span>Specialized in modern frontend technologies for building fast, scalable web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primarySkills.map((skill, index) => (
              <div
                key={index}
                className="group modern-card hover:border-primary/50 hover:shadow-glow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 font-mono text-xs text-text-muted">
                  {`0${index + 1}`}
                </div>
                <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold font-mono text-primary mb-2 group-hover:neon-glow transition-all">
                  {skill.name}
                </h3>
                <p className="text-sm text-text-secondary">{skill.description}</p>
                <div className="mt-3 font-mono text-xs text-text-muted">
                  <span className="text-primary-light">{'</'}</span>
                  <span className="text-primary">skill</span>
                  <span className="text-primary-light">{'>'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-6 bg-background-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Beyond the Code
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Beyond web development, I've built and scaled a multi-channel YouTube network to{' '}
            <span className="font-semibold text-primary neon-glow">40,000+ subscribers</span> and{' '}
            <span className="font-semibold text-primary neon-glow">190,000+ Instagram followers</span>.
            This unique combination of technical skills and digital product experience allows me to
            build applications that don't just work—they grow and engage users.
          </p>
          <button
            onClick={() => setCurrentPage('about')}
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-light font-semibold group"
          >
            <span>Learn more about me</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
