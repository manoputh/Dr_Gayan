# Deployment Guide

## 🚀 Production Deployment

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

#### Prerequisites

- GitHub account
- Vercel account (free - sign up at https://vercel.com)

#### Steps

1. **Push Your Code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**

   In Vercel dashboard:
   - Go to "Settings" → "Environment Variables"
   - Add these variables:
      ```
      NEXT_PUBLIC_SANITY_PROJECT_ID = your_project_id
      NEXT_PUBLIC_SANITY_DATASET = production
      NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-29
      ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

5. **Custom Domain (Optional)**
   - Go to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

#### Continuous Deployment

Every time you push to GitHub, Vercel automatically redeploys. No manual updates needed!

---

### Option 2: Netlify

Another excellent option with similar features.

#### Steps

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import existing project"
   - Connect to GitHub and select your repo

3. **Build Settings**

   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables**

   Add in Netlify dashboard → Site settings → Environment variables:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID
   NEXT_PUBLIC_SANITY_DATASET
   NEXT_PUBLIC_SANITY_API_VERSION
   ```

5. **Deploy**

   Click "Deploy site"

---

### Option 3: Self-Hosted (VPS/Cloud Server)

For advanced users who want full control.

#### Prerequisites

- VPS (DigitalOcean, AWS, Linode, etc.)
- Node.js 18+ installed
- PM2 or similar process manager

#### Steps

1. **Build Your Application**

   ```bash
   npm run build
   ```

2. **Upload Files to Server**

   Upload these folders/files:
   - `.next/`
   - `public/`
   - `package.json`
   - `next.config.js`
   - `.env.local` (with production values)

3. **Install Dependencies on Server**

   ```bash
   npm install --production
   ```

4. **Start with PM2**

   ```bash
   pm2 start npm --name "ai-consulting" -- start
   pm2 save
   pm2 startup
   ```

5. **Set Up Nginx (Reverse Proxy)**

   ```nginx
   server {
     listen 80;
     server_name your-domain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

6. **SSL Certificate**

   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

---

## 🏢 Deploy Sanity Studio

Sanity Studio can be hosted on Sanity's CDN for free.

### Steps

1. **Navigate to Studio Folder**

   ```bash
   cd studio
   ```

2. **Deploy to Sanity**

   ```bash
   npx sanity deploy
   ```

3. **Choose Hostname**

   Enter a hostname (e.g., `ai-consulting-studio`)

4. **Access Your Studio**

   Your studio will be available at:

   ```
   https://ai-consulting-studio.sanity.studio
   ```

5. **Configure CORS (Important!)**

   In Sanity dashboard:
   - Go to https://www.sanity.io/manage
   - Select your project
   - Go to "API" → "CORS Origins"
   - Add your website domain (e.g., `https://your-site.vercel.app`)
   - Check "Allow credentials"

---

## 🔒 Security Checklist

Before going live:

- [ ] Set up CORS in Sanity for your production domain
- [ ] Use HTTPS (SSL certificate)
- [ ] Don't commit `.env.local` to GitHub (it's in `.gitignore`)
- [ ] Use Sanity API tokens for write operations (if needed)
- [ ] Enable Sanity API rate limiting
- [ ] Set up proper authentication for Studio access

---

## 📊 Performance Optimization

### Next.js Image Optimization

Already configured! Next.js automatically optimizes images.

### Sanity CDN

Enable in `lib/sanity.js`:

```javascript
useCdn: true; // Already set for production
```

### Caching

Vercel/Netlify handle this automatically. For self-hosted:

```javascript
// In page components
export const revalidate = 60; // Revalidate every 60 seconds
```

---

## 🔄 Update Process

### For Vercel/Netlify (Automatic)

1. Make changes locally
2. Test: `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update homepage"
   git push
   ```
4. Automatic deployment starts!

### For Self-Hosted

1. Build locally: `npm run build`
2. Upload `.next` folder to server
3. Restart PM2: `pm2 restart ai-consulting`

---

## 📈 Monitoring

### Vercel Analytics

Free analytics included:

- Page views
- Performance metrics
- Web Vitals

Enable in Vercel dashboard → Analytics

### Google Analytics

Add to `app/layout.js`:

```javascript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## 🐛 Troubleshooting Deployment

### Build Fails

**Error: Can't resolve module**

- Run `npm install` locally
- Check `package.json` includes all dependencies
- Clear cache: `rm -rf .next node_modules` then reinstall

**Environment Variables Missing**

- Double-check they're set in hosting platform
- Make sure they start with `NEXT_PUBLIC_` for client-side access

### Images Not Loading

- Verify Sanity CDN is in `next.config.js` `remotePatterns`
- Check CORS settings in Sanity dashboard

### Sanity Data Not Showing

- Verify Sanity Project ID is correct
- Check content is published (not draft)
- Verify dataset name matches (usually `production`)

---

## 💰 Costs

### Free Tier (Sufficient for Most)

- **Vercel**: Free tier includes:
   - Unlimited websites
   - 100GB bandwidth/month
   - Automatic SSL
   - Git integration

- **Sanity**: Free tier includes:
   - 3 users
   - 10GB bandwidth/month
   - 500K API requests/month
   - Unlimited documents

### When You Need to Upgrade

- High traffic (>100K visitors/month)
- Need more team members in Sanity
- Need more than 10GB assets in Sanity

---

## ✅ Post-Deployment Checklist

- [ ] Website loads at production URL
- [ ] All pages accessible
- [ ] Images loading correctly
- [ ] Sanity Studio accessible and working
- [ ] CORS configured for production domain
- [ ] SSL certificate active (HTTPS)
- [ ] Contact form working (if applicable)
- [ ] Analytics tracking (if set up)
- [ ] Test on mobile devices
- [ ] Check page load speed
- [ ] Submit sitemap to Google Search Console

---

## 🎉 You're Live!

Congratulations! Your AI/ML consulting website is now live.

**Next steps:**

1. Share your URL with clients
2. Update social media profiles
3. Add to email signature
4. Submit to Google Search Console
5. Start creating content!

---

**Need help?** Check the main README.md or Vercel/Sanity documentation.
