/**
 * Container Component
 * Centers content and provides consistent padding
 *
 * @param {ReactNode} children - Content to wrap
 * @param {string} className - Additional CSS classes
 */
export default function Container({ children, className = "" }) {
   return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
