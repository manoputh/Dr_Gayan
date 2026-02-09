export default {
   name: "course",
   title: "Courses",
   type: "document",
   fields: [
      {
         name: "title",
         title: "Course Title",
         type: "string",
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
         validation: (Rule) => Rule.required(),
      },
      {
         name: "image",
         title: "Course Image",
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
         name: "program",
         title: "Program",
         type: "reference",
         to: [{ type: "program" }],
         description: "The program this course belongs to (optional).",
      },
      {
         name: "duration",
         title: "Duration",
         type: "string",
         description: "e.g., 6 weeks, 3 months",
      },
      {
         name: "level",
         title: "Level",
         type: "string",
         options: {
            list: [
               { title: "Beginner", value: "beginner" },
               { title: "Intermediate", value: "intermediate" },
               { title: "Advanced", value: "advanced" },
            ],
         },
      },
      {
         name: "price",
         title: "Price (USD)",
         type: "number",
         description: "Leave blank for free courses.",
      },
      {
         name: "body",
         title: "Full Description / Syllabus",
         type: "array",
         of: [{ type: "block" }],
      },
      {
         name: "enrollmentEnabled",
         title: "Enrollment Open",
         type: "boolean",
         initialValue: true,
      },
      {
         name: "order",
         title: "Display Order",
         type: "number",
         description: "Order within the program listing.",
      },
   ],
   orderings: [
      {
         title: "Display Order",
         name: "orderAsc",
         by: [{ field: "order", direction: "asc" }],
      },
   ],
   preview: {
      select: {
         title: "title",
         subtitle: "duration",
         media: "image",
      },
   },
};
