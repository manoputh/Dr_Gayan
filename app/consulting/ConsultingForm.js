"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export default function ConsultingForm() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState(null);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
         setIsSubmitting(false);
         setSubmitStatus("success");
         setFormData({ name: "", email: "", company: "", role: "", message: "" });

         // Reset status after 5 seconds
         setTimeout(() => setSubmitStatus(null), 5000);
      }, 1500);
   };

   return (
      <div className="py-12">
         <Container>
            <SectionHeading
               title="Request Consultation"
               subtitle="Tell us about your AI/ML needs and we'll get back to you within 24 hours"
            />

            <div className="max-w-2xl mx-auto">
               <form onSubmit={handleSubmit} className="bg-dark-secondary p-8 rounded-lg border border-graphite/30">
                  {/* Name */}
                  <div className="mb-6">
                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-tertiary border border-graphite/30 rounded-md text-white focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="John Doe"
                     />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-tertiary border border-graphite/30 rounded-md text-white focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="john@company.com"
                     />
                  </div>

                  {/* Company */}
                  <div className="mb-6">
                     <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name *
                     </label>
                     <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-tertiary border border-graphite/30 rounded-md text-white focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Your Company Inc."
                     />
                  </div>

                  {/* Role */}
                  <div className="mb-6">
                     <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Role
                     </label>
                     <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-tertiary border border-graphite/30 rounded-md text-white focus:outline-none focus:border-electric-blue transition-colors">
                        <option value="">Select your role</option>
                        <option value="ceo">CEO / Founder</option>
                        <option value="cto">CTO / VP Engineering</option>
                        <option value="head">Department Head</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                     </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                     <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                     </label>
                     <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-dark-tertiary border border-graphite/30 rounded-md text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                        placeholder="Describe your AI/ML needs, challenges, and goals..."></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                     {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                     <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-md">
                        <p className="text-green-400 text-center">Thank you! We'll be in touch within 24 hours.</p>
                     </div>
                  )}
               </form>
            </div>
         </Container>
      </div>
   );
}
