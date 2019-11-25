export default {
  title: 'Block Video',
  name: 'blockVideo',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'file'
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Video`
      }
    }
  }
}