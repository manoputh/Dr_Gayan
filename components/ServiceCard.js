import { FaBrain, FaChartLine, FaRobot, FaDatabase, FaCog, FaLightbulb } from "react-icons/fa";

/**
 * Service Card Component
 * Displays a consulting service with icon
 *
 * @param {Object} service - Service data from Sanity
 */
export default function ServiceCard({ service }) {
   // Map icon names to actual icon components
   const iconMap = {
      FaBrain,
      FaChartLine,
      FaRobot,
      FaDatabase,
      FaCog,
      FaLightbulb,
   };

   const Icon = iconMap[service.icon] || FaBrain;

   return (
      <div className="group bg-charcoal p-8 rounded-lg border border-slate/20 card-interactive hover:border-electric/40">
         {/* Icon */}
         <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-electric/10 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:from-electric/30 group-hover:to-electric/20">
            <Icon className="text-electric text-2xl" />
         </div>

         {/* Title */}
         <h3 className="text-xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-platinum">
            {service.title}
         </h3>

         {/* Description */}
         <p className="text-steel mb-6 leading-relaxed">{service.description}</p>

         {/* Features */}
         {service.features && service.features.length > 0 && (
            <ul className="space-y-2">
               {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                     <span className="text-electric mr-2">✓</span>
                     <span className="text-platinum/70 text-sm">{feature}</span>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
