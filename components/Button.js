import Link from "next/link";

/**
 * Premium Button Component - Ultra-refined for authority
 *
 * @param {string} href - Link destination (optional, if provided renders as Link)
 * @param {string} variant - 'primary', 'secondary', or 'ghost' styling
 * @param {string} children - Button text
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler (for non-link buttons)
 */
export default function Button({ href, variant = "primary", children, className = "", onClick, ...props }) {
   // Base styles - refined, subtle
   const baseStyles =
      "px-8 py-4 font-sans font-medium text-sm tracking-wide transition-all duration-500 inline-block text-center rounded-sm";

   // Variant-specific styles - calm, confident, no flashy effects
   const variants = {
      primary:
         "bg-electric text-white hover:bg-electric-muted border border-electric hover:border-electric-muted shadow-sm hover:shadow-lg hover:shadow-electric/20",
      secondary:
         "bg-transparent border-2 border-platinum/20 text-platinum hover:border-platinum/40 hover:bg-platinum/5",
      ghost: "bg-transparent text-platinum hover:text-white border-b border-transparent hover:border-platinum/40",
   };

   const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

   // Render as Link if href is provided
   if (href) {
      return (
         <Link href={href} className={buttonClasses} {...props}>
            {children}
         </Link>
      );
   }

   // Render as button if no href
   return (
      <button onClick={onClick} className={buttonClasses} {...props}>
         {children}
      </button>
   );
}
