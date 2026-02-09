/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
   theme: {
      extend: {
         colors: {
            // Ultra-premium palette - refined for authority
            obsidian: "#0d0d0d", // Pure near-black background
            charcoal: "#1a1a1a", // Elevated surfaces
            graphite: "#2a2a2a", // Secondary surfaces
            slate: "#3a3a3a", // Borders, subtle elements
            steel: "#6b7280", // Muted text
            platinum: "#e5e7eb", // Body text
            gold: "#c9a55b", // Refined gold accent (less saturated)
            electric: "#3b82f6", // Refined blue (less neon, more premium)
            "electric-muted": "#60a5fa", // Lighter electric blue
         },
         fontFamily: {
            serif: ["Playfair Display", "Georgia", "serif"], // Authority headlines
            sans: ["Inter", "system-ui", "sans-serif"], // Clean body text
            mono: ["JetBrains Mono", "Courier New", "monospace"], // Technical elements
         },
         animation: {
            "fade-in": "fadeIn 1.2s ease-out",
            "slide-up": "slideUp 1s ease-out",
            reveal: "reveal 1.4s ease-out",
            shimmer: "shimmer 2s ease-in-out infinite",
            "glow-pulse": "glowPulse 3s ease-in-out infinite",
         },
         keyframes: {
            fadeIn: {
               "0%": { opacity: "0" },
               "100%": { opacity: "1" },
            },
            slideUp: {
               "0%": { transform: "translateY(40px)", opacity: "0" },
               "100%": { transform: "translateY(0)", opacity: "1" },
            },
            reveal: {
               "0%": { transform: "translateY(60px)", opacity: "0" },
               "100%": { transform: "translateY(0)", opacity: "1" },
            },
            shimmer: {
               "0%": { backgroundPosition: "200% 0" },
               "100%": { backgroundPosition: "-200% 0" },
            },
            glowPulse: {
               "0%, 100%": { boxShadow: "0 0 8px 0 rgba(59,130,246,0.15)" },
               "50%": { boxShadow: "0 0 20px 4px rgba(59,130,246,0.25)" },
            },
         },
         boxShadow: {
            card: "0 2px 8px 0 rgba(0,0,0,0.2)",
            "card-hover": "0 8px 24px -4px rgba(59,130,246,0.12), 0 4px 12px -2px rgba(0,0,0,0.3)",
            "glow-sm": "0 0 12px 2px rgba(59,130,246,0.15)",
            "glow-md": "0 0 24px 4px rgba(59,130,246,0.2)",
         },
         letterSpacing: {
            "ultra-wide": "0.2em",
         },
         lineHeight: {
            tight: "1.1",
            relaxed: "1.75",
         },
      },
   },
   plugins: [],
};
