import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

/**
 * Article Card Component
 * Displays blog articles with image, excerpt, and metadata
 *
 * @param {Object} post - Article data from Sanity
 */
export default function BlogCard({ post }) {
   const formatDate = (dateString) => {
      if (!dateString) return "Recent";
      const date = new Date(dateString);
      if (Number.isNaN(date.getTime())) return "Recent";
      return date.toLocaleDateString("en-US", {
         year: "numeric",
         month: "short",
         day: "numeric",
      });
   };

   const thumbnailUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(450).url() : null;
   const internalHref = post?.slug?.current ? `/insights/${post.slug.current}` : null;
   const externalHref = post?.externalUrl || post?.linkedinUrl || null;
   const source = String(post?.source || "").toLowerCase();
   const sourceLabel = source === "linkedin" ? "LinkedIn" : "Insight";
   const title = post?.title || "Insight";
   const excerpt = post?.resolvedExcerpt || post?.excerpt || "";
   const mainCategory = post?.categories && post.categories.length > 0 ? post.categories[0]?.title : null;

   const card = (
      <div className="bg-charcoal border border-slate/20 rounded-lg overflow-hidden hover:border-electric/30 transition-all duration-300 h-full flex flex-col">
         {thumbnailUrl && (
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-obsidian/70">
               <Image src={thumbnailUrl} alt={post.mainImage?.alt || title} fill className="object-cover" />
            </div>
         )}

         <div className="p-4 md:p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-2.5">
               <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase tracking-[0.08em] text-electric">{sourceLabel}</span>
                  {mainCategory && <span className="text-xs text-steel">{mainCategory}</span>}
               </div>
               <span className="text-xs text-steel whitespace-nowrap">{formatDate(post?.publishedAt)}</span>
            </div>

            <h3 className="text-lg font-serif font-semibold text-white leading-snug mb-2 line-clamp-2">{title}</h3>

            {excerpt && <p className="text-sm text-platinum/70 leading-relaxed mb-4 line-clamp-2">{excerpt}</p>}

            <div className="flex items-center justify-end pt-3 border-t border-slate/15 mt-auto">
               <span className="text-sm text-electric-muted">
                  {internalHref ? "Read insight" : externalHref ? "View post" : "Insight unavailable"}
               </span>
            </div>
         </div>
      </div>
   );

   if (internalHref) {
      return (
         <Link href={internalHref} className="group block h-full">
            {card}
         </Link>
      );
   }

   if (externalHref) {
      return (
         <a href={externalHref} target="_blank" rel="noopener noreferrer" className="group block h-full">
            {card}
         </a>
      );
   }

   return <div className="group block h-full">{card}</div>;
}
