import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer({ socialLinks = [] }) {
   const currentYear = new Date().getFullYear();
   const socialMap = new Map((socialLinks || []).map((item) => [String(item.platform || "").toLowerCase(), item.url]));

   const linkedinUrl = socialMap.get("linkedin") || "https://linkedin.com/in/gayanrr";
   const youtubeUrl = socialMap.get("youtube") || "https://youtube.com/@gayandesilva";
   const emailAddress = "gayan@gayandesilva.com";
   const calendlyUrl = "https://calendly.com/gayandesilva";
   const phoneNumber = "+49 155 60 440022";
   const phoneHref = "tel:+4915560440022";

   return (
      <footer className="relative bg-obsidian mt-28 border-t border-gold/15">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
               <div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Gayan de Silva, PhD</h3>
                  <p className="text-steel text-sm leading-relaxed max-w-sm">
                     AI compliance audits for teams running production AI. EU AI Act readiness with clear technical
                     findings and practical remediation.
                  </p>
               </div>

               <div>
                  <h4 className="text-gold text-xs font-semibold tracking-[0.12em] uppercase mb-4">The Audit</h4>
                  <ul className="space-y-2.5">
                     <li>
                        <Link
                           href="/#diagnostic"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Free ACAI Diagnostic
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/#methodology"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           5 Technical Tests
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/Audit#investment"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Investment
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/#contact"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Book Discovery Call
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-gold text-xs font-semibold tracking-[0.12em] uppercase mb-4">Insights</h4>
                  <ul className="space-y-2.5">
                     <li>
                        <Link
                           href="/insights"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           All Insights
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/insights#linkedin"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           LinkedIn Posts
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/insights#youtube"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           YouTube Videos
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-gold text-xs font-semibold tracking-[0.12em] uppercase mb-4">Connect</h4>
                  <ul className="space-y-2.5 mb-4">
                     <li>
                        <a
                           href={`mailto:${emailAddress}`}
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           {emailAddress}
                        </a>
                     </li>
                     <li>
                        <a
                           href={linkedinUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           LinkedIn
                        </a>
                     </li>
                     <li>
                        <a
                           href={calendlyUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           Book a Call
                        </a>
                     </li>
                     <li>
                        <a
                           href={phoneHref}
                           className="text-steel hover:text-platinum text-sm transition-colors duration-300 inline-block">
                           {phoneNumber}
                        </a>
                     </li>
                  </ul>

                  <div className="flex items-center gap-3">
                     <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-slate/20 text-steel hover:text-platinum hover:border-electric/35 transition-colors duration-300">
                        <FaLinkedin size={14} />
                     </a>
                     <a
                        href={youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-slate/20 text-steel hover:text-platinum hover:border-electric/35 transition-colors duration-300">
                        <FaYoutube size={14} />
                     </a>
                  </div>
               </div>
            </div>

            <div className="mt-12 pt-6 border-t border-slate/20">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                  <div className="text-steel/60 text-xs tracking-wide leading-relaxed">
                     <p>© {currentYear} Gayan de Silva, PhD. All rights reserved.</p>
                  </div>
                  <div className="text-steel/60 text-xs tracking-wide leading-relaxed">
                     <p>PhD AI/ML · US Patent US12073438B2 · SRH University Hamburg</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
