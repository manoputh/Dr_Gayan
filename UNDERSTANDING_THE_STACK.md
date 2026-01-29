# 🎓 Understanding Your Tech Stack

A beginner-friendly guide to understanding the technologies powering your website.

---

## 🌐 What You've Built

You now have a **modern, production-ready website** with two main parts:

1. **Frontend (Website)** - What visitors see (Next.js + React)
2. **Backend (CMS)** - Where you manage content (Sanity Studio)

Think of it like:

- **Frontend** = The storefront
- **Backend** = The inventory management system

---

## 🧱 Technology Stack Explained

### Next.js - The Framework

**What it is:** A React framework that makes building websites easier

**Why we use it:**

- ✅ Built-in routing (no complex setup)
- ✅ Server-side rendering (faster, better SEO)
- ✅ Image optimization (automatic)
- ✅ Production-ready out of the box
- ✅ Made by Vercel (easy deployment)

**Key Concept: App Router**

```
app/
├── page.js           → yoursite.com/
├── about/
│   └── page.js       → yoursite.com/about
└── blog/
    └── [slug]/
        └── page.js   → yoursite.com/blog/any-post-title
```

Folders = URLs. Simple!

---

### React - The UI Library

**What it is:** JavaScript library for building user interfaces

**Why we use it:**

- ✅ Component-based (build once, reuse everywhere)
- ✅ Reactive (changes update automatically)
- ✅ Huge ecosystem
- ✅ Industry standard

**Key Concept: Components**

```javascript
// A simple component
export default function Button({ text }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2">
      {text}
    </button>
  );
}

// Use it everywhere:
<Button text="Click me!" />
<Button text="Submit" />
```

Components are reusable building blocks!

---

### Sanity CMS - The Content Management System

**What it is:** Headless CMS (content management system)

**Why we use it:**

- ✅ Separate content from code
- ✅ User-friendly editing interface
- ✅ Real-time updates
- ✅ Structured content
- ✅ Free tier generous

**Key Concept: Schemas**

Schemas define your content structure:

```javascript
// Blog Post Schema
{
  name: 'blogPost',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },      // Text field
    { name: 'body', type: 'array' },        // Rich text
    { name: 'image', type: 'image' },       // Image upload
    { name: 'publishedAt', type: 'datetime' } // Date picker
  ]
}
```

Schemas = Blueprint for your content.

---

### Tailwind CSS - The Styling Framework

**What it is:** Utility-first CSS framework

**Why we use it:**

- ✅ No need to write custom CSS
- ✅ Responsive design built-in
- ✅ Consistent styling
- ✅ Fast development

**Key Concept: Utility Classes**

```html
<!-- Traditional CSS -->
<div class="my-custom-card">...</div>
<style>
   .my-custom-card {
      background-color: #1a1a1a;
      padding: 2rem;
      border-radius: 0.5rem;
   }
</style>

<!-- Tailwind CSS -->
<div class="bg-dark-secondary p-8 rounded-lg">...</div>
```

Classes describe the styling directly!

---

## 🔄 How Everything Works Together

### 1. User Visits Website

```
User types: yoursite.com/blog
     ↓
Next.js receives request
     ↓
Looks for: app/blog/page.js
     ↓
Executes page component
```

---

### 2. Page Fetches Data

```javascript
// app/blog/page.js
export default async function BlogPage() {
   // Fetch data from Sanity
   const posts = await sanityFetch({ query: blogPostsQuery });

   // Render with data
   return (
      <div>
         {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
         ))}
      </div>
   );
}
```

**Flow:**

1. Next.js runs on server
2. Fetches data from Sanity API
3. Renders HTML with data
4. Sends complete page to browser
5. User sees content instantly

---

### 3. You Edit Content

```
You log into Sanity Studio
     ↓
Edit a blog post
     ↓
Click "Publish"
     ↓
Content stored in Sanity
     ↓
Website fetches new data
     ↓
Users see updated content
```

**No code changes needed!** Just edit in Sanity Studio.

---

## 📚 Key Concepts for MERN Developers

Coming from MERN (MongoDB, Express, React, Node.js)? Here's the mapping:

| MERN        | Your Stack  | Notes                      |
| ----------- | ----------- | -------------------------- |
| **MongoDB** | Sanity      | Both are databases         |
| **Express** | Next.js API | Next.js can handle backend |
| **React**   | React       | Same!                      |
| **Node.js** | Node.js     | Same runtime               |

**Key Differences:**

### 1. Server Components (New in Next.js 14)

**MERN way:**

```javascript
// Client fetches data
useEffect(() => {
   fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
}, []);
```

**Next.js way:**

```javascript
// Server fetches before rendering
export default async function Page() {
   const posts = await fetch("/api/posts");
   return <div>{posts}</div>;
}
```

**Benefits:**

- Faster initial load
- Better SEO
- Less client-side JavaScript

---

### 2. File-Based Routing (No React Router)

**MERN way:**

```javascript
<Router>
   <Route path="/about" component={About} />
   <Route path="/blog" component={Blog} />
</Router>
```

**Next.js way:**

```
app/
├── about/page.js     # Automatically /about
└── blog/page.js      # Automatically /blog
```

**Benefits:**

- No routing library needed
- Intuitive file structure
- Automatic code splitting

---

### 3. Headless CMS vs Traditional Database

**MERN MongoDB:**

```javascript
// You write backend code
app.get("/api/posts", async (req, res) => {
   const posts = await Post.find();
   res.json(posts);
});
```

**Sanity CMS:**

```javascript
// CMS provides API automatically
const posts = await sanityClient.fetch('*[_type == "post"]');
```

**Benefits:**

- No backend code to write
- User-friendly editing interface
- Built-in API
- CDN for images

---

## 🎯 Important Files Explained

### `package.json`

**What it is:** List of all your project's dependencies

**What you do:** Run `npm install` to install everything listed

**Example:**

```json
{
   "dependencies": {
      "next": "^14.2.0", // Next.js framework
      "react": "^18.3.0", // React library
      "next-sanity": "^9.3.0" // Sanity integration
   }
}
```

---

### `next.config.js`

**What it is:** Configuration for Next.js

**Common settings:**

- Image optimization domains
- Redirects
- Environment variables

**Example:**

```javascript
module.exports = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.sanity.io", // Allow Sanity images
         },
      ],
   },
};
```

---

### `tailwind.config.js`

**What it is:** Customization for Tailwind CSS

**Common settings:**

- Custom colors
- Custom fonts
- Custom animations

**Example:**

```javascript
module.exports = {
   theme: {
      extend: {
         colors: {
            "electric-blue": "#00d4ff", // Custom color
         },
      },
   },
};
```

---

### `.env.local`

**What it is:** Environment variables (secrets, API keys)

**Important:**

- Never commit to git
- Different for dev/production
- Required for Sanity connection

**Example:**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 🔍 Common Terms Explained

### Server Component

**What:** Component that runs on server, not browser

**When to use:**

- Fetching data
- SEO-important content
- No interactivity needed

**Example:**

```javascript
// No 'use client' directive = Server Component
export default async function BlogList() {
   const posts = await fetchPosts(); // Runs on server
   return <div>{posts}</div>;
}
```

---

### Client Component

**What:** Component that runs in browser

**When to use:**

- Forms
- Interactive features
- useState, useEffect hooks

**Example:**

```javascript
"use client"; // Required directive

export default function ContactForm() {
   const [email, setEmail] = useState(""); // Browser only
   return <input value={email} onChange={(e) => setEmail(e.target.value)} />;
}
```

---

### GROQ Query

**What:** Sanity's query language (like SQL for Sanity)

**Example:**

```javascript
// Fetch all blog posts, newest first
const query = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt
  }
`;
```

**Think of it as:**

- `*` = SELECT ALL
- `[_type == "blogPost"]` = FROM blogPost WHERE...
- `| order(publishedAt desc)` = ORDER BY publishedAt DESC
- `{...}` = SELECT specific fields

---

### Portable Text

**What:** Rich text format used by Sanity

**Why:** Store formatted text (headings, lists, images) in structured way

**Example:**

```javascript
import { PortableText } from "@portabletext/react";

<PortableText value={post.body} />;
```

Converts Sanity's rich text to HTML automatically!

---

## 🚀 Development Workflow

### Making Changes

1. **Edit Code**

   ```bash
   # Make changes to files in /app or /components
   # Changes auto-reload in browser (Hot Module Replacement)
   ```

2. **Edit Content**

   ```bash
   # Go to http://localhost:3333
   # Edit in Sanity Studio
   # Click "Publish"
   # Refresh website to see changes
   ```

3. **Add New Page**

   ```bash
   # Create: app/services/page.js
   # Automatically available at /services
   ```

4. **Add New Component**
   ```bash
   # Create: components/PricingCard.js
   # Import and use anywhere:
   import PricingCard from '@/components/PricingCard';
   ```

---

### Debugging Tips

**Browser Console (F12):**

- See JavaScript errors
- Inspect network requests
- View console.log() outputs

**Common Errors:**

**"Module not found"**

```bash
Solution: npm install
```

**"Can't find module '@/components/...'"**

```bash
Solution: Check file path and capitalization
```

**"Unexpected token 'export'"**

```bash
Solution: Add 'use client' at top of file
```

**Images not loading**

```bash
Solution: Check next.config.js remotePatterns
```

---

## 📖 Learning Resources

### For Next.js

- [Next.js Tutorial](https://nextjs.org/learn) - Official interactive tutorial
- [Next.js Docs](https://nextjs.org/docs) - Complete documentation

### For React

- [React Tutorial](https://react.dev/learn) - Official React tutorial
- [React Docs](https://react.dev) - New React documentation

### For Sanity

- [Sanity Tutorial](https://www.sanity.io/docs/getting-started) - Getting started guide
- [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet) - Query syntax

### For Tailwind

- [Tailwind Docs](https://tailwindcss.com/docs) - All utility classes
- [Tailwind Playground](https://play.tailwindcss.com/) - Try it online

---

## 💡 Pro Tips

### 1. Start Small

Don't try to understand everything at once. Start with:

1. Edit content in Sanity
2. Modify text in components
3. Change colors in Tailwind
4. Then dive deeper

### 2. Use Console Logs

```javascript
console.log("Data:", posts);
```

Check browser console (F12) to see what data looks like.

### 3. Copy & Modify

Find a component that works → Copy it → Modify for your needs

### 4. Read Error Messages

Error messages usually tell you exactly what's wrong.

### 5. Use Docs

When stuck, check official documentation first.

---

## 🎓 You're Ready!

You don't need to understand everything to be productive:

**Level 1 (Day 1):**

- Edit content in Sanity
- Change colors/text
- Deploy to Vercel

**Level 2 (Week 1):**

- Create new components
- Modify existing pages
- Customize styling

**Level 3 (Month 1):**

- Add new features
- Understand data flow
- Debug issues independently

**Take it step by step. You've got this! 🚀**

---

## ❓ Quick Reference

### Start Development

```bash
npm run dev                    # Next.js
cd studio && npm run dev      # Sanity
```

### Deploy

```bash
git push                       # Auto-deploys on Vercel
cd studio && npx sanity deploy # Deploy Sanity Studio
```

### Common Commands

```bash
npm install                    # Install dependencies
npm run build                  # Test production build
rm -rf .next                   # Clear cache
```

### File Structure Reminder

```
app/           → Your pages
components/    → Reusable UI pieces
lib/           → Utility functions
studio/        → Sanity CMS
public/        → Static files (images, favicon)
```

---

**Remember:** Every expert was once a beginner. Keep experimenting, keep learning! 💪
