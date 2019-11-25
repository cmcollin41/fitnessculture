export default {
  name: 'proof',
  title: 'Proof',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}