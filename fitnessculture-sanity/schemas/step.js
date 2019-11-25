export default {
  name: 'step',
  title: 'Step',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      tags: 'tags',
      media: 'icon'
    },
    prepare(selection) {
      const {tags} = selection
      return Object.assign({}, selection, {
        subtitle: tags && `${tags}`
      })
    }
  }
}