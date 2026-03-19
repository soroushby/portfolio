/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Light mode is toggled by adding .light to <html>
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CSS-variable driven — adapt to light/dark automatically
        background: {
          primary:   'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          tertiary:  'rgb(var(--bg-tertiary) / <alpha-value>)',
          card:      'rgb(var(--bg-card) / <alpha-value>)',
        },
        text: {
          primary:   'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted:     'rgb(var(--text-muted) / <alpha-value>)',
        },
        // Brand colors stay constant in both modes
        primary: {
          DEFAULT: '#8b5cf6',
          light:   '#a78bfa',
          dark:    '#7c3aed',
          50:      '#f5f3ff',
        },
        secondary: {
          DEFAULT: '#3b82f6',
          light:   '#60a5fa',
          dark:    '#2563eb',
        },
        accent: {
          DEFAULT: '#06b6d4',
          light:   '#22d3ee',
          dark:    '#0891b2',
        },
        fuchsia: {
          DEFAULT: '#e879f9',
          light:   '#f0abfc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out',
        'slide-up':     'slideUp 0.6s ease-out',
        'float':        'float 4s ease-in-out infinite',
        'float-delayed':'float 4s ease-in-out 2s infinite',
        'gradient':     'gradient 4s ease infinite',
        'spin-slow':    'spin 10s linear infinite',
        'spin-slower':  'spin 20s linear infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'scale-in':     'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':      { 'background-position': '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(139,92,246,0.2)' },
          '50%':      { 'box-shadow': '0 0 30px rgba(139,92,246,0.7), 0 0 60px rgba(139,92,246,0.35)' },
        },
        shimmer: {
          '0%':   { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow-sm':    '0 0 12px rgba(139,92,246,0.3)',
        'glow-md':    '0 0 24px rgba(139,92,246,0.4)',
        'glow-lg':    '0 0 40px rgba(139,92,246,0.5)',
        'glow-cyan':  '0 0 24px rgba(6,182,212,0.5)',
        'glow-pink':  '0 0 24px rgba(232,121,249,0.5)',
        'card':       '0 4px 24px -4px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.08)',
        'card-hover': '0 8px 40px -8px rgba(139,92,246,0.4), 0 0 0 1px rgba(139,92,246,0.25)',
        'card-light': '0 2px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(139,92,246,0.12)',
        'nav':        '0 1px 40px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
