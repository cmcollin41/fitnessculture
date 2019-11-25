export default {
  title: 'Guarantee Section',
  name: 'guaranteeSection',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    }, 
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }, 
    {
      title: 'Guarantees',
      name: 'guarantees',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'guarantee'}
        }
      ]
    },
    {
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [
        {type: 'basicCTA'},
        {type: 'downloadCTA'},
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Guarantee Section`
      }
    }
  }
}