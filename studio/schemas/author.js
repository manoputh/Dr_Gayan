export default {
   name: "author",
   title: "Authors",
   type: "document",
   fields: [
      {
         name: "name",
         title: "Name",
         type: "string",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: {
            source: "name",
            maxLength: 96,
         },
      },
      {
         name: "image",
         title: "Profile Image",
         type: "image",
         options: {
            hotspot: true,
         },
      },
      {
         name: "bio",
         title: "Bio",
         type: "text",
         description: "Short biography",
      },
   ],
};
