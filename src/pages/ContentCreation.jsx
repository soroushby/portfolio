import { motion } from 'framer-motion'
import { TrendingUp, Users, Eye, Clock, Target, Zap, ExternalLink } from 'lucide-react'
import { YoutubeLogoIcon as YoutubeLogo } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import clsx from 'clsx'
import soccerPodcastLogo from '../assets/soccer-podcast-logo.jpg'
import persianRedArmyLogo from '../assets/persian-red-army-logo.jpg'
import footCourtLogo from '../assets/footcurt logo remake.jpg'
import catalanIranLogo from '../assets/catalan iran logo.png'

const channels = [
  {
    name: 'Soccer Podcast',
    logo: soccerPodcastLogo,
    handle: '@soccerpodcast',
    url: 'https://youtube.com/@soccerpodcast',
    youtube: '29K subs',
    instagram: '95K',
    color: 'from-red-600/20 to-orange-600/10',
    accent: 'bg-red-500/10 border-red-500/20 text-red-400',
    description: 'Flagship channel of the football network. In-depth tactical analysis, match breakdowns, and commentary that has grown into a trusted source for football enthusiasts.',
    highlights: [
      'Largest channel with consistent growth trajectory',
      'Weekly podcast episodes and live match analysis',
      'Professional production with OBS and StreamYard',
      'Strong community engagement and loyal audience',
    ],
  },
  {
    name: 'Catalan Iran',
    logo: catalanIranLogo,
    handle: '@catalaniran',
    url: 'https://youtube.com/@catalaniran',
    youtube: '6K subs',
    instagram: '70K',
    color: 'from-blue-600/20 to-indigo-600/10',
    accent: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    description: 'FC Barcelona news and tactical breakdowns for Persian-speaking audiences. Bridging football culture between Western and Iranian communities.',
    highlights: [
      'Specialized Barcelona FC content',
      '70K strong Instagram following',
      'Cultural bridge for football fans worldwide',
      'Timely transfer news and match analysis',
    ],
  },
  {
    name: 'Persian Red Army',
    logo: persianRedArmyLogo,
    handle: '@persianredarmy',
    url: 'https://youtube.com/@persianredarmy',
    youtube: '3.5K subs',
    instagram: '20K',
    color: 'from-red-700/20 to-rose-600/10',
    accent: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    description: 'Manchester United content with a Persian perspective. Match analysis, player performances, and club history for fans across Persian-speaking regions.',
    highlights: [
      'Focused Man United analysis',
      'Growing subscriber base with high engagement',
      'Live reactions and post-game breakdowns',
      'Historical club content',
    ],
  },
  {
    name: 'FootCourt XI',
    logo: footCourtLogo,
    handle: '@footcourtxi',
    url: 'https://youtube.com/@footcourtxi',
    youtube: '1.5K subs',
    instagram: '5K',
    color: 'from-emerald-600/20 to-green-600/10',
    accent: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    description: 'Comprehensive football analysis focused on tactics, player insights, and strategy. Educational content for both casual and serious football enthusiasts.',
    highlights: [
      'Educational tactics and strategy content',
      'Detailed player performance reviews',
      'High-quality video production and editing',
      'Dedicated niche audience',
    ],
  },
]

const networkStats = [
  { icon: Users, value: '40K+', label: 'YouTube Subscribers', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  { icon: Eye, value: '190K+', label: 'Instagram Followers', color: 'text-fuchsia', bg: 'bg-fuchsia/10 border-fuchsia/20' },
  { icon: TrendingUp, value: '4', label: 'Active Channels', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
  { icon: Clock, value: '1000+', label: 'Videos Published', color: 'text-accent', bg: 'bg-accent/10 border-accent/20' },
]

const skillsDemonstrated = [
  {
    icon: Target,
    title: 'Product Management',
    description: 'Managing 4 brands simultaneously, coordinating publishing schedules, and maintaining consistent quality across all channels.',
    color: 'text-primary', bg: 'bg-primary/10 border-primary/20',
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Using YouTube Studio Analytics and Instagram Insights to optimize content, understand audience behavior, and drive growth.',
    color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Zap,
    title: 'SEO & Growth Strategy',
    description: 'Implementing SEO for video discovery, optimizing titles and thumbnails, and leveraging platform algorithms for reach.',
    color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Engaging 230K+ combined followers, fostering discussions, responding to comments, and building loyal communities.',
    color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20',
  },
]

const tools = {
  'Video Production': ['Adobe Premiere Pro', 'CapCut', 'OBS Studio', 'StreamYard'],
  'Design & Graphics': ['Adobe Photoshop', 'Adobe Illustrator', 'Thumbnail Design', 'Brand Identity'],
  'Analytics & Strategy': ['YouTube Analytics', 'Instagram Insights', 'VidIQ / TubeBuddy', 'SEO Optimization'],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const ContentCreation = () => {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 bg-background-secondary min-h-screen dot-grid">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 glass border border-red-500/20 px-5 py-2.5 rounded-full mb-5">
            <YoutubeLogo size={16} className="text-red-400" />
            <span className="font-mono text-sm text-red-400">Digital Products</span>
          </div>
          <p className="section-label mb-3">Beyond Code</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            YouTube Football{' '}
            <span className="gradient-text">Network</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Building and scaling a multi-channel media network from scratch —
            a case study in product management, analytics, and growth strategy.
          </p>
        </motion.div>

        {/* Network stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {networkStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="modern-card !p-4 sm:!p-5 hover:shadow-card-hover"
                whileHover={{ y: -4 }}
              >
                <div className={clsx('w-9 h-9 rounded-xl border flex items-center justify-center mb-3', stat.bg)}>
                  <Icon className={clsx('w-4 h-4', stat.color)} />
                </div>
                <p className={clsx('text-2xl sm:text-3xl font-bold font-mono mb-1 neon-glow', stat.color)}>
                  {stat.value}
                </p>
                <p className="text-xs text-text-muted">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Introduction card */}
        <motion.div
          className="modern-card mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold font-mono text-primary mb-3">Beyond Code</h2>
          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            Beyond web development, I've built and scaled a multi-channel football media network from scratch —
            demonstrating the ability to understand users, analyze data, and grow digital products.
            This project showcases <span className="text-text-primary font-medium">product management</span>,{' '}
            <span className="text-text-primary font-medium">data analytics</span>,{' '}
            <span className="text-text-primary font-medium">SEO optimization</span>, and{' '}
            <span className="text-text-primary font-medium">audience development</span> — all transferable to tech product roles.
          </p>
        </motion.div>

        {/* Channels — Swiper carousel */}
        <motion.div
          className="mb-12 sm:mb-16 channels-swiper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {channels.map((channel, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="modern-card !p-0 overflow-hidden hover:shadow-card-hover h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Gradient top bar */}
                  <div className={clsx('h-0.5 bg-gradient-to-r', channel.color)} />

                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={channel.logo}
                        alt={channel.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <h2 className="text-base sm:text-lg font-bold font-mono text-text-primary">{channel.name}</h2>
                        <a
                          href={channel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:text-primary-light transition-colors flex items-center gap-1"
                        >
                          {channel.handle}
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={clsx('inline-flex items-center gap-1 px-2.5 py-1 border text-xs font-mono font-semibold rounded-full', channel.accent)}>
                        <YoutubeLogo size={12} />
                        {channel.youtube}
                      </span>
                      <span className={clsx('inline-flex items-center gap-1 px-2.5 py-1 border text-xs font-mono font-semibold rounded-full', channel.accent)}>
                        📸 {channel.instagram}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                      {channel.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5">
                      {channel.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-muted text-xs">
                          <span className="text-primary mt-0.5 flex-shrink-0 font-mono">›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Transferable skills */}
        <motion.div
          className="modern-card mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <p className="section-label mb-2">What This Demonstrates</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">
              <span className="gradient-text-purple">Transferable</span>
              <span className="text-text-muted"> Skills</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skillsDemonstrated.map((skill, i) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 glass border border-primary/15 rounded-xl hover:border-primary/30 hover:shadow-glow-sm transition-all duration-200"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <div className={clsx('w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0', skill.bg)}>
                    <Icon className={clsx('w-5 h-5', skill.color)} />
                  </div>
                  <div>
                    <h3 className="font-bold font-mono text-text-primary text-sm mb-1">{skill.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{skill.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Technical tools */}
        <motion.div
          className="modern-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg sm:text-xl font-bold font-mono text-text-primary mb-6">
            Technical & Creative{' '}
            <span className="gradient-text-purple">Tools</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(tools).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold font-mono text-primary text-sm mb-3">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                      <span className="text-primary font-mono flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContentCreation
