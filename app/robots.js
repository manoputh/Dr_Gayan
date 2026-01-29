export default function robots() {
   return {
      rules: {
         userAgent: "*",
         allow: "/",
         disallow: ["/studio/", "/api/"],
      },
      sitemap: "https://yoursite.com/sitemap.xml",
   };
}
