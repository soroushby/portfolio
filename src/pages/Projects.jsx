import { useState, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Calendar, Layers, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { GithubLogoIcon as GithubLogo } from '@phosphor-icons/react'
import clsx from 'clsx'
import weatherNowScreenshot from '../assets/Weather-now.png'
import liftingDiaryScreenshot from '../assets/lifting-diary.png'

// ---- Browser chrome frame for screenshots ----
const BrowserFrame = ({ src, alt, liveUrl }) => (
  <div className="rounded-xl overflow-hidden border border-primary/15 shadow-card bg-background-tertiary">
    <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/5 bg-background-tertiary">
      <div className="flex gap-1.5 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="flex-1 mx-2 h-5 bg-background-primary/60 rounded border border-white/5 flex items-center justify-center overflow-hidden">
        {liveUrl && (
          <span className="text-[9px] text-text-muted font-mono truncate px-2">
            {liveUrl.replace('https://', '')}
          </span>
        )}
      </div>
    </div>
    <div className="aspect-video overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
  </div>
)

// ---- 3D Tilt Card ----
const TiltCard = ({ children, className }) => {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -5
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 5
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`
    card.style.transition = 'transform 0.08s ease'
  }

  const onMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)'
    card.style.transition = 'transform 0.5s ease'
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  )
}

// ---- Expandable features list ----
const FeaturesList = ({ features }) => {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? features : features.slice(0, 4)

  return (
    <div>
      <ul className="space-y-2">
        {visible.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="flex items-start gap-2.5 text-text-secondary group/item"
          >
            <span className="text-primary mt-1 flex-shrink-0 font-mono text-sm group-hover/item:scale-125 transition-transform">›</span>
            <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
          </motion.li>
        ))}
      </ul>
      {features.length > 4 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary-light transition-colors"
        >
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          {expanded ? 'Show less' : `+${features.length - 4} more features`}
        </button>
      )}
    </div>
  )
}

const projects = [
  {
    title: 'DermIOnline — Async Dermatology Consultation Platform',
    company: 'Personal Project',
    duration: 'January 2025 - Present',
    type: 'Full-Stack SaaS Web Application',
    category: 'Full-Stack',
    featured: true,
    live: 'https://www.dermionline.com',
    color: 'from-teal-600/20 to-emerald-600/10',
    accent: 'text-teal-400',
    accentBg: 'bg-teal-500/10 border-teal-500/20',
    accentLine: 'from-teal-500 via-emerald-500 to-cyan-500',
    description: 'Full-stack async telemedicine platform where patients submit skin photos and a symptom intake form, and a certified Swiss dermatologist responds within 48 hours with a written assessment and recommendations. Built end-to-end: multi-role auth, Stripe payments, secure file uploads, PDF export, email/WhatsApp notifications, and full internationalization in English, French, and German. Designed to serve patients across Switzerland, Germany, France, Canada, and more — compliant with Swiss medical law (MedBG) and GDPR.',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Row Level Security',
      'Stripe',
      'Tailwind CSS v4',
      'shadcn/ui',
      'Framer Motion',
      'next-intl',
      'Resend',
      'Twilio WhatsApp API',
      'pdf-lib',
      'Vercel',
    ],
    features: [
      'Multi-role auth system (patient, doctor, admin) with Google OAuth and email/password via Supabase Auth',
      'Stripe payment integration with server-side price enforcement per consultation',
      'Structured symptom intake form with Zod validation and server actions',
      'Secure photo uploads (3–5 photos) to private Supabase Storage with signed URL access',
      'Doctor dashboard with consultation queue, patient form viewer, and response editor',
      'Automated email notifications to patients (Resend) and WhatsApp alerts to doctor (Twilio)',
      'PDF export of completed consultations using pdf-lib',
      'Full internationalization in English, French, and German with URL-based routing (/en, /fr, /de)',
      'Row Level Security policies ensuring patients can only access their own data',
      'Deployed on Vercel with Supabase EU-region (Frankfurt) for GDPR compliance',
    ],
  },
  {
    title: 'QuoteCraft — AI Quote Generator',
    company: 'Personal Project',
    duration: 'March 2026',
    type: 'Full-Stack SaaS',
    category: 'SaaS & AI',
    featured: true,
    github: 'https://github.com/soroushby/Qoutecraft',
    live: 'https://qoutecraft.vercel.app/',
    color: 'from-violet-600/20 to-purple-600/10',
    accent: 'text-violet-400',
    accentBg: 'bg-violet-500/10 border-violet-500/20',
    accentLine: 'from-violet-500 via-purple-500 to-primary',
    description: 'An AI-powered quoting tool built for Canadian contractors. Users describe a job in plain text (or via voice input), and Claude AI generates a fully itemized professional estimate with Vancouver market rates, GST calculation, and a grand total — all in seconds.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Clerk', 'Claude API', 'Supabase', 'Resend', 'Vercel'],
    features: [
      'AI-generated line-item quotes using Anthropic Claude API',
      'Voice input via browser SpeechRecognition API',
      'Inline editable line items with auto-recalculated totals',
      'Company branding with logo upload (base64)',
      'One-click email delivery to clients via Resend',
      'Saved quotes dashboard with status tracking (Draft / Sent / Accepted)',
      'Usage-based free tier (5 quotes/month) with pricing page',
      'Authentication with Clerk, persistence in Supabase',
    ],
  },
  {
    title: 'Modern Developer Portfolio',
    company: 'Personal Project',
    duration: '2025 – 2026',
    type: 'Portfolio Website',
    category: 'Frontend',
    featured: false,
    github: 'https://github.com/soroushby/portfolio',
    live: 'https://soroushby.github.io/portfolio/',
    color: 'from-cyan-600/20 to-blue-600/10',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10 border-cyan-500/20',
    accentLine: 'from-cyan-500 via-blue-500 to-primary',
    description: 'Modern, responsive portfolio built with React 19 and the latest frontend best practices. Features smooth animations powered by Framer Motion, GSAP scroll triggers, Lenis smooth scroll, and a polished dark design system with glassmorphism cards.',
    technologies: ['React 19', 'Framer Motion', 'GSAP', 'Lenis', 'Tailwind CSS', 'Vite', 'JavaScript ES6+'],
    features: [
      'React 19 with clean component-based architecture',
      'Advanced animations — Framer Motion + GSAP ScrollTrigger',
      'Lenis smooth scroll synced to GSAP ticker',
      'Animated loading screen and page transitions',
      'Interactive particle canvas with physics simulation',
      'Profile photo hero with rotating gradient ring',
      'SEO-optimized with OG tags and sitemap',
    ],
  },
  {
    title: 'WorkOut — Lifting Diary App',
    screenshot: liftingDiaryScreenshot,
    company: 'Personal Project',
    duration: 'February 2026',
    type: 'Full-Stack Application',
    category: 'Full-Stack',
    featured: true,
    github: 'https://github.com/soroushby/WorkOut-app',
    live: 'https://work-out-7kj567x9t-soroush-bayanatis-projects.vercel.app/',
    color: 'from-emerald-600/20 to-green-600/10',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10 border-emerald-500/20',
    accentLine: 'from-emerald-500 via-green-500 to-teal-500',
    description: 'Full-stack workout tracking app built with Next.js App Router, TypeScript, and serverless PostgreSQL. Features Clerk auth, type-safe DB access with Drizzle ORM on Neon, and a polished UI with shadcn/ui and Radix UI.',
    technologies: ['Next.js', 'React 19', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'Drizzle ORM', 'Neon', 'Clerk', 'Zod'],
    features: [
      'Next.js App Router with server components and file-based routing',
      'Full auth and user management powered by Clerk',
      'Type-safe serverless PostgreSQL via Neon + Drizzle ORM',
      'Schema validation and type inference with Zod',
      'Accessible, composable UI from shadcn/ui and Radix UI',
      'Workout logging, exercise history, and progress tracking',
      'Deployed on Vercel with edge-compatible database',
    ],
  },
  {
    title: 'WeatherNow — Weather Dashboard',
    screenshot: weatherNowScreenshot,
    company: 'Personal Project',
    duration: 'February 2026',
    type: 'Web Application',
    category: 'Frontend',
    featured: false,
    github: 'https://github.com/soroushby/WeatherApp',
    live: 'https://soroushby.github.io/WeatherApp/',
    color: 'from-sky-600/20 to-indigo-600/10',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10 border-sky-500/20',
    accentLine: 'from-sky-500 via-indigo-500 to-blue-500',
    description: 'Modern weather dashboard with React, TanStack Router, and TanStack Query. Features multi-page routing, real-time OpenWeather API data, geolocation, favorites management, and dynamic accent colors based on weather conditions.',
    technologies: ['React 18', 'TanStack Router', 'TanStack Query', 'Tailwind CSS', 'OpenWeather API', 'Vite'],
    features: [
      'Multi-page routing with TanStack Router and lazy-loaded components',
      'Advanced data fetching and caching with TanStack Query',
      'Real-time weather: current conditions, 24h forecast, 5-day forecast',
      'Geolocation API for automatic city detection',
      'Favorites and search history stored in localStorage',
      'Dynamic accent colors based on weather conditions',
      'Fully responsive for desktop and mobile',
    ],
  },
  {
    title: 'Ultimate System Web Application',
    company: 'Ultimate System',
    duration: 'Aug 2022 – Present',
    type: 'Enterprise Application',
    category: 'Enterprise',
    featured: false,
    color: 'from-orange-600/20 to-amber-600/10',
    accent: 'text-orange-400',
    accentBg: 'bg-orange-500/10 border-orange-500/20',
    accentLine: 'from-orange-500 via-amber-500 to-yellow-500',
    description: 'Enterprise web application built with Angular, TypeScript, and RxJS for a Vancouver-based tech company. Features complex UI components using Angular Material and Kendo UI, modular architecture, and ag-Grid for data visualization.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Kendo UI', 'ag-Grid'],
    features: [
      'Modular component architecture for scalability',
      'Responsive Angular Material design',
      'Complex data grids with ag-Grid',
      'RESTful API integration',
      'Comprehensive unit and integration testing',
    ],
  },
  {
    title: 'MD Swiss Pharma Patient System',
    company: 'MD Swiss Pharma GmbH',
    duration: 'Jun 2021 – Jul 2022',
    type: 'Healthcare Application',
    category: 'Enterprise',
    featured: false,
    color: 'from-rose-600/20 to-pink-600/10',
    accent: 'text-rose-400',
    accentBg: 'bg-rose-500/10 border-rose-500/20',
    accentLine: 'from-rose-500 via-pink-500 to-fuchsia-500',
    description: 'Pharmaceutical patient management system built with React and TypeScript. Custom UI components, full REST API integration, and performance optimization for large datasets.',
    technologies: ['React', 'TypeScript', 'REST API', 'CSS3', 'JavaScript ES6+', 'Git'],
    features: [
      'Patient data dashboard with real-time updates',
      'Custom React components for complex form handling',
      'Full REST API integration',
      'Performance optimization for large patient datasets',
      'Comprehensive error handling and QA collaboration',
    ],
  },
]

const FILTERS = [
  { id: 'All', label: 'All Projects' },
  { id: 'SaaS & AI', label: 'SaaS & AI' },
  { id: 'Full-Stack', label: 'Full-Stack' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Enterprise', label: 'Enterprise' },
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  )

  const counts = useMemo(() => {
    const map = {}
    projects.forEach((p) => { map[p.category] = (map[p.category] || 0) + 1 })
    return map
  }, [])

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 bg-background-secondary min-h-screen tech-grid">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 glass border border-primary/25 px-5 py-2.5 rounded-full mb-5">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">portfolio.projects</span>
          </div>
          <p className="section-label mb-3">My Work</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-text-primary mb-4">
            <span className="text-primary">const</span>{' '}
            <span className="gradient-text-purple">projects</span>
            <span className="text-text-muted"> = [</span>
          </h1>
          <p className="text-text-secondary font-mono text-sm">
            <span className="text-primary/60">// </span>
            Full-stack web apps — SaaS, AI integrations, and enterprise systems
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {FILTERS.map((filter) => {
            const count = filter.id === 'All' ? projects.length : (counts[filter.id] || 0)
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={clsx(
                  'relative px-4 py-2 text-sm font-mono rounded-xl border transition-all duration-200 flex items-center gap-2',
                  isActive
                    ? 'text-primary border-primary/40 bg-primary/10 shadow-glow-sm'
                    : 'text-text-muted border-primary/15 hover:border-primary/30 hover:text-text-secondary hover:bg-primary/5'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="filter-active"
                    className="absolute inset-0 bg-primary/8 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{filter.label}</span>
                <span className={clsx(
                  'relative text-xs px-1.5 py-0.5 rounded-md font-semibold',
                  isActive ? 'bg-primary/20 text-primary' : 'bg-primary/8 text-text-muted'
                )}>
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Projects List */}
        <AnimatePresence mode="popLayout">
          <div className="space-y-6 sm:space-y-8">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <TiltCard>
                  <div className={clsx(
                    'modern-card !p-0 overflow-hidden group',
                    project.featured && 'ring-1 ring-yellow-500/25 shadow-[0_0_40px_-8px_rgba(234,179,8,0.18)]'
                  )}>
                    {/* Gradient top line — thicker for featured */}
                    <div className={clsx('w-full bg-gradient-to-r', project.accentLine, project.featured ? 'h-[3px]' : 'h-0.5')} />

                    <div className="p-5 sm:p-7 md:p-8">
                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className={clsx('inline-block px-2.5 py-1 text-[10px] sm:text-xs font-mono font-semibold rounded-lg border', project.accentBg, project.accent)}>
                              {project.type}
                            </span>
                            {project.featured && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold rounded-lg border border-yellow-500/40 bg-yellow-500/15 text-yellow-300 shadow-[0_0_14px_rgba(234,179,8,0.25)]">
                                <Sparkles className="w-3.5 h-3.5" />
                                Featured
                              </span>
                            )}
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold font-mono text-text-primary group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h2>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-text-muted">
                            <span className="flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-primary/60" />
                              {project.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-primary/60" />
                              {project.duration}
                            </span>
                          </div>
                        </div>

                        {/* Links */}
                        {(project.github || project.live) && (
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live demo"
                                className="flex items-center gap-1.5 px-3 py-1.5 glass border border-primary/25 rounded-lg hover:border-primary/50 hover:shadow-glow-sm transition-all duration-200 text-xs font-mono text-text-secondary hover:text-primary"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Live
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex items-center gap-1.5 px-3 py-1.5 glass border border-primary/25 rounded-lg hover:border-primary/50 hover:shadow-glow-sm transition-all duration-200 text-xs font-mono text-text-secondary hover:text-primary"
                              >
                                <GithubLogo size={14} />
                                Code
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-5">
                        <p className="text-xs font-mono text-text-muted mb-2">
                          <span className="text-primary">tech</span>: [
                        </p>
                        <div className="flex flex-wrap gap-1.5 pl-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={clsx(
                                'px-2.5 py-1 border text-xs font-mono rounded-lg transition-all duration-200 backdrop-blur-sm',
                                project.accentBg,
                                project.accent
                              )}
                            >
                              "{tech}"
                            </span>
                          ))}
                        </div>
                        <p className="text-xs font-mono text-text-muted mt-1.5">]</p>
                      </div>

                      {/* Features + screenshot */}
                      <div className={clsx('flex flex-col gap-6', project.screenshot && 'lg:flex-row lg:items-start')}>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-mono text-text-muted mb-2">
                            <span className="text-primary">features</span>: [
                          </p>
                          <div className="pl-4">
                            <FeaturesList features={project.features} />
                          </div>
                          <p className="text-xs font-mono text-text-muted mt-2">]</p>
                        </div>

                        {project.screenshot && (
                          <div className="lg:w-[26rem] xl:w-[30rem] flex-shrink-0">
                            <BrowserFrame
                              src={project.screenshot}
                              alt={`${project.title} screenshot`}
                              liveUrl={project.live}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-text-muted font-mono text-sm"
          >
            <p>// no projects match this filter</p>
          </motion.div>
        )}

        {/* Closing bracket */}
        <motion.p
          className="text-center mt-8 text-2xl font-mono text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ]
        </motion.p>
      </div>
    </div>
  )
}

export default Projects
