export default {
  name: 'artists',
  title: 'Artists',
  type: 'document',
  fields: [

    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "Image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },




  ],
}
