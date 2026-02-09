export default {
   name: "program",
   title: "Programs",
   type: "document",
   fields: [
      {
         name: "title",
         title: "Program Title",
         type: "string",
         description: 'e.g., "Think Like a Scientist"',
         validation: (Rule) => Rule.required(),
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: { source: "title", maxLength: 96 },
         validation: (Rule) => Rule.required(),
      },
      {
         name: "description",
         title: "Short Description",
         type: "text",
         rows: 3,
         description: "One-liner or tagline shown in cards / previews.",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "longDescription",
         title: "Full Description",
         type: "array",
         of: [{ type: "block" }],
         description: "Rich text overview of the program vision and purpose.",
      },
      {
         name: "heroImage",
         title: "Hero Image",
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
         name: "targetAudience",
         title: "Who It's For",
         type: "array",
         of: [{ type: "string" }],
         description: "List of target audience segments, e.g., 'Mid-career professionals', 'Engineering leaders'",
      },
      {
         name: "benefits",
         title: "Benefits & Outcomes",
         type: "array",
         of: [{ type: "string" }],
         description: "Key outcomes participants will gain.",
      },
      {
         name: "status",
         title: "Status",
         type: "string",
         options: {
            list: [
               { title: "Active", value: "active" },
               { title: "Upcoming", value: "upcoming" },
               { title: "Archived", value: "archived" },
            ],
            layout: "radio",
         },
         initialValue: "upcoming",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "enrollmentEnabled",
         title: "Program-Level Enrollment Enabled",
         type: "boolean",
         description: "Allow users to enroll in the entire program (not just individual courses).",
         initialValue: false,
      },
      {
         name: "ctaText",
         title: "CTA Button Text",
         type: "string",
         initialValue: "Enroll Now",
      },
   ],
   preview: {
      select: { title: "title", subtitle: "status" },
   },
};
