export default {
  title: 'Tab Section',
  name: 'tabSection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    }, 
    {
      name: 'description',
      title: 'Description', 
      type: 'blockContent'
    },
    {
      title: 'Tabs',
      name: 'tabs',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'tab'}
        }
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Tab Section`
      }
    }
  }
}