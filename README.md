# AI/ML Consulting Website

A premium, enterprise-focused portfolio and consulting website built with Next.js and Sanity CMS. Features a "billionaire tech CEO" aesthetic with dark mode, glossy animations, and professional UI/UX.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with server components
- **Sanity CMS** - Headless CMS for easy content management
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Theme** - Premium black, graphite, and metallic colors with gold/blue accents
- **SEO Optimized** - Meta tags, semantic HTML, and fast loading
- **Blog System** - Full-featured blog with categories and rich text
- **Video Gallery** - YouTube video integration
- **Consulting Services** - Service showcase with inquiry form
- **Contact Page** - Social links and contact information

## 📁 Project Structure

```
Dr_Gayan/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── blog/                     # Blog listing and posts
│   │   └── [slug]/              # Dynamic blog post pages
│   ├── Audit/                   # Services and inquiry form
│   ├── contact/                 # Contact page
│   ├── videos/                  # Video gallery
│   ├── layout.js                # Root layout with nav/footer
│   ├── page.js                  # Home page
│   ├── globals.css              # Global styles
│   ├── loading.js               # Loading state
│   ├── error.js                 # Error boundary
│   └── not-found.js             # 404 page
│
├── components/                   # Reusable React components
│   ├── Navbar.js                # Navigation bar
│   ├── Footer.js                # Footer with social links
│   ├── Button.js                # Reusable button component
│   ├── Container.js             # Layout container
│   ├── SectionHeading.js        # Section headings
│   ├── BlogCard.js              # Blog post card
│   ├── VideoCard.js             # Video card
│   └── ServiceCard.js           # Service card
│
├── lib/                          # Utilities
│   ├── sanity.js                # Sanity client configuration
│   └── queries.js               # GROQ queries for data fetching
│
├── studio/                       # Sanity Studio (CMS)
│   ├── schemas/                 # Content schemas
│   │   ├── index.js             # Schema exports
│   │   ├── siteSettings.js      # Site settings schema
│   │   ├── hero.js              # Hero section schema
│   │   ├── service.js           # Service schema
│   │   ├── blogPost.js          # Blog post schema
│   │   ├── author.js            # Author schema
│   │   ├── category.js          # Category schema
│   │   └── video.js             # Video schema
│   ├── sanity.config.js         # Studio configuration
│   └── package.json             # Studio dependencies
│
├── public/                       # Static files
├── package.json                 # Next.js dependencies
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
└── .env.local.example           # Environment variables template
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Sanity.io account (free tier works)

### Step 1: Install Dependencies

Navigate to the project folder and install Next.js dependencies:

```bash
cd Dr_Gayan
npm install
```

Install Sanity Studio dependencies:

```bash
cd studio
npm install
cd ..
```

### Step 2: Set Up Sanity Project

1. **Create a Sanity project:**

   ```bash
   cd studio
   npx sanity init
   ```

2. **Follow the prompts:**
   - Login with your Sanity account
   - Create a new project
   - Use default dataset configuration
   - Choose "Yes" to reconfigure the studio

3. **Note your Project ID** - You'll need this for configuration

### Step 3: Configure Environment Variables

Create `.env.local` in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-29
```

Also update `studio/sanity.config.js` and `studio/sanity.cli.js` with your project ID.

### Step 4: Deploy Sanity Schema

Deploy your content schemas to Sanity:

```bash
cd studio
npx sanity schema deploy
cd ..
```

### Step 5: Add Sample Content

1. Start the Sanity Studio:

   ```bash
   cd studio
   npm run dev
   ```

2. Open http://localhost:3333 in your browser

3. **Add content in this order:**

   a. **Site Settings:**
   - Click "Site Settings"
   - Add your about information
   - Add contact email and phone
   - Add social media links

   b. **Hero Section:**
   - Click "Hero Section"
   - Set headline (e.g., "AI/ML Consulting & Innovation")
   - Add subheadline/value proposition
   - Set CTA button text and links

   c. **Authors:**
   - Click "Authors"
   - Create an author profile (your profile)
   - Add name, bio, and profile image

   d. **Categories:**
   - Click "Categories"
   - Create blog categories (e.g., "AI", "Machine Learning", "Data Science")

   e. **Consulting Services:**
   - Click "Consulting Services"
   - Add your services (AI Strategy, ML Solutions, Data Engineering, etc.)
   - Set display order, icons, and features

   f. **Blog Posts:**
   - Click "Blog Posts"
   - Create blog articles
   - Add title, slug, excerpt, content, images
   - Link to author and categories

   g. **Videos:**
   - Click "Videos"
   - Add YouTube video URLs
   - Include title and description

### Step 6: Run the Next.js Development Server

In a new terminal, start the Next.js development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Step 7: Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  'dark-bg': '#0a0a0a',           // Main background
  'dark-secondary': '#1a1a1a',     // Card backgrounds
  'electric-blue': '#00d4ff',      // Primary accent
  'gold-accent': '#d4af37',        // Secondary accent
}
```

### Typography

The site uses Inter font by default. To change:

1. Edit `app/layout.js`
2. Import different Google Font
3. Update `fontFamily` in `tailwind.config.js`

### Navigation Links

Edit `components/Navbar.js` to modify navigation:

```javascript
const navLinks = [
   { name: "Home", href: "/" },
   { name: "About", href: "/about" },
   // Add or remove links here
];
```

### Service Icons

When adding services in Sanity, use these icon names:

- `FaBrain` - AI/Brain icon
- `FaChartLine` - Analytics icon
- `FaRobot` - Robot/Automation icon
- `FaDatabase` - Database icon
- `FaCog` - Settings/Config icon
- `FaLightbulb` - Ideas/Innovation icon

## 📝 Content Management

### Editing Content

All content is managed through Sanity Studio at http://localhost:3333

**Key Content Types:**

1. **Site Settings** - Global site information (singleton)
2. **Hero Section** - Homepage hero content (singleton)
3. **Services** - Consulting services showcase
4. **Blog Posts** - Articles and insights
5. **Videos** - YouTube video library
6. **Authors** - Blog post authors
7. **Categories** - Blog post categories

### Adding Blog Posts

1. Go to Sanity Studio → Blog Posts → Create
2. Fill in title, excerpt, and main image
3. Write content using the rich text editor
4. Select author and categories
5. Set published date
6. Click "Publish"

### Adding Videos

1. Go to Sanity Studio → Videos → Create
2. Paste full YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
3. Add title and description
4. Optionally upload custom thumbnail
5. Click "Publish"

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
6. Click "Deploy"

### Deploy Sanity Studio

```bash
cd studio
npx sanity deploy
```

Choose a studio hostname (e.g., your-site-studio) and your studio will be available at:
`https://your-site-studio.sanity.studio`

## 🔧 Troubleshooting

### Images not showing

- Ensure `next.config.js` includes Sanity CDN in `remotePatterns`
- Check that images are published in Sanity Studio

### Data not loading

- Verify environment variables are set correctly
- Check Sanity project ID matches in all config files
- Ensure content is published (not draft) in Studio

### Build errors

- Run `npm install` to ensure all dependencies are installed
- Clear Next.js cache: `rm -rf .next`
- Check for TypeScript errors (even though we're using JavaScript)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🎯 Best Practices

1. **Always publish content** in Sanity Studio to make it visible on the website
2. **Optimize images** before uploading to Sanity
3. **Use descriptive slugs** for blog posts (SEO-friendly)
4. **Keep excerpts concise** (150-200 characters)
5. **Add alt text** to all images for accessibility
6. **Test on mobile** - the site is mobile-first
7. **Use the preview** in Sanity Studio before publishing

## 💡 Tips for Beginners

- **What is Server Components?** Components that fetch data on the server before sending to browser (faster, better SEO)
- **What is App Router?** Next.js 14's new way to organize pages using folders
- **What is Sanity?** A headless CMS where you manage content separately from code
- **What is Tailwind?** A CSS framework using utility classes (e.g., `bg-blue-500`, `p-4`)
- **What is GROQ?** Sanity's query language, similar to GraphQL

## 🤝 Support

For issues or questions:

1. Check this README first
2. Review Sanity Studio for content issues
3. Check browser console for errors
4. Verify environment variables are set

## 📄 License

This project is for personal/commercial use. Modify as needed for your consulting business.

---

Built with ❤️ for AI/ML Consultants targeting enterprise clients.
