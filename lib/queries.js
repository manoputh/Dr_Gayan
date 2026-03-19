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
  features[]
}`;

// Fetch all blog posts (with pagination) - now includes both articles and videos
export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  excerpt,
  source,
  "bodyPlain": pt::text(body),
  contentType,
  featured,
  youtubeUrl,
  linkedinUrl,
  externalUrl,
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
  source,
  contentType,
  youtubeUrl,
  videoDuration,
  linkedinUrl,
  externalUrl,
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
  ctaText
}`;

// ── All active programs (for listing) ──────────────────────
export const programsQuery = `*[_type == "program" && status != "archived"] | order(title asc){
  _id,
  title,
  slug,
  description,
  status
}`;
