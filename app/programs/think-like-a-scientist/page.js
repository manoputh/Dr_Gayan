import { sanityFetch } from "@/lib/sanity";
import { programBySlugQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata = {
   title: "Think Like a Scientist | Dr. Gayan De Silva",
   description:
      "A structured course program designed to build scientific thinking for professionals, leaders, and lifelong learners.",
};

export default async function ThinkLikeAScientistPage() {
   const program = await sanityFetch({
      query: programBySlugQuery,
      params: { slug: "think-like-a-scientist" },
   }).catch(() => null);

   // Show a useful fallback if the program hasn't been created in Sanity yet
   const title = program?.title || "Think Like a Scientist";
   const description =
      program?.description ||
      "A structured course series designed to build scientific thinking for professionals, leaders, and lifelong learners.";
   const targetAudience = program?.targetAudience?.length
      ? program.targetAudience
      : [
           "Mid-career professionals seeking a strategic edge",
           "Engineering and product leaders",
           "Entrepreneurs making data-driven decisions",
           "Lifelong learners passionate about critical thinking",
        ];
   const benefits = program?.benefits?.length
      ? program.benefits
      : [
           "Develop rigorous analytical frameworks",
           "Make evidence-based decisions with confidence",
           "Communicate complex ideas clearly",
           "Apply scientific methodology to business challenges",
        ];
   const enrollmentEnabled = program?.enrollmentEnabled ?? false;
   const ctaText = program?.ctaText || "Enroll Now";
   const status = program?.status || "upcoming";

   return (
      <div className="py-20">
         <Container>
            {/* ── Hero / Program Header ────────────────────────── */}
            <AnimatedSection from="none">
               <div className="max-w-4xl mx-auto text-center mb-20">
                  {/* Status badge */}
                  <span
                     className={`inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6
                     ${status === "active" ? "bg-green-900/30 text-green-400 border border-green-700/40" : ""}
                     ${status === "upcoming" ? "bg-electric/10 text-electric border border-electric/30" : ""}
                     ${status === "archived" ? "bg-slate/20 text-steel border border-slate/30" : ""}
                  `}>
                     {status === "active" ? "Now Enrolling" : status === "upcoming" ? "Coming Soon" : "Archived"}
                  </span>

                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-platinum to-white bg-clip-text text-transparent leading-tight">
                     {title}
                  </h1>
                  <p className="text-lg md:text-xl text-steel max-w-2xl mx-auto leading-relaxed">{description}</p>
               </div>
            </AnimatedSection>

            {/* ── Program Vision (rich text) ───────────────────── */}
            {program?.longDescription && (
               <AnimatedSection delay={100}>
                  <div className="max-w-4xl mx-auto mb-20">
                     <div className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20">
                        <div className="prose prose-invert prose-lg max-w-none prose-p:text-platinum/80 prose-headings:text-white">
                           <PortableText value={program.longDescription} />
                        </div>
                     </div>
                  </div>
               </AnimatedSection>
            )}

            {/* ── Who It's For + Benefits ──────────────────────── */}
            <AnimatedSection delay={200}>
               <div className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Who It's For */}
                  <div>
                     <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight">Who It&apos;s For</h2>
                     <ul className="space-y-3">
                        {targetAudience.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-platinum/80">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-electric flex-shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                     <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight">
                        What You&apos;ll Gain
                     </h2>
                     <ul className="space-y-3">
                        {benefits.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-platinum/80">
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </AnimatedSection>

            {/* ── Enrollment CTA ───────────────────────────────── */}
            <AnimatedSection delay={400}>
               <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-electric/5 to-gold/5 border border-slate/20 p-10 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Ready to Think Differently?</h3>
                  <p className="text-steel mb-6">
                     {status === "active"
                        ? "Enrollment is open. Secure your spot today."
                        : "Join the waitlist to be notified when enrollment opens."}
                  </p>
                  <Button href="/contact" variant="primary">
                     {status === "active" ? ctaText : "Join the Waitlist"}
                  </Button>
               </div>
            </AnimatedSection>
         </Container>
      </div>
   );
}
