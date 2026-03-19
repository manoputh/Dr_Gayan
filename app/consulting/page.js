import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import ConsultingForm from "./ConsultingForm";

const CONSULTING_SERVICES = [
   {
      _id: "1",
      title: "AI Strategy & Roadmap",
      description:
         "Develop comprehensive AI strategies aligned with your business objectives. We help you identify opportunities, assess readiness, and create actionable roadmaps.",
      icon: "FaLightbulb",
      features: ["AI Readiness Assessment", "Strategic Planning", "ROI Analysis", "Implementation Roadmap"],
   },
   {
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
   },
   {
      _id: "3",
      title: "Data Engineering",
      description:
         "Build robust data pipelines and infrastructure to power your AI initiatives. Scalable, reliable, and production-ready.",
      icon: "FaDatabase",
      features: ["Data Pipeline Design", "ETL Implementation", "Data Quality Management", "Infrastructure Setup"],
   },
];

export const metadata = {
   title: "AI/ML Consulting Services | Enterprise Solutions",
   description:
      "Comprehensive AI/ML consulting services for enterprise clients. Strategic planning, implementation, and optimization.",
};

export default function ConsultingPage() {
   return (
      <div className="py-20">
         <Container>
            {/* Page Header */}
            <AnimatedSection from="none">
               <SectionHeading
                  title="AI/ML Consulting Services"
                  subtitle="Strategic consulting and implementation services designed for enterprise clients"
               />
            </AnimatedSection>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
               {CONSULTING_SERVICES.map((service, index) => (
                  <AnimatedSection key={service._id} delay={index * 100} from="bottom">
                     <ServiceCard service={service} />
                  </AnimatedSection>
               ))}
            </div>

            {/* Why Choose Us Section */}
            <AnimatedSection>
               <div className="bg-charcoal p-8 md:p-12 rounded-lg border border-slate/20 mb-20">
                  <h2 className="text-3xl font-serif font-bold mb-8 text-center text-white">Why Choose Us</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="text-center">
                        <div className="text-4xl font-bold text-electric mb-2">10+</div>
                        <p className="text-platinum/70">Years Experience</p>
                     </div>
                     <div className="text-center">
                        <div className="text-4xl font-bold text-electric mb-2">100+</div>
                        <p className="text-platinum/70">Enterprise Clients</p>
                     </div>
                     <div className="text-center">
                        <div className="text-4xl font-bold text-electric mb-2">500+</div>
                        <p className="text-platinum/70">Projects Delivered</p>
                     </div>
                  </div>
               </div>
            </AnimatedSection>

            {/* Consultation Form */}
            <AnimatedSection>
               <ConsultingForm />
            </AnimatedSection>
         </Container>
      </div>
   );
}
