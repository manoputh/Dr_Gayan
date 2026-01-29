import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { sanityFetch, urlFor } from "@/lib/sanity";
import { singleBlogPostQuery } from "@/lib/queries";
import Container from "@/components/Container";
import Button from "@/components/Button";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
   const post = await sanityFetch({
      query: singleBlogPostQuery,
      params: { slug: params.slug },
   }).catch(() => null);

   if (!post) {
      return {
         title: "Post Not Found",
      };
   }

   return {
      title: `${post.title} | AI/ML Consulting Blog`,
      description: post.excerpt,
   };
}

export default async function BlogPostPage({ params }) {
   // Fetch the blog post
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

   // Portable Text components for rich text rendering
   const portableTextComponents = {
      block: {
         h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 text-white">{children}</h1>,
         h2: ({ children }) => <h2 className="text-3xl font-bold mb-3 mt-8 text-white">{children}</h2>,
         h3: ({ children }) => <h3 className="text-2xl font-bold mb-2 mt-6 text-white">{children}</h3>,
         normal: ({ children }) => <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>,
         blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-electric-blue pl-4 italic my-6 text-gray-400">
               {children}
            </blockquote>
         ),
      },
      list: {
         bullet: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-300">{children}</ul>,
         number: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-300">{children}</ol>,
      },
      marks: {
         strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
         em: ({ children }) => <em className="italic">{children}</em>,
         code: ({ children }) => (
            <code className="bg-dark-tertiary px-2 py-1 rounded text-electric-blue font-mono text-sm">{children}</code>
         ),
         link: ({ children, value }) => (
            <a
               href={value.href}
               target="_blank"
               rel="noopener noreferrer"
               className="text-electric-blue hover:underline">
               {children}
            </a>
         ),
      },
      types: {
         image: ({ value }) => (
            <div className="my-8">
               <Image
                  src={urlFor(value).width(800).height(600).url()}
                  alt={value.alt || "Blog post image"}
                  width={800}
                  height={600}
                  className="rounded-lg"
               />
            </div>
         ),
      },
   };

   return (
      <article className="py-20">
         <Container>
            {/* Back Button */}
            <div className="mb-8">
               <Link href="/blog" className="text-electric-blue hover:underline flex items-center gap-2">
                  ← Back to Blog
               </Link>
            </div>

            {/* Article Header */}
            <header className="mb-12">
               {/* Categories */}
               {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                     {post.categories.map((category) => (
                        <span
                           key={category._id}
                           className="text-xs px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full">
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
                  <div className="mt-12 p-6 bg-dark-secondary rounded-lg border border-graphite/30">
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
                           <h3 className="text-xl font-bold text-white mb-2">About {post.author.name}</h3>
                           <p className="text-gray-400">{post.author.bio}</p>
                        </div>
                     </div>
                  </div>
               )}

               {/* CTA */}
               <div className="mt-12 text-center bg-gradient-to-r from-electric-blue/10 to-gold-accent/10 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Interested in Our Services?</h3>
                  <p className="text-gray-300 mb-6">Let's discuss how we can help transform your business with AI/ML</p>
                  <Button href="/contact" variant="primary">
                     Get in Touch
                  </Button>
               </div>
            </div>
         </Container>
      </article>
   );
}
