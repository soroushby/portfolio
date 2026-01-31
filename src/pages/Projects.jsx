import { useState, useEffect } from 'react'
import { Code2, Calendar, Layers } from 'lucide-react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const projects = [
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
    },
    {
      title: 'Modern Developer Portfolio',
      company: 'Personal Project',
      duration: '2025',
      type: 'Portfolio Website',
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
      title: 'E-Commerce Platform Frontend',
      company: 'Freelance Project',
      duration: '2023',
      type: 'E-Commerce',
      description: 'Modern e-commerce frontend built with Next.js and TypeScript, featuring server-side rendering for optimal performance and SEO. Integrated with Stripe for payment processing and implemented advanced product filtering, cart management, and checkout flows. Focused on conversion optimization and user experience.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Server Components'],
      features: [
        'Server-side rendering with Next.js for SEO benefits',
        'Stripe payment integration for secure transactions',
        'Advanced product filtering and search functionality',
        'Shopping cart with persistent state',
        'Responsive design for all device sizes',
        'Image optimization with Next.js Image component',
        'Fast page loads with code splitting'
      ]
    },
    {
      title: 'Task Management Dashboard',
      company: 'Personal Project',
      duration: '2024',
      type: 'Productivity Tool',
      description: 'Full-featured task management application built with React and Firebase. Implements drag-and-drop functionality, real-time collaboration, and advanced filtering. Users can create projects, assign tasks, set deadlines, and track progress with visual dashboards.',
      technologies: ['React', 'Firebase', 'Firestore', 'Tailwind CSS', 'React DnD', 'Chart.js'],
      features: [
        'Drag-and-drop task organization',
        'Real-time collaboration with multiple users',
        'Advanced filtering and sorting options',
        'Visual progress tracking with charts',
        'Due date reminders and notifications',
        'Project and task templates',
        'Export functionality for reports'
      ]
    }
  ]

  return (
    <div className="pt-24 pb-20 px-6 bg-background-secondary min-h-screen tech-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 glass border border-primary/30 px-6 py-3 rounded-full mb-6">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-semibold font-mono text-primary">portfolio.projects</span>
          </div>
          <p className="code-comment text-sm mb-3">My Work</p>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-text-primary mb-4">
            <span className="text-primary">const</span> projects<span className="text-text-muted"> = [</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-mono text-sm">
            <span className="text-primary">// </span>Collection of web applications showcasing technical skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`modern-card hover:border-primary/50 hover:shadow-glow-lg transition-all duration-300 overflow-hidden group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 left-4 font-mono text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                {`// index: ${index}`}
              </div>
              <div className="p-8 md:p-10 relative">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-block px-3 py-1 glass border border-primary/30 text-primary text-xs font-mono font-semibold rounded-lg">
                        <span className="text-text-muted">{'<'}</span>{project.type.toUpperCase()}<span className="text-text-muted">{' />'}</span>
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-text-primary mb-2 group-hover:text-primary group-hover:neon-glow transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-secondary">
                      <div className="flex items-center space-x-2">
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="font-medium">{project.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-mono font-semibold text-text-primary mb-3">
                    <span className="text-primary">tech</span>: [
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 glass border border-primary/20 text-sm font-mono text-text-secondary rounded-lg hover:border-primary/50 hover:text-primary-light hover:shadow-glow-sm transition-all duration-200 cursor-pointer"
                      >
                        "{tech}"
                        {techIndex < project.technologies.length - 1 && <span className="text-text-muted">,</span>}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-mono text-text-primary mt-2">]</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-sm font-mono font-semibold text-text-primary mb-3">
                    <span className="text-primary">features</span>: [
                  </h3>
                  <ul className="space-y-2 pl-4">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-text-secondary group/item">
                        <span className="text-primary mt-1 flex-shrink-0 font-mono group-hover/item:scale-125 transition-transform">{'>'}</span>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-mono text-text-primary mt-2">]</p>
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
