import Link from "next/link";
import { FaLinkedin, FaFacebook, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer({ socialLinks = [] }) {
   // Map platform names to icons
   const iconMap = {
      linkedin: FaLinkedin,
      facebook: FaFacebook,
      youtube: FaYoutube,
      twitter: FaTwitter,
      github: FaGithub,
   };

   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-dark-secondary border-t border-graphite/30 mt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Company Info */}
               <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-electric-blue to-gold-accent bg-clip-text text-transparent mb-4">
                     AI/ML Consulting
                  </h3>
                  <p className="text-gray-400 text-sm">
                     Enterprise AI/ML solutions and strategic consulting for forward-thinking organizations.
                  </p>
               </div>

               {/* Quick Links */}
               <div>
                  <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                     <li>
                        <Link href="/about" className="text-gray-400 hover:text-electric-blue transition-colors">
                           About
                        </Link>
                     </li>
                     <li>
                        <Link href="/consulting" className="text-gray-400 hover:text-electric-blue transition-colors">
                           Services
                        </Link>
                     </li>
                     <li>
                        <Link href="/blog" className="text-gray-400 hover:text-electric-blue transition-colors">
                           Blog
                        </Link>
                     </li>
                     <li>
                        <Link href="/contact" className="text-gray-400 hover:text-electric-blue transition-colors">
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Social Links */}
               <div>
                  <h4 className="text-white font-semibold mb-4">Connect</h4>
                  <div className="flex space-x-4">
                     {socialLinks.map((link) => {
                        const Icon = iconMap[link.platform];
                        return Icon ? (
                           <a
                              key={link.platform}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110">
                              <Icon size={24} />
                           </a>
                        ) : null;
                     })}
                  </div>
               </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-graphite/30 mt-8 pt-8 text-center">
               <p className="text-gray-500 text-sm">© {currentYear} AI/ML Consulting. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
}
