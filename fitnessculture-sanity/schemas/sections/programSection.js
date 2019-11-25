export default {
  title: 'Program Section',
  name: 'programSection',
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
      title: 'Programs',
      name: 'programs',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'program'}
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
        title: `Programs Section`
      }
    }
  }
}