/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["cdn.sanity.io", "img.youtube.com", "i.ytimg.com"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.sanity.io",
            pathname: "/images/**",
         },
         {
            protocol: "https",
            hostname: "img.youtube.com",
            pathname: "/vi/**",
         },
         {
            protocol: "https",
            hostname: "i.ytimg.com",
            pathname: "/vi/**",
         },
      ],
   },
   // Ensure proper routing
   trailingSlash: true,
};

module.exports = nextConfig;
