export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Category',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
