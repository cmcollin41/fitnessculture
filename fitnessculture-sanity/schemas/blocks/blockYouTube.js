export default {
  title: 'Block YouTube',
  name: 'blockYouTube',
  type: 'document',
  fields: [
    {
      name: 'youtubeid',
      title: 'YouTube ID',
      type: 'string'
    },
  ],
  preview: {
    prepare() {
      return {
        title: `YouTube Video`
      }
    }
  }
}