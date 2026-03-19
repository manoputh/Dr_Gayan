import { sanityFetch, urlFor } from "@/lib/sanity";
import { blogPostsQuery, programBySlugQuery } from "@/lib/queries";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import VideoCard from "@/components/VideoCard";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const HOME_HERO = {
   headline: "Transforming Vision into Intelligence",
   subheadline:
      "Empowering enterprises with strategic AI/ML solutions that drive measurable outcomes and sustainable growth.",
   ctaText: "Book Consultation",
   ctaLink: "/consulting",
};

const HOME_SERVICES = [
   {
      _id: "svc-1",
      title: "AI Strategy & Roadmap",
      description:
         "Develop comprehensive AI strategies aligned with business goals through readiness assessments, prioritized use cases, and implementation planning.",
      icon: "FaLightbulb",
      features: ["AI Readiness Assessment", "Strategic Planning", "ROI Analysis", "Implementation Roadmap"],
   },
   {
      _id: "svc-2",
      title: "Machine Learning Solutions",
      description:
         "Design and deploy custom ML systems for prediction, optimization, and intelligent automation tailored to your operational context.",
      icon: "FaBrain",
      features: [
         "Custom Model Development",
         "Predictive Analytics",
         "Model Training & Tuning",
         "Performance Optimization",
      ],
   },
   {
      _id: "svc-3",
      title: "Data Engineering",
      description:
         "Build reliable data foundations with scalable pipelines, quality controls, and production-ready infrastructure for AI workloads.",
      icon: "FaDatabase",
      features: ["Data Pipeline Design", "ETL Implementation", "Data Quality Management", "Infrastructure Setup"],
   },
];

export default async function HomePage() {
   const [blogPosts, featuredProgram] = await Promise.all([
      sanityFetch({ query: blogPostsQuery }).catch(() => []),
      sanityFetch({ query: programBySlugQuery, params: { slug: "think-like-a-scientist" } }).catch(() => null),
   ]);

   return (
      <>
         {/* HERO SECTION - Clean & Focused */}
         <section className="relative py-32 lg:py-40 bg-obsidian overflow-hidden">
            {/* Subtle ambient light effect */}
            <div className="absolute inset-0 opacity-20">
               <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[120px]"></div>
               <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]"></div>
            </div>

            <Container className="relative z-10">
               <AnimatedSection from="none">
                  <div className="max-w-4xl mx-auto text-center space-y-8">
                     {/* Small eyebrow text */}
                     <div className="flex items-center justify-center space-x-3">
                        <div className="h-[1px] w-12 bg-gold"></div>
                        <span className="text-sm tracking-widest uppercase text-steel font-medium">
                           Strategic AI/ML Leadership
                        </span>
                        <div className="h-[1px] w-12 bg-gold"></div>
                     </div>

                     {/* Main headline */}
                     <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                        {HOME_HERO.headline}
                     </h1>

                     {/* Subheadline */}
                     <p className="text-xl lg:text-2xl text-platinum/80 leading-relaxed max-w-3xl mx-auto">
                        {HOME_HERO.subheadline}
                     </p>

                     {/* CTA Buttons */}
                     <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button href={HOME_HERO.ctaLink} variant="primary">
                           {HOME_HERO.ctaText}
                        </Button>
                        <Button href="/about" variant="secondary">
                           Learn More About Us
                        </Button>
                     </div>
                  </div>
               </AnimatedSection>
            </Container>
         </section>

         {/* FEATURED PROGRAM SECTION */}
         {featuredProgram && (
            <section className="relative py-20 bg-gradient-to-br from-charcoal to-graphite">
               <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

               <Container>
                  <AnimatedSection>
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                           <div className="inline-block px-4 py-1 bg-electric/10 border border-electric/30 rounded-full">
                              <span className="text-xs font-semibold tracking-wider uppercase text-electric">
                                 Featured Program
                              </span>
                           </div>
                           <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                              {featuredProgram.title}
                           </h2>
                           <p className="text-lg text-platinum/80 leading-relaxed">{featuredProgram.description}</p>
                           <div className="pt-4">
                              <Button href="/programs/think-like-a-scientist" variant="primary">
                                 Explore Program
                              </Button>
                           </div>
                        </div>

                        {featuredProgram.heroImage && (
                           <div className="relative aspect-video lg:aspect-square rounded-lg overflow-hidden border border-slate/20">
                              <img
                                 src={urlFor(featuredProgram.heroImage).width(800).height(800).url()}
                                 alt={featuredProgram.heroImage.alt || featuredProgram.title}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        )}
                     </div>
                  </AnimatedSection>
               </Container>
            </section>
         )}

         {/* SERVICES SECTION */}
         {HOME_SERVICES.length > 0 && (
            <section className="relative py-32 bg-obsidian">
               <Container>
                  {/* Section intro */}
                  <AnimatedSection>
                     <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                           <div className="h-[1px] w-12 bg-gold"></div>
                           <span className="text-sm tracking-widest uppercase text-steel font-medium">Services</span>
                           <div className="h-[1px] w-12 bg-gold"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                           Strategic AI/ML Consulting
                        </h2>
                        <p className="text-lg text-platinum/70 leading-relaxed">
                           Comprehensive solutions tailored to your enterprise transformation goals
                        </p>
                     </div>
                  </AnimatedSection>

                  {/* Services grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {HOME_SERVICES.map((service, index) => (
                        <AnimatedSection key={service._id} delay={index * 100} from="bottom">
                           <ServiceCard service={service} />
                        </AnimatedSection>
                     ))}
                  </div>

                  {/* Link to full services */}
                  <div className="text-center mt-16">
                     <Link
                        href="/consulting"
                        className="inline-flex items-center text-sm tracking-wide uppercase text-platinum hover:text-white transition-colors group">
                        <span>View All Services</span>
                        <svg
                           className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                     </Link>
                  </div>
               </Container>
            </section>
         )}

         {/* INSIGHTS SECTION */}
         {blogPosts.length > 0 && (
            <section className="relative py-32 bg-charcoal">
               <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

               <Container>
                  {/* Section intro */}
                  <AnimatedSection>
                     <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                           <div className="h-[1px] w-12 bg-gold"></div>
                           <span className="text-sm tracking-widest uppercase text-steel font-medium">
                              Latest Insights
                           </span>
                           <div className="h-[1px] w-12 bg-gold"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                           Knowledge & Perspectives
                        </h2>
                        <p className="text-lg text-platinum/70 leading-relaxed">
                           Strategic insights on AI/ML implementation, industry trends, and emerging technologies
                        </p>
                     </div>
                  </AnimatedSection>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {blogPosts.slice(0, 3).map((post, index) => (
                        <AnimatedSection key={post._id} delay={index * 120} from="bottom">
                           {post.contentType === "video" && post.youtubeUrl ? (
                              <VideoCard video={post} />
                           ) : (
                              <BlogCard post={post} />
                           )}
                        </AnimatedSection>
                     ))}
                  </div>

                  {/* Link to all insights */}
                  <div className="text-center mt-16">
                     <Link
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
                     </Link>
                  </div>
               </Container>
            </section>
         )}

         {/* FINAL CTA SECTION */}
         <section className="relative py-32 bg-obsidian">
            <Container>
               <AnimatedSection from="none">
                  <div className="max-w-4xl mx-auto text-center space-y-8">
                     <div className="inline-block px-4 py-1 bg-electric/10 border border-electric/30 rounded-full mb-4">
                        <span className="text-xs font-semibold tracking-wider uppercase text-electric">
                           Get Started
                        </span>
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                        Ready to Transform Your Organization?
                     </h2>
                     <p className="text-xl text-platinum/70 max-w-2xl mx-auto leading-relaxed">
                        Partner with us to unlock the full potential of AI/ML for your enterprise
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button href="/contact" variant="primary">
                           Schedule Consultation
                        </Button>
                        <Button href="/about" variant="secondary">
                           Learn About Our Team
                        </Button>
                     </div>
                  </div>
               </AnimatedSection>
            </Container>
         </section>
      </>
   );
}
