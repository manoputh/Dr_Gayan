/**
 * Loading Skeleton Components
 * Professional loading states with shimmer effect for CMS content
 */

function SkeletonBar({ className = "" }) {
   return <div className={`skeleton-shimmer rounded ${className}`} />;
}

export function ServiceCardSkeleton() {
   return (
      <div className="bg-charcoal p-8 rounded-lg border border-slate/20">
         {/* Icon skeleton */}
         <SkeletonBar className="w-16 h-16 rounded-lg mb-6" />
         {/* Title skeleton */}
         <SkeletonBar className="h-7 w-3/4 mb-4" />
         {/* Description skeleton */}
         <div className="space-y-2 mb-6">
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-5/6" />
         </div>
         {/* Features skeleton */}
         <div className="space-y-2">
            <SkeletonBar className="h-4 w-4/5" />
            <SkeletonBar className="h-4 w-3/4" />
            <SkeletonBar className="h-4 w-4/5" />
         </div>
      </div>
   );
}

export function BlogCardSkeleton() {
   return (
      <div className="bg-charcoal rounded-sm border border-slate/20 overflow-hidden h-full flex flex-col">
         {/* Image skeleton */}
         <div className="aspect-video w-full skeleton-shimmer"></div>
         {/* Content skeleton */}
         <div className="p-6 flex-1">
            {/* Category skeleton */}
            <SkeletonBar className="h-5 w-24 mb-3" />
            {/* Title skeleton */}
            <SkeletonBar className="h-6 w-full mb-2" />
            <SkeletonBar className="h-6 w-3/4 mb-4" />
            {/* Excerpt skeleton */}
            <div className="space-y-2 mb-4">
               <SkeletonBar className="h-4 w-full" />
               <SkeletonBar className="h-4 w-4/5" />
            </div>
            {/* Meta skeleton */}
            <div className="flex items-center justify-between pt-4 border-t border-slate/10">
               <SkeletonBar className="h-3 w-20" />
               <SkeletonBar className="h-3 w-24" />
            </div>
         </div>
      </div>
   );
}

export function ProgramCardSkeleton() {
   return (
      <div className="bg-charcoal rounded-lg border border-slate/20 overflow-hidden">
         {/* Image skeleton */}
         <div className="h-40 skeleton-shimmer"></div>
         {/* Content skeleton */}
         <div className="p-6">
            {/* Badge skeleton */}
            <SkeletonBar className="h-4 w-20 mb-3" />
            {/* Title skeleton */}
            <SkeletonBar className="h-6 w-full mb-2" />
            {/* Description skeleton */}
            <div className="space-y-2 mb-4">
               <SkeletonBar className="h-4 w-full" />
               <SkeletonBar className="h-4 w-3/4" />
            </div>
            {/* Footer skeleton */}
            <div className="flex items-center justify-between">
               <SkeletonBar className="h-4 w-16" />
               <SkeletonBar className="h-4 w-24" />
            </div>
         </div>
      </div>
   );
}

/**
 * Generic page-level skeleton with configurable rows
 */
export function PageSkeleton({ rows = 3, columns = 3 }) {
   return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8`}>
         {Array.from({ length: rows * columns }).map((_, i) => (
            <ServiceCardSkeleton key={i} />
         ))}
      </div>
   );
}
