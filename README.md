# Soroush Bayanati - Portfolio Website

A modern, professional portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Fast Performance**: Built with Vite for lightning-fast load times
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Print-Ready Resume**: Download/print your resume directly from the site
- **Component-Based**: Clean React architecture with reusable components

## 📋 Pages

1. **Home** - Hero section with introduction and key stats
2. **Projects** - Showcase of development work (text-only, professional cards)
3. **Content Creation** - YouTube network case study
4. **About** - Personal journey, skills, and education
5. **Resume** - Downloadable/printable resume
6. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library (optional)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors here
  }
}
```

### Content
All content is in the page components in `src/pages/`:
- `Home.jsx` - Hero and introduction
- `Projects.jsx` - Project listings
- `ContentCreation.jsx` - YouTube network info
- `About.jsx` - Personal story and skills
- `Resume.jsx` - Resume content
- `Contact.jsx` - Contact information

### Fonts
The portfolio uses:
- **Inter** - Main font (sans-serif)
- **JetBrains Mono** - Code/technical font (monospace)

Fonts are loaded from Google Fonts in `index.html`.

## 📱 Responsive Design

The portfolio is mobile-first and responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Import project to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment
```bash
npm run build
```
Upload the `dist` folder to your hosting provider.

## 📄 Resume Download

The resume page includes print and download functionality:
- Click "Download PDF" button
- In print dialog, choose "Save as PDF"
- Saves a clean, formatted PDF resume

## 🔗 Links to Update

Before deploying, update these links in the code:

1. **GitHub**: `https://github.com/soroushby`
2. **LinkedIn**: `https://linkedin.com/in/soroush-bayanati`
3. **YouTube**: Channel URLs in `ContentCreation.jsx`
4. **Email**: `sorosh.bayanati@gmail.com`

## 🎨 Design Philosophy

- **Clean & Professional**: Modern design suitable for tech industry
- **Content-First**: Focus on showcasing work and skills
- **Performance**: Fast load times and smooth interactions
- **Accessibility**: Semantic HTML and keyboard navigation
- **Conversion-Optimized**: Clear CTAs and easy contact

## 📊 Performance Tips

1. **Images**: Add images to `public/` folder and optimize them
2. **Code Splitting**: Vite automatically splits code for optimal loading
3. **Lazy Loading**: Consider adding lazy loading for images
4. **Caching**: Configure proper caching headers on your host

## 🐛 Troubleshooting

### Development server won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build fails
Check that all imports are correct and there are no TypeScript errors.

### Styles not applying
Make sure Tailwind CSS is properly configured and the CSS file is imported in `main.jsx`.

## 📝 License

This portfolio is for personal use. Feel free to use it as inspiration for your own portfolio!

## 🤝 Credits

Built by Soroush Bayanati
- Email: sorosh.bayanati@gmail.com
- GitHub: https://github.com/soroushby
- LinkedIn: https://linkedin.com/in/soroush-bayanati

---

**Happy Coding! 🚀**
