"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated Section Component
 * Progressive section reveal on scroll with fade + directional slide.
 * Triggers once per section for subtle, professional feel.
 *
 * @param {ReactNode} children  - Content to animate
 * @param {string}    className - Additional CSS classes
 * @param {number}    delay     - Animation delay in ms
 * @param {"bottom"|"top"|"left"|"right"|"none"} from - Slide direction (default: "bottom")
 * @param {number}    threshold - IntersectionObserver threshold (default: 0.15)
 */

const hiddenClasses = {
   bottom: "opacity-0 translate-y-8",
   top: "opacity-0 -translate-y-8",
   left: "opacity-0 -translate-x-8",
   right: "opacity-0 translate-x-8",
   none: "opacity-0",
};

const visibleClass = "opacity-100 translate-x-0 translate-y-0";

export default function AnimatedSection({ children, className = "", delay = 0, from = "bottom", threshold = 0.15 }) {
   const [isVisible, setIsVisible] = useState(false);
   const sectionRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         },
         {
            threshold,
            rootMargin: "0px 0px -50px 0px",
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
   }, [threshold]);

   return (
      <div
         ref={sectionRef}
         className={`transition-all duration-700 ease-out will-change-[opacity,transform] ${
            isVisible ? visibleClass : hiddenClasses[from] || hiddenClasses.bottom
         } ${className}`}
         style={{ transitionDelay: `${delay}ms` }}>
         {children}
      </div>
   );
}
