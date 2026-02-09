import VideoCard from "./VideoCard";
import AnimatedSection from "./AnimatedSection";

/**
 * Video Grid Component
 *
 * Responsive grid layout for video showcases with featured video support.
 *
 * Layout:
 * - Desktop: 3 columns (featured videos span 2x2)
 * - Tablet: 2 columns
 * - Mobile: 1 column
 */
export default function VideoGrid({ videos }) {
   if (!videos || videos.length === 0) {
      return (
         <div className="text-center py-20">
            <p className="text-steel text-lg">Video content coming soon</p>
         </div>
      );
   }

   // Separate featured and regular videos
   const featuredVideos = videos.filter((v) => v.featured);
   const regularVideos = videos.filter((v) => !v.featured);

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
         {/* Featured videos render first with larger size */}
         {featuredVideos.map((video, index) => (
            <AnimatedSection key={video._id} delay={index * 100} from="bottom">
               <VideoCard video={video} featured={true} />
            </AnimatedSection>
         ))}

         {/* Regular videos */}
         {regularVideos.map((video, index) => (
            <AnimatedSection key={video._id} delay={(featuredVideos.length + index) * 100} from="bottom">
               <VideoCard video={video} featured={false} />
            </AnimatedSection>
         ))}
      </div>
   );
}
