import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

const ABOUT_CONTENT = {
   name: "Gayan de Silva, PhD",
   title: "The technical half of your compliance team.",
   credentials:
      "PhD AI/ML | 20 years in production AI | IBM | Cisco | 4Finance | Zeta Global | 17 countries | SRH Hamburg",
   philosophy:
      "I help organizations build AI systems that are documented, tested, monitored, and accountable from design through production.",
   profileHighlights: [
      {
         label: "Qualification",
         value: "PhD AI/ML | Brno 2012",
      },
      {
         label: "Patent",
         value: "US12073438B2",
      },
      {
         label: "Current Role",
         value: "Professor | SRH Hamburg",
      },
      {
         label: "GDPR Track Record",
         value: "18 months early | 17 countries",
      },
   ],
   keyNumbers: [
      {
         value: "45+",
         label: "Enterprise clients across DACH, Nordics, UK, and US",
      },
      {
         value: "17",
         label: "Countries where AI systems have been deployed in production",
      },
      {
         value: "200M",
         label: "Daily AI predictions running in production systems I built",
      },
      {
         value: "€20M",
         label: "Documented annual cost savings delivered to clients",
      },
   ],
   backgroundHeading: "Enterprise AI operator who also teaches.",
   bio: [
      "I make enterprise AI work - not as pilots, but in production. I have built AI functions from zero at IBM, Cisco, 4Finance, and Zeta Global - delivering outcomes across cybersecurity, fintech, manufacturing, and enterprise analytics in 17 countries.",
      "When multi-million euro AI programmes have stalled - over budget, stuck in pilot, or misaligned with the business - I am the executive called in to rescue them. I have the technical credibility to never be misled by vendors or engineering teams, and the executive experience to drive transformation at board level.",
      "I work with European organisations navigating EU AI Act compliance - where technical depth and regulatory understanding must coexist, and rarely do. I implemented GDPR 18 months early across 17 countries. I understand what regulatory readiness actually takes.",
      "When the EU AI Act was published, my reaction was not frustration. It was: finally. A regulation that requires what should have been done anyway - documented, tested, monitored, accountable.",
      "As Professor of AI at SRH University Hamburg, I research and teach responsible AI, EU AI Act compliance, and production ML deployment to industry practitioners - because the gap between what AI can do and what regulated organisations can actually deploy remains the defining problem of enterprise AI.",
   ],
   careerTimeline: [
      {
         period: "2025-Now",
         role: "Professor of AI & Program Director",
         place: "SRH University Hamburg",
      },
      {
         period: "2019-2024",
         role: "Senior Director, Data Science",
         place: "Zeta Global | Prague",
      },
      {
         period: "2016-2019",
         role: "Head of Data Science",
         place: "4Finance | 17 countries",
      },
      {
         period: "2012-2016",
         role: "Lead Research Scientist",
         place: "Cisco Systems",
      },
      {
         period: "2008-2012",
         role: "Lead IT Specialist - AI/ML",
         place: "IBM",
      },
   ],
   expertise: [
      "EU AI Act Compliance",
      "AI Governance & Audit",
      "Machine Learning / MLOps",
      "Responsible AI",
      "Natural Language Processing",
      "Predictive Analytics",
      "Model Calibration & Testing",
      "Data Governance",
      "GDPR Compliance",
      "AI Risk Management",
      "Computer Vision",
      "Deep Learning",
   ],
   expertiseIntro:
      "20 years of production AI across regulated industries, with the regulatory knowledge to govern what gets built.",
   academicHeading: "Research and teaching at SRH University Hamburg.",
   academicIntro:
      "The gap between what AI can do and what regulated, accountable organisations can actually deploy and scale is the defining problem of enterprise AI. My research and teaching address this gap directly.",
   academicWork: [
      {
         tag: "Module",
         title: "Responsible AI & Data Ethics",
         detail:
            "EU AI Act compliance, AI governance frameworks, bias and fairness, explainability, and the ethical dimensions of production AI systems. Taught to MSc Applied Data Science students.",
      },
      {
         tag: "Module",
         title: "Applied Machine Learning",
         detail:
            "Production ML systems, MLOps, model deployment, monitoring, and lifecycle management. Bridging research-grade models to enterprise-grade systems.",
      },
      {
         tag: "Research Programme",
         title: "UAGF - Unified AI Governance Framework",
         detail:
            "Active thesis research programme developing automated AI governance maturity scoring, multi-agent EU AI Act auditing, and explainability toolkits. Patent-pending methodology.",
      },
      {
         tag: "Patent",
         title: "US Patent US12073438B2",
         detail:
            "Granted US patent in machine learning systems. Demonstrates research-grade technical depth alongside 20 years of enterprise production deployment.",
      },
   ],
   testimonials: [
      {
         quote: '"Gayan delivered a clear, strategic roadmap for AI-driven transformation in our factory. His deep expertise and collaborative approach were invaluable."',
         name: "Tariq Miflal",
         role: "CEO, Lumala",
      },
      {
         quote: '"Dr. Gayan de Silva\'s expertise in AI and Machine Learning has the power to transform any business operation. His ability to bridge technical depth with strategic context is rare."',
         name: "Jaroslav Holy",
         role: "Tech Innovator",
      },
      {
         quote: '"Working with Prof. Gayan de Silva is a true game-changer. His track record - from IBM to Zeta Global - combined with academic rigour makes him uniquely positioned."',
         name: "Pawan Pathak",
         role: "Senior Manager, Zeta Global",
      },
   ],
   ctaText: "Book a Discovery Call",
   ctaLink: "/contact",
   portrait:
      "https://cdn.sanity.io/images/01snurzm/production/60f13f7c03c0aacca7985b91c4b2793cbac6783f-770x870.jpg?rect=0,50,770,770&w=512&h=512",
};

export const metadata = {
   title: "About | Gayan de Silva, PhD",
   description:
      "Enterprise AI executive advisor focused on AI governance, production systems, and EU AI Act readiness.",
};

export default function AboutPage() {
   const hasPortrait = Boolean(ABOUT_CONTENT.portrait);

   return (
      <div className="py-16 md:py-20">
         <Container>
            {/* Hero / Intro */}
            <AnimatedSection>
               <div className="max-w-5xl mx-auto mb-16 md:mb-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center bg-charcoal/70 border border-slate/20 rounded-lg p-6 md:p-10">
                     {hasPortrait && (
                        <div className="md:col-span-4 flex flex-col items-center md:items-start">
                           <div className="w-52 h-60 md:w-64 md:h-72 rounded-lg overflow-hidden border border-slate/30 bg-obsidian">
                              <img
                                 src={ABOUT_CONTENT.portrait}
                                 alt={ABOUT_CONTENT.name}
                                 className="w-full h-full object-cover object-top"
                              />
                           </div>
                           <div className="mt-4 w-full max-w-sm grid grid-cols-1 gap-2">
                              {ABOUT_CONTENT.profileHighlights.map((item) => (
                                 <div
                                    key={item.label}
                                    className="bg-obsidian/50 border border-slate/20 rounded-md px-3 py-2">
                                    <p className="text-[10px] uppercase tracking-[0.12em] text-electric/85 mb-1">
                                       {item.label}
                                    </p>
                                    <p className="text-xs text-platinum/85 leading-relaxed">{item.value}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     <div className={hasPortrait ? "md:col-span-8" : "md:col-span-12 text-center"}>
                        <p className="text-xs uppercase tracking-[0.16em] text-electric/80 mb-3">About</p>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
                           {ABOUT_CONTENT.name}
                        </h1>
                        <p className="text-lg md:text-xl text-platinum/90 leading-relaxed mb-4">
                           {ABOUT_CONTENT.title}
                        </p>
                        <p className="text-xs md:text-sm uppercase tracking-[0.08em] text-steel mb-6 leading-relaxed">
                           {ABOUT_CONTENT.credentials}
                        </p>

                        <blockquote className="border-l-2 border-electric/35 pl-5 text-platinum/85 leading-7 md:leading-8">
                           {ABOUT_CONTENT.philosophy}
                        </blockquote>
                     </div>
                  </div>
               </div>
            </AnimatedSection>

            {/* Key Numbers */}
            <AnimatedSection delay={50}>
               <div className="max-w-5xl mx-auto mb-16 md:mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ABOUT_CONTENT.keyNumbers.map((metric) => (
                     <div key={metric.value} className="bg-charcoal border border-slate/20 rounded-lg p-6 text-center">
                        <p className="text-3xl font-semibold text-white leading-none">{metric.value}</p>
                        <p className="text-sm text-steel mt-3 leading-6">{metric.label}</p>
                     </div>
                  ))}
               </div>
            </AnimatedSection>

            {/* Background Narrative */}
            <AnimatedSection delay={100}>
               <div className="max-w-4xl mx-auto mb-16 md:mb-20">
                  <div className="bg-charcoal p-8 md:p-10 rounded-lg border border-slate/20">
                     <p className="text-xs uppercase tracking-[0.16em] text-electric/80 mb-3">Background</p>
                     <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 tracking-tight">
                        {ABOUT_CONTENT.backgroundHeading}
                     </h2>
                     <div className="text-base md:text-lg text-platinum/85 leading-8 space-y-6">
                        {ABOUT_CONTENT.bio.map((paragraph) => (
                           <p key={paragraph}>{paragraph}</p>
                        ))}
                     </div>
                  </div>
               </div>
            </AnimatedSection>

            {/* Career Timeline */}
            <AnimatedSection delay={200}>
               <div className="max-w-4xl mx-auto mb-16 md:mb-20">
                  <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">Career Timeline</h2>
                  <div className="space-y-4">
                     {ABOUT_CONTENT.careerTimeline.map((item) => (
                        <div
                           key={`${item.period}-${item.role}`}
                           className="bg-charcoal p-5 rounded-lg border border-slate/20">
                           <p className="text-xs uppercase tracking-[0.12em] text-electric/85 mb-2">{item.period}</p>
                           <h3 className="text-platinum/95 font-medium text-base leading-snug">{item.role}</h3>
                           <p className="text-sm text-steel mt-1 leading-relaxed">{item.place}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </AnimatedSection>

            {/* Expertise & Academic Credibility */}
            <AnimatedSection delay={250}>
               <div className="max-w-5xl mx-auto mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div>
                     <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">Areas of Expertise</h2>
                     <p className="text-sm text-platinum/75 leading-7 mb-6">{ABOUT_CONTENT.expertiseIntro}</p>
                     <div className="flex flex-wrap gap-2.5">
                        {ABOUT_CONTENT.expertise.map((skill) => (
                           <span
                              key={skill}
                              className="px-4 py-2 bg-charcoal border border-slate/20 rounded-md text-sm text-platinum/85 leading-relaxed cursor-default">
                              {skill}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div>
                     <p className="text-xs uppercase tracking-[0.16em] text-electric/80 mb-3">Academic Work</p>
                     <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                        {ABOUT_CONTENT.academicHeading}
                     </h2>
                     <p className="text-sm text-platinum/75 leading-7 mb-6">{ABOUT_CONTENT.academicIntro}</p>
                     <div className="space-y-4">
                        {ABOUT_CONTENT.academicWork.map((item) => (
                           <div key={item.title} className="bg-charcoal p-5 rounded-lg border border-slate/20">
                              <p className="text-xs uppercase tracking-[0.12em] text-electric/85 mb-2">{item.tag}</p>
                              <h3 className="text-base font-medium text-white mb-2">{item.title}</h3>
                              <p className="text-sm text-platinum/85 leading-7">{item.detail}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </AnimatedSection>

            {/* Testimonials */}
            <AnimatedSection delay={280}>
               <div className="max-w-5xl mx-auto mb-16 md:mb-20">
                  <p className="text-xs uppercase tracking-[0.16em] text-electric/80 mb-3">What Clients Say</p>
                  <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">Trusted across 17 countries</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {ABOUT_CONTENT.testimonials.map((item) => (
                        <div key={item.name} className="bg-charcoal border border-slate/20 rounded-lg p-5">
                           <p className="text-electric/90 text-sm mb-3">★★★★★</p>
                           <p className="text-sm text-platinum/85 leading-7 mb-4">{item.quote}</p>
                           <p className="text-sm font-medium text-white">{item.name}</p>
                           <p className="text-xs text-steel mt-1">{item.role}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={300}>
               <div className="max-w-3xl mx-auto text-center bg-charcoal border border-slate/20 p-8 md:p-10 rounded-lg">
                  <h3 className="text-2xl font-semibold text-white mb-3">Let&apos;s Work Together</h3>
                  <p className="text-platinum/80 leading-7 mb-6">
                     If AI delivery, governance, and compliance pressure are converging in your organization, we can map
                     a clear path forward.
                  </p>
                  <Button href={ABOUT_CONTENT.ctaLink} variant="primary">
                     {ABOUT_CONTENT.ctaText}
                  </Button>
               </div>
            </AnimatedSection>
         </Container>
      </div>
   );
}
