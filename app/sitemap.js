export default function sitemap() {
   return [
      {
         url: "https://yoursite.com",
         lastModified: new Date(),
         changeFrequency: "daily",
         priority: 1,
      },
      {
         url: "https://yoursite.com/about",
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.8,
      },
      {
         url: "https://yoursite.com/Audit",
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.9,
      },
      {
         url: "https://yoursite.com/blog",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.7,
      },
      {
         url: "https://yoursite.com/videos",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.6,
      },
      {
         url: "https://yoursite.com/tools",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.85,
      },
      {
         url: "https://yoursite.com/contact",
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.5,
      },
   ];
}
