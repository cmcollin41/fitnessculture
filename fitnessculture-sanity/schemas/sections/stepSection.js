export default {
  title: 'Step Section',
  name: 'stepSection',
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
      title: 'Steps',
      name: 'steps',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'step'}
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
        title: `Step Section`
      }
    }
  }
}