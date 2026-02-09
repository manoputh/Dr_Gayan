/**
 * Loading Skeleton Components
 * Professional loading states for CMS content
 */

export function ServiceCardSkeleton() {
   return (
      <div className="bg-charcoal p-8 rounded-lg border border-slate/20 animate-pulse">
         {/* Icon skeleton */}
         <div className="w-16 h-16 bg-slate/20 rounded-lg mb-6"></div>
         {/* Title skeleton */}
         <div className="h-7 bg-slate/20 rounded w-3/4 mb-4"></div>
         {/* Description skeleton */}
         <div className="space-y-2 mb-6">
            <div className="h-4 bg-slate/20 rounded w-full"></div>
            <div className="h-4 bg-slate/20 rounded w-5/6"></div>
         </div>
         {/* Features skeleton */}
         <div className="space-y-2">
            <div className="h-4 bg-slate/20 rounded w-4/5"></div>
            <div className="h-4 bg-slate/20 rounded w-3/4"></div>
            <div className="h-4 bg-slate/20 rounded w-4/5"></div>
         </div>
      </div>
   );
}

export function BlogCardSkeleton() {
   return (
      <div className="bg-charcoal rounded-sm border border-slate/20 overflow-hidden animate-pulse h-full flex flex-col">
         {/* Image skeleton */}
         <div className="aspect-video w-full bg-slate/20"></div>
         {/* Content skeleton */}
         <div className="p-6 flex-1">
            {/* Category skeleton */}
            <div className="h-5 bg-slate/20 rounded w-24 mb-3"></div>
            {/* Title skeleton */}
            <div className="h-6 bg-slate/20 rounded w-full mb-2"></div>
            <div className="h-6 bg-slate/20 rounded w-3/4 mb-4"></div>
            {/* Excerpt skeleton */}
            <div className="space-y-2 mb-4">
               <div className="h-4 bg-slate/20 rounded w-full"></div>
               <div className="h-4 bg-slate/20 rounded w-4/5"></div>
            </div>
            {/* Meta skeleton */}
            <div className="flex items-center justify-between pt-4 border-t border-slate/10">
               <div className="h-3 bg-slate/20 rounded w-20"></div>
               <div className="h-3 bg-slate/20 rounded w-24"></div>
            </div>
         </div>
      </div>
   );
}

export function ProgramCardSkeleton() {
   return (
      <div className="bg-charcoal rounded-lg border border-slate/20 overflow-hidden animate-pulse">
         {/* Image skeleton */}
         <div className="h-40 bg-slate/20"></div>
         {/* Content skeleton */}
         <div className="p-6">
            {/* Badge skeleton */}
            <div className="h-4 bg-slate/20 rounded w-20 mb-3"></div>
            {/* Title skeleton */}
            <div className="h-6 bg-slate/20 rounded w-full mb-2"></div>
            {/* Description skeleton */}
            <div className="space-y-2 mb-4">
               <div className="h-4 bg-slate/20 rounded w-full"></div>
               <div className="h-4 bg-slate/20 rounded w-3/4"></div>
            </div>
            {/* Footer skeleton */}
            <div className="flex items-center justify-between">
               <div className="h-4 bg-slate/20 rounded w-16"></div>
               <div className="h-4 bg-slate/20 rounded w-24"></div>
            </div>
         </div>
      </div>
   );
}
