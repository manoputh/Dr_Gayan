export default {
   name: "blogPost",
   title: "Insights (LinkedIn & YouTube)",
   type: "document",
   fields: [
      {
         name: "source",
         title: "Source",
         type: "string",
         options: {
            list: [
               { title: "LinkedIn", value: "linkedin" },
               { title: "YouTube", value: "youtube" },
            ],
            layout: "radio",
         },
         initialValue: "linkedin",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "contentType",
         title: "Content Type",
         type: "string",
         description: "Legacy field. Use Source and External URL instead.",
         options: {
            list: [
               { title: "Article", value: "article" },
               { title: "Video", value: "video" },
            ],
            layout: "radio",
         },
         initialValue: "article",
         hidden: true,
      },
      {
         name: "title",
         title: "Title",
         type: "string",
         description: "Optional. If empty, website attempts preview title extraction for LinkedIn URLs.",
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         description: "Optional. Needed only for internal detail pages.",
         options: {
            source: "title",
            maxLength: 96,
         },
      },
      {
         name: "excerpt",
         title: "Excerpt",
         type: "text",
         description: "Optional. If empty for LinkedIn URLs, website attempts preview description extraction.",
      },
      {
         name: "externalUrl",
         title: "External URL",
         type: "url",
         description: "Paste the LinkedIn post URL or YouTube URL.",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "youtubeUrl",
         title: "YouTube URL",
         type: "url",
         description: "Legacy field. Prefer External URL.",
         hidden: true,
      },
      {
         name: "videoDuration",
         title: "Video Duration",
         type: "string",
         description: "Optional, e.g., '5:30'.",
      },
      {
         name: "mainImage",
         title: "Main Image / Thumbnail",
         type: "image",
         description: "Optional thumbnail override. If empty, website attempts URL-based preview image.",
         options: {
            hotspot: true,
         },
         fields: [
            {
               name: "alt",
               title: "Alt Text",
               type: "string",
            },
         ],
      },

      {
         name: "categories",
         title: "Categories",
         type: "array",
         of: [{ type: "reference", to: [{ type: "category" }] }],
      },
      {
         name: "publishedAt",
         title: "Published At",
         type: "datetime",
         initialValue: () => new Date().toISOString(),
      },
      {
         name: "body",
         title: "Body Content",
         type: "array",
         description: "Optional long-form content for internal insight pages.",
         of: [
            {
               type: "block",
               styles: [
                  { title: "Normal", value: "normal" },
                  { title: "H1", value: "h1" },
                  { title: "H2", value: "h2" },
                  { title: "H3", value: "h3" },
                  { title: "Quote", value: "blockquote" },
               ],
               lists: [
                  { title: "Bullet", value: "bullet" },
                  { title: "Numbered", value: "number" },
               ],
               marks: {
                  decorators: [
                     { title: "Strong", value: "strong" },
                     { title: "Emphasis", value: "em" },
                     { title: "Code", value: "code" },
                  ],
                  annotations: [
                     {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                           {
                              name: "href",
                              type: "url",
                              title: "URL",
                           },
                        ],
                     },
                  ],
               },
            },
            {
               type: "image",
               options: { hotspot: true },
            },
         ],
      },
   ],
   orderings: [
      {
         title: "Published Date, New",
         name: "publishedAtDesc",
         by: [{ field: "publishedAt", direction: "desc" }],
      },
   ],
   preview: {
      select: {
         title: "title",
         source: "source",
         externalUrl: "externalUrl",
      },
      prepare({ title, source, externalUrl }) {
         const sourceLabel = source === "youtube" ? "YouTube" : "LinkedIn";
         return {
            title: title || `${sourceLabel} post`,
            subtitle: externalUrl || `${sourceLabel} insight`,
         };
      },
   },
};
