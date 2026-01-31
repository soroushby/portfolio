# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy this portfolio.

### Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings
   - Click "Deploy"
   - Done! ✅

Your site will be live at: `your-project-name.vercel.app`

### Custom Domain (Optional):
- Go to Project Settings > Domains
- Add your custom domain
- Follow DNS instructions

---

## Deploy to Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"
   - Done! ✅

---

## Deploy to GitHub Pages

### Steps:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

   Add homepage:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     base: '/YOUR_REPO_NAME/',
     plugins: [react()],
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Manual Deployment (Any Host)

### Build the project:
```bash
npm run build
```

This creates a `dist` folder with all your static files.

### Upload to your host:
- Upload the contents of the `dist` folder
- Point your domain to the uploaded files
- Make sure your server is configured for single-page apps

### Server Configuration:

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Environment Variables

If you need environment variables:

1. **Create `.env` file:**
   ```
   VITE_API_URL=your_api_url
   VITE_ANALYTICS_ID=your_analytics_id
   ```

2. **Use in code:**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. **Add to Vercel/Netlify:**
   - Go to Project Settings > Environment Variables
   - Add your variables

---

## Pre-Deployment Checklist

- [ ] Update all personal links (GitHub, LinkedIn, email)
- [ ] Test all navigation links
- [ ] Test resume download/print
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` locally to check for errors
- [ ] Update meta tags in `index.html` for SEO
- [ ] Add Google Analytics (optional)
- [ ] Test on different browsers

---

## Post-Deployment

### Add Google Analytics (Optional):

1. Get your GA4 tracking ID
2. Add to `index.html` before `</head>`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Monitor Performance:
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for audits
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor in Vercel/Netlify analytics

---

## Troubleshooting

### Build fails on Vercel/Netlify:
- Check Node version (should be 16+)
- Ensure all dependencies are in `package.json`
- Check for TypeScript/linting errors

### 404 errors on page refresh:
- Configure your host for SPAs (see Server Configuration above)
- On Vercel/Netlify, this is automatic

### Slow load times:
- Optimize images (use WebP format)
- Enable caching headers
- Use a CDN

---

## Need Help?

If you encounter issues:
1. Check the error messages carefully
2. Google the specific error
3. Check Vercel/Netlify documentation
4. Ask on Stack Overflow

**Good luck with your deployment! 🚀**
