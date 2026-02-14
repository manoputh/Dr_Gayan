export default {
   name: "hero",
   title: "Hero Section",
   type: "document",
   fields: [
      {
         name: "headline",
         title: "Headline",
         type: "string",
         description: "Bold main headline (e.g., AI/ML Consulting & Innovation)",
         validation: (Rule) => Rule.required().max(100),
      },
      {
         name: "subheadline",
         title: "Subheadline",
         type: "text",
         description: "Value proposition text below the headline",
         validation: (Rule) => Rule.required().max(200),
      },
      {
         name: "expertiseTags",
         title: "Expertise Tags",
         type: "array",
         description: "Strategic descriptors/badges (e.g., Fortune 500 Advisory, ML Infrastructure)",
         of: [{ type: "string" }],
         validation: (Rule) => Rule.max(5),
      },

      {
         name: "portraitImage",
         title: "Professional Portrait",
         type: "image",
         description: "High-quality professional portrait (half-body, dark background, confident posture)",
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required(),
      },
   ],
};
