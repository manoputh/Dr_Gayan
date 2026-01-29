import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { FaPlayCircle, FaClock } from "react-icons/fa";

/**
 * Unified Content Card Component
 * Displays both articles and videos with visual differentiation
 *
 * @param {Object} post - Content data from Sanity (article or video)
 */
export default function BlogCard({ post }) {
   const isVideo = post.contentType === "video";
   const linkHref = isVideo && post.youtubeUrl ? post.youtubeUrl : `/insights/${post.slug.current}`;
   const linkTarget = isVideo && post.youtubeUrl ? "_blank" : "_self";

   // Format date
   const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
         year: "numeric",
         month: "short",
         day: "numeric",
      });
   };

   // Get YouTube thumbnail if video
   const getYouTubeId = (url) => {
      const match = url?.match(
         /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
      );
      return match ? match[1] : null;
   };

   const thumbnailUrl =
      isVideo && post.youtubeUrl
         ? `https://img.youtube.com/vi/${getYouTubeId(post.youtubeUrl)}/maxresdefault.jpg`
         : post.mainImage
           ? urlFor(post.mainImage).width(800).height(450).url()
           : null;

   return (
      <Link
         href={linkHref}
         target={linkTarget}
         rel={linkTarget === "_blank" ? "noopener noreferrer" : undefined}
         className="group block">
         <div className="bg-charcoal rounded-sm border border-slate/20 overflow-hidden hover:border-slate/40 transition-all duration-500">
            {/* Image / Thumbnail */}
            {thumbnailUrl && (
               <div className="relative aspect-video w-full overflow-hidden bg-graphite">
                  <Image
                     src={thumbnailUrl}
                     alt={post.mainImage?.alt || post.title}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Video play overlay */}
                  {isVideo && (
                     <div className="absolute inset-0 flex items-center justify-center bg-obsidian/40 group-hover:bg-obsidian/20 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-electric/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                           <FaPlayCircle className="w-8 h-8 text-white" />
                        </div>
                     </div>
                  )}

                  {/* Video duration badge */}
                  {isVideo && post.videoDuration && (
                     <div className="absolute bottom-3 right-3 px-2 py-1 bg-obsidian/80 backdrop-blur-sm rounded text-xs text-white flex items-center space-x-1">
                        <FaClock className="w-3 h-3" />
                        <span>{post.videoDuration}</span>
                     </div>
                  )}
               </div>
            )}

            {/* Content */}
            <div className="p-6">
               {/* Type badge + Categories */}
               <div className="flex items-center space-x-2 mb-3">
                  <span
                     className={`text-xs px-2 py-1 rounded-sm uppercase tracking-wide
                     ${isVideo ? "bg-electric/10 text-electric" : "bg-gold/10 text-gold"}`}>
                     {isVideo ? "Video" : "Article"}
                  </span>

                  {post.categories && post.categories.length > 0 && (
                     <span className="text-xs text-steel">{post.categories[0].title}</span>
                  )}
               </div>

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
