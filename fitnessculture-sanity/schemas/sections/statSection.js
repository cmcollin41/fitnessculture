export default {
  title: 'Stat Section',
  name: 'statSection',
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
      title: 'Stats',
      name: 'stats',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'stat'}
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
        title: `Stat Section`
      }
    }
  }
}