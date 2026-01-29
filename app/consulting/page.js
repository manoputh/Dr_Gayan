import { sanityFetch } from "@/lib/sanity";
import { servicesQuery } from "@/lib/queries";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ConsultingForm from "./ConsultingForm";

export const metadata = {
   title: "AI/ML Consulting Services | Enterprise Solutions",
   description:
      "Comprehensive AI/ML consulting services for enterprise clients. Strategic planning, implementation, and optimization.",
};

export default async function ConsultingPage() {
   // Fetch all consulting services
   const services = await sanityFetch({
      query: servicesQuery,
   }).catch(() => []);

   return (
      <div className="py-20">
         <Container>
            {/* Page Header */}
            <SectionHeading
               title="AI/ML Consulting Services"
               subtitle="Strategic consulting and implementation services designed for enterprise clients"
            />

            {/* Services Grid */}
            {services.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {services.map((service) => (
                     <ServiceCard key={service._id} service={service} />
                  ))}
               </div>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {/* Default services if none in CMS */}
                  <ServiceCard
                     service={{
                        _id: "1",
                        title: "AI Strategy & Roadmap",
                        description:
                           "Develop comprehensive AI strategies aligned with your business objectives. We help you identify opportunities, assess readiness, and create actionable roadmaps.",
                        icon: "FaLightbulb",
                        features: [
                           "AI Readiness Assessment",
                           "Strategic Planning",
                           "ROI Analysis",
                           "Implementation Roadmap",
                        ],
                     }}
                  />
                  <ServiceCard
                     service={{
                        _id: "2",
                        title: "Machine Learning Solutions",
                        description:
                           "Custom ML models and systems tailored to your specific business needs. From predictive analytics to recommendation engines.",
                        icon: "FaBrain",
                        features: [
                           "Custom Model Development",
                           "Predictive Analytics",
                           "Model Training & Tuning",
                           "Performance Optimization",
                        ],
                     }}
                  />
                  <ServiceCard
                     service={{
                        _id: "3",
                        title: "Data Engineering",
                        description:
                           "Build robust data pipelines and infrastructure to power your AI initiatives. Scalable, reliable, and production-ready.",
                        icon: "FaDatabase",
                        features: [
                           "Data Pipeline Design",
                           "ETL Implementation",
                           "Data Quality Management",
                           "Infrastructure Setup",
                        ],
                     }}
                  />
               </div>
            )}

            {/* Why Choose Us Section */}
            <div className="bg-dark-secondary p-8 md:p-12 rounded-lg border border-graphite/30 mb-20">
               <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                     <div className="text-4xl font-bold text-electric-blue mb-2">10+</div>
                     <p className="text-gray-300">Years Experience</p>
                  </div>
                  <div className="text-center">
                     <div className="text-4xl font-bold text-electric-blue mb-2">100+</div>
                     <p className="text-gray-300">Enterprise Clients</p>
                  </div>
                  <div className="text-center">
                     <div className="text-4xl font-bold text-electric-blue mb-2">500+</div>
                     <p className="text-gray-300">Projects Delivered</p>
                  </div>
               </div>
            </div>

            {/* Consultation Form */}
            <ConsultingForm />
         </Container>
      </div>
   );
}
