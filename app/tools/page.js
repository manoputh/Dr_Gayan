import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import DiagnosticQuiz from "./DiagnosticQuiz";

const DIAGNOSTIC_DIMENSIONS = [
   {
      _id: "d1",
      title: "D1 - System Inventory & Risk Classification",
      description: "Do you know every AI system in production and where high-impact risk obligations apply first?",
      icon: "FaLightbulb",
      features: ["Complete Inventory", "Risk Tier Mapping", "Ownership Visibility"],
   },
   {
      _id: "d2",
      title: "D2 - Behavioural Reliability",
      description: "Are production models calibrated, monitored for drift, and resilient under changing conditions?",
      icon: "FaBrain",
      features: ["Reliability Checks", "Drift Monitoring", "Robustness Signals"],
   },
   {
      _id: "d3",
      title: "D3 - Data Governance & Lineage",
      description: "Can you trace model inputs, data sources, and governance decisions when scrutiny increases?",
      icon: "FaDatabase",
      features: ["Lineage Controls", "Bias Review", "Data Accountability"],
   },
   {
      _id: "d4",
      title: "D4 - Governance Process",
      description:
         "Do you maintain documentation, risk management, and executive ownership for high-impact AI systems?",
      icon: "FaCog",
      features: ["Documentation Coverage", "Risk Process", "Executive Ownership"],
   },
   {
      _id: "d5",
      title: "D5 - Transparency & Explainability",
      description: "Can systems provide meaningful explanations, with human oversight for high-impact outcomes?",
      icon: "FaRobot",
      features: ["Explainability", "Human Oversight", "Decision Transparency"],
   },
];

const SCORE_GUIDANCE = [
   {
      _id: "sg-1",
      title: "Score 0-25: Critical Exposure",
      description: "Material gaps across core controls. Immediate AI Audit scoping is recommended to reduce exposure.",
      icon: "FaLightbulb",
      features: ["Immediate Action", "Risk Concentration", "Executive Attention Required"],
   },
   {
      _id: "sg-2",
      title: "Score 26-40: High Exposure",
      description: "Significant compliance and operational gaps likely exist across multiple dimensions.",
      icon: "FaBrain",
      features: ["Targeted Workstreams", "Prioritized Remediation", "Near-Term Intervention"],
   },
   {
      _id: "sg-3",
      title: "Score 41-58: Moderate Exposure",
      description: "Foundations are present but key controls, documentation, and oversight require strengthening.",
      icon: "FaDatabase",
      features: ["Gap Closure", "Control Hardening", "Structured Improvement"],
   },
   {
      _id: "sg-4",
      title: "Score 59-75: Lower Exposure",
      description: "Posture appears stronger; independent validation and ongoing monitoring are still recommended.",
      icon: "FaCog",
      features: ["Independent Validation", "Board Assurance", "Continuous Monitoring"],
   },
];

export const metadata = {
   title: "Free AI Compliance Diagnostic | AI Audit Readiness",
   description:
      "Complete a free 10-minute AI Compliance Diagnostic across 5 dimensions. Get an instant exposure score and recommended next step.",
};

export default function ToolsPage() {
   return (
      <div className="py-20">
         <Container>
            <AnimatedSection from="none">
               <SectionHeading
                  title="Free AI Compliance Diagnostic"
                  subtitle="Assess AI exposure in 10 minutes across 5 dimensions and receive an instant, business-ready score"
               />
            </AnimatedSection>

            <AnimatedSection>
               <div className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20 mb-20">
                  <h2 className="text-3xl font-serif font-bold text-white mb-6">What This Diagnostic Does</h2>
                  <div className="max-w-4xl text-platinum/75 leading-relaxed space-y-4">
                     <p>This diagnostic provides a rapid view of your AI compliance exposure before a full audit.</p>
                     <p>
                        It does not replace technical validation, but it identifies where risk is most likely
                        concentrated.
                     </p>
                     <p>
                        You receive an immediate score band and clear next-step recommendation aligned to your current
                        posture.
                     </p>
                  </div>
               </div>
            </AnimatedSection>

            <AnimatedSection>
               <div className="max-w-3xl mx-auto text-center mb-14">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">The 5 Dimensions</h2>
                  <p className="text-lg text-platinum/70 leading-relaxed">
                     The same dimensions used in the full AI Audit, adapted into a rapid executive diagnostic.
                  </p>
               </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
               {DIAGNOSTIC_DIMENSIONS.map((dimension, index) => (
                  <AnimatedSection key={dimension._id} delay={index * 80} from="bottom">
                     <ServiceCard service={dimension} />
                  </AnimatedSection>
               ))}
            </div>

            <AnimatedSection>
               <div className="bg-charcoal p-6 md:p-10 rounded-lg border border-slate/20 mb-20">
                  <div className="max-w-3xl mx-auto text-center mb-10">
                     <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                        AI Compliance Diagnostic
                     </h2>
                     <p className="text-lg text-platinum/70 leading-relaxed">
                        15 questions. 5 dimensions. 10 minutes. Instant score with a practical recommendation.
                     </p>
                  </div>
                  <DiagnosticQuiz />
               </div>
            </AnimatedSection>

            <AnimatedSection>
               <div className="max-w-3xl mx-auto text-center mb-14">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">What Your Score Means</h2>
                  <p className="text-lg text-platinum/70 leading-relaxed">
                     Score bands help leadership align on urgency, scope, and the right level of intervention.
                  </p>
               </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
               {SCORE_GUIDANCE.map((item, index) => (
                  <AnimatedSection key={item._id} delay={index * 80} from="bottom">
                     <ServiceCard service={item} />
                  </AnimatedSection>
               ))}
            </div>

            <AnimatedSection>
               <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-electric/5 to-gold/5 border border-slate/20 p-10 rounded-lg">
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">Need Help Interpreting Your Score?</h3>
                  <p className="text-steel mb-8 text-lg max-w-2xl mx-auto">
                     Book a short debrief and get a recommended path to close priority gaps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button href="/contact" variant="primary">
                        Book Score Debrief
                     </Button>
                     <Button href="/consulting" variant="secondary">
                        Explore AI Audit Service
                     </Button>
                  </div>
               </div>
            </AnimatedSection>
         </Container>
      </div>
   );
}
