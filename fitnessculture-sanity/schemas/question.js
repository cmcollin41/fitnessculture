export default {
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string'
    },
    {
      name: 'answer',
      title: 'Answer',
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
      title: 'question',
      tags: 'tags'
    },
    prepare(selection) {
      const {tags} = selection
      return Object.assign({}, selection, {
        subtitle: tags && `${tags}`
      })
    }
  }
}