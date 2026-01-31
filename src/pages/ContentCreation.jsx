import { useState, useEffect } from 'react'
import { Youtube, TrendingUp, Users, Eye, Clock, Target, Zap } from 'lucide-react'

const ContentCreation = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const channels = [
    {
      name: 'Soccer Podcast',
      handle: '@soccerpodcast',
      url: 'https://www.youtube.com/@soccerpodcast',
      youtube: '29K subscribers',
      instagram: '95K followers',
      description: 'The flagship channel of the football network, delivering in-depth tactical analysis, match breakdowns, and football commentary. This channel has grown into a trusted source for football enthusiasts seeking quality analysis and engaging discussions about the beautiful game.',
      highlights: [
        'Largest channel in the network with consistent growth',
        'Weekly podcast episodes and live match analysis',
        'Strong community engagement and loyal audience',
        'Professional production quality with OBS and StreamYard'
      ]
    },
    {
      name: 'Catalan Iran',
      handle: '@catalaniran',
      url: 'https://www.youtube.com/@catalaniran',
      youtube: '6K subscribers',
      instagram: '70K followers',
      description: 'Bringing FC Barcelona news, analysis, and tactical breakdowns to Persian-speaking audiences worldwide. This channel combines football expertise with cultural connection, creating content that resonates with fans of both Barcelona and Iranian football communities.',
      highlights: [
        'Specialized content for Barcelona FC fans',
        'Strong Instagram presence with 70K followers',
        'Cultural bridge between Western and Middle Eastern football fans',
        'Timely coverage of matches and transfer news'
      ]
    },
    {
      name: 'Persian Red Army',
      handle: '@persianredarmy',
      url: 'https://www.youtube.com/@persianredarmy',
      youtube: '3.5K subscribers',
      instagram: '20K followers',
      description: 'Dedicated to Manchester United content with a Persian perspective. This channel covers match analysis, player performances, transfer news, and club history, serving the growing community of Manchester United fans in Persian-speaking regions.',
      highlights: [
        'Focused Manchester United analysis and coverage',
        'Growing subscriber base with high engagement',
        'Live match reactions and post-game analysis',
        'Historical content about the club\'s legacy'
      ]
    },
    {
      name: 'FootCourt XI',
      handle: '@footcourtxi',
      url: 'https://www.youtube.com/@footcourtxi',
      youtube: '1.5K subscribers',
      instagram: '5K followers',
      description: 'A channel focused on providing comprehensive football analysis, player insights, and tactical strategies. Aimed at educating and engaging football fans with detailed content, making it a valuable resource for both casual and serious football enthusiasts.',
      highlights: [
        'Educational content focused on tactics and strategy',
        'Detailed player analysis and performance reviews',
        'Growing channel with dedicated niche audience',
        'High-quality video production and editing'
      ]
    }
  ]

  const skillsDemonstrated = [
    {
      icon: Target,
      title: 'Product Management',
      description: 'Managing 4 brands simultaneously, coordinating publishing schedules, and maintaining consistent content quality across all channels.'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Using YouTube Studio Analytics and Instagram Insights to optimize content performance, understand audience behavior, and drive growth.'
    },
    {
      icon: Zap,
      title: 'SEO & Growth Strategy',
      description: 'Implementing SEO strategies for video discovery, optimizing titles and thumbnails, and leveraging algorithms for maximum reach.'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Engaging with 230K+ combined followers, responding to comments, fostering discussions, and building loyal communities.'
    }
  ]

  return (
    <div className="pt-24 pb-20 px-6 bg-background-secondary min-h-screen tech-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 glass border border-primary/30 px-6 py-3 rounded-full mb-6">
            <Youtube className="w-6 h-6 text-primary" />
            <span className="font-semibold font-mono text-primary">Digital Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-text-primary mb-4">
            YouTube Football Network
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Building and scaling a multi-channel media network from scratch
            <br/>
            A case study in product management, analytics, growth strategy, and digital content creation.
          </p>
        </div>

        {/* Network Overview Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          <div className="glass border border-primary/30 rounded-lg p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
            <Users className="w-8 h-8 text-primary mb-3" />
            <p className="text-3xl font-bold font-mono text-primary mb-1 neon-glow">40K+</p>
            <p className="text-sm text-text-secondary">YouTube Subscribers</p>
          </div>
          <div className="glass border border-primary/30 rounded-lg p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
            <Eye className="w-8 h-8 text-primary mb-3" />
            <p className="text-3xl font-bold font-mono text-primary mb-1 neon-glow">190K+</p>
            <p className="text-sm text-text-secondary">Instagram Followers</p>
          </div>
          <div className="glass border border-primary/30 rounded-lg p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
            <TrendingUp className="w-8 h-8 text-primary mb-3" />
            <p className="text-3xl font-bold font-mono text-primary mb-1 neon-glow">4</p>
            <p className="text-sm text-text-secondary">Active Channels</p>
          </div>
          <div className="glass border border-primary/30 rounded-lg p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <p className="text-3xl font-bold font-mono text-primary mb-1 neon-glow">1000+</p>
            <p className="text-sm text-text-secondary">Videos Published</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="modern-card mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-primary mb-4">
            Beyond Code
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            Beyond web development, I've built and scaled a multi-channel football media network from scratch,
            demonstrating my ability to not just write code, but to understand users, analyze data, and grow digital products.
            This project showcases product management, data analytics, SEO optimization, visual design, and audience
            development—all transferable skills valuable in tech product roles.
          </p>
        </div>

        {/* Channels Breakdown */}
        <div className="space-y-8 mb-16">
          {channels.map((channel, index) => (
            <div
              key={index}
              className={`modern-card hover:border-primary/50 hover:shadow-glow-lg transition-all duration-300 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="p-8 md:p-10">
                {/* Channel Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <Youtube className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl md:text-3xl font-bold font-mono text-text-primary">
                        {channel.name}
                      </h2>
                    </div>
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light transition-colors font-medium mb-3 inline-block"
                    >
                      {channel.handle}
                    </a>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="inline-flex items-center px-3 py-1 glass border border-primary/30 text-primary text-sm font-semibold rounded-full">
                        <Youtube className="w-4 h-4 mr-1" />
                        {channel.youtube}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 glass border border-primary/30 text-primary text-sm font-semibold rounded-full">
                        📸 {channel.instagram}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {channel.description}
                </p>

                {/* Highlights */}
                <div>
                  <h3 className="text-sm font-semibold font-mono text-text-primary mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {channel.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-text-secondary">
                        <span className="text-primary mt-1 flex-shrink-0 font-mono">{'>'}</span>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Demonstrated Section */}
        <div className="modern-card mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-primary mb-6 text-center">
            Transferable Skills
          </h2>
          <p className="text-text-secondary mb-12 text-center max-w-3xl mx-auto">
            This project demonstrates skills beyond coding that are essential for product-minded engineers
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {skillsDemonstrated.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="glass border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-glow-md transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold font-mono text-text-primary mb-2">{skill.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technical Skills Used */}
        <div className="modern-card">
          <h2 className="text-2xl font-bold font-mono text-text-primary mb-6">Technical & Creative Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold font-mono text-primary mb-3">Video Production</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>Adobe Premiere Pro</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>CapCut</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>OBS Studio</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>StreamYard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-mono text-primary mb-3">Design & Graphics</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>Adobe Photoshop</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>Adobe Illustrator</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>Thumbnail Design</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>Brand Identity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-mono text-primary mb-3">Analytics & Strategy</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>YouTube Studio Analytics</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>Instagram Insights</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>SEO Optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-mono">{'>'}</span>Growth Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCreation
