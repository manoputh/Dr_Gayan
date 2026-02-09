import { sanityFetch, urlFor } from "@/lib/sanity";
import { programBySlugQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";

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
   const courses = program?.courses || [];
   const enrollmentEnabled = program?.enrollmentEnabled ?? false;
   const ctaText = program?.ctaText || "Enroll Now";
   const status = program?.status || "upcoming";

   return (
      <div className="py-20">
         <Container>
            {/* ── Hero / Program Header ────────────────────────── */}
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

               <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-electric to-gold bg-clip-text text-transparent leading-tight">
                  {title}
               </h1>
               <p className="text-lg md:text-xl text-steel max-w-2xl mx-auto leading-relaxed">{description}</p>
            </div>

            {/* ── Program Vision (rich text) ───────────────────── */}
            {program?.longDescription && (
               <div className="max-w-4xl mx-auto mb-20">
                  <div className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20">
                     <div className="prose prose-invert prose-lg max-w-none prose-p:text-platinum/80 prose-headings:text-white">
                        <PortableText value={program.longDescription} />
                     </div>
                  </div>
               </div>
            )}

            {/* ── Who It's For + Benefits ──────────────────────── */}
            <div className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Who It's For */}
               <div>
                  <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Who It&apos;s For</h2>
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
                  <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">What You&apos;ll Gain</h2>
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

            {/* ── Courses Under This Program ───────────────────── */}
            <div className="max-w-5xl mx-auto mb-20">
               <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
                  Courses{courses.length > 0 ? ` (${courses.length})` : ""}
               </h2>

               {courses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {courses.map((course) => (
                        <div
                           key={course._id}
                           className="bg-charcoal rounded-lg border border-slate/20 overflow-hidden hover:border-electric/30 transition-colors">
                           {/* Course image */}
                           {course.image && (
                              <div className="h-40 overflow-hidden">
                                 <img
                                    src={urlFor(course.image).width(600).height(300).url()}
                                    alt={course.image.alt || course.title}
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           )}

                           <div className="p-6">
                              <div className="flex items-center gap-3 mb-3">
                                 {course.level && (
                                    <span className="text-xs font-medium px-2 py-0.5 bg-electric/10 text-electric rounded">
                                       {course.level}
                                    </span>
                                 )}
                                 {course.duration && <span className="text-xs text-steel">{course.duration}</span>}
                              </div>

                              <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                              <p className="text-sm text-steel leading-relaxed mb-4">{course.description}</p>

                              <div className="flex items-center justify-between">
                                 <span className="text-sm font-semibold text-gold">
                                    {course.price ? `$${course.price}` : "Free"}
                                 </span>
                                 {course.enrollmentEnabled && course.slug?.current && (
                                    <Link
                                       href={`/courses/${course.slug.current}`}
                                       className="text-sm text-electric hover:text-electric-muted transition-colors font-medium">
                                       Learn More &rarr;
                                    </Link>
                                 )}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="bg-charcoal rounded-lg border border-slate/20 p-10 text-center">
                     <p className="text-steel">Courses will be announced soon. Stay tuned!</p>
                  </div>
               )}
            </div>

            {/* ── Enrollment CTA ───────────────────────────────── */}
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-electric/5 to-gold/5 border border-slate/20 p-10 rounded-lg">
               <h3 className="text-2xl font-bold text-white mb-3">Ready to Think Differently?</h3>
               <p className="text-steel mb-6">
                  {status === "active"
                     ? "Enrollment is open. Secure your spot today."
                     : "Join the waitlist to be notified when enrollment opens."}
               </p>
               <Button href="/contact" variant="primary">
                  {status === "active" ? ctaText : "Join the Waitlist"}
               </Button>
            </div>
         </Container>
      </div>
   );
}
