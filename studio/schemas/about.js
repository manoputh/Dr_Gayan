export default {
   name: "about",
   title: "About Page",
   type: "document",
   fields: [
      {
         name: "name",
         title: "Full Name",
         type: "string",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "title",
         title: "Professional Title",
         type: "string",
         description: "e.g., Principal AI/ML Architect & Strategic Consultant",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "portrait",
         title: "Portrait Photo",
         type: "image",
         options: { hotspot: true },
         fields: [
            {
               name: "alt",
               title: "Alt Text",
               type: "string",
            },
         ],
      },
      {
         name: "bio",
         title: "Professional Bio",
         type: "array",
         of: [{ type: "block" }],
         description: "Rich text bio — keep it concise, confident, and industry-focused.",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "industryExperience",
         title: "Industry Experience",
         type: "array",
         of: [
            {
               type: "object",
               fields: [
                  {
                     name: "industry",
                     title: "Industry",
                     type: "string",
                     validation: (Rule) => Rule.required(),
                  },
                  {
                     name: "description",
                     title: "Brief Description",
                     type: "text",
                     rows: 2,
                  },
               ],
               preview: {
                  select: { title: "industry" },
               },
            },
         ],
      },
      {
         name: "expertise",
         title: "Areas of Expertise",
         type: "array",
         of: [{ type: "string" }],
         description: "List key areas — e.g., Machine Learning Architecture, NLP, MLOps",
      },
      {
         name: "philosophy",
         title: "Professional Philosophy",
         type: "text",
         description: "A short statement about your approach to work and consulting.",
         rows: 4,
      },
      {
         name: "ctaText",
         title: "CTA Button Text",
         type: "string",
         initialValue: "Schedule a Consultation",
      },
      {
         name: "ctaLink",
         title: "CTA Button Link",
         type: "string",
         initialValue: "/contact",
      },
   ],
   preview: {
      select: { title: "name", subtitle: "title" },
   },
};
