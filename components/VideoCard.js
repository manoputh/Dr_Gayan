"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoCard({ video }) {
   const [isLoaded, setIsLoaded] = useState(false);

   const parseYouTubeUrl = (url) => {
      if (!url) return null;

      try {
         const parsed = new URL(url);
         const hostname = parsed.hostname.replace(/^www\./, "").toLowerCase();

         if (hostname === "youtu.be") {
            const id = parsed.pathname.replace("/", "").trim();
            return id ? { videoId: id } : null;
         }

         if (hostname === "youtube.com" || hostname === "m.youtube.com") {
            if (parsed.pathname === "/watch") {
               const id = parsed.searchParams.get("v");
               return id ? { videoId: id } : null;
            }

            const shortsMatch = parsed.pathname.match(/^\/shorts\/([a-zA-Z0-9_-]{11})/);
            if (shortsMatch) return { videoId: shortsMatch[1] };

            const embedMatch = parsed.pathname.match(/^\/embed\/([a-zA-Z0-9_-]{11})/);
            if (embedMatch) return { videoId: embedMatch[1] };
         }
      } catch {
         const fallbackMatch = url.match(/([a-zA-Z0-9_-]{11})/);
         if (fallbackMatch) return { videoId: fallbackMatch[1] };
      }

      return null;
   };

   const sourceUrl = video?.youtubeUrl || video?.externalUrl || "";
   const videoData = parseYouTubeUrl(sourceUrl);
   const videoId = videoData?.videoId || null;
   const fallbackWatchUrl = sourceUrl || null;
   const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : fallbackWatchUrl;
   const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
   const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
   const title = video?.title || "YouTube Video";
   const publishedAtText = video?.publishedAt
      ? new Date(video.publishedAt).toLocaleDateString("en-US", {
           year: "numeric",
           month: "short",
           day: "numeric",
        })
      : "Recent";

   return (
      <div className="group h-full">
         <div className="bg-charcoal border border-slate/20 rounded-lg overflow-hidden hover:border-red-500/40 transition-all duration-300 h-full flex flex-col">
            <div className="relative aspect-[16/9] w-full bg-obsidian/80 overflow-hidden">
               {isLoaded && embedUrl ? (
                  <iframe
                     src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                     title={title}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     allowFullScreen
                     className="absolute inset-0 w-full h-full"
                  />
               ) : thumbnailUrl ? (
                  <img
                     src={thumbnailUrl}
                     alt={title}
                     className="absolute inset-0 w-full h-full object-cover"
                     loading="lazy"
                  />
               ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center">
                        <FaPlay className="w-6 h-6 text-white ml-1" />
                     </div>
                  </div>
               )}

               {!isLoaded && embedUrl && (
                  <button
                     type="button"
                     onClick={() => setIsLoaded(true)}
                     className="absolute inset-0 flex items-center justify-center bg-obsidian/35 hover:bg-obsidian/20 transition-colors"
                     aria-label={`Play video: ${title}`}>
                     <span className="w-14 h-14 rounded-full bg-red-600/95 flex items-center justify-center shadow-lg">
                        <FaPlay className="text-white text-xl ml-1" />
                     </span>
                  </button>
               )}

               {video.videoDuration && (
                  <span className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-sm bg-obsidian/90 text-white">
                     {video.videoDuration}
                  </span>
               )}
            </div>

            <div className="p-4 md:p-5 flex-1 flex flex-col">
               <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs text-steel uppercase tracking-[0.08em]">YouTube</span>
                  <span className="text-xs text-steel">{publishedAtText}</span>
               </div>

               <h3 className="text-base font-serif font-semibold text-white leading-snug mb-2 line-clamp-2 min-h-[3rem]">
                  {title}
               </h3>

               <div className="pt-3 border-t border-slate/15 flex items-center justify-end mt-auto">
                  {watchUrl ? (
                     <a
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-red-400 hover:text-red-300 transition-colors">
                        Watch on YouTube
                     </a>
                  ) : (
                     <span className="text-sm text-steel">YouTube URL unavailable</span>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
