export default {
  name: 'exercise',
  title: 'Exercise',
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
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
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