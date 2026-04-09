import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion'
import { Code2, Rocket, Users, Briefcase, ArrowRight, Github, Linkedin, Mail, Youtube, MapPin, Trophy, Sparkles, ExternalLink } from 'lucide-react'
import clsx from 'clsx'
import reactLogo from '../assets/React-icon.svg.png'
import nextjsLogo from '../assets/nextjs.svg'
import typescriptLogo from '../assets/typescript.svg'
import claudeLogo from '../assets/Claude_AI_symbol.svg'
import profileImage from '../assets/Home-page-profile.jpg'
import ParticleCanvas from '../components/ParticleCanvas'

const HeroScene = lazy(() => import('../components/HeroScene'))

// ---- SplitText — character-level animation ----
const SplitText = ({ text, className, charDelay = 0, charStagger = 0.04 }) => (
  <span className={className} aria-label={text}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0, y: 36, rotateX: -80 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          delay: charDelay + i * charStagger,
          duration: 0.55,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ transformOrigin: 'bottom center' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
)

// ---- MagneticButton — follows cursor on hover ----
const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const deltaX = (e.clientX - rect.left - rect.width / 2) * 0.32
    const deltaY = (e.clientY - rect.top - rect.height / 2) * 0.32
    x.set(deltaX)
    y.set(deltaY)
  }

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 260, damping: 22 })
    animate(y, 0, { type: 'spring', stiffness: 260, damping: 22 })
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}

// ---- Typewriter ----
const TypeWriter = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const speed = deleting ? 40 : 90

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1800)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words])

  return <span className="text-primary-light typing-cursor">{text}</span>
}

// ---- Animated Counter ----
const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, numericPart, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, numericPart, duration])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

// ---- Gradient Orb ----
const GradientOrb = ({ className, style, animate: animateProps, transition }) => (
  <motion.div
    className={clsx('absolute rounded-full pointer-events-none', className)}
    style={style}
    animate={animateProps}
    transition={transition}
  />
)

// ---- Stagger variants ----
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---- Social links config ----
const socials = [
  { href: 'https://github.com/soroushby', icon: Github, label: 'GitHub', color: 'hover:text-white hover:bg-white/10' },
  { href: 'https://www.linkedin.com/in/soroush-bayanati-3546723a5/', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-500/10' },
  { href: 'mailto:sorosh.bayanati@gmail.com', icon: Mail, label: 'Email', color: 'hover:text-primary-light hover:bg-primary/10', noBlank: true },
  { href: 'https://youtube.com/@soccerpodcast', icon: Youtube, label: 'YouTube', color: 'hover:text-red-400 hover:bg-red-500/10' },
]

// ---- Stats ----
const stats = [
  { label: 'Years Experience', value: '3+', icon: Briefcase, iconBg: 'bg-violet-500/12 border-violet-500/20', iconColor: 'text-violet-400' },
  { label: 'Projects Delivered', value: '15+', icon: Code2, iconBg: 'bg-cyan-500/12 border-cyan-500/20', iconColor: 'text-cyan-400' },
  { label: 'YouTube Subscribers', value: '40K+', icon: Users, iconBg: 'bg-rose-500/12 border-rose-500/20', iconColor: 'text-rose-400' },
  { label: 'Lines of Code', value: '100K+', icon: Rocket, iconBg: 'bg-amber-500/12 border-amber-500/20', iconColor: 'text-amber-400' },
]

// ---- Coding skills (categorized) ----
const codingSkills = [
  { label: 'React 18/19', cat: 'frontend' },
  { label: 'React Router v7', cat: 'frontend' },
  { label: 'TanStack Router', cat: 'frontend' },
  { label: 'TanStack Query', cat: 'frontend' },
  { label: 'Next.js', cat: 'frontend' },
  { label: 'Remix', cat: 'frontend' },
  { label: 'TypeScript', cat: 'frontend' },
  { label: 'JavaScript', cat: 'frontend' },
  { label: 'Angular', cat: 'frontend' },
  { label: 'Tailwind CSS', cat: 'frontend' },
  { label: 'shadcn/ui', cat: 'frontend' },
  { label: 'Express', cat: 'backend' },
  { label: 'MongoDB', cat: 'backend' },
  { label: 'Drizzle ORM', cat: 'backend' },
  { label: 'Neon (PostgreSQL)', cat: 'backend' },
  { label: 'Clerk', cat: 'backend' },
  { label: 'Supabase', cat: 'backend' },
  { label: 'Resend', cat: 'backend' },
  { label: 'Prisma', cat: 'backend' },
  { label: 'Vite', cat: 'tools' },
  { label: 'Git/GitHub', cat: 'tools' },
  { label: 'Vercel', cat: 'tools' },
  { label: 'Claude AI', cat: 'ai' },
  { label: 'OpenAI', cat: 'ai' },
]

const skillTagStyles = {
  frontend: 'border-primary/25 text-primary-light hover:border-primary/50 hover:bg-primary/8',
  backend: 'border-accent/25 text-accent hover:border-accent/50 hover:bg-accent/8',
  tools: 'border-amber-500/25 text-amber-300 hover:border-amber-500/50 hover:bg-amber-500/8',
  ai: 'border-fuchsia/25 text-fuchsia hover:border-fuchsia/50 hover:bg-fuchsia/8',
}

const skillLegend = [
  { cat: 'frontend', label: 'Frontend', color: 'text-primary-light' },
  { cat: 'backend', label: 'Backend', color: 'text-accent' },
  { cat: 'tools', label: 'Tools', color: 'text-amber-300' },
  { cat: 'ai', label: 'AI', color: 'text-fuchsia' },
]

const Home = () => {
  const navigate = useNavigate()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const heroRef = useRef(null)
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  const spotlightX = useTransform(mouseX, [0, 1], ['-10%', '10%'])
  const spotlightY = useTransform(mouseY, [0, 1], ['-10%', '10%'])

  const handleMouseMove = (e) => {
    if (isTouch || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <div className="pt-16">
      <Helmet>
        <title>Soroush Bayanati — Frontend Developer</title>
        <meta name="description" content="Soroush Bayanati is a Vancouver-based frontend developer specializing in React 19, Next.js 15, and TypeScript. Explore his portfolio of full-stack web apps and AI-integrated projects." />
      </Helmet>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 bg-background-primary relative overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 tech-grid opacity-60" />
        <div className="absolute inset-0 bg-gradient-radial from-violet-950/30 via-transparent to-transparent hero-dark-overlay" />

        {/* Aurora atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[160%] h-[70%] opacity-[0.06]"
            style={{
              background: 'conic-gradient(from 220deg at 50% 0%, #7c3aed 0%, #a855f7 25%, #22d3ee 50%, #e879f9 75%, #7c3aed 100%)',
              filter: 'blur(90px)',
            }}
          />
        </div>

        {/* Gradient orbs — static on touch, animated on desktop */}
        <GradientOrb
          style={{ width: 580, height: 580, left: '-12%', top: '-12%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.30), transparent 70%)' }}
          animate={isTouch ? {} : { x: [0, 60, -30, 0], y: [0, -80, 40, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <GradientOrb
          style={{ width: 400, height: 400, right: '3%', top: '15%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.22), transparent 70%)' }}
          animate={isTouch ? {} : { x: [0, -50, 30, 0], y: [0, 60, -40, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <GradientOrb
          style={{ width: 300, height: 300, left: '40%', bottom: '8%',
            background: 'radial-gradient(circle, rgba(232, 121, 249, 0.20), transparent 70%)' }}
          animate={isTouch ? {} : { x: [0, 40, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.85, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <GradientOrb
          style={{ width: 260, height: 260, right: '20%', bottom: '20%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18), transparent 70%)' }}
          animate={isTouch ? {} : { x: [0, -30, 20, 0], y: [0, 30, -50, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Particle canvas — desktop only */}
        <div className="absolute inset-0">
          <ParticleCanvas />
        </div>

        {/* 3D floating geometry — desktop non-touch only */}
        {!isTouch && (
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
        )}

        {/* Mouse spotlight */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none opacity-40"
          style={{
            x: spotlightX,
            y: spotlightY,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 60%)',
            left: '20%',
            top: '10%',
          }}
        />

        <motion.div
          className="max-w-6xl w-full relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ---- Left: Text content ---- */}
            <div className="space-y-7 order-2 lg:order-1">
              {/* Status badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 glass border border-green-500/20 rounded-full px-4 py-2">
                <span className="status-dot" />
                <span className="text-xs sm:text-sm font-mono text-text-secondary">
                  Available for new opportunities
                </span>
              </motion.div>

              {/* Heading with SplitText */}
              <div className="space-y-2">
                <motion.p
                  variants={itemVariants}
                  className="font-mono text-sm text-text-muted"
                >
                  <span className="text-primary">const</span>{' '}
                  <span className="text-text-secondary">developer</span>{' '}
                  <span className="text-text-muted">= &#123;</span>
                </motion.p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] pl-4" style={{ perspective: '600px' }}>
                  <SplitText text="Hi, I'm " className="text-text-primary" charDelay={0.3} charStagger={0.035} />
                  {/* "Soroush" animates as a whole word — gradient-text-animate requires continuous text,
                      not inline-block char splits (background-clip:text breaks on inline-block children) */}
                  <motion.span
                    className="gradient-text-animate inline-block"
                    initial={{ opacity: 0, y: 36, rotateX: -80 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.9, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    Soroush
                  </motion.span>
                </h1>
                <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-mono text-text-secondary pl-4">
                  <span className="text-primary">role:</span>{' '}
                  <span className="text-text-secondary">"</span>
                  <TypeWriter words={['Frontend Developer', 'React Engineer', 'Content Creator', 'UI Craftsman']} />
                  <span className="text-text-secondary">"</span>
                  <span className="text-text-muted">,</span>
                </motion.div>
                <motion.p variants={itemVariants} className="font-mono text-sm text-text-muted">&#125;</motion.p>
              </div>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
                Building modern, performant web applications with clean code and thoughtful UX.
                Based in <span className="text-text-primary font-medium">Vancouver, BC</span>, passionate about
                creating digital experiences that matter.
              </motion.p>

              {/* Currently badge */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 border border-primary/25 bg-primary/5 rounded-lg px-4 py-2.5 cursor-default"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider">Currently mastering</p>
                  <p className="text-sm text-primary-light font-semibold">React 19 · Next.js 15 · Advanced TypeScript</p>
                </div>
              </motion.div>

              {/* CTA buttons — magnetic */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
                <MagneticButton
                  onClick={() => navigate('/projects')}
                  className="group modern-btn"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  onClick={() => navigate('/contact')}
                  className="modern-btn-outline"
                >
                  Get in Touch
                </MagneticButton>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                {socials.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.noBlank ? undefined : '_blank'}
                      rel={social.noBlank ? undefined : 'noopener noreferrer'}
                      aria-label={social.label}
                      className={clsx(
                        'p-2.5 rounded-lg text-text-muted transition-all duration-200',
                        social.color
                      )}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + i * 0.08 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
                <span className="w-px h-5 bg-text-secondary/25 mx-1" />
                <span className="text-xs font-mono text-text-muted">Find me online</span>
              </motion.div>
            </div>

            {/* ---- Right: Profile photo ---- */}
            <motion.div
              className="relative flex items-center justify-center order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Big glow behind photo */}
              <div className="absolute inset-[-20%] rounded-full bg-gradient-radial from-primary/20 via-accent/5 to-transparent blur-3xl" />

              <div className="relative">
                {/* Rotating gradient ring */}
                <motion.div
                  className="absolute -inset-3 sm:-inset-4 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #7c3aed, #a855f7, #22d3ee, #e879f9, #7c3aed)',
                    filter: 'blur(3px)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                {/* Inner mask */}
                <div className="absolute -inset-2 sm:-inset-2.5 rounded-full bg-background-primary" />

                {/* Photo */}
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <img
                    src={profileImage}
                    alt="Soroush Bayanati"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top', transform: 'scale(1.35)', transformOrigin: 'top center', filter: 'grayscale(1)' }}
                  />
                </div>

                {/* Floating badge: Experience */}
                <motion.div
                  className="hidden sm:block absolute -top-3 -right-4 sm:-right-10 glass border border-primary/30 rounded-xl px-3 py-2 text-xs font-mono whitespace-nowrap backdrop-blur-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="text-primary font-bold">3+</span>
                  <span className="text-text-secondary ml-1">yrs exp.</span>
                </motion.div>

                {/* Floating badge: Subscribers */}
                <motion.div
                  className="hidden sm:block absolute -bottom-3 -left-4 sm:-left-10 glass border border-cyan-400/25 rounded-xl px-3 py-2 text-xs font-mono whitespace-nowrap backdrop-blur-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <span className="text-cyan-400 font-bold">40K+</span>
                  <span className="text-text-secondary ml-1">subscribers</span>
                </motion.div>

                {/* Floating badge: Location */}
                <motion.div
                  className="hidden sm:flex absolute bottom-10 -right-4 sm:-right-14 items-center gap-1.5 glass border border-fuchsia/25 rounded-full px-3 py-1.5 text-xs whitespace-nowrap backdrop-blur-xl"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <MapPin className="w-3 h-3 text-fuchsia" />
                  <span className="text-text-secondary font-mono">Vancouver, BC</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ---- Stats row ---- */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="modern-card !p-4 sm:!p-5 flex flex-col items-center text-center group cursor-default"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className={clsx('mb-3 p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-110', stat.iconBg)}>
                    <Icon className={clsx('w-5 h-5', stat.iconColor)} />
                  </div>
                  <p className={clsx('text-2xl sm:text-3xl font-bold font-mono neon-glow', stat.iconColor)}>
                    <AnimatedCounter value={stat.value} duration={2 + index * 0.2} />
                  </p>
                  <p className="text-[10px] sm:text-xs text-text-muted font-mono mt-1">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Hero → Tech Stack divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* ================================================================
          PRIMARY TECH STACK
          ================================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background-secondary tech-grid overflow-hidden relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">Primary Tech Stack</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              <span className="gradient-text-purple">tech</span>
              <span className="text-text-muted">.skills()</span>
            </h2>
            <p className="mt-3 text-text-secondary text-sm font-mono max-w-lg mx-auto">
              <span className="text-primary/70">// </span>
              Specialized in modern frontend for fast, scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'React', logo: reactLogo, description: 'Component-based UI', tag: '19.x', glowColor: 'rgba(56,189,248,0.18)', glowHover: 'rgba(56,189,248,0.30)' },
              { name: 'Next.js', logo: nextjsLogo, description: 'Full-stack framework', tag: '15.x', glowColor: 'rgba(255,255,255,0.08)', glowHover: 'rgba(255,255,255,0.14)' },
              { name: 'TypeScript', logo: typescriptLogo, description: 'Type-safe development', tag: '5.x', glowColor: 'rgba(49,120,198,0.22)', glowHover: 'rgba(49,120,198,0.35)' },
              { name: 'Claude AI', logo: claudeLogo, description: 'AI-powered development', tag: 'API', glowColor: 'rgba(251,146,60,0.15)', glowHover: 'rgba(251,146,60,0.26)' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="modern-card hover:shadow-card-hover flex flex-col items-center text-center group cursor-default relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-3 right-3 px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono text-primary/70">
                  {skill.tag}
                </div>
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-5 rounded-2xl flex items-center justify-center p-3 border border-white/5 transition-all duration-300"
                  style={{ background: skill.glowColor, boxShadow: `0 0 32px ${skill.glowColor}` }}
                  whileHover={{ scale: 1.12, rotate: 4, boxShadow: `0 0 40px ${skill.glowHover}` }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className={clsx(
                      'w-full h-full object-contain',
                      skill.name === 'Next.js' && 'nextjs-logo'
                    )}
                  />
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold font-mono text-text-primary mb-1 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary">{skill.description}</p>
              </motion.div>
            ))}
          </div>
          {/* Tech → Profile divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>
      </section>

      {/* ================================================================
          PROFILE OVERVIEW (BENTO GRID)
          ================================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background-primary relative overflow-hidden">
        {/* Soft radial glow */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={false}
        >
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/8 to-transparent" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">Quick Snapshot</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              <span className="gradient-text-purple">profile</span>
              <span className="text-text-muted">.overview()</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

            {/* YouTube Network */}
            <motion.div
              className="col-span-1 sm:col-span-2 modern-card !p-5 sm:!p-6 group cursor-pointer hover:shadow-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              onClick={() => navigate('/content-creation')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-[10px] font-mono glass border border-primary/20 px-2 py-1 rounded-lg text-text-muted">content</span>
              </div>
              <p className="text-3xl sm:text-4xl font-bold font-mono text-primary neon-glow mb-1">40K+</p>
              <p className="text-sm text-text-secondary mb-1">YouTube Subscribers · 4 Channels</p>
              <p className="text-xs text-text-muted font-mono">+ 190K Instagram followers</p>
              <div className="mt-4 flex items-center gap-1 text-primary text-xs font-mono group-hover:gap-2 transition-all">
                <span>View channels</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="modern-card !p-4 sm:!p-5 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <p className="font-bold font-mono text-text-primary">Vancouver</p>
              <p className="text-xs text-text-secondary mt-0.5">BC, Canada</p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono bg-green-500/10 border border-green-500/20 text-green-400 px-2.5 py-1 rounded-full">
                <span className="status-dot w-1.5 h-1.5" />
                Open to work
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              className="modern-card !p-4 sm:!p-5 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Trophy className="w-4 h-4 text-primary" />
              </div>
              <p className="font-bold font-mono text-text-primary">3+ Years</p>
              <p className="text-xs text-text-secondary mt-0.5">Professional experience</p>
              <p className="text-xs font-mono text-primary mt-2">2 companies</p>
            </motion.div>

            {/* BCIT */}
            <motion.div
              className="modern-card !p-4 sm:!p-5 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -4 }}
            >
              <span className="text-2xl mb-3 block">🎓</span>
              <p className="font-bold font-mono text-text-primary text-sm">BCIT</p>
              <p className="text-xs text-text-secondary mt-0.5">New Media Design & Web Dev</p>
              <p className="text-xs font-mono text-primary mt-2">Class of 2026</p>
            </motion.div>

            {/* Skills cloud */}
            <motion.div
              className="col-span-1 sm:col-span-2 md:col-span-3 modern-card !p-4 sm:!p-5 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">coding_skills</p>
                <div className="flex gap-3">
                  {skillLegend.map(({ cat, label, color }) => (
                    <span key={cat} className={clsx('text-[9px] font-mono uppercase tracking-wider', color)}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {codingSkills.map((skill) => (
                  <span
                    key={skill.label}
                    className={clsx(
                      'px-2.5 py-1 glass border transition-all duration-200 text-[0.8rem] font-mono rounded-lg cursor-default',
                      skillTagStyles[skill.cat]
                    )}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FEATURED PROJECT
          ================================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background-secondary tech-grid relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">Featured Project</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono">
              <span className="gradient-text">latest</span>
              <span className="text-text-muted">.work()</span>
            </h2>
          </motion.div>

          <motion.div
            className="modern-card !p-0 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500" />

            <div className="p-6 sm:p-8 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
              {/* Left: info */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-semibold rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                  <span className="px-3 py-1 glass border border-primary/20 text-text-muted text-xs font-mono rounded-full">Full-Stack SaaS</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-mono text-text-primary mb-3">
                  DermIOnline —{' '}
                  <span className="text-teal-400">Async Dermatology Platform</span>
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
                  A live telemedicine platform where patients submit skin photos and a symptom form, and
                  a certified Swiss dermatologist responds within 48 hours. Built end-to-end with multi-role
                  auth, Stripe payments, PDF export, and full internationalization in English, French, and German.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'next-intl'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 glass border border-teal-500/20 text-teal-400 text-xs font-mono rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://dermionline.vercel.app/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn text-sm py-2.5 px-5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                  <button
                    onClick={() => navigate('/projects')}
                    className="modern-btn-outline text-sm py-2.5 px-5"
                  >
                    All Projects
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: browser mockup */}
              <div className="mt-8 lg:mt-0">
                <div className="rounded-xl overflow-hidden border border-primary/15 shadow-card bg-background-tertiary">
                  <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/5 bg-background-tertiary">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <div className="flex-1 mx-2 h-5 bg-background-primary/60 rounded border border-white/5 flex items-center justify-center overflow-hidden">
                      <span className="text-[9px] text-text-muted font-mono truncate px-2">dermionline.vercel.app/en</span>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-teal-500/5 to-transparent min-h-[180px] flex flex-col justify-center">
                    <div className="space-y-3">
                      {[
                        'Multi-role auth (patient, doctor, admin)',
                        'Stripe payment integration',
                        'Secure photo uploads + PDF export',
                        'GDPR & Swiss MedBG compliant',
                        'i18n: English, French, German',
                      ].map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                          <span className="text-xs text-text-secondary font-mono">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
