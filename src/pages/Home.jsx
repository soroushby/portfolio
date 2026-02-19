import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion'
import { Code2, Rocket, Users, Briefcase, ArrowRight, Github, Linkedin, Mail, Youtube } from 'lucide-react'
import reactLogo from '../assets/React-icon.svg.png'
import nextjsLogo from '../assets/nextjs.svg'
import typescriptLogo from '../assets/typescript.svg'
import claudeLogo from '../assets/Claude_AI_symbol.svg'

// Animated counter component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(0, numericPart, {
        duration,
        ease: 'easeOut',
        onUpdate: (v) => setDisplayValue(Math.round(v)),
      })
      return () => controls.stop()
    }
  }, [inView, numericPart, duration])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

// Floating code particles
const codeSnippets = [
  'const', 'React', '<div>', 'async', '=>', '{}', 'npm', 'git', 'useState', 'export',
  '</>', 'import', 'return', 'props', 'tsx', '.map()', 'await', 'fetch', 'query', 'route'
]

const FloatingParticle = ({ snippet }) => {
  const randomX = Math.random() * 100
  const randomDelay = Math.random() * 5
  const randomDuration = 15 + Math.random() * 20
  const randomSize = 10 + Math.random() * 4

  return (
    <motion.span
      className="absolute font-mono pointer-events-none select-none"
      style={{
        left: `${randomX}%`,
        fontSize: `${randomSize}px`,
        color: 'rgba(139, 92, 246, 0.15)',
      }}
      initial={{ y: '110vh', opacity: 0 }}
      animate={{
        y: '-10vh',
        opacity: [0, 0.4, 0.4, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {snippet}
    </motion.span>
  )
}

// Floating gradient orb
const GradientOrb = ({ size, color, initialX, initialY, duration }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      background: color,
      filter: `blur(${size / 2.5}px)`,
      opacity: 0.4,
    }}
    animate={{
      x: [initialX, initialX + 80, initialX - 60, initialX + 40, initialX],
      y: [initialY, initialY - 100, initialY + 60, initialY - 40, initialY],
      scale: [1, 1.2, 0.9, 1.1, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

// Stagger container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Home = ({ setCurrentPage }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const heroRef = useRef(null)

  const gradientX = useTransform(mouseX, [0, 1], [-15, 15])
  const gradientY = useTransform(mouseY, [0, 1], [-15, 15])

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Briefcase },
    { label: 'Projects Delivered', value: '15+', icon: Code2 },
    { label: 'YouTube Subscribers', value: '40K+', icon: Users },
    { label: 'Lines of Code', value: '100K+', icon: Rocket },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-background-primary tech-grid relative overflow-hidden"
      >
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <GradientOrb
            size={400}
            color="radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)"
            initialX={-100}
            initialY={-50}
            duration={20}
          />
          <GradientOrb
            size={300}
            color="radial-gradient(circle, rgba(124, 58, 237, 0.25), transparent 70%)"
            initialX={600}
            initialY={300}
            duration={25}
          />
          <GradientOrb
            size={200}
            color="radial-gradient(circle, rgba(167, 139, 250, 0.2), transparent 70%)"
            initialX={200}
            initialY={500}
            duration={18}
          />
        </div>

        {/* Floating code particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {codeSnippets.map((snippet, i) => (
            <FloatingParticle key={i} snippet={snippet} index={i} />
          ))}
        </div>

        {/* Mouse-following gradient spotlight */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            x: gradientX,
            y: gradientY,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06), transparent 60%)',
            left: '30%',
            top: '20%',
          }}
        />

        <motion.div
          className="max-w-6xl w-full relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {/* Main Heading */}
              <div>
                <motion.p
                  variants={itemVariants}
                  className="font-mono text-sm text-text-secondary mb-2"
                >
                  <span className="text-primary">const</span> developer = {'{'}
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-4 pl-4"
                >
                  Hi, I'm{' '}
                  <motion.span
                    className="text-primary font-mono neon-glow inline-block"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Soroush
                  </motion.span>
                </motion.h1>
                <motion.h2
                  variants={itemVariants}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-primary pl-4 font-mono"
                >
                  role: <span className="text-primary-light">"Frontend Developer"</span>,
                  <br />
                  stack: <span className="text-primary-light">["React", "Next.js", "Remix"]</span>
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="font-mono text-sm text-text-secondary mt-2"
                >
                  {'}'}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-text-secondary leading-relaxed max-w-xl"
              >
                Building modern, performant web applications with clean code and thoughtful UX.
                Based in Vancouver, BC, with a passion for creating digital experiences that matter.
              </motion.p>

              {/* Currently Learning Badge */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                className="inline-block bg-background-secondary border border-primary/30 rounded-lg px-4 py-3 shadow-glow-sm"
              >
                <p className="text-xs text-text-secondary mb-1">Currently learning</p>
                <p className="text-sm text-primary-light font-semibold">
                  React 19 | Next.js 15 | Advanced TypeScript
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  onClick={() => setCurrentPage('projects')}
                  className="group modern-btn flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={() => setCurrentPage('contact')}
                  className="modern-btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4">
                {[
                  { href: 'https://github.com/soroushby', icon: Github, label: 'GitHub', hoverClass: 'hover:text-primary-light hover:bg-primary/10' },
                  { href: 'https://www.linkedin.com/in/soroush-bayanati-3546723a5/', icon: Linkedin, label: 'LinkedIn', hoverClass: 'hover:text-primary-light hover:bg-primary/10' },
                  { href: 'mailto:sorosh.bayanati@gmail.com', icon: Mail, label: 'Email', hoverClass: 'hover:text-primary-light hover:bg-primary/10', noBlank: true },
                  { href: 'https://youtube.com/@soccerpodcast', icon: Youtube, label: 'YouTube', hoverClass: 'hover:text-red-400 hover:bg-red-500/10' },
                ].map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.noBlank ? undefined : '_blank'}
                      rel={social.noBlank ? undefined : 'noopener noreferrer'}
                      className={`p-2 text-text-secondary transition-colors rounded-lg ${social.hoverClass}`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* Right Column - Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Glow behind card */}
              <motion.div
                className="absolute -inset-4 rounded-2xl opacity-50 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15), transparent 70%)',
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative modern-card !p-4 sm:!p-6 shadow-glow-lg border-animate"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-primary/20">
                  <span className="text-sm font-mono font-semibold text-primary">$ system --status</span>
                  <div className="flex items-center space-x-2">
                    <div className="status-dot"></div>
                    <span className="text-xs font-mono font-semibold text-green-400">ONLINE</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={index}
                        className="glass p-3 sm:p-4 rounded-lg border border-primary/20 hover:border-primary/50 hover:shadow-glow-md transition-all duration-300 group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.15, duration: 0.4 }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-xl sm:text-2xl font-bold font-mono text-primary mb-1 neon-glow">
                          <AnimatedCounter value={stat.value} duration={2 + index * 0.3} />
                        </p>
                        <p className="text-[10px] sm:text-xs text-text-secondary font-mono">{stat.label}</p>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  className="mt-6 pt-6 border-t border-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <p className="text-sm text-text-secondary mb-3 font-semibold">Current Location</p>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <span className="text-lg">📍</span>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-primary">Vancouver, BC</p>
                      <p className="text-xs text-text-muted">Canada</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Primary Skills Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-background-secondary tech-grid overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="code-comment text-sm mb-3">Primary Tech Stack</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-primary mb-4">
              tech.skills<span className="text-text-muted">()</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-mono text-sm">
              <span className="text-primary">// </span>Specialized in modern frontend technologies for building fast, scalable web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'React', logo: reactLogo, description: 'Component-based UI' },
              { name: 'Next.js', logo: nextjsLogo, description: 'Full-stack framework' },
              { name: 'TypeScript', logo: typescriptLogo, description: 'Type-safe development' },
              { name: 'Claude', logo: claudeLogo, description: 'AI-powered development' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="group modern-card hover:border-primary/50 hover:shadow-glow-lg transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="absolute top-2 right-2 font-mono text-xs text-text-muted">
                  {`0${index + 1}`}
                </div>
                <motion.div
                  className="w-16 h-16 mb-3 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className={`w-full h-full object-contain ${
                      skill.name === 'Next.js' ? 'brightness-0 invert' : ''
                    }`}
                  />
                </motion.div>
                <h3 className="text-xl font-bold font-mono text-primary mb-2 group-hover:neon-glow transition-all">
                  {skill.name}
                </h3>
                <p className="text-sm text-text-secondary">{skill.description}</p>
                <div className="mt-3 font-mono text-xs text-text-muted">
                  <span className="text-primary-light">{'</'}</span>
                  <span className="text-primary">skill</span>
                  <span className="text-primary-light">{'>'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-background-primary relative overflow-hidden">
        {/* Subtle background orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)',
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Beyond the Code
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beyond web development, I've built and scaled a multi-channel YouTube network to{' '}
            <motion.span
              className="font-semibold text-primary neon-glow inline-block"
              whileInView={{ scale: [1, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              40,000+ subscribers
            </motion.span>{' '}
            and{' '}
            <motion.span
              className="font-semibold text-primary neon-glow inline-block"
              whileInView={{ scale: [1, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              190,000+ Instagram followers
            </motion.span>.
            This unique combination of technical skills and digital product experience allows me to
            build applications that don't just work—they grow and engage users.
          </motion.p>
          <motion.button
            onClick={() => setCurrentPage('about')}
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-light font-semibold group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn more about me</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
