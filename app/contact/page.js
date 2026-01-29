import { sanityFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
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
            <SectionHeading
               title="Get In Touch"
               subtitle="Let's discuss how we can help accelerate your AI/ML initiatives"
            />

            <div className="max-w-4xl mx-auto">
               {/* Contact Info Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Email Card */}
                  {siteSettings?.email && (
                     <div className="bg-dark-secondary p-8 rounded-lg border border-graphite/30 hover:border-electric-blue/50 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center">
                              <FaEnvelope className="text-electric-blue text-xl" />
                           </div>
                           <h3 className="text-xl font-bold text-white">Email Us</h3>
                        </div>
                        <a
                           href={`mailto:${siteSettings.email}`}
                           className="text-gray-300 hover:text-electric-blue transition-colors">
                           {siteSettings.email}
                        </a>
                     </div>
                  )}

                  {/* Phone Card */}
                  {siteSettings?.phone && (
                     <div className="bg-dark-secondary p-8 rounded-lg border border-graphite/30 hover:border-electric-blue/50 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center">
                              <FaPhone className="text-electric-blue text-xl" />
                           </div>
                           <h3 className="text-xl font-bold text-white">Call Us</h3>
                        </div>
                        <a
                           href={`tel:${siteSettings.phone}`}
                           className="text-gray-300 hover:text-electric-blue transition-colors">
                           {siteSettings.phone}
                        </a>
                     </div>
                  )}
               </div>

               {/* Social Links */}
               {siteSettings?.socialLinks && siteSettings.socialLinks.length > 0 && (
                  <div className="bg-dark-secondary p-8 rounded-lg border border-graphite/30 mb-12">
                     <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Us</h3>
                     <div className="flex justify-center gap-6">
                        {siteSettings.socialLinks.map((link) => {
                           const Icon = iconMap[link.platform];
                           return Icon ? (
                              <a
                                 key={link.platform}
                                 href={link.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="w-14 h-14 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-all transform hover:scale-110">
                                 <Icon size={24} />
                              </a>
                           ) : null;
                        })}
                     </div>
                  </div>
               )}

               {/* CTA Section */}
               <div className="bg-gradient-to-r from-electric-blue/10 to-gold-accent/10 p-8 md:p-12 rounded-lg text-center">
                  <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 text-lg mb-6">
                     Schedule a consultation to discuss your specific AI/ML needs and explore how we can help
                  </p>
                  <a
                     href="/consulting"
                     className="inline-block px-8 py-3 bg-gradient-to-r from-electric-blue to-blue-600 text-white rounded-md font-semibold hover:shadow-lg hover:shadow-electric-blue/50 transform hover:scale-105 transition-all">
                     Request Consultation
                  </a>
               </div>

               {/* Business Hours */}
               <div className="mt-12 text-center">
                  <h4 className="text-lg font-semibold text-gray-400 mb-2">Business Hours</h4>
                  <p className="text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-500">We typically respond within 24 hours</p>
               </div>
            </div>
         </Container>
      </div>
   );
}
