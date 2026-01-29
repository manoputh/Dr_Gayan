import { sanityFetch, urlFor } from "@/lib/sanity";
import { heroQuery, servicesQuery, blogPostsQuery } from "@/lib/queries";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import VideoCard from "@/components/VideoCard";
import Image from "next/image";

export default async function HomePage() {
   // Fetch all data for the home page
   const [hero, services, blogPosts] = await Promise.all([
      sanityFetch({ query: heroQuery }).catch(() => null),
      sanityFetch({ query: servicesQuery }).catch(() => []),
      sanityFetch({ query: blogPostsQuery }).catch(() => []),
   ]);

   return (
      <>
         {/* HERO SECTION - Split Layout with Portrait */}
         <section className="relative min-h-screen bg-obsidian overflow-hidden">
            {/* Subtle ambient light effect */}
            <div className="absolute inset-0 opacity-30">
               <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[120px]"></div>
               <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]"></div>
            </div>

            <Container className="relative z-10">
               <div className="min-h-screen flex items-center">
                  <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full py-20">
                     {/* LEFT: Authority Text Block */}
                     <div className="space-y-8 animate-fade-in">
                        {/* Small eyebrow text */}
                        <div className="flex items-center space-x-3">
                           <div className="h-[1px] w-12 bg-gold"></div>
                           <span className="text-sm tracking-ultra-wide uppercase text-steel font-medium">
                              Principal AI/ML Architect
                           </span>
                        </div>

                        {/* Main headline - Serif, bold, declarative */}
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
                           {hero?.headline || "Dr. Gayan De Silva"}
                        </h1>

                        {/* Subheadline - Industry value statement */}
                        <p className="text-xl lg:text-2xl text-platinum leading-relaxed max-w-xl">
                           {hero?.subheadline || "Engineering intelligence systems for enterprise-scale transformation"}
                        </p>

                        {/* Strategic descriptors */}
                        <div className="flex flex-wrap gap-4 text-sm text-steel">
                           {hero?.expertiseTags && hero.expertiseTags.length > 0 ? (
                              hero.expertiseTags.map((tag, idx) => (
                                 <span key={idx} className="px-4 py-2 bg-charcoal rounded-full">
                                    {tag}
                                 </span>
                              ))
                           ) : (
                              <>
                                 <span className="px-4 py-2 bg-charcoal rounded-full">Fortune 500 Advisory</span>
                                 <span className="px-4 py-2 bg-charcoal rounded-full">ML Infrastructure</span>
                                 <span className="px-4 py-2 bg-charcoal rounded-full">AI Strategy</span>
                              </>
                           )}
                        </div>

                        {/* CTA Buttons - Primary focus */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                           <Button href={hero?.ctaLink || "/consulting"} variant="primary">
                              {hero?.ctaText || "Book Consultation"}
                           </Button>
                           <Button href={hero?.secondaryCtaLink || "/contact"} variant="secondary">
                              {hero?.secondaryCtaText || "View Portfolio"}
                           </Button>
                        </div>
                     </div>

                     {/* RIGHT: Professional Portrait */}
                     <div className="relative animate-reveal">
                        <div className="relative aspect-[3/4] max-w-lg mx-auto lg:ml-auto">
                           {/* Portrait frame with subtle glow */}
                           <div className="absolute inset-0 bg-gradient-to-br from-electric/20 to-gold/20 rounded-2xl blur-2xl opacity-40"></div>

                           {/* Main portrait container */}
                           <div className="relative h-full bg-gradient-to-br from-charcoal to-graphite rounded-2xl overflow-hidden border border-slate/20">
                              {hero?.portraitImage ? (
                                 <Image
                                    src={urlFor(hero.portraitImage).width(800).height(1067).url()}
                                    alt={hero.headline || "Dr. Gayan De Silva"}
                                    fill
                                    className="object-cover filter grayscale"
                                    priority
                                 />
                              ) : (
                                 /* Placeholder for professional photo */
                                 <div className="absolute inset-0 flex items-center justify-center text-steel">
                                    <div className="text-center space-y-4">
                                       <div className="w-24 h-24 mx-auto bg-slate rounded-full flex items-center justify-center">
                                          <span className="text-4xl">📸</span>
                                       </div>
                                       <p className="text-sm">Professional portrait placeholder</p>
                                       <p className="text-xs text-steel/60 max-w-xs mx-auto">
                                          Upload high-quality professional headshot in Sanity Studio
                                          <br />
                                          (half-body, confident posture, dark background)
                                       </p>
                                    </div>
                                 </div>
                              )}
                           </div>

                           {/* Subtle accent line */}
                           <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-gold/30 rounded-br-2xl"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </Container>

            {/* Minimal scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-shimmer">
               <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-steel to-transparent"></div>
            </div>
         </section>

         {/* EXPERTISE SECTION - Premium Services Display */}
         {services.length > 0 && (
            <section className="relative py-32 bg-charcoal">
               {/* Subtle top border accent */}
               <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

               <Container>
                  {/* Section intro - centered, authoritative */}
                  <div className="max-w-3xl mx-auto text-center mb-20">
                     <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Core Expertise</h2>
                     <p className="text-lg text-platinum/80 leading-relaxed">
                        Strategic consulting and implementation across enterprise AI/ML initiatives
                     </p>
                  </div>

                  {/* Services grid - more spacious */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                     {services.slice(0, 3).map((service, index) => (
                        <div
                           key={service._id}
                           className="animate-slide-up"
                           style={{ animationDelay: `${index * 150}ms` }}>
                           <ServiceCard service={service} />
                        </div>
                     ))}
                  </div>

                  {/* Subtle CTA */}
                  <div className="text-center mt-16">
                     <a
                        href="/consulting"
                        className="inline-flex items-center text-sm tracking-wide uppercase text-platinum hover:text-white transition-colors group">
                        <span>Explore All Services</span>
                        <svg
                           className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                     </a>
                  </div>
               </Container>
            </section>
         )}

         {/* THOUGHT LEADERSHIP SECTION - Insights */}
         {blogPosts.length > 0 && (
            <section className="relative py-32 bg-obsidian">
               <Container>
                  {/* Section intro */}
                  <div className="max-w-3xl mb-20">
                     <div className="flex items-center space-x-3 mb-6">
                        <div className="h-[1px] w-12 bg-gold"></div>
                        <span className="text-sm tracking-ultra-wide uppercase text-steel font-medium">
                           Insights & Analysis
                        </span>
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Latest Insights</h2>
                     <p className="text-lg text-platinum/70 leading-relaxed">
                        Industry perspectives on AI/ML implementation, strategy, and emerging technologies
                     </p>
                  </div>

                  {/* Content grid - asymmetric premium layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                     {blogPosts.slice(0, 2).map((post, index) => (
                        <div key={post._id} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                           {/* Display video card if contentType is 'video', otherwise display blog card */}
                           {post.contentType === "video" && post.youtubeUrl ? (
                              <VideoCard video={post} />
                           ) : (
                              <BlogCard post={post} />
                           )}
                        </div>
                     ))}
                  </div>

                  {/* Subtle CTA */}
                  <div className="mt-16">
                     <a
                        href="/insights"
                        className="inline-flex items-center text-sm tracking-wide uppercase text-platinum hover:text-white transition-colors group">
                        <span>View All Insights</span>
                        <svg
                           className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                     </a>
                  </div>
               </Container>
            </section>
         )}

         {/* ENGAGEMENT CTA - Understated, confident */}
         <section className="relative py-32 bg-gradient-to-br from-charcoal to-graphite">
            {/* Accent border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric/20 to-transparent"></div>

            <Container>
               <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                     Let's Build Something Exceptional
                  </h2>
                  <p className="text-xl text-platinum/70 max-w-2xl mx-auto leading-relaxed">
                     Strategic consulting for organizations ready to leverage AI/ML at scale
                  </p>
                  <div className="pt-4">
                     <Button href="/contact" variant="primary">
                        Initiate Conversation
                     </Button>
                  </div>
               </div>
            </Container>
         </section>
      </>
   );
}
