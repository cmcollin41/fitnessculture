export default {
  title: 'Block Image',
  name: 'blockImage',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Image`
      }
    }
  }
}