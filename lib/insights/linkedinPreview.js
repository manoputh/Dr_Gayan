import "server-only";

const LINKEDIN_SOURCE_LABEL = "LinkedIn";
const DEFAULT_REVALIDATE_SECONDS = 60 * 60 * 6;

function decodeHtmlEntities(value) {
   if (!value || typeof value !== "string") return "";

   return value
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&nbsp;/g, " ");
}

function normalizeText(value, maxLength = 220) {
   if (!value || typeof value !== "string") return "";
   const cleaned = decodeHtmlEntities(value).replace(/\s+/g, " ").trim();
   if (cleaned.length <= maxLength) return cleaned;
   return `${cleaned.slice(0, maxLength).trimEnd()}...`;
}

function escapeRegExp(value) {
   return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractMetaContent(html, key) {
   const escaped = escapeRegExp(key);

   const propertyFirst = new RegExp(
      `<meta[^>]*(?:property|name)=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`,
      "i",
   );

   const contentFirst = new RegExp(
      `<meta[^>]*content=["']([^"']+)["'][^>]*(?:property|name)=["']${escaped}["'][^>]*>`,
      "i",
   );

   const match = html.match(propertyFirst) || html.match(contentFirst);
   return match?.[1] || "";
}

function sanitizeLinkedInUrl(url) {
   if (!url || typeof url !== "string") return null;

   try {
      const parsed = new URL(url);
      if (!parsed.hostname.toLowerCase().includes("linkedin.com")) return null;
      return parsed.toString();
   } catch {
      return null;
   }
}

async function fetchLinkedInPreviewFromUrl(url) {
   const safeUrl = sanitizeLinkedInUrl(url);
   if (!safeUrl) return null;

   try {
      const response = await fetch(safeUrl, {
         headers: {
            "User-Agent":
               "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            Accept: "text/html,application/xhtml+xml",
         },
         next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
      });

      if (!response.ok) return null;
      const html = await response.text();

      const title =
         normalizeText(extractMetaContent(html, "og:title"), 120) ||
         normalizeText(extractMetaContent(html, "twitter:title"), 120);

      const excerpt =
         normalizeText(extractMetaContent(html, "og:description"), 220) ||
         normalizeText(extractMetaContent(html, "twitter:description"), 220) ||
         normalizeText(extractMetaContent(html, "description"), 220);

      const imageUrl =
         extractMetaContent(html, "og:image") ||
         extractMetaContent(html, "twitter:image") ||
         extractMetaContent(html, "twitter:image:src") ||
         "";

      if (!title && !excerpt && !imageUrl) return null;

      return {
         title: title || "",
         excerpt: excerpt || "",
         imageUrl: imageUrl || "",
         sourceLabel: LINKEDIN_SOURCE_LABEL,
      };
   } catch {
      return null;
   }
}

export function isLinkedInInsight(item) {
   const source = String(item?.source || "").toLowerCase();
   const externalUrl = String(item?.externalUrl || item?.linkedinUrl || "").toLowerCase();

   return source === "linkedin" || externalUrl.includes("linkedin.com");
}

export async function enrichInsightsWithLinkedInPreview(insights = []) {
   if (!Array.isArray(insights) || insights.length === 0) return [];

   const enriched = await Promise.all(
      insights.map(async (item) => {
         const externalUrl = item?.externalUrl || item?.linkedinUrl || "";

         if (!isLinkedInInsight(item) || !externalUrl) {
            return item;
         }

         const preview = await fetchLinkedInPreviewFromUrl(externalUrl);
         return {
            ...item,
            preview,
         };
      }),
   );

   return enriched;
}
