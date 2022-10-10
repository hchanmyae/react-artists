export default {
  name: 'brandLists',
  title: 'Brand Lists',
  type: 'document',
  fields: [

    {
      name: "title",
      title: "Aplphabet",
      type: "string",
    },

    {
      name: "brandLists",
      title: "Brand Lists",
      type: 'array',
      of: [{type: 'string'}]
    },





  ],
}
