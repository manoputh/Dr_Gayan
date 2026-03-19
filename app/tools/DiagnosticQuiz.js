"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";

const DIMENSIONS = [
   "D1 - System Inventory",
   "D2 - Behavioural Reliability",
   "D3 - Data Governance",
   "D4 - Governance Process",
   "D5 - Transparency",
];

const QUESTIONS = [
   {
      dimension: 0,
      text: "Do you have a documented inventory of every AI system currently in production?",
      options: [
         { label: "No, we do not know exactly what is in production.", value: 1 },
         { label: "Partial inventory exists but is incomplete.", value: 2 },
         { label: "Inventory exists but is not risk-classified.", value: 3 },
         { label: "Complete inventory with ownership and status.", value: 5 },
      ],
   },
   {
      dimension: 0,
      text: "Have your AI systems been classified against high-impact or high-risk categories?",
      options: [
         { label: "No classification has been performed.", value: 1 },
         { label: "Awareness exists but no formal classification.", value: 2 },
         { label: "Classification is partial for key systems.", value: 3 },
         { label: "Classification is complete and documented.", value: 5 },
      ],
   },
   {
      dimension: 0,
      text: "Do you know your obligations for third-party AI systems you deploy?",
      options: [
         { label: "No, these obligations are not mapped.", value: 1 },
         { label: "General awareness only.", value: 2 },
         { label: "Mapped for some critical tools.", value: 3 },
         { label: "Mapped and assigned with clear owners.", value: 5 },
      ],
   },
   {
      dimension: 1,
      text: "Have reliability and calibration checks been performed on production models?",
      options: [
         { label: "Never tested.", value: 1 },
         { label: "Ad hoc checks only.", value: 2 },
         { label: "Tested at deployment but not continuously.", value: 3 },
         { label: "Regular monitoring with thresholds and alerts.", value: 5 },
      ],
   },
   {
      dimension: 1,
      text: "Are your models monitored for data drift and performance shift over time?",
      options: [
         { label: "No drift monitoring in place.", value: 1 },
         { label: "Manual spot checks only.", value: 2 },
         { label: "Basic monitoring, inconsistent coverage.", value: 3 },
         { label: "Automated monitoring with clear escalation paths.", value: 5 },
      ],
   },
   {
      dimension: 1,
      text: "Have you tested model robustness under stress or adversarial conditions?",
      options: [
         { label: "No robustness testing.", value: 1 },
         { label: "Awareness only, no testing program.", value: 2 },
         { label: "One-time testing completed.", value: 3 },
         { label: "Regular robustness testing integrated in governance.", value: 5 },
      ],
   },
   {
      dimension: 2,
      text: "Is training and production data lineage documented end to end?",
      options: [
         { label: "No formal lineage documentation.", value: 1 },
         { label: "Informal notes only.", value: 2 },
         { label: "Documented for some critical models.", value: 3 },
         { label: "Full lineage documentation across systems.", value: 5 },
      ],
   },
   {
      dimension: 2,
      text: "Have high-impact datasets been assessed for bias and representativeness?",
      options: [
         { label: "No formal bias assessment.", value: 1 },
         { label: "Informal reviews only.", value: 2 },
         { label: "Partial assessments completed.", value: 3 },
         { label: "Structured assessments with evidence records.", value: 5 },
      ],
   },
   {
      dimension: 2,
      text: "Are data protection and impact assessments current for relevant AI systems?",
      options: [
         { label: "No relevant assessments completed.", value: 1 },
         { label: "General assessments exist but not AI-specific.", value: 2 },
         { label: "Some AI systems have updated assessments.", value: 3 },
         { label: "Assessments are complete and maintained.", value: 5 },
      ],
   },
   {
      dimension: 3,
      text: "Do high-impact systems have complete technical documentation?",
      options: [
         { label: "Documentation is missing or minimal.", value: 1 },
         { label: "Basic model notes only.", value: 2 },
         { label: "Documentation exists for some systems.", value: 3 },
         { label: "Complete, auditable documentation for all relevant systems.", value: 5 },
      ],
   },
   {
      dimension: 3,
      text: "Is there a formal risk management process for AI systems throughout lifecycle?",
      options: [
         { label: "No formal process.", value: 1 },
         { label: "General risk register only.", value: 2 },
         { label: "System-level process exists but is not continuous.", value: 3 },
         { label: "Continuous process with regular reviews.", value: 5 },
      ],
   },
   {
      dimension: 3,
      text: "Is executive ownership for AI compliance formally assigned?",
      options: [
         { label: "No clear owner.", value: 1 },
         { label: "Informal ownership only.", value: 2 },
         { label: "Named owner without formal mandate.", value: 3 },
         { label: "Named owner with mandate and accountability.", value: 5 },
      ],
   },
   {
      dimension: 4,
      text: "Can your AI systems provide meaningful explanations for key decisions?",
      options: [
         { label: "No explanations available.", value: 1 },
         { label: "Limited indicators only.", value: 2 },
         { label: "Explanations available for some models.", value: 3 },
         { label: "Validated explainability approach is in place.", value: 5 },
      ],
   },
   {
      dimension: 4,
      text: "Is human oversight formally defined for high-impact decisions?",
      options: [
         { label: "No formal human oversight.", value: 1 },
         { label: "Informal review only.", value: 2 },
         { label: "Defined in policy but inconsistently enforced.", value: 3 },
         { label: "Formally enforced oversight model.", value: 5 },
      ],
   },
   {
      dimension: 4,
      text: "Can leadership clearly report current AI compliance posture?",
      options: [
         { label: "No clear board-level visibility.", value: 1 },
         { label: "General awareness but no structured reporting.", value: 2 },
         { label: "Periodic reporting with known gaps.", value: 3 },
         { label: "Clear and regular compliance reporting in place.", value: 5 },
      ],
   },
];

const SCORE_BANDS = [
   {
      max: 25,
      label: "Critical Exposure",
      colorClass: "text-red-400",
      description: "Significant gaps across core controls. Prioritize immediate scoping and remediation planning.",
      action: "Book a full AI Audit scoping call now.",
   },
   {
      max: 40,
      label: "High Exposure",
      colorClass: "text-orange-400",
      description: "Material gaps are likely across multiple dimensions and need focused intervention.",
      action: "Start with targeted AI Audit workstreams within 30 days.",
   },
   {
      max: 58,
      label: "Moderate Exposure",
      colorClass: "text-amber-400",
      description: "Foundation exists, but important risk and documentation controls require strengthening.",
      action: "Run a focused gap-closure plan with defined owners.",
   },
   {
      max: 75,
      label: "Lower Exposure",
      colorClass: "text-green-400",
      description: "Your posture appears stronger, but independent validation is still valuable for assurance.",
      action: "Use AI Audit as validation and continuous control check.",
   },
];

function getScoreBand(score) {
   return SCORE_BANDS.find((band) => score <= band.max) || SCORE_BANDS[SCORE_BANDS.length - 1];
}

export default function DiagnosticQuiz() {
   const [index, setIndex] = useState(0);
   const [answers, setAnswers] = useState(new Array(QUESTIONS.length).fill(null));

   const isResult = index >= QUESTIONS.length;
   const currentQuestion = !isResult ? QUESTIONS[index] : null;

   const totalScore = useMemo(() => answers.reduce((sum, value) => sum + (value || 0), 0), [answers]);
   const scoreBand = useMemo(() => getScoreBand(totalScore), [totalScore]);

   const progressPercent = isResult ? 100 : Math.round((index / QUESTIONS.length) * 100);

   const dimensionScores = useMemo(() => {
      return DIMENSIONS.map((label, dimensionIndex) => {
         const questionIndexes = QUESTIONS.map((question, qIndex) => ({ question, qIndex })).filter(
            ({ question }) => question.dimension === dimensionIndex,
         );

         const earned = questionIndexes.reduce((sum, entry) => sum + (answers[entry.qIndex] || 0), 0);
         const max = questionIndexes.length * 5;

         return {
            label,
            earned,
            max,
            percent: max > 0 ? Math.round((earned / max) * 100) : 0,
         };
      });
   }, [answers]);

   function selectAnswer(value) {
      const nextAnswers = [...answers];
      nextAnswers[index] = value;
      setAnswers(nextAnswers);
   }

   function goNext() {
      if (isResult) return;
      if (answers[index] == null) return;

      if (index === QUESTIONS.length - 1) {
         setIndex(QUESTIONS.length);
         return;
      }

      setIndex(index + 1);
   }

   function goBack() {
      if (isResult) {
         setIndex(QUESTIONS.length - 1);
         return;
      }

      if (index > 0) {
         setIndex(index - 1);
      }
   }

   function restart() {
      setAnswers(new Array(QUESTIONS.length).fill(null));
      setIndex(0);
   }

   return (
      <div className="max-w-4xl mx-auto bg-charcoal border border-slate/20 rounded-lg p-6 md:p-10">
         <div className="flex flex-wrap gap-2 mb-8">
            {DIMENSIONS.map((dimension, dimensionIndex) => {
               const isActive = !isResult && currentQuestion.dimension === dimensionIndex;
               return (
                  <span
                     key={dimension}
                     className={`text-xs tracking-wide uppercase px-3 py-1 rounded-sm border transition-colors ${
                        isActive
                           ? "bg-electric/15 border-electric/40 text-electric"
                           : "bg-obsidian/40 border-slate/20 text-steel"
                     }`}>
                     {dimension}
                  </span>
               );
            })}
         </div>

         <div className="flex justify-between items-center text-xs text-steel mb-3">
            <span>{isResult ? "Complete" : `Question ${index + 1} of ${QUESTIONS.length}`}</span>
            <span>{progressPercent}%</span>
         </div>
         <div className="h-1.5 rounded-full bg-obsidian/70 mb-8">
            <div
               className="h-full rounded-full bg-gradient-to-r from-electric to-gold transition-all duration-300"
               style={{ width: `${progressPercent}%` }}></div>
         </div>

         {!isResult ? (
            <>
               <p className="text-xs tracking-wide uppercase text-electric mb-3">
                  {DIMENSIONS[currentQuestion.dimension]}
               </p>
               <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 leading-snug">
                  {currentQuestion.text}
               </h3>

               <div className="space-y-3 mb-10">
                  {currentQuestion.options.map((option) => {
                     const isSelected = answers[index] === option.value;
                     return (
                        <button
                           key={option.label}
                           type="button"
                           onClick={() => selectAnswer(option.value)}
                           className={`w-full text-left px-4 py-3 rounded-md border transition-all duration-200 ${
                              isSelected
                                 ? "border-electric bg-electric/10 text-white"
                                 : "border-slate/25 bg-obsidian/30 text-platinum/75 hover:border-electric/40 hover:text-white"
                           }`}>
                           {option.label}
                        </button>
                     );
                  })}
               </div>

               <div className="flex items-center justify-between">
                  <button
                     type="button"
                     onClick={goBack}
                     disabled={index === 0}
                     className="text-sm text-steel hover:text-platinum disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                     Back
                  </button>
                  <button
                     type="button"
                     onClick={goNext}
                     disabled={answers[index] == null}
                     className="px-5 py-2.5 rounded-sm bg-electric text-white text-sm font-medium hover:bg-electric-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                     {index === QUESTIONS.length - 1 ? "See Results" : "Next"}
                  </button>
               </div>
            </>
         ) : (
            <>
               <div className="text-center mb-10">
                  <p className="text-xs tracking-widest uppercase text-electric mb-3">Diagnostic Result</p>
                  <div className="text-6xl font-serif font-bold text-white mb-2">{totalScore}</div>
                  <p className="text-sm text-steel mb-4">out of 75</p>
                  <h3 className={`text-2xl font-serif font-bold mb-3 ${scoreBand.colorClass}`}>{scoreBand.label}</h3>
                  <p className="text-platinum/75 leading-relaxed max-w-2xl mx-auto mb-3">{scoreBand.description}</p>
                  <p className="text-platinum/85 font-medium">{scoreBand.action}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {dimensionScores.map((dimension) => (
                     <div key={dimension.label} className="bg-obsidian/40 border border-slate/20 rounded-md p-4">
                        <div className="flex justify-between text-sm mb-2">
                           <span className="text-platinum/80">{dimension.label}</span>
                           <span className="text-steel">
                              {dimension.earned}/{dimension.max}
                           </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-obsidian/80">
                           <div
                              className="h-full rounded-full bg-gradient-to-r from-electric to-gold"
                              style={{ width: `${dimension.percent}%` }}></div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary">
                     Book Free Score Debrief
                  </Button>
                  <Button href="/consulting" variant="secondary">
                     Explore AI Audit Service
                  </Button>
                  <button
                     type="button"
                     onClick={restart}
                     className="px-8 py-4 font-sans font-medium text-sm tracking-wide rounded-sm border-2 border-platinum/20 text-platinum hover:border-electric/40 hover:bg-electric/5 hover:text-white transition-all duration-300">
                     Retake Diagnostic
                  </button>
               </div>
            </>
         )}
      </div>
   );
}
