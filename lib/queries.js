// All GROQ queries for fetching data from Sanity

// Fetch site settings (About, Social Links)
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  _id,
  about,
  tagline,
  email,
  phone,
  socialLinks[]{
    platform,
    url
  }
}`;

// Fetch all consulting services
export const servicesQuery = `*[_type == "service"] | order(order asc){
  _id,
  title,
  description,
  icon,
  features[]
}`;

// Fetch all blog posts (with pagination) - now includes both articles and videos
export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  excerpt,
  contentType,
  featured,
  youtubeUrl,
  videoDuration,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  },
  categories[]->{
    title
  }
}`;

// Fetch single blog post by slug
export const singleBlogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  body,
  author->{
    name,
    bio,
    image
  },
  categories[]->{
    title,
    slug
  }
}`;

// Fetch all videos
export const videosQuery = `*[_type == "video"] | order(publishedAt desc){
  _id,
  title,
  description,
  youtubeUrl,
  thumbnail,
  publishedAt
}`;

// Fetch hero section content
export const heroQuery = `*[_type == "hero"][0]{
  _id,
  headline,
  subheadline,
  expertiseTags,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  portraitImage,
  backgroundImage
}`;

// ── About Page ─────────────────────────────────────────────
export const aboutQuery = `*[_type == "about"][0]{
  _id,
  name,
  title,
  portrait,
  bio,
  industryExperience,
  expertise,
  philosophy,
  ctaText,
  ctaLink
}`;

// ── Program by slug ────────────────────────────────────────
export const programBySlugQuery = `*[_type == "program" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  longDescription,
  heroImage,
  targetAudience,
  benefits,
  status,
  enrollmentEnabled,
  ctaText,
  "courses": *[_type == "course" && references(^._id)] | order(order asc){
    _id,
    title,
    slug,
    description,
    image,
    duration,
    level,
    price,
    enrollmentEnabled
  }
}`;

// ── All active programs (for listing) ──────────────────────
export const programsQuery = `*[_type == "program" && status != "archived"] | order(title asc){
  _id,
  title,
  slug,
  description,
  status
}`;

// ── Single course by slug ──────────────────────────────────
export const courseBySlugQuery = `*[_type == "course" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  image,
  program->{
    _id,
    title,
    slug
  },
  duration,
  level,
  price,
  body,
  enrollmentEnabled
}`;
