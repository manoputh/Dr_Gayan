import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

const ABOUT_CONTENT = {
   name: "Gayan de Silva, PhD",
   title: "Principal AI/ML Architect and Executive Advisor",
   philosophy:
      "Strategic AI leadership succeeds when business priorities, risk controls, and technical execution are aligned from day one.",
   bio: [
      "Gayan de Silva, PhD advises enterprise and growth-stage leadership teams on AI strategy, operating models, and implementation priorities that deliver measurable commercial outcomes.",
      "Engagements focus on industry-specific transformation across financial services, healthcare, manufacturing, technology, and retail, combining executive advisory with hands-on architecture guidance.",
   ],
   industryExperience: [
      {
         industry: "Financial Services & FinTech",
         description: "Risk modeling, fraud detection, and intelligent automation for regulated environments.",
      },
      {
         industry: "Healthcare & Life Sciences",
         description: "Data-driven decision support, clinical intelligence, and operational optimization.",
      },
      {
         industry: "Manufacturing & Supply Chain",
         description: "Forecasting, quality analytics, and predictive maintenance at scale.",
      },
      {
         industry: "Technology & Software",
         description: "Product intelligence, recommendation systems, and ML-enabled platform capabilities.",
      },
      {
         industry: "Retail & E-commerce",
         description: "Personalization, demand prediction, and customer behavior analytics.",
      },
   ],
   expertise: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "MLOps",
   ],
   ctaText: "Schedule a Consultation",
   ctaLink: "/contact",
   portrait: null,
};

export const metadata = {
   title: "About | Gayan de Silva, PhD",
   description: "Industry-focused AI/ML leader, strategic consultant, and educator driving enterprise transformation.",
};

export default function AboutPage() {
   const hasPortrait = Boolean(ABOUT_CONTENT.portrait);

   return (
      <div className="py-20">
         <Container>
            {/* ── Hero / Intro ────────────────────────────────── */}
            <AnimatedSection>
               <div className="max-w-5xl mx-auto mb-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                     {/* Portrait */}
                     {hasPortrait && (
                        <div className="md:col-span-4 flex justify-center">
                           <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-slate/30 shadow-lg shadow-electric/10 transition-all duration-300 hover:border-electric/50 hover:shadow-electric/30 hover:scale-105">
                              <img
                                 src={ABOUT_CONTENT.portrait}
                                 alt={ABOUT_CONTENT.name}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        </div>
                     )}

                     {/* Name + Title + Philosophy */}
                     <div className={hasPortrait ? "md:col-span-8" : "md:col-span-12 text-center"}>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 bg-gradient-to-r from-white via-platinum to-white bg-clip-text text-transparent">
                           {ABOUT_CONTENT.name}
                        </h1>
                        <p className="text-lg text-steel mb-6">{ABOUT_CONTENT.title}</p>

                        {ABOUT_CONTENT.philosophy && (
                           <blockquote className="border-l-2 border-electric/40 pl-5 text-platinum/80 italic leading-relaxed">
                              {ABOUT_CONTENT.philosophy}
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
                     <div className="text-lg text-platinum/80 leading-relaxed space-y-5">
                        {ABOUT_CONTENT.bio.map((paragraph) => (
                           <p key={paragraph}>{paragraph}</p>
                        ))}
                     </div>
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
                        {ABOUT_CONTENT.industryExperience.map((item, i) => (
                           <div
                              key={`${item.industry}-${i}`}
                              className="bg-charcoal p-5 rounded-lg border border-slate/20 transition-all duration-300 hover:border-electric/30 hover:-translate-y-1">
                              <h3 className="text-electric font-semibold mb-1">{item.industry}</h3>
                              {item.description && (
                                 <p className="text-sm text-steel leading-relaxed">{item.description}</p>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                     <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight">
                        Areas of Expertise
                     </h2>
                     <div className="flex flex-wrap gap-3">
                        {ABOUT_CONTENT.expertise.map((skill) => (
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
                  <Button href={ABOUT_CONTENT.ctaLink} variant="primary">
                     {ABOUT_CONTENT.ctaText}
                  </Button>
               </div>
            </AnimatedSection>
         </Container>
      </div>
   );
}
