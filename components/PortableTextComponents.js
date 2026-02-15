import Image from "next/image";
import { urlFor } from "@/lib/sanity";

/**
 * Reusable PortableText components for rendering Sanity rich text content
 * across the application with consistent styling
 */
export const portableTextComponents = {
   block: {
      h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-8">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 mt-6">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold text-electric mb-3 mt-5">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg font-semibold text-white mb-2 mt-4">{children}</h4>,
      normal: ({ children }) => <p className="text-platinum/80 mb-4 leading-relaxed">{children}</p>,
      blockquote: ({ children }) => (
         <blockquote className="border-l-4 border-electric/40 pl-5 italic my-6 text-platinum/70">{children}</blockquote>
      ),
   },
   marks: {
      strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
      em: ({ children }) => <em className="italic text-platinum">{children}</em>,
      code: ({ children }) => (
         <code className="bg-obsidian px-2 py-1 rounded text-electric font-mono text-sm">{children}</code>
      ),
      link: ({ value, children }) => (
         <a
            href={value?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric hover:text-gold transition-colors underline">
            {children}
         </a>
      ),
   },
   list: {
      bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 text-platinum/80">{children}</ul>,
      number: ({ children }) => (
         <ol className="list-decimal list-inside space-y-2 mb-4 text-platinum/80">{children}</ol>
      ),
   },
   listItem: {
      bullet: ({ children }) => <li className="ml-4">{children}</li>,
      number: ({ children }) => <li className="ml-4">{children}</li>,
   },
   types: {
      image: ({ value }) => {
         if (!value?.asset) return null;
         return (
            <div className="my-8 rounded-lg overflow-hidden">
               <Image
                  src={urlFor(value).width(1200).height(800).url()}
                  alt={value.alt || "Blog post image"}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
               />
               {value.caption && <p className="text-sm text-steel mt-2 text-center italic">{value.caption}</p>}
            </div>
         );
      },
   },
};
