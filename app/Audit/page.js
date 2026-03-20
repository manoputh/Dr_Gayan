import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

const AI_AUDIT_WHY = [
   {
      _id: "why-1",
      title: "Regulatory Exposure Is Increasing",
      description:
         "Enforcement timelines are approaching and organizations need evidence-backed controls for AI in production.",
      icon: "FaLightbulb",
      features: ["Deadline Readiness", "Compliance Visibility", "Board-Level Reporting"],
   },
   {
      _id: "why-2",
      title: "Risk Is Both Legal and Operational",
      description:
         "Unchecked AI systems create penalties, service failures, and reputational risk that can impact core business outcomes.",
      icon: "FaBrain",
      features: ["Legal Risk Reduction", "Operational Resilience", "Trust Protection"],
   },
   {
      _id: "why-3",
      title: "Executives Need Actionable Clarity",
      description: "AI Audit turns technical findings into clear decisions, priorities, and accountable next steps.",
      icon: "FaDatabase",
      features: ["Decision-Ready Findings", "Aligned Priorities", "Execution Momentum"],
   },
];

const AI_AUDIT_PROCESS = [
   {
      step: "01",
      title: "Discovery & Scope",
      description: "Confirm systems in scope, business priorities, and compliance context.",
   },
   {
      step: "02",
      title: "Technical Assessment",
      description: "Run targeted reliability, drift, governance, and control assessments.",
   },
   {
      step: "03",
      title: "Findings & Prioritization",
      description: "Consolidate findings by severity, exposure, and business impact.",
   },
   {
      step: "04",
      title: "Remediation Roadmap",
      description: "Deliver a 90-day plan with owners, sequencing, and milestones.",
   },
];

const AI_AUDIT_INVESTMENT = [
   {
      _id: "inv-1",
      title: "AI Act Readiness Scan",
      details: "From € 8,000 - scope depends on number of AI systems - 2 days",
      price: "From € 8,000",
   },
   {
      _id: "inv-2",
      title: "Full Compliance Audit",
      details: "From € 25,000 - full technical audit across all 5 dimensions - 4 weeks",
      price: "From € 25,000",
   },
   {
      _id: "inv-3",
      title: "Ongoing Compliance Retainer",
      details: "From € 4,000/month - post-audit monitoring and ongoing advisory",
      price: "From € 4,000/mo",
   },
];

const DIAGNOSTIC_BENEFITS = [
   "15 questions across 5 compliance dimensions",
   "Instant score band and exposure summary",
   "Clear recommendation for your next step",
];

export const metadata = {
   title: "AI Audit Service | Compliance & Risk Readiness",
   description:
      "Dedicated AI Audit service for organizations with AI in production. Identify risks, verify controls, and execute a 90-day remediation roadmap.",
};

export default function ConsultingPage() {
   return (
      <div className="py-20">
         <Container>
            {/* Page Header */}
            <AnimatedSection from="none">
               <SectionHeading
                  title="AI Audit Service"
                  subtitle="A dedicated assessment for organizations that need clear compliance, risk, and remediation priorities for AI in production"
               />
            </AnimatedSection>

            {/* What AI Audit Is */}
            <AnimatedSection>
               <div className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20 mb-20">
                  <h2 className="text-3xl font-serif font-bold mb-6 text-white">What an AI Audit Is</h2>
                  <div className="max-w-4xl space-y-4 text-platinum/75 leading-relaxed">
                     <p>AI Audit is a focused technical and governance assessment of your production AI systems.</p>
                     <p>
                        It shows where risk and compliance gaps exist today, how severe they are, and what to fix first.
                     </p>
                     <p>
                        The output is an executive findings register and a practical 90-day roadmap your teams can
                        execute.
                     </p>
                  </div>
               </div>
            </AnimatedSection>

            {/* Why Companies Need It */}
            <AnimatedSection>
               <div className="max-w-3xl mx-auto text-center mb-14">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Why Companies Need It</h2>
                  <p className="text-lg text-platinum/70 leading-relaxed">
                     AI exposure is a business issue. Leaders need clear risk visibility, defensible controls, and
                     measurable remediation.
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

            {/* Process / Steps */}
            <AnimatedSection>
               <div className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20 mb-20">
                  <h2 className="text-3xl font-serif font-bold mb-8 text-center text-white">Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {AI_AUDIT_PROCESS.map((item) => (
                        <div
                           key={item.step}
                           className="bg-obsidian/50 border border-slate/20 rounded-lg p-5 transition-all duration-300 hover:border-electric/30 hover:-translate-y-1">
                           <div className="text-electric text-sm font-semibold tracking-wide mb-3">
                              Step {item.step}
                           </div>
                           <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                           <p className="text-sm text-platinum/70 leading-relaxed">{item.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </AnimatedSection>

            {/* Investment */}
            <AnimatedSection>
               <div
                  id="investment"
                  className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20 mb-20 scroll-mt-28">
                  <div className="max-w-3xl mx-auto text-center mb-10">
                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Investment</h2>
                     <p className="text-platinum/70 leading-relaxed">
                        Select the engagement model that matches your current exposure and desired speed.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                     {AI_AUDIT_INVESTMENT.map((item) => (
                        <div
                           key={item._id}
                           className="bg-obsidian/50 border border-slate/20 rounded-lg p-6 transition-all duration-300 hover:border-electric/30 hover:-translate-y-1">
                           <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                           <p className="text-sm text-platinum/75 leading-relaxed mb-4">{item.details}</p>
                           <p className="text-lg font-semibold text-electric">{item.price}</p>
                        </div>
                     ))}
                  </div>

                  <div className="text-center">
                     <p className="text-sm text-steel mb-6">
                        Final investment is confirmed during discovery based on systems, risk profile, and delivery
                        scope.
                     </p>
                     <Button href="/contact" variant="primary">
                        Book Discovery Call
                     </Button>
                  </div>
               </div>
            </AnimatedSection>

            {/* Free Diagnostic Bridge */}
            <AnimatedSection>
               <div className="bg-charcoal p-8 md:p-10 rounded-lg border border-slate/20 mb-20">
                  <div className="max-w-4xl mx-auto text-center">
                     <h3 className="text-2xl font-serif font-bold text-white mb-4">
                        Not Sure About Your Current Exposure?
                     </h3>
                     <p className="text-platinum/70 mb-8 leading-relaxed">
                        Start with the Free AI Compliance Diagnostic and then book an audit discussion based on your
                        score.
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {DIAGNOSTIC_BENEFITS.map((item) => (
                           <div
                              key={item}
                              className="bg-obsidian/50 border border-slate/20 rounded-lg p-4 text-sm text-platinum/80 leading-relaxed">
                              {item}
                           </div>
                        ))}
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/tools" variant="primary">
                           Start Free Diagnostic
                        </Button>
                        <Button href="/contact" variant="secondary">
                           Book Score Debrief
                        </Button>
                     </div>
                  </div>
               </div>
            </AnimatedSection>
         </Container>
      </div>
   );
}
