import { sanityFetch } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";
import { enrichInsightsWithLinkedInPreview } from "@/lib/insights/linkedinPreview";
import InsightsHub from "./InsightsHub";

export const metadata = {
   title: "Insights | LinkedIn & YouTube",
   description:
      "EU AI Act analysis, AI governance case studies, and production AI insights from LinkedIn posts and YouTube videos.",
};

export default async function InsightsPage() {
   const insights = await sanityFetch({
      query: blogPostsQuery,
   }).catch(() => []);

   const enrichedInsights = await enrichInsightsWithLinkedInPreview(insights);

   return <InsightsHub insights={enrichedInsights} />;
}
