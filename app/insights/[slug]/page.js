import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { sanityFetch, urlFor } from "@/lib/sanity";
import { singleBlogPostQuery } from "@/lib/queries";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { portableTextComponents } from "@/components/PortableTextComponents";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
   const post = await sanityFetch({
      query: singleBlogPostQuery,
      params: { slug: params.slug },
   }).catch(() => null);

   if (!post) {
      return {
         title: "Insight Not Found",
      };
   }

   return {
      title: `${post.title} | Insights`,
      description:
         post.excerpt ||
         "Executive insights on AI Audit readiness, EU AI Act compliance, and production AI governance.",
   };
}

export default async function InsightPage({ params }) {
   // Fetch the selected insight
   const post = await sanityFetch({
      query: singleBlogPostQuery,
      params: { slug: params.slug },
   }).catch(() => null);

   if (!post) {
      notFound();
   }

   // Format date
   const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
   };

   return (
      <article className="py-20">
         <Container>
            {/* Back Button */}
            <div className="mb-8">
               <Link href="/insights" className="text-electric hover:underline flex items-center gap-2">
                  ← Back to Insights
               </Link>
            </div>

            {/* Article Header */}
            <header className="mb-12">
               <p className="text-xs uppercase tracking-[0.14em] text-electric/80 mb-3">Insight</p>

               {/* Categories */}
               {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                     {post.categories.map((category) => (
                        <span
                           key={category._id}
                           className="text-xs px-3 py-1 bg-electric/10 text-electric rounded-full uppercase tracking-[0.08em]">
                           {category.title}
                        </span>
                     ))}
                  </div>
               )}

               {/* Title */}
               <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>

               {/* Meta Info */}
               <div className="flex items-center gap-4 text-gray-400 mb-6">
                  <time>{formatDate(post.publishedAt)}</time>
                  {post.author && (
                     <>
                        <span>•</span>
                        <span>By {post.author.name}</span>
                     </>
                  )}
               </div>

               {/* Featured Image */}
               {post.mainImage && (
                  <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
                     <Image
                        src={urlFor(post.mainImage).width(1200).height(600).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                        priority
                     />
                  </div>
               )}
            </header>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto">
               <div className="prose prose-invert max-w-none">
                  {post.body && <PortableText value={post.body} components={portableTextComponents} />}
               </div>

               {/* Author Bio */}
               {post.author && post.author.bio && (
                  <div className="mt-12 p-6 bg-charcoal rounded-lg border border-slate/20">
                     <div className="flex items-start gap-4">
                        {post.author.image && (
                           <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                 src={urlFor(post.author.image).width(64).height(64).url()}
                                 alt={post.author.name}
                                 fill
                                 className="object-cover"
                              />
                           </div>
                        )}
                        <div>
                           <h3 className="text-xl font-semibold text-white mb-2">About {post.author.name}</h3>
                           <p className="text-platinum/70">{post.author.bio}</p>
                        </div>
                     </div>
                  </div>
               )}

               {/* CTA */}
               <div className="mt-12 text-center bg-gradient-to-r from-electric/8 to-gold/8 p-8 rounded-lg border border-slate/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                     Need clarity on AI Audit or EU AI Act readiness?
                  </h3>
                  <p className="text-platinum/75 mb-6">
                     Book a 15-minute discovery call to prioritize compliance exposure, technical risk, and practical
                     next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button href="/contact" variant="primary">
                        Book Discovery Call
                     </Button>
                     <Button href="/tools" variant="secondary">
                        Take Free Diagnostic
                     </Button>
                  </div>
               </div>
            </div>
         </Container>
      </article>
   );
}
