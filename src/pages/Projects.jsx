import { useState, useEffect, useRef } from 'react'
import { Code2, Calendar, Layers, Github, ExternalLink } from 'lucide-react'
import { animate, inView, stagger } from 'motion'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const projectsRef = useRef([])

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)

    // Motion scroll animations
    projectsRef.current.forEach((project, index) => {
      if (project) {
        inView(project, () => {
          animate(
            project,
            { opacity: [0, 1], y: [50, 0] },
            { duration: 0.6, delay: index * 0.15, easing: [0.25, 0.46, 0.45, 0.94] }
          )
        })
      }
    })
  }, [])

  const projects = [
    {
      title: 'Modern Developer Portfolio',
      company: 'Personal Project',
      duration: '2025',
      type: 'Portfolio Website',
      github: 'https://github.com/soroushby/portfolio',
      live: 'https://soroushby.github.io/portfolio/',
      description: 'Modern, responsive portfolio website built with React and best practices for showcasing technical skills and projects. Features clean component architecture, smooth animations, and optimized performance. Designed with accessibility and user experience in mind, following current web development standards and trends.',
      technologies: ['React 18', 'Tailwind CSS', 'Vite', 'JavaScript ES6+', 'Responsive Design'],
      features: [
        'Clean, component-based React architecture',
        'Responsive design with Tailwind CSS utility classes',
        'Smooth animations and micro-interactions',
        'SEO optimized for better discoverability',
        'Fast build times with Vite bundler',
        'Accessible navigation and content structure',
        'Mobile-first design approach'
      ]
    },
    {
      title: 'WeatherNow - Weather Dashboard',
      company: 'Personal Project',
      duration: 'February 2026',
      type: 'Web Application',
      github: 'https://github.com/soroushby/WeatherApp',
      live: 'https://soroushby.github.io/WeatherApp/',
      description: 'Modern weather application built with React, TanStack Router, and TanStack Query, demonstrating advanced frontend patterns and API integration. Features multi-page routing, real-time weather data from OpenWeather API, and sophisticated data caching. Implements geolocation for automatic weather detection, favorites management with localStorage, and search history. Dark purple theme with dynamic weather-specific accent colors that adapt based on conditions.',
      technologies: ['React 18', 'TanStack Router', 'TanStack Query', 'Tailwind CSS', 'OpenWeather API', 'Vite'],
      features: [
        'Multi-page routing with TanStack Router and lazy-loaded components',
        'Advanced data fetching and caching with TanStack Query',
        'Real-time weather data: current conditions, 24-hour forecast, 5-day forecast',
        'Geolocation API integration for automatic city detection',
        'Custom useWeather hook following React best practices',
        'Temperature unit toggle (Celsius/Fahrenheit) with persistent preference',
        'Favorites system and search history stored in localStorage',
        'Weather alerts banner and air quality index display',
        'Dynamic accent colors based on weather conditions',
        'Fully responsive design for desktop and mobile devices'
      ]
    },
    {
      title: 'Ultimate System Web Application',
      company: 'Ultimate System',
      duration: 'August 2022 - Present',
      type: 'Web Application',
      description: 'Web application built with Angular, TypeScript, and RxJS for a Vancouver-based tech company. This comprehensive system features complex UI components using Angular Material and Kendo UI. Implemented modular architecture for scalability and maintainability, ensuring the application can grow with business needs.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Kendo UI', 'ag-Grid'],
      features: [
        'Modular component architecture for code reusability and maintainability',
        'Responsive design with Angular Material ensuring mobile compatibility',
        'Complex data grids with ag-Grid for efficient data visualization',
        'RESTful API integration for backend communication',
        'Comprehensive unit and integration testing'
      ]
    },
    {
      title: 'MD Swiss Pharma Patient Management System',
      company: 'MD Swiss Pharma GmbH',
      duration: 'June 2021 - July 2022',
      type: 'Healthcare Application',
      description: 'Pharmaceutical industry web application for comprehensive patient management. Developed custom UI components with React and TypeScript, implementing full REST API integration for seamless data management. Optimized UI performance to handle large datasets efficiently while maintaining smooth user experience. Collaborated closely with QA team to ensure application stability and quality across all releases.',
      technologies: ['React', 'TypeScript', 'REST API', 'CSS3', 'JavaScript ES6+', 'Git'],
      features: [
        'Patient data management dashboard with real-time updates',
        'Custom React components for complex form handling',
        'Full REST API integration for backend data operations',
        'Responsive UI design for desktop and tablet devices',
        'Performance optimization for handling large patient datasets',
        'Comprehensive error handling and validation',
        'Close collaboration with QA for bug identification and resolution'
      ]
    }
  ]

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 bg-background-secondary min-h-screen tech-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 sm:space-x-3 glass border border-primary/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="font-semibold font-mono text-primary text-sm sm:text-base">portfolio.projects</span>
          </div>
          <p className="code-comment text-sm mb-3">My Work</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-text-primary mb-4">
            <span className="text-primary">const</span> projects<span className="text-text-muted"> = [</span>
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-mono">
            <span className="text-primary">// </span>Collection of web applications showcasing technical skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="modern-card !p-0 hover:border-primary/50 hover:shadow-glow-lg transition-all duration-300 overflow-hidden group opacity-0"
            >
              <div className="hidden sm:block absolute top-4 left-4 font-mono text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                {`// index: ${index}`}
              </div>
              {(project.github || project.live) && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 z-10">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 glass border border-primary/30 rounded-lg hover:border-primary/50 hover:shadow-glow-md transition-all duration-200 group/live"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover/live:text-primary transition-colors" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 glass border border-primary/30 rounded-lg hover:border-primary/50 hover:shadow-glow-md transition-all duration-200 group/github"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover/github:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              )}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 relative">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <span className="inline-block px-2 sm:px-3 py-1 glass border border-primary/30 text-primary text-[10px] sm:text-xs font-mono font-semibold rounded-lg">
                        <span className="text-text-muted">{'<'}</span>{project.type.toUpperCase()}<span className="text-text-muted">{' />'}</span>
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-text-primary mb-2 group-hover:text-primary group-hover:neon-glow transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-text-secondary">
                      <div className="flex items-center space-x-2">
                        <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="font-medium">{project.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xs sm:text-sm font-mono font-semibold text-text-primary mb-2 sm:mb-3">
                    <span className="text-primary">tech</span>: [
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pl-2 sm:pl-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 glass border border-primary/20 text-xs sm:text-sm font-mono text-text-secondary rounded-lg hover:border-primary/50 hover:text-primary-light hover:shadow-glow-sm transition-all duration-200 cursor-pointer"
                      >
                        "{tech}"
                        {techIndex < project.technologies.length - 1 && <span className="text-text-muted">,</span>}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-text-primary mt-2">]</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xs sm:text-sm font-mono font-semibold text-text-primary mb-2 sm:mb-3">
                    <span className="text-primary">features</span>: [
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 pl-2 sm:pl-4">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3 text-text-secondary group/item">
                        <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0 font-mono group-hover/item:scale-125 transition-transform text-xs sm:text-base">{'>'}</span>
                        <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs sm:text-sm font-mono text-text-primary mt-2">]</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
