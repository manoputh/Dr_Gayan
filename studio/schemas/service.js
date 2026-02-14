export default {
   name: "service",
   title: "Consulting Services",
   type: "document",
   fields: [
      {
         name: "title",
         title: "Service Title",
         type: "string",
         validation: (Rule) => Rule.required(),
      },
      {
         name: "description",
         title: "Description",
         type: "text",
         description: "Brief description of the service",
         validation: (Rule) => Rule.required().max(500),
      },

      {
         name: "features",
         title: "Key Features",
         type: "array",
         of: [{ type: "string" }],
         description: "List of key features or deliverables",
      },
      {
         name: "order",
         title: "Display Order",
         type: "number",
         description: "Order in which this service appears",
      },
   ],
   orderings: [
      {
         title: "Display Order",
         name: "orderAsc",
         by: [{ field: "order", direction: "asc" }],
      },
   ],
};
