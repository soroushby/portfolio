import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Heart, Music, Plane, Award, BookOpen, Download, Layers, Database, Server, Shield } from 'lucide-react'
import {
  RocketLaunchIcon as RocketLaunch,
  BriefcaseIcon as Briefcase,
  WavesIcon as Waves,
  GraduationCapIcon as GraduationCap,
  LightningIcon as Lightning,
  RobotIcon as Robot,
  FilmStripIcon as FilmStrip,
  CertificateIcon as Certificate,
  LaptopIcon as Laptop,
  CodeIcon as Code,
  CloudIcon as Cloud,
} from '@phosphor-icons/react'
import clsx from 'clsx'
import profileImage from '../assets/about-page-profile.jpg'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  { year: '2020', event: 'Started web development training & launched YouTube football network', PhosphorIcon: RocketLaunch },
  { year: '2021', event: 'First developer role at MD Swiss Pharma GmbH', PhosphorIcon: Briefcase },
  { year: '2022', event: 'Joined Ultimate System as Web Developer in Vancouver', PhosphorIcon: Waves },
  { year: '2025–26', event: 'Graduated BCIT — New Media Design & Web Development', PhosphorIcon: GraduationCap },
  { year: '2026', event: 'Deepening React 19, Next.js 15 & AI-assisted development', PhosphorIcon: Lightning },
]

const heroCards = [
  {
    title: 'React & Next.js Engineering',
    subtitle: 'Full-Stack Frontend Mastery',
    badge: '<React 19 + Next.js 15 />',
    primaryColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/25',
    accentLine: 'from-cyan-500 via-primary to-primary',
    headerGradient: 'from-cyan-500/10 via-primary/5 to-transparent',
    tagBorder: 'border-cyan-500/25',
    tagBg: 'bg-cyan-500/5',
    topics: [
      'React 19 hooks deep dive: useState, useEffect, useRef, useContext, useReducer, use()',
      'Next.js 15 App Router — Server Components, file-based routing, API routes, SSR/SSG/ISR',
      'TanStack Router & Query — type-safe routing, caching, mutations, optimistic updates',
      'React Router v7 — nested routes, data loaders, actions, protected routes',
      'TypeScript + Zod — strict typing, generics, interfaces, schema-driven validation',
      'Tailwind CSS v4, shadcn/ui, Radix UI — utility-first, accessible component systems',
      'Auth with Clerk + Supabase — sessions, middleware, protected routes, role guards',
    ],
    techTags: ['React 19', 'Next.js 15', 'TypeScript', 'TanStack Query', 'React Router v7', 'Tailwind v4', 'shadcn/ui', 'Zod', 'Clerk'],
  },
  {
    title: 'AI-Assisted Development',
    subtitle: 'Production AI Workflow Mastery',
    badge: '<AI Dev Workflow />',
    primaryColor: 'text-fuchsia',
    borderColor: 'border-fuchsia/25',
    accentLine: 'from-fuchsia via-primary to-primary',
    headerGradient: 'from-fuchsia/10 via-primary/5 to-transparent',
    tagBorder: 'border-fuchsia/25',
    tagBg: 'bg-fuchsia/5',
    topics: [
      'Repeatable AI-assisted workflow: planning, scaffolding, review, and deployment',
      'Writing effective prompts for consistent, production-ready code generation',
      'Structuring CLAUDE.md context files so AI understands your full codebase',
      'Building custom skills, subagents, and MCP server integrations with Claude Code',
      'Reviewing, testing, and security auditing of AI-generated code for production',
      'Claude API integration for real product features (QuoteCraft AI quoting engine)',
      'VS Code + Claude Code plan mode for large refactors and architecture decisions',
    ],
    techTags: ['Claude Code', 'Claude API', 'ChatGPT', 'GitHub Copilot', 'MCP Servers', 'Prompt Engineering', 'Plan Mode'],
  },
]

const backendSkills = [
  {
    title: 'Databases',
    icon: Database,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    skills: ['PostgreSQL', 'Neon (serverless)', 'Supabase', 'MongoDB'],
  },
  {
    title: 'ORMs & Schema',
    icon: Layers,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    skills: ['Drizzle ORM', 'Prisma', 'Zod validation', 'Mongoose'],
  },
  {
    title: 'Auth & Email',
    icon: Shield,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    skills: ['Clerk (full auth)', 'Supabase Auth', 'JWT / Sessions', 'Resend (email)'],
  },
  {
    title: 'APIs & Server',
    icon: Server,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
    skills: ['REST API design', 'Next.js API Routes', 'Node.js + Express', 'Edge Functions'],
  },
]

const skillCategories = [
  {
    category: 'Frontend',
    PhosphorIcon: Code,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    skills: [
      { name: 'React 18/19 + Next.js', desc: 'Modern component patterns, App Router, SSR/SSG', level: 5 },
      { name: 'TypeScript', desc: 'Type safety, interfaces, generics, utility types', level: 4 },
      { name: 'Remix', desc: 'Full-stack React, nested routing, server actions', level: 3 },
      { name: 'Tailwind CSS + shadcn/ui', desc: 'Utility-first styling, accessible components', level: 5 },
      { name: 'GSAP + Framer Motion', desc: 'Scroll animations, transitions, physics', level: 4 },
      { name: 'Angular + RxJS', desc: 'Enterprise SPA with Material UI', level: 3 },
      { name: 'Framer Motion', desc: 'Production animations and micro-interactions for React applications', level: 4 },
      { name: 'next-intl', desc: 'Full internationalization (i18n) with URL-based locale routing for Next.js', level: 4 },
    ],
  },
  {
    category: 'Backend & Infrastructure',
    PhosphorIcon: Cloud,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    skills: [
      { name: 'Supabase', desc: 'PostgreSQL database, auth, real-time, storage, and Edge Functions', level: 5 },
      { name: 'Row Level Security', desc: 'Fine-grained database access control policies in PostgreSQL', level: 4 },
      { name: 'Stripe', desc: 'Payment processing, webhook handling, and server-side checkout sessions', level: 4 },
      { name: 'Resend', desc: 'Transactional email delivery for user notifications', level: 4 },
      { name: 'Twilio WhatsApp API', desc: 'Automated WhatsApp notifications for real-time doctor alerts', level: 3 },
      { name: 'Vercel', desc: 'Serverless deployment, CI/CD, and edge functions for Next.js apps', level: 5 },
      { name: 'Next.js Server Actions', desc: 'Form submissions and mutations without separate API routes', level: 4 },
    ],
  },
  {
    category: 'AI & Tools',
    PhosphorIcon: Robot,
    color: 'text-fuchsia',
    bg: 'bg-fuchsia/10 border-fuchsia/20',
    skills: [
      { name: 'Anthropic Claude API', desc: 'Prompt engineering, structured outputs, agentic workflows', level: 4 },
      { name: 'ChatGPT + Copilot', desc: 'AI-assisted development and code review', level: 4 },
      { name: 'Vite + Git/GitHub + Vercel', desc: 'Modern build tooling and CI/CD', level: 5 },
      { name: 'Figma', desc: 'UI/UX design, prototyping, design systems', level: 3 },
    ],
  },
  {
    category: 'Content Creation',
    PhosphorIcon: FilmStrip,
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/20',
    skills: [
      { name: 'Adobe Premiere Pro + Final Cut', desc: 'Video editing and post-production', level: 4 },
      { name: 'OBS Studio + StreamYard', desc: 'Live broadcasting and production', level: 4 },
      { name: 'YouTube Studio + VidIQ', desc: 'Channel management, SEO, analytics', level: 5 },
      { name: 'Social Media Strategy', desc: 'Multi-platform growth to 230K+ followers', level: 5 },
    ],
  },
]

const hobbies = [
  { icon: Heart, label: 'Football Analysis', desc: 'Tactical analysis and the beautiful game', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  { icon: Music, label: 'House / Techno', desc: 'Electronic music events and discovery', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: BookOpen, label: 'Tech Exploration', desc: 'New frameworks, tools, best practices', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Plane, label: 'Travel', desc: 'Exploring new places, cultures, perspectives', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
]

const education = [
  {
    PhosphorIcon: GraduationCap,
    iconBg: 'bg-primary/10 border-primary/20',
    iconColor: 'text-primary',
    title: 'Diploma — New Media Design & Web Development',
    institution: 'British Columbia Institute of Technology (BCIT)',
    year: '2025 – 2026',
  },
  {
    PhosphorIcon: Certificate,
    iconBg: 'bg-accent/10 border-accent/20',
    iconColor: 'text-accent',
    title: 'Front-End JavaScript Frameworks (Angular)',
    institution: 'University of Michigan — Coursera',
    year: '2021 · HTML5 & JavaScript Interactivity',
  },
  {
    PhosphorIcon: Certificate,
    iconBg: 'bg-accent/10 border-accent/20',
    iconColor: 'text-accent',
    title: 'Front-End JavaScript Frameworks',
    institution: 'HK University of Science & Technology — Coursera',
    year: '2021 · Angular framework specialization',
  },
  {
    PhosphorIcon: Certificate,
    iconBg: 'bg-fuchsia/10 border-fuchsia/20',
    iconColor: 'text-fuchsia',
    title: 'Web Development Fundamentals',
    institution: 'Sematec Institute',
    year: '2020 · HTML, CSS, JavaScript, Bootstrap',
  },
  {
    PhosphorIcon: Laptop,
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    title: 'Self-Taught Learning',
    institution: 'Udemy, Frontend Masters, Packt, Pluralsight',
    year: 'Ongoing · React, Next.js, TypeScript, and more',
  },
]

const About = () => {
  const timelineRef = useRef(null)
  const skillCardsRef = useRef(null)

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.gsap-timeline-item')
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.65, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      })
    }
    if (skillCardsRef.current) {
      const cards = skillCardsRef.current.querySelectorAll('.gsap-skill-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: skillCardsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 bg-background-secondary min-h-screen">
      <Helmet>
        <title>About — Soroush Bayanati</title>
        <meta name="description" content="Learn about Soroush Bayanati — his background, career journey from Iran to Vancouver, full-stack development skills, and intentions to secure a practicum in the new media industry." />
      </Helmet>
      <div className="max-w-5xl mx-auto">

        {/* Hero / Profile */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-[-30%] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-2xl" />
              {/* SVG spinner rings around About photo */}
              <div className="absolute -inset-4 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle cx="50" cy="50" r="46"
                    stroke="url(#aboutRing1)" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="55 234"
                    animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '50px 50px' }}
                  />
                  <motion.circle cx="50" cy="50" r="38"
                    stroke="url(#aboutRing2)" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="4 15"
                    animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '50px 50px' }}
                  />
                  <defs>
                    <linearGradient id="aboutRing1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#e879f9" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="aboutRing2" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#e879f9" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute -inset-1 rounded-full bg-background-secondary" />
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Soroush Bayanati"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 15%', transform: 'scale(1.35)' }}
                />
              </div>
            </div>
          </div>

          <p className="section-label mb-3">Developer Profile</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-text-primary mb-3">
            <span className="text-primary">const</span>{' '}
            <span className="gradient-text-animate">Soroush Bayanati</span>
          </h1>
          <p className="text-base sm:text-lg text-text-secondary mb-5 font-mono">
            <span className="text-primary">role</span>:{' '}
            <span className="text-text-primary">"Full-Stack Developer & Content Creator"</span>
          </p>

          <div className="flex items-center justify-center gap-2 text-text-secondary mb-7">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm">Vancouver, BC, Canada</span>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}Soroush_B_Resume.pdf`}
            download="Soroush_B_Resume.pdf"
            className="inline-flex items-center gap-2 modern-btn"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Story */}
        <motion.div
          className="modern-card mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Personal Story</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-primary mb-6">
            journey<span className="text-text-muted">.story()</span>
          </h2>

          <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              I'm a full-stack developer born in 1995, based in Vancouver, BC. My journey into web development began when I
              moved to Canada from Iran in 2017, driven by a passion for technology and creativity.
            </p>
            <p>
              I discovered my calling through the ability to build interactive experiences that real users rely on. I dove deep
              through multiple paths — Coursera certifications, Sematec Institute, and countless hours on Udemy, Frontend
              Masters, Packt, and Pluralsight. In 2026, I graduated from BCIT's New Media Design & Web Development program.
            </p>
            <p>
              Since 2021 I've built real-world applications at MD Swiss Pharma and Ultimate System using Angular, React,
              TypeScript, and modern web tech. Today my focus is full-stack development — React 19, Next.js 15, and backend
              work with PostgreSQL, Supabase, Drizzle ORM, and Prisma. I also integrate AI deeply into how I build: using
              Claude Code and the Claude API to ship faster and smarter.
            </p>
            <p>
              But my path hasn't been just about code — in 2020, I also built and scaled a multi-channel football media
              network to over <span className="text-primary font-medium">40,000 YouTube subscribers</span> and{' '}
              <span className="text-accent font-medium">190,000 Instagram followers</span>.
            </p>
            <p className="text-text-primary font-semibold">
              Today I specialize in React, Next.js, and TypeScript — shipping full-stack apps with real database
              backends and AI-powered features that connect with users and achieve business goals.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-14">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-3">Career Path</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">
              <span className="gradient-text-purple">timeline</span>
              <span className="text-text-muted">[]</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            <div className="md:hidden absolute left-5 top-0 w-px h-full bg-gradient-to-b from-primary/40 to-transparent" />

            <div ref={timelineRef} className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.PhosphorIcon
                return (
                  <div
                    key={index}
                    className={clsx('gsap-timeline-item flex items-center', index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}
                  >
                    <div className="md:hidden w-2.5 h-2.5 bg-primary rounded-full border-2 border-background-secondary z-10 flex-shrink-0 ml-[14px] mr-5 shadow-glow-sm" />
                    <div className={clsx('flex-1', index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left')}>
                      <div className="bg-background-tertiary border border-primary/20 rounded-xl p-4 sm:p-5 hover:border-primary/40 hover:shadow-glow-sm transition-all duration-300 inline-block w-full">
                        <div className={clsx('flex items-center gap-2 mb-2', index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : '')}>
                          <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                            <Icon size={14} weight="bold" className="text-primary" />
                          </div>
                          <span className="inline-block px-3 py-1 bg-primary/15 border border-primary/25 text-primary text-xs font-mono font-semibold rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-text-secondary">{item.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background-secondary shadow-glow-sm z-10 flex-shrink-0 mx-2" />
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-14">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-3">Technical Expertise</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">
              <span className="gradient-text-purple">skills</span>
              <span className="text-text-muted">.map()</span>
            </h2>
          </motion.div>

          {/* 2 Hero Skill Cards */}
          <div className="space-y-5 mb-10">
            {heroCards.map((card, index) => (
              <motion.div
                key={index}
                className="modern-card !p-0 overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Top accent line */}
                <div className={clsx('h-0.5 w-full bg-gradient-to-r', card.accentLine)} />

                {/* Header */}
                <div className={clsx('px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r', card.headerGradient)}>
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <span className={clsx(
                        'inline-block px-2.5 py-1 border text-xs font-mono font-semibold rounded-lg mb-2',
                        card.borderColor, card.tagBg, card.primaryColor
                      )}>
                        {card.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-mono text-text-primary leading-tight">
                        {card.title}
                      </h3>
                      <p className={clsx('text-sm font-mono mt-0.5', card.primaryColor)}>{card.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Body — topics left, tech tags right */}
                <div className="px-6 sm:px-8 py-6 lg:grid lg:grid-cols-[1fr_190px] lg:gap-8">
                  <ul className="space-y-2.5 mb-6 lg:mb-0">
                    {card.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5 group/item">
                        <span className={clsx('mt-0.5 flex-shrink-0 font-mono text-sm group-hover/item:scale-125 transition-transform', card.primaryColor)}>›</span>
                        <span className="text-xs sm:text-sm text-text-secondary leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex-shrink-0">
                    <p className="text-xs font-mono text-text-muted mb-2">
                      <span className={card.primaryColor}>stack</span>: [
                    </p>
                    <div className="flex flex-wrap gap-1.5 lg:flex-col">
                      {card.techTags.map((tag, i) => (
                        <span
                          key={i}
                          className={clsx(
                            'px-2.5 py-1 glass border text-xs font-mono rounded-lg hover:bg-primary/10 transition-all duration-200',
                            card.tagBorder, card.primaryColor
                          )}
                        >
                          "{tag}"
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-mono text-text-muted mt-2">]</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Backend & Database — bento grid */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="modern-card">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Database className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-mono text-text-primary">
                  <span className="text-emerald-400">backend</span>
                  <span className="text-text-muted">.</span>
                  <span className="text-primary">skills</span>
                  <span className="text-text-muted">()</span>
                </h3>
              </div>

              {/* Asymmetric bento grid — 3-col alternating wide pattern */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {backendSkills.map((cat, i) => {
                  const Icon = cat.icon
                  // Row 1: [Databases 2cols][ORMs 1col]
                  // Row 2: [Auth 1col][APIs 2cols]
                  const isWide = i === 0 || i === 3
                  return (
                    <motion.div
                      key={i}
                      className={clsx(
                        'p-4 sm:p-5 rounded-xl border transition-all duration-300 hover:shadow-glow-sm group',
                        cat.bg,
                        isWide && 'lg:col-span-2'
                      )}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={clsx('w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0', cat.bg)}>
                          <Icon className={clsx('w-4 h-4', cat.color)} />
                        </div>
                        <h4 className={clsx('font-mono font-semibold text-xs sm:text-sm', cat.color)}>{cat.title}</h4>
                      </div>
                      <ul className={clsx('gap-1.5', isWide ? 'grid grid-cols-1 sm:grid-cols-2' : 'space-y-1.5')}>
                        {cat.skills.map((skill, si) => (
                          <li key={si} className="flex items-center gap-2">
                            <span className={clsx('text-xs font-mono flex-shrink-0 group-hover:translate-x-0.5 transition-transform', cat.color)}>›</span>
                            <span className="text-xs text-text-secondary">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Skill categories — bento layout */}
          <div ref={skillCardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => {
              const Icon = category.PhosphorIcon
              // index 0 = Frontend: 2 cols | index 3 = Content Creation: 2 cols to fill row 2
              const colSpan2 = index === 0 || index === 3
              return (
                <div
                  key={index}
                  className={clsx(
                    'gsap-skill-card modern-card self-start',
                    colSpan2 && 'lg:col-span-2'
                  )}
                >
                  <h3 className="text-base sm:text-lg font-bold font-mono text-text-primary mb-5 flex items-center gap-2.5">
                    <div className={clsx('w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0', category.bg)}>
                      <Icon size={15} weight="bold" className={category.color} />
                    </div>
                    <span className={category.color}>{category.category.toLowerCase().replace(/ /g, '_')}</span>
                    <span className="text-text-muted">: &#123;</span>
                  </h3>
                  <div className={clsx('gap-3 pl-4', colSpan2 ? 'grid sm:grid-cols-2' : 'space-y-3')}>
                    {category.skills.map((skill, si) => (
                      <motion.div
                        key={si}
                        className="flex items-start gap-2.5 p-3 glass border border-primary/15 rounded-lg hover:border-primary/35 hover:shadow-glow-sm transition-all duration-200 group"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: si * 0.05 }}
                      >
                        <span className={clsx('mt-0.5 flex-shrink-0 font-mono text-sm group-hover:translate-x-0.5 transition-transform', category.color)}>›</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold font-mono text-text-primary text-xs sm:text-sm">{skill.name}</p>
                          <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{skill.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-text-muted font-mono mt-4">&#125;</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-14">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-3">Personal Interests</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">
              <span className="gradient-text-purple">hobbies</span>
              <span className="text-text-muted">.list()</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon
              return (
                <motion.div
                  key={index}
                  className="modern-card !p-4 sm:!p-5 text-center hover:shadow-card-hover group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div className={clsx('w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110', hobby.bg)}>
                    <Icon className={clsx('w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110', hobby.color)} />
                  </div>
                  <h3 className="font-bold text-text-primary text-sm sm:text-base mb-1 group-hover:text-text-primary transition-colors">{hobby.label}</h3>
                  <p className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">{hobby.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Practicum & Career Goals */}
        <motion.div
          className="modern-card mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Career Goals</p>
          <h2 className="text-xl sm:text-2xl font-bold font-mono text-primary mb-6 flex items-center gap-2">
            <Briefcase size={22} weight="bold" className="text-primary" />
            <span className="text-primary">practicum</span>
            <span className="text-text-muted">.goals()</span>
          </h2>
          <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              As I complete the New Media Design & Web Development program at BCIT, I am actively seeking a practicum
              placement with a forward-thinking company or agency where I can contribute to real-world projects and
              continue growing as a developer.
            </p>
            <p>
              My ideal host would be a product-focused company, digital agency, or startup that values modern web
              technology — particularly teams working with React, Next.js, or full-stack JavaScript. I am also open to
              companies integrating AI into their development workflows, an area where I have hands-on experience with
              the Claude API and AI-assisted development practices.
            </p>
            <p>
              Beyond practicum, I am open to freelance contracts and full-time junior developer roles in Vancouver or
              remotely. If you are building something interesting and need a developer who ships clean, performant,
              user-focused interfaces, I would love to connect.
            </p>
            <p className="text-text-primary font-semibold">
              Reach me at{' '}
              <a href="mailto:sorosh.bayanati@gmail.com" className="text-primary hover:underline">
                sorosh.bayanati@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="modern-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Academic Background</p>
          <h2 className="text-xl sm:text-2xl font-bold font-mono text-text-primary mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-primary">education</span>
            <span className="text-text-muted">[]</span>
          </h2>

          <div className="space-y-5">
            {education.map((edu, index) => {
              const Icon = edu.PhosphorIcon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className={clsx('flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border rounded-xl flex items-center justify-center', edu.iconBg)}>
                    <Icon size={20} weight="bold" className={edu.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-text-primary text-sm sm:text-base">{edu.title}</h3>
                    <p className="text-primary font-semibold text-xs sm:text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-xs text-text-muted mt-0.5">{edu.year}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About
