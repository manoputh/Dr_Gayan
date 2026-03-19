"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaBriefcase, FaLightbulb, FaEnvelope, FaBars, FaTimes, FaUser, FaChartLine } from "react-icons/fa";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
   const pathname = usePathname();

   // Simplified navigation - Enterprise focused
   const navLinks = [
      { name: "Home", href: "/", icon: FaHome },
      { name: "About", href: "/about", icon: FaUser },
      { name: "Consulting", href: "/consulting", icon: FaBriefcase },
      { name: "Free Tools", href: "/tools", icon: FaChartLine },
      { name: "Insights", href: "/insights", icon: FaLightbulb },
      { name: "Contact", href: "/contact", icon: FaEnvelope },
   ];

   const isActive = (href) => pathname === href;

   return (
      <>
         {/* Desktop Sidebar Navigation */}
         <nav
            className="hidden lg:flex fixed left-0 top-0 h-screen bg-charcoal border-r border-slate/20 z-50 flex-col justify-between transition-all duration-300 ease-out"
            style={{ width: isSidebarExpanded ? "240px" : "80px" }}
            onMouseEnter={() => setIsSidebarExpanded(true)}
            onMouseLeave={() => setIsSidebarExpanded(false)}>
            {/* Logo / Brand */}
            <div className="p-6 border-b border-slate/20">
               <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric/20 to-gold/20 flex items-center justify-center">
                     <span className="text-xl font-serif font-bold text-white">G</span>
                  </div>
                  {isSidebarExpanded && (
                     <div className="overflow-hidden">
                        <span className="text-sm font-semibold text-white whitespace-nowrap">Gayan de Silva, PhD</span>
                        <p className="text-xs text-steel whitespace-nowrap">AI/ML Architect</p>
                     </div>
                  )}
               </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-8 space-y-2 px-4">
               {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);

                  return (
                     <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                           ${
                              active
                                 ? "bg-electric/10 text-electric nav-active-glow"
                                 : "text-platinum hover:bg-slate/10 hover:text-white"
                           }`}>
                        <Icon className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        {isSidebarExpanded && (
                           <span className="text-sm font-medium whitespace-nowrap overflow-hidden">{link.name}</span>
                        )}

                        {/* Active indicator */}
                        {active && (
                           <div className="ml-auto w-1.5 h-1.5 rounded-full bg-electric animate-glow-pulse"></div>
                        )}
                     </Link>
                  );
               })}
            </div>

            {/* Footer Info */}
            <div className="p-4 border-t border-slate/20">
               {isSidebarExpanded ? (
                  <div className="px-2 py-3">
                     <p className="text-xs text-steel">Enterprise AI/ML</p>
                     <p className="text-xs text-steel/60">Strategic Consulting</p>
                  </div>
               ) : (
                  <div className="w-full h-1 bg-gradient-to-r from-electric/40 to-gold/40 rounded-full"></div>
               )}
            </div>
         </nav>

         {/* Mobile Top Navigation */}
         <nav className="lg:hidden fixed top-0 w-full bg-charcoal/95 backdrop-blur-md z-50 border-b border-slate/20">
            <div className="px-4 sm:px-6">
               <div className="flex justify-between items-center h-16">
                  {/* Mobile Logo */}
                  <Link href="/" className="flex items-center space-x-2">
                     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric/20 to-gold/20 flex items-center justify-center">
                        <span className="text-sm font-serif font-bold text-white">G</span>
                     </div>
                     <span className="text-sm font-semibold text-white">Gayan de Silva, PhD</span>
                  </Link>

                  {/* Mobile Menu Button */}
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="text-platinum hover:text-white transition-colors">
                     {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                  </button>
               </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
               <div className="bg-graphite border-t border-slate/20 animate-fade-in">
                  <div className="px-4 py-4 space-y-2">
                     {navLinks.map((link) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);

                        return (
                           <Link
                              key={link.name}
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                                 ${
                                    active
                                       ? "bg-electric/10 text-electric nav-active-glow"
                                       : "text-platinum hover:bg-slate/10 hover:text-white"
                                 }`}>
                              <Icon className="w-5 h-5" />
                              <span className="text-sm font-medium">{link.name}</span>
                           </Link>
                        );
                     })}
                  </div>
               </div>
            )}
         </nav>

         {/* Spacer for mobile */}
         <div className="lg:hidden h-16"></div>
      </>
   );
}
