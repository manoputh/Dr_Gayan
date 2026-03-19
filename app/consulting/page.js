import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import ConsultingForm from "./ConsultingForm";

const AI_AUDIT_INCLUDED = [
   {
      _id: "inc-1",
      title: "AI System Inventory & Risk Classification",
      description:
         "Map every production AI system, classify risk levels, and identify where compliance obligations are highest.",
      icon: "FaLightbulb",
      features: ["System Register", "Risk Tier Mapping", "Critical-System Prioritization", "Ownership Assignment"],
   },
   {
      _id: "inc-2",
      title: "Model Reliability & Calibration Review",
      description:
         "Validate whether model outputs are stable, reliable, and suitable for operational and compliance expectations.",
      icon: "FaBrain",
      features: [
         "Reliability Testing",
         "Calibration Assessment",
         "Failure Pattern Analysis",
         "Severity-Based Findings",
      ],
   },
   {
      _id: "inc-3",
      title: "Data Drift & Control Gap Analysis",
      description:
         "Identify where data distribution has shifted and where monitoring, quality, and governance controls are missing.",
      icon: "FaDatabase",
      features: ["Drift Detection", "Data Quality Risks", "Monitoring Gaps", "Control Recommendations"],
   },
   {
      _id: "inc-4",
      title: "Explainability & Documentation Readiness",
      description:
         "Assess whether model explanations and documentation can support stakeholder decisions and regulatory scrutiny.",
      icon: "FaCog",
      features: ["Explainability Review", "Documentation Completeness", "Traceability Checks", "Governance Readiness"],
   },
   {
      _id: "inc-5",
      title: "Executive Findings Register & 90-Day Plan",
      description:
         "Deliver a practical, prioritized remediation roadmap with owners, milestones, and measurable outcomes.",
      icon: "FaRobot",
      features: ["Article-Mapped Findings", "Priority Ranking", "Named Owners", "90-Day Execution Roadmap"],
   },
];

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

            {/* What Is Included */}
            <AnimatedSection>
               <div className="max-w-3xl mx-auto text-center mb-14">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">What Is Included</h2>
                  <p className="text-lg text-platinum/70 leading-relaxed">
                     Five audit workstreams that cover technical integrity, governance readiness, and business-focused
                     remediation.
                  </p>
               </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
               {AI_AUDIT_INCLUDED.map((service, index) => (
                  <AnimatedSection key={service._id} delay={index * 100} from="bottom">
                     <ServiceCard service={service} />
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

            {/* CTA */}
            <AnimatedSection>
               <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-electric/5 to-gold/5 border border-slate/20 p-10 rounded-lg mb-20">
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">Book Your AI Audit</h3>
                  <p className="text-steel mb-8 text-lg max-w-2xl mx-auto">
                     Get a clear picture of exposure, prioritized findings, and a practical roadmap your teams can
                     implement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button href="/contact" variant="primary">
                        Book Discovery Call
                     </Button>
                     <Button href="/contact" variant="secondary">
                        Request Audit Scope
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

            {/* Consultation Form */}
            <AnimatedSection>
               <div id="audit-inquiry">
                  <div className="max-w-3xl mx-auto text-center mb-10">
                     <h3 className="text-2xl font-serif font-bold text-white mb-3">Start Your AI Audit Inquiry</h3>
                     <p className="text-steel">Share your context and we will recommend the right audit scope.</p>
                  </div>
                  <ConsultingForm />
               </div>
            </AnimatedSection>
         </Container>
      </div>
   );
}
