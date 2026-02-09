import { sanityFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { FaLinkedin, FaFacebook, FaYoutube, FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export const metadata = {
   title: "Contact | AI/ML Consulting",
   description: "Get in touch with our AI/ML consulting team. We are here to help transform your business.",
};

export default async function ContactPage() {
   // Fetch site settings for contact info
   const siteSettings = await sanityFetch({
      query: siteSettingsQuery,
   }).catch(() => null);

   // Map platform names to icons
   const iconMap = {
      linkedin: FaLinkedin,
      facebook: FaFacebook,
      youtube: FaYoutube,
      twitter: FaTwitter,
      github: FaGithub,
   };

   return (
      <div className="py-20">
         <Container>
            {/* Page Header */}
            <AnimatedSection from="none">
               <SectionHeading
                  title="Get In Touch"
                  subtitle="Let's discuss how we can help accelerate your AI/ML initiatives"
               />
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
               {/* Contact Info Cards */}
               <AnimatedSection delay={100}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     {/* Email Card */}
                     {siteSettings?.email && (
                        <div className="flex flex-col items-center bg-charcoal p-8 rounded-lg border border-slate/20 card-interactive hover:border-electric/40">
                           <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center">
                                 <FaEnvelope className="text-electric text-xl" />
                              </div>
                              <h3 className="text-xl font-bold text-white">Email Us</h3>
                           </div>
                           <a
                              href={`mailto:${siteSettings.email}`}
                              className="text-platinum/70 hover:text-electric transition-colors">
                              {siteSettings.email}
                           </a>
                        </div>
                     )}

                     {/* Phone Card */}
                     {siteSettings?.phone && (
                        <div className="flex flex-col items-center bg-charcoal p-8 rounded-lg border border-slate/20 card-interactive hover:border-electric/40">
                           <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center">
                                 <FaPhone className="text-electric text-xl" />
                              </div>
                              <h3 className="text-xl font-bold text-white">Call Us</h3>
                           </div>
                           <a
                              href={`tel:${siteSettings.phone}`}
                              className="text-platinum/70 hover:text-electric transition-colors">
                              {siteSettings.phone}
                           </a>
                        </div>
                     )}
                  </div>
               </AnimatedSection>

               {/* Social Links */}
               {siteSettings?.socialLinks && siteSettings.socialLinks.length > 0 && (
                  <AnimatedSection delay={200}>
                     <div className="bg-charcoal p-8 rounded-lg border border-slate/20 mb-12">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">Connect With Us</h3>
                        <div className="flex justify-center gap-6">
                           {siteSettings.socialLinks.map((link) => {
                              const Icon = iconMap[link.platform];
                              return Icon ? (
                                 <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-electric/10 rounded-full flex items-center justify-center text-electric hover:bg-electric hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-sm">
                                    <Icon size={24} />
                                 </a>
                              ) : null;
                           })}
                        </div>
                     </div>
                  </AnimatedSection>
               )}

               {/* CTA Section */}
               <AnimatedSection delay={300}>
                  <div className="bg-gradient-to-r from-electric/5 to-gold/5 p-8 md:p-12 rounded-lg border border-slate/20 text-center">
                     <h3 className="text-3xl font-serif font-bold text-white mb-4">Ready to Get Started?</h3>
                     <p className="text-platinum/70 text-lg mb-6">
                        Schedule a consultation to discuss your specific AI/ML needs and explore how we can help
                     </p>
                     <a
                        href="/consulting"
                        className="inline-block px-8 py-4 bg-electric text-white rounded-sm font-medium text-sm tracking-wide cta-glow hover:bg-electric-muted hover:shadow-glow-md transition-all duration-300 hover:-translate-y-0.5">
                        Request Consultation
                     </a>
                  </div>
               </AnimatedSection>

               {/* Business Hours */}
               <div className="mt-12 text-center">
                  <h4 className="text-lg font-semibold text-steel mb-2">Business Hours</h4>
                  <p className="text-steel/70">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-steel/70">We typically respond within 24 hours</p>
               </div>
            </div>
         </Container>
      </div>
   );
}
