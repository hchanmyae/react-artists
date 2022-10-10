export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [

    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "stubitle",
      title: "SubTitle",
      type: "string",
    },

    {
      name: "btn",
      title: "Buttom",
      type: "string",
    },

    {
      name: "btn_link",
      title: "ButtomLink",
      type: "url",
    },

    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },

    {
      name: "mobileImage",
      title: "MobileImage",
      type: "image",
      options: {
        hotspot: true,
      }
    },

    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "address",
      title: "Address",
      type: "string",
    },

    // {
    //   name: "socials",
    //   title: "Socials",
    //   type: "array",
    //   of: [{ type: "reference", to: {type: "social"}}]
    // },


  ],
}
