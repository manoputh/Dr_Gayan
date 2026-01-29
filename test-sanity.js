// Quick test to check Sanity connection
import { createClient } from "@sanity/client";

const client = createClient({
   projectId: "01snurzm",
   dataset: "production",
   apiVersion: "2024-01-29",
   useCdn: false,
});

async function testConnection() {
   console.log("Testing Sanity connection...");
   console.log("Project ID:", "01snurzm");
   console.log("Dataset:", "production");

   try {
      // Fetch hero content with ALL fields
      console.log("\n--- Hero Content ---");
      const hero = await client.fetch('*[_type == "hero"][0]');
      console.log("Hero document:");
      console.log(JSON.stringify(hero, null, 2));

      // Check for draft version
      console.log("\n--- Draft Hero ---");
      const draftHero = await client.fetch('*[_id == "drafts.f1f53c2b-4ed9-4afd-9ddc-0a43ad2173b2"][0]');
      if (draftHero) {
         console.log("DRAFT exists (not published):");
         console.log(JSON.stringify(draftHero, null, 2));
      } else {
         console.log("No draft found");
      }
   } catch (error) {
      console.error("ERROR:", error.message);
   }
}

testConnection();
