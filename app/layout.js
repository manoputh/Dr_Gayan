import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Gayan de Silva, PhD | Principal AI/ML Architect",
   description:
      "Strategic AI/ML consulting and implementation for enterprise-scale transformation. Industry-leading expertise in machine learning architecture and intelligent systems.",
   keywords: "AI architect, machine learning consulting, enterprise AI, ML strategy, AI leadership",
};

export default async function RootLayout({ children }) {
   // Fetch site settings for footer social links
   const siteSettings = await sanityFetch({
      query: siteSettingsQuery,
   }).catch(() => ({ socialLinks: [] }));

   return (
      <html lang="en">
         <body className={`${inter.className} bg-obsidian text-platinum antialiased`}>
            <Navbar />
            {/* Main content with sidebar offset on desktop */}
            <main className="lg:ml-20 min-h-screen transition-all duration-300">{children}</main>
            <Footer socialLinks={siteSettings?.socialLinks || []} />
         </body>
      </html>
   );
}
