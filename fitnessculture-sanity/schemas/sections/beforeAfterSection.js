export default {
  title: 'Before and After Section',
  name: 'beforeAfterSection',
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
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'testimonial'}
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
        title: `Before and After Section`
      }
    }
  }
}