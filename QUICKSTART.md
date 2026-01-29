# Quick Start Guide

## 🚀 Get Your Website Running in 10 Minutes

### 1. Install Everything (2 minutes)

Open terminal/PowerShell in the project folder:

```bash
# Install Next.js dependencies
npm install

# Install Sanity Studio dependencies
cd studio
npm install
cd ..
```

### 2. Set Up Sanity (3 minutes)

```bash
cd studio
npx sanity init
```

**Follow the prompts:**

- Login to Sanity (create free account if needed)
- Create new project
- Name it something like "AI ML Consulting"
- Use default dataset (production)
- Say "Yes" to reconfigure

**Important:** Copy your Project ID when shown!

### 3. Configure Environment (1 minute)

Create `.env.local` file in root folder:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=paste-your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-29
```

Also update:

- `studio/sanity.config.js` - Replace `your-project-id`
- `studio/sanity.cli.js` - Replace `your-project-id`

### 4. Deploy Schema (1 minute)

```bash
cd studio
npx sanity schema deploy
cd ..
```

### 5. Start Both Servers (1 minute)

**Terminal 1 - Sanity Studio:**

```bash
cd studio
npm run dev
```

Opens at http://localhost:3333

**Terminal 2 - Next.js Website:**

```bash
npm run dev
```

Opens at http://localhost:3000

### 6. Add Content (2 minutes)

Go to http://localhost:3333 and add:

1. **Site Settings** → Add about info, email, social links
2. **Hero Section** → Add headline and CTAs
3. **Consulting Services** → Add at least one service
4. **Authors** → Create your profile
5. **Categories** → Create a category (e.g., "AI")
6. **Blog Posts** → Write your first post
7. **Videos** → Add a YouTube video URL

✅ **Done!** Visit http://localhost:3000 to see your website!

---

## 📱 What You See

- **Home** - Hero section, services preview, blog preview
- **About** - Your bio and expertise
- **Consulting** - All services + inquiry form
- **Blog** - All blog posts
- **Videos** - YouTube video gallery
- **Contact** - Social links and contact info

---

## 🎨 Quick Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
'electric-blue': '#00d4ff',  // Change to your blue
'gold-accent': '#d4af37',    // Change to your gold
```

### Change Navigation

Edit `components/Navbar.js` - modify the `navLinks` array

### Change Footer

Edit `components/Footer.js`

---

## 🚢 Deploy to Production

### Deploy Website (Vercel)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import repository
4. Add environment variables
5. Deploy!

### Deploy Sanity Studio

```bash
cd studio
npx sanity deploy
```

Choose a hostname (e.g., `my-consulting-studio`)

---

## ❓ Common Issues

**"Can't find module"** → Run `npm install`

**Images not showing** → Make sure content is published in Studio

**Sanity data not loading** → Check `.env.local` has correct Project ID

**Port already in use** → Change port: `npm run dev -- -p 3001`

---

## 📞 Need Help?

1. Check README.md for detailed docs
2. Check browser console for errors (F12)
3. Verify content is published in Sanity Studio
4. Make sure both servers are running

---

**Next Steps:**

1. Add your real content in Sanity Studio
2. Customize colors and branding
3. Add your domain in Vercel
4. Launch! 🚀
