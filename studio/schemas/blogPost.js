export default {
   name: "blogPost",
   title: "Insights (Articles & Videos)",
   type: "document",
   fields: [
      {
         name: "contentType",
         title: "Content Type",
         type: "string",
         options: {
            list: [
               { title: "Article", value: "article" },
               { title: "Video", value: "video" },
            ],
            layout: "radio",
         },
         initialValue: "article",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "featured",
         title: "Featured Content",
         type: "boolean",
         description: "Feature this content in prominent positions (larger cards, hero sections)",
         initialValue: false,
      },
      {
         name: "title",
         title: "Title",
         type: "string",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         description: "URL-friendly version of the title",
         options: {
            source: "title",
            maxLength: 96,
         },
         validation: (Rule) => Rule.required(),
      },
      {
         name: "excerpt",
         title: "Excerpt",
         type: "text",
         description: "Short summary for preview cards",
        
      },
      {
         name: "youtubeUrl",
         title: "YouTube URL",
         type: "url",
         description: "Only for video content type",
         hidden: ({ document }) => document?.contentType !== "video",
      },
      {
         name: "videoDuration",
         title: "Video Duration",
         type: "string",
         description: "e.g., '5:30' (only for videos)",
         hidden: ({ document }) => document?.contentType !== "video",
      },
      {
         name: "mainImage",
         title: "Main Image / Thumbnail",
         type: "image",
         description: "Article featured image or custom video thumbnail",
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
         name: "author",
         title: "Author",
         type: "reference",
         to: [{ type: "author" }],
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
         description: "Only required for articles",
         hidden: ({ document }) => document?.contentType === "video",
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
};
