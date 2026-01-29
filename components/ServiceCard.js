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
      <div className="bg-dark-secondary p-8 rounded-lg border border-graphite/30 hover:border-electric-blue/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/20">
         {/* Icon */}
         <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Icon className="text-white text-3xl" />
         </div>

         {/* Title */}
         <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

         {/* Description */}
         <p className="text-gray-400 mb-6">{service.description}</p>

         {/* Features */}
         {service.features && service.features.length > 0 && (
            <ul className="space-y-2">
               {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                     <span className="text-electric-blue mr-2">✓</span>
                     <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
