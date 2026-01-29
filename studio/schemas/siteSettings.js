export default {
   name: "siteSettings",
   title: "Site Settings",
   type: "document",
   fields: [
      {
         name: "about",
         title: "About Section",
         type: "text",
         description: "Professional bio and company description",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "tagline",
         title: "Tagline",
         type: "string",
         description: "Short tagline or motto",
      },
      {
         name: "email",
         title: "Contact Email",
         type: "string",
         validation: (Rule) => Rule.email(),
      },
      {
         name: "phone",
         title: "Phone Number",
         type: "string",
      },
      {
         name: "socialLinks",
         title: "Social Media Links",
         type: "array",
         of: [
            {
               type: "object",
               fields: [
                  {
                     name: "platform",
                     title: "Platform",
                     type: "string",
                     options: {
                        list: [
                           { title: "LinkedIn", value: "linkedin" },
                           { title: "Facebook", value: "facebook" },
                           { title: "YouTube", value: "youtube" },
                           { title: "Twitter/X", value: "twitter" },
                           { title: "GitHub", value: "github" },
                        ],
                     },
                  },
                  {
                     name: "url",
                     title: "URL",
                     type: "url",
                  },
               ],
            },
         ],
      },
   ],
};
