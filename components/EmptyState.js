import { FaInbox, FaLightbulb, FaGraduationCap } from "react-icons/fa";

/**
 * Empty State Component
 * Professional empty states for no content scenarios
 *
 * @param {string} type - Type of content: 'services', 'insights', 'courses', 'generic'
 * @param {string} title - Custom title (optional)
 * @param {string} description - Custom description (optional)
 */
export default function EmptyState({ type = "generic", title, description }) {
   const configs = {
      services: {
         icon: FaLightbulb,
         title: "No Services Available",
         description: "Services are being prepared. Check back soon for our consulting offerings.",
      },
      insights: {
         icon: FaLightbulb,
         title: "No Insights Yet",
         description: "We're working on valuable content. Check back soon for industry insights and perspectives.",
      },
      courses: {
         icon: FaGraduationCap,
         title: "No Courses Available",
         description: "Courses will be announced soon. Stay tuned for educational programs.",
      },
      generic: {
         icon: FaInbox,
         title: "No Content Available",
         description: "Content is being prepared. Please check back later.",
      },
   };

   const config = configs[type] || configs.generic;
   const Icon = config.icon;

   return (
      <div className="bg-charcoal rounded-lg border border-slate/20 p-12 text-center">
         <div className="max-w-md mx-auto space-y-4">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto bg-slate/10 rounded-full flex items-center justify-center">
               <Icon className="w-8 h-8 text-steel" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white">{title || config.title}</h3>

            {/* Description */}
            <p className="text-steel leading-relaxed">{description || config.description}</p>
         </div>
      </div>
   );
}
