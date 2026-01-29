import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
export const client = createClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-29",
   useCdn: false, // Disabled for development - see fresh content immediately
});

// Helper function to generate image URLs from Sanity
const builder = imageUrlBuilder(client);

export function urlFor(source) {
   return builder.image(source);
}

// Reusable fetch function for Sanity queries
export async function sanityFetch({ query, params = {} }) {
   return client.fetch(query, params);
}
