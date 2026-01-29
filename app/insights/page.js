import { sanityFetch } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import VideoGrid from "@/components/VideoGrid";
import { FaPlayCircle, FaNewspaper } from "react-icons/fa";

export const metadata = {
   title: "Insights | Strategic AI/ML Analysis",
   description:
      "Articles, videos, and perspectives on enterprise artificial intelligence and machine learning implementation.",
};

export default async function InsightsPage() {
   // Fetch all content (articles + videos)
   const insights = await sanityFetch({
      query: blogPostsQuery,
   }).catch(() => []);

   // Separate content types
   const articles = insights.filter((item) => item.contentType === "article" || !item.contentType);
   const videos = insights.filter((item) => item.contentType === "video");

   return (
      <div className="py-20 lg:py-32">
         <Container>
            {/* Page Header */}
            <div className="max-w-3xl mb-16">
               <div className="flex items-center space-x-3 mb-6">
                  <div className="h-[1px] w-12 bg-gold"></div>
                  <span className="text-sm tracking-ultra-wide uppercase text-steel font-medium">
                     Knowledge & Perspectives
                  </span>
               </div>
               <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">Insights</h1>
               <p className="text-lg text-platinum/70 leading-relaxed">
                  Strategic analysis, technical deep-dives, and industry perspectives on AI/ML implementation at scale
               </p>
            </div>

            {/* Video Showcase Section */}
            {videos.length > 0 && (
               <div className="mb-24">
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center space-x-3">
                        <FaPlayCircle className="w-5 h-5 text-electric" />
                        <h2 className="text-2xl font-serif font-semibold text-white">Video Insights</h2>
                     </div>
                     <span className="text-sm text-steel">{videos.length} videos</span>
                  </div>

                  {/* Video Grid */}
                  <VideoGrid videos={videos} />
               </div>
            )}

            {/* Articles Section */}
            {articles.length > 0 && (
               <div className="mb-16">
                  {/* Section Header */}
                  {videos.length > 0 && (
                     <div className="flex items-center justify-between mb-8 pt-16 border-t border-slate/20">
                        <div className="flex items-center space-x-3">
                           <FaNewspaper className="w-5 h-5 text-gold" />
                           <h2 className="text-2xl font-serif font-semibold text-white">Articles</h2>
                        </div>
                        <span className="text-sm text-steel">{articles.length} articles</span>
                     </div>
                  )}

                  {/* Articles Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                     {articles.map((item, index) => (
                        <div key={item._id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                           <BlogCard post={item} />
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* Empty State */}
            {insights.length === 0 && (
               <div className="text-center py-20">
                  <p className="text-steel text-lg">Content library coming soon</p>
               </div>
            )}
         </Container>
      </div>
   );
}
