"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated Section Component
 * Progressive section reveal on scroll with fade + slide-in
 * Triggers once per section for subtle, professional feel
 *
 * @param {ReactNode} children - Content to animate
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Animation delay in ms
 */
export default function AnimatedSection({ children, className = "", delay = 0 }) {
   const [isVisible, setIsVisible] = useState(false);
   const sectionRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               // Trigger animation once
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         },
         {
            threshold: 0.15, // Trigger when 15% visible
            rootMargin: "0px 0px -50px 0px", // Slight offset for better timing
         },
      );

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      return () => {
         if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
         }
      };
   }, []);

   return (
      <div
         ref={sectionRef}
         className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
         } ${className}`}
         style={{ transitionDelay: `${delay}ms` }}>
         {children}
      </div>
   );
}
