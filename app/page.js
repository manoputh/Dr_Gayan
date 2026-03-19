import { sanityFetch } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import VideoCard from "@/components/VideoCard";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const HOME_HERO = {
   headline: "AI Compliance Audit Before EU AI Act Enforcement",
   subheadline:
      "In a focused assessment, identify which production AI systems create regulatory and operational exposure, and get a 90-day remediation roadmap.",
   ctaText: "Start AI Compliance Audit",
   ctaLink: "/consulting",
};

const AI_AUDIT_INCLUDED = [
   {
      _id: "audit-1",
      title: "AI System Inventory & Risk Classification",
      description:
         "Map every production AI system, classify risk levels, and identify where compliance obligations apply first.",
      icon: "FaLightbulb",
      features: ["System Register", "Risk Tier Classification", "Scope Prioritization", "Owner Assignment"],
   },
   {
      _id: "audit-2",
      title: "Model Reliability & Calibration Testing",
      description:
         "Validate model reliability under real operating conditions to surface hidden confidence and performance issues.",
      icon: "FaBrain",
      features: ["Reliability Validation", "Calibration Assessment", "Performance Gap Findings", "Severity Ratings"],
   },
   {
      _id: "audit-3",
      title: "Data Drift & Distribution Shift Review",
      description: "Detect where production data has diverged from expected patterns and where controls are required.",
      icon: "FaDatabase",
      features: ["Shift Detection", "Data Stability Checks", "Monitoring Priorities", "Lifecycle Risk Signals"],
   },
   {
      _id: "audit-4",
      title: "Explainability & Documentation Controls",
      description:
         "Review whether explanations, documentation, and decision records are fit for governance and stakeholder scrutiny.",
      icon: "FaCog",
      features: ["Explainability Review", "Documentation Gaps", "Traceability Controls", "Governance Readiness"],
   },
   {
      _id: "audit-5",
      title: "Adversarial Robustness & Remediation Plan",
      description:
         "Stress-test model resilience and deliver a practical remediation plan with sequencing, accountability, and timeline.",
      icon: "FaRobot",
      features: ["Robustness Probing", "Failure Scenarios", "90-Day Remediation Plan", "Executive Findings Register"],
   },
];

const AI_AUDIT_WHY = [
   {
      _id: "why-1",
      title: "Meet the Compliance Deadline",
      description:
         "With EU AI Act enforcement approaching, organizations need clarity on exposure and immediate priorities.",
      icon: "FaLightbulb",
      features: ["Deadline Readiness", "Clear Compliance Scope", "Board-Level Visibility"],
   },
   {
      _id: "why-2",
      title: "Reduce Legal and Operational Risk",
      description:
         "Identify high-risk systems early and reduce the chance of regulatory penalties, service disruption, and reputational damage.",
      icon: "FaBrain",
      features: ["Risk Prioritization", "Control Gaps Identified", "Targeted Remediation"],
   },
   {
      _id: "why-3",
      title: "Turn Findings into Action",
      description:
         "Move from assessment to execution with named owners, practical sequencing, and measurable outcomes.",
      icon: "FaDatabase",
      features: ["90-Day Plan", "Ownership Model", "Execution Milestones"],
   },
];

const AI_AUDIT_FOR = [
   "Companies with AI systems already in production",
   "CTOs, CIOs, and COO leaders accountable for delivery risk",
   "Legal, risk, and compliance teams preparing for EU AI Act obligations",
   "Business units running customer-facing or high-impact AI workflows",
   "Organizations lacking complete AI system inventory and governance controls",
   "Executive teams requiring a clear, defensible compliance plan",
];

const DIAGNOSTIC_HIGHLIGHTS = [
   {
      _id: "diag-1",
      title: "15 Questions in 10 Minutes",
      description: "A fast, executive-friendly diagnostic to estimate AI compliance exposure without a long workshop.",
      icon: "FaLightbulb",
      features: ["No Setup Required", "Clear Risk Snapshot", "Instant Results"],
   },
   {
      _id: "diag-2",
      title: "5 Compliance Dimensions",
      description: "Assess inventory, reliability, governance, documentation, and transparency in one structured flow.",
      icon: "FaBrain",
      features: ["Dimension Scoring", "Gap Visibility", "Priority Signals"],
   },
   {
      _id: "diag-3",
      title: "Actionable Next Step",
      description: "Get a clear recommendation based on score bands and move directly to an audit debrief if needed.",
      icon: "FaDatabase",
      features: ["Risk Band Output", "Recommended Action", "Direct Debrief CTA"],
   },
];

export default async function HomePage() {
   const blogPosts = await sanityFetch({ query: blogPostsQuery }).catch(() => []);

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
                           EU AI Act Urgency · August 2, 2026
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

                     <p className="text-sm text-platinum/60 leading-relaxed max-w-2xl mx-auto">
                        Penalties can reach up to 7% of global annual revenue for serious non-compliance.
                     </p>

                     {/* CTA Buttons */}
                     <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button href={HOME_HERO.ctaLink} variant="primary">
                           {HOME_HERO.ctaText}
                        </Button>
                        <Button href="/contact" variant="secondary">
                           Book Discovery Call
                        </Button>
                     </div>
                  </div>
               </AnimatedSection>
            </Container>
         </section>

         {/* FREE DIAGNOSTIC SECTION */}
         <section className="relative py-32 bg-charcoal">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

            <Container>
               <AnimatedSection>
                  <div className="max-w-3xl mx-auto text-center mb-20">
                     <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="h-[1px] w-12 bg-gold"></div>
                        <span className="text-sm tracking-widest uppercase text-steel font-medium">
                           Free Diagnostic
                        </span>
                        <div className="h-[1px] w-12 bg-gold"></div>
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                        Check Your AI Compliance Exposure
                     </h2>
                     <p className="text-lg text-platinum/70 leading-relaxed">
                        Take the free AI Compliance Diagnostic to identify priority gaps before starting a full audit.
                     </p>
                  </div>
               </AnimatedSection>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {DIAGNOSTIC_HIGHLIGHTS.map((item, index) => (
                     <AnimatedSection key={item._id} delay={index * 100} from="bottom">
                        <ServiceCard service={item} />
                     </AnimatedSection>
                  ))}
               </div>

               <AnimatedSection>
                  <div className="text-center">
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/tools" variant="primary">
                           Start Free Diagnostic
                        </Button>
                        <Button href="/contact" variant="secondary">
                           Book Score Debrief
                        </Button>
                     </div>
                  </div>
               </AnimatedSection>
            </Container>
         </section>

         {/* WHY AI AUDIT SECTION */}
         <section className="relative py-32 bg-charcoal">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

            <Container>
               <AnimatedSection>
                  <div className="max-w-3xl mx-auto text-center mb-20">
                     <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="h-[1px] w-12 bg-gold"></div>
                        <span className="text-sm tracking-widest uppercase text-steel font-medium">Why AI Audit</span>
                        <div className="h-[1px] w-12 bg-gold"></div>
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Why AI Audit Matters</h2>
                     <p className="text-lg text-platinum/70 leading-relaxed">
                        AI compliance urgency is now a business risk issue. Audit first, then remediate with speed and
                        control.
                     </p>
                  </div>
               </AnimatedSection>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {AI_AUDIT_WHY.map((item, index) => (
                     <AnimatedSection key={item._id} delay={index * 100} from="bottom">
                        <ServiceCard service={item} />
                     </AnimatedSection>
                  ))}
               </div>

               <AnimatedSection>
                  <div className="max-w-5xl mx-auto text-center">
                     <h3 className="text-3xl font-serif font-bold text-white mb-8">Who It Is For</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {AI_AUDIT_FOR.map((audience) => (
                           <div
                              key={audience}
                              className="bg-obsidian/50 border border-slate/20 rounded-lg p-4 text-sm text-platinum/80 leading-relaxed">
                              {audience}
                           </div>
                        ))}
                     </div>
                  </div>
               </AnimatedSection>
            </Container>
         </section>

         {/* WHAT IS INCLUDED SECTION */}
         {AI_AUDIT_INCLUDED.length > 0 && (
            <section className="relative py-32 bg-obsidian">
               <Container>
                  {/* Section intro */}
                  <AnimatedSection>
                     <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                           <div className="h-[1px] w-12 bg-gold"></div>
                           <span className="text-sm tracking-widest uppercase text-steel font-medium">Audit Scope</span>
                           <div className="h-[1px] w-12 bg-gold"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">What Is Included</h2>
                        <p className="text-lg text-platinum/70 leading-relaxed">
                           Five technical workstreams, one executive findings register, and a remediation plan your
                           teams can execute.
                        </p>
                     </div>
                  </AnimatedSection>

                  {/* Included items grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {AI_AUDIT_INCLUDED.map((service, index) => (
                        <AnimatedSection key={service._id} delay={index * 100} from="bottom">
                           <ServiceCard service={service} />
                        </AnimatedSection>
                     ))}
                  </div>

                  {/* Link to full audit details */}
                  <div className="text-center mt-16">
                     <Link
                        href="/consulting"
                        className="inline-flex items-center text-sm tracking-wide uppercase text-platinum hover:text-white transition-colors group">
                        <span>Review Full Audit Methodology</span>
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
                           Compliance Insights & AI Governance
                        </h2>
                        <p className="text-lg text-platinum/70 leading-relaxed">
                           Practical updates on AI compliance, governance controls, and implementation risk.
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
                        Ready to Book Your AI Compliance Audit?
                     </h2>
                     <p className="text-xl text-platinum/70 max-w-2xl mx-auto leading-relaxed">
                        Get a clear risk picture, article-mapped findings, and a 90-day remediation roadmap.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button href="/contact" variant="primary">
                           Book Discovery Call
                        </Button>
                        <Button href="/consulting" variant="secondary">
                           See Audit Scope
                        </Button>
                     </div>
                  </div>
               </AnimatedSection>
            </Container>
         </section>
      </>
   );
}
