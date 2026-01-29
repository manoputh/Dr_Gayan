# 🎨 Common Customizations Guide

Quick reference for the most common customizations you'll want to make.

---

## 🎨 Change Colors

**File:** `tailwind.config.js`

### Current Theme Colors

```javascript
colors: {
  'dark-bg': '#0a0a0a',          // Main background
  'dark-secondary': '#1a1a1a',    // Card backgrounds
  'dark-tertiary': '#2a2a2a',     // Tertiary backgrounds
  'graphite': '#3a3a3a',          // Borders
  'metallic': '#5a5a5a',          // Subtle elements
  'gold-accent': '#d4af37',       // Secondary accent (gold)
  'electric-blue': '#00d4ff',     // Primary accent (blue)
  'soft-gold': '#f5e6d3',         // Soft gold text
}
```

### Example: Change to Purple & Orange Theme

```javascript
colors: {
  'dark-bg': '#0a0a0a',
  'dark-secondary': '#1a1a1a',
  'dark-tertiary': '#2a2a2a',
  'graphite': '#3a3a3a',
  'metallic': '#5a5a5a',
  'gold-accent': '#ff6b35',       // Changed to orange
  'electric-blue': '#8b5cf6',     // Changed to purple
  'soft-gold': '#fde4cf',
}
```

After changing, restart dev server: `npm run dev`

---

## 📝 Change Site Name/Logo

### Navigation Bar

**File:** `components/Navbar.js`

**Line ~20:**

```javascript
<span className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-gold-accent bg-clip-text text-transparent">
   AI/ML Consulting {/* Change this text */}
</span>
```

**Change to:**

```javascript
<span className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-gold-accent bg-clip-text text-transparent">
   Your Company Name
</span>
```

### Footer

**File:** `components/Footer.js`

**Line ~20:**

```javascript
<h3 className="text-xl font-bold bg-gradient-to-r from-electric-blue to-gold-accent bg-clip-text text-transparent mb-4">
   AI/ML Consulting {/* Change this text */}
</h3>
```

### Page Titles

**File:** `app/layout.js`

**Line ~11:**

```javascript
export const metadata = {
   title: "Your Company | AI/ML Consulting", // Change title
   description: "Your custom description here", // Change description
   keywords: "your, keywords, here",
};
```

---

## 🖼️ Add Your Logo Image

Instead of text, use an image logo:

**File:** `components/Navbar.js`

**Replace lines ~19-23:**

```javascript
// OLD (text logo)
<span className="text-2xl font-bold...">
  AI/ML Consulting
</span>

// NEW (image logo)
<Image
  src="/logo.png"  // Put logo.png in /public folder
  alt="Company Logo"
  width={200}
  height={50}
  className="h-10 w-auto"
/>
```

**Remember:** Add `import Image from 'next/image';` at the top!

---

## 📱 Add/Remove Navigation Links

**File:** `components/Navbar.js`

**Lines ~13-20:**

```javascript
const navLinks = [
   { name: "Home", href: "/" },
   { name: "About", href: "/about" },
   { name: "Consulting", href: "/consulting" },
   { name: "Blog", href: "/blog" },
   { name: "Videos", href: "/videos" },
   { name: "Contact", href: "/contact" },
];
```

### Add New Link (e.g., Resources)

```javascript
const navLinks = [
   { name: "Home", href: "/" },
   { name: "About", href: "/about" },
   { name: "Consulting", href: "/consulting" },
   { name: "Resources", href: "/resources" }, // NEW
   { name: "Blog", href: "/blog" },
   { name: "Videos", href: "/videos" },
   { name: "Contact", href: "/contact" },
];
```

Then create `app/resources/page.js` for the new page!

### Remove Link

Just delete the line from the array.

---

## 🎭 Change Fonts

**File:** `app/layout.js`

### Current Font

```javascript
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
```

### Change to Different Font (e.g., Poppins)

```javascript
import { Poppins } from "next/font/google";
const poppins = Poppins({
   weight: ["400", "600", "700"],
   subsets: ["latin"],
});
```

Then update the body tag:

```javascript
<body className={`${poppins.className} bg-dark-bg text-white antialiased`}>
```

### Popular Professional Fonts

- `Poppins` - Modern, geometric
- `Montserrat` - Clean, professional
- `Raleway` - Elegant
- `Roboto` - Neutral, readable
- `Playfair Display` - Luxury, editorial

[Browse all Google Fonts](https://fonts.google.com/)

---

## ✏️ Edit Homepage Hero Text

**Option 1: Edit in Sanity Studio** (Recommended)

1. Go to http://localhost:3333
2. Click "Hero Section"
3. Edit headline and subheadline
4. Click "Publish"

**Option 2: Change Default Text**
**File:** `app/page.js`

**Lines ~35-40:**

```javascript
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span className="bg-gradient-to-r from-electric-blue via-blue-400 to-gold-accent bg-clip-text text-transparent animate-gradient">
    {hero?.headline || 'AI/ML Consulting & Innovation'}  {/* Change default here */}
  </span>
</h1>

<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
  {hero?.subheadline || 'Your default subheadline text here'}  {/* And here */}
</p>
```

---

## 🔘 Customize Button Styles

**File:** `components/Button.js`

### Current Button Variants

```javascript
const variants = {
   primary:
      "bg-gradient-to-r from-electric-blue to-blue-600 text-white hover:shadow-lg hover:shadow-electric-blue/50 transform hover:scale-105",
   secondary:
      "bg-gradient-to-r from-gold-accent to-yellow-600 text-dark-bg hover:shadow-lg hover:shadow-gold-accent/50 transform hover:scale-105",
   outline: "border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white",
};
```

### Add New Variant (e.g., danger/red)

```javascript
const variants = {
   primary: "...",
   secondary: "...",
   outline: "...",
   danger:
      "bg-gradient-to-r from-red-500 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105", // NEW
};
```

Use it:

```javascript
<Button variant="danger">Delete</Button>
```

---

## 📞 Update Contact Information

**Option 1: Edit in Sanity Studio** (Recommended)

1. Go to http://localhost:3333
2. Click "Site Settings"
3. Update email, phone, social links
4. Click "Publish"

**Option 2: Edit Default Values**
**File:** `app/contact/page.js`

The contact page automatically pulls from Sanity, but you can customize the layout here.

---

## 🎥 Customize Service Icons

When adding services in Sanity, you can use these icon names:

### Available Icons (from react-icons/fa)

```
FaBrain          - Brain/AI
FaChartLine      - Analytics/Growth
FaRobot          - Automation/ML
FaDatabase       - Data/Storage
FaCog            - Settings/Process
FaLightbulb      - Ideas/Innovation
FaRocket         - Launch/Speed
FaShieldAlt      - Security
FaCloud          - Cloud Computing
FaMicrochip      - Hardware/Tech
FaNetworkWired   - Networking
FaChartPie       - Reports/Analysis
```

### Add More Icons

**File:** `components/ServiceCard.js`

**Line ~2:** Import more icons

```javascript
import { FaBrain, FaChartLine, FaRobot, FaDatabase, FaCog, FaLightbulb, FaRocket, FaShieldAlt } from "react-icons/fa";
```

**Line ~12:** Add to iconMap

```javascript
const iconMap = {
   FaBrain,
   FaChartLine,
   FaRobot,
   FaDatabase,
   FaCog,
   FaLightbulb,
   FaRocket, // NEW
   FaShieldAlt, // NEW
};
```

[Browse all icons](https://react-icons.github.io/react-icons/)

---

## 🖼️ Change Background Animations

**File:** `app/page.js`

### Current Animated Backgrounds (Hero Section)

**Lines ~24-27:**

```javascript
<div className="absolute inset-0 overflow-hidden">
   <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
   <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
</div>
```

### Make Them Bigger

```javascript
<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
```

### Add More Glows

```javascript
<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
```

### Remove Animations

Just delete the divs with `animate-pulse`.

---

## 📏 Change Layout Width

**File:** `components/Container.js`

### Current Max Width

```javascript
<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
```

`max-w-7xl` = 1280px wide

### Make Wider

```javascript
<div className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
```

(`max-w-screen-2xl` = 1536px)

### Make Narrower

```javascript
<div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
```

(`max-w-6xl` = 1152px)

---

## 🎞️ Adjust Animations

**File:** `tailwind.config.js`

### Current Animations

```javascript
animation: {
  'fade-in': 'fadeIn 0.8s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'glow': 'glow 2s ease-in-out infinite alternate',
},
```

### Make Animations Faster

```javascript
animation: {
  'fade-in': 'fadeIn 0.4s ease-in-out',      // Faster (was 0.8s)
  'slide-up': 'slideUp 0.3s ease-out',       // Faster (was 0.6s)
  'glow': 'glow 1s ease-in-out infinite alternate',  // Faster (was 2s)
},
```

### Disable Animations

Remove `animate-*` classes from components or set:

```javascript
animation: {
  'fade-in': 'none',
  'slide-up': 'none',
  'glow': 'none',
},
```

---

## 🔲 Change Card Hover Effects

**File:** `components/BlogCard.js` (and similar components)

### Current Hover Effect

```javascript
className =
   "bg-dark-secondary rounded-lg overflow-hidden border border-graphite/30 hover:border-electric-blue/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/20";
```

### Remove Scale Effect

```javascript
// Remove: transform hover:scale-105
className =
   "bg-dark-secondary rounded-lg overflow-hidden border border-graphite/30 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/20";
```

### Make Hover More Dramatic

```javascript
// Change scale from 1.05 to 1.1
className = "... transform hover:scale-110 ...";
```

### Remove All Hover Effects

```javascript
// Remove all hover:* classes
className = "bg-dark-secondary rounded-lg overflow-hidden border border-graphite/30";
```

---

## 📱 Customize Mobile Breakpoints

**File:** `tailwind.config.js`

### Current Breakpoints (Tailwind Defaults)

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Add Custom Breakpoint

```javascript
theme: {
  extend: {
    screens: {
      'xs': '480px',  // Add extra-small breakpoint
      '3xl': '1920px',  // Add extra-large breakpoint
    },
  },
},
```

Use in components:

```javascript
<div className="text-sm xs:text-base md:text-lg 3xl:text-xl">Responsive text</div>
```

---

## 🎯 Change CTA Button Links

**File:** `app/page.js`

### Homepage CTAs

**Lines ~47-55:**

```javascript
<Button
  href={hero?.ctaLink || '/consulting'}  // Change default link
  variant="primary"
>
  {hero?.ctaText || 'Book Consultation'}  // Change default text
</Button>
<Button
  href={hero?.secondaryCtaLink || '/contact'}  // Change default link
  variant="secondary"
>
  {hero?.secondaryCtaText || 'Contact Us'}  // Change default text
</Button>
```

Or edit in Sanity Studio → Hero Section

---

## 📊 Add Google Analytics

**File:** `app/layout.js`

**After line 1, add:**

```javascript
import Script from "next/script";
```

**In the `<html>` tag, add:**

```javascript
<html lang="en">
   <head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
         {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YOUR-ID-HERE');
      `}
      </Script>
   </head>
   <body>...</body>
</html>
```

Replace `G-YOUR-ID-HERE` with your actual Google Analytics ID.

---

## 🔄 Change Loading Animation

**File:** `app/loading.js`

### Current Loading Spinner

```javascript
<div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-electric-blue mb-4"></div>
```

### Make it Bigger

```javascript
<div className="inline-block animate-spin rounded-full h-24 w-24 border-4 border-gray-700 border-t-electric-blue mb-4"></div>
```

### Change Colors

```javascript
<div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-dark-tertiary border-t-gold-accent mb-4"></div>
```

### Use Text Instead

```javascript
<p className="text-electric-blue text-2xl animate-pulse">Loading...</p>
```

---

## 💡 Quick Tips

### Testing Changes

1. **Save file** → Changes auto-reload in browser
2. **If stuck:** Refresh browser (Cmd/Ctrl + Shift + R)
3. **If really stuck:** Restart dev server

### Best Practices

- ✅ Test changes on mobile (Chrome DevTools F12 → Device Toolbar)
- ✅ Keep color combinations accessible (good contrast)
- ✅ Maintain consistency across components
- ✅ Use Sanity Studio for content changes
- ✅ Use code for design/layout changes

### Common Mistakes

- ❌ Forgetting to restart after config changes
- ❌ Missing commas in JavaScript objects
- ❌ Typos in Tailwind class names
- ❌ Not checking mobile responsiveness
- ❌ Hardcoding content that should be in Sanity

---

## 🆘 If Something Breaks

1. **Check browser console** (F12) for errors
2. **Undo your changes** (Cmd/Ctrl + Z)
3. **Restart dev server:** `npm run dev`
4. **Clear cache:** `rm -rf .next && npm run dev`
5. **Reinstall:** `rm -rf node_modules && npm install`

---

**Remember:** Start with small changes and test frequently! 🚀
