"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { FaLinkedin, FaYoutube, FaSearch, FaChartLine, FaPlay } from "react-icons/fa";

const SOURCE_FILTERS = [
   { key: "all", label: "All" },
   { key: "linkedin", label: "LinkedIn" },
   { key: "youtube", label: "YouTube" },
];

const TOPIC_FILTERS = [
   { key: "all", label: "All topics" },
   { key: "eu-ai-act", label: "EU AI Act" },
   { key: "case-studies", label: "Case Studies" },
   { key: "technical", label: "Technical" },
   { key: "governance", label: "Governance" },
   { key: "calibration", label: "Calibration / ECE" },
];

const TOPIC_LABELS = {
   "eu-ai-act": "EU AI Act",
   "case-studies": "Case Studies",
   technical: "Technical",
   governance: "Governance",
   calibration: "Calibration / ECE",
};

function formatDate(dateString) {
   if (!dateString) return "Recent";
   const date = new Date(dateString);
   return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
   });
}

function extractYouTubeId(url) {
   if (!url) return null;
   const standardMatch = url.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
   if (standardMatch) return standardMatch[1];

   const shortUrlMatch = url.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
   if (shortUrlMatch) return shortUrlMatch[1];

   const shortsMatch = url.match(/(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
   if (shortsMatch) return shortsMatch[1];

   return null;
}

function inferTopics(item) {
   const categoryText = (item.categories || []).map((category) => category?.title || "").join(" ");
   const combined = [item.title, item.excerpt, categoryText].filter(Boolean).join(" ").toLowerCase();
   const topics = new Set();

   if (combined.includes("eu ai") || combined.includes("eu-ai") || combined.includes("ai act")) {
      topics.add("eu-ai-act");
   }

   if (combined.includes("case study") || combined.includes("case-study") || combined.includes("case")) {
      topics.add("case-studies");
   }

   if (
      combined.includes("technical") ||
      combined.includes("model") ||
      combined.includes("mlops") ||
      combined.includes("explainability") ||
      combined.includes("shap")
   ) {
      topics.add("technical");
   }

   if (
      combined.includes("governance") ||
      combined.includes("compliance") ||
      combined.includes("oversight") ||
      combined.includes("responsible")
   ) {
      topics.add("governance");
   }

   if (combined.includes("calibration") || combined.includes("ece")) {
      topics.add("calibration");
      topics.add("technical");
   }

   if (topics.size === 0) {
      topics.add("governance");
   }

   return [...topics];
}

function getPrimaryTopic(item) {
   const topics = item.topicKeys || [];
   if (topics.includes("eu-ai-act")) return "eu-ai-act";
   if (topics.includes("case-studies")) return "case-studies";
   if (topics.includes("technical")) return "technical";
   if (topics.includes("governance")) return "governance";
   if (topics.includes("calibration")) return "calibration";
   return "governance";
}

function buildSearchText(item) {
   const categories = (item.categories || []).map((category) => category?.title || "").join(" ");
   const topics = (item.topicKeys || []).join(" ");
   return [item.title, item.excerpt, categories, topics].filter(Boolean).join(" ").toLowerCase();
}

function LinkedInCard({ item }) {
   const externalUrl = item.linkedinUrl || item.externalUrl || null;
   const primaryTopic = getPrimaryTopic(item);
   const mainCategory =
      item.categories && item.categories.length > 0 ? item.categories[0].title : TOPIC_LABELS[primaryTopic];
   const imageUrl = item.mainImage ? urlFor(item.mainImage).width(1200).height(675).url() : null;

   return (
      <div className="bg-charcoal border border-slate/20 rounded-lg overflow-hidden hover:border-electric/30 transition-all duration-300">
         {imageUrl && (
            <div className="relative aspect-video w-full overflow-hidden bg-obsidian/70">
               <Image src={imageUrl} alt={item.mainImage?.alt || item.title} fill className="object-cover" />
            </div>
         )}

         <div className="p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
               <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-sm bg-electric/10 text-electric">
                     {TOPIC_LABELS[primaryTopic]}
                  </span>
                  {mainCategory && <span className="text-xs text-steel">{mainCategory}</span>}
               </div>
               <span className="text-xs text-steel whitespace-nowrap">{formatDate(item.publishedAt)}</span>
            </div>

            <h3 className="text-xl font-serif font-semibold text-white leading-snug mb-3">{item.title}</h3>
            <p className="text-sm text-platinum/70 leading-relaxed mb-5 line-clamp-3">
               {item.excerpt ||
                  "Editorial analysis focused on AI Audit readiness, governance controls, and EU AI Act execution in production contexts."}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate/15">
               <span className="text-xs text-steel">LinkedIn-style insight</span>
               {externalUrl ? (
                  <a
                     href={externalUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm text-electric hover:text-electric-muted transition-colors">
                     View on LinkedIn
                  </a>
               ) : (
                  <Link
                     href={`/insights/${item.slug.current}`}
                     className="text-sm text-electric hover:text-electric-muted transition-colors">
                     Read insight
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
}

function YouTubeCard({ item }) {
   const videoId = extractYouTubeId(item.youtubeUrl);
   const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
   const primaryTopic = getPrimaryTopic(item);

   return (
      <div className="bg-charcoal border border-slate/20 rounded-lg overflow-hidden hover:border-red-500/40 transition-all duration-300">
         <div className="relative aspect-video w-full bg-obsidian/80 overflow-hidden">
            {thumbnailUrl ? (
               <Image src={thumbnailUrl} alt={item.title} fill className="object-cover" />
            ) : (
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center">
                     <FaPlay className="text-white text-xl ml-1" />
                  </div>
               </div>
            )}
            {item.videoDuration && (
               <span className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-sm bg-obsidian/90 text-white">
                  {item.videoDuration}
               </span>
            )}
         </div>

         <div className="p-5">
            <div className="flex items-center justify-between gap-3 mb-2">
               <span className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-sm bg-red-500/10 text-red-400">
                  {TOPIC_LABELS[primaryTopic]}
               </span>
               <span className="text-xs text-steel">{formatDate(item.publishedAt)}</span>
            </div>

            <h3 className="text-lg font-serif font-semibold text-white leading-snug mb-3 line-clamp-2">{item.title}</h3>

            <div className="pt-3 border-t border-slate/15 flex items-center justify-between">
               <span className="text-xs text-steel">YouTube insight</span>
               {item.youtubeUrl ? (
                  <a
                     href={item.youtubeUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm text-red-400 hover:text-red-300 transition-colors">
                     Watch on YouTube
                  </a>
               ) : (
                  <Link
                     href={`/insights/${item.slug.current}`}
                     className="text-sm text-red-400 hover:text-red-300 transition-colors">
                     View detail
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
}

export default function InsightsHub({ insights }) {
   const [sourceFilter, setSourceFilter] = useState("all");
   const [topicFilter, setTopicFilter] = useState("all");
   const [searchText, setSearchText] = useState("");

   const normalizedItems = useMemo(() => {
      return (insights || []).map((item) => {
         const source = item.contentType === "video" ? "youtube" : "linkedin";
         const topicKeys = inferTopics(item);
         return {
            ...item,
            source,
            topicKeys,
            searchIndex: buildSearchText({ ...item, topicKeys }),
         };
      });
   }, [insights]);

   const topicCounts = useMemo(() => {
      const counts = TOPIC_FILTERS.reduce((acc, topic) => {
         acc[topic.key] = 0;
         return acc;
      }, {});

      normalizedItems.forEach((item) => {
         counts.all += 1;
         item.topicKeys.forEach((topic) => {
            if (counts[topic] !== undefined) {
               counts[topic] += 1;
            }
         });
      });

      return counts;
   }, [normalizedItems]);

   const filteredItems = useMemo(() => {
      const query = searchText.trim().toLowerCase();
      return normalizedItems.filter((item) => {
         const sourceMatch = sourceFilter === "all" || item.source === sourceFilter;
         const topicMatch = topicFilter === "all" || item.topicKeys.includes(topicFilter);
         const searchMatch = !query || item.searchIndex.includes(query);
         return sourceMatch && topicMatch && searchMatch;
      });
   }, [normalizedItems, sourceFilter, topicFilter, searchText]);

   const linkedInItems = filteredItems.filter((item) => item.source === "linkedin");
   const youTubeItems = filteredItems.filter((item) => item.source === "youtube");

   return (
      <div className="py-20 lg:py-24">
         <Container>
            <AnimatedSection from="none">
               <div className="max-w-4xl mx-auto text-center mb-14">
                  <p className="text-xs uppercase tracking-[0.14em] text-electric/80 mb-4">Insights</p>
                  <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-5">Insights</h1>
                  <p className="text-lg text-platinum/75 leading-relaxed max-w-3xl mx-auto">
                     LinkedIn posts and YouTube videos covering EU AI Act analysis, AI governance case studies, and
                     production AI insights for executive and technical teams.
                  </p>
               </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-10 items-start">
               <aside className="lg:sticky lg:top-28 space-y-6">
                  <div className="bg-charcoal border border-slate/20 rounded-lg p-5">
                     <p className="text-xs uppercase tracking-[0.12em] text-electric/80 mb-3">Topics</p>
                     <div className="space-y-2">
                        {TOPIC_FILTERS.map((topic) => {
                           const active = topicFilter === topic.key;
                           return (
                              <button
                                 key={topic.key}
                                 type="button"
                                 onClick={() => setTopicFilter(topic.key)}
                                 className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                    active
                                       ? "bg-electric/10 text-electric border border-electric/40"
                                       : "bg-obsidian/40 text-platinum/75 border border-slate/20 hover:border-electric/30 hover:text-white"
                                 }`}>
                                 <span className="flex items-center justify-between gap-2">
                                    <span>{topic.label}</span>
                                    <span className="text-xs opacity-70">{topicCounts[topic.key] || 0}</span>
                                 </span>
                              </button>
                           );
                        })}
                     </div>
                  </div>

                  <div className="bg-charcoal border border-slate/20 rounded-lg p-5">
                     <p className="text-xs uppercase tracking-[0.12em] text-electric/80 mb-3">Free Diagnostic</p>
                     <p className="text-sm text-platinum/75 leading-relaxed mb-4">
                        Assess AI exposure in 10 minutes before a full readiness scan.
                     </p>
                     <Button href="/tools" variant="primary" className="w-full">
                        Take the Diagnostic
                     </Button>
                  </div>

                  <div className="bg-charcoal border border-slate/20 rounded-lg p-5">
                     <p className="text-xs uppercase tracking-[0.12em] text-electric/80 mb-3">Follow</p>
                     <div className="space-y-2">
                        <a
                           href="https://linkedin.com/in/gayanrr"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-full inline-flex items-center justify-between px-3 py-2 rounded-md border border-slate/20 text-sm text-platinum/80 hover:border-electric/30 hover:text-white transition-colors">
                           <span className="inline-flex items-center gap-2">
                              <FaLinkedin className="text-electric" /> Follow on LinkedIn
                           </span>
                           <span>↗</span>
                        </a>
                        <a
                           href="https://youtube.com/@gayandesilva"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-full inline-flex items-center justify-between px-3 py-2 rounded-md border border-slate/20 text-sm text-platinum/80 hover:border-red-500/40 hover:text-white transition-colors">
                           <span className="inline-flex items-center gap-2">
                              <FaYoutube className="text-red-500" /> Subscribe on YouTube
                           </span>
                           <span>↗</span>
                        </a>
                     </div>
                  </div>
               </aside>

               <main>
                  <div className="bg-charcoal border border-slate/20 rounded-lg p-4 md:p-5 mb-8">
                     <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2">
                           {SOURCE_FILTERS.map((source) => {
                              const active = sourceFilter === source.key;
                              return (
                                 <button
                                    key={source.key}
                                    type="button"
                                    onClick={() => setSourceFilter(source.key)}
                                    className={`px-4 py-2 text-xs uppercase tracking-[0.12em] rounded-sm border transition-colors ${
                                       active
                                          ? "bg-electric/10 text-electric border-electric/40"
                                          : "text-steel border-slate/20 hover:border-electric/30 hover:text-white"
                                    }`}>
                                    {source.label}
                                 </button>
                              );
                           })}
                        </div>

                        <div className="relative w-full lg:w-72">
                           <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-steel text-xs" />
                           <input
                              type="text"
                              value={searchText}
                              onChange={(event) => setSearchText(event.target.value)}
                              placeholder="Search insights"
                              className="w-full bg-obsidian/40 border border-slate/20 rounded-md pl-9 pr-3 py-2 text-sm text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/40"
                           />
                        </div>
                     </div>
                  </div>

                  {linkedInItems.length > 0 && (
                     <div id="linkedin" className="mb-10 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate/20">
                           <FaLinkedin className="text-electric text-lg" />
                           <h2 className="text-2xl font-serif font-semibold text-white">LinkedIn Posts</h2>
                           <span className="text-xs text-steel">{linkedInItems.length}</span>
                        </div>
                        <div className="space-y-4">
                           {linkedInItems.map((item, index) => (
                              <AnimatedSection key={item._id} delay={index * 70} from="bottom">
                                 <LinkedInCard item={item} />
                              </AnimatedSection>
                           ))}
                        </div>
                     </div>
                  )}

                  {youTubeItems.length > 0 && (
                     <div id="youtube" className="mb-10 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate/20">
                           <FaYoutube className="text-red-500 text-lg" />
                           <h2 className="text-2xl font-serif font-semibold text-white">YouTube Videos</h2>
                           <span className="text-xs text-steel">{youTubeItems.length}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {youTubeItems.map((item, index) => (
                              <AnimatedSection key={item._id} delay={index * 70} from="bottom">
                                 <YouTubeCard item={item} />
                              </AnimatedSection>
                           ))}
                        </div>
                     </div>
                  )}

                  {filteredItems.length === 0 && (
                     <div className="bg-charcoal border border-slate/20 rounded-lg p-10 text-center">
                        <FaChartLine className="text-steel mx-auto mb-3" />
                        <p className="text-platinum/85 mb-2">No insights match your search.</p>
                        <p className="text-sm text-steel">Try different keywords or clear the filter.</p>
                     </div>
                  )}
               </main>
            </div>
         </Container>
      </div>
   );
}
