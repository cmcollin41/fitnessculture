export default {
  title: 'Pricing Section',
  name: 'pricingSection',
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
      title: 'Pricing',
      name: 'pricing',
      type: 'array',
      of: [
        {
          type: 'reference', 
          to: {type: 'price'}
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
        title: `Pricing Section`
      }
    }
  }
}