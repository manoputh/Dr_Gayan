export default function Loading() {
   return (
      <div className="min-h-screen flex items-center justify-center">
         <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-electric-blue mb-4"></div>
            <p className="text-gray-400 text-lg">Loading...</p>
         </div>
      </div>
   );
}
