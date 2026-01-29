"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

/**
 * Premium Video Card Component
 *
 * Converts YouTube URLs to embeds with privacy protection and lazy loading.
 * Supports standard videos (16:9) with consistent aspect ratio.
 *
 * Features:
 * - Automatic URL detection (youtube.com/watch, youtu.be, youtube.com/shorts)
 * - Click-to-load (respects user bandwidth and privacy)
 * - youtube-nocookie.com for GDPR compliance
 * - Smooth animations and premium dark aesthetic
 * - Responsive grid-friendly layout
 */
export default function VideoCard({ video }) {
   const [isLoaded, setIsLoaded] = useState(false);

   // Parse YouTube URL to extract video ID and detect format
   const parseYouTubeUrl = (url) => {
      if (!url) return null;

      // Standard video: youtube.com/watch?v=VIDEO_ID
      const standardMatch = url.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
      if (standardMatch) {
         return { videoId: standardMatch[1], isShort: false };
      }

      // Short URL: youtu.be/VIDEO_ID
      const shortUrlMatch = url.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (shortUrlMatch) {
         return { videoId: shortUrlMatch[1], isShort: false };
      }

      // Shorts: youtube.com/shorts/VIDEO_ID
      const shortsMatch = url.match(/(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
      if (shortsMatch) {
         return { videoId: shortsMatch[1], isShort: true };
      }

      return null;
   };

   const videoData = parseYouTubeUrl(video.youtubeUrl);
   if (!videoData) return null;

   const { videoId, isShort } = videoData;
   const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
   const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

   // Use consistent 16:9 aspect ratio for professional look
   const aspectRatioClass = "aspect-video"; // Consistent for all video types

   return (
      <div className="group h-full">
         <div className="bg-charcoal rounded-sm border border-slate/20 overflow-hidden hover:border-electric/40 transition-all duration-500 h-full flex flex-col">
            {/* Video Embed / Thumbnail */}
            <div className={`relative ${aspectRatioClass} w-full overflow-hidden bg-obsidian`}>
               {!isLoaded ? (
                  // Thumbnail with play button overlay
                  <button
                     onClick={() => setIsLoaded(true)}
                     className="absolute inset-0 w-full h-full group/thumb"
                     aria-label={`Play video: ${video.title}`}>
                     {/* Thumbnail image */}
                     <img
                        src={thumbnailUrl}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                     />

                     {/* Dark overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

                     {/* Play button */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-electric/90 backdrop-blur-sm flex items-center justify-center transform transition-all duration-500 group-hover/thumb:scale-110 group-hover/thumb:bg-electric shadow-2xl">
                           <FaPlay className="w-8 h-8 text-white ml-1" />
                        </div>
                     </div>

                     {/* Duration badge */}
                     {video.videoDuration && (
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-obsidian/90 backdrop-blur-sm rounded-sm text-xs text-white font-medium">
                           {video.videoDuration}
                        </div>
                     )}
                  </button>
               ) : (
                  // Lazy-loaded iframe
                  <iframe
                     src={embedUrl}
                     title={video.title}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     className="absolute inset-0 w-full h-full animate-fade-in"
                  />
               )}
            </div>

            {/* Video metadata */}
            <div className="p-6 flex-1 flex flex-col">
               {/* Title */}
               <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-platinum transition-colors leading-tight">
                  {video.title}
               </h3>

               {/* Metadata footer */}
               <div className="flex items-center justify-between text-xs text-steel pt-4 border-t border-slate/10">
                  {video.publishedAt && (
                     <span>
                        {new Date(video.publishedAt).toLocaleDateString("en-US", {
                           year: "numeric",
                           month: "short",
                        })}
                     </span>
                  )}

                  {video.categories && video.categories.length > 0 && (
                     <span className="text-gold/80">{video.categories[0].title}</span>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
