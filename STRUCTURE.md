# 📁 Complete Project Structure

```
Dr_Gayan/
│
├── 📄 README.md                      # Main documentation
├── 📄 QUICKSTART.md                  # 10-minute setup guide
├── 📄 DEPLOYMENT.md                  # Production deployment guide
├── 📄 SAMPLE_CONTENT.md              # Sample content for CMS
│
├── 📄 package.json                   # Next.js dependencies
├── 📄 next.config.js                 # Next.js configuration
├── 📄 jsconfig.json                  # Path aliases configuration
├── 📄 tailwind.config.js             # Tailwind CSS configuration
├── 📄 postcss.config.js              # PostCSS configuration
├── 📄 .gitignore                     # Git ignore rules
├── 📄 .env.local.example             # Environment variables template
│
├── 📁 app/                           # Next.js App Router
│   ├── 📄 layout.js                  # Root layout with nav/footer
│   ├── 📄 page.js                    # Home page
│   ├── 📄 globals.css                # Global styles
│   ├── 📄 loading.js                 # Loading state component
│   ├── 📄 error.js                   # Error boundary
│   ├── 📄 not-found.js               # 404 page
│   │
│   ├── 📁 about/
│   │   └── 📄 page.js                # About page
│   │
│   ├── 📁 consulting/
│   │   ├── 📄 page.js                # Consulting services page
│   │   └── 📄 ConsultingForm.js      # Inquiry form component
│   │
│   ├── 📁 blog/
│   │   ├── 📄 page.js                # Blog listing page
│   │   └── 📁 [slug]/
│   │       └── 📄 page.js            # Individual blog post
│   │
│   ├── 📁 videos/
│   │   └── 📄 page.js                # Videos gallery page
│   │
│   └── 📁 contact/
│       └── 📄 page.js                # Contact page
│
├── 📁 components/                    # Reusable React components
│   ├── 📄 Navbar.js                  # Navigation with mobile menu
│   ├── 📄 Footer.js                  # Footer with social links
│   ├── 📄 Button.js                  # Reusable button (primary/secondary)
│   ├── 📄 Container.js               # Layout container wrapper
│   ├── 📄 SectionHeading.js          # Section title component
│   ├── 📄 BlogCard.js                # Blog post preview card
│   ├── 📄 VideoCard.js               # YouTube video card
│   └── 📄 ServiceCard.js             # Consulting service card
│
├── 📁 lib/                           # Utility functions
│   ├── 📄 sanity.js                  # Sanity client & image builder
│   └── 📄 queries.js                 # GROQ queries for data fetching
│
├── 📁 public/                        # Static assets (favicon, images, etc.)
│   └── (add your static files here)
│
└── 📁 studio/                        # Sanity Studio (CMS)
    ├── 📄 package.json               # Studio dependencies
    ├── 📄 sanity.config.js           # Studio configuration
    ├── 📄 sanity.cli.js              # CLI configuration
    ├── 📄 .env.local.example         # Studio env variables
    │
    └── 📁 schemas/                   # Content schemas (data models)
        ├── 📄 index.js               # Schema exports
        ├── 📄 siteSettings.js        # Global site settings
        ├── 📄 hero.js                # Hero section content
        ├── 📄 service.js             # Consulting services
        ├── 📄 blogPost.js            # Blog posts
        ├── 📄 author.js              # Blog authors
        ├── 📄 category.js            # Blog categories
        └── 📄 video.js               # YouTube videos
```

---

## 📝 File Purposes

### Root Configuration Files

| File                 | Purpose                            |
| -------------------- | ---------------------------------- |
| `package.json`       | Next.js dependencies and scripts   |
| `next.config.js`     | Next.js settings (images, domains) |
| `tailwind.config.js` | Custom colors, fonts, animations   |
| `postcss.config.js`  | CSS processing configuration       |
| `jsconfig.json`      | Path aliases (`@/` = root)         |
| `.env.local`         | Environment variables (not in git) |
| `.gitignore`         | Files to exclude from git          |

### Documentation Files

| File                | Purpose                     |
| ------------------- | --------------------------- |
| `README.md`         | Complete documentation      |
| `QUICKSTART.md`     | Fast setup guide (10 min)   |
| `DEPLOYMENT.md`     | Production deployment steps |
| `SAMPLE_CONTENT.md` | Example content for CMS     |

### App Directory (Pages)

| Path                               | Purpose                        | Type             |
| ---------------------------------- | ------------------------------ | ---------------- |
| `app/page.js`                      | Home page with hero & previews | Server Component |
| `app/about/page.js`                | About page                     | Server Component |
| `app/consulting/page.js`           | Services showcase              | Server Component |
| `app/consulting/ConsultingForm.js` | Inquiry form                   | Client Component |
| `app/blog/page.js`                 | Blog listing                   | Server Component |
| `app/blog/[slug]/page.js`          | Individual blog post           | Server Component |
| `app/videos/page.js`               | Video gallery                  | Server Component |
| `app/contact/page.js`              | Contact info & social          | Server Component |
| `app/layout.js`                    | Root layout (nav/footer)       | Server Component |
| `app/globals.css`                  | Global styles                  | CSS              |
| `app/loading.js`                   | Loading state                  | Component        |
| `app/error.js`                     | Error boundary                 | Client Component |
| `app/not-found.js`                 | 404 page                       | Component        |

### Components

| Component           | Purpose                         | Reusable |
| ------------------- | ------------------------------- | -------- |
| `Navbar.js`         | Navigation bar with mobile menu | ✅       |
| `Footer.js`         | Footer with links & socials     | ✅       |
| `Button.js`         | Styled button (variants)        | ✅       |
| `Container.js`      | Layout wrapper (max-width)      | ✅       |
| `SectionHeading.js` | Consistent section titles       | ✅       |
| `BlogCard.js`       | Blog post preview               | ✅       |
| `VideoCard.js`      | YouTube video thumbnail         | ✅       |
| `ServiceCard.js`    | Service with icon               | ✅       |

### Lib (Utilities)

| File         | Purpose                        |
| ------------ | ------------------------------ |
| `sanity.js`  | Sanity client configuration    |
| `queries.js` | GROQ queries for fetching data |

### Sanity Schemas

| Schema            | Content Type            | Singleton |
| ----------------- | ----------------------- | --------- |
| `siteSettings.js` | About, contact, socials | ✅        |
| `hero.js`         | Homepage hero section   | ✅        |
| `service.js`      | Consulting services     | ❌        |
| `blogPost.js`     | Blog articles           | ❌        |
| `author.js`       | Blog authors            | ❌        |
| `category.js`     | Blog categories         | ❌        |
| `video.js`        | YouTube videos          | ❌        |

---

## 🎯 Key Concepts

### Server vs Client Components

**Server Components** (default in App Router):

- Run on server
- Can directly fetch data
- No client-side JavaScript
- Better performance & SEO
- Examples: Most pages, layouts

**Client Components** (`'use client'` directive):

- Run in browser
- Can use hooks (useState, useEffect)
- Interactive features
- Examples: Forms, modals, interactive UI

### App Router Structure

```
app/
├── page.js           → /
├── about/
│   └── page.js       → /about
├── blog/
│   ├── page.js       → /blog
│   └── [slug]/
│       └── page.js   → /blog/post-title
```

### Data Fetching

```javascript
// Server Component - Direct async/await
export default async function Page() {
  const data = await sanityFetch({ query });
  return <div>{data.title}</div>;
}

// Client Component - Use useEffect
'use client';
export default function Form() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
}
```

---

## 🚀 Development Workflow

1. **Start Development**

   ```bash
   npm run dev                # Next.js on :3000
   cd studio && npm run dev   # Sanity on :3333
   ```

2. **Make Changes**
   - Edit components in `components/`
   - Edit pages in `app/`
   - Add content in Sanity Studio

3. **Test Changes**
   - View at http://localhost:3000
   - Check mobile responsiveness
   - Test all links

4. **Deploy**
   - Push to GitHub
   - Vercel auto-deploys
   - Or manually build: `npm run build`

---

## 📦 Key Dependencies

### Next.js Dependencies

- `next` - Framework
- `react` / `react-dom` - UI library
- `next-sanity` - Sanity integration
- `@portabletext/react` - Rich text rendering
- `react-icons` - Icon library

### Styling

- `tailwindcss` - Utility CSS
- `autoprefixer` - CSS compatibility
- `postcss` - CSS processing

### Sanity Studio

- `sanity` - CMS platform
- `styled-components` - Studio styling

---

## 🎨 Customization Points

### Colors

→ `tailwind.config.js` (extend.colors)

### Fonts

→ `app/layout.js` (import font)
→ `tailwind.config.js` (fontFamily)

### Navigation

→ `components/Navbar.js` (navLinks array)

### Footer

→ `components/Footer.js`

### Content

→ Sanity Studio (http://localhost:3333)

---

## 📊 Size Reference

### Development

- Total files: ~40
- Lines of code: ~3,500
- node_modules: ~400 MB

### Production Build

- `.next/` folder: ~20 MB
- Optimized bundle: ~200 KB
- First load: < 2 seconds

---

This structure follows Next.js 14 best practices with clean separation of concerns, reusable components, and enterprise-ready architecture.
