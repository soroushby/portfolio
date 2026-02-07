import { useState, useEffect } from "react";
import {
  MapPin,
  Heart,
  Music,
  Plane,
  Code,
  Award,
  BookOpen,
} from "lucide-react";
import profileImage from "../assets/profile.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      category: "Frontend & Backend Development",
      skills: [
        {
          name: "React 18/19",
          description: "Hooks (useState, useEffect, useContext, useReducer, useMemo, useCallback), custom hooks, component composition, Context API",
        },
        {
          name: "TanStack Router",
          description: "Multi-page routing, lazy loading, route parameters, protected routes",
        },
        {
          name: "TanStack Query",
          description: "Data fetching, caching strategies, mutations, optimistic updates, infinite queries",
        },
        {
          name: "Next.js",
          description: "App Router, Server Components, API routes, SSR/SSG, image optimization",
        },
        {
          name: "TypeScript",
          description: "Type safety, interfaces, generics, utility types, type inference",
        },
        {
          name: "Node.js",
          description: "Server-side JavaScript runtime, asynchronous programming",
        },
        {
          name: "Express",
          description: "RESTful API development, middleware, routing, error handling",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first styling, custom configurations, responsive design, dark mode",
        },
        {
          name: "Vite",
          description: "Modern build tool, fast HMR, optimized production builds",
        },
        {
          name: "Git/GitHub",
          description: "Version control, branching strategies, pull requests, collaborative workflows",
        },
        {
          name: "Angular",
          description: "Enterprise application development with RxJS and Angular Material",
        },
      ],
    },
    {
      category: "Content Creation & Media",
      skills: [
        { name: "StreamYard", description: "Live streaming and production" },
        {
          name: "OBS Studio",
          description: "Professional broadcasting software",
        },
        {
          name: "Adobe Premiere Pro",
          description: "Video editing and post-production",
        },
        {
          name: "Final Cut Pro",
          description: "Advanced video editing workflows",
        },
        {
          name: "Canva",
          description: "Quick design and social media graphics",
        },
        {
          name: "YouTube Studio",
          description: "Channel management and analytics",
        },
        { name: "VidIQ", description: "YouTube SEO and optimization" },
        { name: "TubeBuddy", description: "Content optimization tools" },
        {
          name: "SEO & Analytics",
          description: "Content optimization and performance tracking",
        },
        {
          name: "Thumbnail Design",
          description: "Click-worthy visual creation",
        },
        {
          name: "Social Media Strategy",
          description: "Multi-platform content planning",
        },
      ],
    },
    {
      category: "AI & Tools",
      skills: [
        {
          name: "ChatGPT",
          description: "AI-assisted development and content creation",
        },
        { name: "Claude", description: "Advanced AI workflows" },
        { name: "GitHub Copilot", description: "AI pair programming" },
        { name: "Midjourney", description: "AI image generation" },
      ],
    },
    {
      category: "UI/UX Design",
      skills: [
        { name: "Figma", description: "UI/UX design and prototyping" },
        {
          name: "Responsive Design",
          description: "Mobile-first design principles",
        },
        { name: "User Experience", description: "Intuitive interface design" },
        { name: "Accessibility", description: "WCAG-compliant web design" },
      ],
    },
  ];

  const timeline = [
    {
      year: "2020",
      event: "Web development training & launched YouTube network",
    },
    { year: "2021", event: "First developer role at MD Swiss Pharma" },
    { year: "2022", event: "Joined Ultimate System as Web Developer" },
    {
      year: "2025-2026",
      event: "Graduated BCIT - New Media Design & Web Development",
    },
    { year: "2025", event: "Expanding React/Next.js expertise" },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 bg-background-secondary min-h-screen tech-grid">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Photo */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Profile Photo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-glow-lg ring-4 ring-primary/20 hover:ring-8 hover:ring-primary/30 transition-all duration-300">
              <img
                src={profileImage}
                alt="Soroush Bayanati"
                className="w-full h-full object-cover object-center scale-150 hover:scale-[1.6] transition-transform duration-300"
                style={{ objectPosition: "0% 80%" }}
              />
            </div>
          </div>

          <p className="code-comment text-sm mb-3">Developer Profile</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-text-primary mb-4">
            <span className="text-primary">const</span> developer
            <span className="text-text-muted"> = </span>
            <span className="text-primary neon-glow">"Soroush Bayanati"</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 font-mono">
            <span className="text-primary">role</span>:{" "}
            <span className="font-semibold">
              "Frontend Developer & Content Creator"
            </span>
          </p>
          <div className="flex items-center justify-center space-x-2 text-text-secondary">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Vancouver, BC, Canada</span>
          </div>
        </div>

        {/* My Journey Story */}
        <div
          className={`modern-card mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <p className="code-comment text-sm mb-3">Personal Story</p>
          <h2 className="text-3xl font-bold font-mono text-primary mb-6">
            journey<span className="text-text-muted">.</span>story
            <span className="text-text-muted">()</span>
          </h2>

          <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
            <p>
              I'm a frontend developer born in 1995, based in Vancouver, BC. My
              journey into web development began in 2017 when I moved to Canada
              from Iran, driven by a passion for technology and creativity.
            </p>

            <p>
              I discovered my true calling in web development through the
              ability to build interactive experiences that millions of people
              could use. I dove deep into learning through multiple
              paths—Coursera certifications from the University of Michigan and
              Hong Kong University of Science & Technology, Sematec Institute
              training, and countless hours of self-teaching through platforms
              like Udemy, Frontend Masters, Packt, and Pluralsight.
            </p>

            <p>
              In 2026, I graduated from BCIT's New Media Design & Web
              Development program, which gave me a comprehensive foundation in
              both the technical and creative aspects of web development. This
              formal education, combined with my self-taught skills, equipped me
              to build production-grade applications.
            </p>

            <p>
              Since 2021, I've been building real-world web applications at MD
              Swiss Pharma and Ultimate System, working with Angular, React,
              TypeScript, and modern web technologies. But my path hasn't been
              just about code—in 2020, I also built and scaled a multi-channel
              football media network to over 40,000 YouTube subscribers and
              190,000 Instagram followers.
            </p>

            <p>
              This unique combination has taught me to think beyond just writing
              code. I understand user engagement, analytics, product growth, and
              visual design. I build applications that not only work technically
              but also connect with users and achieve business goals.
            </p>

            <p className="font-semibold text-primary">
              Today, I specialize in React, Next.js, and TypeScript, creating
              modern web applications with clean code, thoughtful UX, and
              measurable impact. I'm excited to bring my technical skills and
              creative problem-solving to innovative teams building products
              that matter.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="code-comment text-sm mb-3 text-center">Career Path</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-primary mb-6 sm:mb-8 text-center">
            timeline<span className="text-text-muted">[]</span>
          </h2>
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
            {/* Timeline Line - Mobile */}
            <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-primary/30"></div>

            {/* Timeline Items */}
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Mobile dot */}
                  <div className="md:hidden w-3 h-3 bg-primary rounded-full border-2 border-background-secondary shadow-glow-sm z-10 flex-shrink-0 mt-5 mr-4"></div>
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                  >
                    <div className="bg-background-tertiary border border-primary/30 rounded-lg p-3 sm:p-4 shadow-glow-sm hover:shadow-glow-md hover:border-primary/50 transition-all text-left">
                      <span className="inline-block px-2 sm:px-3 py-1 bg-primary/20 border border-primary/30 text-primary text-xs sm:text-sm font-semibold rounded-full mb-2">
                        {item.year}
                      </span>
                      <p className="text-sm sm:text-base text-text-secondary">{item.event}</p>
                    </div>
                  </div>
                  {/* Desktop dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background-secondary shadow-glow-sm z-10 flex-shrink-0"></div>
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <p className="code-comment text-sm mb-3 text-center">
            Technical Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-primary mb-6 sm:mb-8 text-center">
            skills<span className="text-text-muted">.</span>map
            <span className="text-text-muted">()</span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="modern-card !p-4 sm:!p-6 md:!p-8">
                <h3 className="text-base sm:text-lg md:text-xl font-bold font-mono text-text-primary mb-4 sm:mb-6 flex items-center flex-wrap">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" />
                  <span className="text-primary break-all">
                    {category.category.toLowerCase().replace(/ /g, "_")}
                  </span>
                  <span className="text-text-muted">: {"{"}</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pl-2 sm:pl-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 glass border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow-md transition-all duration-200 group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="mb-1 flex items-center">
                          <span className="text-primary font-mono mr-2 group-hover:scale-125 transition-transform flex-shrink-0">
                            {">"}
                          </span>
                          <span className="font-semibold font-mono text-text-primary text-sm sm:text-base truncate">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary pl-4">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-mono text-text-muted mt-4">{"}"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="code-comment text-sm mb-3 text-center">
            Personal Interests
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-primary mb-6 sm:mb-8 text-center">
            hobbies<span className="text-text-muted">.</span>list
            <span className="text-text-muted">()</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-background-tertiary border border-primary/30 rounded-lg p-4 sm:p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary/30">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-bold text-text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                Football Analysis
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                Passionate about tactical analysis and the beautiful game
              </p>
            </div>

            <div className="bg-background-tertiary border border-primary/30 rounded-lg p-4 sm:p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary/30">
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-bold text-text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                House/Techno
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                Discovering artists and attending electronic music events
              </p>
            </div>

            <div className="bg-background-tertiary border border-primary/30 rounded-lg p-4 sm:p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary/30">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-bold text-text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                Tech Exploration
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                Learning new frameworks, tools, and best practices
              </p>
            </div>

            <div className="bg-background-tertiary border border-primary/30 rounded-lg p-4 sm:p-6 hover:shadow-glow-md hover:border-primary/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary/30">
                <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-bold text-text-primary mb-1 sm:mb-2 text-sm sm:text-base">Travel</h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                Exploring new places, cultures, and perspectives
              </p>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div
          className={`mt-12 sm:mt-16 modern-card !p-4 sm:!p-6 md:!p-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="code-comment text-sm mb-3">Academic Background</p>
          <h2 className="text-xl sm:text-2xl font-bold font-mono text-text-primary mb-4 sm:mb-6 flex items-center">
            <Award className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-primary" />
            <span className="text-primary">education</span>
            <span className="text-text-muted">[]</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                <span className="text-xl sm:text-2xl">🎓</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-sm sm:text-base">
                  Diploma - New Media Design & Web Development
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base">
                  British Columbia Institute of Technology (BCIT)
                </p>
                <p className="text-xs sm:text-sm text-text-secondary">
                  2025 - 2026 (Completed)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                <span className="text-xl sm:text-2xl">📜</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-sm sm:text-base">
                  Front-End JavaScript Frameworks (Angular)
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base">
                  University of Michigan - Coursera
                </p>
                <p className="text-xs sm:text-sm text-text-secondary">
                  2021 • Includes HTML5 & JavaScript Interactivity
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                <span className="text-xl sm:text-2xl">📜</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-sm sm:text-base">
                  Front-End JavaScript Frameworks
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base truncate">
                  HK University of Science & Technology - Coursera
                </p>
                <p className="text-xs sm:text-sm text-text-secondary">
                  2021 • Angular framework specialization
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                <span className="text-xl sm:text-2xl">📜</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-sm sm:text-base">
                  Web Development Fundamentals
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base">Sematec Institute</p>
                <p className="text-xs sm:text-sm text-text-secondary">
                  2020 • HTML, CSS, JavaScript, Bootstrap
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                <span className="text-xl sm:text-2xl">💻</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-sm sm:text-base">
                  Self-Taught Learning
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Udemy, Frontend Masters, Packt, Pluralsight
                </p>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Ongoing • React, Next.js, TypeScript, Testing, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
