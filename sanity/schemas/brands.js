export default {
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [

    {
      name: "title",
      title: "Aplphabet",
      type: "string",
    },

    {
      name: "brand",
      title: "Brand",
      type: 'array',
      of: [{type: 'string'}]
    },





  ],
}
