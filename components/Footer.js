import Link from "next/link";
import { FaLinkedin, FaYoutube, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer({ socialLinks = [] }) {
   // Map platform names to icons - prioritizing professional networks
   const iconMap = {
      linkedin: FaLinkedin,
      youtube: FaYoutube,
      twitter: FaTwitter,
      github: FaGithub,
      email: FaEnvelope, // Placeholder icon for email
   };

   const currentYear = new Date().getFullYear();

   return (
      <footer className="relative bg-obsidian mt-32">
         {/* Subtle gradient separator */}
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate/40 to-transparent"></div>

         {/* Main footer content */}
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
               {/* Brand Column - Takes more space for impact */}
               <div className="md:col-span-5 lg:col-span-4">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Dr. Gayan de Silva</h3>
                  <p className="text-steel text-sm leading-relaxed max-w-sm">AI/ML Consulting & Innovation</p>
                  <p className="text-steel/70 text-xs mt-4 leading-relaxed max-w-sm">
                     Strategic artificial intelligence solutions for enterprise transformation
                  </p>
               </div>

               {/* Navigation Column */}
               <div className="md:col-span-3 lg:col-span-3">
                  <h4 className="text-platinum text-sm font-semibold tracking-wide uppercase mb-6">Navigation</h4>
                  <ul className="space-y-3">
                     <li>
                        <Link
                           href="/"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/about"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           About
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/consulting"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           AI/ML Consulting
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/programs/think-like-a-scientist"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Think Like a Scientist
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/insights"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Insights
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contact"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Professional Presence Column */}
               <div className="md:col-span-4 lg:col-span-5">
                  <h4 className="text-platinum text-sm font-semibold tracking-wide uppercase mb-6">Connect</h4>
                  <div className="flex items-center gap-4">
                     {socialLinks.length > 0 ? (
                        socialLinks.map((link) => {
                           const Icon = iconMap[link.platform];
                           return Icon ? (
                              <a
                                 key={link.platform}
                                 href={link.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 aria-label={`Visit our ${link.platform}`}
                                 className="w-10 h-10 flex items-center justify-center rounded-md bg-charcoal/50 hover:bg-charcoal border border-slate/20 hover:border-slate/40 text-steel hover:text-platinum transition-all duration-300">
                                 <Icon size={18} />
                              </a>
                           ) : null;
                        })
                     ) : (
                        // Default professional links if no socialLinks provided
                        <>
                           <a
                              href="https://linkedin.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our LinkedIn"
                              className="w-10 h-10 flex items-center justify-center rounded-md bg-charcoal/50 hover:bg-charcoal border border-slate/20 hover:border-slate/40 text-steel hover:text-platinum transition-all duration-300">
                              <FaLinkedin size={18} />
                           </a>
                           <a
                              href="https://youtube.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our YouTube"
                              className="w-10 h-10 flex items-center justify-center rounded-md bg-charcoal/50 hover:bg-charcoal border border-slate/20 hover:border-slate/40 text-steel hover:text-platinum transition-all duration-300">
                              <FaYoutube size={18} />
                           </a>
                           <a
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our GitHub"
                              className="w-10 h-10 flex items-center justify-center rounded-md bg-charcoal/50 hover:bg-charcoal border border-slate/20 hover:border-slate/40 text-steel hover:text-platinum transition-all duration-300">
                              <FaGithub size={18} />
                           </a>
                        </>
                     )}
                  </div>
               </div>
            </div>

            {/* Trust & Meta Section */}
            <div className="mt-16 pt-8 border-t border-slate/20">
               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-steel/60 text-xs tracking-wide">
                     <p>© {currentYear} Dr. Gayan de Silva. All rights reserved.</p>
                  </div>
                  <div className="text-steel/60 text-xs tracking-wide">
                     <p>Enterprise AI Consulting</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
