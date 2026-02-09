/**
 * Reusable Animation Utilities
 * CSS-first approach — no JS animation library required.
 *
 * These helpers produce Tailwind-compatible class strings
 * that pair with the custom keyframes in tailwind.config.js
 * and globals.css.
 */

/* ── Stagger delay calculator ──────────────────────────── */

/**
 * Returns an inline style object with a CSS transition-delay
 * based on the item's index, useful for staggered grid reveals.
 *
 * @param {number} index - Zero-based position in the list
 * @param {number} base  - Base delay in ms (default 80)
 * @returns {{ transitionDelay: string }}
 */
export function staggerDelay(index, base = 80) {
   return { transitionDelay: `${index * base}ms` };
}

/* ── Direction-aware reveal classes ────────────────────── */

/**
 * Maps a direction keyword to the Tailwind classes used by
 * AnimatedSection for the "hidden" (pre-reveal) state.
 */
export const revealFrom = {
   bottom: "opacity-0 translate-y-8",
   top: "opacity-0 -translate-y-8",
   left: "opacity-0 -translate-x-8",
   right: "opacity-0 translate-x-8",
   none: "opacity-0", // pure fade, no movement
};

/**
 * Classes applied once the element is in view.
 */
export const revealTo = "opacity-100 translate-x-0 translate-y-0";

/* ── Card interaction classes ──────────────────────────── */

/**
 * Standard interactive card classes.
 * Apply on the outer card wrapper for consistent hover lift + shadow.
 */
export const cardHover =
   "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-electric/8 hover:border-slate/40";

/**
 * Subtle glow variation for premium cards.
 */
export const cardGlow =
   "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-electric/12 hover:border-electric/30";

/* ── CTA glow helper ───────────────────────────────────── */

export const ctaGlow =
   "relative before:absolute before:inset-0 before:rounded-sm before:bg-electric/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:blur-xl before:-z-10";

/* ── Skeleton shimmer ──────────────────────────────────── */

export const shimmer = "animate-shimmer bg-gradient-to-r from-slate/10 via-slate/20 to-slate/10 bg-[length:200%_100%]";
