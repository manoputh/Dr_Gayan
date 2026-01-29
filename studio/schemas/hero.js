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
         name: "ctaText",
         title: "Primary CTA Button Text",
         type: "string",
         description: "Main call-to-action button text",
         initialValue: "Book Consultation",
      },
      {
         name: "ctaLink",
         title: "Primary CTA Link",
         type: "string",
         description: "URL or path for primary CTA",
         initialValue: "/consulting",
      },
      {
         name: "secondaryCtaText",
         title: "Secondary CTA Button Text",
         type: "string",
         initialValue: "Contact Us",
      },
      {
         name: "secondaryCtaLink",
         title: "Secondary CTA Link",
         type: "string",
         initialValue: "/contact",
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
      {
         name: "backgroundImage",
         title: "Background Image",
         type: "image",
         description: "Optional hero background image",
         options: {
            hotspot: true,
         },
      },
   ],
};
