export default {
  title: 'Hero Section',
  name: 'heroSection',
  type: 'object',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {type: 'blockText'},
        {type: 'blockImage'},
        {type: 'blockVideo'},
        {type: 'dripForm'}
      ],
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Hero Section`
      }
    }
  }
}