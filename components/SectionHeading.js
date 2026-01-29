/**
 * Section Heading Component
 * Consistent styling for page section headings
 *
 * @param {string} title - Main heading text
 * @param {string} subtitle - Optional subtitle text
 * @param {string} align - Text alignment: 'left', 'center', or 'right'
 */
export default function SectionHeading({ title, subtitle, align = "center" }) {
   const alignmentClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
   };

   return (
      <div className={`mb-12 ${alignmentClasses[align]}`}>
         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-gold-accent bg-clip-text text-transparent">
            {title}
         </h2>
         {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
   );
}
