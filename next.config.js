/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      // Allow images from Sanity CDN
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.sanity.io",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "img.youtube.com",
         },
      ],
   },
   // Netlify handles routing
   trailingSlash: true,
};

export default nextConfig;
