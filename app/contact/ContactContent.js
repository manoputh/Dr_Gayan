"use client";

import { useState } from "react";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import { FaEnvelope, FaPhone, FaCalendarAlt, FaLinkedin, FaChevronDown, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const CONTACT_CHANNELS = [
   {
      icon: FaEnvelope,
      label: "Email",
      helper: "Direct communication",
      value: "gayan@gayandesilva.com",
      href: "mailto:gayan@gayandesilva.com",
   },
   {
      icon: FaPhone,
      label: "Phone / WhatsApp",
      helper: "Priority inquiries",
      value: "+49 155 60 440022",
      href: "tel:+4915560440022",
   },
   {
      icon: FaCalendarAlt,
      label: "Calendly",
      helper: "15-minute slots | Tue and Thu 7-9am CET",
      value: "calendly.com/gayandesilva",
      href: "https://calendly.com/gayandesilva",
   },
   {
      icon: FaLinkedin,
      label: "LinkedIn",
      helper: "Professional profile",
      value: "linkedin.com/in/gayanrr",
      href: "https://linkedin.com/in/gayanrr",
   },
];

const LOCATIONS = [
   {
      icon: FaMapMarkerAlt,
      code: "HH",
      title: "Hamburg, Germany",
      detail: "SRH University Hamburg and on-site engagements in the Hamburg region.",
   },
   {
      icon: FaMapMarkerAlt,
      code: "PRG",
      title: "Prague, Czech Republic",
      detail: "Central European base with on-site support across the CEE region.",
   },
   {
      icon: FaGlobe,
      code: "EU",
      title: "Europe-wide / Remote",
      detail: "Discovery calls and most engagements can be delivered fully remote.",
   },
];

const FAQS = [
   {
      question: "What does the 15-minute discovery call involve?",
      answer:
         "The call focuses on five practical questions about your AI systems and compliance posture. You leave with a clear view of likely exposure and whether an AI Audit is the right next step.",
   },
   {
      question: "How long does the readiness scan take?",
      answer:
         "The readiness scan is typically completed in two days, from initial technical review to a prioritized findings and remediation briefing.",
   },
   {
      question: "What is your availability before August 2026?",
      answer:
         "Availability is managed in limited engagement slots each quarter. Discovery calls can be scheduled quickly, and confirmed timelines are shared during the first call.",
   },
   {
      question: "Can companies outside Germany engage you?",
      answer: "Yes. Engagements are delivered across multiple European markets and can run fully remote when needed.",
   },
   {
      question: "We already have a compliance team. Do we still need this?",
      answer:
         "Yes, often. Compliance teams lead legal interpretation, while the AI Audit adds the technical model, data, and control-layer validation needed for operational assurance.",
   },
];

const ROLE_OPTIONS = [
   "CISO",
   "CTO / VP Engineering",
   "CDO / Head of Data",
   "Head of Compliance",
   "CEO / Managing Director",
   "Other",
];

const AI_SYSTEM_OPTIONS = ["Not sure", "1-3", "4-10", "10+"];

const SITUATION_OPTIONS = [
   "We have AI in production and need EU AI Act compliance",
   "We received legal guidance about AI Act exposure",
   "We are planning AI and need readiness clarity",
   "We need a clear view of our EU AI Act obligations",
   "Other",
];

const INITIAL_FORM = {
   fullName: "",
   workEmail: "",
   companyName: "",
   companySize: "",
   role: "",
   aiSystemsInProduction: "",
   situation: "",
   message: "",
};

export default function ContactContent() {
   const [openFaq, setOpenFaq] = useState(0);
   const [formData, setFormData] = useState(INITIAL_FORM);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState(null);
   const [submitMessage, setSubmitMessage] = useState("");

   function onFieldChange(event) {
      const { name, value } = event.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   }

   function onFaqToggle(index) {
      setOpenFaq((prev) => (prev === index ? -1 : index));
   }

   async function onSubmit(event) {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);
      setSubmitMessage("");

      try {
         const response = await fetch("/api/contact/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const payload = await response.json().catch(() => ({}));

         if (!response.ok) {
            throw new Error(payload.message || "Unable to submit inquiry.");
         }

         setSubmitStatus("success");
         setSubmitMessage(payload.message || "Your message has been received. We will follow up within 24 hours.");
         setFormData(INITIAL_FORM);
      } catch (error) {
         setSubmitStatus("error");
         setSubmitMessage(error instanceof Error ? error.message : "Unable to submit inquiry.");
      } finally {
         setIsSubmitting(false);
      }
   }

   return (
      <div className="py-20">
         <Container>
            <AnimatedSection from="none">
               <div className="max-w-4xl mx-auto text-center mb-14">
                  <p className="text-xs uppercase tracking-[0.14em] text-electric/80 mb-4">Contact</p>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                     The next step is 15 minutes.
                  </h1>
                  <p className="text-lg text-platinum/75 leading-relaxed max-w-3xl mx-auto">
                     No hard pitch. Gayan de Silva, PhD will review your AI systems and compliance posture through a
                     practical discovery call so you leave with clear next-step priorities.
                  </p>
               </div>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
               <AnimatedSection delay={100}>
                  <div>
                     <div className="bg-charcoal p-8 rounded-lg border border-slate/20 mb-8">
                        <p className="text-xs uppercase tracking-[0.14em] text-electric/80 mb-3">Get In Touch</p>
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">
                           Book a discovery call or send a message.
                        </h2>
                        <p className="text-platinum/75 leading-relaxed mb-8">
                           Available for engagements across Europe. Based between Hamburg and Prague. Initial
                           conversations are remote and focused on operational clarity.
                        </p>

                        <div className="space-y-4">
                           {CONTACT_CHANNELS.map((channel) => {
                              const Icon = channel.icon;
                              return (
                                 <div
                                    key={channel.label}
                                    className="flex items-start gap-4 bg-obsidian/40 border border-slate/20 rounded-md p-4">
                                    <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center">
                                       <Icon className="text-electric" />
                                    </div>
                                    <div>
                                       <p className="text-sm font-semibold text-white">{channel.label}</p>
                                       <p className="text-xs text-steel mb-1">{channel.helper}</p>
                                       <a
                                          href={channel.href}
                                          target={channel.href.startsWith("http") ? "_blank" : undefined}
                                          rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                          className="text-sm text-platinum/80 hover:text-electric transition-colors">
                                          {channel.value}
                                       </a>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     <div className="bg-charcoal p-8 rounded-lg border border-slate/20 mb-8">
                        <p className="text-xs uppercase tracking-[0.14em] text-electric/80 mb-4">
                           Location and Availability
                        </p>
                        <div className="space-y-4">
                           {LOCATIONS.map((location) => {
                              const Icon = location.icon;
                              return (
                                 <div key={location.code} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center flex-shrink-0">
                                       <Icon className="text-electric text-sm" />
                                    </div>
                                    <div>
                                       <p className="text-sm font-semibold text-white">{location.title}</p>
                                       <p className="text-sm text-platinum/70 leading-relaxed">{location.detail}</p>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     <div className="bg-charcoal p-8 rounded-lg border border-slate/20">
                        <p className="text-xs uppercase tracking-[0.14em] text-electric/80 mb-4">Frequently Asked</p>
                        <div className="space-y-3">
                           {FAQS.map((faq, index) => {
                              const isOpen = openFaq === index;
                              return (
                                 <div
                                    key={faq.question}
                                    className="border border-slate/20 rounded-md bg-obsidian/30 overflow-hidden">
                                    <button
                                       type="button"
                                       onClick={() => onFaqToggle(index)}
                                       className="w-full px-4 py-4 flex items-center justify-between gap-4 text-left">
                                       <span className="text-sm font-semibold text-white">{faq.question}</span>
                                       <FaChevronDown
                                          className={`text-electric transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                       />
                                    </button>
                                    {isOpen && (
                                       <p className="px-4 pb-4 text-sm text-platinum/75 leading-relaxed">
                                          {faq.answer}
                                       </p>
                                    )}
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </AnimatedSection>

               <AnimatedSection delay={160}>
                  <div className="bg-charcoal p-8 rounded-lg border border-slate/20">
                     <p className="text-xs uppercase tracking-[0.14em] text-electric/80 mb-3">Inquiry Form</p>
                     <h2 className="text-3xl font-serif font-bold text-white mb-4">
                        Share your context before we meet.
                     </h2>
                     <p className="text-platinum/75 leading-relaxed mb-8">
                        Provide operational context so the discovery call can focus on the AI Audit and EU AI Act issues
                        that matter most for your team.
                     </p>

                     <form onSubmit={onSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <input
                              name="fullName"
                              type="text"
                              value={formData.fullName}
                              onChange={onFieldChange}
                              placeholder="Full name"
                              required
                              className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                           />
                           <input
                              name="workEmail"
                              type="email"
                              value={formData.workEmail}
                              onChange={onFieldChange}
                              placeholder="Work email"
                              required
                              className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                           />
                        </div>

                        <input
                           name="companyName"
                           type="text"
                           value={formData.companyName}
                           onChange={onFieldChange}
                           placeholder="Company name"
                           required
                           className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                        />

                        <input
                           name="companySize"
                           type="text"
                           value={formData.companySize}
                           onChange={onFieldChange}
                           placeholder="Company size (employees)"
                           required
                           className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50"
                        />

                        <select
                           name="role"
                           value={formData.role}
                           onChange={onFieldChange}
                           required
                           className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 focus:outline-none focus:border-electric/50">
                           <option value="" disabled>
                              Your role
                           </option>
                           {ROLE_OPTIONS.map((role) => (
                              <option key={role} value={role}>
                                 {role}
                              </option>
                           ))}
                        </select>

                        <select
                           name="aiSystemsInProduction"
                           value={formData.aiSystemsInProduction}
                           onChange={onFieldChange}
                           required
                           className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 focus:outline-none focus:border-electric/50">
                           <option value="" disabled>
                              AI systems in production
                           </option>
                           {AI_SYSTEM_OPTIONS.map((option) => (
                              <option key={option} value={option}>
                                 {option}
                              </option>
                           ))}
                        </select>

                        <select
                           name="situation"
                           value={formData.situation}
                           onChange={onFieldChange}
                           required
                           className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 focus:outline-none focus:border-electric/50">
                           <option value="" disabled>
                              What best describes your situation?
                           </option>
                           {SITUATION_OPTIONS.map((option) => (
                              <option key={option} value={option}>
                                 {option}
                              </option>
                           ))}
                        </select>

                        <textarea
                           name="message"
                           value={formData.message}
                           onChange={onFieldChange}
                           rows={5}
                           required
                           placeholder="Tell me about your AI systems, deadline pressure, and the outcome you need."
                           className="w-full bg-obsidian/40 border border-slate/25 rounded-md px-4 py-3 text-platinum/90 placeholder:text-steel focus:outline-none focus:border-electric/50 resize-none"
                        />

                        <a
                           href="https://calendly.com/gayandesilva"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-full text-center inline-block px-8 py-4 font-sans font-medium text-sm tracking-wide transition-all duration-300 rounded-sm bg-electric text-white hover:bg-electric-muted border border-electric hover:border-electric-muted">
                           Book on Calendly - 15-Min Discovery Call
                        </a>

                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="w-full px-8 py-4 font-sans font-medium text-sm tracking-wide transition-all duration-300 rounded-sm bg-transparent border-2 border-platinum/20 text-platinum hover:border-electric/40 hover:bg-electric/5 hover:text-white disabled:opacity-60 disabled:cursor-not-allowed">
                           {isSubmitting ? "Sending..." : "Or Send This Form"}
                        </button>

                        <p className="text-xs text-steel text-center">
                           Response target: within 24 hours | Hamburg | Prague | Europe-wide | Remote
                        </p>

                        {submitStatus === "success" && (
                           <p className="text-sm text-green-300 text-center">{submitMessage}</p>
                        )}
                        {submitStatus === "error" && (
                           <p className="text-sm text-red-300 text-center">{submitMessage}</p>
                        )}
                     </form>
                  </div>
               </AnimatedSection>
            </div>
         </Container>
      </div>
   );
}
