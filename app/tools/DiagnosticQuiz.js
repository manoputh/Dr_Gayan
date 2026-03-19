"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import { DIAGNOSTIC_DIMENSIONS, DIAGNOSTIC_QUESTIONS } from "@/lib/diagnostic/questions";

function buildInitialAnswers() {
   return DIAGNOSTIC_QUESTIONS.reduce((acc, question) => {
      acc[question.id] = "";
      return acc;
   }, {});
}

export default function DiagnosticQuiz() {
   const [index, setIndex] = useState(0);
   const [contact, setContact] = useState({
      fullName: "",
      email: "",
      company: "",
      role: "",
   });
   const [answers, setAnswers] = useState(buildInitialAnswers);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitError, setSubmitError] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [submittedEmail, setSubmittedEmail] = useState("");

   const currentQuestion = DIAGNOSTIC_QUESTIONS[index];
   const currentAnswer = answers[currentQuestion.id];
   const isLastQuestion = index === DIAGNOSTIC_QUESTIONS.length - 1;

   const progressPercent = Math.round(((index + 1) / DIAGNOSTIC_QUESTIONS.length) * 100);

   const allQuestionsAnswered = useMemo(
      () => DIAGNOSTIC_QUESTIONS.every((question) => Boolean(answers[question.id])),
      [answers],
   );

   function updateContact(field, value) {
      setContact((prev) => ({
         ...prev,
         [field]: value,
      }));
   }

   function selectAnswer(optionKey) {
      setAnswers((prev) => ({
         ...prev,
         [currentQuestion.id]: optionKey,
      }));
      setSubmitError("");
   }

   function goNext() {
      if (!currentAnswer) return;
      if (isLastQuestion) return;
      setIndex((prev) => prev + 1);
      setSubmitError("");
   }

   function goBack() {
      if (index === 0) return;
      setIndex((prev) => prev - 1);
      setSubmitError("");
   }

   function restart() {
      setIndex(0);
      setContact({
         fullName: "",
         email: "",
         company: "",
         role: "",
      });
      setAnswers(buildInitialAnswers());
      setIsSubmitting(false);
      setSubmitError("");
      setIsSubmitted(false);
      setSubmittedEmail("");
   }

   async function submitDiagnostic() {
      if (isSubmitting) return;

      if (!contact.email.trim()) {
         setSubmitError("Please provide your email address before submitting.");
         return;
      }

      if (!allQuestionsAnswered) {
         setSubmitError("Please answer all questions before submitting.");
         return;
      }

      setIsSubmitting(true);
      setSubmitError("");

      try {
         const response = await fetch("/api/tools/diagnostic-submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...contact,
               answers,
            }),
         });

         const payload = await response.json().catch(() => ({}));

         if (!response.ok) {
            throw new Error(payload.message || "Unable to submit diagnostic.");
         }

         setSubmittedEmail(payload.email || contact.email.trim());
         setIsSubmitted(true);
      } catch (error) {
         setSubmitError(error.message || "Unable to submit diagnostic. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   }

   if (isSubmitted) {
      return (
         <div className="max-w-4xl mx-auto bg-charcoal border border-slate/20 rounded-lg p-6 md:p-10 text-center">
            <p className="text-xs tracking-widest uppercase text-electric mb-3">Submission Complete</p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Thank You</h3>
            <p className="text-platinum/80 leading-relaxed max-w-2xl mx-auto mb-2">
               Your results have been sent to your email address and our team.
            </p>
            {submittedEmail && <p className="text-steel mb-8">Submitted email: {submittedEmail}</p>}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button href="/contact" variant="primary">
                  Book Discovery Call
               </Button>
               <button
                  type="button"
                  onClick={restart}
                  className="px-8 py-4 font-sans font-medium text-sm tracking-wide rounded-sm border-2 border-platinum/20 text-platinum hover:border-electric/40 hover:bg-electric/5 hover:text-white transition-all duration-300">
                  Submit Another Diagnostic
               </button>
            </div>
         </div>
      );
   }

   return (
      <div className="max-w-4xl mx-auto bg-charcoal border border-slate/20 rounded-lg p-6 md:p-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
               <label className="block text-xs uppercase tracking-[0.12em] text-electric/85 mb-2">Full Name</label>
               <input
                  type="text"
                  value={contact.fullName}
                  onChange={(event) => updateContact("fullName", event.target.value)}
                  className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                  placeholder="Your name"
               />
            </div>
            <div>
               <label className="block text-xs uppercase tracking-[0.12em] text-electric/85 mb-2">Email *</label>
               <input
                  type="email"
                  value={contact.email}
                  onChange={(event) => updateContact("email", event.target.value)}
                  className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                  placeholder="name@company.com"
                  required
               />
            </div>
            <div>
               <label className="block text-xs uppercase tracking-[0.12em] text-electric/85 mb-2">Company</label>
               <input
                  type="text"
                  value={contact.company}
                  onChange={(event) => updateContact("company", event.target.value)}
                  className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                  placeholder="Company name"
               />
            </div>
            <div>
               <label className="block text-xs uppercase tracking-[0.12em] text-electric/85 mb-2">Role</label>
               <input
                  type="text"
                  value={contact.role}
                  onChange={(event) => updateContact("role", event.target.value)}
                  className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                  placeholder="Job title"
               />
            </div>
         </div>

         <div className="flex flex-wrap gap-2 mb-8">
            {DIAGNOSTIC_DIMENSIONS.map((dimension) => {
               const isActive = currentQuestion.dimensionId === dimension.id;
               return (
                  <span
                     key={dimension.id}
                     className={`text-xs tracking-wide uppercase px-3 py-1 rounded-sm border transition-colors ${
                        isActive
                           ? "bg-electric/15 border-electric/40 text-electric"
                           : "bg-obsidian/40 border-slate/20 text-steel"
                     }`}>
                     {dimension.label}
                  </span>
               );
            })}
         </div>

         <div className="flex justify-between items-center text-xs text-steel mb-3">
            <span>{`Question ${index + 1} of ${DIAGNOSTIC_QUESTIONS.length}`}</span>
            <span>{progressPercent}%</span>
         </div>
         <div className="h-1.5 rounded-full bg-obsidian/70 mb-8">
            <div
               className="h-full rounded-full bg-gradient-to-r from-electric to-gold transition-all duration-300"
               style={{ width: `${progressPercent}%` }}></div>
         </div>

         <p className="text-xs tracking-wide uppercase text-electric mb-3">
            {DIAGNOSTIC_DIMENSIONS.find((dimension) => dimension.id === currentQuestion.dimensionId)?.label}
         </p>
         <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 leading-snug">
            {currentQuestion.text}
         </h3>

         <div className="space-y-3 mb-10">
            {currentQuestion.options.map((option) => {
               const isSelected = currentAnswer === option.key;
               return (
                  <button
                     key={option.key}
                     type="button"
                     onClick={() => selectAnswer(option.key)}
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

         {submitError && <p className="text-sm text-red-300 mb-6">{submitError}</p>}

         <div className="flex items-center justify-between">
            <button
               type="button"
               onClick={goBack}
               disabled={index === 0 || isSubmitting}
               className="text-sm text-steel hover:text-platinum disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
               Back
            </button>

            {isLastQuestion ? (
               <button
                  type="button"
                  onClick={submitDiagnostic}
                  disabled={!currentAnswer || isSubmitting}
                  className="px-5 py-2.5 rounded-sm bg-electric text-white text-sm font-medium hover:bg-electric-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                  {isSubmitting ? "Submitting..." : "Submit Diagnostic"}
               </button>
            ) : (
               <button
                  type="button"
                  onClick={goNext}
                  disabled={!currentAnswer || isSubmitting}
                  className="px-5 py-2.5 rounded-sm bg-electric text-white text-sm font-medium hover:bg-electric-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                  Next
               </button>
            )}
         </div>
      </div>
   );
}
