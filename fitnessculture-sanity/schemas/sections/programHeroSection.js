export default {
  title: 'Program Hero Section',
  name: 'programHeroSection',
  type: 'object',
  fields: [
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
        title: `Program Hero Section`
      }
    }
  }
}