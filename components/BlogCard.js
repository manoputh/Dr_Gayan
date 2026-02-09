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
   // Format date
   const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
         year: "numeric",
         month: "short",
         day: "numeric",
      });
   };

   const thumbnailUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(450).url() : null;

   return (
      <Link href={`/insights/${post.slug.current}`} className="group block h-full">
         <div className="bg-charcoal rounded-sm border border-slate/20 overflow-hidden card-interactive hover:border-slate/40 h-full flex flex-col">
            {/* Image */}
            {thumbnailUrl && (
               <div className="relative aspect-video w-full overflow-hidden bg-graphite">
                  <Image
                     src={thumbnailUrl}
                     alt={post.mainImage?.alt || post.title}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
               </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-1" style={{ minHeight: "180px" }}>
               {/* Categories */}
               {post.categories && post.categories.length > 0 && (
                  <div className="flex items-center space-x-2 mb-3">
                     <span className="text-xs px-2 py-1 rounded-sm uppercase tracking-wide bg-gold/10 text-gold">
                        Article
                     </span>
                     <span className="text-xs text-steel">{post.categories[0].title}</span>
                  </div>
               )}

               {/* Title */}
               <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-platinum transition-colors">
                  {post.title}
               </h3>

               {/* Excerpt */}
               {post.excerpt && (
                  <p className="text-platinum/60 text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
               )}

               {/* Meta Info */}
               <div className="flex items-center justify-between text-xs text-steel pt-4 border-t border-slate/10">
                  <span>{formatDate(post.publishedAt)}</span>
                  {post.author && <span>{post.author.name}</span>}
               </div>
            </div>
         </div>
      </Link>
   );
}
