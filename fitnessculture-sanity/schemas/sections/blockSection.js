export default {
  title: 'Block Section',
  name: 'blockSection',
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
        {type: 'blockYouTube'},
        {type: 'dripForm'}
      ],
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Block Section`
      }
    }
  }
}