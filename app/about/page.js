import { sanityFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata = {
   title: "About | AI/ML Consulting",
   description: "Learn about our expertise in enterprise AI/ML solutions and strategic consulting services.",
};

export default async function AboutPage() {
   // Fetch site settings for about information
   const siteSettings = await sanityFetch({
      query: siteSettingsQuery,
   }).catch(() => null);

   return (
      <div className="py-20">
         <Container>
            {/* Page Header */}
            <SectionHeading title="About Us" subtitle="Enterprise AI/ML expertise driving business transformation" />

            {/* About Content */}
            <div className="max-w-4xl mx-auto">
               <div className="bg-dark-secondary p-8 md:p-12 rounded-lg border border-graphite/30 mb-12">
                  <div className="prose prose-invert max-w-none">
                     {siteSettings?.about ? (
                        <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                           {siteSettings.about}
                        </p>
                     ) : (
                        <>
                           <p className="text-lg text-gray-300 leading-relaxed mb-6">
                              We are a premier AI/ML consulting firm specializing in enterprise-level solutions that
                              drive measurable business outcomes. With extensive experience across Fortune 500 companies
                              and high-growth startups, we bring strategic insights and technical excellence to every
                              engagement.
                           </p>
                           <p className="text-lg text-gray-300 leading-relaxed mb-6">
                              Our approach combines deep industry knowledge with cutting-edge AI/ML technologies to
                              solve complex business challenges. We partner with executive teams to identify
                              opportunities, design robust solutions, and implement systems that scale.
                           </p>
                           <p className="text-lg text-gray-300 leading-relaxed">
                              Whether you're looking to optimize operations, enhance decision-making, or create entirely
                              new AI-powered products, we provide the strategic guidance and technical expertise to make
                              it happen.
                           </p>
                        </>
                     )}
                  </div>
               </div>

               {/* Expertise Areas */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-dark-secondary p-6 rounded-lg border border-graphite/30">
                     <h3 className="text-xl font-bold text-electric-blue mb-3">Industry Experience</h3>
                     <ul className="space-y-2 text-gray-300">
                        <li>• Financial Services & FinTech</li>
                        <li>• Healthcare & Life Sciences</li>
                        <li>• Manufacturing & Supply Chain</li>
                        <li>• Technology & Software</li>
                        <li>• Retail & E-commerce</li>
                     </ul>
                  </div>

                  <div className="bg-dark-secondary p-6 rounded-lg border border-graphite/30">
                     <h3 className="text-xl font-bold text-electric-blue mb-3">Technical Expertise</h3>
                     <ul className="space-y-2 text-gray-300">
                        <li>• Machine Learning & Deep Learning</li>
                        <li>• Natural Language Processing</li>
                        <li>• Computer Vision</li>
                        <li>• Predictive Analytics</li>
                        <li>• MLOps & Infrastructure</li>
                     </ul>
                  </div>
               </div>

               {/* CTA */}
               <div className="text-center bg-gradient-to-r from-electric-blue/10 to-gold-accent/10 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                  <p className="text-gray-300 mb-6">Schedule a consultation to discuss your AI/ML initiatives</p>
                  <Button href="/contact" variant="primary">
                     Contact Us
                  </Button>
               </div>
            </div>
         </Container>
      </div>
   );
}
