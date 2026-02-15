import { sanityFetch, urlFor } from "@/lib/sanity";
import { aboutQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { portableTextComponents } from "@/components/PortableTextComponents";

export const metadata = {
   title: "About | Dr. Gayan De Silva",
   description: "Industry-focused AI/ML leader, strategic consultant, and educator driving enterprise transformation.",
};

export default async function AboutPage() {
   const about = await sanityFetch({ query: aboutQuery }).catch(() => null);

   return (
      <div className="py-20">
         <Container>
            {/* ── Hero / Intro ────────────────────────────────── */}
            <AnimatedSection>
               <div className="max-w-5xl mx-auto mb-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                     {/* Portrait */}
                     {about?.portrait && (
                        <div className="md:col-span-4 flex justify-center">
                           <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-slate/30 shadow-lg shadow-electric/10 transition-all duration-300 hover:border-electric/50 hover:shadow-electric/30 hover:scale-105">
                              <img
                                 src={urlFor(about.portrait).width(512).height(512).url()}
                                 alt={about.portrait.alt || about.name || "Portrait"}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        </div>
                     )}

                     {/* Name + Title + Philosophy */}
                     <div className={about?.portrait ? "md:col-span-8" : "md:col-span-12 text-center"}>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 bg-gradient-to-r from-white via-platinum to-white bg-clip-text text-transparent">
                           {about?.name || "Dr. Gayan De Silva"}
                        </h1>
                        <p className="text-lg text-steel mb-6">
                           {about?.title || "Principal AI/ML Architect & Strategic Consultant"}
                        </p>

                        {about?.philosophy && (
                           <blockquote className="border-l-2 border-electric/40 pl-5 text-platinum/80 italic leading-relaxed">
                              {about.philosophy}
                           </blockquote>
                        )}
                     </div>
                  </div>
               </div>
            </AnimatedSection>

            {/* ── Professional Bio ─────────────────────────────── */}
            <AnimatedSection delay={100}>
               <div className="max-w-4xl mx-auto mb-20">
                  <div className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20 transition-all duration-300 hover:border-slate/30 hover:shadow-lg hover:shadow-electric/5">
                     {about?.bio ? (
                        <div className="text-lg">
                           <PortableText value={about.bio} components={portableTextComponents} />
                        </div>
                     ) : (
                        <div className="text-lg text-platinum/80 leading-relaxed space-y-5">
                           <p>
                              We are a premier AI/ML consulting firm specializing in enterprise-level solutions that
                              drive measurable business outcomes. With extensive experience across Fortune 500 companies
                              and high-growth startups, we bring strategic insights and technical excellence to every
                              engagement.
                           </p>
                           <p>
                              Our approach combines deep industry knowledge with cutting-edge AI/ML technologies to
                              solve complex business challenges. We partner with executive teams to identify
                              opportunities, design robust solutions, and implement systems that scale.
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            </AnimatedSection>

            {/* ── Industry Experience & Expertise ──────────────── */}
            <AnimatedSection delay={200}>
               <div className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Industry Experience */}
                  <div>
                     <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight">
                        Industry Experience
                     </h2>
                     <div className="space-y-4">
                        {about?.industryExperience?.length ? (
                           about.industryExperience.map((item, i) => (
                              <div
                                 key={i}
                                 className="bg-charcoal p-5 rounded-lg border border-slate/20 transition-all duration-300 hover:border-electric/30 hover:-translate-y-1">
                                 <h3 className="text-electric font-semibold mb-1">{item.industry}</h3>
                                 {item.description && (
                                    <p className="text-sm text-steel leading-relaxed">{item.description}</p>
                                 )}
                              </div>
                           ))
                        ) : (
                           <>
                              {[
                                 "Financial Services & FinTech",
                                 "Healthcare & Life Sciences",
                                 "Manufacturing & Supply Chain",
                                 "Technology & Software",
                                 "Retail & E-commerce",
                              ].map((ind) => (
                                 <div
                                    key={ind}
                                    className="bg-charcoal p-5 rounded-lg border border-slate/20 transition-all duration-300 hover:border-electric/30 hover:-translate-y-1">
                                    <h3 className="text-electric font-semibold">{ind}</h3>
                                 </div>
                              ))}
                           </>
                        )}
                     </div>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                     <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight">
                        Areas of Expertise
                     </h2>
                     <div className="flex flex-wrap gap-3">
                        {(about?.expertise?.length
                           ? about.expertise
                           : [
                                "Machine Learning",
                                "Deep Learning",
                                "NLP",
                                "Computer Vision",
                                "Predictive Analytics",
                                "MLOps",
                             ]
                        ).map((skill) => (
                           <span
                              key={skill}
                              className="px-4 py-2 bg-charcoal border border-slate/20 rounded-full text-sm text-platinum/80 hover:border-electric/40 hover:text-white transition-all duration-300 cursor-default">
                              {skill}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </AnimatedSection>

            {/* ── CTA ──────────────────────────────────────────── */}
            <AnimatedSection delay={300}>
               <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-electric/5 to-gold/5 border border-slate/20 p-10 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Let&apos;s Work Together</h3>
                  <p className="text-steel mb-6">Explore how strategic AI/ML leadership can accelerate your goals.</p>
                  <Button href={about?.ctaLink || "/contact"} variant="primary">
                     {about?.ctaText || "Schedule a Consultation"}
                  </Button>
               </div>
            </AnimatedSection>
         </Container>
      </div>
   );
}
