# 🚀 Pre-Launch Checklist

Use this checklist to ensure everything is ready before launching your website.

---

## ✅ Development Setup

### Initial Setup

- [ ] Node.js 18+ installed
- [ ] npm or yarn working
- [ ] Git installed and configured
- [ ] Code editor (VS Code recommended) set up

### Project Installation

- [ ] `npm install` completed successfully (root)
- [ ] `cd studio && npm install` completed successfully
- [ ] No dependency errors or warnings

### Sanity Configuration

- [ ] Sanity project created at sanity.io
- [ ] Project ID copied and saved
- [ ] `.env.local` file created with correct values
- [ ] `studio/sanity.config.js` updated with Project ID
- [ ] `studio/sanity.cli.js` updated with Project ID
- [ ] Schema deployed: `npx sanity schema deploy`

### Development Servers

- [ ] Next.js dev server starts: `npm run dev`
- [ ] Sanity Studio starts: `cd studio && npm run dev`
- [ ] Website accessible at http://localhost:3000
- [ ] Studio accessible at http://localhost:3333
- [ ] No console errors in browser (F12)

---

## 📝 Content Population

### Required Content (Must Have)

- [ ] **Site Settings** - About, email, phone added
- [ ] **Hero Section** - Headline and CTAs configured
- [ ] **At least 1 Author** - Your profile created
- [ ] **At least 1 Category** - Blog category created
- [ ] **At least 1 Service** - Consulting service added
- [ ] **Social Links** - At least LinkedIn added

### Recommended Content (Should Have)

- [ ] **3+ Services** - Showcase full service portfolio
- [ ] **3+ Blog Posts** - Published with images
- [ ] **2+ Videos** - YouTube videos added
- [ ] **Profile Image** - Author photo uploaded
- [ ] **Service Icons** - Appropriate icons selected

### Optional Content (Nice to Have)

- [ ] **10+ Blog Posts** - Full blog archive
- [ ] **5+ Videos** - Robust video library
- [ ] **Multiple Authors** - If team-based
- [ ] **Multiple Categories** - Organized content
- [ ] **Hero Background Image** - Custom background

---

## 🎨 Branding & Customization

### Visual Identity

- [ ] Colors customized in `tailwind.config.js`
- [ ] Logo/site name updated in components
- [ ] Favicon added to `public/` folder
- [ ] Brand colors match your identity

### Content Review

- [ ] All "Lorem ipsum" placeholder text removed
- [ ] Company name updated everywhere
- [ ] Contact information verified
- [ ] Social media links tested
- [ ] Author bio personalized

### Navigation

- [ ] All nav links work correctly
- [ ] Mobile menu tested
- [ ] Footer links verified
- [ ] 404 page reviewed

---

## 🧪 Testing

### Functionality Testing

- [ ] All pages load without errors
- [ ] Blog posts display correctly
- [ ] Videos play/link to YouTube
- [ ] Consulting form submits (test mode)
- [ ] Images load from Sanity
- [ ] Navigation works on all pages
- [ ] Footer social links open correctly

### Responsive Testing

- [ ] Mobile view (< 768px) tested
- [ ] Tablet view (768-1024px) tested
- [ ] Desktop view (> 1024px) tested
- [ ] All buttons accessible on mobile
- [ ] Form usable on mobile
- [ ] Images responsive on all devices

### Browser Testing

- [ ] Chrome/Edge tested
- [ ] Firefox tested
- [ ] Safari tested (if available)
- [ ] Mobile browsers tested

### Content Testing

- [ ] All blog posts readable
- [ ] Images have alt text
- [ ] Links open correctly
- [ ] Videos embed properly
- [ ] No broken links

---

## 🔒 Security & Performance

### Environment Variables

- [ ] `.env.local` NOT committed to git
- [ ] `.gitignore` includes `.env.local`
- [ ] No API keys in code
- [ ] Production env vars ready

### Performance

- [ ] Images optimized (< 500KB each)
- [ ] No console errors in production build
- [ ] Page load time < 3 seconds
- [ ] Build completes: `npm run build`

### Security

- [ ] CORS configured in Sanity
- [ ] HTTPS enabled (via hosting)
- [ ] No sensitive data exposed
- [ ] Sanity Studio access restricted

---

## 🚢 Deployment Preparation

### Code Repository

- [ ] GitHub repository created
- [ ] Code pushed to main branch
- [ ] `.gitignore` working correctly
- [ ] README.md updated with your info

### Vercel Setup (Recommended)

- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Environment variables added to Vercel
- [ ] Build settings verified
- [ ] Custom domain configured (optional)

### Sanity Studio Deployment

- [ ] `cd studio && npx sanity deploy` executed
- [ ] Studio hostname chosen
- [ ] Studio accessible online
- [ ] CORS origins added for production domain

### DNS Configuration (If Custom Domain)

- [ ] Domain purchased/available
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] Domain pointing to Vercel

---

## 🎯 SEO & Analytics

### Basic SEO

- [ ] Meta titles set on all pages
- [ ] Meta descriptions added
- [ ] Keywords relevant
- [ ] Images have alt text
- [ ] Semantic HTML used

### Analytics (Optional)

- [ ] Google Analytics set up
- [ ] Vercel Analytics enabled
- [ ] Privacy policy added (if collecting data)
- [ ] Cookie consent implemented (if required)

### Search Console (Optional)

- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Initial indexing requested

---

## 📱 Social Media Integration

### Links Verified

- [ ] LinkedIn profile URL correct
- [ ] Facebook page URL correct
- [ ] YouTube channel URL correct
- [ ] Twitter/X handle correct
- [ ] GitHub profile correct (if applicable)

### Social Cards (Optional)

- [ ] Open Graph tags added
- [ ] Twitter card meta tags
- [ ] Social preview images

---

## 📋 Content Review Checklist

### Grammar & Style

- [ ] No typos or spelling errors
- [ ] Professional tone throughout
- [ ] Consistent voice (1st/3rd person)
- [ ] CTAs clear and actionable

### Legal (If Applicable)

- [ ] Terms of Service added
- [ ] Privacy Policy added
- [ ] Cookie Policy added
- [ ] GDPR compliance (if EU users)

### Contact Information

- [ ] Email address working
- [ ] Phone number correct
- [ ] Business hours accurate
- [ ] Response time expectations set

---

## 🔄 Post-Launch

### Immediate (Day 1)

- [ ] Test all pages live
- [ ] Verify Sanity Studio access
- [ ] Check mobile version
- [ ] Test contact form
- [ ] Monitor for errors

### First Week

- [ ] Submit to Google Search Console
- [ ] Share on social media
- [ ] Update email signature
- [ ] Add to business cards
- [ ] Monitor analytics

### First Month

- [ ] Publish new blog posts
- [ ] Add more videos
- [ ] Gather client feedback
- [ ] Check SEO rankings
- [ ] Review analytics data

---

## 🐛 Common Issues & Solutions

### Images Not Loading

```
Solution:
1. Check next.config.js has Sanity CDN in remotePatterns
2. Verify images are published in Sanity Studio
3. Clear browser cache
```

### Sanity Data Not Showing

```
Solution:
1. Check .env.local has correct Project ID
2. Verify content is published (not draft)
3. Check console for API errors
4. Test query in Sanity Vision
```

### Build Fails

```
Solution:
1. Run: npm install
2. Clear cache: rm -rf .next
3. Check for missing dependencies
4. Verify all imports are correct
```

### Form Not Submitting

```
Solution:
1. Check console for JavaScript errors
2. Verify form validation rules
3. Test in different browser
4. Add API endpoint if needed
```

---

## 📞 Support Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

### Project Files

- `README.md` - Complete documentation
- `QUICKSTART.md` - Fast setup guide
- `DEPLOYMENT.md` - Deployment instructions
- `SAMPLE_CONTENT.md` - Content examples

---

## ✨ Launch Day Checklist

### Final Checks (Before Going Live)

- [ ] All content reviewed and approved
- [ ] All links tested and working
- [ ] Mobile version perfect
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Backup of all content

### Go Live

- [ ] Deploy to Vercel
- [ ] Update DNS (if custom domain)
- [ ] Verify live site works
- [ ] Test from different locations/devices

### Announce

- [ ] Post on LinkedIn
- [ ] Share on Twitter/X
- [ ] Email announcement
- [ ] Update portfolio
- [ ] Tell clients/colleagues

---

## 🎉 Congratulations!

When all boxes are checked, you're ready to launch your premium AI/ML consulting website!

**Remember:**

- Your website is never "finished" - keep adding content
- Monitor analytics to understand your audience
- Update services and pricing as your business evolves
- Keep blog active with regular posts
- Engage with visitors who contact you

**You've built something amazing. Now go get those enterprise clients! 🚀**

---

### Quick Launch Command Sequence

```bash
# 1. Final build test
npm run build
npm start

# 2. Deploy Sanity Studio
cd studio
npx sanity deploy

# 3. Push to GitHub
cd ..
git add .
git commit -m "Ready for launch"
git push

# 4. Deploy to Vercel (via dashboard)
# - Import from GitHub
# - Add environment variables
# - Deploy!

# 5. Verify
# - Visit your live URL
# - Test all pages
# - Celebrate! 🎉
```
